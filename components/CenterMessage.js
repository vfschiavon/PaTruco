import React from 'react'
import { Text, View, StyleSheet } from 'react-native'


const CenterMessage = ({ message }) => (
	<View>
		<Text style={styles.message}>
			{message}
		</Text>
	</View>
)


const styles = StyleSheet.create({
	message: {
		alignSelf: 'center',
		fontSize: 30,
		color: 'black'
	},
})


export default CenterMessage
