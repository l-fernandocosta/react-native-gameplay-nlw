import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    width: "70%",
    height: 1, 
    backgroundColor: theme.colors.overlay, 
    marginVertical: 31, 
    alignSelf: "flex-end",  
    opacity: 0.3,
    marginTop: 2, 
  },
});
