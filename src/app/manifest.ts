import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'OctaBitLogics Portfolio',
        short_name: 'OctaBitLogics',
        description: 'Pioneering the Digital Frontier with AI, SaaS, and Cloud solutions.',
        start_url: '/',
        display: 'standalone',
        background_color: '#02040a',
        theme_color: '#02040a',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
