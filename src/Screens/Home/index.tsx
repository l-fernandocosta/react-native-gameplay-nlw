import React, { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { Appointments } from "../../Components/Appointments";
import { Background } from "../../Components/Background";

import { ButtonAdd } from "../../Components/ButtonAdd";
import { CategorySelector } from "../../Components/CategorySelect";
import { ListDivider } from "../../Components/ListDivider";
import { ListHeader } from "../../Components/LIstHeader/";
import { Profile } from "../../Components/Profile";
import { styles } from "./styles";

const appointments = [
  {
    id: "1",
    guild: {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    category: "1",
    date: "22/06 às 20:40h",
    description: "É hoje que vamos pegar Ouro na MD10, trutão",
  },
  {
    id: "2",
    guild: {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    category: "1",
    date: "22/06 às 20:40h",
    description: "É hoje que vamos pegar Ouro na MD10, trutão",
  },
  {
    id: "3",
    guild: {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    category: "1",
    date: "22/06 às 20:40h",
    description: "É hoje que vamos pegar Ouro na MD10, trutão",
  },
  {
    id: "4",
    guild: {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    category: "1",
    date: "22/06 às 20:40h",
    description: "É hoje que vamos pegar Ouro na MD10, trutão",
  },
  {
    id: "5",
    guild: {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    category: "1",
    date: "22/06 às 20:40h",
    description: "É hoje que vamos pegar Ouro na MD10, trutão",
  },
];
export function Home() {
  const [category, setCategory] = useState("");

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>
        <View>
          <CategorySelector
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
        </View>
        <View style={styles.content}>
          <ListHeader title="Partidas Agendadas" subtitle="Total: 6" />
          <FlatList
            ItemSeparatorComponent={() => <ListDivider />}
            data={appointments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Appointments data={item} />}
          ></FlatList>
        </View>
      </View>
    </Background>
  );
}
