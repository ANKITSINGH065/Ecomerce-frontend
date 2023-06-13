import React, { useRef, useState } from "react";
import {
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Avatar, Button, Text } from "react-native-paper";
import { Carousel } from "react-native-snap-carousel";
import { Toast } from "react-native-toast-message/lib/src/Toast";
export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
import Header from "../components/Header";
import { colors, defaultStyle } from "../style/styles";

const name = "Mackbook pro";
const price = 2000;
const stock = 2;
const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
const data = [
  {
    id: 1,
    name: "React JS",
    url: "https://icon-library.com/images/react-icon/react-icon-29.jpg",
  },
  {
    id: 2,
    name: "JavaScript",
    url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png",
  },
  {
    id: 3,
    name: "Node JS",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/67/NodeJS.png",
  },
];

const renderItem = ({ item }) => {
  return (
    <View style={style.container}>
      <Image source={{ uri: item.url }} style={style.image} />
    </View>
  );
};

export const iconOptions = {
  size: 20,
  style: {
    borderRadius: 5,
    backgroundColor: colors.color5,
    height: 25,
    width: 25,
  },
};

const ProDu = () => {
  const isCarousel = useRef(null);
  const [quantity, setquantity] = useState(1);

  const decrementQtyec = () => {
    if (quantity <= 1) return;
    setquantity((pre) => pre - 1);
  };
  const incrementQtyec = () => {
    if (quantity > stock) return;
    setquantity((pre) => pre + 1);
  };

  const addToCardHandler = () => {
    if (stock == 0)
      return Toast.show({
        type: "error",
        text1: "Out of stock",
      });
    Toast.show({
      type: "success",
      text1: "Added to Card",
    });
  };

  return (
    <View
      style={{ ...defaultStyle, padding: 0, backgroundColor: colors.color1 }}
    >
      <Header back={true} />
      <Carousel
        layout="tinder"
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
      />
      <View
        style={{
          backgroundColor: colors.color2,
          padding: 35,
          flex: 1,
          marginTop: -450,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
        }}
      >
        <Text
          numberOfLines={2}
          style={{
            fontSize: 25,
          }}
        >
          {name}
        </Text>
        <Text
          numberOfLines={2}
          style={{
            fontSize: 18,
            fontWeight: "900",
          }}
        >
          ₹{price}
        </Text>
        <Text
          numberOfLines={8}
          style={{
            letterSpacing: 1,
            lineHeight: 20,
            marginVertical: 5,
          }}
        >
          {description}
        </Text>

        <View
          style={{
            size: 80,
            flexDirection: "row",
            // justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={decrementQtyec}>
            <Avatar.Icon icon="minus" {...iconOptions} />
          </TouchableOpacity>
          <Text style={style.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={incrementQtyec}>
            <Avatar.Icon icon="plus" {...iconOptions} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.9} onPress={addToCardHandler}>
          <Button icon={"cart"} style={style.btn} textColor={colors.color2}>
            Add to card
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 10,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    resizeMode: "contain",
    height: 200,
  },
  quantity: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.color5,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 0,
    marginVertical: 10,
  },
});

export default ProDu;
