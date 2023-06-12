import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        login: {
            padding: 30,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },

        alert: {
            fontSize: 18,
            textAlign: "center",
            color: "red",
            marginBottom: 20
        },

        formInput: {
            backgroundColor: "#F6F7FB",
            height: 58,
            marginBottom: 20,
            fontSize: 16,
            borderRadius: 10,
            padding: 12,
            width: '100%',
        },

        formButton: {
            backgroundColor: "#090A52",
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
            width: "100%"
        },

        textButton: {
            fontSize: 24,
            textAlign: "center",
            color: "#FFF"
        }
    }
)

export default styles;