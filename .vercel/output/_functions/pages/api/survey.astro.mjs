import { Pool } from 'pg';
export { renderers } from '../../renderers.mjs';

const DATABASE_URL = "postgresql://geovanydev:LRMLOMKSO6e8DpOvBNhM60MaMwzvcSoL@dpg-d15otfndiees73eb7kig-a.oregon-postgres.render.com:5432/generate_leads?sslmode=require";
let pool;
try {
  pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 5e3,
    idleTimeoutMillis: 3e4,
    max: 10
  });
} catch (err) {
  console.error("❌ Failed to create PostgreSQL pool:", err);
}
const prerender = false;
const POST = async ({ request }) => {
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
    instagram
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
        instagram
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
