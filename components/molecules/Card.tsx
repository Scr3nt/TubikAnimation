import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import CustomText from "../atoms/CustomText";
import AnimatedOpacityText from "../atoms/AnimatedOpacityText";

import colors from "@/theme/colors";

const SIZE = Dimensions.get("screen").width - 60;

type Props = {
  isVisible: boolean;
  section: string;
  title: string;
  number: string;
  numberDescription: string;
};

export default function Card(props: Props) {
  const textToAnimate = () => {
    return (
      <CustomText text={props.title} type={"medium"} style={styles.title} />
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <CustomText
          text={props.section}
          type={"light"}
          style={styles.section}
        />
        <AnimatedOpacityText
          isVisible={props.isVisible}
          opacityDefault={0.1}
          children={textToAnimate()}
        />
      </View>
      <View style={styles.big_number_container}>
        <CustomText text={props.number} style={styles.big_number} />
        <CustomText
          text={props.numberDescription}
          type="light"
          style={styles.big_number_text}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    width: SIZE,
    height: SIZE + 75,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 35,
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
  big_number_container: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  big_number: {
    fontSize: 130,
    color: colors.darkblue,
    marginRight: 10,
  },
  big_number_text: {
    fontSize: 18,
    color: colors.darkblue,
    marginBottom: 30,
  },
});
