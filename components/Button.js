import { Text, TouchableHighlight, TouchableOpacity, Image, View } from 'react-native';


const Button = ({ image, text, func, style, styleText }) => {
	if (image) {
		return (
			<TouchableOpacity onPress={func}>
				<Image source={image} resizeMode='contain' style={style}/>
				<View style={{ position: 'absolute', justifyContent: 'center', top: 15, bottom: 0, left: 0, right: 0 }}>
					<Text style={styleText}>+{text}</Text>
				</View>
			</TouchableOpacity>
		)
	} else {
		return (
			<TouchableHighlight style={style} onPress={func}>
				<Text style={styleText}>{text}</Text>
			</TouchableHighlight>
		)
	}
}


export default Button
