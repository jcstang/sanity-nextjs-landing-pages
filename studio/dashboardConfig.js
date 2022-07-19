export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62d6240e9107c333fd09333f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dzxy1x9e',
                  apiId: 'e8bec6a3-21fd-46fe-bbd5-e92caa383fb6'
                },
                {
                  buildHookId: '62d6240ea723ce31b19399ed',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9yf7qheu',
                  apiId: '7ba045a2-30d4-49e0-9870-993a4959b364'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jcstang/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9yf7qheu.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
