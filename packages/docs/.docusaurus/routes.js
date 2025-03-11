import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b09'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '834'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '5c1'),
            routes: [
              {
                path: '/Demo App/',
                component: ComponentCreator('/Demo App/', 'c6e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Juno React/',
                component: ComponentCreator('/Juno React/', 'afe'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Juno React/components/AuthGuard',
                component: ComponentCreator('/Juno React/components/AuthGuard', 'f35'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/Repository/',
                component: ComponentCreator('/Repository/', '6d9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'ce7'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
