export default [
    {
        label: 'Nav menu',
        name: 'menu',
        widget: 'objects',
        folder: 'content/menu',
        create: true,
        hint: '',
        fields: [
            { label: "Main Menu title", name: "main_menu", widget: "string" },
            { label: "Has sub menu", name: "has_submenu", widget: "boolean", default: false,required: false },
            { label: "path", name: "path", widget: "relation", 
                collection: "productPage", 
                searchFields: ["title"],    
                valueField: 'title', 
                displayFields: ['title'], 
                hint: "Don't select if the item has sub menu", 
                required: false
            },
            { label: "Sub Menu title", name: "sub_menu", widget: "list",
                fields: [
                    {label: "Title", name: "sub_menu_title", widget: "string"},
                    { label: "path", name: "path", widget: "relation", 
                        collection: "productPage", 
                        searchFields: ["title"],  
                        valueField: 'slug', 
                        displayFields: ['title'], 
                        hint: "Don't select if the item has sub menu"
                    }
                ]
            },
        ]
    }
]