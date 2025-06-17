import type { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const data = {
    name: form.get("name")?.toString().trim(),
    email: form.get("email")?.toString().trim(),
    instagram: form.get("instagram")?.toString().trim(),
    dmCount: form.get("dmCount")?.toString(),
    difficult: form.get("difficult")?.toString(),
    automateInterest: form.get("automateInterest")?.toString(),
    messageType: form.get("messageType")?.toString(),
    messageTypeOther: form.get("messageTypeOther")?.toString().trim(),
    pay: form.get("pay")?.toString(),
  };

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
