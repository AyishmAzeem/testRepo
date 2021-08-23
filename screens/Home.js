import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as accountAction from '../store/actions/account'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Input from '../components/input';
import Button from '../components/Button';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import { combineReducers } from 'redux';

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
