import React, { useLayoutEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	Button,
	ScrollView,
} from "react-native";
import { useSelector } from "react-redux";

const ProductDetailScreen = (props) => {
	const selectedProduct = useSelector((state) =>
		state.products.availableProducts.find(
			(product) => product.id === props.route.params.productId
		)
	);

	useLayoutEffect(() => {
		props.navigation.setOptions({ headerTitle: selectedProduct.title });
	}, [selectedProduct.title]);

	return (
		<View>
			<Text>{selectedProduct.description}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;
