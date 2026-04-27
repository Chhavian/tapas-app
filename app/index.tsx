import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import Nav from '../components/Nav';
import ProductCard from '../components/ProductCard';
import { Colors, Fonts, Space } from '../constants/tokens';
import { products } from '../constants/products';

export default function Home() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleJoin = () => {
    if (!email || !email.includes('@')) {
      Alert.alert('Enter a valid email.');
      return;
    }
    setSubmitted(true);
    router.push('/capsule');
  };

  return (
    <View style={s.root}>
      <Nav />
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* ── HERO ── */}
        <View style={s.hero}>
          <View style={s.heroCards}>
            <View style={[s.heroCard, { backgroundColor: Colors.deepOlive, flex: 1.3 }]}>
              <Text style={s.heroCardLabel}>The Pant — Her</Text>
            </View>
            <View style={[s.heroCard, { backgroundColor: Colors.obsidian, flex: 1 }]}>
              <Text style={s.heroCardLabel}>The Tee — Her</Text>
            </View>
            <View style={[s.heroCard, { backgroundColor: Colors.cobalt, flex: 1 }]}>
              <Text style={s.heroCardLabel}>The Bra — Her</Text>
            </View>
          </View>
          <View style={s.heroCopy}>
            <Text style={s.heroHeadline}>
              The heat of{'\n'}discipline.{'\n'}
              <Text style={s.heroHeadlineFaded}>The stillness of{'\n'}intention.</Text>
            </Text>
            <Text style={s.heroBody}>
              Premium activewear for the athlete who trains with seriousness and recovers with intention. India-first. Built to last.
            </Text>
            <TouchableOpacity style={s.btn} onPress={() => router.push('/her')}>
              <Text style={s.btnText}>Become Tāpas.</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── PHILOSOPHY ── */}
        <View style={s.philosophy}>
          <Text style={s.sanskrit}>तपस्</Text>
          <Text style={s.philosophyIntro}>
            The heat generated through disciplined effort. One of the Niyamas in Patanjali's Yoga Sutras. Not a gym brand. Not a yoga brand. The space neither owns.
          </Text>
          {[
            { title: 'Sthira', sub: 'Steadiness', body: 'The interface disappears. Every page has one job. Every interaction is obvious. The user never has to think — they just move.' },
            { title: 'Tapas', sub: 'Precision', body: 'Every element is deliberate. Sharp corners. Thin lines. Specific colours. The design communicates through what it removes, not what it adds.' },
            { title: 'Santosha', sub: 'Sufficiency', body: 'Enough, and nothing more. Whitespace is breathing room. The product needs space to be seen. The words need space to land.' },
          ].map((p, i) => (
            <View key={i} style={[s.principle, i === 0 && s.principleFirst]}>
              <Text style={s.principleTitle}>{p.title}</Text>
              <Text style={s.principleSub}>{p.sub}</Text>
              <Text style={s.principleBody}>{p.body}</Text>
            </View>
          ))}
        </View>

        {/* ── COLLECTION ── */}
        <View style={s.collection}>
          <View style={s.collectionHeader}>
            <Text style={s.collectionTitle}>Phase 1 — Performance</Text>
            <Text style={s.collectionTeaser}>Phase 2 & 3 after membership</Text>
          </View>
          <View style={s.grid}>
            {products.map((p, i) => (
              <View key={p.slug} style={[s.gridItem, i % 2 === 1 && s.gridItemRight]}>
                <ProductCard product={p} />
              </View>
            ))}
          </View>
        </View>

        {/* ── INSPIRATION ── */}
        <View style={s.inspiration}>
          <Text style={s.insLabel}>Built for India</Text>
          <Text style={s.insHeadline}>For the athlete{'\n'}who already knows.</Text>
          <Text style={s.insBody}>
            Urban India. Mumbai, Delhi, Bengaluru, Hyderabad. The ones who buy less and buy better.
          </Text>
          <View style={s.insBlocks}>
            <View style={[s.insBlock, { backgroundColor: Colors.obsidian, flex: 2 }]} />
            <View style={{ flex: 1, gap: 4 }}>
              <View style={[s.insBlock, { backgroundColor: Colors.deepOlive }]} />
              <View style={[s.insBlock, { backgroundColor: Colors.crimson }]} />
            </View>
            <View style={[s.insBlock, { backgroundColor: Colors.cobalt, flex: 1 }]} />
          </View>
        </View>

        {/* ── MEMBERSHIP ── */}
        <View style={[s.membership, { paddingBottom: insets.bottom + Space.xl }]}>
          <Text style={s.memberLabel}>Membership</Text>
          <Text style={s.memberHeadline}>Become Tāpas.</Text>
          <Text style={s.memberBody}>
            This is for the ones who already live at this standard. Join us.
          </Text>
          <TextInput
            style={s.input}
            placeholder="Your email"
            placeholderTextColor="rgba(242,237,228,0.3)"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity style={s.btn} onPress={handleJoin}>
            <Text style={s.btnText}>Become Tāpas.</Text>
          </TouchableOpacity>
          <Text style={s.memberNote}>No noise. Just the launch, when it's time.</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  root: { flex: 1, backgroundColor: Colors.rawCotton },

  // Hero
  hero: { minHeight: 500 },
  heroCards: { flexDirection: 'row', height: 340, gap: 4 },
  heroCard: { justifyContent: 'flex-end', padding: 12 },
  heroCardLabel: { fontFamily: Fonts.body, fontSize: 9, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(242,237,228,0.7)' },
  heroCopy: { padding: 20, gap: 16 },
  heroHeadline: { fontFamily: Fonts.displayItalic, fontSize: 40, letterSpacing: -0.8, lineHeight: 44, color: Colors.obsidian },
  heroHeadlineFaded: { color: 'rgba(20,20,20,0.28)' },
  heroBody: { fontFamily: Fonts.body, fontSize: 15, color: 'rgba(20,20,20,0.65)', lineHeight: 24 },

  // Philosophy
  philosophy: { backgroundColor: Colors.rawCotton, paddingHorizontal: 20, paddingVertical: 60, gap: 32, borderTopWidth: 0.5, borderTopColor: 'rgba(20,20,20,0.08)' },
  sanskrit: { fontFamily: Fonts.displayItalic, fontSize: 52, color: Colors.obsidian, letterSpacing: -0.5 },
  philosophyIntro: { fontFamily: Fonts.body, fontSize: 15, color: 'rgba(20,20,20,0.65)', lineHeight: 24 },
  principle: { paddingTop: 32, borderTopWidth: 0.5, borderTopColor: 'rgba(20,20,20,0.12)', gap: 6 },
  principleFirst: { paddingTop: 32 },
  principleTitle: { fontFamily: Fonts.displayItalic, fontSize: 28, color: Colors.obsidian },
  principleSub: { fontFamily: Fonts.body, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(20,20,20,0.4)' },
  principleBody: { fontFamily: Fonts.body, fontSize: 14, color: 'rgba(20,20,20,0.65)', lineHeight: 22 },

  // Collection
  collection: { paddingHorizontal: 20, paddingVertical: 60, gap: 24 },
  collectionHeader: { gap: 4 },
  collectionTitle: { fontFamily: Fonts.displayItalic, fontSize: 28, color: Colors.obsidian },
  collectionTeaser: { fontFamily: Fonts.body, fontSize: 11, letterSpacing: 1, color: 'rgba(20,20,20,0.35)', textTransform: 'uppercase' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  gridItem: { width: '47%' },
  gridItemRight: { marginTop: 0 },

  // Inspiration
  inspiration: { backgroundColor: Colors.rawCotton, paddingHorizontal: 20, paddingVertical: 60, gap: 16, borderTopWidth: 0.5, borderTopColor: 'rgba(20,20,20,0.08)' },
  insLabel: { fontFamily: Fonts.body, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(20,20,20,0.35)' },
  insHeadline: { fontFamily: Fonts.displayItalic, fontSize: 36, color: Colors.obsidian, lineHeight: 40 },
  insBody: { fontFamily: Fonts.body, fontSize: 15, color: 'rgba(20,20,20,0.65)', lineHeight: 24 },
  insBlocks: { flexDirection: 'row', height: 200, gap: 4, marginTop: 8 },
  insBlock: { flex: 1 },

  // Membership
  membership: { backgroundColor: Colors.obsidian, paddingHorizontal: 20, paddingTop: 60, gap: 20 },
  memberLabel: { fontFamily: Fonts.body, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(242,237,228,0.3)' },
  memberHeadline: { fontFamily: Fonts.displayItalic, fontSize: 44, color: Colors.rawCotton, lineHeight: 48, letterSpacing: -0.5 },
  memberBody: { fontFamily: Fonts.body, fontSize: 15, color: 'rgba(242,237,228,0.55)', lineHeight: 24 },
  input: { borderWidth: 0.5, borderColor: 'rgba(242,237,228,0.2)', color: Colors.rawCotton, paddingHorizontal: 20, paddingVertical: 16, fontFamily: Fonts.body, fontSize: 15 },
  memberNote: { fontFamily: Fonts.body, fontSize: 12, color: 'rgba(242,237,228,0.3)', letterSpacing: 0.5 },

  // Shared
  btn: { backgroundColor: Colors.cobalt, paddingVertical: 14, paddingHorizontal: 28, alignSelf: 'flex-start', borderRadius: 2 },
  btnText: { fontFamily: Fonts.body, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: Colors.rawCotton },
});
