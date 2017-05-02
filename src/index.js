export function mapToArray(map) {
  return Object.keys(map).map(k => map[k]);
}