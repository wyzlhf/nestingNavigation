import React, { Component } from 'react';
import {
	Button,
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class One extends Component{
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.font} onPress={() => this.props.navigation.navigate('Onedetail')}>
					第一屏
				</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#bb0000',
	},
	font: {
		fontSize: 68,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff',
	},
});

