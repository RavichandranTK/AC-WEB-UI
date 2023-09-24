import { YouTube } from "@mui/icons-material";
import { YOUTUBE_URL } from "../constant/AppConstat";

export const YoutubeWeb = () => {
  return (
    <a
      className="social youtube"
      href={YOUTUBE_URL}
      target="_blank"
      alt="youtube"
      rel="noreferrer"
    >
      <YouTube />
    </a>
  );
};
