# MotionFit-Lab - Memoria del Proyecto

> **⚠️ INSTRUCCIÓN CRÍTICA PARA EL AGENTE:**
> **SIEMPRE**, después de completar cada acción o tarea solicitada, debes actualizar y almacenar lo realizado en este archivo `MEMORY.md`. Esto es vital para mantener el contexto actualizado y poder retomar el trabajo en cualquier momento sin perder información.

Este documento almacena el estado actual, la configuración y los últimos cambios del proyecto para poder retomar el trabajo sin perder contexto.

## 🛠️ Stack Tecnológico
- **Framework**: Next.js (v16.2.7) - App Router.
- **Librería UI**: React (v19.2.4).
- **Lenguaje**: TypeScript.
- **Base de Datos & ORM**: Prisma (v6.19.3) con SQLite (`dev.db`).
- **Autenticación**: NextAuth.js (v4.24.14) y `bcryptjs` para contraseñas.
- **Estilos**: CSS Modules (`page.module.css`).

## 💾 Modelos de Datos Actuales (Prisma)
- **User**: Usuarios con roles (`ADMIN`, `CLIENT`), planes (`NONE`, `STANDARD`, `VIP`, `VIP_PREMIUM`, `VIP_ENTERPRISE`) y estado de cuenta.
- **Article**: Blog/Noticias (título, slug, extracto, contenido, categoría).
- **ContactMessage**: Mensajes de contacto recibidos desde la web.

## 📝 Últimos Cambios Realizados (UI/UX)
Nos enfocamos en mejorar la barra de navegación superior (`Header.tsx` y `page.module.css`):
1. **Posición**: El menú ahora es `fixed` (`top: 0`, `left: 0`, `right: 0`), quedando anclado a la parte superior de la ventana al hacer scroll.
2. **Fondo**: Se estableció un fondo **100% blanco sólido** (`#ffffff`), eliminando las transparencias y efectos de blur previos.
3. **Bordes**: Se eliminó la curvatura superior para encajar de borde a borde con el navegador, conservando una curvatura de `24px` únicamente en las esquinas inferiores (`border-radius: 0 0 24px 24px`).
4. **Legibilidad**: El color del texto de los enlaces de navegación y del menú hamburguesa móvil se cambió a gris oscuro (`var(--color-text-dark)`) para que contraste perfectamente sobre el fondo blanco.
5. **Logo**: Se incrementó el tamaño del logo en un **20%** (de `173x46` a `208x55`), dándole mayor protagonismo sin afectar la estructura general del header.
6. **Espaciado (Padding)**: Se recortó aún más el fondo blanco del menú (eje Y) dejando un padding mínimo (`0.5rem`) para exponer lo máximo posible la imagen del *hero* en todas las páginas.
7. **Espaciado del Contenido Principal**: Se ajustó el `padding-top` a `80px` en el contenedor principal (`.mainWrapper`) para acercar el contenido ligeramente a la barra fija, logrando la distancia visual exacta solicitada.
8. **Correcciones Responsivas (Móvil)**: 
   - El botón hamburguesa ("✕") ahora cambia dinámicamente a color blanco cuando el menú está abierto, asegurando su visibilidad sobre el fondo oscuro.
   - Se redujo el `padding` vertical del menú en la versión móvil (`max-width: 900px`) a `0.5rem`, igualando la delgadez y elegancia obtenida previamente en la versión de escritorio.
9. **Barra Social Flotante**: Se creó e integró un menú vertical flotante alineado totalmente a la izquierda de la pantalla (`FloatingSocial.tsx`), el cual contiene iconos interactivos de Facebook, Instagram y TikTok con colores representativos y un sutil efecto de expansión al pasar el ratón. Este bloque está presente en todas las páginas del sitio (`layout.tsx`).
   - *Ajuste posterior*: Se redujo el tamaño de estos botones sociales y de sus iconos en un 15% para que luzcan más discretos y sutiles en la pantalla.
   - *Ajuste posterior*: Se unificó el color de fondo de los 3 botones a un tono gris oscuro unificado (`#2c2c2c`), manteniendo el color blanco para los íconos de las redes, logrando un estilo más minimalista y elegante.
