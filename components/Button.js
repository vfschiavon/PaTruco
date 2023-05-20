import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, Image, View } from 'react-native';


function Button({ type, text, func }) {
	if (type == 'sub') {
		return (
			<TouchableHighlight style={styles.buttonSub} onPress={func}>
				<Text style={styles.text}>{text}</Text>
			</TouchableHighlight>
		);
	} else if (type == 'add') {
		return (
			<TouchableOpacity onPress={func}>
				<Image source={require('../assets/duck/duck-paw-fingers.png')} resizeMode='stretch' style={styles.buttonAdd}/>
				<View style={{position: 'absolute', justifyContent: 'center', top: 0, bottom: 0, left: 0, right: 0}}>
					<Text style={styles.text}>+{text}</Text>
				</View>
			</TouchableOpacity>
		);
	} else if (type == 'call') {
		return (
			<TouchableHighlight style={styles.buttonCall} onPress={func}>
				<Text style={styles.text}>{text}</Text>
			</TouchableHighlight>
		);
	} else if (type == 'reset') {
		return (
			<TouchableHighlight style={styles.buttonReset} onPress={func}>
				<Text style={styles.text}>{text}</Text>
			</TouchableHighlight>
		);
	}
}


const styles = StyleSheet.create({
	buttonSub: {
		backgroundColor: '#ff4d4d',
		borderRadius: 50,
		width: 25,
		height: 25,
		justifyContent: 'center',
	},
	buttonAdd: {
		borderRadius: 15,
		width: 120,
		height: 120,
		margin: 20,
	},
	buttonCall: {
		backgroundColor: '#205375',
		width: 400,
		height: 70,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	buttonReset: {
		backgroundColor: '#efefef',
		width: 200,
		height: 20,
		margin: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	text: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
	}
})


export default Button
