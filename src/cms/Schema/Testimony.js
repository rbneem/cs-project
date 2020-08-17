export default [
    {
        label: 'Add testimonials',
        name: 'testimonial',
        widget: 'objects',
        required: false,
        fields: [
            { label: 'testimonials', name: 'testimonials', widget: 'relation',
                collection: 'testimony',
                valueField: 'author',
                searchFields: ['author'],
                displayFields: ['author'],
                multiple: true
            }
        ]
    }
]