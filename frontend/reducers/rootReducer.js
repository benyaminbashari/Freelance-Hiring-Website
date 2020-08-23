
const initialState = {
    profile: {
        projects:[],
        requests:[]
    }


};


function rootReducer(state=initialState, action) {
    if(action.type === "ADD_PROJECT") {

    }
    if (action.type === "GET_PROJECT"){
        return {
            ...state, profile: {
                ...state.profile, projects: action.data.data
            }
        }
    }
    if (action.type === "GET_Requests"){
        return{
            ...state,
            profile: {
                ...state.profile,
                requests: action.data

            }
        }
    }
    if (action.type === "SET_PROJECT_DETAILS"){
        return{
            ...state,
            profile: {
                ...state.profile,
                project: action.data
            }
        }
    }
    if(action.type === "ACCEPT_PROJECT_EMPLOYEE") {

        var req = [...state.profile.requests];

        var proj = [...state.profile.projects];
        for(let i = 0 ; i < req.length ; i++) {
            if(req[i].id === action.data.request.id) {
                req.splice(i, 1);
                break;
            }
        }

        for(let i = 0 ; i < proj.length ; i++) {
            if(proj[i].id === action.data.request.projectID) {
                proj[i].employee = action.data.request.applicantName;
            }
        }

        return {
            ...state, profile: {
                ...state.profile, requests: req,
                projects: proj
            }
        };

    }

    if(action.type === "DELETE_PROJECT_EMPLOYEE") {

        var req = [...state.profile.requests];

        for(let i = 0 ; i < req.length ; i++) {
            if(req[i].id === action.data.request.id) {
                req.splice(i, 1);
                break;
            }
        }

        return {
            ...state, profile: {
                ...state.profile, requests: req,
            }
        };

    }

    return state;
}
export default rootReducer;