import { Stack } from "expo-router";

const RootLayout = () => {
  return( 
  <Stack screenOptions={{headerShown:false}}>
    <Stack.Screen name="Index" />
    <Stack.Screen name="Register"/>
    <Stack.Screen name="Login"/>
    <Stack.Screen name="Main"/>
    </Stack>
    );
};

export default RootLayout;
