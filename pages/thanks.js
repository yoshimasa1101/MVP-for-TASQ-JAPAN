import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Thanks() {
  const [shareUrl, setShareUrl] = useState('')

  useEffect(() => {
    // 固有の紹介リンク（今回は仮に ?ref=guest にしています）
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
    setShareUrl(`${baseUrl}/?ref=guest`)
  }, [])

  const tweetText = encodeURIComponent('TASQに登録しました！逆オークション型マッチングで最適な相手と出会えます。')
  const fbUrl = encodeURIComponent(shareUrl)
  const liUrl = encodeURIComponent(shareUrl)

  return (
    <section style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '40px'
    }}>
      <h1>ご登録ありがとうございます！</h1>
      <p>ご入力いただいたメールアドレスに確認メールをお送りしました。</p>

      {/* キャンペーン訴求 */}
      <div style={{ marginTop: '30px', background: '#FFF8DC', padding: '20px', borderRadius: '8px' }}>
        <h2>🎁 友達紹介キャンペーン実施中！</h2>
        <p>あなたの紹介リンクから登録があると、Amazonギフト券500円分をプレゼント！</p>
        <p><strong>{shareUrl}</strong></p>
      </div>

      {/* SNSシェアボタン */}
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a
          href={`https://twitter.com/intent/tweet?text=${tweetText}&url=${encodeURIComponent(shareUrl)}`}
          target="_blank" rel="noopener noreferrer"
          style={{ background: '#1DA1F2', color: '#fff', padding: '10px 15px', borderRadius: '5px', textDecoration: 'none' }}
        >Xでシェア</a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${fbUrl}`}
          target="_blank" rel="noopener noreferrer"
          style={{ background: '#4267B2', color: '#fff', padding: '10px 15px', borderRadius: '5px', textDecoration: 'none' }}
        >Facebookでシェア</a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${liUrl}`}
          target="_blank" rel="noopener noreferrer"
          style={{ background: '#0077B5', color: '#fff', padding: '10px 15px', borderRadius: '5px', textDecoration: 'none' }}
        >LinkedInでシェア</a>
      </div>

      {/* 次の行動 */}
      <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
        <Link href="/auctions">
          <button style={{
            backgroundColor: '#FFD700',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>オークションを見る</button>
        </Link>
        <Link href="/">
          <button style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>トップに戻る</button>
        </Link>
      </div>
    </section>
  )
}
