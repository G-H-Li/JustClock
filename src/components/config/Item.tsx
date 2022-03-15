import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";

const ConfigItem: React.FC<{
	label: string;
}> = ({children, label}) => {
	return(
		<View style={configItemStyles.itemContainer}>
			<Text style={configItemStyles.itemText}>{label}</Text>
			<View style={configItemStyles.itemChildren}>
				{children}
			</View>
		</View>
	)
};

const configItemStyles = StyleSheet.create({
	itemContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 5,
		height: 30,
		flex: 1,
		backgroundColor: Colors.darker
	},
	itemText: {
		fontSize: 18,
		fontWeight: '400',
		flex:7,
		textDecorationColor: Colors.lighter
	},
	itemChildren: {
		flex: 3
	}
});

export default ConfigItem;