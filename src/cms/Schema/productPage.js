import languages from './language'
import brandColor from './brandColor'
import seo from './seo'

export default [
  {
    label: 'Product Page',
    name: 'productPage',
    folder: 'src/pages/products',
    slug: '{{name}}',
    create: true,
    fields: [
      { ...languages },
      { ...brandColor },
      { ...seo },
      { label: 'Title', name: 'title', widget: 'string', required: false },
      { label: 'Body', name: 'body', widget: 'markdown' }
    ]
  }
]
