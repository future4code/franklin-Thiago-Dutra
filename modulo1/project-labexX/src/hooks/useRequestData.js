import axios from 'axios';
import { useEffect, useState } from 'react'

const useRequestData = (url) => {

    const [data, setData] = useState(undefined)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    
    const getData = () => {
        setIsLoading(true)
        axios.get(url)
            .then((response) => {
                setIsLoading(false)
                setData(response.data.trips)
            })
            .catch((error) => {
                setIsLoading(false)
                setError(error);
            })
    }

    useEffect(getData, [url])
    return ([data, error, isLoading])
}
export default useRequestData