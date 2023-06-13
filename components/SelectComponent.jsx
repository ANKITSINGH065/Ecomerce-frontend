import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Avatar, Headline } from "react-native-paper";
import { colors } from "../style/styles";

const SelectComponent = ({
  categories,
  setCategoryID,
  setCategory,
  visible,
  setVisible,
}) => {
  const selectCategoryHandler = (item) => {
    setCategory(item.category);
    setCategoryID(item._id);
    setVisible(false);
  };
  return (
    visible && (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <Avatar.Icon
            icon={"close"}
            size={30}
            style={{ backgroundColor: colors.color1, alignSelf: "flex-end" }}
          />
        </TouchableOpacity>
        <Headline style={styles.heading}>Select a category</Headline>

        <ScrollView>
          {categories.map((i) => (
            <Text
              key={i._id}
              onPress={() => selectCategoryHandler(i)}
              style={styles.text}
            >
              {i.category}
            </Text>
          ))}
        </ScrollView>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "90%",
    backgroundColor: colors.color2,
    borderRadius: 20,
    position: "absolute",
    padding: 35,
    alignSelf: "center",
    top: 50,
    elevation: 5,
  },
  heading: {
    textAlign: "center",
    marginVertical: 10,
    backgroundColor: colors.color3,
    borderRadius: 5,
    padding: 3,
    color: colors.color2,
  },
  text: {
    fontSize: 17,
    fontWeight: "100",
    textTransform: "uppercase",
    marginVertical: 10,
  },
});
export default SelectComponent;
