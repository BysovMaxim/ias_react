export default function Breadcrumbs() {
    return (
        <div className="breadcrumbs">
            <div className="breadcrumbs_nav">
                <h4 className="breadcrumbs_current">ДСКЦ/Twitters</h4>
                <ul className="breadcrumbs_list">
                    <li className="breadcrumbs_item">Главная</li>
                    <li className="breadcrumbs_item">Ленты документов</li>
                    <li className="breadcrumbs_item">ДСКЦ/Twitters</li>
                </ul>
            </div>
            <button className="btn_edit">Редактировать</button>
        </div>
    )
}

