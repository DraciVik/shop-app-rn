import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	TouchableNativeFeedback,
	Platform,
} from "react-native";
import Card from "../UI/Card";

const ProductItem = (props) => {
	let TouchableComponent = TouchableOpacity;
	if (Platform.OS === "android" && Platform.Version >= 21) {
		TouchableComponent = TouchableNativeFeedback;
	}
	return (
		<Card style={styles.product}>
			<View style={styles.touchable}>
				<TouchableComponent onPress={props.onSelect} useForeground>
					<View>
						<View style={styles.imageContainer}>
							<Image style={styles.image} source={{ uri: props.image }} />
						</View>
						<View style={styles.details}>
							<Text style={styles.title}>{props.title}</Text>
							<Text style={styles.price}>${props.price.toFixed(2)}</Text>
						</View>
						<View style={styles.actions}>{props.children}</View>
					</View>
				</TouchableComponent>
			</View>
		</Card>
	);
};

const styles = StyleSheet.create({
	product: {
		height: 300,
		margin: 20,
	},
	touchable: {
		overflow: "hidden",
		borderRadius: 10,
	},
	imageContainer: {
		height: "60%",
		width: "100%",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		overflow: "hidden",
	},

	image: {
		height: "100%",
		width: "100%",
	},
	details: {
		alignItems: "center",
		height: "17%",
		padding: 10,
	},
	title: {
		fontSize: 18,
		marginVertical: 2,
		fontFamily: "open-sans-bold",
	},
	price: {
		fontSize: 14,
		color: "#888",
		fontFamily: "open-sans-bold",
	},
	actions: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: "23%",
		paddingHorizontal: 20,
	},
});

export default ProductItem;
