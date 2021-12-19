import React from "react";
import { useEffect, useState } from "react";
import { getNews } from "../service/api";
import ArticleCard from "./ArticleCard";
import InfiniteScroll from 'react-infinite-scroll-component';

const Articles = () => {

    const [news, setNews] = useState([]);
    
    const [page,setPage] = useState(0);
  
    useEffect(() => {
        const dailyNews = async () => {
            const response = await getNews(page);
            console.log(new Set([...news, ...response.data]));
            setNews([...new Set([...news, ...response.data])]);
        }
        dailyNews();
    }, [page])

    useEffect(() => {
        console.log(news);
    }, [news])

    return(
        <>
            <InfiniteScroll
                dataLength={news.length}
                next={() => setPage(page => page + 1)}
                hasMore={true}
            >
                {news?.length > 0 && news.map((article,index) => (
                    <div key={index} >
                    <ArticleCard article={article} />
                    </div>
                ))}
            </InfiniteScroll>
        </>

        )
}

export default Articles;