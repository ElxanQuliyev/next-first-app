import React from 'react'
import { Fragment } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const Layout = ({children}) => {
return (
    <Fragment>
        <Header/>
        <main>{children}</main>
        <Footer/>
    </Fragment>
)
}

export default Layout
