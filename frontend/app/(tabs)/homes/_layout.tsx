import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function HomeLayout() {
  return <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]} className={`flex-1 dark:bg-gray-900 bg-white`}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" />
          <Stack.Screen name="[id]" />
        </Stack>
    </SafeAreaView>
  </SafeAreaProvider>;
}
