// import Components from '../../components'

export default [
  {
    label: 'All Components',
    name: 'components',
    folder: 'src/components',
    widget: 'list',
    fields: [
      { label: 'Title', name: 'title', widget: 'string' },
      { label: 'Publish Date', name: 'date', widget: 'datetime' },
      { label: 'Profile Image', name: 'thumbnail', widget: 'image' },
      { label: 'Body', name: 'body', widget: 'list' }
    ]
  }
]
