import {
  Get_All_Products,
  Get_Product,
  Delete_Product,
  Add_Product,
  Update_Product,
} from "../Type/Type";

import axios from "axios";


export const getAllProducts =()=>async (dispatch)=>{



                const result= await axios.get("http://tomatoman.pythonanywhere.com/items/items/");
                dispatch({


                                type:Get_All_Products,
                                payload:result.data
                })
}