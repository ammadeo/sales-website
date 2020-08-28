import {create, createImage, createObject} from '../utils/typedSchema'

export default createObject({
  name: 'Button',
  fields: [
    create({
      name: 'Title',
      description: 'Title inside the button',
      type: 'LocaleString',
      required: 'error'
    }),
    create({
      name: 'Description',
      description: 'Action description below the button',
      type: 'LocaleText',
    }),
  ],
  preview: {
    select: {
      title: 'Title',
      subtitle: 'Description'
    },
  },
});
