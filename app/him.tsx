import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Nav from '../components/Nav';
import ProductCard from '../components/ProductCard';
import { Colors, Fonts } from '../constants/tokens';
import { products } from '../constants/products';

export default function Him() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const hims = products.filter(p => p.gender === 'Him' || p.gender === 'Her & Him');

  return (
    <View style={s.root}>
      <Nav />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={s.header}>
          <Text style={s.title}>Him.</Text>
          <Text style={s.sub}>Phase 1 — Performance. Pre-launch.</Text>
        </View>
        <View style={s.grid}>
          {hims.map((p, i) => (
            <View key={p.slug} style={[s.gridItem, i % 2 === 1 && s.gridItemRight]}>
              <ProductCard product={p} />
            </View>
          ))}
        </View>
        <View style={[s.cta, { paddingBottom: insets.bottom + 40 }]}>
          <Text style={s.ctaCopy}>Products available at launch. Join the membership to be first.</Text>
          <TouchableOpacity style={s.btn} onPress={() => router.push('/')}>
            <Text style={s.btnText}>Become Tāpas.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.rawCotton },
  header: { paddingHorizontal: 20, paddingTop: 40, paddingBottom: 32, gap: 8 },
  title: { fontFamily: Fonts.displayItalic, fontSize: 80, color: Colors.obsidian, lineHeight: 80, letterSpacing: -1 },
  sub: { fontFamily: Fonts.body, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(20,20,20,0.3)' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, paddingHorizontal: 20 },
  gridItem: { width: '47%' },
  gridItemRight: {},
  cta: { paddingHorizontal: 20, paddingTop: 48, gap: 16, borderTopWidth: 0.5, borderTopColor: 'rgba(20,20,20,0.08)', marginTop: 40 },
  ctaCopy: { fontFamily: Fonts.body, fontSize: 14, color: 'rgba(20,20,20,0.45)', lineHeight: 22 },
  btn: { backgroundColor: Colors.cobalt, paddingVertical: 14, paddingHorizontal: 28, alignSelf: 'flex-start', borderRadius: 2 },
  btnText: { fontFamily: Fonts.body, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: Colors.rawCotton },
});
