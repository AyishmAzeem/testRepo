import React from 'react';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers, createStore } from 'redux';
import data from './store/reducers/data'
import AppNavigator from './Navigator/appNavigator'
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/lib/integration/react';
import LoadingComponent from './components/loadingComponent';
const persistConfig = {
  key: 'root',
  storage:AsyncStorage
 };
const rootReducer=combineReducers({
  loginInfo:data
})
 const perReducer = persistReducer(persistConfig, rootReducer);
 const store=createStore(perReducer)
 const persistor = persistStore(store)
export default function App() {
return(
<Provider store={store}>
<PersistGate loading={<LoadingComponent/>} persistor={persistor}>
<AppNavigator/>
</PersistGate>
</Provider>
)}

