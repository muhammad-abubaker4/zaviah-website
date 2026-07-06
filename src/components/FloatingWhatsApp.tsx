import { WHATSAPP_URL } from "@/lib/constants";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
  >
    <WhatsAppIcon className="h-7 w-7" />
  </a>
);

export default FloatingWhatsApp;
