import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  container: {
    width: 68,
    height: 68,
    borderRadius: 8,
    borderWidth: 1, 
    borderColor: theme.colors.secondary50, 
    backgroundColor: theme.colors.discord, 
    alignItems: "center",
    justifyContent: "center",

    marginRight: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    overflow: "hidden",
  },

  image: {
    alignItems: "center",
    width: 68,
    height: 68,
    borderRadius: 8,
    overflow: "hidden",
  },
  discordImg: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
