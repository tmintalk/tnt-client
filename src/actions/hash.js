export function getRoomId(u1, u2) {
  if (!u1 || !u2) return;
  return u1 > u2 ? u1 + " and " + u2 : u2 + " and " + u1;
}
