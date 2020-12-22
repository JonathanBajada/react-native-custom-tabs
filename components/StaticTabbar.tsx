import * as React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { TabData } from './TabData';
import TabIcon from './TabIcon';

export default class StaticTabbar extends React.PureComponent<any> {
	render() {
		return (
			<View style={styles.container}>
				{TabData.map((TabData, index) => (
					<TouchableWithoutFeedback>
						<View style={styles.tab}>
							{TabData.name === 'Add' ? (
								<TabIcon iconStyle={styles.addIcon} url={TabData.link} title={TabData.title} />
							) : (
								<TabIcon iconStyle={styles.logo} url={TabData.link} title={TabData.title} />
							)}
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
	logo: {
		marginTop: 90,
		height: 24,
		width: 24
	},
	addIcon: {
		marginTop: 28,
		height: 70,
		width: 70
	}
});
