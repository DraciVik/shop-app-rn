import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import OrdersScreen from "../screens/shop/OrderScreen";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
import UserProductsScreen from "../screens/user/UserProductScreen";
import EditProductScreen from "../screens/user/EditProductScreen";

const AdminNavigator = createStackNavigator();

function UserProductNavigator() {
	return (
		<AdminNavigator.Navigator
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
			<AdminNavigator.Screen
				name="UserProducts"
				component={UserProductsScreen}
				options={(props) => ({
					title: "Your Products",
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
								title="Add"
								iconName={
									Platform.OS === "android" ? "md-create" : "ios-create"
								}
								onPress={() => props.navigation.navigate("EditProducts")}
							/>
						</HeaderButtons>
					),
				})}
			/>
			<AdminNavigator.Screen
				name="EditProducts"
				component={EditProductScreen}
				options={(props) => ({
					title: "Edit Your Product",
				})}
			/>
		</AdminNavigator.Navigator>
	);
}

export default UserProductNavigator;
