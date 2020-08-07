import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import AuthScreen from "../screens/user/AuthScreen";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";

const OrdersNavigator = createStackNavigator();

function AuthNavigator() {
	return (
		<OrdersNavigator.Navigator
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
			<OrdersNavigator.Screen
				name="Auth"
				component={AuthScreen}
				options={(props) => ({
					title: "Aauthenticate",
					// headerLeft: () => (
					// 	<HeaderButtons HeaderButtonComponent={HeaderButton}>
					// 		<Item
					// 			title="Menu"
					// 			iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
					// 			onPress={() => props.navigation.toggleDrawer()}
					// 		/>
					// 	</HeaderButtons>
					// ),
				})}
			/>
		</OrdersNavigator.Navigator>
	);
}

export default AuthNavigator;
