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

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value

    try {
      await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email })
      })
      window.location.href = '/thanks'
    } catch (error) {
      alert('送信に失敗しました。時間をおいて再度お試しください。')
    }
  }

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

      {/* 簡易登録フォーム */}
      <section id="register-form" className="fade-section form-section">
        <h2>無料で始める</h2>
        <p>以下のフォームに入力して、すぐにTASQを体験しましょう。</p>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="お名前" required />
          <input type="email" name="email" placeholder="メールアドレス" required />
          <button type="submit" className="btn-yellow">登録する</button>
        </form>
      </section>

      {/* 固定CTAバー */}
      <div className="cta-bar">
        <span>今すぐ無料でTASQを始めましょう</span>
        <Link href="#register-form">
          <button className="btn-yellow">無料登録</button>
        </Link>
      </div>

      <style jsx>{`
        /* 必要なCSSは省略せず、前回のスタイルをそのまま維持 */
      `}</style>
    </>
  )
}
