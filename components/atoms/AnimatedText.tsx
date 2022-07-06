import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import CustomText from "./CustomText";

import colors from "@/theme/colors";

type Props = {
  isVisible: boolean;
};

export default function AnimatedText(props: Props) {
  const opacity = useSharedValue(0);

  useEffect(() => {
    props?.isVisible ? (opacity.value = 1) : (opacity.value = 0);
  }, [props.isVisible]);

  const style = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 500 }),
    };
  });
  if (!props.isVisible) {
    return null;
  }
  return (
    <Animated.View style={[styles.text_container, style]}>
      <CustomText text={"Material"} type={"bold"} style={styles.title} />
      <CustomText text={"12 items"} style={styles.subtitle} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text_container: {
    position: "absolute",
    left: 15,
    bottom: 110,
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
