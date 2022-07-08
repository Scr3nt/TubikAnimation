import React from "react";
import { StyleSheet, View } from "react-native";

import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";

import CustomText from "./CustomText";

type Props = {
  rightValue: SharedValue<number>;
  leftValue: SharedValue<number>;
};

const SENTENCE = "An investment in knowledge pays the best interest";

export default function BackgroundText(props: Props) {
  const rightValue = useDerivedValue(() => {
    return props.rightValue.value;
  });

  const leftValue = useDerivedValue(() => {
    return props.leftValue.value;
  });

  const styleTextToRight = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: rightValue.value,
        },
      ],
    };
  });

  const styleTextToLeft = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: leftValue.value,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styleTextToRight]}>
        <CustomText text={SENTENCE} type={"medium"} style={styles.text} />
      </Animated.View>
      <Animated.View style={[styleTextToLeft]}>
        <CustomText text={SENTENCE} type={"medium"} style={styles.text} />
      </Animated.View>
      <Animated.View style={[styleTextToRight]}>
        <CustomText text={SENTENCE} type={"medium"} style={styles.text} />
      </Animated.View>
      <Animated.View style={[styleTextToLeft]}>
        <CustomText text={SENTENCE} type={"medium"} style={styles.text} />
      </Animated.View>
      <Animated.View style={[styleTextToRight]}>
        <CustomText text={SENTENCE} type={"medium"} style={styles.text} />
      </Animated.View>
      <Animated.View style={[styleTextToLeft]}>
        <CustomText text={SENTENCE} type={"medium"} style={styles.text} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: -60,
    zIndex: -100,
    width: 2000,
    alignSelf: "center",
    transform: [{ rotate: "-30deg" }],
  },
  text: {
    fontSize: 75,
  },
});
