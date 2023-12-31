import { Link } from "react-router-dom"
import { Header, Word } from "../components"

export const HomePage = () => {
    return (
        <main>
            <Header heading='Word Counter' subHeading="Free online character and word counter" />
            <Word />
            <div className="flex justify-center my-10">
                <Link to='/joke'>
                    <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Free Jokes</button>
                </Link>
            </div>
        </main>
    )
}
