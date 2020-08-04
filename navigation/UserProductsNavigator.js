import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import OrdersScreen from "../screens/shop/OrderScreen";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";
import UserProductsScreen from "../screens/user/UserProductScreen";

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
				})}
			/>
		</AdminNavigator.Navigator>
	);
}

export default UserProductNavigator;
