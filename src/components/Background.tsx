import { useEffect, useState } from "react";
import { AmbientMesh } from "./backgrounds/AmbientMesh";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

// The canvas animates via requestAnimationFrame, which the reduced-motion rule
// in index.css cannot reach, so the preference is handled by not mounting it.
const Background: React.FC = () => {
  const [reducedMotion, setReducedMotion] = useState(
    () => window.matchMedia(REDUCED_MOTION).matches
  );

  useEffect(() => {
    const query = window.matchMedia(REDUCED_MOTION);
    const onChange = () => setReducedMotion(query.matches);

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  if (reducedMotion) return null;

  return (
    // Dimming the whole canvas fades nodes and edges together. Safe because the
    // canvas paints the same colour as the page, so only the mesh loses weight.
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-60">
      <AmbientMesh
        nodeCount={40}
        connectionDistance={400}
        motionSpeed={0.3}
        edgeOpacity={0.6}
        nodeSize={5}
        nodeGlow={0.5}
        bgOpacity={1}
        bgColor="#141414"
        nodeColor="#d35f35"
        edgeColor="#d35f35"
      />
    </div>
  );
};

export default Background;
