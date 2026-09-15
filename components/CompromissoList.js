import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";

//aqui a junção dos titulos na props "labels" foi para seguir o mesmo padrão feito no componente CompromissoInput, porém ainda acho
//um trabalho desnecessário.

export default function CompromissoList({ itens, onDelete, onToggle, labels }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{labels.tituloLista}</Text>
      <FlatList
        style={styles.lista}
        data={itens}
        keyExtractor={(item) => item.id}
        contentContainerStyle={itens.length === 0 && styles.vazioContainer}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.item,
              pressed && styles.itemPressed,
            ]}
            android_ripple={{ color: "#eee" }}
            onPress={() => onToggle(item.id)}
            onLongPress={() => onDelete(item.id)}
          >
            <Text
              style={[styles.itemTexto, item.concluido && styles.itemConcluido]}
            >
              {item.text}
            </Text>
          </Pressable>
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>{labels.listaVazia}</Text>
        }
      />
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
  lista: {
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
  itemPressed: {
    opacity: 0.6,
  },
  itemTexto: {
    fontSize: 15,
  },
  itemConcluido: {
    textDecorationLine: "line-through",
    color: "#999",
  },
});
