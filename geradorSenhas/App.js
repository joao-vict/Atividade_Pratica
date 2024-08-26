
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

let charset = "abcdefghijklmnopqrstuvwxyz!#$&%0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export default function App() {
  const [senhaGerada, setSenhaGerada] = useState("")

  function gerarSenha(){
    let senha = "";
    
    for(let i = 0, n = charset.length; i < 20; i++) {
      senha += charset.charAt(Math.floor(Math.random() * n))
    }

    setSenhaGerada(senha);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/img/logolock.png")}
        style={styles.logo}
      />
      
      <Text style={styles.title}>
          LockGen
      </Text>

      <TouchableOpacity onPress={gerarSenha} style={styles.button}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Text style={styles.genText}>Senha: {senhaGerada}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    marginBottom: 20,
  },
  title:{
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#333',
    width: '70%',
    borderRadius: 12,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  genText: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  }
  
});
