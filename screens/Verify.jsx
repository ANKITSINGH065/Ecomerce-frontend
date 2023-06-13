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
const Verify = () => {
  const navigation = useNavigation();
  const [otp, setotp] = useState();
  const [password, setpassword] = useState();

  const submitHandler = () => {
    alert("Yes");
    navigation.navigate("login");
  };

  const lodding = false;
  return (
    <>
      <View style={defaultStyle}>
        <View style={{ marginBottom: 20 }}>
          <Text style={headdinform}>Verify</Text>
        </View>

        <View style={style.container}>
          <TextInput
            {...inputOption}
            placeholder="OTP"
            value={otp}
            onChangeText={setotp}
            keyboardType="number-pad"
          />
          <TextInput
            {...inputOption}
            placeholder="Password"
            value={password}
            onChangeText={setpassword}
            keyboardType="number-pad"
          />

          <Button
            textColor={colors.color2}
            style={style.btn}
            onPress={submitHandler}
            loading={lodding}
          >
            Reset
          </Button>

          <Text style={style.or}>OR</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("forgetpassword")}
            activeOpacity={0.8}
          >
            <Text style={style.link}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default Verify;
