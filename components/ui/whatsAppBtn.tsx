'use client';

import { whatsAppUrl } from "@/lib/whatsapp";
import { WhatsappIcon } from "./icons";

export const WhatsAppBtn = () => {
    return (
        <button aria-label="Contactar por WhatsApp"
            title="Contactar por WhatsApp" onClick={() => window.open(whatsAppUrl(), "_blank", "noopener,noreferrer")} className="whatsApp_btn fixed bottom-14 right-8 w-14 h-14 bg-[#25D366] text-white rounded-full hover:shadow-2xl p-3 cursor-pointer hover:scale-[1.2] transition-all z-50">
            <WhatsappIcon></WhatsappIcon>
        </button>
    )
}