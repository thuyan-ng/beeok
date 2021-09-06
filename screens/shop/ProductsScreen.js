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
import { Card } from "react-native-elements";
import sharedStyle from "../../config/sharedStyle";

export default function ProductsScreen({ route, navigation }) {
  const [products, setProducts] = useState(route.params.products);

  const ListItem = ({ product, navigation }) => {
    const handlePress = (product) => {
      navigation.navigate("ProductDetailScreen", { product: product });
    };
    console.log(products);
    return (
      <TouchableOpacity onPress={() => handlePress(product)}>
        <Card key={product.id} contentContainerStyle={{ flex: 1 }}>
          <Card.Title>{product.id}</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: product.picture }} resizeMode="contain" />
          <Text style={{ marginBottom: 10 }}>{product.price}</Text>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={sharedStyle.screenContainer}>
      <Searchbar navigation={navigation} />
      <Text
        style={{
          margin: 10,
          marginBottom: 20,
          fontSize: 20,
        }}
      >
        {route.params.category}
      </Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ListItem product={item} navigation={navigation} />
        )}
      />
    </View>
  );
}
