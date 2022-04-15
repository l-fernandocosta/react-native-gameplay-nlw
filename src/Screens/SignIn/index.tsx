import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import ilustration from "../../assets/illustration.png";
import { ButtonIcon } from "../../Components/ButtonIcon";
import { styles } from "./styles";

export function SignIn() {
  
  return (
    
    <View style={styles.container}>
  
      <Image
        source={ilustration}
        accessibilityLabel={"Lee sin League of Legends"}
        style={styles.image}
      />
      <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {`\n`}e organize {`\n`}
            suas jogatinas{`\n`}
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{`\n`}
            favoritos com seus amigos
          </Text>
        <ButtonIcon name={"Login with Discord"} activeOpacity={0.7} />
      </View>
    </View>
  );
}
