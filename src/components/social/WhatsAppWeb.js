import { WhatsApp } from "@mui/icons-material";
import { WHATSAPP_URL } from "../constant/AppConstat";

export const WhatsAppWeb = () => {
  return (
    <a
      className="social whatsapp"
      href={WHATSAPP_URL}
      target="_blank"
      alt="whatsapp"
      rel="noreferrer"
    >
      <WhatsApp />
    </a>
  );
};
