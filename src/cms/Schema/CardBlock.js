export default [
    {
        label: 'Add Card Block',
        name: 'card',
        widget: 'objects',
        fields: [
            { label: 'Cards', name: 'cards', widget: 'list',
                fields: [
                    { label: 'Block Header', name: 'blockHeader', widget: 'string' },
                    { label: 'image', name: 'image', widget: 'image' },
                    { label: 'title', name: 'title', widget: 'string' },
                    { label: 'Description', name: 'description', widget: 'text' },
                    { label: 'link Label', name: 'linkLabel', widget: 'string' },
                    { label: 'link Url', name: 'linkUrl', widget: 'string' },
                    { label: 'Background Color', name: 'bgColor', widget: 'string' },
                ]
            }
        ]
    }
]