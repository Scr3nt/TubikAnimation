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
import AnimatedOpacityText from "@/components/atoms/AnimatedOpacityText";
import AnimatedList from "@/components/organisms/AnimatedList";

import colors from "@/theme/colors";
import customFonts from "@/theme/fonts";

const queryClient = new QueryClient();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [animatedOpacityTextIsVisible, setAnimatedOpacityTextIsVisible] =
    useState(false);

  const backgroundTextScrollXRight = useSharedValue(0);
  const backgroundTextScrollXLeft = useSharedValue(0);

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
    setAnimatedOpacityTextIsVisible(status);
  };

  const scrollHandler = useAnimatedScrollHandler((event) => {
    backgroundTextScrollXRight.value = event.contentOffset.y;
    backgroundTextScrollXLeft.value = -event.contentOffset.y;

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
        <BackgroundText
          scrollXRight={backgroundTextScrollXRight}
          scrollXLeft={backgroundTextScrollXLeft}
        />
        <Animated.ScrollView
          onScroll={scrollHandler}
          contentContainerStyle={{ alignItems: "center", paddingVertical: 100 }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <>
            <AnimatedList />
            <RoundImage
              children={
                <AnimatedOpacityText isVisible={animatedOpacityTextIsVisible} />
              }
            />
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
