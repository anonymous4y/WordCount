import { Route, Routes } from "react-router-dom"
import { HomePage, JokesPage, PageNotFound } from '../pages'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/joke' element={<JokesPage />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}
