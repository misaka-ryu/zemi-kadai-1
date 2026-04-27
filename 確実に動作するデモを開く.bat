@echo off
title 映像分析プラットフォーム - 確実デモ起動
echo.
echo ==========================================
echo   映像分析プラットフォーム - 確実デモ版
echo ==========================================
echo.
echo 🎬 このデモの特徴:
echo   ✅ 完全オフライン動作（インターネット不要）
echo   ✅ CDN依存なし（外部ライブラリ不使用）
echo   ✅ どのブラウザでも確実に動作
echo   ✅ 映像分析の全機能を体験可能
echo.

REM シンプルデモを開く
if exist "simple-demo.html" (
    echo 📂 シンプルデモを起動中...
    start "" "simple-demo.html"
    echo ✅ ブラウザでデモが開きました！
) else (
    echo ❌ simple-demo.html が見つかりません
    echo    ファイルの場所を確認してください
)

echo.
echo 🚀 デモの使い方:
echo   1. 画面上の「デモ分析を開始」ボタンをクリック
echo   2. AI分析シミュレーション（3秒）を体験
echo   3. ハイライト・感情分析・最適化提案を確認
echo   4. ダッシュボードで統計データを確認
echo.
echo 💡 問題が発生した場合:
echo   - ブラウザを最新版に更新してください
echo   - 別のブラウザ（Chrome, Firefox, Edge）で試してください
echo   - ファイルを右クリック→「プログラムから開く」→ブラウザを選択
echo.
pause