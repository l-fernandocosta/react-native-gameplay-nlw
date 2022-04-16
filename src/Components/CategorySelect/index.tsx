import React from "react";
import { ScrollView } from "react-native";
import { categories } from "../../utils/categories";
import { Category } from "../Category";
import { styles } from "./styles";

type Props = {
  categorySelected: string;
  setCategory: (categoryId : string) =>  void; 
};
export function CategorySelector({ categorySelected, setCategory }: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => {
        return (<Category
          title={category.title}
          key={category.id}
          icon={category.icon}
          checked={category.title === categorySelected}
          onPress={() => setCategory(category.title)}
        />);
      })}
    </ScrollView>
  );
}
