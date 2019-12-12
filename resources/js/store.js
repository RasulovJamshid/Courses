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

  const search=(state=" ",action)=>{
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

  const initialState={
    collapsed:false,
    id:1,
    search:' ',
  }
  const allReducers=combineReducers({
    collapsed,
    id,
    search,
  })
  export const store = createStore(allReducers,initialState);