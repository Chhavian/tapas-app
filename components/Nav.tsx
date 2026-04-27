import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import { Colors, Fonts } from '../constants/tokens';

export default function Nav({ dark = false }: { dark?: boolean }) {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [menuOpen, setMenuOpen] = useState(false);

  const bg = dark ? Colors.obsidian : Colors.rawCotton;
  const fg = dark ? Colors.rawCotton : Colors.obsidian;
  const borderColor = dark ? 'rgba(242,237,228,0.1)' : 'rgba(20,20,20,0.1)';

  return (
    <>
      <View style={[s.nav, { paddingTop: insets.top, backgroundColor: bg, borderBottomColor: borderColor }]}>
        <TouchableOpacity onPress={() => router.push('/')}>
          <Text style={[s.wordmark, { color: fg }]}>Tāpas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMenuOpen(true)} style={s.hamburger}>
          <View style={[s.line, { backgroundColor: fg }]} />
          <View style={[s.line, { backgroundColor: fg }]} />
        </TouchableOpacity>
      </View>

      <Modal visible={menuOpen} animationType="slide" statusBarTranslucent>
        <View style={[s.overlay, { paddingTop: insets.top }]}>
          <View style={s.overlayTop}>
            <Text style={s.overlayWordmark}>Tāpas</Text>
            <TouchableOpacity onPress={() => setMenuOpen(false)} style={s.closeBtn}>
              <Text style={s.closeX}>✕</Text>
            </TouchableOpacity>
          </View>
          <View style={s.overlayLinks}>
            {[
              { label: 'Her', route: '/her' },
              { label: 'Him', route: '/him' },
              { label: 'Philosophy', route: '/brand' },
              { label: 'About', route: '/brand' },
            ].map(({ label, route }) => (
              <TouchableOpacity key={label} onPress={() => { setMenuOpen(false); router.push(route as any); }}>
                <Text style={s.overlayLink}>{label}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => { setMenuOpen(false); router.push('/'); }}>
              <Text style={[s.overlayLink, { color: Colors.cobalt }]}>Become Tāpas.</Text>
            </TouchableOpacity>
          </View>
          <Text style={s.overlayTagline}>The heat of discipline. The stillness of intention.</Text>
        </View>
      </Modal>
    </>
  );
}

const s = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 0.5,
    zIndex: 10,
  },
  wordmark: {
    fontFamily: Fonts.display,
    fontSize: 17,
    letterSpacing: 3,
  },
  hamburger: { padding: 4, gap: 6, justifyContent: 'center' },
  line: { width: 24, height: 0.75 },
  overlay: {
    flex: 1,
    backgroundColor: Colors.obsidian,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  overlayTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 64,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(242,237,228,0.1)',
  },
  overlayWordmark: {
    fontFamily: Fonts.display,
    fontSize: 17,
    letterSpacing: 3,
    color: Colors.rawCotton,
  },
  closeBtn: { padding: 12 },
  closeX: { color: Colors.rawCotton, fontSize: 16 },
  overlayLinks: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  overlayLink: {
    fontFamily: Fonts.displayItalic,
    fontSize: 48,
    color: Colors.rawCotton,
    lineHeight: 56,
    textAlign: 'center',
  },
  overlayTagline: {
    fontFamily: Fonts.body,
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: 'rgba(242,237,228,0.3)',
    textAlign: 'center',
  },
});
