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
      <h1 style={{ marginTop: '20px' }}>ようこそ！TASQ JAPAN MVPへ</h1>
      <p>これは価格競争を逆転させる「逆オークション」型マッチングプラットフォームのMVP版です。</p>

      {/* ナビゲーションリンク */}
      <p style={{ marginTop: '20px' }}>
        <a href="/register" style={{ marginRight: '20px' }}>ユーザー登録</a>
        <a href="/auctions" style={{ marginRight: '20px' }}>オークション一覧</a>
        <a href="/mypage">マイページ</a>
      </p>
    </main>
  )
}
