
import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as util from '../../utilities/index'
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from '../../styles/index';
import * as TASKS from '../../store/actions/index';

const signUp=(props)=> {
    // const account=useSelector(state=>state.loginInfo.availableAccounts)
    const dispatch=useDispatch()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [missingValue,setMissingValue]=useState(false)

    const submitHandler=()=>{
        if(name!=""&&email!="",password!=""&&confirmPassword!=""){
            if(password===confirmPassword){
         dispatch(TASKS.signUp({email:email,password:password,name:name,password:password,confirmPassword:confirmPassword}))
            Alert.alert(
              "",
              "Account Created Successfully!",
              [
                {
                  text: "Ok",
                  onPress: () =>util.navigate("login"),
                  style: "cancel" 
                }
              ]
            );
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
        setMissingValue(true)    
        }
    }
    return(
  <ScrollView contentContainerStyle={styles.auth.parentViewStyle}>
    <Text>Welcome</Text>
    <Input label={"Full Name"} onChangeText={(text)=>{setName(text)}} value={name} maxLength={15} placeholder="Your Name" missingValue={missingValue}/>
    <Input label={"Email"} onChangeText={(text)=>{setEmail(text)}} placeholder="Your Email" value={email} maxLength={30} missingValue={missingValue}/>
    <Input label={"Password"} onChangeText={(text)=>{setPassword(text)}} placeholder="Password" value={password} maxLength={8} missingValue={missingValue}/>
    <Input label={"Confirm Password"} onChangeText={(text)=>{setConfirmPassword(text)}} placeholder="Re-enter Password" value={confirmPassword} maxLength={8} missingValue={missingValue}/>
    <View style={styles.auth.buttonView}>
    <Button 
    label={"Sign Up"}
    onPress={()=>{submitHandler()}}/>
    </View>
  </ScrollView>
)
}

export default signUp;
signUp.navigationOptions=()=>{
  return{
      headerShown: false
    }
}

