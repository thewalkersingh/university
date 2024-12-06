import React, {useState} from 'react';
import axios from 'axios';

const SearchPage = () => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('India');
    const [limit, setLimit] = useState('');
    const [results, setResults] = useState([]);
    
    const handleSearch = async () => {
        const params = {
            name: name,
            country: country,
            limit: limit
        };
        const response = await axios.get('http://localhost:8080/university/search', {params});
        setResults(response.data);
    };
    
    const addToFavorites = async (university) => {
        university.favourite = !university.favourite;
        await axios.put('http://localhost:8080/university/update', university);
        setResults(results.map(u => u.id === university.id ? university : u));
    };
    
    return (
        <div>
            <h1>Search for Universities</h1>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Limit"
                    value={limit}
                    onChange={(e) => setLimit(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <table>
                <thead>
                <tr style={{alignContent:"space-around"}}>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Web_Page</th>
                    <th>Favorite</th>
                </tr>
                </thead>
                <tbody>
                {results.map((university) => (
                    <tr key={university.id}>
                        <td>{university.name}</td>
                        <td>{university.country}</td>
                        <td>
                            <a href={university.web_page} target="_blank" rel="noopener noreferrer">
                                {university.web_page}
                            </a>
                        </td>
                        <td>
                            <button onClick={() => addToFavorites(university)}>Favorite</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchPage;