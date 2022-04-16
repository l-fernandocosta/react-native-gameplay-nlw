import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
    width: 104,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginRight: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  content: {
    width: 100,
    height: 116,
    backgroundColor: theme.colors.secondary80,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
  },
  checked: {
    width: 10, 
    height: 10, 
    marginLeft: 80, 
    borderRadius: 8 ,
    backgroundColor: theme.colors.primary, 
  },
  check: {
    width: 10, 
    height: 10, 
    backgroundColor: theme.colors.secondary100, 
    marginLeft: 80, 
    borderRadius: 8 ,
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title500,
    fontSize: 15,
    textTransform: "uppercase",
  },
});
