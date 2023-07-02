import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://my-app.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || `Sarah's Docs`} />
        <meta
          property="og:description"
          content={frontMatter.description || 'The portfolio site i use to document my projects'}
        />
      </>
    )
  },
  banner: {
    key: 'WIP',
    text: (
      <span>
        🚧 This site is a work in progress. Things will continue to be added and changed. 🚧
      </span>
    )
  },
  logo: <span>Sarah's Documentation</span>,
  project: {
    link: 'https://github.com/LadyBluenotes/docs-2.0',
  },
  primaryHue: 206,
  editLink: {
    component: () => null,
  },
  feedback: {
    content: () => null,
  },
  footer: { component: () => null },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Sarah\'s Docs',
    }
  }
}

export default config
