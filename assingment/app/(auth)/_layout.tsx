import { Redirect, Stack } from "expo-router";

export default function Auth() {
  return (
    <Stack>
      <Stack.Screen name="Login" options={{ headerShown: false }} />
    </Stack>
  );
}
