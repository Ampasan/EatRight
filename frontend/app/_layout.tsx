import { Tabs } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Tabs screenOptions={() => ({tabBarStyle: { display: 'none' }})}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Main",
          headerShown: false,
          animation: 'fade',
        }}
      />
      <Tabs.Screen
        name="(auth)"
        options={{
          title: "Home",
          headerShown: false,
          animation: 'fade',
        }}
      />
      <Tabs.Screen 
        name="(tabs)"
        options={{
          title: "Other Tabs",
          headerShown: false, 
          animation: 'fade', 
        }}
      />
    </Tabs>
  );
}
