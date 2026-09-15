import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

const STORAGE_KEY = "@rotina_iesb_compromissos";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [carregado, setCarregado] = useState(false);

  // Carrega a lista salva ao montar o app
  useEffect(() => {
    async function carregarCompromissos() {
      try {
        const salvo = await AsyncStorage.getItem(STORAGE_KEY);
        if (salvo !== null) {
          setList(JSON.parse(salvo));
        }
      } catch (error) {
        Alert.alert("Erro", "Não foi possível carregar seus compromissos.");
      } finally {
        setCarregado(true);
      }
    }
    carregarCompromissos();
  }, []);

  // Salva a lista sempre que ela mudar (evita sobrescrever com [] antes do carregamento)
  useEffect(() => {
    if (!carregado) return;
    async function salvarCompromissos() {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      } catch (error) {
        Alert.alert("Erro", "Não foi possível salvar seus compromissos.");
      }
    }
    salvarCompromissos();
  }, [list, carregado]);

  function adicionarCompromisso() {
    if (text.trim() === "") {
      Alert.alert("Atenção", "Compromissos precisam ter um nome");
      return;
    }
    const novoCompromisso = {
      id: Date.now().toString(),
      text,
      createdAt: new Date().toISOString(),
      concluido: false,
    };
    setList([...list, novoCompromisso]);
    setText("");
  }

  function deletarCompromisso(id) {
    setList(list.filter((item) => item.id !== id));
  }

  function alternarConcluido(id) {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, concluido: !item.concluido } : item,
      ),
    );
  }

  const pendentes = list.filter((item) => !item.concluido).length;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header titulo={tituloApp} pendentes={pendentes} />
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
          onToggle={alternarConcluido}
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
