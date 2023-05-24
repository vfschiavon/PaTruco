import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, Image, View } from 'react-native'


function Button({ image, text, func, style }) {
	if (image) {
		return (
			<TouchableOpacity onPress={func}>
				<Image source={image} resizeMode='stretch' style={style}/>
				<View style={{position: 'absolute', justifyContent: 'center', top: 0, bottom: 0, left: 0, right: 0}}>
					<Text style={styles.text}>+{text}</Text>
				</View>
			</TouchableOpacity>
		)
	} else {
		return (
			<TouchableHighlight style={style} onPress={func}>
				<Text style={styles.text}>{text}</Text>
			</TouchableHighlight>
		)
	}
}


const styles = StyleSheet.create({
	text: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
	}
})


export default Button
