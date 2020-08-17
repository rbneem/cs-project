export default [
    {
        label: 'Add Image Section',
        name: 'imageSection',
        widget: 'objects',
        fields: [
            { label: 'Headline', name: 'headline', widget: 'string', require: false},
            { label: 'Title', name: 'title', widget: 'string' },
            { label: 'Brand Name', name: 'brandName', widget: 'string', required: false},
            { label: 'Description', name: 'description', widget: 'text' },
            { label: 'Image Variant', name: 'variant', widget: 'select', default: 'L',
                options: [
                    { label: 'Image on left', value: 'L' },
                    { label: 'Image on right', value: 'R' },
                ]
            },
            { label: 'Image', name: 'image', widget: 'image' },
            { label: 'Action Buttons', name: 'btns', widget: 'list', require: false,
                fields : [
                    { label: 'Button Text', name: 'text', widget: 'string', require: false},
                    { label: 'Button Image', name: 'imgLink', widget: 'image', require: false},
                    { label: 'Button Link', name: 'link', widget: 'select', default: 'R', require: false,
                        options: [
                            {label: 'Relation', value: 'R', require: false}
                        ]
                    }
                ]
            }
        ]
    }
]