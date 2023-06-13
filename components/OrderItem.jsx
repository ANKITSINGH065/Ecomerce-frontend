import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../style/styles";
import { Button } from "react-native-paper";

const updateHandler = ({ id }) => {
  console.log("Update Successful");
};
const OrderItem = ({
  id,
  i,
  price,
  status,
  paymentMethod,
  address,
  city,
  country,
  pinCode,
  orderDate,
  admin,
  loading,
}) => {
  return (
    <View
      {...style.container}
      style={{ backgroundColor: i % 2 === 0 ? colors.color2 : colors.color3 }}
    >
      <Text
        style={{
          ...style.text,
          backgroundColor: i % 2 === 0 ? colors.color3 : colors.color1,
        }}
      >
        ID - {id}
      </Text>

      <TextBox title={"Address"} value={address} i={i} />
      <TextBox title={"Order on "} value={orderDate} i={i} />
      <TextBox title={"Price"} value={price} i={i} />
      <TextBox title={"Status"} value={status} i={i} />
      <TextBox title={"Payment Method"} value={paymentMethod} i={i} />

      {admin && (
        <Button
          icon={"update"}
          textColor={i % 2 === 0 ? colors.color2 : colors.color3}
          style={{
            width: 120,
            alignSelf: "center",
            margin: 10,
            backgroundColor: i % 2 === 0 ? colors.color3 : colors.color2,
          }}
          onPress={() => updateHandler(id)}
          loading={loading}
          disabled={loading}
          mode="contained"
        >
          Update
        </Button>
      )}
    </View>
  );
};

const TextBox = ({ title, value, i }) => (
  <Text
    style={{
      marginVertical: 7,
      color: i % 2 === 0 ? colors.color3 : colors.color2,
    }}
  >
    <Text style={{ fontWeight: "900" }}>{title} - </Text>
    {title === "Price" ? "₹" : null}
    {value}
  </Text>
);

const style = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
  },
  text: {
    color: colors.color2,
    fontSize: 16,
    fontWeight: "900",
    marginHorizontal: -20,
    marginTop: -20,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default OrderItem;
