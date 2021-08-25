import { StyleSheet } from "react-native";
import * as util from "../utilities/index";
const styles = StyleSheet.create({
    parentViewStyle:{
        flexGrow:1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:util.WP(14)
    },

    buttonView:{
      width:util.WP(90),
      alignItems:"center",
      height:util.WP(7),
      marginTop:util.WP(19)
    },
    textInputStyle:{
        borderRadius: util.WP(2),
        borderColor: util.COLOR_BLUE,
        borderWidth: 1,
        height: util.WP(10),
        width: util.WP(90),
        marginBottom: util.WP(2),
        marginTop: util.WP(1),
        paddingHorizontal: 10,
        color:"black"
    },
    PickerStyle:{

        width: util.WP(90),
    }
});

export default styles;
