import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=> {
        console.log('Use Effect ran')
        fetch(url)
        .then(res => {
            if (!res.ok) {
                throw Error("Couldn't fetch resource")
            }  {return res.json()}
        })
        .then(
            (data) => {
                setIsPending(false)
                setData(data)
                setError(null)
            }
        ).catch (err =>
            {setIsPending(false)
            setError(err.message)}
        )

        
        // console.log(blogs)
        // console.log(name)
    }, [url])
    return {data, isPending, error}
}

export default useFetch;