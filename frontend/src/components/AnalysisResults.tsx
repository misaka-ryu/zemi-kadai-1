import React, { useState, useEffect } from 'react';
import { Zap, Brain, Target, Eye, TrendingUp, Award, AlertCircle } from 'lucide-react';

interface AnalysisResultsProps {
  videoUrl: string;
}

// モックデータジェネレーター
const generateMockAnalysis = () => {
  return {
    highlights: [
      { timestamp: '0:15', score: 92, reason: '表情の変化が激しい' },
      { timestamp: '1:34', score: 88, reason: '音響レベルのピーク' },
      { timestamp: '2:47', score: 95, reason: '動きの激しいアクション' },
      { timestamp: '4:12', score: 85, reason: '感情的なシーン' },
    ],
    emotions: [
      { time: '0-30s', happy: 75, sad: 5, angry: 10, surprise: 40, neutral: 20 },
      { time: '30s-1m', happy: 45, sad: 20, angry: 15, surprise: 60, neutral: 10 },
      { time: '1-1m30s', happy: 90, sad: 5, angry: 5, surprise: 30, neutral: 15 },
      { time: '1m30s-2m', happy: 60, sad: 25, angry: 20, surprise: 25, neutral: 30 },
    ],
    objects: [
      { name: '人物', confidence: 98, count: 3 },
      { name: '車', confidence: 85, count: 1 },
      { name: 'テキスト', confidence: 92, count: 5 },
      { name: 'ロゴ', confidence: 78, count: 2 },
    ],
    predictions: {
      engagement: 87,
      retention: 82,
      shareability: 74,
      viralPotential: 69,
    },
    suggestions: [
      {
        type: 'サムネイル',
        recommendation: '1:34の表情豊かな瞬間をサムネイルに使用することを推奨します',
        impact: 'クリック率 +15% の改善が期待できます',
      },
      {
        type: '編集',
        recommendation: '0:45-1:10の部分は冗長な可能性があります。短縮を検討してください',
        impact: '視聴維持率 +8% の改善が期待できます',
      },
      {
        type: '字幕',
        recommendation: '2:47のアクションシーンに効果的な字幕を追加',
        impact: 'エンゲージメント +12% の改善が期待できます',
      },
    ],
  };
};

