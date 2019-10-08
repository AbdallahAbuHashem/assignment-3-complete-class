import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics } from '../Themes'

export default class NavigationButtons extends Component {

  state = {

  }

  _changeCategory = (index, newCategory) => {
    this.props.onChange(index, newCategory)
  }

  render () {

    //https://developer.nytimes.com/most_popular_api_v2.json#/Documentation/GET/mostemailed/%7Bsection%7D/%7Btime-period%7D.json
    return (
      <View style={styles.container}>

        <FontAwesome style={styles.icon}
          name="car"
          size={Metrics.icons.medium}
          color={this.props.colors[0]}
          onPress={() => this._changeCategory(0, 'travel')} />

        <FontAwesome style={styles.icon}
          name="book"
          size={Metrics.icons.medium}
          color={this.props.colors[1]}
          onPress={() => this._changeCategory(1, 'books')} />

        <FontAwesome style={styles.icon}
          name="heartbeat"
          size={Metrics.icons.medium}
          color={this.props.colors[2]}
          onPress={() => this._changeCategory(2, 'health')} />

        <FontAwesome style={styles.icon}
          name="film"
          size={Metrics.icons.medium}
          color={this.props.colors[3]}
          onPress={() => this._changeCategory(3, 'theater')} />

        <FontAwesome style={styles.icon}
          name="laptop"
          size={Metrics.icons.medium}
          color={this.props.colors[4]}
          onPress={() => this._changeCategory(4, 'technology')} />

        <FontAwesome style={styles.icon}
          name="globe"
          size={Metrics.icons.medium}
          color={this.props.colors[5]}
          onPress={() => this._changeCategory(5, 'world')} />

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
