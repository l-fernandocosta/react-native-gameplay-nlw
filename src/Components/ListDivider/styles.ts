import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: "80%",
    height: 1, 
    backgroundColor: theme.colors.overlay, 
    marginVertical: 21, 
    alignSelf: "flex-end",  
    opacity: 0.2, 
  },
});
