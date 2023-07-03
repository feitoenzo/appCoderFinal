import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { CART } from "../data/cart";
import CartItem from "../components/CartItem";
import React from "react";
import { useState } from "react";

const CartScreen = () => {
    const [cartItems, setCartItems] = useState(CART);
    const handleDeleteItem = id => {
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedCartItems);
    };
  
    const renderCartItem = ({ item }) => (
      <CartItem item={item} onDelete={handleDeleteItem} />
    );
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList
            data={CART}
            keyExtractor={item => item.id}
            renderItem={renderCartItem}
            />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.confirm}
            onPress={() => console.log("first")}
            >
            <Text>Confirmar</Text>
            <View>
              <Text style={styles.priceText}>Total: $100</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default CartScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 12,
      backgroundColor: "#fff",
      //paddingBottom: 120
    },
    list: {
      flex: 3,
    },
    footer: {
      flex: 1,
      padding: 12,
      borderTopColor: "#ccc",
      borderTopWidth: 1,
    },
    confirm: {
      backgroundColor: "#ccc",
      borderRadius: 10,
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    priceText: {
      fontSize: 18,
    },
  });