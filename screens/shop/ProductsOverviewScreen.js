import React, { useState, useEffect, useCallback } from "react";
import {
	FlatList,
	Button,
	StyleSheet,
	ActivityIndicator,
	View,
	Text,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as cartActions from "../../store/actions/cart";
import * as productsActions from "../../store/actions/products";
import Colors from "../../constants/Colors";

const ProductOverviewScreen = (props) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isRefreshing, setIsRefreshing] = useState(false);
	const [error, setError] = useState();
	const products = useSelector((state) => state.products.availableProducts);
	const dispatch = useDispatch();

	const loadProducts = useCallback(async () => {
		setError(null);
		setIsRefreshing(true);
		try {
			await dispatch(productsActions.fetchProducts());
		} catch (err) {
			setError(err.message);
		}

		setIsRefreshing(false);
	}, [dispatch, setIsLoading, setError]);

	useEffect(() => {
		const willFocusSub = props.navigation.addListener("focus", loadProducts);

		return () => {
			willFocusSub;
		};
	}, [loadProducts]);

	useEffect(() => {
		setIsLoading(true);
		loadProducts().then(() => {
			setIsLoading(false);
		});
	}, [dispatch, loadProducts]);

	const selectItemHandler = (id, title) => {
		props.navigation.navigate("ProductDetail", {
			productId: id,
			productTitle: title,
		});
	};

	if (error) {
		return (
			<View style={styles.activityIndicator}>
				<Text>An error occured: {error}</Text>
				<Button
					title="Try again"
					onPress={loadProducts}
					color={Colors.primary}
				/>
			</View>
		);
	}

	if (isLoading) {
		return (
			<View style={styles.activityIndicator}>
				<ActivityIndicator size="large" color={Colors.primary} />
			</View>
		);
	}
	if (!isLoading && products.length === 0) {
		return (
			<View style={styles.activityIndicator}>
				<Text>No products found. Maybe start adding some!</Text>
			</View>
		);
	}
	return (
		<FlatList
			onRefresh={loadProducts}
			refreshing={isRefreshing}
			data={products}
			renderItem={(itemData) => (
				<ProductItem
					image={itemData.item.imageUrl}
					title={itemData.item.title}
					price={itemData.item.price}
					onSelect={() => {
						selectItemHandler(itemData.item.id, itemData.item.title);
					}}
				>
					<Button
						color={Colors.primary}
						title="View Details"
						onPress={() => {
							selectItemHandler(itemData.item.id, itemData.item.title);
						}}
					/>
					<Button
						color={Colors.primary}
						title="To cart"
						onPress={() => {
							dispatch(cartActions.addToCart(itemData.item));
						}}
					/>
				</ProductItem>
			)}
		/>
	);
};

const styles = StyleSheet.create({
	activityIndicator: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default ProductOverviewScreen;
