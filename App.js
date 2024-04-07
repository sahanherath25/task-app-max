import {StatusBar} from 'expo-status-bar';
import {useState} from "react"
import {Text, TextInput, View, StyleSheet, Button, FlatList, ScrollView} from "react-native";

//TODO Defining State


export default function App() {

    const [enteredGoalText, setEnteredGoalText] = useState("")
    const [courseGoal, setCourseGoal] = useState([])

    const golaInputHandler = (enteredText) => {

        setEnteredGoalText(enteredText)
        console.log(enteredText)
    }

    const addGoalHandler = () => {
        console.log("ENTERED GOAL IS ", enteredGoalText)
        setCourseGoal((currentGoals) => {
            return [...currentGoals, enteredGoalText]
        })
    }

    return (
        <View style={styles.appContainer}>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder={"Enter Your Goal"}
                    onChangeText={golaInputHandler}
                />

                <View>

                </View>
                <Button
                    title={"Add Goral"}
                    onPress={addGoalHandler}
                />
            </View>
            <View style={styles.goalsContainer}>
                    <FlatList
                        data={courseGoal}
                        renderItem={({item}) => {
                            return (
                            <View style={styles.goalStyle}>
                                <Text style={styles.goalText}>{item}</Text>
                            </View>
                        )
                        }}
                    />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({

    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        flex: 1,
        borderStyle: "solid",
        borderColor: "#e05f5f",
        borderWidth: 1
    },
    inputContainer: {
        flexDirection: "row",
        borderStyle: "solid",
        borderBottomColor: "#000",
        marginBottom: 24,
        borderBottomWidth: 1,
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
    },
    textInput: {
        borderStyle: "solid",
        borderColor: "#DDDDDD",
        borderWidth: 2,
        marginRight: 8,
        width: "70%",
        padding: 8
    },
    goalsContainer: {
        flex: 5
    },
    goalStyle: {
        margin: 8,
        padding: 14,
        borderRadius: 8,
        backgroundColor: "#E59BE9",

    },
    goalText:{
        color: "#fff"
    }


});
