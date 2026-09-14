import { View, Text, StyleSheet } from "react-native";
import { listaVazia, tituloLista } from "../labels";

export default function CompromissoList({ compromissos }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{tituloLista}</Text>
      {compromissos.length === 0 ? (
        <Text style={styles.vazio}>{listaVazia}</Text>
      ) : (
        compromissos.map((item) => (
          <Text key={item.id} style={styles.item}>
            {item.text}
          </Text>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  vazio: {
    color: "#999",
    fontStyle: "italic",
  },
  item: {
    fontSize: 15,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
