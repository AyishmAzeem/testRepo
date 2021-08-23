import React from 'react'
import { TextInput,View,StyleSheet,Dimensions,Text } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log(windowWidth,"window width",windowHeight)

const Input=(props)=>{
    return(
        <View style={{width:windowWidth*0.90}}>
            <Text style={styles.label}>{props.label}</Text>
            <View style={styles.input}>
                <TextInput {...props} value={props.value} style={{paddingHorizontal:windowWidth*0.03,paddingVertical:windowWidth*0.02}}/>
            </View>
            {props.missingValue&&props.value==""?<Text style={{color:"red",fontSize:10}}>* Required</Text>:null}
        </View>
    )
}
export default Input
const styles=StyleSheet.create({
    label:{
        fontSize:12,
        color:"#406973",
        marginVertical:windowHeight*0.01    
    },
    input:{
        backgroundColor:"#f6f6f6",
        borderColor:"#5c9ead",
        borderWidth:1,
        borderRadius:windowWidth*0.02}
})