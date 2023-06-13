import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors, defaultStyle } from "../style/styles";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button, RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Payment = ({ route }) => {
  const navigation = useNavigation();
  const [PaymentMethod, setPaymentMethod] = useState("COD"); 
  const isAuthenticated = false;
  const redirectToLogin = () => {
    navigation.navigate("login");
  };
  const codHandler = () => {};

  const onlineHandler = () => {};
  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <Heading
        text1={"Payment"}
        text2="Page"
        containnerStyle={{ paddingTop: 70 }}
      />

      <View style={styles.container}>
        <RadioButton.Group
          onValueChange={setPaymentMethod}
          value={PaymentMethod}
        >
          <View style={styles.radioStyle}>
            <Text style={styles.radioStyleText}>Cash On Delivery</Text>
            <RadioButton color={colors.color1} value={"COD"} />
          </View>
          <View style={styles.radioStyle}>
            <Text style={styles.radioStyleText}>ONLINE</Text>
            <RadioButton color={colors.color1} value={"ONLINE"} />
          </View>
        </RadioButton.Group>
      </View>

      <TouchableOpacity>
        <Button
          onPress={
            !isAuthenticated
              ? redirectToLogin
              : PaymentMethod === "COD"
              ? codHandler
              : onlineHandler
          }
          style={styles.btn}
          textColor={colors.color2}
          icon={
            PaymentMethod === "COD" ? "check-circle" : "circle-multiple-outline"
          }
        >
          {PaymentMethod === "COD" ? "Place Order" : "Order Online"}
        </Button>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    marginVertical: 20,
    flex: 1,
    justifyContent: "center",
  },
  radioStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  radioStyleText: {
    fontWeight: "600",
    fontSize: 18,
    textTransform: "uppercase",
    color: colors.color2,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    margin: 10,
    padding: 5,
  },
});

export default Payment;
