
import instance from "../services/instance";
import { updateData } from "./DataSlice";

export const getData = (param) => async dispatch => {
      try {
          await instance.get(param)
             .then((response) => 
             {console.log("RESPONSE", response.data)
             dispatch(updateData(response.data))}
             )
             
      }
      catch (e) {
          return console.error(e.message);
     }
  }

//Put data

export const putData = (param, values) => async dispatch => {
    try {
        await instance.post(param, values)
           .then((response) => 
           {console.log("RESPONSE", response.data)
           //dispatch(updateData(response.data))
        })
           
    }
    catch (e) {
        return console.error(e.message);
   }
}

// export const putData = async (param, values) => {
//     const res = await instance.put(param, values);
//     return res.data;
//   };
  
//   //Post datas
//   export const postData = async (param, values) => {
//       const res = await instance.post(param, values); 
//       return res.data;
//   };
  