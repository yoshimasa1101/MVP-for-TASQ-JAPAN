import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // 環境変数はVercelの「Project Settings → Environment Variables」で設定
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true', // trueなら465, falseなら587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_TO, // 受信先メールアドレス
      subject: `お問い合わせ from ${name}`,
      text: message,
      html: `<p>${message}</p>`
    });

    return res.status(200).json({ message: 'メール送信成功' });
  } catch (error) {
    console.error('メール送信エラー:', error);
    return res.status(500).json({ message: 'メール送信失敗', error: error.message });
  }
}
