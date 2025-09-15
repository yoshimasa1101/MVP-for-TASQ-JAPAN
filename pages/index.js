import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    // パララックス波の上下動き
    const handleScroll = () => {
      const scrollY = window.scrollY
      document.querySelectorAll('.wave').forEach((wave, index) => {
        const speed = index === 0 ? 0.2 : 0.4
        wave.style.transform = `translateY(${scrollY * speed}px)`
      })

      // スクロールで要素をフェードイン
      document.querySelectorAll('.fade-section').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('visible')
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* ヒーローセクション */}
      <section className="hero">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>

        <div className="logo-container fade-section">
          <Image src="/logo.svg" alt="TASQ Logo" width={200} height={200} />
        </div>

        <div className="text-container fade-section">
          <h1>逆オークション型マッチングプラットフォーム</h1>
          <p>無駄な営業をなくし、最適なマッチングを最短で実現します。</p>
          <div className="button-group">
            <Link href="/register">
              <button className="btn-yellow">ユーザー登録</button>
            </Link>
            <Link href="/auctions">
              <button className="btn-black">オークションを見る</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ストーリーテリングセクション */}
      <section className="fade-section story">
        <h2>なぜTASQなのか？</h2>
        <p>従来の営業活動は時間もコストもかかります。TASQは逆オークション形式で、最適な相手と最短でマッチングします。</p>
      </section>

      <section className="fade-section story">
        <h2>シンプルな流れ</h2>
        <p>1. 案件を登録 → 2. 応募を受ける → 3. 最適な条件で契約</p>
      </section>

      <section className="fade-section story">
        <h2>今すぐ始めましょう</h2>
        <p>登録は無料。数分であなたの案件が全国に届きます。</p>
        <Link href="/register">
          <button className="btn-yellow">無料で登録</button>
        </Link>
      </section>

      <style jsx>{`
        /* ヒーロー */
        .hero {
          position: relative;
          overflow: hidden;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          padding: 60px 20px;
          color: #000;
        }
        .logo-container, .text-container {
          flex: 1 1 300px;
          z-index: 1;
          text-align: center;
        }
        .text-container {
          padding: 20px;
          text-align: left;
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        p {
          font-size: 1.2rem;
          margin-bottom: 30px;
        }
        .button-group {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }
        .btn-yellow, .btn-black {
          padding: 12px 24px;
          border: none;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-yellow {
          background-color: #FFD700;
          color: #000;
        }
        .btn-yellow:hover {
          background-color: #ffcc00;
          transform: translateY(-3px);
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }
        .btn-black {
          background-color: #000;
          color: #fff;
        }
        .btn-black:hover {
          background-color: #222;
          transform: translateY(-3px);
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        /* 波アニメーション */
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
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='0'%3E%3Cstop offset='0%' style='stop-color:%23FFD700;stop-opacity:1'/%3E%3Cstop offset='100%' style='stop-color:%23ffffff;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23grad1)' d='M0,160L48,165.3C96,171,192,181,288,165.3C384,149,480,107,576,85.3C672,64,768,64,864,90.7C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L0,320Z'/%3E%3C/svg%3E");
          animation: waveMove 12s linear infinite;
        }
        .wave2 {
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%' y1='0%' x2='100%' y2='0'%3E%3Cstop offset='0%' style='stop-color:%23FFD700;stop-opacity:0.8'/%3E%3Cstop offset='100%' style='stop-color:%23ffffff;stop-opacity:0.8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23grad2)' d='M0,192L48,186.7C96,181,192,171,288,165.3C384,160,480,160,576,176C672,192,768,224,864,240C960,256,1056,256,1152,245.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L0,320Z'/%3E%3C/svg%3E");
          animation: waveMove 18s linear infinite reverse;
        }
        @keyframes waveMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* フェードイン（スクロール連動） */
