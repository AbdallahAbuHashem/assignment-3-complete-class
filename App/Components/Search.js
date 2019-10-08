import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, Button, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes'


export default class Search extends Component {
  static defaultProps = { inputPlaceholder: '', searchAction: (queryString) => {} }

  static propTypes = {
    inputPlaceholder: PropTypes.string,
    searchAction: PropTypes.func,
  }

  _search = () => {
    if(this.props.textValue) {
      this.props.searchAction(this.props.textValue);
    } else {
      console.warn("Empty string!");
    }
  }

  render () {
    const {inputPlaceholder} = this.props;

    return (
      <View style={styles.searchContainer}>

        <TextInput
          style={styles.searchInput}
          placeholder={inputPlaceholder}
          onChangeText={(text) => this.props.textChange(text)}
          value={this.props.textValue}
        />

        <TouchableOpacity style={styles.icon}
          onPress={this._search}>

          <FontAwesome
            name="search"
            size={Metrics.icons.small}
            color={Colors.ember} />

        </TouchableOpacity>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Metrics.doubleSection,
    marginTop: Metrics.marginHorizontal,
    marginLeft: Metrics.doubleBaseMargin,
    marginRight: Metrics.doubleBaseMargin,
    marginBottom: Metrics.marginHorizontal,
    paddingLeft: Metrics.marginHorizontal + 5,
    paddingRight: Metrics.marginHorizontal,
    backgroundColor: Colors.silver,
    borderRadius: 15
  },
  searchInput: {
    flex: 1,
  },
  icon: {
    paddingLeft: Metrics.marginHorizontal,
    paddingRight: Metrics.marginHorizontal
  }
});
