@echo off
chcp 65001 > nul
color 0b
title 映像分析プラットフォーム - 絶対動作版

echo.
echo ████████████████████████████████████████████████████
echo █                                                  █
echo █    🎬 映像分析プラットフォーム - 絶対動作版     █  
echo █                                                  █
echo █    ✅ 完全オフライン動作                        █
echo █    ✅ CDN依存なし                              █
echo █    ✅ 全ブラウザ対応                           █
echo █    ✅ 映像分析の全機能体験                     █
echo █                                                  █
echo ████████████████████████████████████████████████████
echo.

echo 📂 デモファイルを確認中...

if exist "START_HERE.html" (
    echo ✅ デモファイルが見つかりました
    echo.
    echo 🚀 ブラウザでデモを起動しています...
    echo.
    
    REM デモを起動
    start "" "START_HERE.html"
    
    echo ✅ デモが起動しました！
    echo.
    echo 💡 使い方:
    echo    1. 🏠 ホームタブ: 機能概要を確認
    echo    2. 🚀 今すぐデモを体験 ボタンをクリック
    echo    3. 3秒のAI分析シミュレーションを体験
    echo    4. 📊 ダッシュボードで統計データを確認
    echo.
    echo 🎯 主な体験内容:
    echo    ⚡ ハイライト抽出結果
    echo    🎭 感情解析グラフ  
    echo    💡 最適化提案
    echo    📈 パフォーマンス予測
    echo.
    echo ⚠️  ブラウザが開かない場合:
    echo    START_HERE.html を右クリック → プログラムから開く → ブラウザを選択
    echo.
) else (
    echo ❌ エラー: START_HERE.html が見つかりません
    echo.
    echo 📋 解決方法:
    echo    1. ファイルの場所を確認してください
    echo    2. simple-demo.html があれば、それをダブルクリックしてください
    echo    3. demo/index.html があれば、それを試してください
    echo.
)

echo 🎓 このデモについて:
echo    作成者: 三坂 龍平
echo    目的: ゼミ課題1 - 映像分析プラットフォーム開発
echo    技術: HTML5 + CSS3 + JavaScript（完全オフライン動作）
echo.

echo 🌐 GitHub: https://github.com/misaka-ryu/zemi-kadai-1
echo.

pause
echo 終了中...
exit