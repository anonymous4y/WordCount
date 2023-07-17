import { useEffect, useState } from "react"
import { Joke } from "../components"

export const JokesPage = () => {
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        async function fetchJokes() {
            const response = await fetch('https://api.chucknorris.io/jokes/random', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
            const data = await response.json()
            setJokes(data)
        }
        fetchJokes()
    }, [])

    return (
        <main>
            <Joke jokes={jokes} />
        </main>
    )
}
