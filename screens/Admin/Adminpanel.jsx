import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, headdinform } from "../../style/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import ButtonBox from "../../components/ButtonBox";
import ProductListHeading from "../../components/ProductListHeading";
import { products } from "../Home";
import ProductListItem from "../../components/ProductListItem";
import { useNavigation } from "@react-navigation/native";
import Chart from "../../components/Chart";

const Adminpanel = () => {
  const navigation = useNavigation();
  const loading = false;
  const navigateHeandler = (text) => {
    switch (text) {
      case "Category":
        navigation.navigate("categories");
        break;
      case "All orders":
        navigation.navigate("adminorders");
        break;
      case "Product":
        navigation.navigate("newproduct");
        break;

      default:
        navigation.navigate("adminorders");
        break;
    }
  };
  const deleteProductHandler = (id) => {
    console.log(`Deleted Product: ${id}`);
  };

  return (
    <View style={defaultStyle}>
      <Header back={true} />

      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={headdinform}>Admin Pannal</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <>
          <View
            style={{
              backgroundColor: colors.color1,
              borderRadius: 20,
              alignItems: "center",
            }}
          >
            <Chart inStock={1} outOfStock={2} />
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                margin: 10,
                justifyContent: "space-evenly",
              }}
            >
              <ButtonBox
                icon={"plus"}
                text={"Product"}
                headler={() => navigateHeandler("Product")}
              />
              <ButtonBox
                icon={"format-list-bulleted-square"}
                text={"All orders"}
                headler={() => navigateHeandler("All orders")}
                reverse={true}
              />
              <ButtonBox
                icon={"plus"}
                text={"Category"}
                headler={() => navigateHeandler("Category")}
              />
            </View>
          </View>

          <ProductListHeading />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {products.map((item, index) => (
                <ProductListItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.price}
                  name={item.name}
                  imgSrc={item.images[0].url}
                  stock={item.stock}
                  category={item.category}
                  navigate={navigation}
                  deleteHandler={deleteProductHandler}
                />
              ))}
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
});

export default Adminpanel;
