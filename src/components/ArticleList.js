import React from "react";
import Article from "./Article";

function ArticleList({posts}) {

    const displayArticles = posts.map( post =>
            <Article 
                key={post.id}
                {...post}
            />)

    return (
        <main>
            {displayArticles}
        </main>
    )
}

export default ArticleList;
