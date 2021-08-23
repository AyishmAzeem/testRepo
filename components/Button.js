import React from 'react'
import {StyleSheet,Dimensions,Text, TouchableOpacity } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log(windowWidth,"window width",windowHeight)

const Button=(props)=>{
    return(
        <TouchableOpacity {...props} style={{width:"50%",backgroundColor:"#5c9ead",alignItems:"center",justifyContent:"center",height:"100%",borderRadius:windowHeight*0.01}}>
            <Text style={styles.buttonText}>{props.label}</Text>
        </TouchableOpacity>
    )
}
export default Button
const styles=StyleSheet.create({
    buttonText:{
        fontSize:12,
        color:"white",
        marginVertical:windowHeight*0.01    
    } 
})