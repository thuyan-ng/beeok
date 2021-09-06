import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { ScrollView } from "react-native";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen(props) {
  return (
    <View
      style={{
        paddingTop: StatusBar.currentHeight,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={{
          width: "100%",
          height: "35%",
          uri: "https://beeok.be/web/image/1365/zero%20waste.jpg",
        }}
        resizeMode={"stretch"}
        style={{ opacity: 0.8, backgroundColor: "black" }}
      />
      <View style={styles.welcome}>
        <Text style={{ color: "white", fontSize: 30 }}>
          Bienvenue chez Bee ok!
        </Text>
        <Text style={{ color: "white", fontSize: 20 }}>
          e-shop bio &amp; zéro déchets
        </Text>
      </View>
      <ScrollView style={{ margin: 15, marginBottom: 15 }}>
        <Text style={{ fontSize: 25 }}>Pourquoi Bee ok?</Text>
        <Text>
          Le nom Bee ok est choisi pour le sens multiple qu'il apporte. {"\n\n"}
          Bee qui signifie l'abeille en anglais, l'insecte le plus important sur
          terre. Albert Einstein à notamment dit : "Si les abeilles venaient à
          disparaître de la surface du globe, la race humaine n’aurait plus que
          4 ans à vivre. Plus d’abeilles, plus de pollinisation, plus d’animaux,
          plus d’humains" {"\n\n"}En ajoutant ok on peut entendre le mot bio
          dans notre nom. En effet, tous les produits que vous trouverez sur
          notre site sont certifiés bio. Toujours de l'anglais, "be ok" signifie
          que tout va bien et que nous sommes finalement en bonne santé.{" "}
          {"\n\n"}Enfin, on peut voir le mot ok comme étant 0k, zéro kilos de
          déchets générés. {"\n\n"}Nous sommes un magasin bio et zéro déchets en
          ligne. {"\n\n"}
          Chez bee ok, vous ne venez pas seulement acheter des produits, vous
          venez chercher une qualité, un gout, un projet qui met nos producteurs
          locaux en avant. Vous êtes certains que votre achat participera à un
          monde meilleur.
        </Text>
        <Image
          style={{ marginTop: 10 }}
          source={{
            width: "100%",
            height: 150,
            uri: "https://beeok.be/web/image/1696/Logo_Bee0k_color.png",
          }}
          resizeMode="contain"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    alignItems: "center",
    borderColor: "white",
    borderWidth: 1,
    padding: 25,
    position: "absolute",
    top: 130,
  },
});
