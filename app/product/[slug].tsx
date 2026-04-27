import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import Nav from '../../components/Nav';
import ProductCard from '../../components/ProductCard';
import { Colors, Fonts, Space } from '../../constants/tokens';
import { products } from '../../constants/products';

export default function ProductDetail() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const product = products.find(p => p.slug === slug);
  const [activeCW, setActiveCW] = useState(0);
  const [openSpec, setOpenSpec] = useState(0);

  if (!product) return null;

  const similar = product.similar
    .map(s => products.find(p => p.slug === s))
    .filter(Boolean) as typeof products;

  const activeColour = product.colourways[activeCW].hex;

  return (
    <View style={s.root}>
      <Nav />
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Hero colour block */}
        <View style={[s.hero, { backgroundColor: activeColour }]}>
          <Text style={[s.heroLabel, { color: product.colourways[activeCW].light ? 'rgba(20,20,20,0.4)' : 'rgba(242,237,228,0.5)' }]}>
            {product.gender}
          </Text>
        </View>

        {/* Detail */}
        <View style={s.detail}>
          <Text style={s.gender}>{product.gender}</Text>
          <Text style={s.name}>{product.name}</Text>
          <Text style={s.tagline}>{product.tagline}</Text>

          {/* Colourways */}
          <View style={s.section}>
            <Text style={s.sectionLabel}>
              Colourway — <Text style={{ color: Colors.obsidian }}>{product.colourways[activeCW].name}</Text>
            </Text>
            <View style={s.swatches}>
              {product.colourways.map((cw, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => setActiveCW(i)}
                  style={[
                    s.swatch,
                    { backgroundColor: cw.hex },
                    cw.light && s.swatchLight,
                    activeCW === i && s.swatchActive,
                  ]}
                />
              ))}
            </View>
          </View>

          {/* Coming soon */}
          <View style={s.comingSoon}>
            <Text style={s.comingSoonLabel}>Coming soon</Text>
            <Text style={s.comingSoonBody}>This product is not yet available. Join the membership to be first to know.</Text>
            <TouchableOpacity style={s.btn} onPress={() => router.push('/')}>
              <Text style={s.btnText}>Become Tāpas.</Text>
            </TouchableOpacity>
          </View>

          {/* Description */}
          <Text style={s.description}>{product.description}</Text>

          {/* Specs accordion */}
          <View style={s.accordion}>
            {product.specs.map((spec, i) => (
              <View key={i} style={[s.accordionItem, i === 0 && s.accordionFirst]}>
                <TouchableOpacity style={s.accordionTrigger} onPress={() => setOpenSpec(openSpec === i ? -1 : i)}>
                  <Text style={s.accordionLabel}>{spec.label}</Text>
                  <Text style={s.accordionIcon}>{openSpec === i ? '−' : '+'}</Text>
                </TouchableOpacity>
                {openSpec === i && <Text style={s.accordionBody}>{spec.body}</Text>}
              </View>
            ))}
          </View>
        </View>

        {/* Similar */}
        {similar.length > 0 && (
          <View style={[s.similar, { paddingBottom: insets.bottom + 40 }]}>
            <Text style={s.similarTitle}>You might also like</Text>
            <View style={s.similarGrid}>
              {similar.map(p => (
                <View key={p.slug} style={s.similarItem}>
                  <ProductCard product={p} />
                </View>
              ))}
            </View>
          </View>
        )}

      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.rawCotton },
  hero: { height: 380, justifyContent: 'flex-end', padding: 20 },
  heroLabel: { fontFamily: Fonts.body, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase' },
  detail: { padding: 20, gap: 24, backgroundColor: Colors.rawCotton },
  gender: { fontFamily: Fonts.body, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(20,20,20,0.4)' },
  name: { fontFamily: Fonts.displayItalic, fontSize: 36, color: Colors.obsidian, lineHeight: 40, letterSpacing: -0.5 },
  tagline: { fontFamily: Fonts.body, fontSize: 15, color: 'rgba(20,20,20,0.5)' },
  section: { gap: 12 },
  sectionLabel: { fontFamily: Fonts.body, fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(20,20,20,0.45)' },
  swatches: { flexDirection: 'row', gap: 8 },
  swatch: { width: 28, height: 28, borderRadius: 14 },
  swatchLight: { borderWidth: 0.5, borderColor: 'rgba(20,20,20,0.2)' },
  swatchActive: { borderWidth: 1.5, borderColor: Colors.obsidian },
  comingSoon: { borderWidth: 0.5, borderColor: 'rgba(20,20,20,0.12)', padding: 20, gap: 12, borderRadius: 2 },
  comingSoonLabel: { fontFamily: Fonts.body, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(20,20,20,0.5)' },
  comingSoonBody: { fontFamily: Fonts.body, fontSize: 14, color: 'rgba(20,20,20,0.6)', lineHeight: 22 },
  btn: { backgroundColor: Colors.cobalt, paddingVertical: 14, paddingHorizontal: 28, alignSelf: 'flex-start', borderRadius: 2 },
  btnText: { fontFamily: Fonts.body, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: Colors.rawCotton },
  description: { fontFamily: Fonts.body, fontSize: 16, color: 'rgba(20,20,20,0.7)', lineHeight: 28 },
  accordion: { borderTopWidth: 0.5, borderTopColor: 'rgba(20,20,20,0.15)' },
  accordionItem: { borderBottomWidth: 0.5, borderBottomColor: 'rgba(20,20,20,0.15)' },
  accordionFirst: {},
  accordionTrigger: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 18 },
  accordionLabel: { fontFamily: Fonts.body, fontSize: 13, letterSpacing: 0.5, color: Colors.obsidian },
  accordionIcon: { fontFamily: Fonts.body, fontSize: 18, color: Colors.obsidian },
  accordionBody: { fontFamily: Fonts.body, fontSize: 13, color: 'rgba(20,20,20,0.6)', lineHeight: 22, paddingBottom: 18 },
  similar: { backgroundColor: Colors.rawCotton, padding: 20, gap: 20, borderTopWidth: 0.5, borderTopColor: 'rgba(20,20,20,0.1)' },
  similarTitle: { fontFamily: Fonts.displayItalic, fontSize: 24, color: Colors.obsidian },
  similarGrid: { flexDirection: 'row', gap: 12 },
  similarItem: { flex: 1 },
});
