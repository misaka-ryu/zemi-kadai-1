import React, { useState, useRef } from 'react';
import { Upload, Film, AlertCircle } from 'lucide-react';

interface VideoUploadProps {
  onVideoUpload: (videoUrl: string) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ onVideoUpload }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    // 動画ファイルかチェック
    if (!file.type.startsWith('video/')) {
      alert('動画ファイルを選択してください');
      return;
    }

    setIsUploading(true);
    
    try {
      // 実際の実装では、ここでバックエンドにアップロードします
      // 現在はモックとして、ローカルURL生成
      const videoUrl = URL.createObjectURL(file);
      
      // 分析処理のシミュレーション（2秒待機）
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      onVideoUpload(videoUrl);
    } catch (error) {
      console.error('アップロードエラー:', error);
      alert('アップロードに失敗しました');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragOver
            ? 'border-primary-500 bg-primary-50'
            : 'border-gray-300 hover:border-gray-400'
        } ${isUploading ? 'opacity-50 pointer-events-none' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        {isUploading ? (
          <div className="space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
            <p className="text-lg font-medium text-gray-900">分析処理中...</p>
            <p className="text-sm text-gray-600">動画を解析しています。しばらくお待ちください。</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <Film className="h-8 w-8 text-gray-400" />
            </div>
            
            <div>
              <p className="text-lg font-medium text-gray-900 mb-2">
                動画ファイルをドラッグ＆ドロップ
              </p>
              <p className="text-sm text-gray-600 mb-4">
                または
              </p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-md flex items-center space-x-2 mx-auto transition-colors"
              >
                <Upload className="h-4 w-4" />
                <span>ファイルを選択</span>
              </button>
            </div>
            
            <div className="text-xs text-gray-500 space-y-1">
              <p>対応形式: MP4, MOV, AVI, MKV</p>
              <p>最大ファイルサイズ: 500MB</p>
            </div>
          </div>
        )}
      </div>

      {/* 注意事項 */}
      <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-md p-4">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
          <div className="text-sm">
            <p className="font-medium text-yellow-800 mb-1">プロトタイプ版の注意事項</p>
            <ul className="text-yellow-700 space-y-1 list-disc list-inside">
              <li>実際のAI分析は簡略化されています</li>
              <li>サンプルデータによる模擬分析結果を表示します</li>
              <li>動画ファイルはローカルで処理され、サーバーにアップロードされません</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;