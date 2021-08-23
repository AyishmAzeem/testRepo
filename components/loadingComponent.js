import React from 'react'
import {View,StyleSheet,Dimensions,Text, ActivityIndicator } from 'react-native'
const windowHeight = Dimensions.get('window').height;

const LoadingComponent=(props)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to ShopDev</Text>
            <ActivityIndicator size="large" color="white"/>
        </View>
    )
}
export default LoadingComponent
const styles=StyleSheet.create({
    container:
    {
      flex:1,
      backgroundColor:"#5c9ead",
      justifyContent:"center",
      alignItems:"center",
    },
    text:{
        fontSize:20,
        color:"white",
        marginBottom:windowHeight*0.1

    }
})