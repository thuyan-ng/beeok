import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import FetchItemCount from "../../dao/CartDao";

export default function CartScreen(props) {
  const [count, setCount] = useState(FetchItemCount("0"));

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {count === "0" ? (
        <Text>Il n'y a rien dans votre panier...</Text>
      ) : (
        <Text>{count} article(s) dans votre panier</Text>
      )}
    </View>
  );
}
