import { ReactComponent as TwitterLogo } from "../../assets/icons/twitter.svg";
import { TWITTER_URL } from "../constant/AppConstat";

export const TwitterWeb = () => {
  return (
    <a
      className="social twitter"
      href={TWITTER_URL}
      target="_blank"
      alt="twitter"
      rel="noreferrer"
    >
      <TwitterLogo />
    </a>
  );
};
