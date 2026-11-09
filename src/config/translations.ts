import type { Resource } from 'i18next'
import type { Locale } from '../types/tree'

export const supportedLocales: Locale[] = ['es', 'en']

export const resources = {
  es: {
    common: {
      eyebrow: 'Atlas Musical',
      pageTitle: 'Genealogía Universal del Despecho',
      subtitle:
        'Teoría unificada: todo "ay, me duele el corazón" desde Corea hasta Puerto Rico proviene de una sola fuente en Antioquia.',
      tip: 'Tip: Haz clic en el círculo para subir la foto del artista o apunta a una URL en la configuración.',
      cta: 'Cambiar idioma',
      language: {
        es: 'Español',
        en: 'Inglés',
      },
      legendTitle: 'Ramas del árbol',
      kingBadge: 'El origen',
    },
  },
  en: {
    common: {
      eyebrow: 'Music Atlas',
      pageTitle: 'Universal Genealogy of Heartbreak',
      subtitle:
        'Unified theory: every "oh, my heart hurts" from Korea to Puerto Rico comes from a single source in Antioquia.',
      tip: 'Tip: Click the circle to upload the artist photo or point to a URL in the config.',
      cta: 'Change language',
      language: {
        es: 'Spanish',
        en: 'English',
      },
      legendTitle: 'Tree branches',
      kingBadge: 'The origin',
    },
  },
} satisfies Resource
