/** @format */

import React from "react";
import { FlatList, View, Text } from "react-native";
import Item from "./Item";
import { FontAwesome } from "@expo/vector-icons";

function ItemList() {
  const item = [
    {
      itemName: "Royal Blue PullOver",
      rating: "5",
      price: "$ 100",
      key: "1",
      image: require("../assets/Royal_Blue_Pullover.jpg"),
    },
    {
      itemName: "Lady's Pink Hoody",
      rating: "rating",
      price: "$ 100",
      key: "2",
      image: require("../assets/pink.jpg"),
    },
    {
      itemName: "Black Men Pullover",
      rating: "5",
      price: "$ 100",
      key: "3",
      image: require("../assets/classic.jpg"),
    },
    {
      itemName: " Red Casual Hoodie",
      rating: "5",
      price: "$ 100",
      key: "4",
      image: require("../assets/casual.jpg"),
    },
  ];
  return (
    <View>
      <FlatList
        data={item}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <View>
              <Item
                itemName={item.itemName}
                rating={item.rating}
                image={item.image}
                price={item.price}
              />
            </View>
          );
        }}
      />
    </View>
  );
}
export default ItemList;
