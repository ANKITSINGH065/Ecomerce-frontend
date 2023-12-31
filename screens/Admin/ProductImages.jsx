import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import { colors, defaultStyle, headdinform } from "../../style/styles";
import Header from "../../components/Header";
import ImageCard from "../../components/ImageCard";
import { Avatar, Button } from "react-native-paper";

const ProductImages = ({ navigation, route }) => {
  const [images] = useState(route.params.images);
  const [productId] = useState(route.params.id);
  const [image, setImage] = useState(null);
  const [imageChange, setImageChange] = useState(false);

  const loading = false;
  const deleteHandler = (id) => {
    console.log(`image id`, id);
    console.log(`Product Id`, productId);
  };
  const submitHandler = () => {};

  useEffect(() => {
    if (route.params?.image) setImage(route.params.image);
    setImageChange(true);
  }, [route.params]);

  return (
    <View
      style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
      }}
    >
      <Header back={true} />

      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={headdinform}>New Product</Text>
      </View>

      <ScrollView
        style={{
          marginTop: 10,
          height: "90%",
        }}
        showsHorizontalScrollIndicator={true}
      >
        <View
          style={{
            backgroundColor: colors.color2,
            padding: 40,
            minHeight: 400,
          }}
        >
          {images.map((i) => (
            <ImageCard
              key={i._id}
              src={i.uri}
              id={i._id}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>

      <View
        style={{
          marginTop: 10,
          padding: 10,
          borderRadius: 10,
          backgroundColor: colors.color3,
        }}
      >
        <Image
          style={{
            backgroundColor: colors.color2,
            width: 100,
            height: 100,
            alignSelf: "center",
            resizeMode: "contain",
          }}
          source={{ uri: image }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("camera", { updateProduct: true })
            }
          >
            <Avatar.Icon
              icon={"camera"}
              size={30}
              style={{
                backgroundColor: colors.color2,
                margin: 10,
              }}
              color={colors.color3}
            />
          </TouchableOpacity>
        </View>

        <Button
          textColor={colors.color2}
          style={{
            backgroundColor: colors.color1,
            padding: 6,
          }}
          loading={loading}
          onPress={submitHandler}
          disabled={!imageChange}
        >
          Add
        </Button>
      </View>
    </View>
  );
};

export default ProductImages;
