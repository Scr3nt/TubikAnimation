import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import { setStatusBarStyle } from "expo-status-bar";

import { useFocusEffect } from "@react-navigation/native";
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import CustomText from "@/components/atoms/CustomText";

import colors from "@/theme/colors";

export default function MenuScreen() {
  const width = useSharedValue(Dimensions.get("window").width - 40);

  useEffect(() => {
    width.value = Dimensions.get("window").width - 10;
  }, []);

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(width.value, {
        duration: 200,
      }),
    };
  });

  useFocusEffect(() => {
    setStatusBarStyle("light");
  });
  const test = "t";
  return (
    <View style={styles.page}>
      <Animated.View style={[styles.container, style]}>
        <View>
          <Animated.View
            entering={FadeInDown.withInitialValues({ opacity: 0 })}
          >
            <CustomText text="search" type="bold" style={styles.text} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(450).withInitialValues({
              opacity: 0,
            })}
          >
            <CustomText text="settings" type="bold" style={styles.text} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(650).withInitialValues({
              opacity: 0,
            })}
          >
            <CustomText text="monetization" type="bold" style={styles.text} />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.duration(850).withInitialValues({
              opacity: 0,
            })}
          >
            <CustomText text="drafts" type="bold" style={styles.text} />
          </Animated.View>
        </View>
        <View>
          <CustomText text="help" type="bold" style={styles.secondary_text} />
          <CustomText
            text="information"
            type="bold"
            style={styles.secondary_text}
          />
          <CustomText
            text="other projects"
            type="bold"
            style={styles.secondary_text}
          />
          <CustomText
            text="APPLICATION VERSION 6.43.2"
            type={"bold"}
            style={{ fontSize: 14, color: colors.grey, marginTop: 30 }}
          />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.red,
  },
  container: {
    height: "84%",
    backgroundColor: colors.darkblue,
    borderBottomRightRadius: 250,
    paddingLeft: 30,
    paddingTop: 100,
    paddingBottom: 60,
    justifyContent: "space-between",
  },
  text: { fontSize: 47, color: "white", marginBottom: 10 },
  secondary_text: { fontSize: 25, color: "white", marginBottom: 10 },
});
