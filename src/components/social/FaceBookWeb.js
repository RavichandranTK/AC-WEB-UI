import { Facebook } from "@mui/icons-material";
import { FACEBOOK_URL } from "../constant/AppConstat";

export const FaceBookWeb = () => {
  return (
    <a
      className="social faceBook"
      href={FACEBOOK_URL}
      target="_blank"
      alt="fb"
      rel="noreferrer"
    >
      <Facebook />
    </a>
  );
};
