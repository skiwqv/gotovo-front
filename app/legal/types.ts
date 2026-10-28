export type LegalLocale = 'me' | 'ru' | 'en'
export type LegalSlug = 'privacy' | 'terms' | 'cookies'

export type LegalBlock = string | { list: string[] }

export interface LegalDoc {
  title: string
  description: string
  intro: string
  sections: { title: string; body: LegalBlock[] }[]
}

export type LegalDocSet = Record<LegalLocale, LegalDoc>
