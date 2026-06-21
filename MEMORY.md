# MotionFit-Lab - Memoria del Proyecto

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

## 🚀 Cómo correr el proyecto localmente
1. Abre una terminal en la ruta del proyecto (`web/`).
2. Ejecuta el entorno de desarrollo:
   ```bash
   npm run dev
   ```
3. Navega a [http://localhost:3000](http://localhost:3000) en tu navegador.
