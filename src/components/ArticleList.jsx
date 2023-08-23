import Article from "./Article"

function ArticleList({posts}) {
    const newArray = {posts}.map(postObj => {
        <Article 
            key = {postObj.id}
            title = {postObj.title}
            date = {postObj.date}
            preview = {postObj.preview}
            minutes = {postObj.minutes}
        />
    })
    
    return (
        <main>{newArray}</main>
    )
}

export default ArticleList