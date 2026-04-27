from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import uvicorn
import json
import random
from typing import Dict, List
import time

app = FastAPI(
    title="映像分析API",
    description="エンターテイメント特化映像分析プラットフォーム",
    version="0.1.0"
)

# CORS設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React開発サーバー
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 静的ファイルの配信
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

@app.get("/")
async def root():
    """API ルート"""
    return {"message": "映像分析API - プロトタイプ版"}

@app.get("/api/health")
async def health_check():
    """ヘルスチェック"""
    return {"status": "healthy", "version": "0.1.0"}

@app.post("/api/upload")
async def upload_video(file: UploadFile = File(...)):
    """
    動画ファイルアップロード
    プロトタイプでは実際のアップロードは行わず、モック処理
    """
    # ファイル形式チェック
    if not file.content_type.startswith("video/"):
        raise HTTPException(status_code=400, detail="動画ファイルのみ対応しています")
    
    # モック処理：実際にはファイル保存とAI分析を行う
    video_id = f"mock_video_{int(time.time())}"
    
    return {
        "video_id": video_id,
        "filename": file.filename,
        "status": "uploaded",
        "analysis_status": "pending"
    }

@app.get("/api/analysis/{video_id}")
async def get_analysis(video_id: str):
    """
    動画分析結果取得
    プロトタイプ版：モックデータを返す
    """
    # モック分析データ生成
    mock_analysis = generate_mock_analysis()
    
    return {
        "video_id": video_id,
        "status": "completed",
        "analysis": mock_analysis
    }

@app.get("/api/dashboard/stats")
async def get_dashboard_stats():
    """
    ダッシュボード統計データ
    """
    return {
        "total_videos": random.randint(80, 100),
        "total_watch_time": random.randint(1000, 1500),
        "avg_engagement": round(random.uniform(80, 95), 1),
        "total_shares": random.randint(400, 600),
        "recent_analyses": [
            {
                "id": f"video_{i}",
                "title": f"サンプル動画{i}.mp4",
                "type": random.choice(["コメディ", "アクション", "ドラマ", "ホラー"]),
                "score": random.randint(70, 100),
                "status": random.choice(["完了", "分析中", "完了", "完了"])
            }
            for i in range(1, 6)
        ]
    }

def generate_mock_analysis() -> Dict:
    """
    モック分析データ生成
    実際の実装では、AI分析結果を返す
    """
    return {
        "highlights": [
            {
                "timestamp": f"{random.randint(0, 5)}:{random.randint(10, 59):02d}",
                "score": random.randint(80, 100),
                "reason": random.choice([
                    "表情の変化が激しい",
                    "音響レベルのピーク", 
                    "動きの激しいアクション",
                    "感情的なシーン",
                    "視覚効果の変化"
                ])
            }
            for _ in range(4)
        ],
        "emotions": [
            {
                "time": f"{i*30}s-{(i+1)*30}s",
                "happy": random.randint(20, 90),
                "sad": random.randint(5, 40),
                "angry": random.randint(5, 30),
                "surprise": random.randint(20, 70),
                "neutral": random.randint(10, 50)
            }
            for i in range(4)
        ],
        "objects": [
            {
                "name": obj_name,
                "confidence": random.randint(75, 98),
                "count": random.randint(1, 5)
            }
            for obj_name in ["人物", "車", "テキスト", "ロゴ", "建物"]
        ],
        "predictions": {
            "engagement": random.randint(70, 95),
            "retention": random.randint(65, 90),
            "shareability": random.randint(60, 85),
            "viral_potential": random.randint(50, 80)
        },
        "suggestions": [
            {
                "type": "サムネイル",
                "recommendation": "表情豊かな瞬間をサムネイルに使用することを推奨します",
                "impact": f"クリック率 +{random.randint(10, 20)}% の改善が期待できます"
            },
            {
                "type": "編集",
                "recommendation": "冗長な部分の短縮を検討してください",
                "impact": f"視聴維持率 +{random.randint(5, 15)}% の改善が期待できます"
            },
            {
                "type": "字幕",
                "recommendation": "アクションシーンに効果的な字幕を追加",
                "impact": f"エンゲージメント +{random.randint(8, 15)}% の改善が期待できます"
            }
        ]
    }

@app.post("/api/feedback")
async def submit_feedback(feedback_data: dict):
    """
    ユーザーフィードバック受信
    """
    # 実際の実装では、フィードバックをDBに保存してモデル改善に使用
    return {"status": "received", "message": "フィードバックありがとうございます"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)