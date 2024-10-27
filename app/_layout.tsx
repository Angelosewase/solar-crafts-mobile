import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="index"
        options={{
          statusBarStyle: "auto",
          statusBarColor: "black",
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          statusBarStyle: "auto",
          statusBarColor: "black",
        }}
      />

      <Stack.Screen
        name="[planetId]"
        options={{
          statusBarStyle: "auto",
          statusBarColor: "black",
          headerShown: false,
          animation: "slide_from_right",
        }}
      
      />
    </Stack>
  );
}
