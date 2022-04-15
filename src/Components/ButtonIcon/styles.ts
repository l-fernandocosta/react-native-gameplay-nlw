import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRightColor: theme.colors.line,
    borderRightWidth: 1,
  },
  icon: {},
  container: {
    alignItems: "center",
    width: "100%",
    height: 56,
    backgroundColor: theme.colors.primary,
    flexDirection: "row",
    borderRadius: 8,
    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: "center",
    fontFamily: theme.fonts.title500, 
  },
});
