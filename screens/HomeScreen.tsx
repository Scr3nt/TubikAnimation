import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";

import Animated, {
  runOnJS,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import BackgroundText from "@/components/atoms/BackgroundText";
import AnimatedOpacityText from "@/components/atoms/AnimatedOpacityText";
import CustomText from "@/components/atoms/CustomText";

import RoundImage from "@/components/molecules/RoundImage";

import SemiRoundCardList from "@/components/organisms/SemiRoundCardList";
import CardList from "@/components/organisms/CardList";

import colors from "@/theme/colors";

export default function HomeScreen() {
  const [animatedOpacityTextIsVisible, setAnimatedOpacityTextIsVisible] =
    useState(false);
  const [
    animatedOpacityCoursesCardTextIsVisible,
    setAnimatedOpacityCoursesCardTextIsVisible,
  ] = useState(false);

  const backgroundTextScrollXRight = useSharedValue(0);
  const backgroundTextScrollXLeft = useSharedValue(0);

  const toggleTextVisible = (
    status: boolean,
    whichText: "image" | "courses"
  ) => {
    if (whichText === "image") {
      setAnimatedOpacityTextIsVisible(status);
    }
    if (whichText === "courses") {
      setAnimatedOpacityCoursesCardTextIsVisible(status);
    }
  };

  const scrollHandler = useAnimatedScrollHandler((event) => {
    backgroundTextScrollXRight.value = event.contentOffset.y;
    backgroundTextScrollXLeft.value = -event.contentOffset.y;

    if (event.contentOffset.y >= 150) {
      runOnJS(toggleTextVisible)(true, "image");
    }

    if (event.contentOffset.y >= 415) {
      runOnJS(toggleTextVisible)(true, "courses");
    }
  });

  const textToAnimate = () => {
    return (
      <AnimatedOpacityText
        isVisible={animatedOpacityTextIsVisible}
        opacityDefault={0}
        children={
          <>
            <CustomText text={"Material"} type={"bold"} style={styles.title} />
            <CustomText text={"12 items"} style={styles.subtitle} />
          </>
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <BackgroundText
        scrollXRight={backgroundTextScrollXRight}
        scrollXLeft={backgroundTextScrollXLeft}
      />
      <Animated.ScrollView
        onScroll={scrollHandler}
        contentContainerStyle={styles.scrollView_content}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <>
          <SemiRoundCardList />
          <RoundImage children={textToAnimate()} />
          <CardList isVisible={animatedOpacityCoursesCardTextIsVisible} />
        </>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.red,
  },
  scrollView_content: {
    alignItems: "center",
    paddingTop: 100,
    paddingBottom: 200,
  },
  title: {
    fontSize: 35,
    color: "white",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: colors.grey,
  },
});
