//tipos de accion: aca se explica porq son strings

export const SELECTED_PRODUCT = "SELECTED_PRODUCT";
export const FILTERED_PRODUCT = "FILTERED_PRODUCT";


//1ra accion 
export const selectedProduct = id => ({
  type: SELECTED_PRODUCT,
  productId: id,
});

export const filteredProduct = id => ({
  type: FILTERED_PRODUCT,
  categoryId: id,
});
