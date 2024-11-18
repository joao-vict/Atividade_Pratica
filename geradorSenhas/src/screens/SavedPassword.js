import React from 'react';
import { View, Text, FlatList, StyleSheet} from "react-native";

export default function SavedPassword({ route }) {
    const { SavedPassword } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Senhas Salvas</Text>
            <FlatList
            data={savedPassword}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
                <View style={styles.passwordContainer}>
                    <Text style={styles.passwordText}>{item}</Text>
                </View>
            )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    passwordContainer: {
        backgorundColor: '#e0e0e0',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        width: '100%',
    },
    passwordText: {
        fontSize: 16,
        color: '#000',
    },
});