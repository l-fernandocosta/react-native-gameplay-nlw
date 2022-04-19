import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  container: {
    width: 156,
    height: 48,
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.secondary30,
    borderRadius: 8,
  },
  input: {
    textAlign: "center",
    width: 155,
    height: 47,

    borderRadius: 8,
    color: theme.colors.heading,
  },
  linearEffect: {
    width: 155,
    height: 46,

    borderRadius: 8,
  },
});
