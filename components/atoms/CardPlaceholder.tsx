import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { Placeholder, Fade, PlaceholderMedia } from "rn-placeholder";

const SIZE = Dimensions.get("screen").width - 60;

export default function CardPlaceholder() {
  const renderItem = () => {
    return (
      <View style={styles.container}>
        <Placeholder Animation={Fade}>
          <PlaceholderMedia
            style={{ height: "100%", width: "100%", borderRadius: 0 }}
          />
        </Placeholder>
      </View>
    );
  };

  return (
    <FlatList
      data={[1, 2]}
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
    width: SIZE,
    height: SIZE + 75,
    flex: 1,
    justifyContent: "space-between",
    borderRadius: 0,
    marginLeft: 15,
  },
});
