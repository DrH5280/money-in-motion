import { hasAccess } from "@/lib/access";

const ALLOWED_MODELS = (process.env.MIM_MODELS || "claude-sonnet-4-6").split(",").map((s) => s.trim());
const MAX_TOKENS = 1500;

export async function POST(request) {
  // Only people who entered the access code can use the tutor.
  if (!hasAccess(request)) {
    return Response.json({ error: "Not unlocked" }, { status: 401 });
  }
  try {
    const body = await request.json();
    const messages = Array.isArray(body.messages) ? body.messages.slice(-30) : [];
    const size = JSON.stringify(messages).length + String(body.system || "").length;
    if (!messages.length || size > 60000) {
      return Response.json({ error: "Request too large" }, { status: 400 });
    }
    const safe = {
      model: ALLOWED_MODELS.includes(body.model) ? body.model : ALLOWED_MODELS[0],
      max_tokens: Math.min(Number(body.max_tokens) || 600, MAX_TOKENS),
      system: typeof body.system === "string" ? body.system : undefined,
      messages,
    };

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(safe),
    });

    if (!response.ok) {
      return Response.json(
        { error: "API request failed", status: response.status },
        { status: response.status }
      );
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Claude API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
