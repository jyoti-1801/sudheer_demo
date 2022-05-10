export const SET_SHOW_PASSWORD = 'SET_SHOW_PASSWORD';
export const SET_SHOW_PASSWORD_TEXT = 'SET_SHOW_PASSWORD_TEXT';
export const SET_ERROR = 'SET_ERROR';
export const SET_INPUT_COLOR = 'SET_INPUT_COLOR';
export const SET_MODAL_VISIBLE = 'SET_MODAL_VISIBLE';
export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';
export const SET_CONFIRM_PASSWORD_ERROR_MESSAGE = 'SET_CONFIRM_PASSWORD_ERROR_MESSAGE ';
export const SET_SECURETEXT = 'SET_SECURETEXT ';
export const SET_PASSWORD_ERROR_MESSAGE = 'SET_PASSWORD_ERROR_MESSAGE ';
export const SET_NAME = 'SET_NAME';
export const SET_SHOW = 'SET_SHOW';
export const SET_EMAIL = 'SET_EMAIL';
export const GET_CREDENTIAL = 'GET_CREDENTIAL';

const API_URL = 'https://mocki.io/v1/1bae9979-870c-45e9-a28d-ae11080d03b4';

export const getcredential = () => {
   try {
        return async dipatch =>{
          const result = await fetch(API_URL,{
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              }
              
          });
          const json = await result.json();
          if (json) {
         dipatch({
             type: GET_CREDENTIAL,
             payload:json
         })
          } else {
              console.log("unable to fetch")
          }
        }
   } catch (error) {
       console.log(error);
   }
}


export const setPassword = password =>dipatch => {
     dipatch({
         type:SET_SHOW_PASSWORD,
         payload: password,
     });
};


export const setPasswordtxt = text =>dipatch => {
    dipatch({
        type:SET_SHOW_PASSWORD_TEXT,
        payload: text,
    });
};




export const seterror = error =>dipatch => {
    dipatch({
        type:SET_ERROR,
        payload:error,
    });
};




export const setInputcolor = color =>dipatch => {
    dipatch({
        type:SET_INPUT_COLOR,
        payload:color,
    });
};





export const setModalvisible = modalvisible =>dipatch => {
    dipatch({
        type:SET_MODAL_VISIBLE,
        payload: modalvisible,
    });
};



export const setconfirmpassword = confirmpassword =>dipatch => {
    dipatch({
        type:SET_CONFIRM_PASSWORD,
        payload: confirmpassword ,
    });
};

export const setconfirmpassworderrormsg= confirmpassworderrormsg =>dipatch => {
    dipatch({
        type:SET_CONFIRM_PASSWORD_ERROR_MESSAGE,
        payload:confirmpassworderrormsg,
    });
};


export const setsecuretext =  securetext =>dipatch => {
    dipatch({
        type:SET_SECURETEXT,
        payload:securetext ,
    });
};

export const setpassworderrormsg= passworderrormsg =>dipatch => {
    dipatch({
        type:SET_PASSWORD_ERROR_MESSAGE,
        payload:passworderrormsg,
    });
};



export const setName= name =>dipatch => {
    dipatch({
        type:SET_NAME,
        payload:name,
    });
};


export const setShow= show =>dipatch => {
    dipatch({
        type:SET_SHOW,
        payload:show,
    });
};

export const setemail= email =>dipatch => {
    dipatch({
        type:SET_EMAIL,
        payload:email,
    });
};