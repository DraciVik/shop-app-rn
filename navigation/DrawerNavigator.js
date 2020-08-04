import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./ShopNavigator";
import OrdersNavigator from "./OrdersNavigator";
import OrdersScreen from "../screens/shop/OrderScreen";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import UserProductsNavigator from "./UserProductsNavigator";

const DrawerNavigator = createDrawerNavigator();

function DrawerNavigation() {
	return (
		<NavigationContainer>
			<DrawerNavigator.Navigator
				drawerContentOptions={{
					activeTintColor: Colors.primary,
				}}
			>
				<DrawerNavigator.Screen
					name="ShopNavigator"
					component={ShopNavigator}
					options={() => ({
						title: "Products",
						drawerIcon: (drawerConfig) => (
							<Ionicons
								name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
								size={23}
								color={drawerConfig.color}
							/>
						),
					})}
				/>
				<DrawerNavigator.Screen
					name="OrdersNavigator"
					component={OrdersNavigator}
					options={() => ({
						title: "Your Orders",
						headerLeft: () => (
							<HeaderButtons HeaderButtonComponent={HeaderButton}>
								<Item
									title="Menu"
									iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
									onPress={() => props.navigation.toggleDrawer()}
								/>
							</HeaderButtons>
						),
						drawerIcon: (drawerConfig) => (
							<Ionicons
								name={Platform.OS === "android" ? "md-list" : "ios-list"}
								size={23}
								color={drawerConfig.color}
							/>
						),
					})}
				/>
				<DrawerNavigator.Screen
					name="UserProducts"
					component={UserProductsNavigator}
					options={() => ({
						title: "Your Orders",
						headerLeft: () => (
							<HeaderButtons HeaderButtonComponent={HeaderButton}>
								<Item
									title="Menu"
									iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
									onPress={() => props.navigation.toggleDrawer()}
								/>
							</HeaderButtons>
						),
						drawerIcon: (drawerConfig) => (
							<Ionicons
								name={Platform.OS === "android" ? "md-create" : "ios-create"}
								size={23}
								color={drawerConfig.color}
							/>
						),
					})}
				/>
				{/* <DrawerNavigator.Screen name="Cart" component={CartScreen} /> */}
			</DrawerNavigator.Navigator>
		</NavigationContainer>
	);
}

export default DrawerNavigation;
