"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loading from "@/components/anim/Loading";

type LoadingWrapperProps = {
  children: React.ReactNode;
  loadingTime?: number; // Optional prop to control the loading time
};

export default function LoadingWrapper({ children, loadingTime = 3000 }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after `loadingTime` milliseconds
    }, loadingTime);

    return () => clearTimeout(timer); // Clean up the timer
  }, [loadingTime]);

  return isLoading ? (
    <Loading /> // Show loading during the loading state
  ) : (
    <motion.div
      initial={{ opacity: 0 }} // Start with 0 opacity
      animate={{ opacity: 1 }} // Fade to full opacity
      transition={{ duration: 0.5 }} // Duration of the fade effect
    >
      {children}
    </motion.div>
  );
}
