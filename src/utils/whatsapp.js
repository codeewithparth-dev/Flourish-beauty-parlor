const WHATSAPP_NUMBER = "923242008736";
export const WHATSAPP_URL = `https://wa.me/message/UMRGJYGBJDNBF1`;
export const WHATSAPP_SERVICE_URL = (serviceName) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Flourish%20Beauty%20Parlour!%20%F0%9F%8C%B8%20I%20am%20interested%20in%20booking%20a%20${encodeURIComponent(serviceName)}%20appointment.%20Please%20let%20me%20know%20the%20availability!`;