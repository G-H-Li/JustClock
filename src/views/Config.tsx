/**
 * Author：GH-Li
 * 时钟设置界面
 */
import React from "react";
import {ScrollView, StyleSheet, Text} from "react-native";
import ConfigItem from "../components/config/Item"

const Config = () => {
	return (
		<ScrollView style={configStyles.configContainer}>
			<Text style={configStyles.configText}>设置</Text>
			<ConfigItem label={'时钟文字颜色'}/>
			<ConfigItem label={'时钟背景颜色'}/>
			<ConfigItem label={'时钟小时制'}/>
		</ScrollView>
	)
};

const configStyles = StyleSheet.create({
	configText: {
		textAlign: 'left',
		marginBottom: 10,
		fontSize: 30,
		color: 'white'
	},
	configContainer: {
		margin: 15,
	}
})

export default Config;