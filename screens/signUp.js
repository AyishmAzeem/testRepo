import React, { useState } from 'react';
import {
AsyncStorage,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as accountAction from '../store/actions/account'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Input from '../components/input';
import Button from '../components/Button';

const signUp=()=> {
    const account=useSelector(state=>state.loginInfo.availableAccounts)
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [missingValue,setMissingValue]=useState(false)

    const submitHandler=()=>{
        if(name!=""&&email!="",password!=""&&confirmPassword!=""){
            if(password===confirmPassword){
            dispatch(accountAction.createAccount(name,email,password,confirmPassword))
            Alert.alert("","Account created successfully")
            setName('')
            setPassword('')
            setEmail('')
            setConfirmPassword('')
            setMissingValue(false)
            }
            else{
            Alert.alert("","Password does not match")
            }
        } 
        else{
        console.log("yay")
        setMissingValue(true)    
        }
    }

console.log(account,"yayyayyy")
    return(
  <ScrollView contentContainerStyle={styles.container}>
    <Text>Welcome</Text>
    <Input label={"Full Name"} onChangeText={(text)=>{setName(text)}} value={name} maxLength={15} placeholder="Your Name" missingValue={missingValue}/>
    <Input label={"Email"} onChangeText={(text)=>{setEmail(text)}} placeholder="Your Email" value={email} maxLength={30} missingValue={missingValue}/>
    <Input label={"Password"} onChangeText={(text)=>{setPassword(text)}} placeholder="Password" value={password} maxLength={8} missingValue={missingValue}/>
    <Input label={"Confirm Password"} onChangeText={(text)=>{setConfirmPassword(text)}} placeholder="Re-enter Password" value={confirmPassword} maxLength={8} missingValue={missingValue}/>
    <View style={styles.buttonView}>
    <Button 
    label={"Sign Up"}
    onPress={()=>{submitHandler()}}/>
    </View>
  </ScrollView>
)
}

export default signUp;
signUp.navigationOptions=()=>{
    return null
}
const styles=StyleSheet.create({
  container:
  {
    flexGrow:1,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center",
   paddingVertical:windowHeight*0.02
  },
  buttonView:{
    width:windowWidth*0.90,
    alignItems:"center",
    height:windowHeight*0.07,
    marginTop:windowHeight*0.09
  }
})
