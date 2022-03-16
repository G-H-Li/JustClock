import {StyleSheet, Text, View} from "react-native";
import dayjs from "dayjs";
import React, {useEffect, useState} from "react";
import {scaleText} from "../utils/FontAdaptor";



const Clock:React.FC<{
	format: string,
	isHorizon: boolean
}> = ({children, format, isHorizon}) => {
	
	const [time, setTime] = useState("");
	
	function runTime() {
		let tmp = dayjs().format(format);
		if(tmp !== time){
			setTime(tmp);
		}
	}
	
	
	useEffect(() => {
		const timer = setInterval(runTime, 400);
		return () => clearInterval(timer);
	}, [time]);
	
	let fontSize= isHorizon? scaleText(150): scaleText(80);
	return (
		<View style={clockStyles.clockContainer}>
			<Text style={{
				color: 'white',
				fontWeight: 'bold',
				textAlign: 'center',
				fontSize: fontSize
			}}>{time}</Text>
			{children}
		</View>
	)
};

const clockStyles = StyleSheet.create({
	clockContainer: {
		justifyContent: 'center',
		alignContent: 'center',
		flex: 1,
	},
})


export default Clock;