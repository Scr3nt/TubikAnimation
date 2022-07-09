import React from "react";
import { Dimensions, Image, StyleSheet, View, ViewProps } from "react-native";

type Props = {
  children: ViewProps["children"];
};

export default function RoundImage(props: Props) {
  return (
    <>
      <View style={styles.bottom_round}>
        {/* I want to use FastImage here but FastImage not working with Expo Go on physical device so for this mini project I just use Image */}
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1615367840621-d387aef43326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMGdpcmx8ZW58MHx8MHx8&w=1000&q=80",
          }}
          style={styles.image}
          resizeMode="cover"
        />
        {props?.children}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bottom_round: {
    borderRadius: 200,
    width: Dimensions.get("screen").width - 60,
    height: Dimensions.get("screen").width - 60,
    alignSelf: "center",
    backgroundColor: "black",
  },
  image: {
    width: Dimensions.get("screen").width - 60,
    height: Dimensions.get("screen").width - 60,
    borderRadius: 200,
    alignSelf: "center",
  },
});
