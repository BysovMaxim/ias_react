export default function Filter() {
    return (
        <div className="filter_wrap">
            <div className="filter_header">
                <h5>Фильтр</h5>
                <button>x</button>
            </div>
            <div className="filter_search_buy">
                <p className="search_buy_title">искать по:</p>
                <div>
                    <input type="radio" id="approved_docs" />
                    <label htmlFor="approved_docs">подтверждённым документам</label>
                </div>
                <div>
                    <input type="radio" id="all_docs" />
                    <label htmlFor="all_docs">всем документам</label>
                </div>
            </div>
            <div className="filter_main_parameters">
                <p className="main_parameters_title">основные параметры</p>
                <p>Вид</p>
                <p>Тип</p>
            </div>
            <div className="filter_characteristics">
                <p className="characteristics_title">характеристики</p>
                <div className="characteristics_location">
                    <p className="location_title">Локация</p>
                    <div>
                        <label htmlFor="string">Строка</label>
                        <input type="text" id="string" placeholder="Введите значение"/>
                    </div>
                    <div>
                        <label htmlFor="link">Ссылка</label>
                        <input type="text" id="link" placeholder="http://"/>
                    </div>
                    <div>
                        <label htmlFor="date">Дата</label>
                    </div>
                </div>
            </div>
        </div>
    )
}