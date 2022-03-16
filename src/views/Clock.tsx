import {StyleSheet, Text, View} from "react-native";
import dayjs from "dayjs";
import React, {useEffect, useState} from "react";


const Clock:React.FC<{
	format: string
}> = ({children, format}) => {
	const getTime = (format: string) => {
		return dayjs().format(format);
	};
	let [time, setTime] = useState(getTime(format));
	const runTime = () => {
		let tmp = getTime(format);
		if(tmp !== time){
			setTime(tmp);
		}
	};
	
	useEffect(() => {
		let timer = setInterval(runTime, 400);
		return () => {
			clearInterval(timer);
		}
	});
	
	return (
		<View style={clockStyles.clockContainer}>
			<Text style={clockStyles.clockText}>{time}</Text>
			{children}
		</View>
	)
};

const clockStyles = StyleSheet.create({
	clockContainer: {
		justifyContent: 'center',
		flex: 1,
	},
	clockText: {
		fontSize: 85,
		color: 'white',
		fontWeight: "600",
		textAlign: 'center',
	}
})


export default Clock;