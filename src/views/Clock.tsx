import {StyleSheet, Text, View} from "react-native";
import dayjs from "dayjs";
import React, {FC, useEffect, useState} from "react";
import {scaleText} from "../utils/FontAdaptor";



const Clock:FC<{
	format: string,
	isHorizon: boolean
}> = ({children, format, isHorizon}) => {
	
	const getTime = (f: string) => {
		return dayjs().format(f);
	};

	const [time, setTime] = useState(getTime(format));
	
	const runTime = () => {
		const tmp = getTime(format);
		if(tmp !== time) {
			setTime(tmp);
		}
	};
	
	useEffect(() => {
		const timer = setInterval(runTime, 400);
		return () => clearInterval(timer);
	});
	
	return (
		<View style={clockStyles.clockContainer}>
			<Text style={{
				color: 'white',
				fontWeight: 'bold',
				textAlign: 'center',
				fontSize: isHorizon? scaleText(150): scaleText(80)
			}}>{time}</Text>
			{children}
		</View>
	)
};

const clockStyles = StyleSheet.create({
	clockContainer: {
		justifyContent: 'center',
		alignContent: 'center',
		flex: 1
	},
})


export default Clock;