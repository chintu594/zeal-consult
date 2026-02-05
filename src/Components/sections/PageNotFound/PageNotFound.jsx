import React from 'react'
import './PageNotFound.css'
import PageErrorImage from '../../../images/page_not_found.svg'
const PageNotFound = () => {
    return (
        <div className="error-404">
            <img src={PageErrorImage} alt="Page-not-found" />
        </div>
    )
}

export default PageNotFound
