import { View, Text, Image } from "react-native";
import discordPng from "../../assets/discord.png";
import { styles } from "./styles";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

type ButtonIconProps = RectButtonProps & {
  hasIcon?: boolean;
  name: string;
};
export const ButtonIcon = ({ name, hasIcon, ...rest }: ButtonIconProps) => {
  return (
    <RectButton style={styles.container} {...rest}>
      {hasIcon && (
        <View style={styles.iconWrapper}>
          <Image source={discordPng} style={styles.icon} />
        </View>
      )}
      <Text style={styles.title}> {name} </Text>
    </RectButton>
  );
};
