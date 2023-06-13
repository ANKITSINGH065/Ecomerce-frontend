import { View, Text, ScrollView, TouchableOpacity } from "react-native";
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
import { Avatar, Button, TextInput, configureFonts } from "react-native-paper";
import SelectComponent from "../../components/SelectComponent";

const NewProduct = ({ navigation,route }) => {
  const loading = false;
  const loadingtoOther = false;
  const [image, setImage] = useState("");
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
  const [visible, setvisible] = useState(false);

  const submitHandler = () => {
    console.log(name, description, price, stock, categoryID);
  };

  useEffect(() => {
    if (route.params?.image) setImage(route.params.image);
  }, [route.params]);

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
              <View
                style={{
                  width: 80,
                  height: 80,
                  alignSelf: "center",
                  marginBottom: 20,
                }}
              >
                <Avatar.Image
                  size={80}
                  style={{
                    backgroundColor: colors.color1,
                  }}
                  source={{
                    uri: image ? image : null,
                  }}
                />

                <TouchableOpacity>
                  <Avatar.Icon
                    icon={"camera"}
                    size={30}
                    color={colors.color3}
                    style={{
                      backgroundColor: colors.color2,
                      position: "absolute",
                      bottom: 0,
                      right: -5,
                    }}
                  />
                </TouchableOpacity>
              </View>

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
                keyboardType="number-pad"
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

export default NewProduct;
