"use server";

import nodemailer from "nodemailer";

const MAIL_USER = "info@octabitlogics.com";
const MAIL_PASS = "vqfk-qw3x-8zqj-payg";

const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
    },
});

export async function subscribeNewsletter(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return { success: false, error: "Please enter a valid email address." };
    }

    try {
        // Confirmation email to subscriber
        await transporter.sendMail({
            from: `"OctaBitLogics" <${MAIL_USER}>`,
            to: email,
            replyTo: MAIL_USER,
            subject: "You're subscribed to the OctaBitLogics Monthly Newsletter!",
            text: `Welcome to OctaBitLogics!\n\nYou have successfully subscribed to our monthly newsletter.\n\nYou'll receive curated insights on AI, engineering, and digital transformation — delivered straight to your inbox every month.\n\nThank you for joining us!\n\n— The OctaBitLogics Team\ninfo@octabitlogics.com`,
            html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1B2E5E; background: #ffffff;">
  <div style="background: linear-gradient(135deg, #002046 0%, #013a6b 45%, #0a5c50 100%); padding: 40px 36px; border-radius: 8px 8px 0 0; text-align: center;">
    <p style="font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin: 0 0 12px 0;">OctaBitLogics</p>
    <h1 style="color: #ffffff; font-size: 26px; font-weight: 800; margin: 0 0 10px 0; letter-spacing: -0.02em; line-height: 1.2;">You're In!</h1>
    <p style="color: rgba(255,255,255,0.65); font-size: 14px; margin: 0;">Monthly Newsletter Subscription Confirmed</p>
  </div>
  <div style="padding: 36px 36px 28px; border: 1px solid #e2e8f0; border-top: none;">
    <div style="text-align: center; margin-bottom: 28px;">
      <div style="display: inline-block; background: rgba(46,204,64,0.1); border: 1px solid rgba(46,204,64,0.3); border-radius: 50%; width: 56px; height: 56px; line-height: 56px; font-size: 24px; margin-bottom: 16px;">✓</div>
      <p style="font-size: 15px; color: #002046; font-weight: 600; margin: 0 0 6px 0;">You have subscribed to the OctaBitLogics monthly newsletter.</p>
      <p style="font-size: 13px; color: #74777f; margin: 0;">Subscribed with: <strong>${email}</strong></p>
    </div>
    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 0 0 24px 0;" />
    <p style="font-size: 14px; color: #002046; font-weight: 600; margin: 0 0 12px 0;">What to expect each month:</p>
    <ul style="padding-left: 20px; margin: 0 0 24px 0;">
      <li style="font-size: 13px; color: #74777f; line-height: 1.8; margin-bottom: 4px;">AI &amp; engineering insights from our team</li>
      <li style="font-size: 13px; color: #74777f; line-height: 1.8; margin-bottom: 4px;">Case studies and real-world project breakdowns</li>
      <li style="font-size: 13px; color: #74777f; line-height: 1.8; margin-bottom: 4px;">Industry trends in digital transformation</li>
      <li style="font-size: 13px; color: #74777f; line-height: 1.8;">Early access to new content and announcements</li>
    </ul>
    <div style="text-align: center;">
      <a href="https://octabitlogics.com/blogs" style="display: inline-block; background: #002046; color: #ffffff; font-size: 13px; font-weight: 700; padding: 12px 28px; text-decoration: none; border-radius: 4px; letter-spacing: 0.03em;">Browse Our Blogs →</a>
    </div>
  </div>
  <div style="background: #f8fafc; padding: 18px 36px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px; text-align: center;">
    <p style="font-size: 11px; color: #aaa; margin: 0;">© 2025 OctaBitLogics · <a href="mailto:info@octabitlogics.com" style="color: #3BADB0; text-decoration: none;">info@octabitlogics.com</a></p>
    <p style="font-size: 11px; color: #bbb; margin: 4px 0 0 0;">You're receiving this because you subscribed at octabitlogics.com</p>
  </div>
</div>
            `,
        });

        // Notify admin of new subscriber
        await transporter.sendMail({
            from: `"OctaBitLogics Portfolio" <${MAIL_USER}>`,
            to: MAIL_USER,
            subject: `[Newsletter] New subscriber: ${email}`,
            text: `A new subscriber has joined the OctaBitLogics monthly newsletter.\n\nEmail: ${email}\nTime: ${new Date().toUTCString()}`,
        });

        return { success: true };
    } catch (error) {
        console.error("subscribeNewsletter error:", error);
        return { success: false, error: "Failed to subscribe. Please try again." };
    }
}
