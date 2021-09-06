import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import Searchbar from "../../components/SearchBar";
import FetchAllCategories from "../../dao/CategoryDao";
import sharedStyle from "../../config/sharedStyle";
import colors from "../../config/colors";
import FetchProductsFromCategory from "../../dao/ProductDao";

export default function ShopScreen(props) {
  const [categories, setCategories] = useState(FetchAllCategories());
  const [products, setProducts] = useState(FetchProductsFromCategory);

  const ListItem = ({ category, navigation }) => {
    const handlePress = (category) => {
      setProducts(FetchProductsFromCategory(category));
      navigation.navigate("ProductsScreen", { products: products });
    };

    return (
      <TouchableOpacity
        style={{ flexDirection: "row", marginBottom: 25 }}
        onPress={() => handlePress(category.key)}
      >
        <Image
          source={{ width: 60, height: 60, uri: category.picture }}
          style={{ borderRadius: 3 }}
        />
        <Text
          style={{
            borderBottomColor: colors.lightgrey,
            borderBottomWidth: 1,
            width: "100%",
          }}
        >
          {category.key}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={sharedStyle.screenContainer}>
      <Searchbar navigation={props.navigation} />
      <Text
        style={{
          margin: 10,
          marginBottom: 20,
          fontSize: 20,
        }}
      >
        Catégories
      </Text>
      <FlatList
        contentContainerStyle={{ padding: 15 }}
        data={categories}
        renderItem={({ item }) => (
          <ListItem category={item} navigation={props.navigation} />
        )}
      />
    </View>
  );
}
