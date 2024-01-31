import { Button, TextInput, View,StyleSheet } from "react-native";
import React, { useState } from "react";


export default function Add({ items, setItems }) {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const save = () => {
        const newPerson = {
            id: items.length + 1,
            firstname: firstname,
            lastname: lastname,
        }
        const tempItems = [...items, newPerson];
        setItems(tempItems);
        setFirstname('');
        setLastname('');
    }

    return (
        <View style={styles.container}>
            <TextInput
                value = {firstname}
                onChangeText = {text => setFirstname(text)}
                placeholder = "Firstname..."
            />
            <TextInput
                value = {lastname}
                onChangeText = {text => setLastname(text)}
                placeholder = "Lastname..."
            />
            <Button title="Save" onPress={save}/>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});