import React from "react";
import { Text, View, StyleSheet } from "react-native";

import colors from "@/theme/colors";

export default function MenuScreen() {
  return (
    <View style={styles.page}>
      <Text>MenuScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.red,
  },
});
