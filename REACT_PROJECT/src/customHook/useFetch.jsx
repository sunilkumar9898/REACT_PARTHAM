import { useEffect, useState } from "react"


export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        const fetchData = async () => {
            try {
                const result = await fetch(url);
                if (!result.ok) throw new Error("Fetch error");
                const response = await result.json();
                if (!ignore) setData(response)
            } catch (error) {
                if (!ignore) setError(error)
            } finally {
                if (!ignore) setLoading(false)
            }
        }
        fetchData()
        return () => {
            ignore = true;
        }
    }, [url])
    return { data, loading, error }
}