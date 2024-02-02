import { applyMiddleware, combineReducers, createStore } from "redux";
import { favoriteRecipesReducer } from "../features/favoriteRecipes/favoriteRecipesSlice";
import { allRecipesReducer } from "../features/allRecipes/allRecipesSlice";
import { searchTermReducer } from "../features/searchTerm/searchTermSlice";

// below action creators are moved to there respective files

// Single reducer
// const recipesReducers = (state = initialState, action) => {
//     switch(action.type){
//         case "searchTerm/setSearchTerm" : 
//             return {
//                 ...state,
//                 searchTerm : action.payload
//             }

//         case "searchTerm/clearSearchTerm" :
//             return {
//                 ...state,
//                 searchTerm : ''
//             }

//         case "allRecipes/loadData" : 
//             return {
//                 ...state,
//                 allRecipesData : action.payload
//             }

//         case "favoriteRecipes/addRecipe" : 
//             return {
//                 ...state,
//                 favoriteRecipes : [...state.favoriteRecipes, action.payload]
//             }

//         case "favoriteRecipes/removeRecipe" :
//             return {
//                 ...state,
//                 favoriteRecipes : state.favoriteRecipes.filter((recipe) => {
//                     return recipe.id !== action.payload.id;
//                 })
//             }

//         default : 
//            return state;
//     }
// }

// export const store = createStore(recipesReducers);

// in the above code , if you look there is only one reducer
// to handle all states of the application. But in big applications
// the state will become more complex so to solve this issue we need 
// to follow reducer composition.
// Individual slice reducers are responsible for updating only one slice 
// of application's state, and their results are recombined by rootReducer to 
// form a single object . 

// individual slice reducers are moved to there respective files with there 
// action creators. 

// const rootReducer = (state = {} , action) => {
//     const nextState = {
//         allRecipes : allRecipesReducer(state.allRecipes, action),
//         favoriteRecipes : favoriteRecipesReducer(state.favoriteRecipes, action),
//         searchTerm : searchTermReducer(state.searchTerm, action)
//     }

//     return nextState;
// }

// export const store = createStore(rootReducer);

// again we are writing a lot code for rootReduer , so to
// omit this boileplate code , we will use utility provided 
// by redux.  combineReducers;



export const store = createStore(combineReducers({
    allRecipes : allRecipesReducer,
    searchTerm : searchTermReducer,
    favoriteRecipes: favoriteRecipesReducer,
}))


// now imagine you have 100's of action creator and many reducers , putting
// all them in this single file is not good right. 
// so we will make our folder structure like this

// ---src/
//     --app/
//       --store.js
//     --features/
//       --favoriteRecipes/
//         --favoriteRecipesSlice.js
//       --allRecipes/
//         --allRecipesSlice.js
//     --index.js
//     --app.js
