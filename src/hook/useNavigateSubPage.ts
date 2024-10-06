import { useLocation, useNavigate } from "react-router-dom";

export const useNavigateSubPage = (subpage:string) => {
  const location = useLocation();
  const navigate = useNavigate();
  return () => {
    navigate(location.pathname.replace(/\/page\d+/, (match) => {
      const index = parseInt(match.slice(5));
      return `/page${index}/${subpage}`;
    }));
  }
}