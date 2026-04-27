import React from 'react';
import { TrendingUp, Eye, Heart, Share2, BarChart3 } from 'lucide-react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard: React.FC = () => {
  // サンプルデータ
  const engagementData = {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月'],
    datasets: [
      {
        label: 'エンゲージメント率',
        data: [65, 72, 80, 78, 85, 88],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const contentTypeData = {
    labels: ['コメディ', 'アクション', 'ドラマ', 'ホラー', 'ロマンス'],
    datasets: [
      {
        data: [35, 25, 20, 12, 8],
        backgroundColor: [
          '#3B82F6',
          '#10B981',
          '#F59E0B',
          '#EF4444',
          '#8B5CF6',
        ],
      },
    ],
  };

  const performanceData = {
    labels: ['動画A', '動画B', '動画C', '動画D', '動画E'],
    datasets: [
      {
        label: '視聴時間（分）',
        data: [342, 289, 401, 198, 156],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
      },
      {
        label: 'シェア数',
        data: [45, 32, 67, 28, 19],
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
      },
    ],
  };

  const stats = [
    {
      title: '総視聴時間',
      value: '1,234h',
      change: '+12.5%',
      icon: Eye,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: '平均エンゲージメント',
      value: '85.2%',
      change: '+8.3%',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      title: '総シェア数',
      value: '456',
      change: '+15.7%',
      icon: Share2,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: '分析済み動画',
      value: '89本',
      change: '+23.1%',
      icon: BarChart3,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">分析ダッシュボード</h2>
        <p className="text-lg text-gray-600">動画コンテンツのパフォーマンス概要</p>
      </div>

      {/* 統計カード */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                {stat.change}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-500 mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* チャートエリア */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* エンゲージメント推移 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
            エンゲージメント推移
          </h3>
          <div className="h-64">
            <Line 
              data={engagementData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    max: 100,
                  },
                },
              }}
            />
          </div>
        </div>

        {/* コンテンツタイプ分布 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-4">コンテンツタイプ分布</h3>
          <div className="h-64">
            <Doughnut 
              data={contentTypeData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* パフォーマンス比較 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">動画パフォーマンス比較</h3>
        <div className="h-80">
          <Bar 
            data={performanceData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: 'top',
                },
              },
              scales: {
                x: {
                  stacked: false,
                },
                y: {
                  stacked: false,
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>

      {/* 最近の分析結果 */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold">最近の分析結果</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              { title: 'サンプル動画1.mp4', type: 'コメディ', score: 92, status: '完了' },
              { title: 'プロモーション動画.mov', type: 'プロモーション', score: 87, status: '完了' },
              { title: 'ドラマ予告編.mp4', type: 'ドラマ', score: 79, status: '分析中' },
              { title: 'アクションシーン.avi', type: 'アクション', score: 94, status: '完了' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b last:border-b-0">
                <div>
                  <p className="font-medium text-gray-900">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.type}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">スコア: {item.score}</p>
                    <p className={`text-xs ${item.status === '完了' ? 'text-green-600' : 'text-yellow-600'}`}>
                      {item.status}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;