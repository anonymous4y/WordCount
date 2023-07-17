
export const Joke = ({ jokes }) => {
    const { value } = jokes
    return (
        <section >
            <div className="my-3 w-full">
                <h1 className="text-3xl text-center mb-2">ChuckNorris Jokes</h1>
                <p className="text-lg text-center text-gray-700">Free JSON API FOR hand curated Chuck Norris Jokes</p>
            </div>
            <div className="felx justify-center text-center border-2 rounded my-10 mx-24 py-5">
                {value}
            </div>
        </section>
    )
}
