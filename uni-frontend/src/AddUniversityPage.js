import React, {useState} from 'react';
import axios from 'axios';

const AddUniversityPage = () => {
    const [name, setName] = useState('');
    const [webPage, setWebPage] = useState('');
    const [country, setCountry] = useState('');
    const [domain, setDomain] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const university = {
            name,
            web_page: webPage,
            country,
            domain,
        };
        try {
            const response = await axios.post('http://localhost:8080/university/add', university);
            setMessage('University added successfully!');
        } catch (error) {
            setMessage('Failed to add university.');
        }
    };
    
    return (
        <div>
            <h1>Add a New University</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div>
                    <label>Web Page</label>
                    <input type="text" value={webPage} onChange={(e) => setWebPage(e.target.value)} required/>
                </div>
                <div>
                    <label>Country</label>
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required/>
                </div>
                <div>
                    <label>Domain</label>
                    <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} required/>
                </div>
                <button type="submit">Add University</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddUniversityPage;