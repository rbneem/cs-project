export default [
    {
        label: 'Testimony',
        name: 'testimony',
        widget: 'objects',
        folder: 'content/testimony',
        create: true,
        hint: '',
        required: false,
        fields: [
            { label: 'Author', name: 'author', widget: 'string', required: false },
            { label: 'Author Image', name: 'authorImg', widget: 'image', required: false },
            { label: 'Content', name: 'content', widget: 'text', required: false },
        ]

    }
]