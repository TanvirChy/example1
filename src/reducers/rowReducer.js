import { v4 as uuidv4 } from "uuid";

export const rowReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ROW":
      return [
        ...state,
        {
          name: action.row.name,
          email: action.row.email,
          id: uuidv4(),
        },
      ];

    case "REMOVE_ROW":
      return state.filter((row) => row.id !== action.id);
    default:
      console.log("default");
      return state;
  }
};

// Try to remove insert duplicate  email

// console.log(state)

//             const tryN = state.map(dup=>{
//                 dup.email.includes(action.row.email)
//             })
//             console.log(tryN)

// console.log(state.rows.email)
//             const val = state.includes(action.row.email)
//             console.log(val)
// if (state.indexOf(action.row.email) === 0) {
//     return  [...state,{
//            name:action.row.name,
//             email:action.row.email,
//              id:uuidv4()
//          }];
//   }

// return [
//   ...state,
//   {
//     name: action.row.name,
//     email: action.row.email,
//     id: uuidv4(),
//   },
// ];

// const useremail = action.row.email
//       console.log(useremail)
//       state.map(dup=>{
//         if(dup.email === useremail){
//           console.log('no')
//           return state
//         }else{
//           console.log('Yes')

//           return [
//             ...state,
//             {
//               name: action.row.name,
//               email: action.row.email,
//               id: uuidv4(),
//             },
//           ];
//         }
//       })

    // return [
    //   ...state,
    //   {
    //     name: action.row.name,
    //     email: action.row.email,
    //     id: uuidv4(),
    //   },
    // ];
    //  state.map(dup=>{
    //   if(dup.email ===action.row.email){
    //     return [
    //       ...state,
    //       {
    //         name: action.row.name,
    //         email: action.row.email,
    //         id: uuidv4(),
    //       },
    //     ];
    //   }}else{
    //     return state;

    //    }
