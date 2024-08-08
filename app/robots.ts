import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/threads/*',
        },
        sitemap: 'https://whisper.furkan.one/sitemap.xml',
    }
}