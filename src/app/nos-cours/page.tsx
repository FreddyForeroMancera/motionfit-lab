import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from 'lucide-react';
import styles from "./page.module.css";
import rootStyles from "../page.module.css";

const CourseIcon = ({ name }: { name: string }) => {
  const Icon = (LucideIcons as any)[name];
  return Icon ? <Icon size={18} /> : <span>●</span>;
};
import { courses } from "../../data/courses";

export const metadata = {
  title: "Nos Cours | MotionFit-Lab",
  description: "Découvrez tous nos cours et programmes d'entraînement : Calisthénie, Yoga, Pilates, Animal Flow et plus.",
};

export default function NosCours() {
  return (
    <main className={rootStyles.mainWrapper}>
      <Header />
      
      <section className={styles.headerSection}>
        <div className="container">
          <h1 className={styles.mainTitle}>TOUS NOS COURS</h1>
          <p className={styles.subtitle}>Découvrez notre sélection de programmes conçus pour optimiser votre mouvement et votre santé.</p>
        </div>
      </section>

      <section className={styles.coursesSection}>
        <div className={`container ${styles.gridContainer}`}>
          {courses.map((course) => (
            <div key={course.id} className={styles.courseCard}>
              <Link href={`/nos-cours/${course.id}`} className={styles.imageWrapper}>
                <Image 
                  src={course.image} 
                  alt={course.title} 
                  fill 
                  style={{ objectFit: 'cover' }} 
                />
              </Link>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{course.title}</h2>
                <p className={styles.cardDescription}>{course.description}</p>
                
                <div className={styles.lieuxBox}>
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

                <div className={styles.cardFooter}>
                  <div className={styles.iconsRow}>
                    {course.icons?.map((iconDef, idx) => (
                      <span key={idx} className={styles.accentIcon} data-tooltip={iconDef.label} title={iconDef.label}>
                        <CourseIcon name={iconDef.name} />
                      </span>
                    ))}
                  </div>
                  <Link href={`/nos-cours/${course.id}`} className={styles.actionButton}>
                    <span className={styles.arrowUpRight}>↗</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
