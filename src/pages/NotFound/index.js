import Footer from "../../components/Footer";
import Header from "../../components/Header";
import iconNotFound from '../../Images/404.png';
import './style.css';

function NotFound() {
    return (
        <div id="app">
            <Header />

            <div>
                <img className="icon-not-found" src={iconNotFound} alt="e404"/>
            </div>

            <Footer />
        </div>
    )
}

export default NotFound;