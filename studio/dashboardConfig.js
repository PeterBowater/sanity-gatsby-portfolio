export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6022d7f0ad1fde343c48eee1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-88kpth9q',
                  apiId: '91b01f92-f49b-4e54-9aeb-2a283bf19cbf'
                },
                {
                  buildHookId: '6022d7f113f417010476f09e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-2a3ycxmq',
                  apiId: 'b36f4552-de61-43ee-8f7e-c0140e881def'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PeterBowater/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-2a3ycxmq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
