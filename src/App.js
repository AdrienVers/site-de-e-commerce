import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dishes from './pages/Dishes';
import Engagements from './pages/Engagements';
import Opinions from './pages/Opinions';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';
import TakeAwayBasket from './pages/TakeAwayBasket';
import Account from './pages/Account';
import Private from './pages/Private/Private';
import PrivateHome from './pages/Private/PrivateHome';

/*
import useMediaQuery from './components/useMediaQuery';
*/

function App() {
    /*
    const phoneSize = useMediaQuery('(min-width: 650px)');
    const desktopSize = useMediaQuery('(min-width: 1200px)');
    */

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/site-de-e-commerce/" element={<Home />} />
                <Route path="/dishes" element={<Dishes />} />
                <Route
                    path="/site-de-e-commerce/engagements"
                    element={<Engagements />}
                />
                <Route
                    path="/site-de-e-commerce/opinions"
                    element={<Opinions />}
                />
                <Route
                    path="/site-de-e-commerce/contact"
                    element={<Contact />}
                />
                <Route
                    path="/site-de-e-commerce/reservation"
                    element={<Reservation />}
                />
                <Route
                    path="/site-de-e-commerce/takeaway"
                    element={<TakeAwayBasket />}
                />
                {/* <Route
                    path="/takeaway/takeawayinfo"
                    element={<TakeAwayInfo />}
                /> */}
                <Route
                    path="/site-de-e-commerce/account"
                    element={<Account />}
                />
                <Route path="/site-de-e-commerce/private" element={<Private />}>
                    <Route
                        path="/site-de-e-commerce/private/private-home"
                        element={<PrivateHome />}
                    />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
