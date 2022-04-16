import React from "react";
import { View } from "react-native";
import { ButtonAdd } from "../../Components/ButtonAdd";
import { Profile } from "../../Components/Profile";
import { styles } from "./styles";

export function Home(){
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile/>
        <ButtonAdd/>
      </View>
    </View>
  )
}