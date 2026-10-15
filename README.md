# Nova Servicios TI base EA2
Continuación del portal de semana 5. R1-R4 están implementados. PR #1, Preview y
producción están registrados en docs/pruebas.md. P10 verificó Tab/Escape y el viewport
equivalente a 200%; falta aplicar zoom real del navegador.
Abre la carpeta completa en VS Code. Requiere Node.js 22 o posterior.
Ejecuta `npm run dev` y abre http://127.0.0.1:5500. No abras index.html por file://.
No se necesitan paquetes externos ni npm install. Ctrl+C detiene el servidor.
`npm run check:project` revisa sintaxis y JSON; `npm test` revisa el servidor heredado.
Estos checks pasan aunque los retos sigan pendientes. La corrección funcional es independiente.
Prueba manualmente docs/pruebas.md después de implementar.

Base recibida: portal Nova EA2 de semana 5, incluido su HTML, catálogo JSON, estilos,
interacciones y controles de EA2.
Cambios propios: filtro exacto de servicios, validación de urgencia, cambios de estado
con auditoría en memoria, medición local con consentimiento y animación accesible.
Herramientas y uso de IA: GitHub Copilot ayudó a implementar y revisar estos cambios;
el autor debe verificar, probar y poder explicar el código entregado.
Archivos principales: public/assets/js/ea2-logica.js y public/assets/css/ea2.css.
Se conserva la navegación, los controles existentes y los datos solo en memoria.
El modelo conceptual previo se resume en docs/modelo-continuidad.md; no se requiere base de datos real.
No copies respuestas de la versión docente. Identifica autor, base, cambios propios y apoyo de IA.

Despliegue Vercel: repositorio raíz que contiene package.json; Framework Other; sin comando
de build; Output Directory public (vercel.json incluido). No combines Root Directory public
con Output Directory public. Preview se verifica antes del merge. Main sirve a producción.
El workflow incluye checks básicos; para bloquear merge hay que configurar checks requeridos
en protección de rama o ruleset. El workflow solo no impone esa restricción.

Entrega: ZIP sin .git/node_modules/.env, repo, PR, Preview, producción, SHA de cada despliegue.
Plantilla: autor ___; base recibida ___; cambios ___; herramientas y uso IA ___;
repo ___; PR ___; Preview/SHA ___; producción/SHA ___; incidencias externas ___.

Continuidad hasta la semana 7: corregir observaciones, practicar revisión de HTML/CSS/JS,
modelo, integración, SEO y flujo de publicación. El EF solicitado es TEÓRICO; este proyecto
es apoyo de aprendizaje y no añade un entregable práctico calificado al EF.
