import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";

import { Placeholder, Fade, PlaceholderMedia } from "rn-placeholder";

const SIZE = Dimensions.get("screen").width - 60;

export default function SemiRoundCardPlaceholder() {
  const renderItem = () => {
    return (
      <View style={styles.container}>
        <Placeholder Animation={Fade}>
          <PlaceholderMedia style={styles.content_container_top} />
          <PlaceholderMedia style={styles.content_container_bottom} />
        </Placeholder>
      </View>
    );
  };

  return (
    <FlatList
      data={[1, 2, 3]}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      pagingEnabled
      snapToOffsets={[0, Dimensions.get("window").width - 45]}
      snapToAlignment="center"
      decelerationRate={"fast"}
      scrollEventThrottle={16}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ marginBottom: 35 }}
      ListHeaderComponent={<View style={{ marginLeft: 15 }} />}
      ListFooterComponent={<View style={{ marginRight: 30 }} />}
    />
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
    marginLeft: 15,
  },
  content_container_top: {
    width: SIZE,
    height: 200,
    borderRadius: 0,
  },
  content_container_bottom: {
    width: SIZE,
    height: SIZE,
    borderRadius: 0,
    borderBottomEndRadius: 200,
    borderBottomStartRadius: 200,
  },
});
