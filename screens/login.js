import React, {useState,useLayoutEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as accountAction from '../store/actions/account'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Input from '../components/input';
import Button from '../components/Button';


const Login=(props)=> {
    const dispatch=useDispatch()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [missingValue,setMissingValue]=useState(false)
    const loginBool=useSelector(state=>state.loginInfo.login)
    console.log(loginBool,"boooll")
    const submitHandler=()=>{
        if(email!=""&&password!=""){
            console.log(loginBool,"looo")
            dispatch(accountAction.loginAccount(email,password))
            setPassword('')
            setEmail('')
            setMissingValue(false)
        } 
        else{
        setMissingValue(true)    
        }
        
    }
 useLayoutEffect(() => {
  loginBool===true?props.navigation.navigate("Home"):console.log("checkkk valll")
    })
    return(
  <ScrollView contentContainerStyle={styles.container}>
      <View style={{flex:0.96,justifyContent:"center",alignItems:"center"}}>
    <Text style={{fontSize:20,color:"#406973"}}>Welcome!</Text>
    <Input label={"Email"} 
    onChangeText={(text)=>{setEmail(text)}} 
    placeholder="Your Email" 
    value={email} 
    placeholderTextColor="gray" 
    maxLength={30} 
    missingValue={missingValue}
    />
    <Input 
    label={"Password"} 
    onChangeText={(text)=>{setPassword(text)}} 
    placeholder="Password"
    placeholderTextColor="gray" 
    secureTextEntry={true} 
    value={password} 
    maxLength={8} 
    missingValue={missingValue}
    />
    <View style={styles.buttonView}>
    <Button 
    label={"SignIn"}
    onPress={()=>{submitHandler()}}/>
    </View>
    </View>
    <View style={styles.bottomView}>
    <Text>Don't have an account?</Text>
    <TouchableOpacity onPress={()=>{props.navigation.navigate('SignUp')}}>
        <Text style={{color:"#406973",fontSize:14}}>{" SignUp"}</Text>
    </TouchableOpacity>
    </View>
  </ScrollView>
)
}

export default Login;
Login.navigationOptions=()=>{
  return{
    headerShown: false
  }
}
const styles=StyleSheet.create({
  container:
  {
    flexGrow:1,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center",
 
  },
  buttonView:{
    width:windowWidth*0.90,
    alignItems:"center",
    height:windowHeight*0.07,
    marginTop:windowHeight*0.09
  },
  bottomView:{
    flexDirection:"row",
    flex:0.04,
    alignItems:"center",
    justifyContent:"center",
    paddingBottom:windowHeight*0.03
  }
})
