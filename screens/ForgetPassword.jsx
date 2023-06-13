import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

import {
  colors,
  defaultStyle,
  inputStyling,
  inputOption,
  headdinform,
  style,
} from "../style/styles";
const ForgetPassword = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const submitHandler = () => {
    alert("Yes");
    navigation.navigate("verify");
  };

  const lodding = false;
  return (
    <>
      <View style={defaultStyle}>
        <View style={{ marginBottom: 20 }}>
          <Text style={headdinform}>Forget Password</Text>
        </View>

        <View style={style.container}>
          <TextInput
            {...inputOption}
            placeholder="Email"
            value={email}
            onChangeText={setemail}
            keyboardType="email-address"
          />

          <Button
            textColor={colors.color2}
            style={style.btn}
            onPress={submitHandler}
            loading={lodding}
          >
            Send OTP
          </Button>

          <Text style={style.or}>OR</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("signup")}
            activeOpacity={0.8}
          >
            <Text style={style.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default ForgetPassword;
