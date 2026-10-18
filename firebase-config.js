// =====================================================================
//  CONFIGURACIÓN — lo único que tienes que editar
//  Lo que va entre [CORCHETES] son datos que faltan por llenar.
// =====================================================================

// 1) Configuración del proyecto de Firebase (no la cambies)
export const firebaseConfig = {
  apiKey: "PEGA_AQUI",
  authDomain: "PEGA_AQUI",
  projectId: "PEGA_AQUI",
  storageBucket: "PEGA_AQUI",
  messagingSenderId: "PEGA_AQUI",
  appId: "PEGA_AQUI"
};

// 2) Datos del negocio
export const NEGOCIO = {
  // ---- Identidad: se pinta solo en todas las páginas ----
  nombre: "Zona Plateada",
  nombreGoogle: "Barbería Zona Plateada",
  lema: "Barbería clásica en Zona Plateada, Pachuca. Una experiencia y tu mejor versión.",
  descripcion: "barbería clásica",

  direccion: {
    calle: "Plaza La Luz, Camino Real de La Plata 200, Loc. 5 A",
    zona: "Zona Plateada",
    cp: "42084",
    ciudad: "Pachuca",
    ciudadOficial: "Pachuca de Soto",
    estado: "Hgo."
  },

  google: { placeId: "", estrellas: 0, resenas: 0 },

  whatsapp: "527717830698",
  redes: {
    facebook: "",
    instagram: "https://www.instagram.com/barberiazonaplateada/",
    tiktok: ""
  },

  colores: { principal: "#C9D1DB", claro: "#E8EDF3", suave: "#8D98A6" },

  legal: { responsable: "Barbería Zona Plateada", correo: "" },

  // ---- Tarjeta de sellos ----
  sellosPorTarjeta: 10,
  premioMitad: { en: 5,  texto: "Mascarilla gratis" },
  premioFinal: { en: 10, texto: "50% de descuento en corte" },
  pro: { premioMitad: "Exfoliación facial gratis", premioFinal: "Corte gratis" },
  promoCumple: "Corte a mitad de precio en tu mes de cumpleaños",

  promociones: [],

  // ---- Precios (de su historia de Instagram "Precios") ----
  notaPrecios: "Grecas desde $50. Precios sujetos a cambio.",
  servicios: [
    { id: "corte",          nombre: "Corte de cabello",                          sinCita: 230, conCita: 230, min: 40 },
    { id: "corte-junior",   nombre: "Corte junior",                              sinCita: 200, conCita: 200, min: 40 },
    { id: "paquete-clasico",nombre: "Paquete clásico (corte y barba)",           sinCita: 350, conCita: 350, min: 60 },
    { id: "paquete-diamante",nombre: "Paquete diamante (corte o barba y facial completo)", sinCita: 400, conCita: 400, min: 70 },
    { id: "paquete-rey",    nombre: "Paquete rey (corte, barba y facial completo)", sinCita: 550, conCita: 550, min: 90 },
    { id: "barba-bigote",   nombre: "Barba y bigote (vaporizador y toalla caliente)", sinCita: 230, conCita: 230, min: 40 },
    { id: "bigote",         nombre: "Recorte y alineado de bigote",              sinCita: 100, conCita: 100, min: 20 },
    { id: "afeitado",       nombre: "Afeitado de cabeza",                        sinCita: 300, conCita: 300, min: 40 },
    { id: "cejas",          nombre: "Perfilado de cejas a navaja",               sinCita: 80,  conCita: 80,  min: 20 },
    { id: "grecas",         nombre: "Grecas",                                    sinCita: 50,  conCita: 50,  min: 20, desde: true },
    { id: "cera",           nombre: "Depilación con cera (nariz, orejas y cejas)", sinCita: 180, conCita: 180, min: 30 },
    { id: "mascarilla",     nombre: "Mascarilla (carbón o hidratante)",          sinCita: 150, conCita: 150, min: 30 },
    { id: "exfoliacion",    nombre: "Exfoliación facial",                        sinCita: 120, conCita: 120, min: 30 },
    { id: "facial-premium", nombre: "Facial premium (7 pasos)",                  sinCita: 350, conCita: 350, min: 60 }
  ],

  beneficios: {
    sinCita: ["Tarjeta de sellos"],
    conCita: ["Tu lugar apartado", "Recordatorio por WhatsApp", "Tarjeta de sellos"]
  },

  // ---- Horario (0 = domingo … 6 = sábado): lunes a domingo ----
  horario: { dias: [0, 1, 2, 3, 4, 5, 6], abre: "09:30", cierra: "20:30" },
  citas: { cadaMinutos: 30, primera: "09:30", ultima: "20:00", diasAdelante: 30 },

  pago: { banco: "", titular: "", tarjeta: "", clabe: "" },

  barberos: [
    {
      nombre: "Zona Plateada",
      rol: "Barbería clásica",
      descripcion: "Cortes, barba y facial con el estilo clásico de Zona Plateada. Agenda tu cita y vive la experiencia.",
      foto: "barbero1.jpg",
      instagram: "https://www.instagram.com/barberiazonaplateada/",
      tiktok: "",
      facebook: ""
    }
  ]
};
