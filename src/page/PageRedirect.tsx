import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"

export const PageRedirect = ({ href }: { href: string }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we're not already on /page0
    if (location.pathname !== href) {
      navigate(href);
    }
  }, [location.pathname]);

  return (
    <div>
      <p>If you are not redirected, <a href={href}>click here</a>.</p>
    </div>
  );
}