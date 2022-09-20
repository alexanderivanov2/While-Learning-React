import { useEffect, useState } from 'react';

function useFetch(url) {
    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setState(data);
                setIsLoading(false);
            })
    }, []);

    return {state, isLoading};
}

export default useFetch;