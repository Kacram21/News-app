import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NewsItem from './NewsItem'

const NewsList = () => {
    const [articles, setArticles] = useState([])

    useEffect(() =>{

      const getArticles = async () =>{
       
        const response = await axios.get('https://newsapi.org/v2/everything?q=football&apiKey=27ae7ae0af8949d6a058a2e579f25824');
        console.log(response)
        setArticles(response.data.articles)
      
      }
    
      getArticles()

     }, []) 
     return (
    <div>
      {articles.map(articles => {
return (
  <NewsItem
  title={articles.title}
  description={articles.description}
  url={ articles.urlToImage}
  urlToImage={ articles.urlToImage }

  />
)

})}
      
      </div>
  )
}

export default NewsList