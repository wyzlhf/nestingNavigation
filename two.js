import React, { Component } from 'react';
import {
	Button,
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class Two extends Component{
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.font} onPress={() => this.props.navigation.navigate('Twodetail')}>
					第二屏
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
		backgroundColor: '#444693',
	},
	font: {
		fontSize: 68,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff',
	},
});

