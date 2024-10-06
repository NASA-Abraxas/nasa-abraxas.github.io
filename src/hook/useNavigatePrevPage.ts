import { useLocation, useNavigate } from "react-router-dom";

export const useNavigatePrevPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return () => {
    navigate(location.pathname.replace(/\/page\d+/, (match) => {
      const index = parseInt(match.slice(5)) - 1;
      return index < 0 ? '/page0' : `/page${index}`;
    }));
  }
}