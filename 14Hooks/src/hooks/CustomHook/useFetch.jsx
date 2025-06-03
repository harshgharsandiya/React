import React, { useState, useEffect } from 'react';

function useFetch(url) {
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setResponses(data));
    }, []);

    return responses;
}

export default useFetch;
