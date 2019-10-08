import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, SafeAreaView, View, TouchableOpacity, FlatList, Text, Linking } from 'react-native'
import { material } from 'react-native-typography'
import { Metrics, Colors } from '../Themes'


export default class News extends Component {
  static defaultProps = { articles: [] }

  static propTypes = {
    articles: PropTypes.array
  }

  state = {
    refreshing: false
  }

  _extractKey = (item, index) => index

  _onPressItem = (item) => {
    let url = item.web_url;
    if(url === undefined) {
      url = item.url;
    }
    console.log(url);
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URL: " + url);
      }
    });
  }

  _renderItem = ({item}) => {

    {/*let mediaContent = null;
    if (item.multimedia[0] && item.multimedia[0].url) {
      mediaContent = <Text>{item.multimedia[0].url}</Text>
    }*/}

    return (
      <TouchableOpacity style={styles.listRow} onPress={() => this._onPressItem(item)}>
        <View>
          <Text style={material.headline}>{item.title}</Text>
          <Text style={material.body1}>{item.snippet}</Text>
           <Text style={material.body2}>{item.byline}</Text>
          <Text style={material.caption}>{item.date}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  resetList = async () => {
    this.setState({refreshing: true});
    await this.props.resetList();
    this.setState({refreshing: false});
  }

  render () {
    const {articles} = this.props;

    return (
      <FlatList
        style={styles.listContainer}
        data={articles}
        renderItem={this._renderItem}
        keyExtractor={this._extractKey}
        onRefresh={this.resetList}
        refreshing={this.state.refreshing}
      />
    );
  }
}


const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingLeft: Metrics.doubleBaseMargin,
    paddingRight: Metrics.doubleBaseMargin,
  },
  listRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    paddingTop: 10,
    paddingBottom: 10,
  },
  thumbnail: {

  },
});
