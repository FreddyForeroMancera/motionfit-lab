import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      // Bloquear todo el sitio mientras estemos en el subdominio temporal de Netlify.
      // Cuando tengamos el dominio oficial, cambiaremos esto a Allow: '/'
      disallow: '/',
    },
  }
}
