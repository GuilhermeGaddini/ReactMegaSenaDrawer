import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [texto, setTexto] = useState('Texto Inicial');

  const [numeros, setNumeros] = useState([]);

  const onPressFunction = () => {
    let teste = [];
    while (teste.length < 6) {
      var aleatorio = Math.floor(Math.random() * 60);
      if (teste.indexOf(aleatorio) == -1)
        teste.push(aleatorio);
    }
    setNumeros(teste);
  }
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 16 }}>{numeros.map((numero) => {
        return numero + ' - '
      })}</Text>
      <Button
        title="Sortear Números!"
        onPress={() => onPressFunction()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
