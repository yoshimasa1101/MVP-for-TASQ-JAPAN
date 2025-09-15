import Image from 'next/image'

export default function Home() {
  return (
    <main style={{ textAlign: 'center', padding: '40px' }}>
      {/* ロゴ表示 */}
      <Image
        src="/logo.svg" // publicフォルダ直下のlogo.svgを参照
        alt="TASQ Logo"
        width={150}
        height={150}
        priority
      />

      {/* タイトルや説明 */}
      <h1 style={{ marginTop: '20px' }}>ようこそ！複雑なワークション/オペレーションテストです。</h1>

      {/* ナビゲーションリンク */}
      <p style={{ marginTop: '20px' }}>
        <a href="/nav" style={{ color: '#0070f3', textDecoration: 'underline' }}>
          ナビゲーションページ
        </a>
      </p>
    </main>
  )
}
