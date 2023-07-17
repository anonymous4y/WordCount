import { Header, Joke } from "../components"

export const JokesPage = () => {
    return (
        <main>
            <Header heading="ChuckNorris Jokes" subHeading="Free JSON API FOR hand curated Chuck Norris Jokes" />
            <Joke />
        </main>
    )
}
