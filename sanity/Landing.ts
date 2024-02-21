// schemas/landingPage.js

export default {
  name: 'landingPage',
  title: 'Landing Page',
  type: 'document',
  fields: [
    {
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
    },
    {
      name: 'heroText',
      title: 'Hero Text',
      type: 'text',
    },
    {
      name: 'heroVideo',
      title: 'Hero Video',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
    },
    {
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        {
          name: 'menuItem',
          title: 'Menu Item',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          name: 'testimonial',
          title: 'Testimonial',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'text',
              title: 'Text',
              type: 'text',
            },
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'jobTitle',
              title: 'Job Title',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};
