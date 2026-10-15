// Completa las funciones conservando estas firmas. Requisitos en docs/retos.md.
export function filtrarServicios(lista, categoria) {
  return categoria === 'Todas'
    ? [...lista]
    : lista.filter((servicio) => servicio.categoria === categoria);
}
export function validarUrgencia(prioridad, motivo) {
  if (prioridad !== 'alta') return '';
  const caracteresUtiles = typeof motivo === 'string' ? motivo.trim().length : 0;
  return caracteresUtiles >= 15
    ? ''
    : 'Justifica la prioridad alta con al menos 15 caracteres útiles.';
}
export function cambiarEstado(solicitudes, id, nuevoEstado, actor, auditoria) {
  const estados = ['Pendiente', 'En proceso', 'Resuelto', 'Cerrado/Cancelado'];
  if (
    !Array.isArray(solicitudes) ||
    !Array.isArray(auditoria) ||
    actor?.rol !== 'tecnico' ||
    !estados.includes(nuevoEstado)
  ) return false;

  const solicitud = solicitudes.find((elemento) => elemento.id === id);
  if (!solicitud || !estados.includes(solicitud.estado) || solicitud.estado === nuevoEstado) return false;

  const anterior = solicitud.estado;
  solicitud.estado = nuevoEstado;
  auditoria.push({
    id: auditoria.length + 1,
    actor_id: actor.id,
    solicitud_id: solicitud.id,
    accion: 'CAMBIO_ESTADO',
    anterior,
    nuevo: nuevoEstado,
    fecha: new Date().toISOString(),
  });
  return true;
}
export function registrarEvento(consentimiento, nombre, servicio, eventos) {
  const eventosPermitidos = ['select_service', 'submit_request'];
  const categoriasPermitidas = ['Accesos', 'Hardware', 'Red', 'Software'];
  if (
    consentimiento !== 'aceptado' ||
    !eventosPermitidos.includes(nombre) ||
    !Array.isArray(eventos) ||
    !servicio ||
    !Number.isSafeInteger(servicio.id) ||
    servicio.id <= 0 ||
    !categoriasPermitidas.includes(servicio.categoria)
  ) return false;

  eventos.push({
    event: nombre,
    service_id: String(servicio.id),
    categoria: servicio.categoria,
  });
  return true;
}
