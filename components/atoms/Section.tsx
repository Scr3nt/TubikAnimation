import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import CustomText from "./CustomText";

import colors from "@/theme/colors";

type Props = {
  isVisible: boolean;
  index: number;
};

export default function Section(props: Props) {
  const opacity = useSharedValue(0.1);
  const [opacityVisible, setOpacityVisible] = useState(false);

  useEffect(() => {
    if (props.isVisible) {
      setOpacityVisible(true);
      opacity.value = 1;
    } else if (opacityVisible) {
      opacity.value = 1;
    } else {
      opacity.value = 0.1;
    }
  }, [props.isVisible]);

  const style = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 500 }),
    };
  });
  return (
    <View style={styles.page}>
      <View>
        <CustomText text={"SECTION 1"} type={"light"} style={styles.section} />
        <Animated.View style={[style]}>
          <CustomText
            text={"Podcasts for professionals"}
            type={"medium"}
            style={styles.title}
          />
        </Animated.View>
        <CustomText text={"open material"} style={styles.subtitle} />
      </View>
      <View>
        <CustomText text={"Basic business course"} style={styles.category} />
        <CustomText
          text={"Julia_Gerasimchuk"}
          style={{ color: colors.grey, fontFamily: "GTWalsheim-Regular" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "space-between",
  },
  section: {
    marginBottom: 20,
    color: colors.lightblue,
    letterSpacing: 1.2,
    fontSize: 13,
  },
  title: {
    fontSize: 40,
    marginBottom: 15,
    color: colors.darkblue,
  },
  subtitle: {
    fontSize: 18,
    color: colors.grey,
  },
  category: {
    color: colors.lightred,
    marginBottom: 5,
  },
});
