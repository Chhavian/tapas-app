import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import {
  CormorantGaramond_400Regular,
  CormorantGaramond_400Regular_Italic,
} from '@expo-google-fonts/cormorant-garamond';
import {
  EBGaramond_400Regular,
  EBGaramond_400Regular_Italic,
} from '@expo-google-fonts/eb-garamond';

export default function RootLayout() {
  const [loaded] = useFonts({
    CormorantGaramond_400Regular,
    CormorantGaramond_400Regular_Italic,
    EBGaramond_400Regular,
    EBGaramond_400Regular_Italic,
  });

  useEffect(() => {}, [loaded]);

  if (!loaded) return null;

  return (
    <>
      <StatusBar style="dark" backgroundColor="#F2EDE4" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="her" />
        <Stack.Screen name="him" />
        <Stack.Screen name="brand" />
        <Stack.Screen name="capsule" />
        <Stack.Screen name="product/[slug]" />
      </Stack>
    </>
  );
}
