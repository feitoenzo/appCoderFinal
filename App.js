/* import { StyleSheet, Text, View } from 'react-native';

import ShopNavigator from './src/navigation/ShopNavigator';
import { useFonts } from 'expo-font';

export default function App() {
 
 const [loaded] = useFonts ({
    Tipografia1: require("./src/assets/fonts/Kanit-Bold.ttf"),
    Tipografia2: require("./src/assets/fonts/Kanit-Regular.ttf")
});
   if(!loaded) return null
  return (
    <ShopNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontFamily: "Tipografia2"
  }
});
 
 */
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store";
;


export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </Provider>
    
  );
}


 
 