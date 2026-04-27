import React, { useState } from 'react';
import { Upload, Play, BarChart3, Zap, Brain, Target } from 'lucide-react';
import VideoUpload from './components/VideoUpload';
import Dashboard from './components/Dashboard';
import AnalysisResults from './components/AnalysisResults';

function App() {
  const [currentView, setCurrentView] = useState<'upload' | 'dashboard' | 'analysis'>('upload');
  const [uploadedVideo, setUploadedVideo] = useState<string | null>(null);

  const handleVideoUpload = (videoUrl: string) => {
    setUploadedVideo(videoUrl);
    setCurrentView('analysis');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-500 p-2 rounded-lg">
                <Play className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">映像分析プラットフォーム</h1>
            </div>
            
            <nav className="flex space-x-4">
              <button
                onClick={() => setCurrentView('upload')}
                className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
                  currentView === 'upload' 
                    ? 'bg-primary-500 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Upload className="h-4 w-4" />
                <span>アップロード</span>
              </button>
              
              <button
                onClick={() => setCurrentView('dashboard')}
                className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
                  currentView === 'dashboard' 
                    ? 'bg-primary-500 text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <BarChart3 className="h-4 w-4" />
                <span>ダッシュボード</span>
              </button>
              
              {uploadedVideo && (
                <button
                  onClick={() => setCurrentView('analysis')}
                  className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
                    currentView === 'analysis' 
                      ? 'bg-primary-500 text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Brain className="h-4 w-4" />
                  <span>分析結果</span>
                </button>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentView === 'upload' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                動画をアップロードして分析を開始
              </h2>
              <p className="text-lg text-gray-600">
                エンターテイメント特化のAI分析で、動画コンテンツのポテンシャルを解析します
              </p>
            </div>
            
            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Zap className="h-8 w-8 text-yellow-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">ハイライト抽出</h3>
                <p className="text-gray-600">盛り上がり度やアクションを自動検出し、最適なハイライト部分を抽出</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Brain className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">感情解析</h3>
                <p className="text-gray-600">表情・音声からの感情スコア計算で、視聴者の反応を予測</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <Target className="h-8 w-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">最適化提案</h3>
                <p className="text-gray-600">編集点、サムネイル、字幕タイミングの最適化を自動提案</p>
              </div>
            </div>
            
            <VideoUpload onVideoUpload={handleVideoUpload} />
          </div>
        )}
        
        {currentView === 'dashboard' && <Dashboard />}
        
        {currentView === 'analysis' && uploadedVideo && (
          <AnalysisResults videoUrl={uploadedVideo} />
        )}
      </main>
    </div>
  );
}

export default App;