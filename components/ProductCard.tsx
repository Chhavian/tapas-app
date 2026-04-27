import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors, Fonts } from '../constants/tokens';
import type { Product } from '../constants/products';

export default function ProductCard({ product, dark = false }: { product: Product; dark?: boolean }) {
  const router = useRouter();
  const textColor = dark ? Colors.rawCotton : Colors.obsidian;

  return (
    <TouchableOpacity style={s.card} onPress={() => router.push(`/product/${product.slug}` as any)}>
      <View style={[s.image, { backgroundColor: product.colour }]}>
        <View style={[s.badge, { borderColor: dark ? 'rgba(242,237,228,0.3)' : 'rgba(20,20,20,0.2)' }]}>
          <Text style={[s.badgeText, { color: dark ? 'rgba(242,237,228,0.6)' : 'rgba(20,20,20,0.5)' }]}>
            {product.gender}
          </Text>
        </View>
      </View>
      <Text style={[s.name, { color: textColor }]}>{product.name}</Text>
      <Text style={[s.colour, { color: dark ? 'rgba(242,237,228,0.45)' : 'rgba(20,20,20,0.45)' }]}>
        {product.colourName}
      </Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  card: { flex: 1 },
  image: {
    aspectRatio: 3 / 4,
    padding: 12,
    marginBottom: 8,
  },
  badge: {
    alignSelf: 'flex-start',
    borderWidth: 0.5,
    borderRadius: 2,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    fontFamily: Fonts.body,
    fontSize: 9,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  name: {
    fontFamily: Fonts.body,
    fontSize: 13,
    letterSpacing: 0.3,
    marginBottom: 2,
  },
  colour: {
    fontFamily: Fonts.body,
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
});
