import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles =  StyleSheet.create({
  container: { 
    width: "100%", 
    height: 95, 
    backgroundColor: theme.colors.secondary80, 
    borderWidth: 1,  
    borderColor: theme.colors.secondary70, 
    borderRadius: 10, 
    color: theme.colors.heading, 
    textAlign: "center", 
  }
})