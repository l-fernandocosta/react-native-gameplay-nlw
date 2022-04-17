import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";
const { colors, fonts } = theme;
export const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 20,
    flexDirection: "row",
    width: "100%",
    alignSelf: "center",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 4,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 11,
    alignItems: "center",
  },
  guildName: {
    fontSize: 18,
    color: colors.heading,
    fontFamily: fonts.title700,
  },
  category: {
    fontFamily: fonts.title500,
    color: colors.overlay,
    opacity: 0.8,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateInfo: {
    flexDirection: "row",
  },
  date: {
    marginLeft: 12,
    fontSize: 13, 
    color: colors.heading, 
    opacity: 0.8, 
  },
  playersInfo: {
    flexDirection: "row", 
  },
  player: {
    fontSize: 13, 
    fontFamily: fonts.title500, 
    marginLeft: 12, 
    color: colors.heading, 
  }, 
  gameName: {
    color: colors.overlay, 
    opacity: 0.3, 
    marginBottom: 8, 
    fontSize: 13,
    fontFamily: fonts.title500, 

  }
});