const AnalysisResults: React.FC<AnalysisResultsProps> = ({ videoUrl }) => {
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('highlights');

  useEffect(() => {
    // 分析処理のシミュレーション
    const timer = setTimeout(() => {
      setAnalysis(generateMockAnalysis());
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [videoUrl]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-lg font-medium text-gray-900 mb-2">AI分析中...</p>
          <p className="text-sm text-gray-600">動画コンテンツを詳細分析しています</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'highlights', label: 'ハイライト', icon: Zap },
    { id: 'emotions', label: '感情分析', icon: Brain },
    { id: 'objects', label: 'オブジェクト検出', icon: Eye },
    { id: 'predictions', label: 'パフォーマンス予測', icon: TrendingUp },
    { id: 'suggestions', label: '最適化提案', icon: Target },
  ];

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">分析結果</h2>
        <p className="text-lg text-gray-600">AI分析による詳細レポート</p>
      </div>

      {/* 動画プレイヤー */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden mb-4">
          <video 
            src={videoUrl} 
            controls 
            className="w-full h-full object-contain"
            poster="/api/placeholder/800/450"
          >
            お使いのブラウザは動画再生をサポートしていません。
          </video>
        </div>
      </div>

      {/* 総合スコア */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Award className="h-5 w-5 mr-2 text-yellow-500" />
          総合分析スコア
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-1">
              {analysis.predictions.engagement}
            </div>
            <div className="text-sm text-gray-600">エンゲージメント</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">
              {analysis.predictions.retention}
            </div>
            <div className="text-sm text-gray-600">視聴維持率</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">
              {analysis.predictions.shareability}
            </div>
            <div className="text-sm text-gray-600">シェア可能性</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">
              {analysis.predictions.viralPotential}
            </div>
            <div className="text-sm text-gray-600">バイラル性</div>
          </div>
        </div>
      </div>

      {/* タブナビゲーション */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="border-b">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* ハイライトタブ */}
          {activeTab === 'highlights' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">自動検出されたハイライト</h3>
              <div className="grid gap-4">
                {analysis.highlights.map((highlight: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{highlight.timestamp}</div>
                      <div className="text-sm text-gray-600">{highlight.reason}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary-600">{highlight.score}</div>
                      <div className="text-xs text-gray-500">スコア</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 感情分析タブ */}
          {activeTab === 'emotions' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">時系列感情分析</h3>
              <div className="space-y-4">
                {analysis.emotions.map((emotion: any, index: number) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="font-medium text-gray-900 mb-3">{emotion.time}</div>
                    <div className="grid grid-cols-5 gap-2">
                      <div className="text-center">
                        <div className="h-2 bg-gray-200 rounded-full mb-1">
                          <div 
                            className="h-2 bg-yellow-500 rounded-full" 
                            style={{width: `${emotion.happy}%`}}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-600">喜び {emotion.happy}%</div>
                      </div>
                      <div className="text-center">
                        <div className="h-2 bg-gray-200 rounded-full mb-1">
                          <div 
                            className="h-2 bg-blue-500 rounded-full" 
                            style={{width: `${emotion.sad}%`}}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-600">悲しみ {emotion.sad}%</div>
                      </div>
                      <div className="text-center">
                        <div className="h-2 bg-gray-200 rounded-full mb-1">
                          <div 
                            className="h-2 bg-red-500 rounded-full" 
                            style={{width: `${emotion.angry}%`}}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-600">怒り {emotion.angry}%</div>
                      </div>
                      <div className="text-center">
                        <div className="h-2 bg-gray-200 rounded-full mb-1">
                          <div 
                            className="h-2 bg-purple-500 rounded-full" 
                            style={{width: `${emotion.surprise}%`}}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-600">驚き {emotion.surprise}%</div>
                      </div>
                      <div className="text-center">
                        <div className="h-2 bg-gray-200 rounded-full mb-1">
                          <div 
                            className="h-2 bg-gray-500 rounded-full" 
                            style={{width: `${emotion.neutral}%`}}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-600">中立 {emotion.neutral}%</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* オブジェクト検出タブ */}
          {activeTab === 'objects' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">検出されたオブジェクト</h3>
              <div className="grid gap-4">
                {analysis.objects.map((object: any, index: number) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">{object.name}</div>
                      <div className="text-sm text-gray-600">検出数: {object.count}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{object.confidence}%</div>
                      <div className="text-xs text-gray-500">信頼度</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* パフォーマンス予測タブ */}
          {activeTab === 'predictions' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">パフォーマンス予測</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">予想視聴数</h4>
                    <p className="text-2xl font-bold text-blue-700">15,000 - 25,000</p>
                    <p className="text-sm text-blue-600 mt-1">初回24時間以内</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">予想エンゲージメント</h4>
                    <p className="text-2xl font-bold text-green-700">8.5%</p>
                    <p className="text-sm text-green-600 mt-1">業界平均より15%高</p>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium text-yellow-800 mb-1">パフォーマンス要因</p>
                      <ul className="text-yellow-700 space-y-1">
                        <li>• 感情の変化が豊かで視聴者を飽きさせない構成</li>
                        <li>• 効果的なハイライトが多数検出されている</li>
                        <li>• オブジェクト検出により、視覚的に豊富なコンテンツ</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 最適化提案タブ */}
          {activeTab === 'suggestions' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">最適化提案</h3>
              <div className="space-y-4">
                {analysis.suggestions.map((suggestion: any, index: number) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <Target className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900">{suggestion.type}</h4>
                          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">推奨</span>
                        </div>
                        <p className="text-gray-700 mb-2">{suggestion.recommendation}</p>
                        <p className="text-sm text-green-600 font-medium">{suggestion.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnalysisResults;