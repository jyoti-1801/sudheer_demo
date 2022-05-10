import {SET_SHOW_PASSWORD,SET_SHOW_PASSWORD_TEXT,SET_ERROR,SET_INPUT_COLOR,SET_MODAL_VISIBLE,SET_CONFIRM_PASSWORD,SET_CONFIRM_PASSWORD_ERROR_MESSAGE,SET_SECURETEXT,SET_PASSWORD_ERROR_MESSAGE,SET_NAME,SET_SHOW,SET_EMAIL,GET_CREDENTIAL} from './action';
const initialState = {
    password:{},
    text:'',
    error:"",
    color:'',
    modalvisible:false,
    confirmpassword : '',
    confirmpassworderrormsg :'',
    securetext:"",
    passworderrormsg:"",
    show:false,
    name:'',
    email:'',
    credential:[],
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SHOW_PASSWORD:
            return { ...state, password: action.payload};

        case SET_SHOW_PASSWORD_TEXT:
             return { ...state, text: action.payload};


        case SET_ERROR:
             return { ...state, error: action.payload};

         case SET_INPUT_COLOR:
                 return { ...state, color: action.payload};

         case SET_MODAL_VISIBLE:
             return { ...state, modalvisible: action.payload};

        case SET_CONFIRM_PASSWORD:
             return { ...state, confirmpassword : action.payload};

        case SET_CONFIRM_PASSWORD_ERROR_MESSAGE:
            return {...state,confirmpassworderrormsg : action.payload}; 


     case SET_SECURETEXT:
        return { ...state, securetext : action.payload};    


        case SET_PASSWORD_ERROR_MESSAGE:
            return {...state,passworderrormsg : action.payload};


            case SET_NAME:
                return {...state,name : action.payload};


            case SET_SHOW:
                return {...state,show : action.payload};

            case SET_EMAIL:
                return {...state,email : action.payload};
                
            case GET_CREDENTIAL:
                return {...state,credential:action.payload}    
         default:
             return state;
    }
}

export default userReducer; 