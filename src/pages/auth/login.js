import React,{useState} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from '../../styles/index';
import { useDispatch, useSelector } from 'react-redux';
import * as TASKS from '../../store/actions/index';

// eslint-disable-next-line
import * as util from '../../utilities';

const Login=(props)=> {
  const dispatch=useDispatch()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [missingValue,setMissingValue]=useState(false)
  // const loginBool=useSelector(state=>state.loginInfo.login)


 const submitHandler = () => {
  //   // this.props.login({email:this.state.email,password:this.state.password,})
  if(email!=""&&password!=""){
    // console.log(loginBool,"looo")
    dispatch(TASKS.login({email:email,password:password}))
    setPassword('')
    setEmail('')
    setMissingValue(false)
} 
else{
setMissingValue(true)    
} 
};
    return (
  <ScrollView contentContainerStyle={styles.auth.parentViewStyle}>
      <View style={[{flex:0.96},styles.common.centerAlignment]}>
    <Text>Welcome!</Text>
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
    <View style={styles.auth.buttonView}>
    <Button 
    label={"SignIn"}
    onPress={()=>{submitHandler()}}/>
    </View>
    </View>
    <View style={styles.auth.buttonView,{flexDirection:"row",marginTop:util.WP(30)}}>
    <Text>Don't have an account?</Text>
    <TouchableOpacity onPress={()=>{util.navigate('signup')}}>
        <Text style={{color:"#406973"}}>{" SignUp"}</Text>
    </TouchableOpacity>
    </View>
  </ScrollView>
    );
 
}
export default Login;
