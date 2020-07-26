import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import BookDonateScreen from "../screens/BookDonateScreen";
import BookRequestScreen from "../screens/BookRequestScreen";

export const AppTabNavigator = createBottomTabNavigator({
  DonateBooks: {
    screen: BookDonateScreen,
    naviagtionOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/logo.png")}
          style={{ width: 20, height: 20 }}
        />
      ),
      tabBarLabel: "DonateBooks",
    },
  },
  BookRequest: {
    screen: BookRequestScreen,
    naviagtionOptions: {
      tabBarIcon: <Image source={require("../assets/logo.png")} />,
    },
  },
});
