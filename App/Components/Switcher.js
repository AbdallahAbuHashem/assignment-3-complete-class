import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes'

export default class Switcher extends Component {

  state = {

  }

  render () {

    return (
      <View style={styles.container}>

        <FontAwesome style={styles.icon}
          name="car"
          size={Metrics.icons.medium}
          color={Colors.ember} />

        <FontAwesome style={styles.icon}
          name="book"
          size={Metrics.icons.medium}
          color={Colors.ember} />

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: Metrics.icons.medium,
    paddingLeft: Metrics.doubleBaseMargin,
    paddingRight: Metrics.doubleBaseMargin,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  icon: {
    padding: Metrics.marginHorizontal,

  }
});
