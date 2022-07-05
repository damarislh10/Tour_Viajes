import { typeArticles } from "../types/types";
import {
  collection,
  getDocs,
} from "@firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export const listArticlesAsync = () => {
    return async (dispatch) => {
      const querySnapshot = await getDocs(collection(db, "Tours"));
      const articles = [];
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        data["id"] = doc.id;
        articles.push({
          ...data,
        });
      });
      dispatch(listSync(articles));
    };
  };
  
  export const listSync = (articles) => {
    return {
      type: typeArticles.list,
      payload: articles,
    };
  };