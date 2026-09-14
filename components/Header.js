import { tituloApp } from "../labels";
import { View, Image, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.titulo}>{tituloApp}</Text>
      <Ionicons name="person-circle" size={36} color="#1a1a1a" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    gap: 12,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "600",
    color: "#1a1a1a",
  },
});
