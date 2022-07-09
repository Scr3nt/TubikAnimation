import React from "react";
import { StyleSheet, View } from "react-native";

import Animated, {
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";

import CustomText from "./CustomText";

type Props = {
  scrollXRight: SharedValue<number>;
  scrollXLeft: SharedValue<number>;
};

const SENTENCE =
  "An investment in knowledge pays the best interest An investment in knowledge pays the best interest An investment in knowledge pays the best interest";

export default function BackgroundText(props: Props) {
  const scrollXRight = useDerivedValue(() => {
    return props.scrollXRight.value;
  });

  const scrollXLeft = useDerivedValue(() => {
    return props.scrollXLeft.value;
  });

  const styleTextToRight = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: scrollXRight.value,
        },
      ],
    };
  });

  const styleTextToLeft = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: scrollXLeft.value,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styleTextToRight]}>
        <CustomText
          numberOfLines={1}
          text={SENTENCE}
          type={"medium"}
          style={styles.text}
        />
      </Animated.View>
      <Animated.View style={[styleTextToLeft]}>
        <CustomText
          numberOfLines={1}
          text={SENTENCE}
          type={"medium"}
          style={styles.text}
        />
      </Animated.View>
      <Animated.View style={[styleTextToRight]}>
        <CustomText
          numberOfLines={1}
          text={SENTENCE}
          type={"medium"}
          style={styles.text}
        />
      </Animated.View>
      <Animated.View style={[styleTextToLeft]}>
        <CustomText
          numberOfLines={1}
          text={SENTENCE}
          type={"medium"}
          style={styles.text}
        />
      </Animated.View>
      <Animated.View style={[styleTextToRight]}>
        <CustomText
          numberOfLines={1}
          text={SENTENCE}
          type={"medium"}
          style={styles.text}
        />
      </Animated.View>
      <Animated.View style={[styleTextToLeft]}>
        <CustomText
          numberOfLines={1}
          text={SENTENCE}
          type={"medium"}
          style={styles.text}
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: -60,
    zIndex: -100,
    width: "1000%",
    alignSelf: "center",
    transform: [{ rotate: "-30deg" }],
  },
  text: {
    fontSize: 75,
  },
});
