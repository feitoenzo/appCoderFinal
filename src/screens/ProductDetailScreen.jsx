import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ProductDetailScreen = ({route}) => {
  const juego = route.params.product;
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



