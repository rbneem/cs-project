export default [
    {
        label: 'Client',
        name: 'client',
        widget: 'objects',
        folder: 'content/client',
        create: true,
        hint: '',
        fields: [
            { label: 'Client logo', name: 'clientLogo', widget: 'image' },
            { label: 'Alt text', name: 'altText', widget: 'string' },
        ]
    }
]