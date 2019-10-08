// Simple React Native specific changes

import AppConfig from './AppConfig'
const queryString = require('query-string'); //Importing JavaScript library

const APIRequest = {
  requestSearchPosts: async (searchTerm) => {
    try {
      let parameters = {'api-key': AppConfig.apiKey};
      if (searchTerm) {
        parameters.q = searchTerm
      }
      parameters = queryString.stringify(parameters);
      console.log('Searching using parameters: ' + parameters);

      let response = await fetch(AppConfig.articleSearch + '?' + parameters);
      let responseJson = await response.json();
      let articles = responseJson.response.docs;
      var result = [];
      for(var i = 0; i < articles.length; i++) {
        if(!articles[i].byline) continue;
        var newsObject = {
          title: articles[i].headline.main,
          snippet: articles[i].snippet,
          byline: articles[i].byline.original,
          date: articles[i].pub_date,
        }
        result.push(newsObject);
      }

      return result;
    } catch (error) {
      console.error(error);
    }
  },

  requestCategoryPosts: async(category) => {
    try {
      let parameters = {'api-key': AppConfig.apiKey};
      parameters = queryString.stringify(parameters);
      console.log('Searching using parameters: ' + parameters);

      let response = await fetch(AppConfig.topStories + category + '.json?' + parameters);
      // console.log(response);
      let responseJson = await response.json();
      let articles = responseJson.results;
      var result = [];
      for(var i = 0; i < articles.length; i++) {
        if(!articles[i].byline) continue;
        var newsObject = {
          title: articles[i].title,
          snippet: articles[i].abstract,
          byline: articles[i].byline,
          date: articles[i].published_date,
        }
        result.push(newsObject);
      }
      return result;
    } catch (error) {
      console.error(error);
    }
  },
}

export default APIRequest;
