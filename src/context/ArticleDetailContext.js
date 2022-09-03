import { createContext } from "react";
import { useArticleDetails } from "../data/hooks";

//context to store article info
export const ArticleDetailContext = createContext({});

export const ArticleDetailProvider = ({ children, slug }) => {
    console.log('8888',useArticleDetails(slug))
    const { articleDetails, loading, error } = useArticleDetails(slug);

    return (
        <ArticleDetailContext.Provider value={{ articleDetails, loading, error }}>
            {children}
        </ArticleDetailContext.Provider>
    )
}
