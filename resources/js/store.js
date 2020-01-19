import { combineReducers,createStore } from "redux";

const collapsed=(state=false,action)=>{
    switch (action.type) {
        case 'collapsed':
            return action.payload;
        default:
            return state;
    }
  }
  //Action
  export const collapsedAct=(response)=>{
    return{
        type:'collapsed',
        payload:response
    }
  }


  const id=(state=1,action)=>{
    switch (action.type) {
        case 'toSingle':
            return action.payload;
        default:
            return state;
    }
  }
  //Action
  export const idAct=(response)=>{
    return{
        type:'toSingle',
        payload:response
    }
  }

  const search=(state="language",action)=>{
    switch (action.type) {
        case 'search':
            return action.payload;
        default:
            return state;
    }
  }
  //Action
  export const searchAct=(response)=>{
    return{
        type:'search',
        payload:response
    }
  }

  const searchtype=(state="a",action)=>{
    switch (action.type) {
        case 'searchtype':
            return action.payload;
        default:
            return state;
    }
  }
  //Action
  export const searchtypeAct=(response)=>{
    return{
        type:'searchtype',
        payload:response
    }
  }
  
  const searchPlace=(state="main",action)=>{
    switch (action.type) {
        case 'searchplace':
            return action.payload;
        default:
            return state;
    }
  }
  //Action
  export const searchPlaceAct=(response)=>{
    return{
        type:'searchplace',
        payload:response
    }
  }

  const initialState={
    collapsed:false,
    id:1,
    search:'language',
    searchtype:"a",
    searchPlace:"main",
  }
  const allReducers=combineReducers({
    collapsed,
    id,
    search,
    searchtype,
    searchPlace,
  })
  export const store = createStore(allReducers,initialState);