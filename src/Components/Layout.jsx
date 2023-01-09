import React from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import MobileNavBar from './MobileNavBar'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Body>
                {children}
            </Body>
            <MobileNavBar/>
        </>
    )
}
