import React from 'react';
import {Text, TouchableOpacity } from 'react-native'
import styles from '../styles/index'
function Button(props) {
    return(
        <TouchableOpacity {...props} style={styles.common.button}>
            <Text style={[styles.common.blackButtonText]}>{props.label}</Text>
        </TouchableOpacity>
    )
}
export default Button;
