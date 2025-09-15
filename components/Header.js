import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  // ロゴ切り替え用の状態
  const [useNewLogo, setUseNewLogo] = useState(true)

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      borderBottom: '1px solid #ddd',
      position: 'relative'
    }}>
      {/* ロゴ部分 */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src={useNewLogo ? "/logo_new.svg" : "/logo_old.svg"} // ← 状態で切り替え
          alt="TASQ Logo"
          width={50}
          height={50}
        />
        <h2 style={{ marginLeft: '10px' }}>TASQ JAPAN</h2>
      </div>

      {/* ナビゲーション */}
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link href="/register">ユーザー登録</Link>
        <Link href="/auctions">オークション一覧</Link>
        <Link href="/mypage">マイページ</Link>
      </nav>

      {/* ロゴ切り替えボタン */}
      <button
        onClick={() => setUseNewLogo(!useNewLogo)}
        style={{
          marginLeft: '20px',
          padding: '5px 10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer',
          background: '#f9f9f9'
        }}
      >
        ロゴ切り替え
      </button>
    </header>
  )
}
