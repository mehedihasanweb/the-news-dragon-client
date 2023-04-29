import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/newsCard/NewsCard';

const Category = () => {
    const { id } = useParams()

    const categoryNews = useLoaderData()

    return (
        <div>
            { id && <h2>This is category: {id}</h2>}
            {/* <h2>This is categoryNews: {categoryNews.length}</h2> */}
            {
                categoryNews.map(news => <NewsCard
                key={news._id}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;
