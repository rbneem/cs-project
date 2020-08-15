export default {
    label: 'SEO',
    name: 'seo',
    widget: 'object',
    fields: [
        { label: 'Page Title', name : 'title', widget: 'string', required: false},
        { label: 'Page Discription', name : 'discription', widget: 'text', required: false },
        { label: 'Robots', name : 'robots', widget: 'string', required: false},
        { label: 'Keywords', name : 'keywords', widget: 'string', required: false},
    ]
 }