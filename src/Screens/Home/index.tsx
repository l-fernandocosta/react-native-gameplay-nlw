import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useCallback, useState } from "react";
import { FlatList, View } from "react-native";
import { AppointmentProps, Appointments } from "../../Components/Appointments";
import { Background } from "../../Components/Background";

import { ButtonAdd } from "../../Components/ButtonAdd";
import { CategorySelector } from "../../Components/CategorySelect";
import { ListDivider } from "../../Components/ListDivider";
import { ListHeader } from "../../Components/LIstHeader/";
import { Profile } from "../../Components/Profile";

import { Load } from "../../Components/Load";
import { COLLECTION_NEWAPPOINTMENTS } from "../../configs/database";
import { RootStackParams } from "../../routes/auth.routes";
import { styles } from "./styles";

export function Home() {
  const [category, setCategory] = useState("");
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }
  const { navigate } = useNavigation<StackNavigationProp<RootStackParams>>();
  const handleNewRoom = () => {
    navigate("AppointmentCreate");
  };

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigate("AppointmentDetails", { guildSelected });
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_NEWAPPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter((item) => item.category === category));
    } else {
      setAppointments(storage);
    }

    setIsLoading(false);
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category, appointments])
  );

  console.log(appointments);
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.header}>
          <Profile />
          <ButtonAdd onPress={handleNewRoom} />
        </View>
        <View>
          <CategorySelector
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
        </View>
        {isLoading ? (
          <Load />
        ) : (
          <View style={styles.content}>
            <ListHeader
              title="Partidas Agendadas"
              subtitle={`SALAS: ${appointments.length}`}
            />
            <FlatList
              contentContainerStyle={{ paddingBottom: 69 }}
              ItemSeparatorComponent={() => <ListDivider />}
              data={appointments}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Appointments
                  data={item}
                  onPress={() => {
                    handleAppointmentDetails(item);
                  }}
                />
              )}
            ></FlatList>
          </View>
        )}
      </View>
    </Background>
  );
}
