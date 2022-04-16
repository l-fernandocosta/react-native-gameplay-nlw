import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";


const {colors, fonts} =  theme; 

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
  },
  user: {
    flexDirection: "row", 
  },
  greeting: {
    color: colors.heading, 
    fontFamily: fonts.title500,
    fontSize: 26, 
    marginRight: 6, 
  },
  username:{
    color: colors.heading, 
    fontFamily: fonts.title700, 
    fontSize: 26, 
  },
  message:{
    color: colors.overlay, 
    fontFamily: fonts.text400

  }, 
});
