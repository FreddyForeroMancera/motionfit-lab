import { getCourseById } from "../../../data/courses";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from 'lucide-react';
import styles from "./page.module.css";

const CourseIcon = ({ name }: { name: string }) => {
  const Icon = (LucideIcons as any)[name];
  return Icon ? <Icon size={20} /> : <span>●</span>;
};
import rootStyles from "../../page.module.css";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const course = getCourseById(resolvedParams.id);
  if (!course) return { title: "Cours introuvable" };
  return {
    title: `${course.title} | MotionFit-Lab`,
    description: course.description,
  };
}

export default async function CourseDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const course = getCourseById(resolvedParams.id);
  
  const relatedCoursesList = course?.relatedCourses
    ?.map((id) => getCourseById(id))
    .filter((c) => c !== undefined);

  if (!course) {
    notFound();
  }

  return (
    <main className={rootStyles.mainWrapper}>
      <Header theme="light" />
      
      <div className={styles.pageContainer}>
        {/* TOP HEADER SECTION */}
        <div className={styles.topSection}>
          <Link href="/nos-cours" className={styles.backLink}>
            <span className={styles.backIcon}>←</span> Tous les cours
          </Link>
          <h1 className={styles.courseTitle}>{course.title}</h1>
          
          <div className={styles.lieuxBadge}>
            <strong>Lieux :</strong>{' '}
            {course.lieux.split(', ').map((lieu, i) => {
              const getLieuLink = (l: string) => l === "En Entreprise" ? "/en-entreprise" : "/abonnements";
              return (
                <Link href={getLieuLink(lieu)} key={i} className={styles.lieuTag}>
                  {lieu}
                </Link>
              );
            })}
          </div>

          <div className={styles.iconsRow}>
            {course.icons?.map((iconDef, idx) => (
              <span key={idx} className={styles.accentIcon} data-tooltip={iconDef.label} title={iconDef.label}>
                <CourseIcon name={iconDef.name} />
              </span>
            ))}
          </div>
        </div>

        {/* QUICK INFO CARDS */}
        <div className={styles.quickInfoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.infoCardHeader}>Durée</div>
            <div className={styles.infoCardBody}>
              <span className={styles.infoIcon}>⏱</span>
              <p>{course.duree}</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoCardHeader}>Température</div>
            <div className={styles.infoCardBody}>
              <span className={styles.infoIcon}>🌡</span>
              <p>{course.temperature}</p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoCardHeader}>Intensité</div>
            <div className={styles.infoCardBody}>
              <span className={styles.infoIcon}>⚡</span>
              <p>{course.intensite}</p>
            </div>
          </div>
        </div>

        <div className={styles.accessoiresCard}>
          <div className={styles.infoCardHeader}>Accessoires</div>
          <div className={styles.infoCardBody}>
            <span className={styles.infoIcon}>🎒</span>
            <p>{course.accessoires}</p>
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className={styles.mainGrid}>
          
          {/* LEFT COLUMN: Image & CTA */}
          <div className={styles.leftColumn}>
            <div className={styles.mainImageWrapper}>
              <Image 
                src={course.image} 
                alt={course.title} 
                fill 
                style={{ objectFit: 'cover' }} 
                priority
              />
            </div>
            
            <div className={styles.reserveBox}>
              <h3>Réservez votre place</h3>
              <p>Réservez dès maintenant votre cours et découvrez tous les bienfaits de cette pratique !</p>
              <Link href="/abonnements" className={styles.reserveBtn}>
                Réserver maintenant <span className={styles.arrowIcon}>→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: FAQs & Info */}
          <div className={styles.rightColumn}>
            <div className={styles.faqs}>
              {course.faqs.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h4 className={styles.faqQuestion}>
                    <span className={styles.dash}>—</span> {faq.question}
                  </h4>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className={styles.pratiqueBox}>
              <div className={styles.pratiqueIcon}>✺</div>
              <div className={styles.pratiqueContent}>
                <h4>Informations pratiques</h4>
                <h5>À noter</h5>
                <ul>
                  {course.informations_pratiques.map((info, idx) => (
                    <li key={idx}>{info}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* RELATED COURSES (CROSS-SELLING) */}
        {relatedCoursesList && relatedCoursesList.length > 0 && (
          <section className={styles.relatedSection}>
            <h2 className={styles.relatedTitle}>Vous pourriez aussi aimer</h2>
            <div className={styles.relatedGrid}>
              {relatedCoursesList.map((relatedCourse, idx) => (
                <div key={idx} className={styles.relatedCard}>
                  <div className={styles.relatedCardImage}>
                    <Image 
                      src={relatedCourse!.image} 
                      alt={relatedCourse!.title} 
                      fill 
                      style={{ objectFit: 'cover' }} 
                    />
                  </div>
                  <div className={styles.relatedCardContent}>
                    <h4>{relatedCourse!.title}</h4>
                    <Link href={`/nos-cours/${relatedCourse!.id}`} className={styles.relatedBtn}>
                      Voir le cours
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </main>
  );
}
