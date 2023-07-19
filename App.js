import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
