import React, { useState } from "react";
import { TextInput, View, TouchableOpacity, StyleSheet } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import colors from "../config/colors";

import FetchProductsFromCategory from "../dao/ProductDao";

export default function Searchbar({ navigation }) {
  const [text, onChangeText] = useState("");

  const handleClearButton = () => {
    onChangeText("");
  };

  const search = () => {
    let products = FetchProductsFromCategory(text).filter((item) =>
      item.id.toLowerCase().includes(text.toLowerCase())
    );
    onChangeText("");
    console.log("FROM SEARCH");
    navigation.navigate("ProductsScreen", { products: products });
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity style={styles.iconContainer} onPress={search}>
        <Ionicons name={"search"} size={20} />
      </TouchableOpacity>
      <TextInput
        style={styles.inputText}
        onChangeText={onChangeText}
        placeholder="Search..."
        value={text}
      />
      <TouchableOpacity style={styles.clearButton} onPress={handleClearButton}>
        <MaterialIcons name={"clear"} size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: colors.primary,
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },
  inputText: {
    width: "75%",
    padding: 10,
    borderWidth: 1,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    borderColor: colors.lightgrey,
    fontSize: 18,
  },
  clearButton: {
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
  },
});
