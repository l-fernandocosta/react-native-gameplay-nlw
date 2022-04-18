import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: "100%",
    height: 234,
    opacity: 0.8,
    marginBottom: 30,
  },
  bannerContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 24,
    marginBottom: 30,
    marginTop: 130,
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  subtitletitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
  },
  footer: {
    paddingHorizontal: 20, 
    paddingVertical: 20,
    marginBottom: getBottomSpace(), 
  }
  
});
