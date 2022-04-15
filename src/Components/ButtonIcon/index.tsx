import { View, Text, Image, TouchableOpacity, TouchableOpacityProps} from "react-native";
import discordPng from "../../assets/discord.png";
import { styles } from "./styles";


type ButtonIconProps = TouchableOpacityProps & {
    name: string

  
}
export const ButtonIcon = ({name, ...rest} : ButtonIconProps) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={discordPng} style={styles.icon} />
      </View>
      <Text style={styles.title}> {name} </Text>
    </TouchableOpacity>
  );
};
