import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";

import Svg, { Path } from "react-native-svg";

import colors from "@/theme/colors";

const BOTTOM_TAB_WIDTH = Dimensions.get("screen").width - 45;

export default function CustomBottomTab({
  state,
  descriptors,
  navigation,
  width,
  height,
}) {
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", bottom: 0, alignSelf: "center" }}>
        <Svg width={width} height={height} fill="none" viewBox="0 0 291 53">
          <Path
            d="M23 .93h90c2.667 0 8 1.8 8 9-.5 8.334 3.7 25.4 24.5 27v15H23c-6.333-1-19.7-6.8-22.5-22-1.167-8.166 1.7-25.4 22.5-29ZM268 .93h-90c-2.667 0-8 1.8-8 9 .5 8.334-3.7 25.4-24.5 27v15H268c6.333-1 19.7-6.8 22.5-22 1.167-8.166-1.7-25.4-22.5-29Z"
            fill="#081C35"
          />
        </Svg>
      </View>
      <View style={styles.icons_container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route?.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              key={index}
              activeOpacity={0.85}
            >
              {options.tabBarIcon({
                color: isFocused ? colors.red : colors.grey,
              })}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    width: BOTTOM_TAB_WIDTH,
    justifyContent: "center",
  },
  icons_container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 26,
  },
});
