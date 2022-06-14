import React from 'react';
import {Alert, StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native';
import { Button } from 'react-native';

export default function Home( { navigation } ){
    return(
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={MyStyle.Title}>MENU DE NAVEGACION</Text> 

            <TouchableOpacity
                style={MyStyle.Btn}
                onPress={() => navigation.navigate('Persona')}
            > 
            <Text style={MyStyle.Text}>Ir a persona</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={MyStyle.Btn}
                onPress={() => navigation.navigate('Asignatura')}
            > 
            <Text style={MyStyle.Text}>Ir a asignatura</Text>
            </TouchableOpacity>   

            <TouchableOpacity
                style={MyStyle.Btn}
                onPress={() => navigation.navigate('Departamento')}
            > 
            <Text style={MyStyle.Text}>Ir a departamento</Text>
            </TouchableOpacity> 

            <TouchableOpacity
                style={MyStyle.Btn}
                onPress={() => navigation.navigate('Grado')}
            > 
            <Text style={MyStyle.Text}>Ir a grado</Text>
            </TouchableOpacity> 

            <TouchableOpacity
                style={MyStyle.Btn}
                onPress={() => navigation.navigate('Profesor')}
            > 
            <Text style={MyStyle.Text}>Ir a profesor</Text>
            </TouchableOpacity>    
        </View>
    )
    

}

const MyStyle = StyleSheet.create ({
    Btn:{
        alignSelf: 'center',
        backgroundColor: '#F5B041',
        borderRadius: 3,
        width: '14%',   
        padding: 5,
        margin: 5
    },
    Text:{
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    Title:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 30,
        marginTop: '10%'
    }
})



