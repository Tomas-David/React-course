import { useFetch } from "../hooks/useFetch" 
const apiUrl: string = "http://api.open-notify.org/iss-now.json"
export const Coordinates = () => {
    
    const {data, loading} = useFetch(apiUrl)
    return (
        <div>{loading ? "loading..." : <div>
            <h2>Zeměpisná délka</h2>
            <p>{data.iss_position.longitude}</p>
            <h2>Zeměpisná šířka</h2>
            <p>{data.iss_position.latitude}</p>
        </div>
      }
    </div>
    )
}

