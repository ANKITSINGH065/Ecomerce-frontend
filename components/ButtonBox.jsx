import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../style/styles";
import { Avatar } from "react-native-paper";

const ButtonBox = ({
  icon,
  text,
  headler,
  reverse = false,
  loading = false,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: reverse ? colors.color1 : colors.color3,
        height: 80,
        width: 80,
        borderRadius: 20,
        alignItems: "center",
      }}
      onPress={() =>headler(text)}
      disabled={loading}
      activeOpacity ={1}
    >
      <Avatar.Icon
        icon={icon}
        size={50}
        style={{ backgroundColor: reverse ? colors.color1 : colors.color3 }}
        color={colors.color2}
      />
      <Text style={{ color: colors.color2, textAlign: "center" }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonBox;
