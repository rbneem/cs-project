import React from 'react'
import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'

import './cms-utils'

//Schema
import productPage from './Schema/productPage'
import Components from './Schema/Components'
import testimony from './Schema/ComponentsSchema/testimony'
import client from './Schema/ComponentsSchema/client'
import customer from './Schema/ComponentsSchema/customer'
import card from './Schema/ComponentsSchema/card'
import menu from './Schema/ComponentsSchema/menu'

CMS.init({
  config: {
    backend: {
      name: 'git-gateway'
    },
    local_backend: true,
    media_folder: 'static/images',
    public_folder: '/public',
    collections: [
      ...productPage, 
      ...Components, 
      ...testimony, 
      ...client, 
      ...customer,
      ...card,
      ...menu
    ]
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

