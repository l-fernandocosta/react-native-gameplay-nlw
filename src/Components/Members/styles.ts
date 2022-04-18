import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: "row",
    marginBottom: 11,
    marginTop: 25,
  },
  profileContent: {
    flex: 1,
    width: "100%",
  },
  player: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  statusContent: {
    marginTop: 10,
    alignContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  status: {
    marginLeft: 5,
    fontSize: 13,
    fontFamily: theme.fonts.text500,
    color: theme.colors.overlay,
    opacity: 0.6,
  },
  on: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: theme.colors.on,
  },
  off: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: theme.colors.off,
  },
  busy: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: theme.colors.busy,
  },
});
