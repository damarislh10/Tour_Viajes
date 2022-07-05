import { typeArticles } from "../types/types";


const initialState = {
    articles: [],
  };


  export const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
      case typeArticles.list:
        return {
          articles: [...action.payload],
        };
      default:
        return state;
    }
  };
  