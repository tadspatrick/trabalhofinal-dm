import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

import styles from "./styles";
import { TextInput } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Create() {
  const navigation = useNavigation();
  const [cliente, setCliente] = useState("");
  const [horario, setHorario] = useState("");
  const [estiloTatuagem, setestiloTatuagem] = useState("");
  const [parte, setParte] = useState("");
  const [preco, setPreco] = useState("");
  const [tatuador, setTatuador] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [list, setList] = useState([]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  async function loadStorage() {
    const arr = await AsyncStorage.getItem("list");
    if (arr != null) {
      setList(JSON.parse(arr));
    }

    //AsyncStorage.clear();
  }

  async function add() {
    const agenda = {
      cliente: cliente,
      horario: horario,
      estiloTatuagem: estiloTatuagem,
      parte: parte,
      preco: preco,
      tatuador: tatuador,
    };

    const arr = [...list, agenda];
    const json = JSON.stringify(arr);
    await AsyncStorage.setItem("list", json);
    alert("Adicionado com Sucesso!");
    setCliente("");
    setHorario("");
    setestiloTatuagem("");
    setParte("");
    setPreco("");
    setTatuador("");
    toggleModal();
    loadStorage();
  }

  useEffect(() => {
    loadStorage();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Meus Agendamentos</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Icon name="exit-to-app" color="black" size={40} />
        </TouchableOpacity>
      </View>
      <Icon
        name="calendar-plus"
        color="black"
        size={50}
        onPress={toggleModal}
      />
      <ScrollView>
        {list.map((item, index) => {
          return [
            <Divider />,
            <Icon name="calendar-blank" color="black" size={30} />,
            <Text key={index}>Cliente: {item.cliente}
            </Text>,
            <Text key={index}>Horário: {item.horario} </Text>,
            <Text key={index}>Estilo da Tatuagem: {item.estiloTatuagem} </Text>,
            <Text key={index}>Parte do Corpo: {item.parte}{" "}{" "}{" "} Preço: {item.preco} </Text>,
            <Text key={index}>Tatuador: {item.tatuador} </Text>,
            <Divider />,
          ];
        })}
      </ScrollView>
      <Modal animationType="slide" isVisible={isModalVisible}>
        <View>
          <Text style={styles.text}>Novo Agendamento</Text>
          <TextInput style={styles.text}
            placeholder="Cliente"
            onChangeText={(text) => setCliente(text)}
          />
          <TextInput style={styles.text}
            placeholder="Horario"
            onChangeText={(text) => setHorario(text)}
          />
          <TextInput style={styles.text}
            placeholder="Estilo"
            onChangeText={(text) => setestiloTatuagem(text)}
          />
          <TextInput style={styles.text}
            placeholder="Parte do Corpo"
            onChangeText={(text) => setParte(text)}
          />
          <TextInput style={styles.text}
            placeholder="Preço"
            onChangeText={(text) => setPreco(text)}
          />
          <TextInput style={styles.text}
            placeholder="Tatuador"
            onChangeText={(text) => setTatuador(text)}
          />
          <Button title="Cadastrar" onPress={() => add()} color="darkgreen" />
          <Button title="Cancelar" onPress={toggleModal} color="black" />
        </View>
      </Modal>
    </View>
  );
}

export default Create;
