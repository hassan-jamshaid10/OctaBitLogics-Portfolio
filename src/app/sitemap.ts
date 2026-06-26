import { MetadataRoute } from 'next'

const BASE = 'https://octabitlogics.com'

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date()

    const pages: MetadataRoute.Sitemap = [
        { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${BASE}/company`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${BASE}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${BASE}/projects`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${BASE}/blogs`, lastModified: now, changeFrequency: 'daily', priority: 0.85 },
        { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE}/ai-first`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${BASE}/how-we-deliver`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${BASE}/engineering-approach`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

        // Services
        { url: `${BASE}/services/custom-software-development`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${BASE}/services/mobile-app-development`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${BASE}/services/ai-and-automation`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${BASE}/services/cloud-and-devops`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
        { url: `${BASE}/services/ui-ux-design`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },

        // Projects
        { url: `${BASE}/projects/bridge-crack`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${BASE}/projects/resume-parser`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${BASE}/projects/launchpulse`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${BASE}/projects/sporttek`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${BASE}/projects/tact-evac`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${BASE}/projects/pulseai`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${BASE}/projects/dataflow`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
        { url: `${BASE}/projects/novasight`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

        // Case Studies
        { url: `${BASE}/case-studies/ecommerce-platform`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE}/case-studies/logistics-fleet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE}/case-studies/saas-analytics`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE}/case-studies/healthcare-pipeline`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${BASE}/case-studies/fintech-pipeline`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

        // Blogs
        { url: `${BASE}/blogs/nextjs-15-react-server-components`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${BASE}/blogs/scaling-rag-pipelines`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${BASE}/blogs/go-microservices-high-performance`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ]

    return pages
}
