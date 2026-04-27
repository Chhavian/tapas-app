import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Nav from '../components/Nav';
import { Colors, Fonts } from '../constants/tokens';

export default function Brand() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={s.root}>
      <Nav />
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Origin */}
        <View style={s.origin}>
          <Text style={s.sanskrit}>तपस्</Text>
          <Text style={s.transliteration}>Tāpas</Text>
          <Text style={s.definition}>
            The heat generated through disciplined effort. One of the Niyamas in Patanjali's Yoga Sutras — the ancient text that codified yoga as a complete system of living, not just movement.
          </Text>
          <Text style={s.body}>
            Tapas is not intensity for its own sake. It is the heat that is produced when discipline is so consistent, so precise, so unwavering that it generates its own energy. The 5am training session when no one is watching. The extra set when the workout said stop. The choice, every day, without negotiation.
          </Text>
          <Text style={s.body}>That is what we are building clothes for.</Text>
        </View>

        {/* Not statement */}
        <View style={s.notSection}>
          {[
            { text: 'Not a gym brand.', faded: false },
            { text: 'Not a yoga brand.', faded: true },
            { text: 'The space neither owns.', faded: true },
          ].map((line, i) => (
            <Text key={i} style={[s.notLine, line.faded && s.notLineFaded]}>{line.text}</Text>
          ))}
        </View>

        {/* Principles */}
        <View style={s.principles}>
          <Text style={s.principlesTitle}>Three principles.{'\n'}One standard.</Text>
          {[
            { num: '01', name: 'Sthira', sub: 'Steadiness', body: 'The garment disappears. Nothing pulls, nothing shifts, nothing reminds you it is there. Sthira — steadiness — is the quality of something so well-made that it becomes invisible.', light: false },
            { num: '02', name: 'Tapas', sub: 'Discipline', body: 'The heat of consistent effort. Not intensity for its own sake — the specific, focused application of effort over time. Every seam, every stitch, every technical decision is made with this in mind.', light: true },
            { num: '03', name: 'Santosha', sub: 'Sufficiency', body: 'Enough, and nothing more. No embellishment. No branding for the sake of branding. Santosha is the quality of something complete — where adding anything would make it worse.', light: false },
          ].map(p => (
            <View key={p.num} style={[s.principle, p.light ? s.principleLight : s.principleDark]}>
              <Text style={[s.principleNum, p.light ? s.textDarkFaint : s.textLightFaint]}>{p.num}</Text>
              <View style={s.principleContent}>
                <Text style={[s.principleName, p.light ? s.textDark : s.textLight]}>{p.name}</Text>
                <Text style={[s.principleSub, p.light ? s.textDarkFaint : s.textLightFaint]}>{p.sub}</Text>
                <Text style={[s.principleBody, p.light ? s.textDarkMid : s.textLightMid]}>{p.body}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Roadmap */}
        <View style={s.roadmap}>
          <Text style={s.roadmapTitle}>Three phases.{'\n'}One direction.</Text>
          {[
            { phase: 'Phase 1', name: 'Performance', body: 'Strength, running, training. Men and women. The core of what Tāpas is.', active: true },
            { phase: 'Phase 2', name: 'Recovery & Lounge', body: 'Co-ords, post-training, travel sets. The stillness after the heat.', active: false },
            { phase: 'Phase 3', name: 'Resort & Swim', body: 'Bikini, board shorts, resort wear. Discipline meets leisure.', active: false },
          ].map((p, i) => (
            <View key={i} style={[s.phase, i < 2 && s.phaseBorder]}>
              <View style={[s.phaseDot, p.active && s.phaseDotActive]} />
              <View style={s.phaseContent}>
                <Text style={s.phaseLabel}>{p.phase}</Text>
                <Text style={s.phaseName}>{p.name}</Text>
                <Text style={s.phaseBody}>{p.body}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* CTA */}
        <View style={[s.cta, { paddingBottom: insets.bottom + 60 }]}>
          <Text style={s.ctaHeadline}>Become Tāpas.</Text>
          <Text style={s.ctaBody}>Join the membership. First to know when Phase 1 launches.</Text>
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

  origin: { backgroundColor: Colors.obsidian, padding: 20, paddingTop: 48, paddingBottom: 48, gap: 20 },
  sanskrit: { fontFamily: Fonts.displayItalic, fontSize: 80, color: Colors.rawCotton, letterSpacing: -1, lineHeight: 80 },
  transliteration: { fontFamily: Fonts.displayItalic, fontSize: 18, letterSpacing: 4, color: 'rgba(242,237,228,0.35)' },
  definition: { fontFamily: Fonts.body, fontSize: 16, color: 'rgba(242,237,228,0.8)', lineHeight: 28 },
  body: { fontFamily: Fonts.body, fontSize: 15, color: 'rgba(242,237,228,0.55)', lineHeight: 26 },

  notSection: { backgroundColor: Colors.obsidian, paddingHorizontal: 20, paddingBottom: 48, gap: 4, borderTopWidth: 0.5, borderTopColor: 'rgba(242,237,228,0.08)' },
  notLine: { fontFamily: Fonts.displayItalic, fontSize: 32, color: Colors.rawCotton, lineHeight: 40 },
  notLineFaded: { color: 'rgba(242,237,228,0.35)' },

  principles: { backgroundColor: Colors.obsidian },
  principlesTitle: { fontFamily: Fonts.displayItalic, fontSize: 36, color: Colors.rawCotton, lineHeight: 42, letterSpacing: -0.5, padding: 20, paddingTop: 48 },
  principle: { padding: 20, gap: 16 },
  principleLight: { backgroundColor: Colors.rawCotton },
  principleDark: { backgroundColor: Colors.obsidian, borderTopWidth: 0.5, borderTopColor: 'rgba(242,237,228,0.08)' },
  principleNum: { fontFamily: Fonts.body, fontSize: 12, letterSpacing: 2 },
  principleContent: { gap: 8 },
  principleName: { fontFamily: Fonts.displayItalic, fontSize: 40, letterSpacing: -0.5, lineHeight: 44 },
  principleSub: { fontFamily: Fonts.body, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase' },
  principleBody: { fontFamily: Fonts.body, fontSize: 15, lineHeight: 26 },

  textLight: { color: Colors.rawCotton },
  textLightMid: { color: 'rgba(242,237,228,0.6)' },
  textLightFaint: { color: 'rgba(242,237,228,0.25)' },
  textDark: { color: Colors.obsidian },
  textDarkMid: { color: 'rgba(20,20,20,0.65)' },
  textDarkFaint: { color: 'rgba(20,20,20,0.25)' },

  roadmap: { backgroundColor: Colors.rawCotton, padding: 20, paddingTop: 60, paddingBottom: 60, gap: 0 },
  roadmapTitle: { fontFamily: Fonts.displayItalic, fontSize: 32, color: Colors.obsidian, lineHeight: 38, letterSpacing: -0.5, marginBottom: 32 },
  phase: { flexDirection: 'row', gap: 20, paddingVertical: 28, alignItems: 'flex-start' },
  phaseBorder: { borderBottomWidth: 0.5, borderBottomColor: 'rgba(20,20,20,0.12)' },
  phaseDot: { width: 6, height: 6, borderRadius: 3, borderWidth: 0.5, borderColor: 'rgba(20,20,20,0.3)', marginTop: 8 },
  phaseDotActive: { backgroundColor: Colors.cobalt, borderColor: Colors.cobalt },
  phaseContent: { flex: 1, gap: 4 },
  phaseLabel: { fontFamily: Fonts.body, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(20,20,20,0.4)' },
  phaseName: { fontFamily: Fonts.displayItalic, fontSize: 28, color: Colors.obsidian, lineHeight: 32 },
  phaseBody: { fontFamily: Fonts.body, fontSize: 14, color: 'rgba(20,20,20,0.6)', lineHeight: 22 },

  cta: { backgroundColor: Colors.obsidian, padding: 20, paddingTop: 60, gap: 16 },
  ctaHeadline: { fontFamily: Fonts.displayItalic, fontSize: 44, color: Colors.rawCotton, lineHeight: 48, letterSpacing: -0.5 },
  ctaBody: { fontFamily: Fonts.body, fontSize: 15, color: 'rgba(242,237,228,0.55)', lineHeight: 24 },
  btn: { backgroundColor: Colors.cobalt, paddingVertical: 14, paddingHorizontal: 28, alignSelf: 'flex-start', borderRadius: 2 },
  btnText: { fontFamily: Fonts.body, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: Colors.rawCotton },
});
