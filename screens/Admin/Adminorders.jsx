import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, headdinform } from "../../style/styles";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import OrderItem from "../../components/OrderItem";
import { Headline } from "react-native-paper";
import { orders } from "../Orders";

const Adminorders = () => {
  const loading = false;
  const processOrderLoading = false;
  const updateHandler = () => {};
  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={headdinform}>All orders</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <View
          style={{
            padding: 10,
            flex: 1,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItem
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totelAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  address={item.shippingInfo.address}
                  city={item.shippingInfo.city}
                  country={item.shippingInfo.country}
                  pinCode={item.shippingInfo.pinCode}
                  admin={true}
                  orderDate={item.createdAt}
                  loading={processOrderLoading}
                  updateHandler={updateHandler}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders </Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Adminorders;
