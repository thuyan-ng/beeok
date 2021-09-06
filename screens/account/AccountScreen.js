import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";

export default function AccountScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.label}>Courriel</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Courriel..."
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>
      <Text style={styles.label}>Mot de passe</Text>
      <View style={styles.inputView}>
        <TextInput placeholder="Mot de passe..." onChangeText={setPassword} />
      </View>
      <Button
        title={"  Connexion  "}
        color={colors.primary}
        onPress={() => alert("Connexion...")}
      />
      <TouchableOpacity>
        <Text style={{ color: colors.primary, marginTop: 20 }}>
          Vous n'avez pas de compte ?
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    width: "80%",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.lightgrey,
    height: 40,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
