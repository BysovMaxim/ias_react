import {useState} from 'react'
import basket_icon from './img/basket.svg'
import favorites_icon from './img/favorites.svg'
import list_svg_icon from './img/list.svg'
import filter_icon from './img/filter.svg'
import pencil_icon from './img/pencil.svg'
import diskette_icon from './img/diskette.svg'
import options_icon from './img/options.svg'
import reverse_icon from './img/reverse.svg'
import letters_icon from './img/letters.svg'
import preview_icon from './img/preview.png'
import News from '../News/News'

export default function Tabs() {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index) => {
        setToggleState(index)
    }
    const [news, setNews] = useState([
        {
            id: 1,
            title: 'Великобритания сделала дерзкое заявление в адрес России',
            published_date: '10.08.2023 13:30',
            upload_date: '11.08.2023 14:35',
            author: 'Алешкович Д.Е.',
            trust_level: 'Высокий',
            source: 'site.com',
            platform: 'Twitter',
            tags: ['ВСУ', 'российские военные', 'Daily Express', 'Соединённое Королество', 'Грант Шэппс', 'Украинские военкоры', 'Владимир Путин', 'Киев'],
            text: 'ВСУ могут использовать крылатые ракеты Storm Shadow против российских военных, сообщает британское издание Daily Express со ссылкой на слова главы Минобороны Соединенного Королевства Гранта Шаппса. «Украинские войска могут использовать ракеты Storm Shadow для нанесения ударов по войскам Владимира Путина на приобретенных территориях», — говорится в материале. Глава Минобороны Великобритании также потребовал сохранить поддержку Киеву, заявив, что российское руководство нарушило мир в Европе.',
            cover: preview_icon
        },
        {
            id: 2,
            title: 'Великобритания сделала дерзкое заявление в адрес России',
            published_date: '10.08.2023 13:30',
            upload_date: '11.08.2023 14:35',
            author: 'Алешкович Д.Е.',
            trust_level: 'Высокий',
            source: 'site.com',
            platform: 'Twitter',
            tags: ['ВСУ', 'российские военные', 'Daily Express', 'Соединённое Королество', 'Грант Шэппс', 'Украинские военкоры', 'Владимир Путин', 'Киев'],
            text: 'ВСУ могут использовать крылатые ракеты Storm Shadow против российских военных, сообщает британское издание Daily Express со ссылкой на слова главы Минобороны Соединенного Королевства Гранта Шаппса. «Украинские войска могут использовать ракеты Storm Shadow для нанесения ударов по войскам Владимира Путина на приобретенных территориях», — говорится в материале. Глава Минобороны Великобритании также потребовал сохранить поддержку Киеву, заявив, что российское руководство нарушило мир в Европе.',
            cover: null
        },
        {
            id: 3,
            title: 'Великобритания сделала дерзкое заявление в адрес России',
            published_date: '10.08.2023 13:30',
            upload_date: '11.08.2023 14:35',
            author: 'Алешкович Д.Е.',
            trust_level: 'Высокий',
            source: 'site.com',
            platform: 'Twitter',
            tags: ['ВСУ', 'российские военные', 'Daily Express', 'Соединённое Королество', 'Грант Шэппс', 'Украинские военкоры', 'Владимир Путин', 'Киев'],
            text: 'ВСУ могут использовать крылатые ракеты Storm Shadow против российских военных, сообщает британское издание Daily Express со ссылкой на слова главы Минобороны Соединенного Королевства Гранта Шаппса. «Украинские войска могут использовать ракеты Storm Shadow для нанесения ударов по войскам Владимира Путина на приобретенных территориях», — говорится в материале. Глава Минобороны Великобритании также потребовал сохранить поддержку Киеву, заявив, что российское руководство нарушило мир в Европе.',
            cover: preview_icon
        }
    ])
    const [favorites, setFavorites] = useState([])
    const [basket, setBasket] = useState([])
    return (
        <div>
            <ul className="tab_list">
                <li onClick={() => toggleTab(1)} className={toggleState === 1 ? "tabs active-tabs" : "tabs"}>
                    <img src={list_svg_icon} alt="list_svg" />
                    <span>Список</span>
                </li>
                <li onClick={() => toggleTab(2)} className={toggleState === 2 ? "tabs active-tabs" : "tabs"}>
                    <img src={favorites_icon} alt="favorites" />
                    <span>Избранное</span>
                </li>
                <li onClick={() => toggleTab(3)} className={toggleState === 3 ? "tabs active-tabs" : "tabs"}>
                    <img src={basket_icon} alt="basket" />
                    <span>Корзина</span>
                </li>
            </ul>
            <div className="search_panel">
                <button className="search_panel_filter">
                    <img src={filter_icon} alt="filter"></img>
                </button>
                <label className="search_panel_label_search">
                    <input className="search_panel_search" type="text" placeholder="Поиск"/>
                </label>
                <button className="search_panel_edit">
                    <img src={pencil_icon} alt="pencil" />
                </button>
                <button className="search_panel_save">
                    <img src={diskette_icon} alt="diskette" />
                </button>
                <button className="search_panel_options">
                    <img src={options_icon} alt="options" />
                </button>
                <button className="search_panel_sort">
                    <img src={letters_icon} alt="letters" />
                    Сортировать
                </button>
                <button className="search_panel_reverse">
                    <img src={reverse_icon} alt="reverse" />
                </button>
            </div>
            <div className="news_list">
                {
                    toggleState === 1 ? news.map(news =>
                        <News news={news} key={news.id} />
                    ) : toggleState === 2 ? favorites.map(favorites =>
                        <News favorites={favorites} key={favorites.id} />
                    ) : basket.map(basket =>
                        <News basket={basket} key={basket.id} />
                    )
                }
            </div>
        </div>
        
        
    )
}