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

interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    subject: string;
    message: string;
}

export async function sendEmail(formData: ContactFormData) {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        return { success: false, error: "Please fill out all fields." };
    }

    try {
        await transporter.sendMail({
            from: `"OctaBitLogics Portfolio" <${MAIL_USER}>`,
            to: MAIL_USER,
            replyTo: `"${formData.name}" <${formData.email}>`,
            subject: `[Portfolio Inquiry] ${formData.subject}`,
            text: `New inquiry from: ${formData.name}\nEmail: ${formData.email}${formData.phone ? `\nPhone: ${formData.phone}` : ""}${formData.company ? `\nCompany: ${formData.company}` : ""}\n\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`,
            html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1B2E5E;">
  <div style="background: linear-gradient(135deg, #002046 0%, #0a5c50 100%); padding: 28px 32px; border-radius: 8px 8px 0 0;">
    <h1 style="color: #ffffff; font-size: 20px; margin: 0 0 4px 0; font-weight: 700;">New Project Inquiry</h1>
    <p style="color: rgba(255,255,255,0.6); font-size: 13px; margin: 0;">OctaBitLogics Portfolio · Contact Form</p>
  </div>
  <div style="background: #f8fcfc; padding: 28px 32px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; border-top: none;">
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
      <tr><td style="padding: 8px 0; font-size: 13px; color: #74777f; width: 110px;">Name</td><td style="padding: 8px 0; font-size: 14px; font-weight: 600; color: #002046;">${formData.name}</td></tr>
      <tr><td style="padding: 8px 0; font-size: 13px; color: #74777f;">Email</td><td style="padding: 8px 0; font-size: 14px; color: #002046;"><a href="mailto:${formData.email}" style="color: #3BADB0;">${formData.email}</a></td></tr>
      ${formData.phone ? `<tr><td style="padding: 8px 0; font-size: 13px; color: #74777f;">Phone</td><td style="padding: 8px 0; font-size: 14px; color: #002046;">${formData.phone}</td></tr>` : ""}
      ${formData.company ? `<tr><td style="padding: 8px 0; font-size: 13px; color: #74777f;">Company</td><td style="padding: 8px 0; font-size: 14px; color: #002046;">${formData.company}</td></tr>` : ""}
      <tr><td style="padding: 8px 0; font-size: 13px; color: #74777f;">Subject</td><td style="padding: 8px 0; font-size: 14px; color: #002046;">${formData.subject}</td></tr>
    </table>
    <div style="background: #ffffff; border-left: 4px solid #3BADB0; border-radius: 4px; padding: 16px 20px;">
      <p style="font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #74777f; margin: 0 0 10px 0;">Message</p>
      <p style="font-size: 14px; line-height: 1.7; color: #1B2E5E; white-space: pre-wrap; margin: 0;">${formData.message}</p>
    </div>
    <p style="font-size: 11px; color: #aaa; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 16px;">
      Sent from OctaBitLogics Portfolio · Reply directly to this email to reach ${formData.name}
    </p>
  </div>
</div>
            `,
        });

        return { success: true };
    } catch (error) {
        console.error("sendEmail error:", error);
        return { success: false, error: "Failed to send message. Please try again." };
    }
}
