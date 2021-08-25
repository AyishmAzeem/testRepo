import axios from "axios";
import * as TASKS from "../ui/ui";
import * as util from "../../../utilities";

import * as TYPES from "../../types";

const logoutSuccess = () => {
  return {
    type: TYPES.LOGOUT,
    user: null,
  };
};
const loginSucess=(param)=>{
  console.log(param)
  return {
    type: TYPES.ADD_USER,
    user: param
  }
}

const signUpSucess=(param)=>{
  console.log(param)
  return {
    type: TYPES.CREATE_ACCOUNT,
    user: param
  }
}

export const login = (params) => {
  return (dispatch) => {
  let obj ={
    email:params.email,
    password:params.password,
  }
    dispatch(loginSucess(obj));
    //util.navigate("Home");
    // dispatch(TASKS.showLoader());
    // axios
    //   .post(`auth/login/`, params)
    //   .then(function() {
    //     dispatch(TASKS.hideLoader());
     //   util.navigate("Home");
    //   })
    //   .catch(function() {
    //     util.showToast("Please try again.");
    //     dispatch(TASKS.hideLoader());
    //   });
  };
};

export const signUp = (params) => {
  return (dispatch) => {
  let obj ={
    email:params.email,
    password:params.password,
    confirmPassword:params.confirmPassword,
    fullName:params.name
  }
    dispatch(signUpSucess(obj));
 
  };
};
export const signup = (params) => {
  return (dispatch) => {
    dispatch(TASKS.showLoader());
    axios
      .post(`auth/registration/`, params)
      .then(function() {
        dispatch(TASKS.hideLoader());
      })
      .catch(function() {
        util.showToast("Something went wrong. Please try again");
        dispatch(TASKS.hideLoader());
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutSuccess());
  };
};
