import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/brandao-rafael-presentation/pt-br/docs',
    component: ComponentCreator('/brandao-rafael-presentation/pt-br/docs', 'abc'),
    routes: [
      {
        path: '/brandao-rafael-presentation/pt-br/docs/',
        component: ComponentCreator('/brandao-rafael-presentation/pt-br/docs/', '47d'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/brandao-rafael-presentation/pt-br/docs/doc2',
        component: ComponentCreator('/brandao-rafael-presentation/pt-br/docs/doc2', '68e'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/brandao-rafael-presentation/pt-br/docs/doc3',
        component: ComponentCreator('/brandao-rafael-presentation/pt-br/docs/doc3', 'f0d'),
        exact: true,
        sidebar: "someSidebar"
      },
      {
        path: '/brandao-rafael-presentation/pt-br/docs/mdx',
        component: ComponentCreator('/brandao-rafael-presentation/pt-br/docs/mdx', '476'),
        exact: true,
        sidebar: "someSidebar"
      }
    ]
  },
  {
    path: '/brandao-rafael-presentation/pt-br/',
    component: ComponentCreator('/brandao-rafael-presentation/pt-br/', '160'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
