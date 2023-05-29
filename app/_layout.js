import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{ headerShown: false, animation: "slide_from_right" }}
      ></Stack.Screen>
    </Stack>
  );
};

export default RootLayout;
