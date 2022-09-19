// Postavlja tekst u searchBar
export const changeSearch = (text) => {
    return (dispatch) => {
      dispatch({
        type: "CHANGE",
        payload: text,
      });
    };
};

// Kad se pozove ova funkcija, očisti se tekst iz searchBar-a
export const deleteSearch = () => {
    return (dispatch) => {
      dispatch({
        type: "DELETE",
        payload: "",
      });
    };
};
  
// Get zahtjev se vrši na razini komponente i rezultat se proslijeđuje kao niz
// To bi trebao biti objekt sa dva para ključeva vrijednosti
// 1. data - koji ima informacije o rezultatu
// 2. meta - informacija o "straničenju" 
export const setSearchResults = (nizRezultata) => {
    return (dispatch) => {
      dispatch({
        type: "SET_RESULTS",
        payload: nizRezultata,
      });
    };
};
  
// Funkcija koja briše nizRezultata
export const clearSearchResults = () => {
    return (dispatch) => {
      dispatch({
        type: "DELETE_RESULTS",
        payload: [],
      });
    };
};
  
// Dodaje igrača u listu
// Objekt iz API-ja je proslijeđen kao payload
export const addToPlayerList = (player) => {
    return (dispatch) => {
      dispatch({
        type: "ADD_PLAYER",
        payload: player,
      });
    };
};
  
// Koristi se uuid koji se kreira kad je igrač dodan 
// Koristi se uuid a ne api id zato što korisnik može usporediti igrača sa samim sobom
export const removePlayerFromList = (uuid) => {
    return (dispatch) => {
      dispatch({
        type: "REMOVE_PLAYER",
        payload: uuid,
      });
    };
};
  
export const updatePlayerStatsBySeason = (player) => {
    return (dispatch) => {
      dispatch({
        type: "UPDATE_STATS",
        payload: player,
      });
    };
};
  
export const sortPlayerListByStat = (metric) => {
    return (dispatch) => {
      dispatch({
        type: "SORT_BY_STAT",
        payload: metric,
      });
    };
};
  