import React from "react";
import { FlatList, Button, Platform } from "react-native";
import ProductItem from "../../components/shop/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import * as productsActions from "../../store/actions/products";

const userProductScreen = (props) => {
	const userProducts = useSelector((state) => state.products.userProducts);
	const dispatch = useDispatch();
	return (
		<FlatList
			data={userProducts}
			renderItem={(itemData) => (
				<ProductItem
					image={itemData.item.imageUrl}
					title={itemData.item.title}
					price={itemData.item.price}
					onSelect={() => {}}
				>
					<Button color={Colors.primary} title="Edit" onPress={() => {}} />
					<Button
						color={Colors.primary}
						title="Delete"
						onPress={() => {
							dispatch(productsActions.deleteProduct(itemData.item.id));
						}}
					/>
				</ProductItem>
			)}
		/>
	);
};

export default userProductScreen;
