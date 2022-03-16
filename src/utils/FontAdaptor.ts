import {PixelRatio, useWindowDimensions} from "react-native";


const windowWidth = useWindowDimensions().width;
const windowHeight = useWindowDimensions().height;
let fontScale = PixelRatio.getFontScale();
let pixelRatio = PixelRatio.get();

const defaultPixel = 2.75;
const defaultWidth = 392;
const defaultHeight = 782;
let defaultProportion = defaultWidth * defaultPixel;

const scale =windowWidth * pixelRatio;


export function scaleText(size: number) {
	let defaultPixelSize = size * defaultPixel / defaultProportion;
	return Math.round((defaultPixelSize * scale) / (fontScale * pixelRatio));
}

export function scaleSize(size: number){
	size = Math.round((size * scale +0.5));
	return size / defaultPixel;
}
