import * as TYPES from "../../types";
import { Alert } from "react-native";
const initialState = {
  user: null,
  availableAccounts:[],
};
const reducer = (state = initialState, actions) => {
  console.log("reducer",actions)

  switch (actions.type) {
    case TYPES.ADD_USER:
      const details =state.availableAccounts.filter(acc=>acc.email===actions.user.email)
      if(details.length===1){ 
          if(details[0].password!==actions.user.password){
              Alert.alert("","Invalid Password")
          }
  }
  else{
      Alert.alert("","No User Found")
  } 
      return {
        ...state,
        user: details.length===1?details[0].password===actions.user.password?details[0]:null:null,
      };
    case TYPES.CREATE_ACCOUNT:
      console.log(state.availableAccounts.concat(actions.user))
         return{
         ...state,
         availableAccounts:state.availableAccounts.concat(actions.user),
         user: null,
       }
      
    case TYPES.LOGOUT:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};
export default reducer;
