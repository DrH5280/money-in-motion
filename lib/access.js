import crypto from "crypto";

const COOKIE = "mim_access";

function secret() {
  return process.env.MIM_SECRET || process.env.MIM_ACCESS_CODE || "";
}
function sign(v) {
  return crypto.createHmac("sha256", secret()).update(v).digest("base64url");
}
export function accessToken() {
  return sign("unlocked");
}
export function hasAccess(request) {
  if (!secret()) return false;
  const v = request.cookies.get(COOKIE)?.value || "";
  const t = accessToken();
  return v.length === t.length && crypto.timingSafeEqual(Buffer.from(v), Buffer.from(t));
}
export function codeMatches(code) {
  const real = String(process.env.MIM_ACCESS_CODE || "").trim().toLowerCase();
  const given = String(code || "").trim().toLowerCase();
  if (!real || real.length !== given.length) return false;
  return crypto.timingSafeEqual(Buffer.from(real), Buffer.from(given));
}
export const ACCESS_COOKIE = COOKIE;
