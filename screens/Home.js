import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSelector } from 'react-redux';


const Home=(props)=> {
    const accountInfo=useSelector(state=>state.loginInfo.loginAccount)
    console.log(accountInfo,"accountInfo")
    return(
  <View style={styles.container}>
 <Text>{"heyyy "+" "+ accountInfo[0].firstName}</Text>
  </View>
)
}

export default Home;
const styles=StyleSheet.create({
  container:
  {
    flexGrow:1,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center",
 
  },
})
