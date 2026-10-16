import { ACCESS_COOKIE, accessToken, codeMatches, hasAccess } from "@/lib/access";

export async function GET(request) {
  return Response.json({ unlocked: hasAccess(request) });
}

export async function POST(request) {
  const { code } = await request.json().catch(() => ({}));
  if (!codeMatches(code)) return Response.json({ ok: false }, { status: 401 });
  const res = Response.json({ ok: true });
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  res.headers.append("Set-Cookie", `${ACCESS_COOKIE}=${accessToken()}; Path=/; Max-Age=${60 * 60 * 24 * 180}; HttpOnly; SameSite=Lax${secure}`);
  return res;
}
