import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import {
  colors,
  defaultStyle,
  inputStyling,
  inputOption,
  headdinform,
  style,
  defaulImg,
} from "../style/styles";

import Header from "../components/Header";
const UpdateProfile = () => {
  const navigation = useNavigation("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const submitHandler = () => {
    alert("Yes");
    navigation.navigate("verify");
  };

  const disableBtn =
    !name || !email || !password || !address || !city || !country || !pincode;

  const lodding = false;
  return (
    <View style={defaultStyle}>
      <Header back={true} />
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={headdinform}>Edit Profile</Text>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{
          padding: 20,
          elevation: 10,
          borderRadius: 10,
          backgroundColor: colors.color3,
        }}
      >
        <View style={{ minHeight: 900 }}>
          <TextInput
            {...inputOption}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            {...inputOption}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            keyboardType="name-phone-pad"
          />
          <TextInput
            {...inputOption}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            keyboardType="number-pad"
          />
          <TextInput
            {...inputOption}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
            keyboardType="email-address"
          />
          <TextInput
            {...inputOption}
            placeholder="City"
            value={city}
            onChangeText={setCity}
            keyboardType="email-address"
          />

          <Button
            textColor={colors.color2}
            style={style.btn}
            onPress={submitHandler}
            loading={lodding}
            disabled={disableBtn}
          >
            Update
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;
