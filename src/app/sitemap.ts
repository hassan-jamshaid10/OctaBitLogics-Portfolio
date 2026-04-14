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

        // ── Engineering Approach
        {
            url: `${BASE}/engineering-approach`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.85,
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

        // ── Services Pages
        { url: `${BASE}/services/custom-software-development`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE}/services/mobile-app-development`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE}/services/ai-and-automation`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE}/services/cloud-and-devops`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE}/services/ui-ux-design`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

        // ── Case Studies Pages
        { url: `${BASE}/case-studies/ecommerce-platform`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE}/case-studies/logistics-fleet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE}/case-studies/saas-analytics`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE}/case-studies/healthcare-pipeline`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE}/case-studies/fintech-pipeline`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

        // ── Blog Pages
        { url: `${BASE}/blogs/nextjs-15-react-server-components`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
        { url: `${BASE}/blogs/scaling-rag-pipelines`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
        { url: `${BASE}/blogs/go-microservices-high-performance`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    ]
}
