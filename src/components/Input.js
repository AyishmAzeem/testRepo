import React from 'react';
import {Text, TouchableOpacity ,View,TextInput} from 'react-native'
import styles from '../styles/index'
import * as util from '../utilities/index'
function Input(props) {
    return(
        <View style={{width:util.WP(90)}}>
            <Text style={[styles.common.blackButtonText,{color:util.COLOR_BLUE}]}>{props.label}</Text>
            <View >
                <TextInput {...props} value={props.value}  placeholderTextColor={util.PLACEHOLDER_COLOR} style={[styles.auth.textInputStyle]}/>
            </View>
            {props.missingValue&&props.value==""?<Text style={{color:"red",fontSize:10}}>* Required</Text>:null}
        </View>
    )
}
export default Input;
