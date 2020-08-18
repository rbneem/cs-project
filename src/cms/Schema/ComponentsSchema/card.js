export default [
    {
        label: 'Card',
        name: 'card',
        widget: 'objects',
        folder: 'content/card',
        create: true,
        hint: '',
        fields: [
            { label: 'Card Image', name: 'image', widget: 'image' },
            { label: 'Alt text', name: 'altText', widget: 'string' },
            { label: 'title', name: 'title', widget: 'string' },
            { label: 'description', name: 'description', widget: 'string' },
            { label: 'Go to', name: 'link', widget: 'string' },
        ]
    }
]