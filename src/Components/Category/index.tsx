import React from "react";
import { theme } from "../../global/styles/themes";
import { styles } from "./styles";
import { SvgProps } from "react-native-svg";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

type CategoryProps = RectButtonProps & {
  icon: React.FC<SvgProps>;
  title: string;
  checked?: boolean;
};

export function Category({
  icon: Icon,
  title,
  checked = false,
  ...rest
}: CategoryProps) {
  const { secondary40, secondary100, secondary50, secondary70 } = theme.colors;
  return (
    <RectButton {...rest}>
      <LinearGradient
        colors={[secondary50, secondary70]}
        style={styles.container}
      >
        <LinearGradient
          colors={[checked ? secondary70 : secondary40, secondary100]}
          style={[styles.content, { opacity: checked ? 1 : 0.4 }]}
        >
          <View style={checked ? styles.checked : styles.check} />
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}
