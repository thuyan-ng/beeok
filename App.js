import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// Colors
import Colors from "./config/colors";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/home/HomeScreen";
import ShopScreen from "./screens/shop/ShopScreen";
import ProductsScreen from "./screens/shop/ProductsScreen";
import ProductDetailScreen from "./screens/shop/ProductDetailScreen";
import CartScreen from "./screens/cart/CartScreen";
import AccountScreen from "./screens/account/AccountScreen";

const ShopStack = createNativeStackNavigator();

function ShopStackScreen() {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen
        name={"ShopScreen"}
        component={ShopScreen}
        options={{ title: "Shop" }}
      />
      <ShopStack.Screen
        name={"ProductsScreen"}
        component={ProductsScreen}
        options={{ title: "Products" }}
      />
      <ShopStack.Screen
        name={"ProductDetailScreen"}
        component={ProductDetailScreen}
        options={{ title: "Details" }}
      />
    </ShopStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"Shop"}
        sceneContainerStyle={{ backgroundColor: "white", flex: 1 }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            switch (route.name) {
              //case I18t.t('NavigationTab.Home'):
              case "Home":
                return (
                  <Ionicons
                    name={"ios-information-circle"}
                    size={size}
                    color={color}
                  />
                );
              //case I18t.t('NavigationTab.Shop'):
              case "Shop":
                return <Entypo name={"shop"} size={size} color={color} />;
              //case I18t.t('NavigationTab.Cart'):
              case "Cart":
                return <Ionicons name={"cart"} size={size} color={color} />;
              //case I18t.t('NavigationTab.Account'):
              case "Account":
                return (
                  <MaterialIcons
                    name={"account-circle"}
                    size={size}
                    color={color}
                  />
                );
              default:
                break;
            }
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: Colors.primaryDark,
          tabBarStyle: [
            {
              backgroundColor: Colors.primary,
            },
          ],
        })}
      >
        <Tab.Screen
          name={"Home"}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={"Shop"}
          component={ShopStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={"Cart"}
          component={CartScreen}
          options={{ title: "My cart" }}
        />
        <Tab.Screen
          name={"Account"}
          component={AccountScreen}
          options={{ title: "My account" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
