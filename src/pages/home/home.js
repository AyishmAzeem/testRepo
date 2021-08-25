import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {useSelector } from 'react-redux';
import styles from '../../styles/index';

const Home=(props)=> {
  const user=useSelector(state=>state.auth.user)
    console.log(user,"accountInfo")
    return(
  <View style={styles.auth.parentViewStyle}>
 <Text>{"hi  "+" "+ user.fullName}</Text>
  </View>
)
}
export default Home;

