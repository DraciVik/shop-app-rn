import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";
import { NavigationContainer } from "@react-navigation/native";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";

const ProductsNavigator = createStackNavigator();

function ShopNavigator() {
	return (
		<NavigationContainer>
			<ProductsNavigator.Navigator
				initialRouteName="ProductsOverview"
				screenOptions={{
					headerStyle: {
						backgroundColor: Platform.OS === "android" ? Colors.primary : "",
					},
					headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
				}}
			>
				<ProductsNavigator.Screen
					options={{ title: "All products" }}
					name="ProductsOverview"
					component={ProductsOverviewScreen}
				/>
				<ProductsNavigator.Screen
					name="ProductDetail"
					component={ProductDetailScreen}
				/>
			</ProductsNavigator.Navigator>
		</NavigationContainer>
	);
}

export default ShopNavigator;
