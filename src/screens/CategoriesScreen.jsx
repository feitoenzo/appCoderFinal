import { FlatList, StyleSheet, Text, View } from "react-native";

import { CATEGORIES } from "../data/categories";
import CategoriesItem from "../components/CategoriesItem";
import React from "react";

const CategoriesScreen = ({ navigation }) => {
  const handleSelectedCategory = item => {
    navigation.navigate("Juego", {
      categoryId: item.id,
      name: item.title,
    });
  };

  const renderCategoriesItem = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <CategoriesItem item={item} onSelected={handleSelectedCategory} />
    </View>
  );
  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Encabezado de la lista</Text>
    </View>)

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoriesItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  categoriesContainer: {
    padding: 15,
    height: 150,
    
  },
});
