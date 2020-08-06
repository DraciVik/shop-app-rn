import React from "react";
import { FlatList, Button, Alert } from "react-native";
import ProductItem from "../../components/shop/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../../constants/Colors";
import { CommonActions } from "@react-navigation/native";
import * as productsActions from "../../store/actions/products";

const userProductScreen = (props) => {
	const userProducts = useSelector((state) => state.products.userProducts);
	const dispatch = useDispatch();
	const EditProductHandler = (id) => {
		console.log(id);
		props.navigation.dispatch(
			CommonActions.navigate({
				name: "EditProducts",
				params: {
					id: id,
				},
			})
		);
		// props.navigation.dispatch(CommonActions.setParams({ id: id }));
		// props.navigation.navigate("EditProducts");
	};

	const deleteHandler = (id) => {
		Alert.alert("Are you sure?", "Do you really want to delete this item?", [
			{ text: "No", style: "default" },
			{
				text: "Yes",
				style: "destructive",
				onPress: () => {
					dispatch(productsActions.deleteProduct(id));
				},
			},
		]);
	};
	return (
		<FlatList
			data={userProducts}
			renderItem={(itemData) => (
				<ProductItem
					image={itemData.item.imageUrl}
					title={itemData.item.title}
					price={itemData.item.price}
					onSelect={() => EditProductHandler(itemData.item.id)}
				>
					<Button
						color={Colors.primary}
						title="Edit"
						onPress={() => EditProductHandler(itemData.item.id)}
					/>
					<Button
						color={Colors.primary}
						title="Delete"
						onPress={() => deleteHandler(itemData.item.id)}
					/>
				</ProductItem>
			)}
		/>
	);
};

export default userProductScreen;
