import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../style/styles";

const ProductListHeading = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Image</Text>
      <Text style={style.text}>Price</Text>
      <Text style={{ ...style.text, width: null, maxWidth: 120 }}>Name</Text>
      <Text style={{ ...style.text, width: 60 }}>Category</Text>
      <Text style={style.text}>Stock</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color3,
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
  },
  text: {
    width: 40,
    color: colors.color2,
    fontWeight: "900",
  },
});

export default ProductListHeading;