10. **Testimonios**: Se creó un componente reutilizable `<Testimonials />` y se insertó al final de las páginas Accueil, En Studio, En Ligne y En Entreprise.
11. **Banner Promocional**: Se añadió un banner animado de 1200x150px en la página de inicio, programado puramente con CSS y animaciones fluidas.
12. **Unificación del Catálogo de Cursos**: Se reestructuró la página `/nos-cours` para listar todos los programas en una cuadrícula unificada y se simplificó la navegación eliminando el submenú del `Header`.
13. **Páginas Dinámicas de Cursos**: Se implementó enrutamiento dinámico (`/nos-cours/[id]`) soportado por un repositorio centralizado de datos (`courses.ts`). Cada curso abre su propia landing page con atributos (duración, intensidad), sección de preguntas frecuentes y detalles prácticos, respetando el diseño de referencia.
14. **Integración de Marca (Branding)**: Se refactorizaron los colores de las páginas de cursos (`/nos-cours` y `/nos-cours/[id]`), descartando los colores temporales (beige y amarillo) a favor de la paleta oficial del sitio `MotionFit-Lab` (`var(--color-accent)` Cyan, oscuros profundos y fondos blancos/grises limpios), creando un aspecto mucho más premium y cohesivo.
15. **Redirección CTA Cursos**: Se actualizó el botón "Réservez maintenant" en todas las páginas de detalles dinámicas de cursos (`/nos-cours/[id]`) para que dirijan directamente a la página de planes de suscripción (`/abonnements`) en lugar de al formulario de contacto.
16. **Etiquetas de Ubicación (Lieux)**: Se mejoró visualmente la lista de lugares ("En Studio, En Ligne, En Entreprise") en las páginas de cursos. Ahora, en lugar de estar separadas solo por comas, cada ubicación se renderiza individualmente dentro de su propia etiqueta gráfica ("pill badge") con bordes redondeados y estilo Cyan sutil, elevando la estética UI.
17. **Íconos Vectoriales Descriptivos (`lucide-react`)**: Se reemplazaron los "puntos" vacíos en las tarjetas de cursos por íconos minimalistas vectoriales reales instalando la librería `lucide-react`. Cada curso cuenta ahora con 3 íconos seleccionados cuidadosamente para comunicar sus atributos principales (ej: Pilates usa `Crosshair` para precisión, `Shield` para Core y `Timer` para control). Adicionalmente, se desarrollaron *Tooltips* CSS personalizados e instantáneos (usando `data-tooltip` y pseudo-elementos). Para garantizar que este texto descriptivo siempre sea visible independientemente del dispositivo o reglas de recorte CSS (`overflow`), se reforzó inyectando el atributo nativo de HTML (`title`) en todas las instancias de la grilla de cursos, la página de detalles individual y la vista de empresas.
18. **Venta Cruzada (Cross-Selling)**: Se agregó un sistema de recomendación dinámica de cursos al final de las páginas de detalle (`/nos-cours/[id]`) bajo el título "Vous pourriez aussi aimer". Este sistema define relaciones lógicas entre cursos similares (ej. Pilates sugiere Yoga y Animal Flow) y los renderiza en un Grid atractivo con un botón "Voir le cours" para potenciar el engagement y la retención del usuario en la web.
19. **Página En Entreprise (`/en-entreprise`)**: Se construyó la página corporativa "En Entreprise" clonando la estructura y textos del sitio legacy. Se diseñó con React y CSS Modules, adaptando la estética antigua al nuevo sistema de diseño moderno (color Cyan `var(--color-accent)`, fondos oscuros, hover effects premium). Incluye 7 secciones estructuradas: Hero (con imagen de fondo oscurecida), Intro (Formules), Beneficios (Cards), Grilla de Cursos, Servicios Adicionales, Galería de Actividades y Call-to-Action. Además, se añadió un botón directo en la barra de navegación principal.
20. **Modal de Cotización Corporativa**: Se reemplazó el enlace de contacto genérico al final de la página `/en-entreprise` por un botón dinámico que despliega un modal (`QuoteModal.tsx`). Este formulario de captura de *leads* incluye campos específicos para empresas: Nombre de empresa, Contacto, Correo, Teléfono, Tamaño de empresa (dropdown) y Selección de servicios (checkboxes), brindando una experiencia premium de generación de prospectos sin abandonar la página.
21. **Correcciones UI/UX Adicionales**: 
    - Se corrigió el fondo del modal de cotizaciones (`QuoteModal`) a blanco sólido para garantizar la legibilidad del texto.
    - Se incorporó un botón principal interactivo en el *Hero* de `/en-entreprise` para lanzar el modal de cotización.
    - Se transformaron las etiquetas estáticas de ubicaciones ("Lieux") en botones interactivos (`<Link>`) con efectos hover, conectando directamente con las páginas de adquisición (`/abonnements` o `/en-entreprise`).
    - Se rediseñó el Footer incrementando el tamaño del logotipo en un 150% y añadiendo una fila elegante de íconos sociales (Facebook, Instagram, TikTok) creados con SVGs nativos para evitar conflictos de importación de librerías.

## 🚀 Cómo correr el proyecto localmente
1. Abre una terminal en la ruta del proyecto (`web/`).
2. Ejecuta el entorno de desarrollo:
   ```bash
   npm run dev
   ```
3. Navega a [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🌐 Despliegue y Control de Versiones
- **Repositorio**: Conectado a GitHub (`origin/main`).
- **Hosting**: Netlify (despliegue automático configurado en base a la rama `main`).
- **Último Estado**: Se generó un commit ("UI/UX updates: corporate modal fixes, interactive location tags, footer redesign") consolidando las últimas mejoras de interacción y diseño del sitio, subido a GitHub para su despliegue automático en Netlify.
