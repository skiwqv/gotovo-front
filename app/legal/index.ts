import { cookies } from './cookies'
import { privacy } from './privacy'
import { terms } from './terms'
import type { LegalDocSet, LegalSlug } from './types'

export const legalSlugs: LegalSlug[] = ['privacy', 'terms', 'cookies']

export const legalDocs: Record<LegalSlug, LegalDocSet> = { privacy, terms, cookies }
