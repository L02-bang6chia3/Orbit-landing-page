import { motion } from "framer-motion";
import { useImmersiveParallax } from "../hooks/useImmersiveParallax";
import { Starfield } from "./Starfield";

export function ImmersiveBackdrop() {
  const { starX, starY, dustBlueX, dustBlueY, dustPinkX, dustPinkY } =
    useImmersiveParallax();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-[20%] top-[8%] h-[min(90vw,720px)] w-[min(90vw,720px)] rounded-full blur-[100px]"
        style={{
          x: dustBlueX,
          y: dustBlueY,
          background: "rgba(46, 144, 255, 0.05)",
        }}
        aria-hidden
      />
      <motion.div
        className="absolute -right-[15%] top-[35%] h-[min(85vw,640px)] w-[min(85vw,640px)] rounded-full blur-[110px]"
        style={{
          x: dustPinkX,
          y: dustPinkY,
          background: "rgba(232, 121, 249, 0.05)",
        }}
        aria-hidden
      />
      <motion.div
        className="absolute bottom-[-10%] left-[25%] h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full blur-[90px]"
        style={{
          x: dustPinkX,
          y: dustBlueY,
          background: "rgba(232, 121, 249, 0.04)",
        }}
        aria-hidden
      />

      <motion.div
        className="absolute inset-0"
        style={{ x: starX, y: starY }}
        aria-hidden
      >
        <Starfield count={72} />
      </motion.div>
    </div>
  );
}
