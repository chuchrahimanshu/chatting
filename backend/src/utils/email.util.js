import { transporter } from "../config/nodemailer.config.js";

export const sendMail = async (from, to, subject, text) => {
  const emailResponse = await transporter.sendMail({
    from: from,
    to: to,
    subject: subject,
    html: `<h1>${text}</h1>`,
  });
  return emailResponse;
};
