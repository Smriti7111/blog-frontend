import axios from 'axios';
import { useState, useEffect } from 'react';
import { API_BASE_URL } from './constants';

//hook to get all articles
export const useArticles = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`${API_BASE_URL}/api/articles`);
                setArticles(data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        })();
    }, []);

    return { articles, loading, error, setArticles };
}

//hook to get a single articles
export const useArticleDetails = (slug) => {
    const [articleDetails, setArticleDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`${API_BASE_URL}/api/articles/${slug}`);
                setArticleDetails(data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        })();
    }, []);

    return { articleDetails, loading, error };
}

