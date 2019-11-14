const initalState = {
  popup : false,
  isLogin : false,
  user : {},
  note : [],
  isLoading : false,
}
const reducer = (state=initalState, action) => {
    if(action.type === 'CHANGE_POPUP'){
      return {
        ...state,
        popup : action.value
      }
    }
    if(action.type === 'CHANGE_ISLOGIN'){
      return {
        ...state,
        isLogin : action.value
      }
    }
    if(action.type === 'CHANGE_USER'){
      return {
        ...state,
        user : action.value
      }
    }
    if(action.type === 'CHANGE_LOADING'){
      return {
        ...state,
        isLoading : action.value
      }
    }
    if(action.type === 'CHANGE_ISLOGIN'){
      return {
        ...state,
        isLogin : action.value
      }
    }
    if(action.type === 'SET_NOTE'){
      return {
        ...state,
        note : action.value
      }
    }
    return state
}
export default reducer 