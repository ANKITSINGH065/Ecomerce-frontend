import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../style/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const stock = 3;
const quantity = 2;

export const Items = [
  {
    name: "mackbook",
    image: "https://icon-library.com/images/react-icon/react-icon-29.jpg",
    product: "mfem9hndjk2j",
    stock: 3,
    price: 3889,
    quantity: 2,
  },
  {
    name: "Nick Shoes ",
    image: "https://icon-library.com/images/react-icon/react-icon-29.jpg",
    product: "mfem9hnkkdj1fdjk2j",
    stock: 3,
    price: 3885,
    quantity: 2,
  },
  {
    name: "Nick Shoes ",
    image: "https://icon-library.com/images/react-icon/react-icon-29.jpg",
    product: "mfem9hnk2kdjfdjk2j",
    stock: 3,
    price: 3885,
    quantity: 2,
  },
  {
    name: "Nick Shoes ",
    image: "https://icon-library.com/images/react-icon/react-icon-29.jpg",
    product: "mfem9hnkf3ikdjfdjk2j",
    stock: 3,
    price: 3885,
    quantity: 2,
  },
  {
    name: "Nick Shoes ",
    image: "https://icon-library.com/images/react-icon/react-icon-29.jpg",
    product: "mfem9hnkkdfh4uirjfdjk2j",
    stock: 3,
    price: 3885,
    quantity: 2,
  },
  {
    name: "Nick Shoes ",
    image: "https://icon-library.com/images/react-icon/react-icon-29.jpg",
    product: "fhu4d",
    stock: 3,
    price: 3885,
    quantity: 2,
  },
];

const Cart = () => {
  const navigate = useNavigation();

  const incre = (id, qty, stock) => {
    console.log("incre", id, qty, stock);
  };

  const decrementHandler = (id, qty) => {
    console.log("decre");
  };
  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
      }}
    >
      {/* Header */}
      <Header back={true} emptyCart={true} />

      {/* Heading */}
      <Heading
        text1="Shopping"
        text2="Cart"
        containnerStyle={{ paddingTop: 70, paddingLeft: 35 }}
      />

      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {Items.map((i, index) => (
            <CartItem
              // navigate={navigate}
              key={i.product}
              id={i.product}
              name={i.name}
              stock={i.stock}
              amount={i.price}
              imgSrc={i.image}
              index={index}
              qty={i.quantity}
              decrementHandler={decrementHandler}
              incre={incre}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 items</Text>
        <Text>₹ 0</Text>
      </View>

      <TouchableOpacity
        onPress={
          Items.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
