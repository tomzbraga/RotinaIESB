import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

//a IA sugeriu juntar as duas props de label em uma prop só chamada labels, mas isso me parece um pouco confuso, pois, por qualquer motivo, a pessoa sempre
//terá que voltar ao app.js para saber quais as labels que estão sendo passadas. Fica aqui a minha dúvida de melhores práticas, utilizar labels e
//"adivinhar" quais são as propriedades dentro de labels ou desconstruir em placeholder e botaoAdicionar?

export default function CompromissoInput({
  value,
  onChangeText,
  onAdd,
  labels,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={labels.placeholder}
        value={value}
        onChangeText={onChangeText}
      ></TextInput>
      <Pressable
        key={item.id}
        style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
        android_ripple={{ color: "#ddd" }}
        onLongPress={() => onDelete(item.id)}
      >
        <Text style={styles.itemTexto}>{item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    gap: 8,
  },
  itemPressed: {
    opacity: 0.6,
  },
  input: {
    flex: 7,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  botao: {
    flex: 3,
    backgroundColor: "#1a1a1a",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
});
