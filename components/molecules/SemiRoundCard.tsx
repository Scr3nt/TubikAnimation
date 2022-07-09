import React from "react";
import { Dimensions, StyleSheet, View, ViewProps } from "react-native";

type Props = {
  children: ViewProps["children"];
  colorBottomRound: string;
};

const SIZE = Dimensions.get("screen").width - 60;

export default function SemiRoundCard(props: Props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content_container_top} />
        <View style={styles.content_container_bottom} />
      </View>
      <View style={styles.bottom_round_container}>
        <View
          style={[
            styles.bottom_round,
            { backgroundColor: props?.colorBottomRound },
          ]}
        />
      </View>
      <View style={styles.content}>{props?.children}</View>
    </>
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
  },
  content_container_top: {
    width: SIZE,
    height: 200,
    backgroundColor: "white",
  },
  content_container_bottom: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "white",
    borderBottomEndRadius: 200,
    borderBottomStartRadius: 200,
  },
  bottom_round_container: {
    backgroundColor: "transparent",
    width: Dimensions.get("screen").width,
    height: (Dimensions.get("screen").width - 80) / 2,
    bottom: 20,
    alignSelf: "center",
    position: "absolute",
    overflow: "hidden",
    transform: [{ scaleY: -1 }],
  },
  bottom_round: {
    borderRadius: 200,
    width: Dimensions.get("screen").width - 100,
    height: Dimensions.get("screen").width - 100,
    alignSelf: "center",
  },
  content: {
    height: SIZE / 2 + 200,
    width: SIZE,
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
