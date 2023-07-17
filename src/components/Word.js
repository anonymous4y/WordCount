import { useRef, useState } from "react"

export const Word = () => {

    const [charLen, setCharLen] = useState(0)
    const [wordLen, setWordLen] = useState(0)

    const textRef = useRef()

    function handleCount() {
        const text = textRef.current.value
        setCharLen(text.length)
        text.length ? setWordLen(text.trim().split(' ').length) : setWordLen(0)
    }

    function handleClear() {
        textRef.current.value = ''
        handleCount()
    }

    return (
        <section>
            <div className='my-10'>
                <h1 className='text-4xl font-bold  text-center py-2'>Words Counter</h1>
                <p className='text-xl font-light text-center'>Free online word and character counter</p>
            </div>
            <div className='mx-32'>
                <textarea onChange={handleCount} ref={textRef} name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" cols="30" rows="10" placeholder='Type or paste your text'></textarea>
                <div className='flex items-center justify-center'>
                    <button onClick={handleClear} type="button" className="text-white bg-red-700 hover:bg-gray-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5  text-center mr-2 my-2">clear</button>
                </div>
            </div>
            <div className='flex justify-evenly mt-5'>
                <span className="bg-blue-600 p-2 rounded text-white">Characters:{charLen}</span>
                <span className="bg-blue-600 p-2 rounded text-white">Words:{wordLen}</span>
            </div>
        </section>
    )
}
