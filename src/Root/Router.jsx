import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Services from '../Pages/Services/Services'
import Posts from '../Pages/Posts/Posts'
import SinglePost from '../Pages/SinglePost/SinglePost'
import Contact from '../Pages/Contact/Contact'

import PageNotFound from '../Components/sections/PageNotFound/PageNotFound'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/:slug' element={<SinglePost />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default Router