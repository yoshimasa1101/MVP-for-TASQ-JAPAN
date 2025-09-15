import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      document.querySelectorAll('.wave').forEach((wave, index) => {
        const speed = index === 0 ? 0.2 : 0.4
        wave.style.transform = `translateY(${scrollY * speed}px)`
      })
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
      {/* ヒーロー */}
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
            <Link href="#register-form">
              <button className="btn-yellow">今すぐ無料登録</button>
            </Link>
            <Link href="/auctions">
              <button className="btn-black">オークションを見る</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ストーリーセクション */}
      <section className="fade-section story alt">
        <div className="story-text">
          <h2>なぜTASQなのか？</h2>
          <p>従来の営業活動は時間もコストもかかります。TASQは逆オークション形式で、最適な相手と最短でマッチングします。</p>
        </div>
        <div className="story-image">
          <Image src="/screenshots/why-tasq.png" alt="Why TASQ" width={500} height={300} />
        </div>
      </section>

      <section className="fade-section story">
        <div className="story-image">
          <Image src="/screenshots/flow.png" alt="Flow" width={500} height={300} />
        </div>
        <div className="story-text">
          <h2>シンプルな流れ</h2>
          <p>1. 案件を登録 → 2. 応募を受ける → 3. 最適な条件で契約</p>
        </div>
      </section>

      <section className="fade-section story alt">
        <div className="story-text">
          <h2>今すぐ始めましょう</h2>
          <p>登録は無料。数分であなたの案件が全国に届きます。</p>
          <Link href="#register-form">
            <button className="btn-yellow">無料で登録</button>
          </Link>
        </div>
        <div className="story-image">
          <Image src="/screenshots/start-now.png" alt="Start Now" width={500} height={300} />
        </div>
      </section>

      {/* 簡易登録フォーム */}
      <section id="register-form" className="fade-section form-section">
        <h2>無料で始める</h2>
        <p>以下のフォームに入力して、すぐにTASQを体験しましょう。</p>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            // ここでメール送信APIを呼び出す処理を追加可能
            window.location.href = '/thanks'
          }}
        >
          <input type="text" placeholder="お名前" required />
          <input type="email" placeholder="メールアドレス" required />
          <button type="submit" className="btn-yellow">登録する</button>
        </form>
      </section>

      {/* 利用者の声 */}
      <section className="fade-section testimonials">
        <h2>利用者の声</h2>
        <div className="testimonial-list">
          <blockquote>「営業コストが半分になりました！」 - 株式会社ABC</blockquote>
          <blockquote>「最適なパートナーと即日契約できました」 - フリーランス山田様</blockquote>
        </div>
      </section>

      {/* 固定CTAバー */}
      <div className="cta-bar">
        <span>今すぐ無料でTASQを始めましょう</span>
        <Link href="#register-form">
          <button className="btn-yellow">無料登録</button>
        </Link>
      </div>

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
          box-shadow: 0 6px 15px rgba(0,0,0,0.25);
        }
        .btn-black {
          background-color: #000;
          color: #fff;
        }
        .btn-black:hover {
          background-color: #222;
          transform: translateY(-3px);
          box-shadow: 0 6px 15px rgba(0,0,0,0.35);
        }

        /* ストーリーセクション */
        .story {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          max-width: 1100px;
          margin: 80px auto;
          padding: 0 20px;
          flex-wrap: wrap;
        }
        .story.alt {
          flex-direction: row-reverse;
        }
        .story-text {
          flex: 1 1 400px;
        }
        .story-image {
          flex: 1 1 400px;
          text-align: center;
        }
        .story h2 {
          font-size: 2rem;
          margin-bottom: 15px;
        }
        .story p {
          font-size: 1.1rem;
          color: #333;
        }

        /* フォーム */
        .form-section {
          max-width: 500px;
          margin: 80px auto;
          text-align: center;
        }
        .form-section form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }
        .form-section input {
          padding: 10px;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        /* 利用者の声 */
        .testimonials {
          max-width: 800px;
          margin: 80px auto;
          text-align: center;
        }
        .testimonial-list blockquote {
          background: #f9f9f9;
          padding: 15px;
          border-left: 5px solid #FFD700;
          margin: 20px 0;
          font-style: italic;
        }

        /* 固定CTAバー */
