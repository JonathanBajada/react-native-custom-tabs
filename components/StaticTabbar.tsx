import * as React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { TabData } from './TabIcons';

interface Tab {
	images: {
		name: string;
		title: string;
	};
}

interface StaticTabbarProps {
	tabs: Tab[];
}

export default class StaticTabbar extends React.PureComponent<StaticTabbarProps> {
	render() {
		const { tabs } = this.props;
		return (
			<View style={styles.container}>
				{tabs.map((tabs, index) => (
					<TouchableWithoutFeedback>
						<View style={styles.tab}>
							<Image style={styles.logo} source={require('../images/Clients.png')} />
						</View>
					</TouchableWithoutFeedback>
				))}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row'
	},
	tab: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {}
});
