import { v4 as uuidv4 } from "uuid";


export const rowReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_ROW':
            return [...state,{
                name:action.row.name,
                email:action.row.email,
                id:uuidv4()
            }]
        case 'REMOVE_ROW':
            return state.filter(row => row.id !==action.id)
        default:
            return state
    }
}

