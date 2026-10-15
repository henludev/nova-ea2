# Registro de pruebas EA2

Ejecución local: 2026-10-15, Node.js y navegador integrado en
http://127.0.0.1:5500. Los datos de solicitudes y analítica se reinician al recargar.
Los resultados describen las comprobaciones efectivamente realizadas; no son evidencia
de Preview ni de producción.

| ID | Acción | Esperado | Resultado real | Estado | Evidencia |
|---|---|---|---|---|---|
| P01 | Todas y luego Red | 5 y 1 tarjetas; fuente y selector intactos | Todas mostró 5 tarjetas; Red mostró 1; el selector conservó sus 5 servicios. La función devolvió una lista nueva sin cambiar la fuente. | Aprobado | Navegador local y aserciones ESM R1 |
| P02 | Filtro por categoría sin coincidencia en prueba de función | Lista vacía y mensaje en vista | Una categoría de distinta capitalización devolvió []; la vista mostró “No hay servicios en esta categoría.” | Aprobado | Navegador local y aserciones ESM R1 |
| P03 | Alta y motivo de 14 caracteres o espacios | Error y foco; ninguna solicitud | Con 14 caracteres apareció el error, el foco quedó en #motivo-urgencia y el total siguió en 0. El trim rechazó espacios. | Aprobado | Navegador local; validación ESM |
| P04 | Alta con motivo 15; media con motivo vacío | Ambos válidos; una fila por envío | Alta con 15 caracteres y media sin motivo fueron válidas; cada envío confirmado agregó una solicitud. | Aprobado | Navegador local y aserciones ESM R2 |
| P05 | Solicitante intenta cambiar estado | Ningún cambio ni auditoría | Con rol solicitante la función devolvió false; estado y auditoría permanecieron intactos. | Aprobado | Aserciones ESM R3 |
| P06 | Técnico cambia y repite estado | Una auditoría con anterior/nuevo; repetido no añade | Técnico cambió Pendiente a Resuelto; repetir Resuelto no añadió auditoría. La interfaz mostró anterior/nuevo y permitió otra transición distinta. | Aprobado | Navegador local y aserciones ESM R3 |
| P07 | Sin decisión/rechazar y enviar válido | Solicitud funciona sin nuevos eventos | Sin decisión se registró una solicitud con 0 eventos. Tras rechazar, dos envíos válidos crearon solicitudes y el contador de eventos no aumentó. | Aprobado | Navegador local R4 |
| P08 | Aceptar, elegir y enviar válido | Un evento por acción, solo tres claves | Selección y envío aceptados sumaron 2 eventos. La función agregó solo event, service_id y categoria. | Aprobado | Navegador local y aserciones ESM R4 |
| P09 | Revocar y volver a elegir | No crece historial; no se borra lo anterior | Tras rechazar, nuevas selecciones/envíos no aumentaron el total; los 2 eventos previos siguieron contabilizados. | Aprobado | Navegador local R4 |
| P10 | 320, 768, 1440 px, teclado y zoom 200 % | Contenido operable, sin recorte de página | Sin desbordamiento a 320, 768, 1440 y 720 px CSS (ancho equivalente a 200 % de 1440). Tab avanzó de nombre a correo; Escape cerró ayuda y devolvió el foco. Los atajos de zoom no cambiaron el zoom real del navegador integrado. | Parcial | Navegador local; pendiente confirmar con zoom real a 200 % |
| P11 | Reducir movimiento y cambiar estado | Confirmación visible sin animación | Normal: animation-name ea2-confirmacion. Con movimiento reducido: animation-name none y mensaje visible. | Aprobado | Navegador local, emulación prefers-reduced-motion |
| P12 | Preview/producción y SHA | Versión correspondiente y URLs accesibles | PR #1 fusionado con checks aprobados. Preview listo y verificado en https://nova-ea2-git-release-ea2-hramosh-6342.vercel.app, SHA a6d7d7b. Producción lista y verificada en https://nova-ea2.vercel.app desde main, merge SHA e66ed40. | Aprobado | PR https://github.com/henludev/nova-ea2/pull/1; Preview deployment 44xEZptQXeACHmpjrQ9PrNXkSFGu; producción SHA e66ed40 |
