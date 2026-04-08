import { MetadataRoute } from 'next'

const BASE = 'https://octabitlogics.com'

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()

    return [
        // ── Home (root)
        {
            url: BASE,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1.0,
        },

        // ── Primary section anchors  (treated as canonical page URLs by crawlers)
        {
            url: `${BASE}/#about`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE}/#services`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${BASE}/#case-studies`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE}/#testimonials`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${BASE}/#contact`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        // ── Projects listing page
        {
            url: `${BASE}/projects`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },

        // ── Individual project pages
        {
            url: `${BASE}/projects/launchpulse`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.75,
        },
        {
            url: `${BASE}/projects/sporttek`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.75,
        },
        {
            url: `${BASE}/projects/tact-evac`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.75,
        },
    ]
}
