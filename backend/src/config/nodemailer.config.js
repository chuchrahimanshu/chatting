import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.NODEMAILER_SMTP_HOST,
  port: process.env.NODEMAILER_SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_SMTP_USER,
    pass: process.env.NODEMAILER_SMTP_PASS,
  },
});

export { transporter };
