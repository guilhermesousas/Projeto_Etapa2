import { Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native'
import firebase from '../../config.js/firebase';
import { getAuth, signOut } from "firebase/auth";
import styles from './style';

export default function Account({navigation}) {
    const signOutFirebase = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
          
            navigation.navigate('Login')
        }).catch((error) => {
        
        });
    }

    return (

        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../../assets/gato.png')} />
        <TouchableOpacity
                style={styles.formBtn}
                onPress={signOutFirebase}
            >
                <Text style={styles.textBtn}>Sair</Text>
            </TouchableOpacity>
            </View>
    );
}