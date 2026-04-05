"use server";

const MAILERSEND_TOKEN = "mlsn.cf21e1b31cd38e45862da4a0325b7abcce59617c6aba8d8c4957d85386f3b0c9";
const COMPANY_EMAIL = "info@octabitlogics.com";

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function sendEmail(formData: ContactFormData) {
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        return { success: false, error: "Please fill out all fields." };
    }

    try {
        const response = await fetch("https://api.mailersend.com/v1/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                Authorization: `Bearer ${MAILERSEND_TOKEN}`,
            },
            body: JSON.stringify({
                from: {
                    email: "MS_p5j6Fm@test-86org8ezr80gew13.mlsender.net",
                    name: `${formData.name} via PortFolio`,
                },
                to: [
                    {
                        email: COMPANY_EMAIL,
                        name: "OctaBitLogics Admin",
                    },
                ],
                reply_to: {
                    email: formData.email,
                    name: formData.name,
                },
                subject: `[PortFolio Inquiry] ${formData.subject}`,
                text: `New message from: ${formData.name}\nEmail: ${formData.email}\n\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`,
                html: `
          <div style="font-family: sans-serif; padding: 20px; color: #1B2E5E;">
            <h2 style="color: #3BADB0;">New Contact Form Submission</h2>
            <p><strong>From:</strong> ${formData.name} (${formData.email})</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />
            <div style="background: #f8fcfc; padding: 15px; border-radius: 8px; border-left: 4px solid #3BADB0;">
              <p style="white-space: pre-wrap;">${formData.message}</p>
            </div>
            <p style="font-size: 12px; color: #666; margin-top: 30px;">
              Sent from OctaBitLogics Portfolio Contact Form
            </p>
          </div>
        `,
            }),
        });

        const result = await response.json().catch(() => ({}));
        console.log("MailerSend API Raw Response:", result);

        if (!response.ok) {
            console.error("MailerSend Error Details:", result);
            return { success: false, error: result.message || "MailerSend rejected the request." };
        }

        return { success: true };
    } catch (error) {
        console.error("Server Action Error:", error);
        return { success: false, error: "Something went wrong. Please try again later." };
    }
}
