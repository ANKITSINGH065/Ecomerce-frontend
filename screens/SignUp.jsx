import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Button, TextInput } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";

import {
  colors,
  defaultStyle,
  inputStyling,
  inputOption,
  headdinform,
  style,
  defaulImg,
} from "../style/styles";
const SignUp = ({ route }) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [pincode, setPincode] = useState();
  const [avtar, setAvtar] = useState(false);

  const submitHandler = () => {
    alert("Yes");
    navigation.navigate("verify");
    F;
  };

  const disableBtn =
    !name || !email || !password || !address || !city || !country || !pincode;

  const lodding = false;

  useEffect(() => {
    if (route.params?.image) setAvtar(route.params.image);
  }, [route.params]);
  return (
    <>
      <View style={defaultStyle}>
        <View style={{ marginBottom: 20 }}>
          <Text style={headdinform}>Sigh Up</Text>
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
            <Avatar.Image
              style={{ alignSelf: "center", backgroundColor: colors.color1 }}
              size={80}
              source={{ uri: avtar ? avtar : defaulImg }}
            />

            <TouchableOpacity onPress={() => navigation.navigate("camera")}>
              <Button textColor={colors.color1}>Change Image</Button>
            </TouchableOpacity>
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
            <TextInput
              {...inputOption}
              placeholder="Avatar"
              value={avtar}
              onChangeText={setAvtar}
              keyboardType="email-address"
            />

            <Button
              textColor={colors.color2}
              style={style.btn}
              onPress={submitHandler}
              loading={lodding}
              disabled={disableBtn}
            >
              Sign Up
            </Button>

            <Text style={style.or}>OR</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate("login")}
              activeOpacity={0.8}
            >
              <Text style={style.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Footer activeRoute="profile" />
    </>
  );
};

export default SignUp;
