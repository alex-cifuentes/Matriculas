import React from 'react';
import {Alert, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-web';

export default class Grado extends React.PureComponent{
    constructor(props){
      super(props)
      this.state = {
        TextInput_id:'',
        TextInput_nombre: ''
      }  
    }  
    //Ahora creamos las funciones de esta clase
    InsertarGrado = () => {
      //Ahora vamos a consumir la API: APIMatriculasGrupoSabado
      fetch('https://localhost:44351/Api/Grado', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  
            grado_id: this.state.TextInput_id,
            grado_nombre: this.state.TextInput_nombre
          })
      }
      ).then((response) => response.json())
      .then((responseJson) => {
          alert(responseJson);
  
        }).catch((error) => {
          console.error(error);
        });
    }
  
    ActualizarGrado = () => {
      //Ahora vamos a codificar la función actualizar para
      //consumir la API
      fetch('https://localhost:44351/Api/Grado', {
          method: 'PUT',
          headers:
          {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify(
          {
            grado_id: this.state.TextInput_id,
            grado_nombre: this.state.TextInput_nombre  
          })
        }
      ).then((response) => response.json())
      .then((responseJson) => {
          alert('El registro ha sido actualizado');}
      ).catch((error) => {
        console.error(error);
      })
    }
  
    BorrarGrado = () => {
     //Ahora vamos a codificar la función borrar para
      //consumir la API
      fetch('https://localhost:44351/Api/Grado', {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            grado_id: this.state.TextInput_id         
          })
        }
      ).then((response) => response.json())
      .then((responseJson) => {
          alert('El registro ha sido borrado');
        }
      ).catch((error) => {
        console.error(error);
      })
    }
  
    ListarTodasLasGrado = () => {
  //Ahora vamos a codificar la función ListarxId para
      //consumir la API
      fetch('https://localhost:44351/Api/Grado', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            grado_id: this.state.TextInput_id,
            grado_nombre: this.state.TextInput_nombre
          })
        }
      ).then((response) => response.json())
      .then((responseJson) => {
        this.state({
            TextInput_id: responseJson[0]['id'],
            TextInput_nombre: responseJson[0]['nombre']
          })
      })
    }
  
    ListarGradoxId = () => {
      //Ahora vamos a codificar la función ListarxId para
      //consumir la API
      fetch('https://localhost:44351/Api/Grado', {
          method: 'GET',
          headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            grado_id: this.state.TextInput_id,
            grado_nombre: this.state.TextInput_nombre
          })
        }
      ).then((response) => response.json())
      .then((responseJson) => {
        this.state({
            TextInput_id: responseJson[0]['id'],
            TextInput_nombre: responseJson[0]['nombre']
          })
      })
    }

    
    render(){
        return(
            <View style= {MisEstilos.MainContainer}>
                <Text style = {{fontSize: 20, textAlign: 'center', marginBottom: 7, marginTop: '2%', fontSize:30, fontWeight: 'bold'}}>Registrar Grado</Text>
                <View style={ {flexWrap:'wrap',flexDirection:'row',backgroundColor:"white", margin:20}}>
                <TextInput
                  placeholder="Id" 
                  onChangeText ={TextInputValue => this.setState(
                    {
                      TextInput_id: TextInputValue
                    })}
                    underlineColorAndroid= 'transparent'
                    value= {this.state.TextInput_id}
                    style={{width: '10%', textAlign: 'center', margin: 7, height: 40, borderWidth: 1, borderColor: '#2980B9', borderRadius: 5,}}
                >
                </TextInput>
                <TextInput
                  placeholder="Nombre"
                  onChangeText={TextInputValue => this.setState(
                    {
                      TextInput_nombre: TextInputValue
                    }
                  )}
                    underlineColorAndroid='transparent'
                    style={{width: '88%', textAlign: 'center', margin: 7, height: 40, borderWidth: 1, borderColor: '#2980B9', borderRadius: 5,}}
                    value={this.state.TextInput_nombre}
                    autoFocus={true}
                >
                </TextInput>
                </View>
                <View style={{flexWrap:'wrap',flexDirection:'row',marginTop:20, justifyContent: 'center', marginBottom:40}}>
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={MisEstilos.Btn}
                  onPress={this.InsertarGrado}
                >
                  <Text style={MisEstilos.Text}>Insertar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={MisEstilos.Btn}
                  onPress={this.ActualizarGrado}
                >
                <Text style={MisEstilos.Text}>Actualizar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={MisEstilos.Btn}
                  onPress={this.BorrarGrado}
                >
                <Text style={MisEstilos.Text}>Eliminar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={MisEstilos.Btn}
                  onPress={this.ListarGradoxId}
                >
                <Text style={MisEstilos.Text}>Buscar por id</Text>
                </TouchableOpacity> 
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={MisEstilos.Btn_menu}
                  onPress={() => navigation.navigate('Home')}
                >
                <Text style={MisEstilos.Text}>Ir a inicio</Text>
                </TouchableOpacity>
                </View>
            </View> 
        )
    }
}

const MisEstilos = StyleSheet.create ({
  MainContainer:
  {
      marginTop: '2%',
      backgroundColor: '#fff',
      marginLeft: '10%',
      marginRight: '10%',
      borderRadius: 20
  },
  Btn:{
    alignSelf: 'center',
    backgroundColor: '#F5B041',
    borderRadius: 3,
    width: '14%',   
    padding: 5,
    margin: 5
  },
  Btn_menu:{
    alignSelf: 'center',
    backgroundColor: '#16A085',
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
  }
})