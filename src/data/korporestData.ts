// ============================================================
// KORPOREST PERGAMINO — Central Data Store
// Edit this file to update all site content
// ============================================================

export const IMAGE_ASSETS = {
  logo: '/images/Logo-korporest.jpg',
  fachadaPrincipal: '/images/Fachada_principal.jpg',
  fachadaFrente: '/images/Fachada_frente.jpg',
  pilatesReformer: '/images/Pilates_reformer.jpg',
  vendasTraccionCorta: '/images/Vendas-traccion-corta.jpg',
};

export const SITE = {
  name: 'KORPOREST',
  location: 'Pergamino',
  fullName: 'KORPOREST Pergamino',
  tagline: 'Kinesiología, Rehabilitación Traumatológica y Flebolinfática',
  description:
    'Centro de Kinesiología y Fisiatría dirigido por las licenciadas Gisela Pou y Vanesa Pou, con años de trayectoria en rehabilitación integral del paciente.',
  address: 'Merced 1271 · Pergamino · Buenos Aires',
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJeZOc9021uZURpVkXxnUEVJQ',
};

export const CONTACTS = [
  {
    id: 'vanesa',
    label: 'WhatsApp Vanesa Pou',
    display: '2477 336785',
    waNumber: '5492477336785',
    waUrl: 'https://wa.me/5492477336785',
  },
  {
    id: 'gisela',
    label: 'WhatsApp Gisela Pou',
    display: '2477 361059',
    waNumber: '5492477361059',
    waUrl: 'https://wa.me/5492477361059',
  },
];

export const PRIMARY_WA = CONTACTS[0].waUrl;
export const GOOGLE_REVIEW_URL = SITE.googleReviewUrl;

export const TEAM = [
  {
    id: 'gisela',
    name: 'Lic. Gisela Pou',
    title: 'Licenciada en Kinesiología y Fisiatría',
    area: 'Rehabilitación Traumatológica & Kinesiopilates',
    description:
      'Especialista en rehabilitación traumatológica y kinesiopilates. Aborda cada lesión con un enfoque integral, combinando técnicas manuales, ejercicio terapéutico y educación del paciente para lograr una recuperación completa y duradera.',
    color: 'coral',
  },
  {
    id: 'vanesa',
    name: 'Lic. Vanesa Pou',
    title: 'Licenciada en Kinesiología y Fisiatría',
    area: 'Rehabilitación Vascular, Flebolinfática y Oncológica',
    description:
      'Especialista en rehabilitación vascular, flebolinfática y oncológica. Acompaña al paciente en las tres etapas del proceso oncológico: prehabilitación antes del tratamiento, durante el mismo y en el postoperatorio, con técnicas específicas para el manejo del linfedema y la recuperación funcional. La derivación temprana apenas recibido el diagnóstico médico es clave para una mejor evolución.',
    color: 'beige',
  },
];

export const SPECIALTIES = [
  {
    id: 'traumatologica',
    icon: 'Bone',
    title: 'Rehabilitación Traumatológica',
    description:
      'Recuperación funcional tras lesiones musculo-esqueléticas, cirugías ortopédicas y traumatismos. Protocolo individualizado desde la evaluación hasta el alta.',
    area: 'gisela',
  },
  {
    id: 'kinesiopilates',
    icon: 'Activity',
    title: 'Kinesiopilates',
    description:
      'Método Pilates aplicado con criterio kinesiológico para mejorar la postura, el control motor y la fuerza del core. Ideal para rehabilitación y prevención.',
    area: 'gisela',
  },
  {
    id: 'flebologica',
    icon: 'Heart',
    title: 'Kinesiología Flebolinfática',
    description:
      'Diagnóstico y tratamiento del linfedema primario y secundario, insuficiencia venosa y patologías vasculares periféricas con terapia descongestiva compleja.',
    area: 'vanesa',
  },
  {
    id: 'oncologica',
    icon: 'Shield',
    title: 'Kinesiología Oncológica',
    description:
      'Tratamiento especializado en las tres etapas del proceso oncológico: prehabilitación antes del tratamiento, durante el mismo y después. Incluye manejo del linfedema oncológico y recuperación de la funcionalidad. La derivación temprana apenas recibido el diagnóstico médico es fundamental para optimizar resultados.',
    area: 'vanesa',
    highlight: true,
  },
  {
    id: 'drenaje',
    icon: 'Droplets',
    title: 'Drenaje Linfático Manual',
    description:
      'Técnica manual especializada para estimular el sistema linfático, reducir edemas y mejorar la circulación. Aplicado con protocolos internacionales certificados.',
    area: 'vanesa',
  },
  {
    id: 'kinetaping',
    icon: 'Zap',
    title: 'Kinetaping',
    description:
      'Vendaje neuromuscular para soporte articular, reducción del dolor, mejora de la propiocepción y facilitación del movimiento sin limitar el rango articular.',
    area: 'gisela',
  },
  {
    id: 'prevencion',
    icon: 'Target',
    title: 'Prevención de Lesiones',
    description:
      'Evaluación funcional y diseño de programas preventivos para deportistas y pacientes con riesgo de lesión. Análisis postural y corrección de patrones de movimiento.',
    area: 'gisela',
  },
  {
    id: 'diagnostico',
    icon: 'Stethoscope',
    title: 'Diagnóstico Kinesiológico',
    description:
      'Evaluación exhaustiva del paciente para establecer un diagnóstico funcional preciso y definir el plan de tratamiento más adecuado a cada situación particular.',
    area: 'both',
  },
];

