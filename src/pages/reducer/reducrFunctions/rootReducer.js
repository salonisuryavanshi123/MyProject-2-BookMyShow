//import { initialState } from "../../Home";

import { useContext } from "react";
import { MovieContext } from "../../..";

//const movies = useContext(MovieContext);

//var initialState = movies;

export const reducerFunction = (oldState,action)=>{
    //console.log("oldState----->",oldState);
    let newState = oldState;
    switch(action.type){
        case "REMOVE_MOVIE":

            return {
                ...oldState,
                movies:[
                    ...oldState.movies.filter((cv,idx,arr)=>{
                        return cv.name !== action.mname
                    })

                ]
            }
            //console.log('Hye');
            break;
        case "ADD_MOVIE":
            //console.log('Hello');
            return newState;
            break;
        default:
            return newState;
    }   
}