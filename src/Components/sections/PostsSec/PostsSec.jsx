import React from 'react'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { PostsContext } from '../../../Context/PostsContext'
import './PostsSec.css'
import { delay, motion } from 'framer-motion'

const PostsSec = ({ limit, lodeMoreBtn, viewMoreBtn }) => {
    const { userData, loading, makeSlug } = useContext(PostsContext);
    const [visibleCount, setVisibleCount] = useState(limit);

    return (
        <div>
            <section className="posts-sec">
                <div className="container">
                    <motion.div className="title-sec" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
                        <span className='light-subtitle'>BLOGS</span>
                        <h2>Our Latest Blogs</h2>
                    </motion.div>
                    <motion.div className="post-grid" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}>
                        {!loading ?
                            userData.slice(0, visibleCount).map((post) => {
                                const slug = makeSlug(post.title);
                                return (
                                    <Link to={`/posts/${slug}`} className='column' key={post.id}>
                                        <div className="image">
                                            <img src={`https://picsum.photos/400/300?random=${post.id}`} alt={post.title} />
                                        </div>
                                        <div className="content">
                                            <h3>{post.title}</h3>
                                            <p>{post.body}</p>
                                            <div>
                                                <Link to={`/posts/${slug}`}>Read more <i class="ri-arrow-right-long-line"></i></Link>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }) :
                            <div className='load-heading'><h3>...Data is Loading</h3></div>
                        }
                        {lodeMoreBtn && !loading && visibleCount < userData.length && (
                            <div className="load-more">
                                <Link className='btn' onClick={() => setVisibleCount(userData.length)}>Load More</Link>
                            </div>
                        )}
                        {viewMoreBtn &&
                            <div className="load-more">
                                <Link to='/posts' className="btn">View All</Link>
                            </div>
                        }
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default PostsSec