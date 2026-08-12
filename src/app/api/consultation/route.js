export async function POST(request) {
  try {
    const data = await request.json();

    const {
      name,
      company,
      email,
      phone,
      service,
      teamSize,
      message,
    } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        {
          error: "Name, email and message are required.",
        },
        {
          status: 400,
        }
      );
    }

    // Make sure API key exists
    if (!process.env.API_Brevo) {
      // console.error("BREVO_API_KEY is missing.");

      return Response.json(
        {
          error: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
          <h2>New Consultation Request</h2>

          <p>
            A new consultation request has been submitted
            through the Stratum Holdings website.
          </p>

          <hr />

          <h3>Contact Information</h3>

          <p>
            <strong>Name:</strong> ${escapeHtml(name)}
          </p>

          <p>
            <strong>Company:</strong> ${escapeHtml(
              company || "Not provided"
            )}
          </p>

          <p>
            <strong>Email:</strong> ${escapeHtml(email)}
          </p>

          <p>
            <strong>Phone:</strong> ${escapeHtml(
              phone || "Not provided"
            )}
          </p>

          <p>
            <strong>Service:</strong> ${escapeHtml(
              service || "Not provided"
            )}
          </p>

          <p>
            <strong>Team Size:</strong> ${escapeHtml(
              teamSize || "Not provided"
            )}
          </p>

          <hr />

          <h3>Details</h3>

          <p style="white-space: pre-line;">
            ${escapeHtml(message)}
          </p>

          <hr />

          <p style="font-size: 12px; color: #777;">
            This message was submitted through the
            Stratum Holdings consultation form.
          </p>
        </body>
      </html>
    `;

    const response = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",

        headers: {
          accept: "application/json",
          "api-key": process.env.API_Brevo,
          "content-type": "application/json",
        },

        body: JSON.stringify({
          sender: {
            name: "Stratum Holdings Website",
            email: "info@thestratumholdings.com",
          },

          to: [
            {
              email: "zbrlohar@gmail.com",
              name: "Stratum Holdings",
            },
          ],

          replyTo: {
            email: email,
            name: name,
          },

          subject: `Consultation Request — ${
            company || name
          }`,

          htmlContent: emailHtml,

          textContent: `
New consultation request from the Stratum Holdings website.

Name: ${name}
Company: ${company || "Not provided"}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service || "Not provided"}
Team size: ${teamSize || "Not provided"}

Details:
${message}
          `,
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("Brevo API error:", result);

      return Response.json(
        {
          error:
            result?.message ||
            "Brevo was unable to send the email.",
        },
        {
          status: response.status,
        }
      );
    }

    console.log("Brevo email sent:", result);

    return Response.json({
      success: true,
      message: "Consultation request sent successfully.",
      messageId: result.messageId,
    });
  } catch (error) {
    console.error("Consultation API error:", error);

    return Response.json(
      {
        error:
          "Something went wrong while sending your consultation request.",
      },
      {
        status: 500,
      }
    );
  }
}


/**
 * Basic HTML escaping.
 * This prevents user-submitted form data from being
 * interpreted as HTML inside the email.
 */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}