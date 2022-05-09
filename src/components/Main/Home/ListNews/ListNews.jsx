import React, { Component } from "react";
import axios from "axios";
import Cards from './Cards';

class ListNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListNews: this.props.List,
      // News: this.props.List
    }

  }
  async componentDidMount(){
    // const APIKEY = process.env.REACT_APP_API_KEY;
    const resp = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=DB81RCd7mBPnCwvNINC9wPiRLfWwnWS5`);
    const data = await resp.data.response.docs.slice(0, 8);
    const requireData = data.map(article => {
      const img = `https://static01.nyt.com/${article.multimedia[0].url}`
      return {
          title: article.headline.main,
          info: article.abstract,
          author: article.byline.original,
          source: article.source,
          image: img,
          url: article.web_url
      }
    })
    
    this.setState({ ListNews: [...requireData, ...this.state.ListNews] });//spread operator

  }

  render() {
    return <section className="listNews">
      <h1>Lastes News</h1>
      <div className="cardlist">
        { this.state.ListNews.map((News, i) => <Cards value={News} key={i} />)}
      </div>
    </section>;
  }
}
ListNews.defaultProps = {
  defaultList: [],
};

export default ListNews;
