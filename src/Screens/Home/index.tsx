import React, { useState } from "react";
import { View } from "react-native";
import { ButtonAdd } from "../../Components/ButtonAdd";
import { CategorySelector } from "../../Components/CategorySelect";
import { Profile } from "../../Components/Profile";
import { styles } from "./styles";

export function Home(){
  const [category, setCategory] = useState('');

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile/>
        <ButtonAdd/>
      </View>
       
      <CategorySelector categorySelected={category} setCategory={handleCategorySelect} />      
    </View>
  )
}