import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { colors, defaultStyle, headdinform } from "../style/styles";
import { Avatar, Button } from "react-native-paper";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ButtonBox from "../components/ButtonBox";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const user = {
  name: "Ankit",
  email: "Ankit065@gmail.com",
};

const loading = false;
const Profile = ({ route }) => {
  const navigation = useNavigation();
  const [avatar, setavatar] = useState(null);

  const logoutHandler = () => {
    console.log("Sigh out");
  };

  const navigateHandler = (text) => {
    switch (text) {
      case "Admin":
        navigation.navigate("adminpanel");
        break;
      case "Order":
        navigation.navigate("orders");
        break;
      case "Profile":
        navigation.navigate("updateprofile");
        break;
      case "Password":
        navigation.navigate("updatepassword");
        break;
      case "Sigh out":
        logoutHandler();
        break;

      default:
      case "Order":
        navigation.navigate("orders");
        break;
    }
  };

  useEffect(() => {
    if (route.params?.image) setavatar(route.params.image);
  }, [route.params]);
  return (
    <>
      <View {...defaultStyle}>
        <View style={{ marginBottom: 20 }}>
          <Text style={headdinform}>Profile</Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
          <>
            <View style={style.container}>
              <Avatar.Image
                source={{ uri: avatar }}
                size={100}
                style={{ backgroundColor: colors.color1 }}
              />

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("camera", { updateProfile: true })
                }
              >
                <Button textColor={colors.color1}>Change Photo</Button>
              </TouchableOpacity>

              <Text style={style.name}>{user.name}</Text>
              <Text style={{ fontWeight: "300", color: colors.color2 }}>
                {user.email}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-between",
              }}
            >
              <ButtonBox
                headler={navigateHandler}
                text={"Order"}
                icon={"format-list-bulleted-square"}
              />
              <ButtonBox
                headler={navigateHandler}
                text={"Admin"}
                icon={"view-dashboard"}
                reverse={true}
              />
              <ButtonBox
                headler={navigateHandler}
                text={"Profile"}
                icon={"pencil"}
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-evenly",
              }}
            >
              <ButtonBox
                headler={navigateHandler}
                text={"Password"}
                icon={"pencil"}
              />
              <ButtonBox
                headler={navigateHandler}
                text={"Sigh out"}
                icon={"exit-to-app"}
              />
            </View>
          </>
        )}
      </View>

      <Footer />
    </>
  );
};

const style = StyleSheet.create({
  container: {
    elevation: 7,
    backgroundColor: colors.color3,
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    color: colors.color2,
  },
});

export default Profile;
