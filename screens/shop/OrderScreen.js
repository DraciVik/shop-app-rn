import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "../../components/shop/OrderItem";

const OrdersScreen = (props) => {
	const orders = useSelector((state) => state.orders.orders);

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

const styles = StyleSheet.create({});
export default OrdersScreen;
