export default {
    label: 'SEO',
    name: 'seo',
    widget: 'object',
    collapsed: true,
    fields: [
        { label: 'Page Discription', name : 'discription', widget: 'text', required: false },
        { label: 'Keywords', name : 'keywords', widget: 'string', required: false, seperator: ',', required: false},
    ]
 }