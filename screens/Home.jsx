import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Button } from "react-native-paper";
import Header from "../components/Header";
import { colors, defaultStyle } from "../style/styles";
import SearchModal from "../components/SearchModal";
import { useNavigation } from "@react-navigation/native";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

export const products = [
  {
    price: 20,
    stock: 23,
    name: "Miltone",
    _id: "sf7ddf67sdfhj",
    category: "Laptop",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGaFJn2kXD9_tM9sDubs67zWPkXE224gZmUA&usqp=CAU",
      },
    ],
  },
  {
    price: 500,
    stock: 23,
    name: "Miltone",
    _id: "dui3878diui78d",
    category: "Bottel",

    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGaFJn2kXD9_tM9sDubs67zWPkXE224gZmUA&usqp=CAU",
      },
    ],
  },
  {
    price: 500,
    stock: 23,
    name: "Mobile phone",
    _id: "duidiuijhdu78d",
    category: "Mobile",

    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGaFJn2kXD9_tM9sDubs67zWPkXE224gZmUA&usqp=CAU",
      },
    ],
  },
  {
    price: 500,
    stock: 23,
    name: "Grosry",
    _id: "duiiwdhidiui78d",
    category: "Grosery",

    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGaFJn2kXD9_tM9sDubs67zWPkXE224gZmUA&usqp=CAU",
      },
    ],
  },
  {
    price: 500,
    stock: 23,
    name: "TV",
    _id: "duidiui78d",
    category: "electronic",

    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGaFJn2kXD9_tM9sDubs67zWPkXE224gZmUA&usqp=CAU",
      },
    ],
  },
];

const addToCardHandler = (id) => {
  console.log("Add to card", id);
};
const Home = () => {
  const navigate = useNavigation();
  const categories = [
    { category: "one", _id: "sahda6dsa" },
    { category: "two", _id: "sahsgsd6tgsdsa" },
    { category: "three", _id: "sashs6t6sv6dsa" },
    { category: "four", _id: "sahdasdhu83dsa" },
    { category: "five", _id: "sahdashbd6dsa" },
    { category: "Six", _id: "sahdaskshfjshbd6dsa" },
    { category: "Seven", _id: "sahdashjhdsjbd6dsa" },
    { category: "Eight", _id: "sahdashbjsdf8d6dsa" },
  ];

  const [category, setCategory] = useState("");
  const [activeSearch, setactiveSearch] = useState(false);
  const [searchQuery, setsearchQuery] = useState("");
  const categoriButtonHandler = (id) => {
    setCategory(id);
  };

  return (
    <>
      {activeSearch && (
        <SearchModal
          searchQuery={searchQuery}
          setsearchQuery={setsearchQuery}
          setactiveSearch={setactiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        <Header />
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Heading text1={"our"} text2={"Shopping"} />

          <View>
            <TouchableOpacity onPress={() => setactiveSearch(!activeSearch)}>
              <Avatar.Icon
                icon={"magnify"}
                color={"gray"}
                style={{ backgroundColor: colors.color2, elevation: 12 }}
                size={50}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "row", height: 50, marginTop: 10 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            // contentContainerStyle={{ alignItems: "center" }}
          >
            {categories.map((item, index) => (
              <Button
                key={item._id}
                style={{
                  backgroundColor:
                    category === item._id ? colors.color1 : colors.color5,
                  borderRadius: 100,
                  padding: 5,
                }}
                onPress={() => categoriButtonHandler(item._id)}
              >
                <Text style={{ fontSize: 12, color: "gray" }}>
                  {item.category}
                </Text>
              </Button>
            ))}
          </ScrollView>
        </View>

        <View style={{ flex: 1 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            // style={{ marginBottom: -5 }}
          >
            {products.map((item, index) => (
              <ProductCard
                key={item._id}
                stock={item.stock}
                name={item.name}
                price={item.price}
                image={item.images[0]?.url}
                id={item._id}
                addToCardHandler={addToCardHandler}
                i={index}
                navigate={navigate}
              />
            ))}
          </ScrollView>
        </View>
      </View>

      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
