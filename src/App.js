
import './App.css';
import { useEffect, useState } from "react";
import { Public } from './components/Public';
import { Private } from './components/Private';
function App() {

  const [articles, setArticles] = useState([{ name: "Java", id: 1, is_public: true }, { name: "Javascript", id: 2, is_public: false }]);

  const add = (is_public) => {
    setArticles([...articles, { name: `Article ${articles.length}`, id: articles.length, is_public: is_public }])
  }
  const [publicArticles, setPublicArticles] = useState([])
  const [privateArticles, setPrivateArticles] = useState([])

  useEffect(() => {

    setPublicArticles(articles.filter(article => article.is_public == true));
    setPrivateArticles(articles.filter(article => article.is_public == false));
    console.log(articles)
  }, [articles]);
  return (
    <div className="App">
      <header className="header">
        Header
      </header>
      <main className="main">
        <nav className="nav">Nav</nav>
        <div className="content">
          <div className="public">
            <div>Public Articles</div>
            <Public pubArt={publicArticles} name="Public Article Component" addPubArt = {add} />
          </div>
          <div className="private">
            <div>Private Articles</div>
            <Private privArt={privateArticles} name="Private Article Component" addPrivArt = {add} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
