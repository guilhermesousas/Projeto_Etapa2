import { TextInput, Text, Touch, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import styles from './style';
import firebase from '../../config.js/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function CreateUser({navigation}){
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorCreateUser, setErrorCreateUser] = useState(null)

    const validate = () =>{
        if(nome == "" || telefone == "" || email == "" || password == ""){
            setErrorCreateUser("Preencha todos os campos");
        } else {
            setErrorCreateUser(null)
            createUser();
        }
    }

    const createUser = () =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate('Tabs');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorCreateUser(errorMessage);
        });
    }

    return (
        
        <View style={styles.login}>

            {errorCreateUser != null &&
                <Text style={styles.alert}>{errorCreateUser}</Text>
            }

            <TextInput
                style={styles.formInput}
                placeholder='Nome'
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.formInput}
                placeholder='Telefone'
                value={telefone}
                onChangeText={setTelefone}
            />
            <TextInput
                style={styles.formInput}
                placeholder='E-mail'
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.formInput}
                secureTextEntry={true}
                placeholder='Senha'
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity
                style={styles.formButton}
                onPress={validate}
            >
                <Text style={styles.textButton}>Criar usuário</Text>
            </TouchableOpacity>
        </View>
    );
}