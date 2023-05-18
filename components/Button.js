import { StyleSheet, Text, TouchableHighlight, Image, View } from 'react-native';


function Button({ type, text, func }) {
	if (type == 'sub') {
		return (
			<TouchableHighlight style={styles.buttonSub} onPress={func}>
				<Text style={styles.text}>{text}</Text>
			</TouchableHighlight>
		);
	} else if (type == 'add') {
		return (
			<TouchableHighlight style={styles.buttonAdd} onPress={func}>
				<Text style={styles.text}>{text}</Text>
			</TouchableHighlight>
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
		borderRadius: 100,
		width: 20,
		height: 20,
		margin: 10,
		textAlign: 'center',
		justifyContent: 'center',
	},
	buttonAdd: {
		backgroundColor: 'green',
		borderRadius: 50,
		width: 50,
		height: 50,
		margin: 10,
		textAlign: 'center',
		justifyContent: 'center',
	},
	buttonCall: {
		backgroundColor: 'blue',
		width: 400,
		height: 50,
		margin: 10,
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
		color: 'black',
		fontSize: 20,
	}
})


export default Button
