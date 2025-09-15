export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { name, email } = req.body

  if (!name || !email) {
    return res.status(400).json({ message: '名前とメールアドレスは必須です' })
  }

  try {
    const sgRes = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email }],
            subject: 'TASQご登録ありがとうございます'
          }
        ],
        from: { email: 'no-reply@tasq.jp', name: 'TASQ運営' },
        content: [
          {
            type: 'text/plain',
            value: `${name} 様\n\nTASQへのご登録ありがとうございます。\n\nログインはこちらから: https://tasq.jp/login`
          }
        ]
      })
    })

    if (!sgRes.ok) {
      throw new Error('SendGrid送信エラー')
    }

    // 運営への通知メール
    await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'admin@tasq.jp' }],
            subject: '新規登録がありました'
          }
        ],
        from: { email: 'no-reply@tasq.jp', name: 'TASQシステム' },
        content: [
          {
            type: 'text/plain',
            value: `新規登録者: ${name} (${email})`
          }
        ]
      })
    })

    res.status(200).json({ message: 'メール送信完了' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'メール送信に失敗しました' })
  }
}
