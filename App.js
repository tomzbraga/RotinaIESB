import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Header from "./components/Header";
import CompromissoInput from "./components/CompromissoInput";
import CompromissoList from "./components/CompromissoList";

import {
  tituloApp,
  tituloLista,
  listaVazia,
  placeholderCompromisso,
  botaoAdicionar,
} from "./labels";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function adicionarCompromisso() {
    if (text.trim() === "") {
      Alert.alert("Atenção", "Compromissos precisam ter um nome");
      return;
    }
    const novoCompromisso = {
      id: Date.now().toString(),
      text,
      createdAt: new Date().toISOString(),
    };
    setList([...list, novoCompromisso]);
    setText("");
  }

  function deletarCompromisso(id) {
    setList(list.filter((item) => item.id !== id));
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header label={tituloApp} />
        <CompromissoInput
          value={text}
          onChangeText={setText}
          onAdd={adicionarCompromisso}
          labels={{
            placeholder: placeholderCompromisso,
            botao: botaoAdicionar,
          }}
        />
        <CompromissoList
          itens={list}
          onDelete={deletarCompromisso}
          labels={{
            tituloLista: tituloLista,
            listaVazia: listaVazia,
          }}
        />
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    backgroundColor: "#fff",
  },
});
