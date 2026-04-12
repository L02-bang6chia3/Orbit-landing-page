import { useEffect } from "react";
import {
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export function useImmersiveParallax() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const onMove = (e) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      mouseX.set((e.clientX / w - 0.5) * 2);
      mouseY.set((e.clientY / h - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  const mx = useSpring(mouseX, { stiffness: 38, damping: 22 });
  const my = useSpring(mouseY, { stiffness: 38, damping: 22 });
  const { scrollY } = useScroll();
  const scrollSmooth = useSpring(scrollY, { stiffness: 90, damping: 32 });

  const scrollStars = useTransform(scrollSmooth, (y) => y * 0.042);
  const scrollDustA = useTransform(scrollSmooth, (y) => y * 0.026);
  const scrollDustB = useTransform(scrollSmooth, (y) => y * 0.017);

  const starX = useTransform(mx, (x) => x * 28);
  const starY = useTransform([my, scrollStars], ([m, s]) => m * 20 + s);

  const dustBlueX = useTransform(mx, (x) => x * -36);
  const dustBlueY = useTransform([my, scrollDustA], ([m, s]) => m * -24 + s);

  const dustPinkX = useTransform(mx, (x) => x * 34);
  const dustPinkY = useTransform([my, scrollDustB], ([m, s]) => m * 26 + s * 0.9);

  return { starX, starY, dustBlueX, dustBlueY, dustPinkX, dustPinkY };
}
