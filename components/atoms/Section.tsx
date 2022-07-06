import React from "react";
import { StyleSheet, View, Text } from "react-native";

import CustomText from "./CustomText";

import colors from "@/theme/colors";

export default function Section() {
  var test = 42;

  return (
    <View style={styles.page}>
      <View>
        <CustomText text={"SECTION 1"} type={"light"} style={styles.section} />
        <CustomText
          text={"Podcasts for professionals"}
          type={"medium"}
          style={styles.title}
        />
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
