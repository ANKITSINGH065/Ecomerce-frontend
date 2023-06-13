import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { React, useState } from "react";

import { colors } from "../style/styles";
import MyModel from "../components/MyModel";

const ProductListItem = ({
  i,
  id,
  price,
  name,
  imgSrc,
  stock,
  category,
  navigate,
  deleteHandler,
}) => {
  const [openModel, setopenModel] = useState(false);
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onLongPress={() => setopenModel((pre) => !pre)}
        onPress={() => navigate.navigate("productdetails", { id })}
      >
        <View
          style={{
            ...style.container,
            backgroundColor: i % 2 === 0 ? colors.color1 : colors.color3,
          }}
        >
          <Image
            source={{ uri: imgSrc }}
            style={{ width: 40, height: 40, resizeMode: "contain" }}
          />

          <Text
            style={{ maxWidth: 120, color: colors.color2 }}
            numberOfLines={1}
          >
            ₹{price}
          </Text>
          <Text
            style={{ maxWidth: 120, color: colors.color2 }}
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text
            style={{ maxWidth: 60, color: colors.color2 }}
            numberOfLines={1}
          >
            {category}
          </Text>
          <Text
            style={{ maxWidth: 60, color: colors.color2 }}
            numberOfLines={1}
          >
            {stock}
          </Text>
        </View>
      </TouchableOpacity>

      {openModel && (
        <MyModel
          id={id}
          deleteHandler={deleteHandler}
          navigate={navigate}
          setopenModel={setopenModel}
        />
      )}
    </>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 70,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default ProductListItem;
