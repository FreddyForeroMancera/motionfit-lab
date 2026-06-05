export interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  imageUrl: string;
  slug: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Optimisation de la posture en télétravail",
    date: "12 OCT, 2026",
    category: "SANTÉ & POSTURE",
    excerpt: "Découvrez les 5 mouvements clés pour relâcher les tensions accumulées pendant les longues journées devant l'écran...",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop",
    slug: "optimisation-posture-teletravail"
  },
  {
    id: "2",
    title: "Comment le Kettlebell transforme votre force fonctionnelle",
    date: "08 OCT, 2026",
    category: "ENTRAÎNEMENT",
    excerpt: "Le Kettlebell est un outil puissant pour développer une force qui se transfère directement dans votre vie quotidienne...",
    imageUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1000&auto=format&fit=crop",
    slug: "kettlebell-force-fonctionnelle"
  },
  {
    id: "3",
    title: "L'importance de la récupération métabolique",
    date: "05 OCT, 2026",
    category: "NUTRITION & MÉTABOLISME",
    excerpt: "S'entraîner fort n'est que la moitié du travail. Comprendre comment optimiser sa récupération est essentiel...",
    imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop",
    slug: "recuperation-metabolique"
  },
  {
    id: "4",
    title: "Bienfaits du Yoga pour la stabilité articulaire",
    date: "28 SEP, 2026",
    category: "SANTÉ & POSTURE",
    excerpt: "Une pratique régulière du yoga aide à renforcer les muscles profonds stabilisateurs et prévenir les blessures...",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
    slug: "yoga-stabilite-articulaire"
  },
  {
    id: "5",
    title: "Nutrition pré-entraînement : que manger ?",
    date: "20 SEP, 2026",
    category: "NUTRITION",
    excerpt: "Optimisez vos performances en salle avec ces conseils simples sur la nutrition avant vos séances d'entraînement...",
    imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1000&auto=format&fit=crop",
    slug: "nutrition-pre-entrainement"
  },
  {
    id: "6",
    title: "Introduction à l'Animal Flow",
    date: "15 SEP, 2026",
    category: "ENTRAÎNEMENT",
    excerpt: "Découvrez cette méthode révolutionnaire basée sur le poids du corps pour améliorer coordination et agilité...",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop",
    slug: "introduction-animal-flow"
  }
];
