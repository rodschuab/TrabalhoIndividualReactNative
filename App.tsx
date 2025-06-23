import { View, Text, Image, TouchableOpacity, TextInput } from "react-native"
import React from "react";
import { styles } from "./styles";
import Logo from './logo.png';
import { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';


const App = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image source={Logo} style={styles.logoImage} />
        <Text style={styles.logoTitle}> Spotify </Text>
      </View>

        <TouchableOpacity style={styles.socialButton}>
        <Icon name="google" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.socialButtonText}>Continue com Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Icon name="facebook" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.socialButtonText}>Continue com Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Icon name="apple" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.socialButtonText}>Continue com Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButton}>
        <Icon name="phone" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.socialButtonText}>Continue com número de celular</Text>
      </TouchableOpacity>
      
      <TextInput
        style={styles.input}
        placeholder="Email ou nome de usuário"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.linkText}>Esqueceu sua senha</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;
