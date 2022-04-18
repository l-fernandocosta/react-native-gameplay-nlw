import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";
import { styles } from "./styles";

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/l-fernandocosta.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>Fernando</Text>
        </View>
        <Text style={styles.message}>HOJE É DIA DE VITÓRIA</Text>
      </View>
    
    </View>
  );
}
