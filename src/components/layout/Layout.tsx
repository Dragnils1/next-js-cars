import React, { FC, PropsWithChildren } from 'react'
import { Header } from './header/Header'
import { Meta } from '../seo/Meta'
import { IMeta } from '../seo/Meta.interface'
import dynamic from 'next/dynamic'


// for examle of client side loading
const DynamicFooter = dynamic(() => import('./footer/Footer'), {
  loading: () => <p>Loading footer...</p>,
  ssr: false
})

export const Layout: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
  return (
    <>
      <Meta title={title} description={description} >
          <Header />
          { children }
          <DynamicFooter />
      </Meta>
    </>
    
  )
}
