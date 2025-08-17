import { useState } from 'react';
import type { Account } from '../types';
import { demoUsers, demoPassword } from '../data/demoUsers';

const useAuth = () => {
    const [user, setUser] = useState<Account | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (credentials: { username: string; password: string }) => {
        setLoading(true);
        setError(null);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const { username, password } = credentials;
        
        // Check if user exists and password is correct
        if (demoUsers[username] && password === demoPassword) {
            setUser(demoUsers[username]);
        } else {
            setError('Tên đăng nhập hoặc mật khẩu không đúng');
        }
        
        setLoading(false);
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

export { useAuth };