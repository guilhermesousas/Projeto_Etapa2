import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import styles from '../Home/style';
import firebase from '../../config.js/firebase';
import { getFirestore, collection, orderBy, query, onSnapshot, doc, deleteDoc, updateDoc } from 'firebase/firestore'
const db = getFirestore(firebase)
import { MaterialIcons } from '@expo/vector-icons'

export default function Home({ navigation }) {
    const [product, setProduct] = useState([])

    const deleteProduct = (id) => {
        deleteDoc(doc(db, "products", id))
    }
    

    useEffect(() => {
        const q = query(collection(db, "products"), orderBy("data_registro","desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const products = [];
            querySnapshot.forEach((doc) => {
                products.push({...doc.data(), id: doc.id});
               
            });
            setProduct(products)
        });
    }, [])

    
    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={product}
                renderItem={({item}) =>
                    <View style={styles.produto}>
                        <View>
                           <Text style={styles.name}>
                                <Text style={styles.name}>Nome: </Text>
                                <Text>{item.name}</Text>
                            </Text>
                            <Text style={styles.descricao}>
                                <Text style={styles.valor}>Anotação: </Text>
                                <Text>{item.descricao}</Text>
                            </Text>
  
                            <Text style={styles.valor}>
                            <Text style={styles.valor}>Valor:R$ </Text>
                            {item.valor}</Text>
                            {item.data_registro && (
                            <Text style={styles.dataRegistro}>
                                Registrado em: {item.data_registro.toDate().toLocaleString()}
                            </Text>
                            )} 
                        </View>
                        <View style={styles.botoesRodape}>
                            <TouchableOpacity
                            style={{ marginVertical: 20, marginHorizontal: 20 }}
                            onPress={() => deleteProduct(item.id)}
                            >
                            <MaterialIcons name="delete" size={26} color="#f47973"/>
                            </TouchableOpacity>

                            <TouchableOpacity
                            style={{ marginVertical: 20, marginHorizontal: 20  }}
                            onPress={() => Editar(item)}
                            >
                            <MaterialIcons name="edit" size={26} color="#808080" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    
                }
            />

            <TouchableOpacity
                style={styles.btnCreate}
                onPress={()=> navigation.navigate('CreateProduct')}
                
            >
                <Text style={styles.btnTextCreate}>+</Text>
            </TouchableOpacity>
        </View>
    );
}
