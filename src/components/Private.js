import React from 'react'

export const Private = (test) => {
    console.log(test)

    const privateArticles = test.privArt;
    // test => { privArt: privateArticles , name:"Private Article Component"}
    const add = (is_public) => {
       test.addPrivArt(is_public);
    }
    return (
        <>
            {privateArticles.map(article => <div key={article.id}>{article.name}</div>)}

            <div onClick={() => add(false)}>Add Private</div>
        </>
    )
}