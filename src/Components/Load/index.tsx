import React from "react";
import { ActivityIndicator, View } from "react-native";
import { theme } from "../../global/styles/themes";

export function Load() {
  return (
    <View>
      <ActivityIndicator
        color={theme.colors.primary}
        size="large"
      ></ActivityIndicator>
    </View>
  );
}
