import React from "react";
import { StyleSheet, View } from "react-native";

import CustomText from "../atoms/CustomText";
import AnimatedOpacityText from "../atoms/AnimatedOpacityText";

import colors from "@/theme/colors";

type Props = {
  isVisible: boolean;
  section: string;
  title: string;
  subtitle: string;
  category: string;
  author: string;
};

export default function SemiRoundCardContent(props: Props) {
  const textToAnimate = () => {
    return (
      <CustomText text={props?.title} type={"medium"} style={styles.title} />
    );
  };

  return (
    <View style={styles.page}>
      <View>
        <CustomText
          text={props?.section}
          type={"light"}
          style={styles.section}
        />
        <AnimatedOpacityText
          isVisible={props?.isVisible}
          opacityDefault={0.1}
          children={textToAnimate()}
        />
        <CustomText text={props?.subtitle} style={styles.subtitle} />
      </View>
      <View>
        <CustomText text={props?.category} style={styles.category} />
        <CustomText
          text={props?.author}
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
