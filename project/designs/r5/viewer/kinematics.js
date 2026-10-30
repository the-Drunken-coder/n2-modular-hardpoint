// The viewer and the exported CAD use the same reviewed crank law. Missing or
// incompatible metadata is an error, not an invitation to animate a guess.
export function kinematicState(joint, fraction, mode = 'operating') {
  const radius = joint.crank_radius_mm ?? joint.radius_mm, range = joint.angle_range_deg;
  if (!(Number.isFinite(radius) && radius > 0 && Array.isArray(range) && range.length === 2 && range.every(Number.isFinite)
    && Array.isArray(joint.pivot) && joint.pivot.length === 3 && joint.pivot.every(Number.isFinite)
    && Number.isFinite(joint.operating_travel_mm) && Number.isFinite(fraction))) throw new Error('Incomplete CAD kinematic metadata.');
  if (!['operating', 'envelope'].includes(mode)) throw new Error('Unknown CAD motion mode.');
  const [initial, limit] = range;
  const end = mode === 'operating' ? joint.operating_angle_deg : limit;
  const rangeTravel = joint.travel_mm ?? joint.operating_travel_mm;
  const travel = mode === 'operating' ? joint.operating_travel_mm : rangeTravel;
  if (!Number.isFinite(end) || !Number.isFinite(travel) || end < initial || end > limit || travel < 0 || travel > rangeTravel) throw new Error('Incomplete or invalid operating motion metadata.');
  const angle = initial + (end - initial) * Math.max(0, Math.min(1, fraction));
  const radians = angle * Math.PI / 180;
  const stroke = radius * (Math.cos(initial * Math.PI / 180) - Math.cos(radians));
  const endpoint = radius * (Math.cos(initial * Math.PI / 180) - Math.cos(end * Math.PI / 180));
  const limitTravel = radius * (Math.cos(initial * Math.PI / 180) - Math.cos(limit * Math.PI / 180));
  if (Math.abs(endpoint - travel) > 1e-6 || Math.abs(limitTravel - rangeTravel) > 1e-6) throw new Error('CAD crank angle and keeper travel disagree.');
  return { angle_deg: angle, delta_deg: angle - initial, stroke_mm: stroke,
    pin_x_mm: joint.pivot[0] - radius * Math.cos(radians), pin_z_mm: joint.pivot[2] + radius * Math.sin(radians) };
}
