export default function viewGeolocation(lat, long) {
  return `[${lat.toFixed(7)}, ${long.toFixed(7)}]`;
}
