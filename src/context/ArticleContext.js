import { createContext } from "react";
import { useArticles } from "../data/hooks";

//context to store article info
export const ArticleContext = createContext({});

export const ArticleProvider = ({ children }) => {
    const { articles, loading, error } = useArticles();

    return (
        <ArticleContext.Provider value={{ articles, loading, error }}>
            {children}
        </ArticleContext.Provider>
    )
}
