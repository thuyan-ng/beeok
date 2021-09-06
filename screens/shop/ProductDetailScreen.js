import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  ToastAndroid,
  Alert,
  Platform,
} from "react-native";
import { Card } from "react-native-elements";

import sharedStyle from "../../config/sharedStyle";

// Colors
import Colors from "../../config/colors";

export default function ProductDetailScreen({ route }) {
  const product = route.params.product;

  const [number, setNumber] = useState("0");

  const handlePressPlus = () => {
    setNumber(number !== "" ? (parseInt(number) + 1).toString() : "1");
  };
  const handlePressMinus = () => {
    setNumber(number > 0 ? (parseInt(number) - 1).toString() : "0");
  };

  const handleAddToCart = (msg) => {
    Platform.OS === "android"
      ? ToastAndroid.show(msg, ToastAndroid.SHORT)
      : Alert.alert(msg);
    setNumber("");
  };

  return (
    <View style={{ backgroundColor: "white" }}>
      <Card key={product.id}>
        <Card.Title>{product.id}</Card.Title>
        <Card.Divider />
        <Card.Image
          source={{ width: "100", height: "100", uri: product.picture }}
          resizeMode="contain"
        />
        <Text style={{ marginBottom: 10 }}>{product.price}</Text>

        <View style={{ flexDirection: "row", paddingBottom: 10 }}>
          <Button
            color={Colors.primary}
            title=" - "
            onPress={() => handlePressMinus()}
          />
          <TextInput
            style={{ textAlign: "center", width: 50 }}
            keyboardType="numeric"
            placeholder="0"
            value={number}
            onChangeText={setNumber}
          />
          <Button
            color={Colors.primary}
            title=" + "
            onPress={() => handlePressPlus()}
          />
        </View>

        <Button
          color={Colors.primary}
          title="Ajouter au panier"
          onPress={() => handleAddToCart("Ajouté au panier!")}
        />
        <Text>X unité(s) disponible(s)</Text>
      </Card>
    </View>
  );
}
