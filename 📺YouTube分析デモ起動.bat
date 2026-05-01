@echo off
chcp 65001 > nul
color 0c
title YouTube映像分析プラットフォーム

echo.
echo ████████████████████████████████████████████████████
echo █                                                  █
echo █    📺 YouTube映像分析プラットフォーム           █  
echo █                                                  █
echo █    🔗 YouTubeのURLを貼るだけで分析開始         █
echo █    ✅ 動画埋め込み対応                         █
echo █    ✅ タイムライン連動機能                     █
echo █    ✅ YouTube特化の最適化提案                  █
echo █                                                  █
echo ████████████████████████████████████████████████████
echo.

echo 📂 YouTube分析デモファイルを確認中...

if exist "YouTube分析デモ.html" (
    echo ✅ デモファイルが見つかりました
    echo.
    echo 🚀 YouTubeデモを起動しています...
    echo.
    
    REM YouTubeデモを起動
    start "" "YouTube分析デモ.html"
    
    echo ✅ YouTube分析デモが起動しました！
    echo.
    echo 💡 使い方:
    echo    1. YouTubeのURLをコピー
    echo    2. URL入力欄に貼り付け
    echo    3. 🔍 分析開始 ボタンをクリック
    echo    4. 動画が埋め込まれて分析結果を表示
    echo.
    echo 🎯 体験できる機能:
    echo    📺 YouTube動画の埋め込み再生
    echo    ⏱️ ハイライトシーンへのジャンプ
    echo    🎯 YouTube特化分析結果
    echo    💡 プラットフォーム専用最適化提案
    echo.
    echo 📋 サンプル動画:
    echo    🎵 音楽動画、😂 コメディ、📚 チュートリアル、⚽ スポーツ
    echo    → ページ内のサンプルリンクをクリックして体験
    echo.
    echo ⚠️  ブラウザが開かない場合:
    echo    YouTube分析デモ.html を右クリック → プログラムから開く → ブラウザを選択
    echo.
) else (
    echo ❌ エラー: YouTube分析デモ.html が見つかりません
    echo.
    echo 📋 解決方法:
    echo    1. ファイルの場所を確認してください
    echo    2. START_HERE.html があれば、それを試してください
    echo.
)

echo 🌟 新機能の特徴:
echo    🔗 YouTube URL直接入力対応
echo    📱 リアルタイムURL検証
echo    🎬 動画プレイヤー埋め込み
echo    ⚡ ハイライトシーンへの即座ジャンプ
echo    📊 YouTube特化の統計ダッシュボード
echo.

echo 🎓 プロジェクト情報:
echo    作成者: 三坂 龍平
echo    目的: ゼミ課題1 - YouTube対応映像分析プラットフォーム
echo    技術: HTML5 + YouTube Embed API + JavaScript
echo.

echo 🌐 GitHub: https://github.com/misaka-ryu/zemi-kadai-1
echo.

pause
echo 終了中...
exit