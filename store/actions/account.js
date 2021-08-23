export const CREATE_ACCOUNT = 'CREATE_ACCOUNT'
export const LOGIN= 'LOGIN'

export const createAccount=(firstName,email,password,confirmPass)=>{
    return{type:CREATE_ACCOUNT, accountData:{
        firstName,
        email,
        password,
        confirmPass
    }}
}
export const loginAccount=(email,password)=>{
    return{type:LOGIN,loginData:{
        email,
        password
    }}
}