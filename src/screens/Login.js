import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Image, View, VirtualizedList, TextInput, TouchableOpacity, ScrollView } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'



export default function Login({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>


            <View style={styles.topo}>
                <Image
                    style={styles.login}
                    source={require('../assets/home.jpg')}
                />
                <Text style={styles.mr}> M.R CUBE </Text>
            </View>
            

            

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },

    topo: {
        alignItems: 'center',
    },

    login: {
        width: 250,
        marginTop: 100,
        marginBottom: 30,
    },

    // titulo: {
    //     fontSize: 28,
    //     fontWeight: '500',
    //     color: '#333',
    // },

    containerTextInput: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        marginLeft: '10%',
        marginBottom: 25,
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
    },

    iconInput: {
        marginRight: 16
    },

    input: {
        padding: 10
    },

    icon: {
        marginLeft: 150
    },

    botaoLogin: {
        marginLeft: 33,
        marginRight: 33,
        padding: 15,
        color: '#fff',
        backgroundColor: '#3F79F9',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 50,
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center',
    },

    viewLoginWith: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    barLoginWith: {
        width: '20%',
        borderColor: '#ccc',
        borderBottomWidth: 1,
    },

    logarCom: {
        margin: 15,
        textAlign: 'center',
        color: '#999'
    },

    containerLoginWith: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonLoginWith: {
        borderWidth: 2,
        borderColor: '#ccc',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        margin: 8,
        borderRadius: 50,
    },

    createAccount: {
        color: '#3F79F9',
        fontWeight: '700',
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
    },

    mr:{
        fontSize:20,

    }
});