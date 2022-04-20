import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", 
    justifyContent: "space-between",
    paddingHorizontal: 20, 
    alignItems: "center",   
    marginTop: 24, 
  },
  image: {
    width: 64,
    height: 68,
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: theme.colors.secondary40, 
  },
  textContainer: {
    flex: 1, 
    marginLeft: 20, 
    justifyContent: "flex-start",
    flexDirection: "column"
  },
  guildName: {
    textTransform: "uppercase", 
    marginBottom: 4, 
    color: theme.colors.heading, 
    fontSize: 18, 
    fontFamily: theme.fonts.title700, 
  },
  guildOwner: {
    color: theme.colors.heading, 
    fontFamily: theme.fonts.text500, 
    fontSize: 13, 
    opacity: 0.4,

  },
});
