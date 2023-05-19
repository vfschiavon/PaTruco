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
		backgroundColor: 'red',
		borderRadius: 50,
		width: 30,
		height: 30,
		marginTop: 100,
		textAlign: 'center',
		justifyContent: 'center',
	},
	buttonAdd: {
		borderColor: 'red',
		borderWidth: 1,
		borderRadius: 100,
		width: 120,
		height: 120,
		margin: 20,
	},
	buttonCall: {
		backgroundColor: 'blue',
		width: 400,
		height: 50,
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	buttonReset: {
		backgroundColor: 'yellow',
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
