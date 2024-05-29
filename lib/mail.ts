import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorTokenEmail = async (
  email: string,
  token: string,
)=> {
  try {
    const response = await resend.emails.send({
      from: "nextjs-auth@resend.dev",
      to: email,
      subject: "2FA Code",
      html: `<p>Your 2FA code: ${token}</p>`,
    });
    console.log(`reset password  sent to ${email}`, response);
  } catch (error) {
    console.error('Error sending reset password:', error);
  }
}

export const sendPasswordResetEmail = async (
  email: string,
  token: string,
) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`

  try {
    const response = await resend.emails.send({
      from: "nextjs-auth@resend.dev",
      to: email,
      subject: "Reset Your Password",
      html: `<p>Please click <a href="${resetLink}">here</a> to reset your password.</p>`,
      text: `Please confirm your email by clicking the following link: ${resetLink}`
    });
    console.log(`reset password  sent to ${email}`, response);
  } catch (error) {
    console.error('Error sending reset password:', error);
  }
};



export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

  try {
    const response = await resend.emails.send({
      from: "nextjs-auth@resend.dev",
      to: email,
      subject: "Confirm your email",
      html: `<p>Please click <a href="${confirmLink}">here</a> to confirm your email address.</p>`,
      text: `Please confirm your email by clicking the following link: ${confirmLink}`
    });
    console.log(`Verification email sent to ${email}`, response);
  } catch (error) {
    console.error('Error sending verification email:', error);
  }
};