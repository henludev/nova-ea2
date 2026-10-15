// Completa las funciones conservando estas firmas. Requisitos en docs/retos.md.
export function filtrarServicios(lista, categoria) {
  // TODO R1: devolver una nueva lista; "Todas" incluye todos los servicios.
  return [...lista];
}
export function validarUrgencia(prioridad, motivo) {
  // TODO R2: devolver "" si cumple; mensaje si alta tiene menos de 15 caracteres útiles.
  return prioridad === 'alta' ? 'R2 pendiente: implementa la justificación de prioridad alta.' : '';
}
export function cambiarEstado(solicitudes, id, nuevoEstado, actor, auditoria) {
  // TODO R3: técnico demo; estados válidos; rechazar sin cambios; auditar una vez.
  return false;
}
export function registrarEvento(consentimiento, nombre, servicio, eventos) {
  // TODO R4: registrar solo con aceptación, evento permitido y servicio válido.
  return false;
}
