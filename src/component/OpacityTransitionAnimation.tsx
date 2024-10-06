import { AnimatePresence, motion } from "framer-motion";
import React, { ReactElement } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import { useWindowSize } from "../hook/useWindowSize";
import { PageRedirect } from "../page/PageRedirect";

export const OpacityTransitionAnimation = ({ children, duration = 1 }:
  { children: React.ReactNode; duration?: number }) => {
  const location = useLocation();
  const dimensions = useWindowSize();

  return (
    <div style={{ ...dimensions }}>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          {React.Children.toArray(children).map((child, index) => {
            return (
              <Route path={`/page${index}/*`} key={index} element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: duration, ease: 'anticipate' }}
                  style={{ ...dimensions, position: 'absolute' }}
                >
                  {React.cloneElement(child as ReactElement, { path:`/page${index}`} )}
                </motion.div>
              }>
              </Route>
            )
          })}
          {/* redirect others to /page0 */}
          <Route path='*' element={<PageRedirect href="/page0" />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
