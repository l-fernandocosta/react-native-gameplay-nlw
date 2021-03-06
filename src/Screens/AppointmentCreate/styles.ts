import { StyleSheet } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    paddingHorizontal: 24,
    paddingBottom: 12,
    paddingTop: getStatusBarHeight() ,
  },
  serverButton: {
    width: 327,
    height: 68,
    borderWidth: 1,
    borderColor: theme.colors.secondary40,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    width: 63,
    height: "100%",
    borderRadius: 8,
  },
  imageServer: {
    height: "97%",
    width: 60,
    borderRadius: 8,
  },
  serverText: {
    color: theme.colors.heading,
    fontSize: 18,
    fontFamily: theme.fonts.title700,
  },
  buttonSelectServer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  flexAppointment: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 28,
  },
  flexDate: {
    flexDirection: "column",
    marginRight: 15,
  },
  textDate: {
    marginBottom: 12, 
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  flexTime: {},
  textTime: {
    marginBottom: 12, 
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  describeTextArea: {
    paddingHorizontal: 20, 
    marginTop: 28, 
 
  }, 
  buttonAppointment: {
    paddingHorizontal: 20, 
    marginTop: 56, 
    marginBottom: 56, 
  }
});
