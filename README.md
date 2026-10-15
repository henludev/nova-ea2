# Nova Servicios TI EA2

## Base recibida
Portal de práctica de la semana 5: interfaz HTML/CSS, navegación, catálogo JSON, formulario, ayuda, tabla de solicitudes y controles/listeners EA2 provistos. La base no incluía la lógica de los retos R1-R4 ni la animación de confirmación.

## Cambios propios
- R1: filtro exacto por categoría que devuelve una lista nueva y conserva el catálogo fuente.
- R2: justificación mínima de 15 caracteres útiles para prioridad alta; el formulario muestra error y lleva el foco al campo.
- R3: cambios de estado permitidos al rol demostrativo técnico, con auditoría en memoria y rechazo de estados/solicitudes inválidos.
- R4: eventos locales solo con aceptación, con nombres permitidos y únicamente las claves event, service_id y categoria.
- Animación breve de cambio de estado, desactivada con `prefers-reduced-motion`.
- Registro de pruebas, evidencia de navegador y configuración de GitHub/Vercel.

## Ejecución local
Requiere Node.js 22 o posterior. No necesita instalar paquetes.

```powershell
npm run dev
```

Abre http://127.0.0.1:5500. No abras `public/index.html` mediante `file://`. Detén el servidor con Ctrl+C.

Verificaciones locales:

```powershell
npm run check:project
npm test
```

Solicitudes, auditoría, eventos y preferencia solo viven en memoria y desaparecen al recargar. El selector de roles es demostrativo; no hay autenticación, backend ni envío a proveedores analíticos.

## Pruebas y capturas
El detalle de los 12 casos y sus resultados está en [docs/pruebas.md](docs/pruebas.md).

- [Catálogo y filtro por categoría](docs/capturas/p01-catalogo-red.png)
- [Error de urgencia y foco](docs/capturas/p03-urgencia-error.png)
- [Auditoría de cambio de estado](docs/capturas/p06-auditoria.png)
- [Preferencia y eventos locales](docs/capturas/p08-consentimiento.png)

## Apoyo de IA
Se utilizó como apoyo durante la implementación y la revisión de la documentación. Los resultados verificados están en [docs/pruebas.md](docs/pruebas.md).

## Repositorio y despliegue
- Repositorio: [henludev/nova-ea2](https://github.com/henludev/nova-ea2)
- PR fusionado: [#1](https://github.com/henludev/nova-ea2/pull/1)
- Merge a `main`: `e66ed40f64a4d5b8a12b84d05713306c3720e2b3`
- Preview de `release/ea2`: [nova-ea2-git-release-ea2-hramosh-6342.vercel.app](https://nova-ea2-git-release-ea2-hramosh-6342.vercel.app), SHA `a6d7d7b476764807d3b2c359c88c19ccdbdc2310`
- Producción: [nova-ea2.vercel.app](https://nova-ea2.vercel.app), SHA `3d0fa690ddbe7236959f3528a956d829bba9b312`

Vercel usa Framework Other, raíz `./`, comando de build vacío y directorio de salida `public`. Los checks de GitHub Actions pasaron. No se compró dominio ni se configuró Supabase.