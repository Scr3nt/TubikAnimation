import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { QueryClient, QueryClientProvider } from "react-query";

import BackgroundText from "@/components/atoms/BackgroundText";
import RoundImage from "@/components/molecules/RoundImage";
import AnimatedText from "@/components/atoms/AnimatedText";
import AnimatedList from "@/components/molecules/AnimatedList";

import colors from "@/theme/colors";
import customFonts from "@/theme/fonts";

const queryClient = new QueryClient();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const rightValue = useSharedValue(0);
  const leftValue = useSharedValue(0);

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

  const toggleTextVisible = (status: boolean) => {
    setIsVisible(status);
  };

  const scrollHandler = useAnimatedScrollHandler((event) => {
    rightValue.value = event.contentOffset.y;
    leftValue.value = -event.contentOffset.y;

    if (event.contentOffset.y >= 150) {
      runOnJS(toggleTextVisible)(true);
    }
  });

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <View onLayout={onLayoutRootView} style={styles.container}>
        <StatusBar style="auto" />
        <BackgroundText rightValue={rightValue} leftValue={leftValue} />
        <Animated.ScrollView
          onScroll={scrollHandler}
          contentContainerStyle={{ alignItems: "center", paddingVertical: 100 }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <>
            <AnimatedList />
            <RoundImage children={<AnimatedText isVisible={isVisible} />} />
          </>
        </Animated.ScrollView>
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red,
  },
});
