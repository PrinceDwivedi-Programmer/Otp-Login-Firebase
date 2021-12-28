import {
  Get_All_Products,
  Get_Product,
  Delete_Product,
  Add_Product,
  Update_Product,
} from "../Type/Type";

const initialState = {
  products: [],
  product: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Get_All_Products :
      return {
        ...state,
        products: payload,
      };

    case Add_Product :
      console.log(payload);
      return {
        ...state,
        products: [payload, ...state.products],
      };
    case Get_Product:
      return {
        ...state,
        post: state.products.find((item) => item.id == payload),
      };
    case Update_Product:
      return {
        ...state,
        products: state.products.map((item) =>
          item.id == payload.id ? payload : item
        ),
      };
    case Delete_Product:
      return {
        ...state,
        products: state.products.filter((item) => item.id!= payload),
      };
    default:
      return state;
  }
};
