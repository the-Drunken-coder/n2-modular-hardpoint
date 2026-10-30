// Prescribed assembly sequence. The CAD supplies each installed physical pose.
// Translations move complete physical parts; they are not contact simulation.
const clamp = x => Math.max(0, Math.min(1, x));
export const ramp = (t, start, end) => clamp((t - start) / (end - start));
export function installationState(value) {
  if (!Number.isFinite(value)) throw new Error('Installation phase must be finite.');
  const phase = Math.max(0, Math.min(4, value));
  return {
    phase,
    module_fraction: 1 - ramp(phase, 1, 2),
    hatch_fraction: ramp(phase, 0, 1) * (1 - ramp(phase, 3, 4)),
    screw_fraction: 1 - ramp(phase, 2, 3),
    screws_visible: phase >= .9,
    stage: Math.min(4, Math.floor(phase + .00001)),
  };
}
