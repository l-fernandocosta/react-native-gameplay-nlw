import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";


export const styles = StyleSheet.create({
  container: {
    width: 50, 
    height: 50, 
    alignItems: "center",
    justifyContent: "center", 
    backgroundColor: theme.colors.primary, 
    borderRadius: 8, 
    marginLeft: 30, 
  }
})