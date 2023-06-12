import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        login: {
            backgroundColor: "#fff",
            flex: 1,
            padding: 10,
            alignItems: "center",
            justifyContent: "center",
        },

        logo: {
            width: 250,
            height: 100,
            marginBottom: 30,
        },
        
        alert: {
            fontSize: 18,
            color: "red",
            textAlign: "center",
            marginBottom: 20
        },

        formInput: {
            backgroundColor: "#D3D3D3",
            height: 58,
            marginBottom: 20,
            fontSize: 16,
            borderRadius: 10,
            padding: 12,
            width: '100%',
        },

        formButton: {
            backgroundColor: '#4169E1',
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
            width: "100%",
        },

        textButton: {
            color: "#FFF",
            fontSize: 24,
            textAlign: "center",
        },

        btnCreate: {
            marginBottom: 10,
        },

        btnCreateText: {
            color: "#4169E1"
        }
    }
);

export default styles;