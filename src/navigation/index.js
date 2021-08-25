import * as React from 'react';
import {navigationRef} from '../utilities/navigation/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as util from '../utilities/index'
import signup from '../pages/auth/signup';
import home from '../pages/home/home';
import login from '../pages/auth/login';
import { useDispatch, useSelector } from 'react-redux';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();





const AppContainer =()=>{
   const user=useSelector(state=>state.auth.user)
  // loginBool===true?props.navigation.navigate("Home"):console.log("checkkk valll")
  
const LoginStack=()=>{
    return (
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={login}
          options={{ headerShown: false }}
        />
         <Stack.Screen
        name="signup"
        component={signup}
        options={{ headerShown: false }}
      />
        </Stack.Navigator>)
  }

    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          {!user ? (
            <Stack.Screen
              name="login"
              component={LoginStack}
              options={{headerShown: false}}
            />
          ) : (
            <>
            
                <Stack.Screen
                  name="Home"
                  component={home}
                  options={{
                    title: 'My home',
                    headerStyle: {
                      backgroundColor: util.COLOR_BLUE,
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign:"center"
                  }}
            
                />
           
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

// const mapStateToProps = state => {
//   return {
//     isLoading: state.ui.isLoading,
//     user: state.auth.user,
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     login: params => dispatch(TASKS.login(params)),
//   };
// };

export default AppContainer;
