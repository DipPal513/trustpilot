import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import base_url from '@/utils/base_url';

const useFetch = (endpoint) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = Cookies.get('token'); // Get the token from cookies

                const response = await axios.get(base_url + endpoint, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token 
                    },

                });

                setData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, loading, error };
};

export default useFetch;
