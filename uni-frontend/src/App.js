import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import SearchPage from './SearchPage';
import FavoritesPage from './FavoritesPage';
import AddUniversityPage from './AddUniversityPage';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Search</Link>
                        </li>
                        <li>
                            <Link to="/favorites">Favorites</Link>
                        </li>
                        <li>
                            <Link to="/add-university">Add University</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<SearchPage/>}/>
                    <Route path="/favorites" element={<FavoritesPage/>}/>
                    <Route path="/add-university" element={<AddUniversityPage/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;