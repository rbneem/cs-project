import seo from './seo'
import languages from './language'
import brandColor from './brandColor'
import HeroBanner from './HeroBanner'
import Testimony from './Testimony'
import CardBlock from './CardBlock'
import ClientLogo from './ClientLogo'
import OurCustomers from './OurCustomers'
import ImageSection from './ImageSection'
import customer from './ComponentsSchema/customer'


export default [
    {
        label: 'Product Page',
        name: 'productPage',
        folder: 'src/pages/products',
        slug: '{{title}}',
        create: true,
        filter: {field: "language", value: "EN"},
        fields: [
            { ...languages },
            { ...brandColor },
            { ...seo },
            { label: 'Title', name: 'title', widget: 'string', required: false },
            { label: 'Sections', name: 'sections', widget: 'list', 
                types: [
                    ...HeroBanner,
                    ...ImageSection,
                    ...Testimony,
                    ...CardBlock,
                    ...ClientLogo,
                    ...OurCustomers
                    
                ]
            },
            { label: 'Body', name: 'body', widget: 'markdown', required: false, collapsed: true},
        ]
    }
]
