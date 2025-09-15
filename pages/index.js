import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      document.querySelectorAll('.wave').forEach((wave, index) => {
        const speed = index === 0 ? 0.2 : 0.4 // 波ごとの動きの速さ
        wave.style.transform = `translateY(${scrollY * speed}px)`
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      padding: '60px 20px',
      color: '#000'
    }}>
      {/* 波アニメーション背景 */}
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>

      {/* 左側：ロゴ */}
      <div style={{ flex: '1 1 300px', textAlign: 'center', zIndex: 1 }}>
        <Image src="/logo.svg" alt="TASQ Logo" width={200} height={200} />
      </div>

      {/* 右側：テキスト＋ボタン */}
      <div style={{ flex: '1 1 300px', padding: '20px', zIndex: 1 }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          逆オークション型マッチングプラットフォーム
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
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

      {/* 波アニメーションCSS */}
      <style jsx>{`
        .wave {
          position: absolute;
          left: 0;
          width: 200%;
          height: 100%;
          background-repeat: repeat-x;
          background-size: 50% 100%;
          opacity: 0.5;
          will-change: transform;
        }
        .wave1 {
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23FFD700' fill-opacity='1' d='M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,85.3C672,64,768,64,864,90.7C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L0,320Z'/%3E%3C/svg%3E");
          animation: waveMove 12s linear infinite;
        }
        .wave2 {
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23FFD700' fill-opacity='0.6' d='M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,176C672,192,768,224,864,240C960,256,1056,256,1152,245.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L0,320Z'/%3E%3C/svg%3E");
          animation: waveMove 18s linear infinite reverse;
        }
        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
