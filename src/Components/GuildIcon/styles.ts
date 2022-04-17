import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 68,
    height: 68,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
});
