/* import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import React from 'react'
import { add_item } from '../store/actions/cart.action';

const ProductDetailScreen = ({}) => {
  const dispatch = useDispatch();

  const juego  = useSelector(state => state.products.selected);
  

  const handleAddItem = () =>{
    dispatch(add_item(juego));
  }
  return (
    <View>
      <Text>{juego.name}</Text>
      <Text>{juego.description}</Text>
      <Text>${juego.price}</Text>
      <Button title="Agregar al carrito" onPress ={handleAddItem} />
    </View>

  );
};

export default ProductDetailScreen

const styles = StyleSheet.create({})

 */

import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { add_item } from '../store/actions/cart.action';

const ProductDetailScreen = ({}) => {
  const dispatch = useDispatch();
  const juego = useSelector(state => state.products.selected);

  const handleAddItem = () => {
    dispatch(add_item(juego));
  };
 //con esto nos aseguramos que juego no sea null antes de renderizar
  return (
    <View>
     
      {juego && (
        <>
          <Text>{juego.name}</Text>
          <Text>{juego.description}</Text>
          <Text>${juego.price}</Text>
          <Button title="Agregar al carrito" onPress={handleAddItem} />
        </>
      )}
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
