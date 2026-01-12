import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext } from 'react'
import './SinglePostSec.css'
import { PostsContext } from '../../../Context/PostsContext'




const SinglePostSec = () => {
    const navigate = useNavigate();

    const { slug } = useParams();
    const { userData, loading, makeSlug } = useContext(PostsContext);

    const post = userData.find((p) => makeSlug(p.title) === slug)

    if (loading) return <h3>Loading post...</h3>
    if (!post) return <h3>Post not found</h3>

    return (
        <section className="single-post">
            <div className="container">
                <div className="post">
                    <div className="image">
                        <img src={`https://picsum.photos/600/400?random=${post.id}`} alt="" />
                    </div>
                    <div className="content">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <div className='btn' onClick={() => navigate(-1)}>Go Back</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SinglePostSec