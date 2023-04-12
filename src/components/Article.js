import React from "react";

function Article(post) {
    const {title, date = "January 1, 1970" , preview, minutes} = post

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            {/* <span>{displayMinutes}</span> */}
            <p>{preview}</p>
        </article>
    )
}
export default Article;
