import NewsItem from "./NewsItem.js"
import React, { useEffect, useState } from 'react';
export default function NewsBoard() {
    const [articles,setArticles] = useState([]);
    useEffect(()=>{
      let url= `https://newsapi.org/v2/top-headlines?country=us&apiKey=ac41b91592974f8ca90d90fca0e95bf9`;
      fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
    })

  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        {articles.map((news,index)=>{
          return <NewsItem key={index} title={news.title} description={news.description} />
        })}
    </div>
  )
}
