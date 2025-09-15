// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* ファビコン */}
        <link rel="icon" href="/favicon.ico" />

        {/* OGP設定 */}
        <meta property="og:title" content="TASQ JAPAN" />
        <meta property="og:description" content="無駄営業を撲滅する逆オークション型マッチングプラットフォーム" />
        <meta property="og:image" content="https://あなたのドメイン/ogp.png" />
        <meta property="og:url" content="https://あなたのドメイン" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TASQ JAPAN" />

        {/* Twitterカード設定 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TASQ JAPAN" />
        <meta name="twitter:description" content="無駄営業を撲滅する逆オークション型マッチングプラットフォーム" />
        <meta name="twitter:image" content="https://あなたのドメイン/ogp.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
