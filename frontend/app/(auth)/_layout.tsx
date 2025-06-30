import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  return <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]} className={`flex-1 dark:bg-gray-900 bg-white`}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="goalselection" />
          <Stack.Screen name="profileinfo" />
          <Stack.Screen name="allergyoption" />
          <Stack.Screen name="signin" />
          <Stack.Screen name="signup" />
        </Stack>
    </SafeAreaView>
  </SafeAreaProvider>;
}
