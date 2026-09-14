import { View, Text, ScrollView, Pressable, StyleSheet } from "react-native";

//aqui a junção dos titulos na props "labels" foi para seguir o mesmo padrão feito no componente CompromissoInput, porém ainda acho
//um trabalho desnecessário.

export default function CompromissoList({ itens, onDelete, labels }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{labels.tituloLista}</Text>
      {itens.length === 0 ? (
        <View style={styles.vazioContainer}>
          <Text style={styles.vazio}>{labels.listaVazia}</Text>
        </View>
      ) : (
        <ScrollView style={styles.scroll}>
          {itens.map((item) => (
            <Pressable
              key={item.id}
              style={styles.item}
              onLongPress={() => onDelete(item.id)}
            >
              <Text style={styles.itemTexto}>{item.text}</Text>
            </Pressable>
          ))}
        </ScrollView>
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
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 8,
  },
  scroll: {
    flex: 1,
  },
  vazioContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  vazio: {
    color: "#999",
    fontStyle: "italic",
    fontSize: 16,
  },
  item: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  itemTexto: {
    fontSize: 15,
  },
});
