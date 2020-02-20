import React from 'react'
import Layout from '../components/organisms/layout/layout'
import Home from '../components/organisms/home/home'

const Index = () => {
    return (
        <Layout isLoguerUser={false}>
           <Home/>
        </Layout>
    )
}

export default Index
