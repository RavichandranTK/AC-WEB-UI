import { Instagram as Insta} from "@mui/icons-material";
import { INSTAGRAM_URL } from "../constant/AppConstat";

export const InstaWeb = () => {
  return (
    <a
      className="social instagram"
      href={INSTAGRAM_URL}
      target="_blank"
      alt="instagram"
      rel="noreferrer"
    >
      <Insta />
    </a>
  );
};
