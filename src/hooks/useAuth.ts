import { useState, useEffect } from 'react';
import type { Account } from '../types';
import { demoUsers, demoPassword } from '../data/demoUsers';

const useAuth = () => {
    const [user, setUser] = useState<Account | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Load user from localStorage on component mount
    useEffect(() => {
        const savedUser = localStorage.getItem('nvh_user');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch {
                localStorage.removeItem('nvh_user');
            }
        }
        setLoading(false);
    }, []);

    const login = async (credentials: { username: string; password: string }) => {
        setLoading(true);
        setError(null);
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const { username, password } = credentials;
        
        // Check if user exists and password is correct
        if (demoUsers[username] && password === demoPassword) {
            const userData = demoUsers[username];
            setUser(userData);
            // Save user to localStorage
            localStorage.setItem('nvh_user', JSON.stringify(userData));
            setLoading(false);
            return userData;
        } else {
            setError('Tên đăng nhập hoặc mật khẩu không đúng');
            setLoading(false);
            return undefined;
        }
    };

    // Demo OAuth-like login (e.g. Google) — picks a demo user and signs in
    const oauthLogin = async (provider: string) => {
        setLoading(true);
        setError(null);
        // simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));

        // For demo purposes, map provider to a demo user
        // Google -> member account
        let userData: Account | undefined;
        if (provider === 'google') {
            userData = demoUsers['member'];
        }

        if (userData) {
            setUser(userData);
            localStorage.setItem('nvh_user', JSON.stringify(userData));
            setLoading(false);
            return userData;
        }

        setError('OAuth login failed');
        setLoading(false);
        return undefined;
    };

    const logout = () => {
        setUser(null);
        // Remove user from localStorage
        localStorage.removeItem('nvh_user');
    };

    return {
        user,
        loading,
        error,
        login,
    oauthLogin,
        logout,
    };
};

export { useAuth };