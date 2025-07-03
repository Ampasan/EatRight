import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function ChatbotLayout() {
  return <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]} className={`flex-1 dark:bg-gray-900 bg-white`}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="introduction" />
          <Stack.Screen name="chatbot" />
          <Stack.Screen name="camera" />
        </Stack>
    </SafeAreaView>
  </SafeAreaProvider>;
}
