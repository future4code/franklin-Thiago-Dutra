import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminHomePage from '../pages/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTripPage'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import ListTripsPage from '../pages/ListTripsPage'
import Login from '../pages/Login'
import TripDetailsPage from '../pages/TripDetailsPage'



export const Router = () => {
   return (
      //BrowserRouter é um componente da lib react-router-dom
      //O componente Routes é responsável por abrigar a definição das rotas e "ativar" uma rota por vez
      //O componente Route é quem gerencia as rotas e asssocia a um componente react
      <BrowserRouter>
         <Routes>
            <Route index element={<HomePage />} />
            <Route path="/trips/list" element={<ListTripsPage />} />
            <Route path="/trips/application" element={<ApplicationFormPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/trips/list" element={<AdminHomePage />} />
            <Route path="/admin/trips/create" element={<CreateTripPage />} />
            <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
            <Route path= "*" element={<ErrorPage />} />
         </Routes>
      </BrowserRouter>
   )
}