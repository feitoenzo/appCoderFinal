import { FlatList, StyleSheet, Text, View } from "react-native";

import { PRODUCTS } from "../data/productos";
import ProductsItem from "../components/ProductsItem";
import React from "react";

const CategoryProductsScreen = ({ navigation, route }) => {
  const breads = PRODUCTS.filter(
    bread => bread.category === route.params.categoryId
  );

  const handleSelectedProduct = item => {
    navigation.navigate("Detalle", {
      product: item,
      name: item.name,
    });
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <ProductsItem item={item} onSelected={handleSelectedProduct} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={breads}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default CategoryProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productItem: {
    margin: 15,
    height: 300,
    width: 150,
  },
});
