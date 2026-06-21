import React from 'react';

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "name": "MotionFit-Lab",
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop",
    "@id": "https://motionfit-lab.com",
    "url": "https://motionfit-lab.com",
    "telephone": "+1(418) 575-5540",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "Québec",
      "addressRegion": "QC",
      "postalCode": "G1N 4G3",
      "addressCountry": "CA"
    },
    "description": "MotionFit-Lab est un studio de mouvement, posture, entraînement fonctionnel et optimisation humaine.",
    "email": "info@motionfit-lab.com",
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
