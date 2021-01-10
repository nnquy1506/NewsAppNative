import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/components/navigations/AppNavigator";
import ActivityIndicator from "./app/components/common/ActivityIndicator";
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
