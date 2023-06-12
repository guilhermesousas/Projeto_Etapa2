import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: "#fff"
    },

    produto: {
        backgroundColor: "#070A52",
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: "#F5FFFA",
        marginBottom: 20,
    },

    descricao: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#7d83ad",
        marginBottom: 50,
        textAlign: 'center',
    },

    valor: {
        fontSize: 18,
        color: "#FFF",
        marginBottom: 20,
    },

    dataRegistro: {
        fontSize: 18,
        color: "#7d83ad",
        marginBottom: 30,
    },

    btnCreate: {
        backgroundColor: '#4169E1',
        width: 60,
        height: 60,
        borderRadius: 50,
        position: 'absolute',
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignContent: 'center'
    },

    botoesRodape: {
            position: 'absolute',
            bottom: -16,
            left: 0,
            right: 0,
            flexDirection: 'row',
            justifyContent: 'center',
    },

    btnTextCreate: {
        fontSize: 24,
        textAlign: 'center',
        color: '#FFF'
    },

});

export default styles