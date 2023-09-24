import { Routes, Route } from "react-router-dom";
import { RouteLayout } from "./RouteLayout";
import { ComponeyDetails } from "../nav/ComponeyDetails";
import { AboutUs } from "../AboutUs";
import { HVACServices } from "../services/HVACServices";
import { BMSServices } from "../services/BMSServices";
import { WhyChooseUs } from "../WhyChooseUs";
import { ContactUs } from "../contact/ContactUs";

const RouteConfig = [
  {
    name: "/",
    path: "/",
    element: <ComponeyDetails />,
    exact: true,
  },
  {
    name: "about-us",
    path: "/about-us",
    element: <AboutUs />,
    exact: true,
  },
  {
    name: "contact-us",
    path: "/contact-us",
    element: <ContactUs />,
    exact: true,
  },
  {
    name: "service-hva",
    path: "/service-hvac",
    element: <HVACServices />,
    exact: true,
  },
  {
    name: "service-bms",
    path: "/service-bms",
    element: <BMSServices />,
    exact: true,
  },
  {
    name: "why-choose-us",
    path: "/why-choose-us",
    element: <WhyChooseUs />,
    exact: true,
  },
];

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<RouteLayout />}>
        {RouteConfig.map(({ name, path, exact, element }) => (
          <Route key={name} path={path} exact={exact} element={element} />
        ))}
      </Route>
    </Routes>
  );
};
