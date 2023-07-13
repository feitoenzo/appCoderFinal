import { URL_API } from "../../constants/database";

//3 acciones principales para el carrito.
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CONFIRM_CART = "CONFIRM_CART";

export const add_item = item => ({
  type: ADD_ITEM,
  item,
});

//solamente el id porq puedo reconocerlo con eso
export const remove_item = itemId => ({
  type: REMOVE_ITEM,
  itemId,
});

export const confirm_cart = (items, total) => {
  return async dispatch => {
    
    //try/catch para manejar los errores en caso de que haya algun erro para poder manejarlo
    try {
      const response = await fetch(`${URL_API}/ordenes.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        //con fetch hay que fomentar con json.stringify, con axios lo hace por defecto
        body: JSON.stringify({
          date: Date.now(),
          items: { ...items },
          total,
        }),
      });
      const result = await response.json();
      console.log(result);
      dispatch({
        type: CONFIRM_CART,
        confirm: true,
        // sirve para metricas de negocio, por ejemlo para saber si se quizo realizar la ocmpra y no se pudo por fallas en la app
      });
    } catch (error) {
      console.log(error);
    }
  };
};
