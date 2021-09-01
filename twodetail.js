import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class Twodetail extends Component{
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.font}>
					此处是第二屏详情页
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
		backgroundColor: '#826858',
	},
	font: {
		fontSize: 68,
		textAlign: 'center',
		margin: 10,
		color: '#ffffff',
	},
});

