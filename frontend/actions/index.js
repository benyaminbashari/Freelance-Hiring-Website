import axios from 'axios';


//TODO: Complete REST naming

export function logout() {
    return {type: "LOGOUT"}
}


export function checkAuth(payload) {
    return function (dispatch) {
        return axios.get('http://localhost:8080/Test',{headers: {"Authentication": localStorage.getItem('jwt')}}).then(data => {
            dispatch({
                type: "CHECK_AUTH",
                data: data
            })

        })

    };
}

export function login(payload) {
    return function (dispatch) {
        return axios.post('http://localhost:8080/api/auth/signin', payload).then(data => {
            dispatch({
                type: "LOGIN",
                data: data
            })

        })
        .catch(error=> {
                dispatch({
                    type: "LOGIN_ERROR"
                })
            })

    };

}

export function register(payload) {
    return function (dispatch) {
        return axios.post('https://localhost:3000/api/auth/signup', payload).then(data => {
            dispatch({
                type: "REGISTER",
                data: data
            })
        }).catch(
            error=>{
                dispatch({
                    type: "REGISTER_ERROR",
                })
            }
        );
    };
}

export function addProject(payload) {
    //console.log(payload);]
    /*return function (dispatch) {
        return axios.post('http://localhost:8080/Test', {username:"Negar"}, {headers: {"Authentication": localStorage.getItem('jwt')}}).then(data => {
            dispatch({
                type: "ADD_PROJECT",
                data: data
            })
        });
    };*/
    console.log(payload);
    return function (dispatch) {
        return axios.put('http://localhost:8080/project', payload, {headers: {"Authentication": localStorage.getItem('jwt')}}).then(data => {
            dispatch({
                type: "ADD_PROJECT",
                data: data
            })
        });
    };

}

export function getUserProjects(payload) {

    return function (dispatch) {
        return axios.get('http://localhost:8080/project/?username='+payload.username,{headers: {"Authentication": localStorage.getItem('jwt')}}).then(data => {
            dispatch({
                type: "GET_PROJECT",
                data: data
            })
        });
    };
}

export function getUserProjectRequests(payload) {

    // return function (dispatch) {
    //     return axios.get('https://localhost:3000/user/projectRequests?'+payload.username, payload).then(data => {
    //         dispatch({
    //             type: "Requests",
    //             data: data
    //         })
    //     });
    // };
    if(payload.username == null)
        return {
            type: "GET_Requests",
            data: []
        };
    return {
        type: "GET_Requests",
        data:[
            {
                id: 1,
                projectName : "Project num 1",
                projectID: 1,
                applicantName: "Negar",
                requestDate: "2/5/19",
                applicantSkills: "Java, Python, ...",
            },
            {
                id: 2,
                projectName : "Project num 1",
                projectID: 3,
                applicantName: "Benyamin",
                requestDate: "2/5/19",
                applicantSkills: "Java, Python, ...",
            },
        ]

    }
}

export function setProjectDetail(payload){
    return {
        type: "SET_PROJECT_DETAILS",
        data: payload

    }
}


// Set project employee by employer (in employer profile ! )
export function acceptProjectEmployee(payload){
    // return function (dispatch) {
    //     return axios.get('https://localhost:3000/user/projectRequests?'+payload.username, payload).then(data => {
    //         dispatch({
    //             type: "Requests",
    //             data: data
    //         })
    //     });
    // };
    return{
        type: "ACCEPT_PROJECT_EMPLOYEE",
        data: payload

    }
}


export function deleteProjectEmployee(payload){
    // return function (dispatch) {
    //     return axios.get('https://localhost:3000/user/projectRequests?'+payload.username, payload).then(data => {
    //         dispatch({
    //             type: "Requests",
    //             data: data
    //         })
    //     });
    // };
    return{
        type: "DELETE_PROJECT_EMPLOYEE",
        data: payload

    }
}

