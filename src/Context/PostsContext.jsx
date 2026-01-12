import { createContext, useEffect, useState } from "react";


export const PostsContext = createContext();

const PostsProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    const makeSlug = (title) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/ /g, "-").
            replace(/[^\w-]+/g, "");
    }

    useEffect(() => {
        setLoading(true);
        const getUserData = async () => {
            let url = 'https://jsonplaceholder.typicode.com/posts';
            let response = await fetch(url);
            response = await response.json();
            setUserData(response);
            setLoading(false);
        }
        getUserData();
    }, []);

    return (
        <PostsContext.Provider value={{ userData, loading, makeSlug }}>
            {children}
        </PostsContext.Provider>
    )
}
export default PostsProvider;