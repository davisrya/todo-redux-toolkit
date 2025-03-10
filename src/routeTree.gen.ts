/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const PendingLazyImport = createFileRoute('/Pending')()
const CompleteLazyImport = createFileRoute('/Complete')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const PendingLazyRoute = PendingLazyImport.update({
  id: '/Pending',
  path: '/Pending',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/Pending.lazy').then((d) => d.Route))

const CompleteLazyRoute = CompleteLazyImport.update({
  id: '/Complete',
  path: '/Complete',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/Complete.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/Complete': {
      id: '/Complete'
      path: '/Complete'
      fullPath: '/Complete'
      preLoaderRoute: typeof CompleteLazyImport
      parentRoute: typeof rootRoute
    }
    '/Pending': {
      id: '/Pending'
      path: '/Pending'
      fullPath: '/Pending'
      preLoaderRoute: typeof PendingLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/Complete': typeof CompleteLazyRoute
  '/Pending': typeof PendingLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/Complete': typeof CompleteLazyRoute
  '/Pending': typeof PendingLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/Complete': typeof CompleteLazyRoute
  '/Pending': typeof PendingLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/Complete' | '/Pending'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/Complete' | '/Pending'
  id: '__root__' | '/' | '/Complete' | '/Pending'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  CompleteLazyRoute: typeof CompleteLazyRoute
  PendingLazyRoute: typeof PendingLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  CompleteLazyRoute: CompleteLazyRoute,
  PendingLazyRoute: PendingLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/Complete",
        "/Pending"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/Complete": {
      "filePath": "Complete.lazy.jsx"
    },
    "/Pending": {
      "filePath": "Pending.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
