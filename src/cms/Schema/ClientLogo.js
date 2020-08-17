export default [
    {
        label: "Add Client logo's",
        name: 'cleintLogo',
        widget: 'objects',
        fields: [
            { label: 'Clients', name: 'clients', widget: 'relation',
                collection: 'client',
                valueField: 'clientLogo',
                searchFields: ['altText'],
                multiple: true
            }
        ]
    }
]