import { createContext, useCallback, useEffect, useState } from "react";
export const PostsContext = createContext();

const PostsProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

  /*   const [postData, setPostData] = useState([]);
    const postDataCollection = [
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykzoZeCE0p7LeuyHnLYCdPP2jju9d5PaMeA&s",
            title: "Hello my name is chintu",
            body: "I am front end developer as well as react ui developer, now i am posting my first data"
        }
        , {
            image: "https://cdn.pixabay.com/photo/2016/11/21/06/53/beautiful-natural-image-1844362_640.jpg",
            title: "Hello my name is Sonu",
            body: "I am front end developer as well as react ui developer, now i am posting my second data"
        }
    ]; */
    const makeSlug = useCallback((title) => {
        return title
            .toLowerCase()
            .trim()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
    }, []);

    useEffect(() => {
        setLoading(true);

     /*    const addPost = async () => {
            const PostUrl = 'https://jsonplaceholder.typicode.com/posts';
            let answer = await fetch(PostUrl, {
                method: 'Post',
                body: JSON.stringify({
                    postDataCollection
                })
            });
            answer = await answer.json();
            setPostData(answer);
            console.log(postDataCollection);
        }
        addPost(); */
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
        <PostsContext.Provider value={{userData, loading, makeSlug }}>
            {children}
        </PostsContext.Provider>
    )
}
export default PostsProvider;