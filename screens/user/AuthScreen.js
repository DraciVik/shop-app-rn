import React from "react";
import {
	ScrollView,
	StyleSheet,
	View,
	KeyboardAvoidingView,
	Text,
	Button,
} from "react-native";
import Input from "../../components/UI/Input";
import Card from "../../components/UI/Card";
import Colors from "../../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

const AuthScreen = (props) => {
	return (
		<KeyboardAvoidingView
			behavior="height"
			keyboardVerticalOffset={50}
			style={styles.screen}
		>
			<LinearGradient colors={["#ffedff", "#ffe3ff"]} style={styles.gradient}>
				<Card style={styles.authContainer}>
					<ScrollView>
						<Input
							id="email"
							label="E-Mail"
							keyboardType="email-address"
							required
							email
							autoCapitalize="none"
							errorMessage="Please Enter a valid email address"
							onInputChange={() => {}}
							initialValue=""
						/>
						<Input
							id="password"
							label="Password"
							keyboardType="default"
							secureTextEntry
							required
							minLength={5}
							autoCapitalize="none"
							errorMessage="Please Enter a valid password address"
							onInputChange={() => {}}
							initialValue=""
						/>
						<View style={styles.buttonContainer}>
							<Button title="Login" color={Colors.primary} />
						</View>
						<View style={styles.buttonContainer}>
							<Button title="Switch to Sign Up" color={Colors.accent} />
						</View>
					</ScrollView>
				</Card>
			</LinearGradient>
		</KeyboardAvoidingView>
	);
	// TODO FIX NAVIGATION
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
	authContainer: {
		width: "80%",
		maxWidth: 400,
		maxHeight: 400,
		padding: 20,
	},
	gradient: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonContainer: {
		marginTop: 10,
	},
});

export default AuthScreen;
