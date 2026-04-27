@echo off
echo 映像分析プラットフォーム デモ版を開いています...
echo.
echo デモ版の特徴:
echo - インターネット接続が必要です（CDNライブラリ読み込みのため）
echo - ブラウザで直接開けます
echo - サーバー不要で動作します
echo.

REM HTMLファイルを既定のブラウザで開く
start "" "demo\index.html"

echo ブラウザでデモページが開きました！
echo 「デモ分析を開始」ボタンをクリックして分析機能を体験してください。
echo.
pause