import { CREATE_ACCOUNT, LOGIN, loginAccount } from "../actions/account"
import { Alert} from "react-native"
import Account from "../../models/account"

const initialState={
   availableAccounts:[],
   loginAccount:[],
   login:false
}

export default (state=initialState,action,props)=>{
    console.log(action,"yayyy")
   switch(action.type){
       case CREATE_ACCOUNT:
       const newAccount=new Account(
           1,
           action.accountData.firstName,
           action.accountData.email,
           action.accountData.password,
           action.accountData.confirmPass
     
       )
        return{
        ...state,
        availableAccounts:state.availableAccounts.concat(newAccount)

      }
      case LOGIN:
        let details =state.availableAccounts.filter(acc=>acc.email===action.loginData.email)
        if(details.length===1){ 
            if(details[0].password!==action.loginData.password){
                Alert.alert("","Invalid Password")
            }
    }
    else{
        Alert.alert("","No User Found")
    } 
    const loginAcc=state.availableAccounts.filter(acc=>acc.email===action.loginData.email)
        return{
            ...state,
            loginAccount:loginAcc,
          login:loginAcc.length===1?loginAcc[0].password===action.loginData.password?true:false:false
          }
       default:
       return state 
    }

}
