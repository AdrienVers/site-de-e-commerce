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
                <Route path="/engagements" element={<Engagements />} />
                <Route path="/opinions" element={<Opinions />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/takeaway" element={<TakeAwayBasket />} />
                {/* <Route
                    path="/takeaway/takeawayinfo"
                    element={<TakeAwayInfo />}
                /> */}
                <Route path="/account" element={<Account />} />
                <Route path="/private" element={<Private />}>
                    <Route
                        path="/private/private-home"
                        element={<PrivateHome />}
                    />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
