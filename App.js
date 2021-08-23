import React from 'react';
import {

  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import SignUp from './screens/signUp'
import data from './store/reducers/data'
import AppNavigator from './Navigator/appNavigator'
const rootReducer=combineReducers({
  loginInfo:data
})
const store=createStore(rootReducer)
export default function App() {
return(
<Provider store={store}>
<AppNavigator/>
</Provider>
)
}


const styles=StyleSheet.create({
  container:
  {
    flex:1,

  }
})
