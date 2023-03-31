const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		favorites: [],
		people: [],
		planets: [],
		vehicles: [],
		demo: [],
	  },
	  actions: {
		// Use getActions to call a function within a fuction
		getData: (entity) => {
		  fetch(`https://swapi.dev/api/${entity}/`)
			.then((response) => {
			  if (!response.ok) {
				throw Error(response.statusText);
			  }
			  // Read the response as json.
			  return response.json();
			})
			.then((responseAsJson) => {
			  // Do stuff with the JSONified response
			  console.log(responseAsJson.results);
			  setStore({ [entity]: responseAsJson.results });
			})
			.catch((error) => {
			  console.log("Looks like there was a problem: \n", error);
			});
		},

		addFavorites: (item) => { //Favorites Function
			const store = getStore(); //Access to the Store
			store.favorites.push(item) //Push Item
			setStore(store) //Save the Changes under Store (Update the State)
			},
  
		addFav: (newFav) => {
		  let newFavorites = getStore().favorites;
		  newFavorites.push(newFav);
  
		  setStore({ favorites: newFavorites });
		},

		removeFavorites: index => { //Remove Favorites Function
			const store = getStore();
			let updatedList = store.favorites.filter(
			(item, i) => index != i
			);
			setStore({favorites:updatedList})
			},
  
		deleteFav: (name) => {
		  let filtered = getStore().favorites.filter((item) => item.name != name);
  
		  setStore({ favorites: filtered });
		},
  
		changeColor: (index, color) => {
		  //get the store
		  const store = getStore();
  
		  //we have to loop the entire demo array to look for the respective index
		  //and change its color
		  const demo = store.demo.map((elm, i) => {
			if (i === index) elm.background = color;
			return elm;
		  });
  
		  //reset the global store
		  setStore({ demo: demo });
		},
	  },
	};
  };
  
  export default getState;