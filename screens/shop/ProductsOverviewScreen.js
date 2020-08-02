import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductOverviewScreen = (props) => {
	const products = useSelector((state) => state.products.availableProducts);
	return (
		<FlatList
			data={products}
			renderItem={(itemData) => (
				<ProductItem
					image={itemData.item.imageUrl}
					title={itemData.item.title}
					price={itemData.item.price}
					onViewDetail={() => {
						props.navigation.navigate("ProductDetail", {
							productId: itemData.item.id,
						});
					}}
					onAddToCart={() => {}}
				/>
			)}
		/>
	);
};

const styles = StyleSheet.create({});

export default ProductOverviewScreen;
