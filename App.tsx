import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { QueryClient, QueryClientProvider } from "react-query";

import HomeScreen from "./containers/HomeScreen";

import customFonts from "@/theme/fonts";

const queryClient = new QueryClient();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(customFonts);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <View onLayout={onLayoutRootView} style={styles.container}>
        <HomeScreen />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
