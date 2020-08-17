import React from 'react'
import CMS from 'netlify-cms-app'
import './cms-utils'
import HomePageTemplate from '../templates/HomePage'
//Schema
import productPage from './Schema/productPage'
import Components from './Schema/Components'

import uploadcare from 'netlify-cms-media-library-uploadcare'
import testimony from './Schema/ComponentsSchema/testimony'
import client from './Schema/ComponentsSchema/client'
import customer from './Schema/ComponentsSchema/customer'

CMS.init({
  config: {
    backend: {
      name: 'git-gateway'
    },
    local_backend: true,
    media_folder: '../../static/images/uploads',
    public_folder: '../../images/uploads',
    collections: [...productPage, ...Components, ...testimony, ...client, ...customer]
  }
})

CMS.registerMediaLibrary(uploadcare)

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate(HomePageTemplate, 'homePage')
