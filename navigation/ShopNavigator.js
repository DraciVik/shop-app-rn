import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import Colors from "../constants/Colors";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
import CartScreen from "../screens/shop/CartScreen";

const ProductsNavigator = createStackNavigator();

function ShopNavigator() {
	return (
		<ProductsNavigator.Navigator
			initialRouteName="ProductsOverview"
			screenOptions={{
				headerStyle: {
					backgroundColor: Platform.OS === "android" ? Colors.primary : "",
				},
				headerTitleStyle: {
					fontFamily: "open-sans-bold",
				},
				headerBackTitleStyle: {
					fontFamily: "open-sans",
				},
				headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
			}}
		>
			<ProductsNavigator.Screen
				options={(props) => ({
					title: "All products",
					headerLeft: () => (
						<HeaderButtons HeaderButtonComponent={HeaderButton}>
							<Item
								title="Menu"
								iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
								onPress={() => props.navigation.toggleDrawer()}
							/>
						</HeaderButtons>
					),
					headerRight: () => (
						<HeaderButtons HeaderButtonComponent={HeaderButton}>
							<Item
								title="Cart"
								iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
								onPress={() => props.navigation.navigate("Cart")}
							/>
						</HeaderButtons>
					),
				})}
				name="ProductsOverview"
				component={ProductsOverviewScreen}
			/>
			<ProductsNavigator.Screen
				name="ProductDetail"
				component={ProductDetailScreen}
			/>
			<ProductsNavigator.Screen
				name="Cart"
				component={CartScreen}
				options={() => ({
					title: "Your Cart",
				})}
			/>
		</ProductsNavigator.Navigator>
	);
}

export default ShopNavigator;
