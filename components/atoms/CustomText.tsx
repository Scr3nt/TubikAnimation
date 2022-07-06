import React from "react";
import { Text, TextStyle, View } from "react-native";

type TextWeight =
  | "black"
  | "bold"
  | "medium"
  | "regular"
  | "light"
  | "thin"
  | "ultralight";

type Props = {
  text: string;
  type?: TextWeight;
  style: TextStyle;
};

export default function CustomText(props: Props) {
  const fontFamily = () => {
    switch (props.type) {
      case "black":
        return "GTWalsheim-Black";
      case "bold":
        return "GTWalsheim-Bold";
      case "medium":
        return "GTWalsheim-Medium";
      case "regular":
        return "GTWalsheim-Regular";
      case "light":
        return "GTWalsheim-Light";
      case "thin":
        return "GTWalsheim-Thin";
      case "ultralight":
        return "GTWalsheim-UltraLight";
      default:
        return "GTWalsheim-Regular";
    }
  };

  return (
    <View>
      <Text style={[props.style, { fontFamily: fontFamily() }]}>
        {props.text}
      </Text>
    </View>
  );
}
