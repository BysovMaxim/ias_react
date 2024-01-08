export default function News(props) {
    const { title, published_date, upload_date, author, trust_level, source, platform, cover, tags, text} = props.news
    return (
        <div className="news">
            {Object.keys(props.news) === 0 ? <div>Empty!</div> :
                <div>
                    <button className="news_collapse">^</button>
            <input type="checkbox" />
            <div className="news_body">
                <h5 className="news_title">{title}</h5>
                <div className="news_info">
                    <span>Дата публикации: {published_date}</span>
                    <span>Дата загрузки: {upload_date}</span>
                    <span>Автор: {author}</span>
                    <span>Уровень доверия: {trust_level}</span>
                    <span>Источник: {source}</span>
                    <span>Платформа: {platform}</span>
                </div>

                {tags.map((tag,index) => 
                    <span key={index} >{tag} </span>
                )}
                <p>{text}</p>
                {cover !== null ?
                    <div><img src={cover} alt="cover" /></div> : <div></div>
                }

                <div className="news_setup">
                        <button>Из избранного</button>
                        <button>В корзину</button>
                        <button>Текст оригинала</button>
                        <button>Перевести</button>
                        <button>!!!</button>
                </div>
            </div>
            <div className="discussion"></div>
                </div>
            }
            
        </div>
    )
}