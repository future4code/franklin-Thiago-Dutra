//Arquivo que concentra as funções de navegação

export const goToHome = (navigate) => {
  navigate("/");
};
export const goToLogin = (navigate) => {
  navigate("/login");
};

export const goToListTrip = (navigate) => {
  navigate("/trips/list");
};

export const goToBack = (navigate) => {
  navigate(-1);
};

export const goToApplicationForm = (navigate) => {
  navigate("/trips/application");
};
export const goToAdminHomePage = (navigate) => {
  navigate("/admin/trips/list");
};
export const goToCreateTrip = (navigate) => {
  navigate("/admin/trips/create");
};
export const goToTripDetails = (navigate, id) => {
   navigate(`/admin/trips/${id}`);
}
