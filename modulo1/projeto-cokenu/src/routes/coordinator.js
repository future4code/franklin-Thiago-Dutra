//Arquivo que concentra as funções de navegação

export const goToHome = (navigate) => {
   navigate("/")
}
export const goToLogin = (navigate) => {
   navigate("/login")
}
export const goToSignup = (navigate) => {
   navigate("/cadastro")
}
export const goToAddReceita = (navigate) => {
   navigate("/cadastrar/receita")
}
export const goToRecipes = (navigate, id) => {
   navigate(`/detalhes/${id}`)
}