import { createAppContainer,createSwitchNavigator} from "react-navigation";
import SignUp from '../screens/signUp'
import {createStackNavigator} from 'react-navigation-stack'
import Login from '../screens/login'
import Home from '../screens/Home'
import signUp from "../screens/signUp";

const LoginNavigator=createStackNavigator({

    Login:Login,
    SignUp:signUp,

})
const HomeNavigator=createStackNavigator({
    Home:Home
})


export default createAppContainer(createSwitchNavigator(
    {
      AuthLoading: LoginNavigator,
      App: HomeNavigator,
   
    },
    {
      initialRouteName: 'AuthLoading',
    }
  ));
