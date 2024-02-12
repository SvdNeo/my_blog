import React from 'react'

export const Public = (abc) => {
    console.log(abc)
    const publicArticles = abc.pubArt;
    // abc => {pubArt:publicArticles,name:"Public Article Component"}
    const add = (is_public) => {
        abc.addPubArt(is_public);
    }
    return (
        <>
            {publicArticles.map(article => <div key={article.id}>{article.name}</div>)}
            <div onClick={() => add(true)}>Add Public</div>
        </>
    )
}