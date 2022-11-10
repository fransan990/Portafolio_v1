import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detalles/:project_id" element={<h2>Detalles</h2>} />
            <Route path="*" element={<h1>Esto es un 404, Algo seguro que tenemos mal </h1>} />
        </Routes>
    )
}
export default AppRoutes
