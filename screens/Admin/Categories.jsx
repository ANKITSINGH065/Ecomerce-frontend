import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  headdinform,
  inputOption,
} from "../../style/styles";
import Header from "../../components/Header";
import { Avatar, Button, TextInput } from "react-native-paper";

const categories = [
  {
    name: "Laptop",
    _id: "jsdijsaidjs",
  },
  {
    name: "Mobile",
    _id: "jsdijsjjsaidjs",
  },
  {
    name: "electronic",
    _id: "jsdijsjjsaiidjs",
  },
  {
    name: "Bikes",
    _id: "jsdinsjsaidjs",
  },
];

const loading = false;
const Categories = () => {
  const [category, setcategory] = useState();
  const deleteHandler = (id) => {
    console.log(`deleted item ,${id}`);
  };

  const submitHandler = () => {};
  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={headdinform}>Categories</Text>
      </View>

      <ScrollView
        style={{
          marginBottom: 20,
        }}
      >
        <View
          style={{
            backgroundColor: colors.color2,
            padding: 20,
            minHeight: 400,
          }}
        >
          {categories.map((item, index) => (
            <CategoryCard
              name={item.name}
              id={item._id}
              key={item._id}
              deleteHandler={deleteHandler}
            />
          ))}
        </View>
      </ScrollView>

      <View style={style.container}>
        <TextInput
          {...inputOption}
          placeholder="category"
          value={category}
          onChangeText={setcategory}
        />

        <Button
          textColor={colors.color2}
          disabled={!category}
          onPress={submitHandler}
          loading={loading}
        >
          Add
        </Button>
      </View>
    </View>
  );
};

const CategoryCard = ({ name, id, deleteHandler }) => (
  <View style={style.cardcontainer}>
    <Text style={style.cardtext}>{name}</Text>
    <TouchableOpacity onPress={() => deleteHandler(id)}>
      <Avatar.Icon
        icon={"delete"}
        size={30}
        style={{ backgroundColor: colors.color1 }}
      />
    </TouchableOpacity>
  </View>
);

const style = StyleSheet.create({
  container: {
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: colors.color3,
  },
  cardcontainer: {
    backgroundColor: colors.color2,
    elevation: 5,
    margin: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
  },
  cardtext: {
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

export default Categories;
