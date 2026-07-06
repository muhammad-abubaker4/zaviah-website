import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

type AnimatedCounterProps = {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
};

const AnimatedCounter = ({
  end,
  suffix = "",
  prefix = "",
  duration = 1800,
  className,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
