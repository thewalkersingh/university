import React, {useEffect, useState} from 'react';
import axios from 'axios';

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState([]);
    
    useEffect(() => {
        const fetchFavorites = async () => {
            const response = await axios.get('http://localhost:8080/university/favorites/all');
            setFavorites(response.data);
        };
        
        fetchFavorites();
    }, []);
    
    return (
        <div>
            <h1>Favorite Universities</h1>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Web_Page</th>
                </tr>
                </thead>
                <tbody>
                {favorites.map((university) => (
                    <tr key={university.id}>
                        <td>{university.name}</td>
                        <td>{university.country}</td>
                        <td>
                            <a href={university.web_page} target="_blank" rel="noopener noreferrer">
                                {university.web_page}
                            </a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default FavoritesPage;