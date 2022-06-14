import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home';
import Persona from './views/Persona';
import Asignatura from './views/Asignatura';
import Departamento from './views/Departamento';
import Grado from './views/Grado';
import Profesor from './views/Profesor';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Ir a prueba"
//         onPress={() => navigation.navigate('Prueba')}
//       />
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Persona" component={Persona} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Asignatura" component={Asignatura} />
        <Stack.Screen name="Departamento" component={Departamento} />
        <Stack.Screen name="Grado" component={Grado} />
        <Stack.Screen name="Profesor" component={Profesor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;