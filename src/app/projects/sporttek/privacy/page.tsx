import type { Metadata } from "next";

const PAGE_URL = "https://octabitlogics.com/projects/sporttek/privacy";
const EFFECTIVE = "7 September 2026";

export const metadata: Metadata = {
  title: "SportTek Privacy Policy",
  description:
    "Privacy policy for the SportTek sports venue booking app operated by OctaBit Logics.",
  robots: { index: true, follow: true },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "SportTek Privacy Policy",
    description:
      "How SportTek collects, uses, and shares personal data for players and venue owners in Pakistan.",
    url: PAGE_URL,
    type: "article",
  },
};

type Section = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

const SECTIONS: Section[] = [
  {
    id: "who",
    title: "1. Who we are",
    paragraphs: [
      "SportTek is a sports venue booking service for Pakistan (padel, futsal, cricket, and similar courts). This policy covers the SportTek mobile app, the venue owner panel, and the SportTek API.",
      "OctaBit Logics (Lahore, Pakistan) operates SportTek as its technology partner. Payments, where live, are onboarded under OctaBit Logics. Contact: info@octabitlogics.com · +92 321 535 3105.",
    ],
  },
  {
    id: "collect",
    title: "2. What we collect",
    paragraphs: [
      "We collect only what the product needs to create an account, hold a court, notify you, and settle payment. SportTek does not use email or passwords. Login is a phone number plus a one-time code.",
    ],
    bullets: [
      "Phone number in +92 format — account identifier and WhatsApp delivery address (Feature Book F-01; Module 3).",
      "Name, and optional preferred sports, on first login.",
      "Approximate location, only if you grant it, so the venue list can sort nearest. If you refuse, we fall back to a default city area (Feature Book F-03).",
      "Bookings: venue, court, date, time, duration, price in paisa, payment method, and booking reference.",
      "Device push token, platform, and app version so we can send Firebase (FCM) notifications. Tokens are deleted on logout (Module 8).",
      "WhatsApp message ids and delivery errors for login codes and booking notices.",
      "Venue-owner data: venue WhatsApp, panel login, hours, prices, photos, and bank details when a venue takes deposits.",
      "Payment events from Safepay (when that gateway is live): amount, status, and reference — not full card numbers on our servers.",
    ],
  },
  {
    id: "use",
    title: "3. How we use it",
    paragraphs: [
      "We use this data to run SportTek, not to sell a marketing list.",
    ],
    bullets: [
      "Send a WhatsApp one-time login code. The code is stored hashed, not in plaintext (Module 3).",
      "Create and manage bookings, including holds, deposits, cancellations, and no-shows.",
      "Send transactional WhatsApp and push messages: booking confirmed, reminder, cancellation, deposit result, and a morning summary to the venue (Module 8).",
      "Send deal alerts over push only. SportTek’s product rule is that deal alerts are not WhatsApp marketing (Module 16).",
      "Show venue owners their own bookings and player first name / phone so they can receive the player at the desk.",
      "Prevent abuse: OTP resend limits, lockouts, and session revocation.",
      "Keep the service up (backups, security, crash reports).",
    ],
  },
  {
    id: "whatsapp",
    title: "4. WhatsApp",
    paragraphs: [
      "WhatsApp is how SportTek delivers login codes and booking notices. Messages go through Meta’s WhatsApp Cloud API from SportTek’s business number.",
      "A booking confirmation includes venue, court, date, time, price, and reference so you can show it at reception or forward it. That is intentional (Feature Book F-08 / Module 8).",
      "Meta processes those messages under its WhatsApp Business terms. We do not use WhatsApp to blast deal marketing from the SportTek product.",
    ],
  },
  {
    id: "share",
    title: "5. Who else sees it",
    paragraphs: [
      "We do not sell personal data. We share it only as needed to run the service.",
    ],
    bullets: [
      "The venue you booked — so staff know who is on the court.",
      "Meta (WhatsApp Cloud API) — to deliver login and booking messages.",
      "Google Firebase — push notifications and crash reporting.",
      "Safepay — card or wallet checkout when online payment is enabled, under OctaBit Logics.",
      "Cloud host and object storage used to run api.sporttek.pk and venue photos.",
      "A split-payment link shows venue, court, time, total, and first names only. It does not include phone numbers, user ids, or the booking reference (Module 19).",
      "Authorities if Pakistani law requires it.",
    ],
  },
  {
    id: "keep",
    title: "6. How long we keep it",
    paragraphs: [
      "Account and booking records stay while you use SportTek and as long as we need them for disputes, refunds, and tax. OTP codes expire and are hashed. Push tokens are removed on logout. If you ask us to close an account, we delete or anonymise what we no longer need to keep.",
    ],
  },
  {
    id: "rights",
    title: "7. Your choices",
    paragraphs: [
      "You can update your name and profile in the app, log out (which drops that device’s push token), or log out of all devices. You can turn off SportTek WhatsApp or push preferences where the app offers them, except messages we must send to complete a booking you already made.",
      "To see, correct, or delete your data, email info@octabitlogics.com from a reachable number we can match to the account, or write to OctaBit Logics, Lahore, Pakistan.",
    ],
  },
  {
    id: "security",
    title: "8. Security",
    paragraphs: [
      "Access tokens can be revoked on the server. Venue staff only see their own venue. Money is stored as integer paisa. Times are stored in UTC and applied as Asia/Karachi for the booking day. We cannot promise that any internet service is perfectly secure.",
    ],
  },
  {
    id: "children",
    title: "9. Children",
    paragraphs: [
      "SportTek is for people who can make a booking. We do not knowingly create accounts for children. If you believe we have a child’s phone number, contact us and we will remove it.",
    ],
  },
  {
    id: "changes",
    title: "10. Changes",
    paragraphs: [
      "If this policy changes in a material way, we will update this page and the date below. Continued use after that date means you accept the updated policy.",
    ],
  },
];

export default function SportTekPrivacyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#faf9fd",
        color: "#1a1b1e",
        fontFamily: "inherit",
      }}
    >
      <article
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#1b6d1e",
          }}
        >
          SportTek
        </p>
        <h1
          style={{
            margin: "12px 0 8px",
            fontSize: "clamp(1.75rem, 4vw, 2.25rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#002046",
            lineHeight: 1.2,
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ margin: "0 0 32px", fontSize: 14, color: "#5c5f66" }}>
          Effective {EFFECTIVE}. This page is a legal notice. It is not linked
          from the OctaBit Logics website navigation.
        </p>

        {SECTIONS.map((section) => (
          <section key={section.id} id={section.id} style={{ marginBottom: 32 }}>
            <h2
              style={{
                margin: "0 0 12px",
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "#002046",
              }}
            >
              {section.title}
            </h2>
            {section.paragraphs.map((text) => (
              <p
                key={text.slice(0, 48)}
                style={{
                  margin: "0 0 12px",
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: "#2a2d33",
                }}
              >
                {text}
              </p>
            ))}
            {section.bullets ? (
              <ul
                style={{
                  margin: "0 0 8px",
                  paddingLeft: 22,
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: "#2a2d33",
                }}
              >
                {section.bullets.map((item) => (
                  <li key={item.slice(0, 48)} style={{ marginBottom: 8 }}>
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}

        <p style={{ margin: "40px 0 0", fontSize: 13, color: "#5c5f66" }}>
          Last updated {EFFECTIVE}. Operator: OctaBit Logics, Lahore, Pakistan.
        </p>
      </article>
    </main>
  );
}
