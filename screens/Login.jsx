import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import {
  colors,
  defaultStyle,
  inputStyling,
  inputOption,
  headdinform,
  style,
} from "../style/styles";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

const Login = () => {
  const navigation = useNavigation();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();

  const submitHandler = () => {
    alert("Yes");
  };

  const lodding = false;
  return (
    <>
      <View style={defaultStyle}>
        <View style={{ marginBottom: 20 }}>
          <Text style={headdinform}>Login</Text>
        </View>

        <View style={style.container}>
          <TextInput
            {...inputOption}
            placeholder="Email"
            value={email}
            onChangeText={setemail}
            keyboardType="email-address"
          />
          <TextInput
            {...inputOption}
            placeholder="Password"
            value={password}
            onChangeText={setpassword}
            secureTextEntry={true}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate("forgetpassword")}
            activeOpacity={0.8}
          >
            <Text style={style.forget}>Forget Password</Text>
          </TouchableOpacity>

          <Button
            textColor={colors.color2}
            style={style.btn}
            onPress={submitHandler}
            loading={lodding}
          >
            Log In
          </Button>

          <Text style={style.or}>OR</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("signup")}
            activeOpacity={0.8}
          >
            <Text style={style.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default Login;
