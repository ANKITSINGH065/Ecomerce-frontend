import { View, Text, ScrollView } from "react-native";
import React from "react";
import { defaultStyle, headdinform } from "../style/styles";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Headline } from "react-native-paper";
import OrderItem from "../components/OrderItem";

export const orders = [
  {
    _id: "89893ur8j",
    shippingInfo: {
      address: "lala lajpata road",
      city: "Indore",
      country: "India",
      pinCode: "483501",
    },
    createdAt: "12-2-1023",
    orderStatus: "process",
    totelAmount: "2000",
    paymentMethod: "COD",
  },
  {
    _id: "48u4838348",
    shippingInfo: {
      address: "lala lajp3ata road",
      city: "Indore",
      country: "India",
      pinCode: "4833501",
    },
    createdAt: "12-2-1023",
    orderStatus: "process",
    totelAmount: "20300",
    paymentMethod: "COD",
  },
  {
    _id: "48u4447838348",
    shippingInfo: {
      address: "lala lajp23ata road",
      city: "Indore",
      country: "India",
      pinCode: "4833501",
    },
    createdAt: "12-2-1023",
    orderStatus: "process",
    totelAmount: "202300",
    paymentMethod: "COD",
  },
  {
    _id: "48u483238348",
    shippingInfo: {
      address: "lala lajp3ata road",
      city: "Indore",
      country: "India",
      pinCode: "4833501",
    },
    createdAt: "12-2-1023",
    orderStatus: "process",
    totelAmount: "2300",
    paymentMethod: "COD",
  },
  {
    _id: "48u482338348",
    shippingInfo: {
      address: "lala lajp3ata road",
      city: "Indore",
      country: "India",
      pinCode: "4833501",
    },
    createdAt: "12-2-1023",
    orderStatus: "process",
    totelAmount: "200",
    paymentMethod: "COD",
  },
];

const admin = true;
const Orders = () => {
  const loading = false;
  return (
    <View {...defaultStyle}>
      <Header back={true} />
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={headdinform}>Orders</Text>
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
                  orderDate={item.createdAt}
                  admin={admin}
                  loading={loading}
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

export default Orders;
