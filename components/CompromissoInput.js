import { useState } from "react";
import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";
import { botaoAdicionar, placeholderCompromisso } from "../labels";

export default function CompromissoInput({ onAdicionar }) {
  const [text, setText] = useState("");

  function handleAdicionar() {
    if (text.trim === "") return;
    onAdicionar(text);
    setText("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholderCompromisso}
        value={text}
        onChangeText={setText}
      ></TextInput>
      <Pressable style={styles.botao} onPress={handleAdicionar}>
        <Text style={styles.textoBotao}>{botaoAdicionar}</Text>
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
