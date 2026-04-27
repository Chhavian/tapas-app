import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert, Clipboard } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Nav from '../components/Nav';
import ProductCard from '../components/ProductCard';
import { Colors, Fonts } from '../constants/tokens';
import { products } from '../constants/products';

export default function Capsule() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const handleCopy = () => {
    Clipboard.setString('https://tapas.in');
    Alert.alert('Copied.');
  };

  return (
    <View style={s.root}>
      <Nav dark />
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Confirmation */}
        <View style={s.hero}>
          <Text style={s.heroLabel}>You're one of us now.</Text>
          <Text style={s.heroHeadline}>You're in. The capsule{'\n'}is yours.</Text>
          <Text style={s.heroBody}>
            We'll let you know the moment Tāpas is ready.{'\n'}Until then — keep going.
          </Text>
          <Text style={s.heroNote}>No noise. Just the launch, when it's time.</Text>
        </View>

        {/* Phase 1 collection */}
        <View style={s.collection}>
          <Text style={s.collectionPhase}>Phase 1</Text>
          <Text style={s.collectionTitle}>Performance</Text>
          <Text style={s.collectionSub}>Strength, running, training. Men and women. The core of what Tāpas is.</Text>
          <View style={s.grid}>
            {products.filter(p => p.phase === 1).map((p, i) => (
              <View key={p.slug} style={[s.gridItem, i % 2 === 1 && s.gridItemRight]}>
                <ProductCard product={p} dark />
              </View>
            ))}
          </View>
        </View>

        {/* Phase 2 teaser */}
        <View style={s.phaseLight}>
          <Text style={s.phaseLightLabel}>Phase 2</Text>
          <Text style={s.phaseLightTitle}>Recovery{'\n'}&amp; Lounge</Text>
          <Text style={s.phaseLightBody}>Co-ords, post-training sets, travel wear. The stillness after the heat. Coming once Phase 1 launches.</Text>
          <View style={[s.phaseBlock, { backgroundColor: Colors.deepOlive }]} />
        </View>

        {/* Phase 3 teaser */}
        <View style={s.phaseDark}>
          <Text style={s.phaseDarkLabel}>Phase 3</Text>
          <Text style={s.phaseDarkTitle}>Resort{'\n'}&amp; Swim</Text>
          <Text style={s.phaseDarkBody}>Bikini, board shorts, resort wear. Discipline meets leisure.</Text>
          <View style={[s.phaseBlock, { backgroundColor: Colors.cobalt }]} />
        </View>

        {/* Invite */}
        <View style={[s.invite, { paddingBottom: insets.bottom + 60 }]}>
          <Text style={s.inviteHeadline}>Share the standard.</Text>
          <Text style={s.inviteBody}>Know someone who belongs here? Send them the link.</Text>
          <TouchableOpacity style={s.btn} onPress={handleCopy}>
            <Text style={s.btnText}>Copy invite link</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.obsidian },

  hero: { backgroundColor: Colors.obsidian, padding: 20, paddingTop: 48, paddingBottom: 48, gap: 16 },
  heroLabel: { fontFamily: Fonts.body, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(242,237,228,0.4)' },
  heroHeadline: { fontFamily: Fonts.displayItalic, fontSize: 44, color: Colors.rawCotton, lineHeight: 50, letterSpacing: -0.5 },
  heroBody: { fontFamily: Fonts.body, fontSize: 16, color: 'rgba(242,237,228,0.7)', lineHeight: 26 },
  heroNote: { fontFamily: Fonts.body, fontSize: 11, letterSpacing: 1.5, color: 'rgba(242,237,228,0.3)' },

  collection: { backgroundColor: Colors.obsidian, padding: 20, paddingBottom: 48, gap: 12, borderTopWidth: 0.5, borderTopColor: 'rgba(242,237,228,0.08)' },
  collectionPhase: { fontFamily: Fonts.body, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(242,237,228,0.35)' },
  collectionTitle: { fontFamily: Fonts.displayItalic, fontSize: 32, color: Colors.rawCotton },
  collectionSub: { fontFamily: Fonts.body, fontSize: 14, color: 'rgba(242,237,228,0.5)', lineHeight: 22 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginTop: 8 },
  gridItem: { width: '47%' },
  gridItemRight: {},

  phaseLight: { backgroundColor: Colors.rawCotton, padding: 20, paddingVertical: 48, gap: 12 },
  phaseLightLabel: { fontFamily: Fonts.body, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(20,20,20,0.35)' },
  phaseLightTitle: { fontFamily: Fonts.displayItalic, fontSize: 40, color: Colors.obsidian, lineHeight: 44 },
  phaseLightBody: { fontFamily: Fonts.body, fontSize: 14, color: 'rgba(20,20,20,0.6)', lineHeight: 22 },
  phaseBlock: { height: 160, marginTop: 8 },

  phaseDark: { backgroundColor: Colors.obsidian, padding: 20, paddingVertical: 48, gap: 12, borderTopWidth: 0.5, borderTopColor: 'rgba(242,237,228,0.08)' },
  phaseDarkLabel: { fontFamily: Fonts.body, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(242,237,228,0.35)' },
  phaseDarkTitle: { fontFamily: Fonts.displayItalic, fontSize: 40, color: Colors.rawCotton, lineHeight: 44 },
  phaseDarkBody: { fontFamily: Fonts.body, fontSize: 14, color: 'rgba(242,237,228,0.6)', lineHeight: 22 },

  invite: { backgroundColor: Colors.obsidian, padding: 20, paddingTop: 48, gap: 16, borderTopWidth: 0.5, borderTopColor: 'rgba(242,237,228,0.08)' },
  inviteHeadline: { fontFamily: Fonts.displayItalic, fontSize: 36, color: Colors.rawCotton, lineHeight: 40 },
  inviteBody: { fontFamily: Fonts.body, fontSize: 15, color: 'rgba(242,237,228,0.55)', lineHeight: 24 },
  btn: { backgroundColor: Colors.cobalt, paddingVertical: 14, paddingHorizontal: 28, alignSelf: 'flex-start', borderRadius: 2 },
  btnText: { fontFamily: Fonts.body, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: Colors.rawCotton },
});
