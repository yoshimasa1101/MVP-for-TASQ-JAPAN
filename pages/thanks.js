import Link from 'next/link'

export default function Thanks() {
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
