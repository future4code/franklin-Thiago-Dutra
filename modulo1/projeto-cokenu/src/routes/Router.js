import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import CadastrarReceita from '../pages/CadastrarReceita'
import CadastroUser from '../pages/CadastroUser'
import DetalhesReceitas from '../pages/DetalhesReceitas'
import ErrorPage from '../pages/ErrorPage'
import Feed from '../pages/Feed'
import LoginUser from '../pages/LoginUser'



export const Router = () => {
   return (
      <BrowserRouter>
      <Header />
         <Routes>
            <Route index element={<Feed />} />
            <Route path="/login" element={<LoginUser />} />
            <Route path="/cadastro" element={<CadastroUser />} />
            <Route path="/cadastrar/receita" element={<CadastrarReceita />} />
            <Route path="/detalhes/:id" element={<DetalhesReceitas />} />
            <Route path="*" element={<ErrorPage />} />
         </Routes>
      </BrowserRouter>
   )
}