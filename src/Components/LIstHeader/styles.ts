import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";


export const styles = StyleSheet.create({
  container:{
    width: "100%", 
    flexDirection: "row", 
    justifyContent: "space-between", 
    paddingHorizontal: 20, 
    alignItems: "center", 
  },
  title:{
    fontSize: 18, 
    fontFamily: theme.fonts.title700, 
    color: theme.colors.heading, 
  },
  subtitle:{
    fontSize: 13, 
    color: theme.colors.overlay, 
    opacity: 0.4, 
    fontFamily: theme.fonts.title500
  },
})