import React from 'react';
import {Alert, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-web';

export default class Asignatura extends React.PureComponent{
    constructor(props){
      super(props)
      this.state = {
        TextInput_id:'',
        TextInput_nombre: '',
        TextInput_creditos: '',
        TextInput_tipo: '',
        TextInput_curso: '',
        TextInput_clave:'',
        TextInput_cuatrimestre:'',
        TextInput_id_profesor:'',
        TextInput_id_grado:'',
      }  
    }  
    //Ahora creamos las funciones de esta clase
    InsertarAsignatura = () => {
      //Ahora vamos a consumir la API: APIMatriculasGrupoSabado
      fetch('https://localhost:44351/Api/Asignatura', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  
            asignatura_id: this.state.TextInput_id,
            asignatura_nombre: this.state.TextInput_nombre,
            asignatura_creditos: this.state.TextInput_creditos,
            asignatura_tipo: this.state.TextInput_tipo,
            asignatura_curso: this.state.TextInput_curso,
            asignatura_cuatrimestre: this.state.TextInput_cuatrimestre,
            asignatura_id_profesor: this.state.TextInput_id_profesor,
            asignatura_id_grado: this.state.TextInput_id_grado
          })
      }
      ).then((response) => response.json())
      .then((responseJson) => {
          alert(responseJson);
  
        }).catch((error) => {
          console.error(error);
        });
    }
  
    ActualizarAsignatura = () => {
      //Ahora vamos a codificar la función actualizar para
      //consumir la API
      fetch('https://localhost:44351/Api/Asignatura', {
          method: 'PUT',
          headers:
          {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify(
          {
            asignatura_id: this.state.TextInput_id,
            asignatura_nombre: this.state.TextInput_nombre,
            asignatura_creditos: this.state.TextInput_creditos,
            asignatura_tipo: this.state.TextInput_tipo,
            asignatura_curso: this.state.TextInput_curso,
            asignatura_cuatrimestre: this.state.TextInput_cuatrimestre,
            asignatura_id_profesor: this.state.TextInput_id_profesor,
            asignatura_id_grado: this.state.TextInput_id_grado           
          })
        }
      ).then((response) => response.json())
      .then((responseJson) => {
          alert('El registro ha sido actualizado');}
      ).catch((error) => {
        console.error(error);
      })
    }
  
    BorrarAsignatura = () => {
     //Ahora vamos a codificar la función borrar para
      //consumir la API
      fetch('https://localhost:44351/Api/Asignatura', {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            asignatura_id: this.state.TextInput_id         
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
  
    ListarTodasLasAsignaturas = () => {
  //Ahora vamos a codificar la función ListarxId para
      //consumir la API
      fetch('https://localhost:44351/Api/Asignatura', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            asignatura_id: this.state.TextInput_id,
            asignatura_nombre: this.state.TextInput_nombre,
            asignatura_creditos: this.state.TextInput_creditos,
            asignatura_tipo: this.state.TextInput_tipo,
            asignatura_curso: this.state.TextInput_curso,
            asignatura_cuatrimestre: this.state.TextInput_cuatrimestre,
            asignatura_id_profesor: this.state.TextInput_id_profesor,
            asignatura_id_grado: this.state.TextInput_id_grado        
          })
        }
      ).then((response) => response.json())
      .then((responseJson) => {
        this.state({
            TextInput_id: responseJson[0]['id'],
            TextInput_nombre: responseJson[0]['nombre'],
            TextInput_creditos: responseJson[0]['creditos'],
            TextInput_tipo: responseJson[0]['tipo'],
            TextInput_curso: responseJson[0]['curso'],
            TextInput_cuatrimestre: responseJson[0]['cuatrimestre'],
            TextInput_id_profesor: responseJson[0]['id_profesor'],
            TextInput_id_grado: responseJson[0]['id_grado']
          })
      })
    }
  
    ListarAsignaturaxId = () => {
      //Ahora vamos a codificar la función ListarxId para
      //consumir la API
      fetch('https://localhost:44351/Api/Asignatura', {
          method: 'GET',
          headers:{
            'Accept': 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            asignatura_id: this.state.TextInput_id,
            asignatura_nombre: this.state.TextInput_nombre,
            asignatura_creditos: this.state.TextInput_creditos,
            asignatura_tipo: this.state.TextInput_tipo,
            asignatura_curso: this.state.TextInput_curso,
            asignatura_cuatrimestre: this.state.TextInput_cuatrimestre,
            asignatura_id_profesor: this.state.TextInput_id_profesor,
            asignatura_id_grado: this.state.TextInput_id_grado        
          })
        }
      ).then((response) => response.json())
      .then((responseJson) => {
        this.state({
            TextInput_id: responseJson[0]['id'],
            TextInput_nombre: responseJson[0]['nombre'],
            TextInput_creditos: responseJson[0]['creditos'],
            TextInput_tipo: responseJson[0]['tipo'],
            TextInput_curso: responseJson[0]['curso'],
            TextInput_cuatrimestre: responseJson[0]['cuatrimestre'],
            TextInput_id_profesor: responseJson[0]['id_profesor'],
            TextInput_id_grado: responseJson[0]['id_grado'] 
          })
      })
    }

    render(){
        return(
            <View style= {MisEstilos.MainContainer}>
                <Text style = {{fontSize: 20, textAlign: 'center', marginBottom: 7, marginTop: '2%', fontSize:30, fontWeight: 'bold'}}>Registro de Asignatura</Text>
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
                    style={{width: '50%', textAlign: 'center', margin: 7, height: 40, borderWidth: 1, borderColor: '#2980B9', borderRadius: 5,}}
                    value={this.state.TextInput_nombre}
                    autoFocus={true}
                >
                </TextInput>
                <TextInput
                  placeholder="Creditos"
                  onChangeText={TextInputValue => this.setState(
                    {
                      TextInput_creditos: TextInputValue
                    }
                  )}
                    underlineColorAndroid='transparent'
                    style={{width: '18%', textAlign: 'center', margin: 7, height: 40, borderWidth: 1, borderColor: '#2980B9', borderRadius: 5,}}
                    value={this.state.TextInput_creditos}
                    autoFocus={true}
                >
                </TextInput>
                <TextInput
                  placeholder="Tipo"
                  onChangeText={TextInputValue => this.setState(
                    {
                      TextInput_tipo: TextInputValue
                    }
                  )}
                    underlineColorAndroid='transparent'
                    style={{width: '18%', textAlign: 'center', margin: 7, height: 40, borderWidth: 1, borderColor: '#2980B9', borderRadius: 5,}}
                    value={this.state.TextInput_tipo}
                    autoFocus={true}
                >
                </TextInput>
                </View>
                <View style={ {flexWrap:'wrap',flexDirection:'row',backgroundColor:"white", margin:20}}>
                  <TextInput
                  placeholder="Curso"
                  onChangeText={TextInputValue => this.setState(
                    {
                      TextInput_curso: TextInputValue
                    }
                  )}
                    underlineColorAndroid='transparent'
                    style={{width: '30%', textAlign: 'center', margin: 7, height: 40, borderWidth: 1, borderColor: '#2980B9', borderRadius: 5,}}
                    value={this.state.TextInput_curso}
                    autoFocus={true}
                >
                </TextInput>
                <TextInput
                  placeholder="cuatrimestre"
                  onChangeText={TextInputValue => this.setState(
                    {
                      TextInput_cuatrimestre: TextInputValue
                    }
                  )}
                    underlineColorAndroid='transparent'
                    style={{width: '10%', textAlign: 'center', margin: 7, height: 40, borderWidth: 1, borderColor: '#2980B9', borderRadius: 5,}}
                    value={this.state.TextInput_cuatrimestre}
                    autoFocus={true}
                >
                </TextInput>
                <TextInput
                  placeholder="id profesor"
                  onChangeText={TextInputValue => this.setState(
                    {
                      TextInput_id_profesor: TextInputValue
                    }
                  )}
                    underlineColorAndroid='transparent'
                    style={{width: '10%', textAlign: 'center', margin: 7, height: 40, borderWidth: 1, borderColor: '#2980B9', borderRadius: 5,}}
                    value={this.state.TextInput_id_profesor}
                    autoFocus={true}
                >
                </TextInput>
                <TextInput
                  placeholder="id grado"
                  onChangeText={TextInputValue => this.setState(
                    {
                      TextInput_id_grado: TextInputValue
                    }
                  )}
                    underlineColorAndroid='transparent'
                    style={{width: '10%', textAlign: 'center', margin: 7, height: 40, borderWidth: 1, borderColor: '#2980B9', borderRadius: 5,}}
                    value={this.state.TextInput_id_grado}
                    autoFocus={true}
                >
                </TextInput>
                </View>
                <View style={{flexWrap:'wrap',flexDirection:'row',marginTop:20, justifyContent: 'center', marginBottom:40}}>
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={MisEstilos.Btn}
                  onPress={this.InsertarAsignatura}
                >
                  <Text style={MisEstilos.Text}>Insertar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={MisEstilos.Btn}
                  onPress={this.ActualizarAsignatura}
                >
                <Text style={MisEstilos.Text}>Actualizar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={MisEstilos.Btn}
                  onPress={this.BorrarAsignatura}
                >
                <Text style={MisEstilos.Text}>Eliminar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.4}
                  style={MisEstilos.Btn}
                  onPress={this.ListarAsignaturaxId}
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