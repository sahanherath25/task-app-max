import {StatusBar} from 'expo-status-bar';
import React from "react"
import {Text, TextInput, View, StyleSheet, Button} from "react-native";


export default function App() {
    return (
            <View style={styles.colorContainer}>
                <View style={styles.redBox}><Text>1</Text></View>
                <View style={styles.blueBox}><Text>1</Text></View>
                <View style={styles.greenBox}><Text>1</Text></View>
            </View>

    );
}

const styles = StyleSheet.create({

    colorContainer: {
        width:"80%",
        height:300,
        flexDirection:"row",
        // alignItems:"center",
        justifyContent:"center",
       marginVertical:"auto",
        marginHorizontal:"auto",
    },
    redBox: {
        backgroundColor: "#fc0505",
        flex:1,
    },
    blueBox: {
        backgroundColor: "#3058ee",
        flex:2,
    },
    greenBox: {
        flex:3,
        backgroundColor: "#37ec07",
    },


    appContainer: {
        borderStyle: "solid",
        borderColor: "#f53",
        borderWidth: 2,
    },
    inputContainer: {
        flexDirection: "row",
        borderStyle: "solid",
        borderColor: "#000",
        borderWidth: 1,
        justifyContent: "space-between"
    },
    textInput: {
        borderStyle: "solid",
        borderColor: "#fa0606",
        borderWidth: 2,
        width: "80%",
        marginRight: 8,
        padding: 8
    },



});
