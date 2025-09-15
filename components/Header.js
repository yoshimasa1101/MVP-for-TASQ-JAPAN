import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      borderBottom: '1px solid #ddd',
      position: 'relative'
    }}>
      {/* ロゴ */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src="/logo.svg" alt="TASQ Logo" width={50} height={50} />
        <h2 style={{ marginLeft: '10px' }}>TASQ JAPAN</h2>
      </div>

      {/* PC表示用ナビ */}
      <nav className="nav-links" style={{
        display: 'flex',
        gap: '20px'
      }}>
        <Link href="/register">ユーザー登録</Link>
        <Link href="/auctions">オークション一覧</Link>
        <Link href="/mypage">マイページ</Link>
      </nav>

      {/* ハンバーガーボタン（スマホ用） */}
      <div
        className="hamburger"
        style={{
          display: 'none',
          flexDirection: 'column',
          cursor: 'pointer'
        }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span style={{ width: '25px', height: '3px', background: '#333', margin: '4px 0' }}></span>
        <span style={{ width: '25px', height: '3px', background: '#333', margin: '4px 0' }}></span>
        <span style={{ width: '25px', height: '3px', background: '#333', margin: '4px 0' }}></span>
      </div>

      {/* スマホ用メニュー */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '60px',
          right: '20px',
          background: '#fff',
          border: '1px solid #ddd',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <Link href="/register" onClick={() => setMenuOpen(false)}>ユーザー登録</Link>
          <Link href="/auctions" onClick={() => setMenuOpen(false)}>オークション一覧</Link>
          <Link href="/mypage" onClick={() => setMenuOpen(false)}>マイページ</Link>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  )
}
