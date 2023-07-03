import { COLORS } from "../constants/colors";
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryProductsScreen from '../screens/CategoryProductsScreen'
import ProductDetailScreen from '../screens/ProductDetailScreen'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const ShopNavigator = () => {
  const Stack = createNativeStackNavigator()

    return (
   
   //ctrl+space sugiere props

//ALT+SHIFT REPITE LINEAS CON LAS FLECHAS
  
        <Stack.Navigator 
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: "white", //quaternary
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
        >
            <Stack.Screen name='Inicio' component={CategoriesScreen}
              options={{
          title: "Categories",
        }}/>
            <Stack.Screen name='Juego' component={CategoryProductsScreen}options={({ route })=> ({
              title: route.params.name
            })}/>
           <Stack.Screen name='Detalle' component={ProductDetailScreen}options={({ route })=> ({
              title: route.params.name
            })}/>
      
        </Stack.Navigator>
   
  )
}

export default ShopNavigator

