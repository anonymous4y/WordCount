import { Link } from 'react-router-dom'
import Logo from '../assets/logo1.png'

export const PageNotFound = () => {
    return (
        <main>
            <section className='flex flex-col items-center justify-center'>
                <div className='max-w-lg'>
                    <p className='text-6xl text-center my-4'>404 Opps!</p>
                    <img className='w-full my-4' src={Logo} alt="pagenotfound logo" />
                </div>

                <div className='flex justify-center my-2'>
                    <Link to='/'>
                        <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Back To Home</button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
