import icon1 from './img/icon1.svg'
import icon2 from './img/icon2.svg'
import icon3 from './img/icon3.svg'
import icon4 from './img/icon4.svg'
import avatar from './img/Avatar.png'
export default function Header() {
    return (
        <header className="header">
            <li><a href="#"><img src={icon1}/></a></li>
            <li><a href="#"><img src={icon2}/></a></li>
            <li><a href="#"><img src={icon3}/></a></li>
            <li><a href="#"><img src={icon4}/></a></li>
            <li><a href="#"><img src={avatar}/></a></li>
        </header>
    )
}