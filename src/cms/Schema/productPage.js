import languages from './language'
import brandColor from './brandColor'
import seo from './seo'

export default [
  {
    label: 'Product Page',
    name: 'productPage',
    folder: 'content/pages/products',
    slug: '{{slug}}',
    create: true,
    fields: [
      { ...languages },
      { ...brandColor },
      { ...seo },
      { lable: 'Slug', name: 'slug', widget: 'string'},
      { label: 'Title', name: 'title', widget: 'string', required: false },
      { label: 'Body', name: 'body', widget: 'markdown' }
    ]
  }
]
