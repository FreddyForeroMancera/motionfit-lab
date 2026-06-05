const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const articles = [
  {
    title: "Optimisation de la posture en télétravail",
    date: "12 OCT, 2026",
    category: "SANTÉ & POSTURE",
    excerpt: "Découvrez les 5 mouvements clés pour relâcher les tensions accumulées pendant les longues journées devant l'écran...",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop",
    slug: "optimisation-posture-teletravail",
    content: "<p>Le télétravail a bouleversé nos habitudes posturales. Passer des heures devant un écran sans équipement ergonomique adapté peut causer de sévères tensions musculaires.</p><h2>1. La règle du 90-90-90</h2><p>Assurez-vous que vos chevilles, genoux et hanches forment des angles de 90 degrés. Vos pieds doivent reposer à plat sur le sol ou sur un repose-pied.</p><h2>2. Des pauses actives</h2><p>Levez-vous toutes les 45 minutes. Un simple étirement des pectoraux et une rotation du cou peuvent prévenir les douleurs chroniques.</p>"
  },
  {
    title: "Comment le Kettlebell transforme votre force fonctionnelle",
    date: "08 OCT, 2026",
    category: "ENTRAÎNEMENT",
    excerpt: "Le Kettlebell est un outil puissant pour développer une force qui se transfère directement dans votre vie quotidienne...",
    imageUrl: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1000&auto=format&fit=crop",
    slug: "kettlebell-force-fonctionnelle",
    content: "<p>Contrairement aux machines de musculation classiques qui isolent les muscles, le Kettlebell force votre corps à travailler comme une unité connectée.</p><h3>Le mouvement de balancier (Swing)</h3><p>Le Kettlebell Swing est l'un des exercices les plus puissants pour développer la chaîne postérieure. Il travaille les fessiers, ischio-jambiers et le bas du dos tout en brûlant énormément de calories.</p><blockquote>Le Kettlebell n'est pas juste un poids, c'est un amplificateur de mouvement fonctionnel.</blockquote>"
  },
  {
    title: "L'importance de la récupération métabolique",
    date: "05 OCT, 2026",
    category: "NUTRITION & MÉTABOLISME",
    excerpt: "S'entraîner fort n'est que la moitié du travail. Comprendre comment optimiser sa récupération est essentiel...",
    imageUrl: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=1000&auto=format&fit=crop",
    slug: "recuperation-metabolique",
    content: "<p>Beaucoup d'athlètes négligent la phase la plus importante de l'entraînement : le repos. C'est pendant la récupération que les adaptations physiologiques se produisent.</p><ul><li>Hydratation adéquate</li><li>Sommeil de qualité (7-9 heures)</li><li>Nutrition riche en micronutriments</li><li>Gestion du stress actif</li></ul>"
  },
  {
    title: "Bienfaits du Yoga pour la stabilité articulaire",
    date: "28 SEP, 2026",
    category: "SANTÉ & POSTURE",
    excerpt: "Une pratique régulière du yoga aide à renforcer les muscles profonds stabilisateurs et prévenir les blessures...",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop",
    slug: "yoga-stabilite-articulaire",
    content: "<p>Le Yoga n'est pas que flexibilité. Les postures tenues isométriquement exigent une énorme stabilité des articulations majeures : épaules, hanches et genoux.</p><p>Pratiquer 2 à 3 fois par semaine peut transformer complètement votre perception corporelle et réduire drastiquement les risques de blessures lors d'entraînements plus lourds.</p>"
  },
  {
    title: "Nutrition pré-entraînement : que manger ?",
    date: "20 SEP, 2026",
    category: "NUTRITION",
    excerpt: "Optimisez vos performances en salle avec ces conseils simples sur la nutrition avant vos séances d'entraînement...",
    imageUrl: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1000&auto=format&fit=crop",
    slug: "nutrition-pre-entrainement",
    content: "<p>L'énergie que vous apportez à votre entraînement dépend directement de votre dernier repas. Un bon repas pré-entraînement doit contenir des glucides complexes pour l'énergie soutenue et une portion modérée de protéines.</p><h3>Exemples de collations :</h3><ol><li>Flocons d'avoine avec des fruits rouges (1h avant)</li><li>Une banane avec du beurre d'amande (30 min avant)</li><li>Un yaourt grec nature avec du miel</li></ol>"
  },
  {
    title: "Introduction à l'Animal Flow",
    date: "15 SEP, 2026",
    category: "ENTRAÎNEMENT",
    excerpt: "Découvrez cette méthode révolutionnaire basée sur le poids du corps pour améliorer coordination et agilité...",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000&auto=format&fit=crop",
    slug: "introduction-animal-flow",
    content: "<p>L'Animal Flow combine des mouvements au sol fluides inspirés de la gymnastique, du breakdance et des mouvements d'animaux. C'est un entraînement qui connecte votre esprit à chaque fibre musculaire.</p><p>En intégrant l'Animal Flow à votre routine, vous développerez une mobilité exceptionnelle, une force de base en acier et une conscience proprioceptive unique.</p>"
  }
];

async function main() {
  console.log("Seeding articles...");
  for (const article of articles) {
    const exists = await prisma.article.findUnique({ where: { slug: article.slug } });
    if (!exists) {
      await prisma.article.create({ data: article });
      console.log(`Created: ${article.title}`);
    } else {
      console.log(`Skipped (already exists): ${article.title}`);
    }
  }
  console.log("Seeding complete.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
