import React, { useEffect, useState } from "react";
import styles from "./ScrollIndicator.module.css";

const ScrollIndicator: React.FC = () => {
    const [visible, setVisible] = useState(true);
    const handleScroll = () => {
        setVisible(false);
      };

    useEffect(() => {
        // Set a timeout to hide the indicator after 5 seconds
        const timeout = setTimeout(() => setVisible(false), 5000);

        // Listen to the scroll event
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener and timeout when component unmounts
        return () => {
            clearTimeout(timeout);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (!visible) {
        return null;
    }
    
    return (
        <div className={styles["down-arrow"]}></div>
    )
}

export default ScrollIndicator;