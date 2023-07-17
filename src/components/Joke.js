import { useEffect, useState } from "react"

export const Joke = () => {
    const [jokes, setJokes] = useState([])

    useEffect(() => {
        async function fetchJokes() {
            const response = await fetch('https://api.chucknorris.io/jokes/random', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })
            const data = await response.json()
            setJokes(data.value)
        }
        fetchJokes()
    }, [])

    return (
        <section >
            <div className="felx justify-center text-center border-2 rounded my-10 mx-24 py-5">
                {jokes}
            </div>
        </section>
    )
}
