export default [
    {
        label: "Add Our Customers",
        name: 'ourCustomers',
        widget: 'objects',
        fields: [
            { label: 'Customers', name: 'customers', widget: 'relation',
                collection: 'Customer',
                valueField: 'customer',
                searchFields: ['title'],
                multiple: true
            }
        ]
    }
]