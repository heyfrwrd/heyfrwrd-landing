import type { APIRoute } from "astro";
import { Pool } from "pg";

const DATABASE_URL = import.meta.env.DATABASE_URL;

let pool: Pool;
try {
  pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 30000,
    max: 10,
  });
} catch (err) {
  console.error("❌ Failed to create PostgreSQL pool:", err);
}

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  // validaciones...
  const data = await request.json();
  const {
    creatorType,
    followersCount,
    platform,
    biggestChallenge,
    timeSpentOnDMs,
    dailyInteractions,
    missedOpportunities,
    automationInterest,
    paymentWillingness,
    name,
    email,
    instagram,
  } = data;

  try {
    await pool.query(
      `INSERT INTO leads
        (creator_type, followers_count, platform,
         biggest_challenge, time_spent_on_dms,
         daily_interactions, missed_opportunities,
         automation_interest, payment_willingness,
         name, email, instagram)
       VALUES
        ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
      [
        creatorType,
        followersCount,
        platform,
        biggestChallenge,
        timeSpentOnDMs,
        dailyInteractions,
        missedOpportunities,
        automationInterest,
        paymentWillingness,
        name,
        email,
        instagram,
      ]
    );
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (dbErr) {
    console.error("❌ DB insert error:", dbErr);
    return new Response(
      JSON.stringify({ error: "No se pudo guardar en la base de datos." }),
      { status: 500 }
    );
  }
};
