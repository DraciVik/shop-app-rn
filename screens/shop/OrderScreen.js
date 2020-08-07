import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	FlatList,
	ActivityIndicator,
	StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import OrderItem from "../../components/shop/OrderItem";
import * as ordersActions from "../../store/actions/orders";
import Colors from "../../constants/Colors";

const OrdersScreen = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const orders = useSelector((state) => state.orders.orders);
	const dispatch = useDispatch();

	useEffect(() => {
		setIsLoading(true);
		dispatch(ordersActions.fetchOrders()).then(() => {
			setIsLoading(false);
		});
	}, [dispatch]);

	if (isLoading) {
		return (
			<View style={styles.centered}>
				<ActivityIndicator size="large" color={Colors.primary} />
			</View>
		);
	}
	return (
		<FlatList
			data={orders}
			renderItem={(itemData) => (
				<OrderItem
					items={itemData.item.items}
					amount={itemData.item.totalAmount}
					date={itemData.item.readableDate}
				/>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	centered: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
export default OrdersScreen;
