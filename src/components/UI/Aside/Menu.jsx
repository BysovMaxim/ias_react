import analytics from './img/analytics.svg'
import documents from './img/documents.svg'
import forms from './img/forms.svg'
import knowledge_base from './img/knowledge_base.svg'
import logo from './img/logo.svg'
import main_board from './img/main_board.svg'
import reports from './img/reports.svg'

export default function Menu() {
    return (
        <aside>
            <nav className="nav">
                <li className="minusGap"><a href="#"><img className="logo" src={logo} alt="logo" /><span className="logo_text">меню</span></a></li>
                <li><a href="#"><img src={main_board} alt="main_board" /><span>Главная</span></a></li>
                <li><a href="#"><img src={documents} alt="documents" /><span>Ленты документов</span></a></li>
                <li><a href="#"><img src={knowledge_base} alt="knowledge_base" /><span>База знаний</span></a></li>
                <li><a href="#"><img src={forms} alt="forms" /><span>Формы сбора</span></a></li>
                <li><a href="#"><img src={reports} alt="reports" /><span>Отчёты</span></a></li>
                <li><a href="#"><img src={analytics} alt="analytics" /><span>Аналитика</span></a></li>
            </nav>
        </aside>
        
    )
}