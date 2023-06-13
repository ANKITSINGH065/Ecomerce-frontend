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
import Header from "../components/Header";

const UpdatePassword = () => {
  const navigation = useNavigation();
  const [oldpassword, setoldpassword] = useState();
  const [newpassword, setnewpassword] = useState();

  const submitHandler = () => {
    alert("Yes");
  };

  const lodding = false;
  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={headdinform}>Update Password</Text>
      </View>

      <View style={style.container}>
        <TextInput
          {...inputOption}
          placeholder="Old Password"
          value={oldpassword}
          onChangeText={setoldpassword}
          secureTextEntry={true}
        />
        <TextInput
          {...inputOption}
          placeholder="New Password"
          value={newpassword}
          onChangeText={setnewpassword}
          secureTextEntry={true}
        />

        <Button
          textColor={colors.color2}
          style={style.btn}
          onPress={submitHandler}
          loading={lodding}
        >
          Change Password
        </Button>
      </View>
    </View>
  );
};

export default UpdatePassword;
