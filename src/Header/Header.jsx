import reactImg from '../assets/react-core-concepts.png';
import './Header.css'
function Header() {
    return (<header class="headerContent">
        <img src={reactImg} alt="Stylized atom"  class="image"/>
        <h1 >React Essentials</h1>
        <p>
        Crucial React concepts you will need for almost any app you are
            going to build!
        </p>
    </header>)
}

export default Header;