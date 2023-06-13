import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  colors,
  defaultStyle,
  headdinform,
  inputOption,
  inputStyling,
} from "../../style/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { Button, TextInput, configureFonts } from "react-native-paper";
import SelectComponent from "../../components/SelectComponent";

const UpdateProduct = ({ navigation, route }) => {
  const loading = false;
  const loadingtoOther = false;
  const [id] = useState(route.params.id);
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");
  const [stock, setstock] = useState("");
  const [category, setcategory] = useState("Laptop");
  const [categoryID, setcategoryID] = useState("");
  const [categories, setcategories] = useState([
    { _id: "ud893u98", category: "Laptop" },
    { _id: "ud893udnf3998", category: "Watch" },
    { _id: "ud893u98", category: "Mobile" },
    { _id: "ud893u98", category: "Machine" },
  ]);

  const images = [
    {
      uri: "https://icon-library.com/images/react-icon/react-icon-29.jpg",
      _id: "jd309uj93",
    },
    {
      uri: "https://icon-library.com/images/react-icon/react-icon-29.jpg",
      _id: "jd3shfi8e09uj93",
    },
    {
      uri: "https://icon-library.com/images/react-icon/react-icon-29.jpg",
      _id: "jddh38309uj93",
    },
    {
      uri: "https://icon-library.com/images/react-icon/react-icon-29.jpg",
      _id: "jd3hd809uj93",
    },
    {
      uri: "https://icon-library.com/images/react-icon/react-icon-29.jpg",
      _id: "jd309ujokoc93",
    },
  ];
  const [visible, setvisible] = useState(false);

  const submitHandler = () => {
    console.log(name, description, price, stock, categoryID);
  };
  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
        <Header back={true} />
        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={headdinform}>Update Product</Text>
        </View>

        {loading ? (
          <Loader />
        ) : (
          <ScrollView
            style={{
              padding: 20,
              elevation: 10,
              borderRadius: 10,
              backgroundColor: colors.color3,
            }}
          >
            <View style={{ justifyContent: "center", height: 650 }}>
              <Button
                onPress={() =>
                  navigation.navigate("productimages", { id, images: images })
                }
                textColor={colors.color1}
              >
                Mange Images
              </Button>

              <TextInput
                {...inputOption}
                placeholder="Name"
                value={name}
                onChangeText={setname}
              />
              <TextInput
                {...inputOption}
                placeholder="Description"
                value={description}
                onChangeText={setdescription}
              />
              <TextInput
                {...inputOption}
                placeholder="Price"
                value={price}
                onChangeText={setprice}
              />
              <TextInput
                {...inputOption}
                placeholder="Stock"
                value={stock}
                onChangeText={setstock}
              />
              <Text
                style={{
                  ...inputStyling,
                  textAlign: "center",
                  textAlignVertical: "center",
                  borderRadius: 3,
                }}
                onPress={() => setvisible(true)}
              >
                {category}
              </Text>
              <Button
                textColor={colors.color2}
                style={{
                  backgroundColor: colors.color1,
                  margin: 20,
                  padding: 6,
                }}
                onPress={submitHandler}
                loading={loadingtoOther}
                disabled={loadingtoOther}
              >
                Update
              </Button>
            </View>
          </ScrollView>
        )}
      </View>

      <SelectComponent
        categories={categories}
        setCategoryID={setcategoryID}
        setCategory={setcategory}
        visible={visible}
        setVisible={setvisible}
      />
    </>
  );
};

export default UpdateProduct;
