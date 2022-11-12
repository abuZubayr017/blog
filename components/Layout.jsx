import React from 'react';
import {Header} from ".";
import FeaturedPosts from "../sections/FeaturedPosts"

function Layout({children}) {
  return (
    <>
        <Header />
        <FeaturedPosts/>
        {children}
    </>
  )
}

export default Layout