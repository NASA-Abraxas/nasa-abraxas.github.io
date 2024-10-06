import { useLocation, useNavigate } from "react-router-dom";

export const useNavigateNextPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return () => {
    navigate(location.pathname.replace(/\/page\d+/, (match) => {
      const index = parseInt(match.slice(5)) + 1;
      return `/page${index}`;
    }));
  }
}