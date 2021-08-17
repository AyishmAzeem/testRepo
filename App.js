import React from 'react';
import {

  StyleSheet,
  Text,
  View,
} from 'react-native';


const App=()=> {
return(
  <View style={styles.container}>
    <Text>Heyy Ayishm</Text>
  </View>
)
}

export default App;
const styles=StyleSheet.create({
  container:
  {
    flex:1,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center"
  }
})
