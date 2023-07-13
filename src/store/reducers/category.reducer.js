import { CATEGORIES } from "../../data/categories";
import { SELECTED_CATEGORY } from "../actions/category.action";

const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const CategoryReducer = (state = initialState, action) => {
  
  
  switch (action.type) {
    case SELECTED_CATEGORY:
     
    //filtra mis categorias para que me encuentres la categoria que conicida con el id de la categoria que selecciono mi usuario
    const IndexCategory = state.categories.findIndex(
        cat => cat.id === action.categoryId
      );
      // igual a -1 una categoria que no exiista, entonces si llega a suceder que no encuentra la categoria, no se rompe la app
      if (IndexCategory === -1) return state;
      return { ...state, selected: state.categories[IndexCategory] };
    default:
      return state;
  }
};

export default CategoryReducer;
