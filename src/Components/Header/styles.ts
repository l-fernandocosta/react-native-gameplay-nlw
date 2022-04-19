import { cloneElement } from "react";
import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    width: "100%", 
    height: 104, 
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 20, 
    
  },
  title: {
    flex: 1, 
    textAlign: "center", 
    color: theme.colors.heading, 
    fontFamily: theme.fonts.title700, 
    fontSize: 20, 
   
  }
})