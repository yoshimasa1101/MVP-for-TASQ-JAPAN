import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      borderBottom: '1px solid #ddd'
    }}>
      {/* ロゴ */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src="/logo.svg" alt="TASQ Logo" width={50} height={50} />
        <h2 style={{ marginLeft: '10px' }}>TASQ JAPAN</h2>
      </div>

      {/* ナビゲーション */}
      <nav>
        <Link href="/register" style={{ marginRight: '20px' }}>ユーザー登録</Link>
        <Link href="/auctions" style={{ marginRight: '20px' }}>オークション一覧</Link>
        <Link href="/mypage">マイページ</Link>
      </nav>
    </header>
  )
}

