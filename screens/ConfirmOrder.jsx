import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../style/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Items } from "./Cart";
import ConfirmOrderItem from "../components/ConfirmOrderItem";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const ConfirmOrder = () => {
  const navigate = useNavigation();
  const itemprice = 4000;
  const shippingCharges = 200;
  const tax = 0.18 * itemprice;
  const totelAmount = itemprice + shippingCharges + 1;
  return (
    <View
      style={{
        ...defaultStyle,
      }}
    >
      <Header back={true} />
      <Heading
        text1={"conform"}
        text2={"oredr"}
        containnerStyle={{ paddingTop: 70 }}
      />

      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView showsHorizontalScrollIndicator={false}>
          {Items.map((i) => (
            <ConfirmOrderItem
              key={i.product}
              image={i.image}
              price={i.price}
              name={i.name}
              quantity={i.quantity}
            />
          ))}
        </ScrollView>
      </View>
      <Pricetag heading={"Subtotal"} value={itemprice} />
      <Pricetag heading={"Shipping"} value={shippingCharges} />
      <Pricetag heading={"Tax"} value={tax} />
      <Pricetag heading={"Total"} value={totelAmount} />

      <TouchableOpacity
        onPress={() =>
          navigate.navigate("payment", {
            itemprice,
            shippingCharges,
            tax,
            totelAmount,
          })
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 10,
          }}
          textColor={colors.color2}
          icon={"chevron-right"}
        >
          payment
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const Pricetag = ({ heading, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 5,
    }}
  >
    <Text style={{ fontWeight: "800" }}>{heading}</Text>
    <Text>₹{value}</Text>
  </View>
);

export default ConfirmOrder;
