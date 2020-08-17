export default [
    {
        label: 'Add Hero Banner',
        name: 'heroBanner',
        widget: 'objects',
        hint: 'This will be added to top of page with background Image, Color with text.',
        fields: [
            { label: 'Banner title', name: 'title', widget: 'string' },
            { label: 'Banner sub title', name: 'subTitle', widget: 'text', required: false },
            { label: 'Text Position', name: 'textPosition', widget: 'select', default: 'C',
                options: [
                    { label: 'Left', value: 'L' },
                    { label: 'Center', value: 'C' },
                    { label: 'Right', value: 'R' }
                ]
            },
            { label: 'Banner background image', name: 'backgroundImg', widget: 'image', required: false},
        ]
    }
]