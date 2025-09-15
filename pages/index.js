import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '60px 20px',
      backgroundColor: '#fff',
      flexWrap: 'wrap'
    }}>
      {/* 左側：ロゴ */}
      <div style={{ flex: '1 1 300px', textAlign: 'center' }}>
        <Image src="/logo.svg" alt="TASQ Logo" width={200} height={200} />
      </div>

      {/* 右側：テキスト＋ボタン */}
      <div style={{ flex: '1 1 300px', padding: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#000' }}>
          逆オークション型マッチングプラットフォーム
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#333' }}>
          無駄な営業をなくし、最適なマッチングを最短で実現します。
        </p>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <Link href="/register">
            <button style={{
              backgroundColor: '#FFD700',
              color: '#000',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              ユーザー登録
            </button>
          </Link>
          <Link href="/auctions">
            <button style={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              オークションを見る
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
