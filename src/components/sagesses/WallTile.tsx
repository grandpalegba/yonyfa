import { useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";
import wallVideoAsset from "@/assets/wall-ambience.mp4.asset.json";
import type { Consultation } from "@/data/consultations";

interface Props {
  consultation: Consultation;
  index: number;
  onClick: (c: Consultation) => void;
}

const WallTile = memo(({ consultation, index, onClick }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Apply per-tile loop offset for "many voices" feel
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const handleLoaded = () => {
      try {
        v.currentTime = consultation.videoOffset % (v.duration || 5);
        v.play().catch(() => {});
      } catch {}
    };
    v.addEventListener("loadedmetadata", handleLoaded);
    return () => v.removeEventListener("loadedmetadata", handleLoaded);
  }, [consultation.videoOffset]);

  // Subtle organic floating per tile
  const driftDelay = (index % 7) * 0.4;
  const driftDuration = 6 + (index % 5);

  return (
    <motion.button
      onClick={() => onClick(consultation)}
      className="relative aspect-square overflow-hidden rounded-[3px] cursor-pointer group"
      animate={{
        y: [0, -2, 0, 2, 0],
        opacity: [0.75, 0.95, 0.75],
      }}
      transition={{
        duration: driftDuration,
        delay: driftDelay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.25, zIndex: 10, opacity: 1 }}
      style={{
        boxShadow: "inset 0 0 0 1px hsl(36, 25%, 18%)",
      }}
      aria-label={`Consultation de ${consultation.author}`}
    >
      <video
        ref={videoRef}
        src={wallVideoAsset.url}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: `hue-rotate(${(consultation.videoSeed % 40) - 20}deg) brightness(${0.5 + (consultation.videoSeed % 30) / 100})`,
        }}
      />
      {/* Warm overlay for cohesion */}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-60"
        style={{
          background: `radial-gradient(circle at ${(consultation.videoSeed % 100)}% ${((consultation.videoSeed * 3) % 100)}%, hsl(32, 60%, 52%, 0.4), transparent 70%)`,
        }}
      />
      {/* Gentle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle, transparent 40%, hsl(30, 10%, 8%, 0.5) 100%)",
        }}
      />
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: "inset 0 0 12px hsl(40, 60%, 65%, 0.6)" }}
      />
    </motion.button>
  );
});

WallTile.displayName = "WallTile";
export default WallTile;
