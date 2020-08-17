import React from 'react'
import CMS from 'netlify-cms-app'
import './cms-utils'
//Schema
// import Blog from './Schema/blog'
import productPage from './Schema/productPage'
import Components from './Schema/Components'
// import ProductPagePreview from './preview-templates/AboutPagePreview'

import uploadcare from 'netlify-cms-media-library-uploadcare'

CMS.init({
  config: {
    backend: {
      name: 'git-gateway'
    },
    local_backend: true,
    media_folder: '../../static/images/uploads',
    public_folder: '../../images/uploads',
    collections: [...productPage, ...Components]
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

// CMS.registerPreviewTemplate('homePage')
