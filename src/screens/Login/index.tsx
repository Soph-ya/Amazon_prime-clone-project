import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style'
import Button from '../../components/Button/button';
import Input from '../../components/Input';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (

    <View style={styles.container}>
      <View style={styles.login}>
        <Text style={styles.loginText}>Fazer login</Text>
      </View>
      <View >
      <TouchableOpacity style={styles.passwordText}>
        <Text  style={styles.ForgotText}>Esqueci a senha</Text>
        </TouchableOpacity>
        <Input
          placeHolder="E-mail ou número de telefone"
          value={email}
          onChangeText={setEmail}
          hide={false}
        />
        <View style={styles.passwordContainer}>
          <Input
            placeHolder="Senha Amazon"
            hide={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <Text style={styles.checkboxText}>Mostrar senha</Text>
        </View>

        <Button title="Fazer login" onPress={handleLogin} color="#007185"></Button>
        <Text style={styles.useTerms}>Ao fazer login, você concorda com os Termos de uso do Prime Video e com os contratos de licença que podem ser encontrados no site da Amazon.</Text>
        <Text style={styles.textBox}>É novo na Amazon?</Text>
        <Button title="Criar uma nova conta Amazon" onPress={handleLogin} color="#252F3D"></Button>
      </View>
      <Text style={styles.creditFooter}>© 2021-2023 Amazon.com, Inc ou suas afiliadas </Text>
    </View>
  );
};

export default Login;