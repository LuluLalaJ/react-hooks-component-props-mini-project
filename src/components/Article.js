import React from "react";

function Article(post) {
    const {title, date = "January 1, 1970" , preview, minutes} = post
    
    function createEmojis(minutes) {
        const interval = minutes < 30 ? 5 : 10
        const emoji = minutes < 30 ? "☕️" : "🍱"

        let emojis = ""
        for ( let i = 0; i < minutes; i += interval) {
            emojis += emoji
        } 
        return emojis 
    }

    const displayEmojis = createEmojis(minutes)

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <span> | {displayEmojis} {minutes} minutes read</span>
            <p>{preview}</p>
        </article>
    )
}
export default Article;
