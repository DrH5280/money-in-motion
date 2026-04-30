export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify(body),
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
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
