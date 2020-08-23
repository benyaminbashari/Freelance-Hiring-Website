
const initialState = {
    token: "",
    status: "",
    profile: {
        username: null,
        user_type: null,
    },

};


function authReducer(state=initialState, action) {
    if(action.type === "LOGIN") {

        let ttoken = "Bearer"+ action.data.data.accessToken;
        localStorage.setItem('jwt', "Bearer"+ action.data.data.accessToken);
        return {
            ...state, token: ttoken, status: "success", profile: {
                ...state.profile, username: action.data.data.username,
                user_type: action.data.data.type
            }
        }
    }
    if(action.type === "LOGIN_ERROR") {
        return {
            ...state, status: "failed"
        }

    }
    if(action.type === "CHECK_AUTH") {
        return {
            ...state, token: action.data.data.accessToken, status: "success", profile: {
                ...state.profile, username: action.data.data.username,
                user_type: action.data.data.type
            }
        }
    }
    if(action.type === "LOGOUT") {
        localStorage.removeItem('jwt');
        return {
            ...state, token: "", status: "", profile: {}
        }
    }


    return state;
}
export default authReducer;