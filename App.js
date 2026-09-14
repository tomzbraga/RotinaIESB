import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import Header from "./components/Header";
import {
  tituloApp,
  tituloLista,
  listaVazia,
  placeholderCompromisso,
  botaoAdicionar,
} from "./labels";
import CompromissoInput from "./components/CompromissoInput";
import CompromissoList from "./components/CompromissoList";

export default function App() {
  const [list, setList] = useState([]);

  function adicionarCompromisso(text) {
    setList([...list, { id: Date.now().toString(), text }]);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <CompromissoInput onAdicionar={adicionarCompromisso} />
        <CompromissoList compromissos={list} />
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
