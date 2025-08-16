import { useState } from 'react';
import axios from '../services/api';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('/login', credentials);
            setUser(response.data);
        } catch (err) {
            setError(err.response ? err.response.data : 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
    };

    return {
        user,
        loading,
        error,
        login,
        logout,
    };
};

export default useAuth;