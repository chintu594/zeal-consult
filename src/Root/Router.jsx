import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Services from '../Pages/Services/Services'
import Posts from '../Pages/Posts/Posts'
import SinglePost from '../Pages/SinglePost/SinglePost'
import Contact from '../Pages/Contact/Contact'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/Posts' element={<Posts />} />
            <Route path='/posts/:slug' element={<SinglePost />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    )
}

export default Router