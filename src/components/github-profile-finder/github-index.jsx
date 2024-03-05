import { useEffect, useState } from "react"
import User from "./user";
import './github-styles.css';

export default function GithubProfileFinder() {

    const [username, setUsername] = useState('ssuddreth');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchGithubUserData() {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${username}`);
        const data = await res.json();
        if (data) {
            setUserData(data);
            setLoading(false);
            setUsername('');
        }
        console.log(data);
    }

    function handleSubmit() {
        if (username.trim() === '') {
            setError('Please enter a valid username...');
        } else {
            setError(null);
            fetchGithubUserData();
        }
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    if (loading) {
        return <h1>Loading Data...</h1>
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                name="search-by-username"
                 type="text" 
                 placeholder="Search Github Username..."
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 onKeyPress={handleKeyPress}
                 required
                 />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {
                userData !== null ? <User user={userData} /> : null
            }
        </div>
    )
}