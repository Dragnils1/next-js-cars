import { Layout } from '@/components/layout/Layout'
import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

 const NotFound: NextPage = () => {
  return (
    <Layout title='Not found'>
        <Head>
            <title>Not found</title>
        </Head>
        <div>Not Found</div>
    </Layout>
  )
}

export default NotFound