export const PRODUCTS = [
  {
    id: 'vendas-corta',
    name: 'Vendas de Tracción Corta',
    subtitle: 'Tratamiento de Linfedema',
    description:
      'Vendas de baja elasticidad indicadas para el tratamiento descongestivo del linfedema y la terapia compresiva. Disponibles en distintos anchos.',
    icon: 'Layers',
    waMessage: 'Hola! Me gustaría consultar sobre disponibilidad y tallas de las Vendas de Tracción Corta.',
  },
  {
    id: 'vendas-larga',
    name: 'Vendas de Tracción Larga',
    subtitle: 'Vendas Elásticas',
    description:
      'Vendas elásticas de alta elasticidad para vendaje compresivo, soporte articular y tratamiento vascular. Disponibles en distintos anchos y materiales.',
    icon: 'Bandage',
    waMessage: 'Hola! Me gustaría consultar sobre disponibilidad de las Vendas de Tracción Larga (elásticas).',
  },
  {
    id: 'lauda-socks',
    name: 'Medias Lauda Socks',
    subtitle: 'Con y Sin Puntera',
    description:
      'Medias de compresión terapéutica de la marca Lauda, disponibles con y sin puntera. Indicadas para insuficiencia venosa, linfedema y postoperatorio vascular.',
    icon: 'Layers',
    waMessage: 'Hola! Me gustaría consultar sobre disponibilidad y tallas de las Medias Lauda Socks (con y sin puntera).',
  },
  {
    id: 'sox',
    name: 'Medias SOX',
    subtitle: 'Clásicas y Deportivas',
    description:
      'Medias de compresión de la línea SOX en sus versiones clásicas y deportivas. Indicadas para uso diario, actividad física y prevención vascular.',
    icon: 'Activity',
    waMessage: 'Hola! Me gustaría consultar sobre disponibilidad y modelos de las Medias SOX (clásicas y deportivas).',
  },
  {
    id: 'tiras-elongacion',
    name: 'Tiras de Elongación',
    subtitle: 'Material Terapéutico',
    description:
      'Tiras para ejercicios de elongación y estiramiento terapéutico. Indicadas para rehabilitación, prevención y complemento del tratamiento kinésico.',
    icon: 'Stretch',
    waMessage: 'Hola! Me gustaría consultar sobre disponibilidad de las Tiras de Elongación.',
  },
  {
    id: 'taping',
    name: 'Taping Neuromuscular',
    subtitle: 'Vendaje Funcional',
    description:
      'Tiras de vendaje neuromuscular para soporte articular, reducción del dolor, mejora de la propiocepción y facilitación del movimiento sin limitar el rango articular.',
    icon: 'Zap',
    waMessage: 'Hola! Me gustaría consultar sobre disponibilidad del Taping Neuromuscular.',
  },
];

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Productos', href: '#productos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
];

export const CONTACT_TOPICS = [
  'Rehabilitación Traumatológica',
  'Kinesiopilates',
  'Kinesiología Flebolinfática',
  'Kinesiología Oncológica',
  'Drenaje Linfático Manual',
  'Kinetaping',
  'Prevención de Lesiones',
  'Diagnóstico Kinesiológico',
  'Productos e Insumos',
  'Consulta General / Turnos',
];
