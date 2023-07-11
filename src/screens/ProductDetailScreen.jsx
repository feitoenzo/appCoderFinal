import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { useSelector } from 'react-redux';

const ProductDetailScreen = ({route}) => {
  const juego  = useSelector(state => state.products.selected);
  
  return (
    <View>
      <Text>{juego.name}</Text>
      <Text>{juego.description}</Text>
      <Text>${juego.price}</Text>
    </View>
  );
};

export default ProductDetailScreen

const styles = StyleSheet.create({})



