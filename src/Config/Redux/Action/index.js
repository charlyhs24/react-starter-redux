import firebase, { database } from '../../Firebase'
export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({ type : 'CHANGE_USER', value : 'indonesia raya' })
    },2000)
}
export const registerApi = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({type: 'CHANGE_LOADING', value : true})
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then(res => {
            console.log(`success ${res}`)
            dispatch({type: 'CHANGE_LOADING', value: false})
            resolve(true)
        })
        .catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
            console.log(errorCode, errorMessage)
            dispatch({type: 'CHANGE_LOADING', value: false})
            reject(false)
        });
    })
}
export const LoginUserApi = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch({type: 'CHANGE_LOADING', value : true})
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(res => {
            const dataUser = {
                email : res.user.email,
                uid : res.user.uid,
                emailVerified : res.user.emailVerified,
                refreshToken : res.user.refreshToken
            }
            dispatch({type: 'CHANGE_LOADING', value: false})
            dispatch({type: 'CHANGE_USER', value: dataUser})
            dispatch({type: 'CHANGE_ISLOGIN', value : true})
            resolve(dataUser)
        })
        .catch(function(error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
            console.log(errorCode, errorMessage)
            dispatch({type: 'CHANGE_LOADING', value: false})
            dispatch({type: 'CHANGE_ISLOGIN', value : false})
            reject(false)
        });
    }) 
}

export const addDataToApi = (data) => (dispatch) => {
    database.ref('note/' + data.userId).push({
        title : data.title,
        content : data.content,
        date : data.date
    })
}
export const getDataFromApi = () => (dispatch) => {
        database().ref('/users/' + data.userId).once('value')
        .then(function(snapshot) {
            var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
            // ...
            resolve(snapsh)
        })
}