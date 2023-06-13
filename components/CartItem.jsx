import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../style/styles";
import { Avatar } from "react-native-paper";
import { iconOptions } from "../screens/ProDu";

const CartItem = ({
  id,
  name,
  stock,
  amount,
  imgSrc,
  index,
  qty,
  decrementHandler,
  incre,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        marginVertical: 20,
      }}
    >
      <View
        style={{
          width: "40%",
          backgroundColor: index % 2 === 0 ? colors.color1 : colors.color3,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <Image
          source={{ uri: imgSrc }}
          style={{
            width: 200,
            height: "100%",
            resizeMode: "contain",
            top: "-20%",
            left: "10%",
          }}
        />
      </View>

      <View
        style={{
          width: "40%",
          paddingHorizontal: 25,
        }}
      >
        <Text numberOfLines={1} style={{ fontSize: 17 }}>
          {name}
        </Text>
        <Text numberOfLines={2} style={{ fontSize: 17, fontWeight: "900" }}>
          ₹{amount}
        </Text>
      </View>
      <View
        style={{
          alignItems: "center",
          width: "20%",
          height: 80,
          justifyContent: "space-between",
          alignSelf: "center",
        }}
      >
        <TouchableOpacity onPress={() => decrementHandler(id, qty)}>
          <Avatar.Icon icon={"minus"} {...iconOptions} />
        </TouchableOpacity>
        <Text
          style={{
            backgroundColor: colors.color4,
            width: 25,
            height: 25,
            textAlignVertical: "center",
            textAlign: "center",
            borderWidth: 1,
            borderRadius: 5,
            borderColor: colors.color5,
          }}
        >
          {qty}
        </Text>

        <TouchableOpacity onPress={() => incre(id, qty, stock)}>
          <Avatar.Icon icon={"plus"} {...iconOptions} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
