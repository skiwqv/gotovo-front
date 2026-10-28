export const apartmentRanges = ['1-4', '5-14', '15-49', '50+'] as const
export const cities = ['budva', 'kotor', 'tivat', 'bar', 'herceg-novi', 'podgorica', 'other'] as const

export type ApartmentRange = (typeof apartmentRanges)[number]
export type City = (typeof cities)[number]

export interface PilotRequest {
  name: string
  contact: string
  apartments: ApartmentRange
  city: City
  locale: string
  consent: true
}

export interface SupabaseConfig {
  supabaseUrl: string
  supabaseKey: string
}

export async function sendPilotRequest({ supabaseUrl, supabaseKey }: SupabaseConfig, request: PilotRequest): Promise<void> {
  if (!supabaseUrl || !supabaseKey) throw new Error('Supabase is not configured (NUXT_PUBLIC_SUPABASE_URL / _KEY)')

  const response = await fetch(`${supabaseUrl}/rest/v1/pilot_requests`, {
    method: 'POST',
    headers: {
      apikey: supabaseKey,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(request),
  })

  if (!response.ok) throw new Error(`pilot_requests insert failed: ${response.status} ${await response.text()}`)
}
