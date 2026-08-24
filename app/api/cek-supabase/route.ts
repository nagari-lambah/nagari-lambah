export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";

  let status = 0;
  let responseText = "";

  try {
    const res = await fetch(`${url}/auth/v1/settings`, {
      headers: {
        apikey: key,
      },
      cache: "no-store",
    });

    status = res.status;
    responseText = await res.text();
  } catch (error) {
    responseText =
      error instanceof Error ? error.message : "Unknown fetch error";
  }

  return Response.json({
    url,
    keyPrefix: key.slice(0, 18),
    keyLength: key.length,
    status,
    response: responseText.slice(0, 300),
  });
}