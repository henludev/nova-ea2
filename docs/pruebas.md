# Registro de pruebas EA2

## Descripción de las comprobaciones

Realicé la revisión del funcionamiento del proyecto durante su desarrollo, comprobando los filtros del catálogo, la validación de los formularios, los permisos para cambiar estados y el comportamiento de la interfaz en diferentes tamaños de pantalla. También revisé el funcionamiento del consentimiento y la disponibilidad de las versiones publicadas.

**Fecha de ejecución local:** 15 de octubre de 2026.

**Entorno de trabajo:** Node.js y navegador integrado, mediante la dirección [http://127.0.0.1:5500](http://127.0.0.1:5500).

Los datos de solicitudes y analítica utilizados durante las comprobaciones locales se reinician al recargar la página.

## Registro de comprobaciones

| ID | Acción realizada | Resultado esperado | Resultado obtenido | Estado | Evidencia |
|---|---|---|---|---|---|
| P01 | Revisé el catálogo y probé los filtros Todas y Red. | Mostrar 5 tarjetas en Todas y 1 en Red, sin modificar la fuente de datos ni el selector. | Comprobé que Todas mostró 5 tarjetas y Red mostró 1. El selector conservó sus 5 servicios y la función devolvió una lista nueva sin modificar la fuente original. | Aprobado | [Captura del catálogo](capturas/p01-catalogo-red.png) y comprobación del funcionamiento del filtro. |
| P02 | Revisé el comportamiento del filtro cuando no hay coincidencias. | Mostrar una lista vacía y un mensaje informativo. | Comprobé que la búsqueda sin coincidencias devolvió una lista vacía y que la interfaz mostró el mensaje «No hay servicios en esta categoría». | Aprobado | Comprobación del filtro y del mensaje mostrado. |
| P03 | Revisé la validación de una solicitud de alta con un motivo de 14 caracteres y con espacios. | Mostrar un error, mantener el foco en el campo correspondiente y no registrar solicitudes inválidas. | Comprobé que el motivo de 14 caracteres fue rechazado, que el foco quedó en el campo del motivo de urgencia y que el total de solicitudes permaneció en 0. También revisé el rechazo de entradas compuestas únicamente por espacios. | Aprobado | [Captura del mensaje de error](capturas/p03-urgencia-error.png) y revisión del formulario. |
| P04 | Revisé el registro de una solicitud de alta con un motivo de 15 caracteres y de una solicitud media sin motivo. | Aceptar ambos casos válidos y registrar cada envío confirmado. | Comprobé que ambos casos fueron aceptados y que cada envío confirmado agregó una solicitud. | Aprobado | Comprobación del registro de solicitudes válidas. |
| P05 | Revisé los permisos del solicitante para cambiar el estado de una solicitud. | Impedir el cambio de estado y evitar modificaciones en la auditoría. | Comprobé que la operación fue rechazada y que el estado y el historial de auditoría permanecieron sin cambios. | Aprobado | Comprobación de los permisos y del estado de la solicitud. |
| P06 | Revisé los cambios de estado realizados por un técnico y la repetición del mismo estado. | Registrar el cambio con el estado anterior y el nuevo, sin duplicar registros cuando no hay cambios. | Comprobé que el estado cambió de Pendiente a Resuelto y que repetir Resuelto no generó una nueva entrada en la auditoría. También revisé la información mostrada en la interfaz. | Aprobado | [Captura del historial de cambios](capturas/p06-auditoria.png) y revisión de los estados. |
| P07 | Revisé el envío de solicitudes sin decisión de consentimiento y después de rechazarlo. | Permitir el registro de solicitudes válidas sin generar eventos de consentimiento innecesarios. | Comprobé que una solicitud enviada sin tomar una decisión registró 0 eventos. Después de rechazar el consentimiento, dos envíos válidos generaron solicitudes sin aumentar el contador de eventos. | Aprobado | Comprobación del formulario y del contador de eventos. |
| P08 | Revisé el registro de eventos después de aceptar el consentimiento, seleccionar un servicio y enviar una solicitud. | Registrar un evento por cada acción y almacenar únicamente las claves previstas. | Comprobé que la selección y el envío aceptados sumaron 2 eventos. También revisé que la función registrara únicamente `event`, `service_id` y `categoria`. | Aprobado | [Captura del consentimiento](capturas/p08-consentimiento.png) y revisión de los datos registrados. |
| P09 | Revisé el comportamiento después de revocar el consentimiento y volver a seleccionar servicios y enviar solicitudes. | Evitar el aumento del historial de eventos y conservar los registros anteriores. | Comprobé que las nuevas selecciones y los envíos no aumentaron el total de eventos y que los 2 eventos anteriores permanecieron contabilizados. | Aprobado | Comprobación del contador y conservación del historial de eventos. |
| P10 | Revisé la interfaz en anchos de 320, 768 y 1440 px, así como la navegación con teclado y el zoom al 200 %. | Mantener el contenido visible y operable, sin desbordamiento horizontal. | Comprobé que no hubo desbordamiento horizontal en los tres tamaños de pantalla ni con el zoom al 200 %. También revisé la navegación con Tab y el cierre de la ayuda con Escape, incluida la devolución del foco. | Aprobado | Revisión de la interfaz en diferentes tamaños, navegación con teclado y zoom. |
| P11 | Revisé el mensaje de confirmación con el movimiento normal y con la preferencia de movimiento reducido. | Mostrar la confirmación sin animación cuando se solicita reducir el movimiento. | Comprobé que la confirmación utilizó la animación habitual y que, al activar la preferencia de movimiento reducido, la animación se desactivó y el mensaje siguió visible. | Aprobado | Comprobación del mensaje de confirmación y de la preferencia de movimiento reducido. |
| P12 | Revisé la integración de los cambios y la disponibilidad de las versiones publicadas. | Confirmar la integración de los cambios y la disponibilidad de Preview y producción. | Revisé que el PR #1 se fusionó con las comprobaciones aprobadas. También verifiqué la disponibilidad de Preview y producción, correspondientes a las referencias de versión indicadas. | Aprobado | [Pull request en GitHub](https://github.com/henludev/nova-ea2/pull/1), [Preview](https://nova-ea2-git-release-ea2-hramosh-6342.vercel.app) y [producción](https://nova-ea2.vercel.app). |

## Conclusión

Durante el desarrollo del proyecto revisé el funcionamiento de los principales componentes y el comportamiento de la interfaz ante diferentes acciones del usuario. Estas comprobaciones me permitieron revisar el catálogo de servicios, las validaciones de los formularios, los permisos, el historial de cambios, la gestión del consentimiento y la adaptación a diferentes tamaños de pantalla.

También revisé la integración de los cambios y la disponibilidad de las versiones publicadas. Para algunas tareas conté con apoyo de herramientas de inteligencia artificial, que utilicé como complemento de mi trabajo durante el desarrollo y la revisión del proyecto.

Este registro resume los resultados y las evidencias disponibles al momento de realizar las comprobaciones.

