import { View, Text, ViewProps } from "react-native";
import React from "react";
import { styles } from "./styles";

type Props = ViewProps &{
  title: string;
  subtitle: string;
};

export function ListHeader({ title, subtitle, ...rest}: Props) {
  return (
  <View style={styles.container} {...rest}>
    <Text style={styles.title}> {title}</Text>
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>);
}
