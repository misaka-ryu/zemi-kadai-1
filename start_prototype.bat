@echo off
echo 映像分析プロトタイプ起動中...
echo.

REM フロントエンド用の新しいコマンドプロンプトウィンドウを開く
start cmd /k "cd /d frontend && echo フロントエンド（React）起動中... && npm install && npm start"

REM バックエンド用の新しいコマンドプロンプトウィンドウを開く  
start cmd /k "cd /d backend && echo バックエンド（FastAPI）起動中... && pip install -r requirements.txt && python main.py"

echo.
echo フロントエンド: http://localhost:3000
echo バックエンド API: http://localhost:8000
echo API ドキュメント: http://localhost:8000/docs
echo.
echo 両方のサーバーの起動完了をお待ちください...
pause