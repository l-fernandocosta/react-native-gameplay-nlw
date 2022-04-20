import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 100, 
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.7)", 
    flex: 1,  
  },
  bar: {
    width: 39, 
    height: 2, 
    backgroundColor: theme.colors.secondary30,  
    alignSelf: "center",
    marginTop: 13,  
  },
});
