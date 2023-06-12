import { useState } from 'react';
import { Text, TextInput, Touch, TouchableOpacity, View } from 'react-native';
import firebase from '../../config.js/firebase';
import { getFirestore } from 'firebase/firestore'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { NavigationContainer } from "@react-navigation/native";
const db = getFirestore(firebase)
import styles from './style'


export default function CreateProduct({navigation}){
    const [name, setName] = useState("")
    const [descricao, setDescricao] = useState("")
    const [valor, setValor] = useState("")
    const [errorCreateProduct, setErrorCreateProduct] = useState(null)

    const validade = () => {
        if(descricao == "" || valor == ""||name ==""){
            setErrorCreateProduct("Informe o nome, a descrição e o valor")
        }else{
            setErrorCreateProduct(null)
            createProduct()
        }
    }

    const createProduct = () => {
        const newProduct = addDoc(collection(db, 'products'), {
            name: name,
            descricao: descricao,
            valor: valor,
            data_registro: serverTimestamp()
        });

        navigation.navigate('Tabs')
    }

    return(
        <View style={styles.container}>
            {errorCreateProduct != null &&
                <Text style={styles.alert}>{errorCreateProduct}</Text>
            }

            <TextInput
                style={styles.formInput}
                placeholder='Nome'
                value={name}
                onChangeText={setName}
            />

            <TextInput
                style={styles.formInput}
                placeholder='Descrição'
                value={descricao}
                onChangeText={setDescricao}
            />

            <TextInput
                style={styles.formInput}
                placeholder='Valor'
                value={valor}
                onChangeText={setValor}
            />

            <TouchableOpacity
                style={styles.formBtn}
                onPress={validade}
            >
                <Text style={styles.textBtn}>Adicionar a lista de compras</Text>
            </TouchableOpacity>
        </View>
    );
}