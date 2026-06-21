export interface FAQ {
  question: string;
  answer: string;
}

export interface CourseIconDef {
  name: string;
  label: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  lieux: string;
  duree: string;
  temperature: string;
  intensite: string;
  accessoires: string[];
  faqs: FAQ[];
  informations_pratiques: string[];
  icons?: CourseIconDef[];
  relatedCourses?: string[];
}

export const courses: Course[] = [
  {
    id: 'calisthenie',
    title: 'Calisthénie',
    description: "Développez une force fonctionnelle impressionnante en utilisant uniquement le poids de votre corps. Maîtrisez les mouvements fondamentaux et avancés.",
    lieux: "En Studio, En Ligne, En Entreprise",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1000&auto=format&fit=crop",
    duree: "60 minutes",
    temperature: "Ambiante",
    intensite: "Élevée",
    accessoires: ["Tenue confortable", "Pieds nus"],
    relatedCourses: ["animal-flow", "handstand", "entrainement-fonctionnel"],
    icons: [
      { name: "Dumbbell", label: "Force" },
      { name: "Zap", label: "Intensité" },
      { name: "Scale", label: "Équilibre" }
    ],
    faqs: [
      {
        question: "Qu'est-ce que la Calisthénie ?",
        answer: "La calisthénie est une méthode d'entraînement physique consistant en une variété de mouvements sollicitant de grands groupes musculaires, comme courir, se tenir debout, saisir, pousser, etc. Ces exercices sont souvent effectués sans équipement."
      },
      {
        question: "À qui s'adresse ce cours ?",
        answer: "Ce cours s'adresse à toute personne désirant développer sa force relative, son endurance musculaire et sa coordination. Les exercices sont adaptables, ce qui permet d'accueillir aussi bien les débutants que les athlètes confirmés."
      },
      {
        question: "Est-ce que ce cours est recommandé pour les débutants ?",
        answer: "Oui, tout à fait. Nos coachs adaptent les progressions pour que vous puissiez maîtriser les bases avant de passer aux mouvements plus complexes."
      }
    ],
    informations_pratiques: [
      "Arrivez 10 minutes avant le début de la séance.",
      "L'utilisation de chaussures d'intérieur propres est obligatoire en studio."
    ]
  },
  {
    id: 'animal-flow',
    title: 'Animal Flow',
    description: "Améliorez votre mobilité, force et endurance avec ce programme fluide et dynamique basé sur les mouvements d'animaux au sol.",
    lieux: "En Studio, En Ligne",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop",
    duree: "45 minutes",
    temperature: "Ambiante",
    intensite: "Modérée",
    accessoires: ["Tapis (optionnel)"],
    relatedCourses: ["calisthenie", "danse", "pilates"],
    icons: [
      { name: "PawPrint", label: "Instinct Animal" },
      { name: "RefreshCcw", label: "Fluidité" },
      { name: "HeartPulse", label: "Endurance" }
    ],
    faqs: [
      {
        question: "Qu'est-ce que l'Animal Flow ?",
        answer: "L'Animal Flow est un programme de conditionnement physique basé sur le poids du corps, combinant des mouvements terrestres quadri-pédiques avec des éléments d'exercices au sol pour créer un entraînement amusant et stimulant."
      },
      {
        question: "Bénéfices concrets :",
        answer: "Amélioration de la mobilité, flexibilité, stabilité, puissance, endurance, habileté neuromusculaire et coordination."
      }
    ],
    informations_pratiques: [
      "La pratique se fait idéalement pieds nus ou en chaussettes antidérapantes."
    ]
  },
  {
    id: 'yoga',
    title: 'Yoga',
    description: "Pratique douce et structurée axée sur la respiration, la flexibilité et l'alignement corporel pour décompresser et renforcer.",
    lieux: "En Studio, En Ligne, En Entreprise",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop",
    duree: "60 minutes",
    temperature: "Ambiante ou Chaude (selon session)",
    intensite: "Relax à Modérée",
    accessoires: ["Tapis de yoga", "Briques", "Sangle"],
    relatedCourses: ["pilates", "danse"],
    icons: [
      { name: "Flower2", label: "Sérénité / Zen" },
      { name: "Wind", label: "Respiration" },
      { name: "AlignEndVertical", label: "Alignement Corporel" }
    ],
    faqs: [
      {
        question: "Quel style de Yoga enseignez-vous ?",
        answer: "Nous combinons des éléments de Hatha et Vinyasa pour offrir une pratique fluide mais centrée sur l'alignement et la pleine conscience."
      },
      {
        question: "Est-ce que ce cours est recommandé pour les débutants ?",
        answer: "Absolument. Des modifications sont proposées pour chaque posture afin de s'adapter à la souplesse et à l'anatomie de chacun."
      }
    ],
    informations_pratiques: [
      "Le port d'un vêtement confortable permettant une grande amplitude de mouvement est conseillé.",
      "Évitez de manger un repas lourd 2 heures avant la pratique."
    ]
  },
  {
    id: 'pilates',
    title: 'Pilates',
    description: "Renforcez vos muscles profonds, améliorez votre posture et prévenez les blessures grâce à un travail centré sur le tronc.",
    lieux: "En Studio, En Ligne",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop",
    duree: "50 minutes",
    temperature: "Ambiante",
    intensite: "Modérée",
    accessoires: ["Tapis", "Anneau de Pilates"],
    relatedCourses: ["yoga", "animal-flow"],
    icons: [
      { name: "Crosshair", label: "Précision" },
      { name: "Shield", label: "Stabilité / Core" },
      { name: "Timer", label: "Contrôle" }
    ],
    faqs: [
      {
        question: "Quelle est la différence entre le Yoga et le Pilates ?",
        answer: "Le Pilates se concentre principalement sur le renforcement du 'centre' (abdominaux, dos, fessiers) avec des mouvements précis et contrôlés, tandis que le Yoga intègre davantage de flexibilité globale et d'aspects méditatifs."
      }
    ],
    informations_pratiques: [
      "Prévoyez des vêtements près du corps pour que le professeur puisse bien voir votre alignement."
    ]
  },
  {
    id: 'handstand',
    title: 'Handstand',
    description: "Découvrez les techniques d'équilibre sur les mains. Renforcez vos épaules et votre gainage tout en développant votre proprioception.",
    lieux: "En Studio",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
    duree: "60 minutes",
    temperature: "Ambiante",
    intensite: "Modérée à Élevée",
    accessoires: ["Bandes de poignets (recommandé)"],
    relatedCourses: ["calisthenie", "entrainement-fonctionnel"],
    icons: [
      { name: "ArrowUpFromLine", "label": "Inversion" },
      { name: "Dumbbell", label: "Force Épaules" },
      { name: "Crosshair", label: "Concentration" }
    ],
    faqs: [
      {
        question: "Dois-je déjà savoir faire le poirier ?",
        answer: "Non, ce cours est conçu pour vous apprendre la technique depuis la base : renforcement des poignets, alignement postural, et exercices contre le mur."
      }
    ],
    informations_pratiques: [
      "Échauffez bien vos poignets avant le cours.",
      "Ne pas porter de bijoux aux mains ou aux poignets."
    ]
  },
  {
    id: 'entrainement-fonctionnel',
    title: 'Entrainement Fonctionnel',
    description: "Optimisez vos capacités physiques pour la vie de tous les jours avec des exercices globaux, Kettlebell et Mace Warrior.",
    lieux: "En Studio, En Ligne, En Entreprise",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    duree: "45-60 minutes",
    temperature: "Ambiante",
    intensite: "Élevée",
    accessoires: ["Souliers de sport", "serviette", "bouteille d'eau"],
    relatedCourses: ["calisthenie", "handstand"],
    icons: [
      { name: "Flame", label: "Haute Intensité" },
      { name: "Timer", label: "Intervalles" },
      { name: "Activity", label: "Performance" }
    ],
    faqs: [
      {
        question: "Qu'est-ce que l'entraînement fonctionnel ?",
        answer: "C'est un type d'entraînement qui prépare le corps aux activités de la vie quotidienne. Il implique des mouvements qui simulent vos mouvements habituels (soulever, tirer, pousser)."
      }
    ],
    informations_pratiques: [
      "Des chaussures d'entraînement appropriées sont requises en studio."
    ]
  },
  {
    id: 'danse',
    title: 'Danse Naturelle',
    description: "Exprimez-vous par le mouvement. Améliorez votre coordination et votre cardio tout en vous libérant du stress.",
    lieux: "En Studio",
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1000&auto=format&fit=crop",
    duree: "60 minutes",
    temperature: "Ambiante",
    intensite: "Cardio - Modérée",
    accessoires: ["Vêtements légers", "Pieds nus"],
    relatedCourses: ["yoga", "animal-flow"],
    icons: [
      { name: "Music", label: "Rythme Musical" },
      { name: "Smile", label: "Expression Libre" },
      { name: "Activity", label: "Mouvement" }
    ],
    faqs: [
      {
        question: "Quel style de danse est enseigné ?",
        answer: "C'est un mélange de danse intuitive et d'expression corporelle libre, conçu pour bouger en harmonie avec son corps sans chercher la perfection technique."
      }
    ],
    informations_pratiques: [
      "Aucune expérience en danse n'est requise. Venez comme vous êtes !"
    ]
  }
];

export function getCourseById(id: string): Course | undefined {
  return courses.find(course => course.id === id);
}
