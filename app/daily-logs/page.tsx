'use client';

import React, { useState } from 'react';
import { Download, FileText, Loader } from 'lucide-react';

export default function DownloadLogsPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const downloadLogs = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Call API to download the file
      const response = await fetch('/api/downloadlogs');
      
      if (!response.ok) {
        throw new Error('Failed to download logs');
      }

      // Get the file blob
      const blob = await response.blob();
      
      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = `logs-${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the URL
      window.URL.revokeObjectURL(url);
      
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError("Unable to download logs. Please try again later.");
      console.error('Download error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8 flex items-center justify-center">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-slate-950/80 backdrop-blur border border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <FileText className="text-white" size={40} />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-white text-center mb-2">
            Download Logs
          </h1>
          <p className="text-slate-400 text-center text-sm mb-8">
            Download your application logs file
          </p>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 mb-6 animate-in fade-in">
              <p className="text-emerald-300 text-sm font-medium">✓ Downloaded successfully!</p>
            </div>
          )}

          {/* Download Button */}
          <button
            onClick={downloadLogs}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-600/50 disabled:to-blue-700/50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition flex items-center justify-center gap-3 shadow-lg hover:shadow-blue-500/25 active:scale-95"
          >
            {loading ? (
              <>
                <Loader size={20} className="animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Download size={20} />
                Download logs.txt
              </>
            )}
          </button>

          {/* Info */}
          <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-slate-300 text-sm text-center">
              <span className="font-semibold">File:</span> logs.txt
            </p>
            <p className="text-slate-400 text-xs text-center mt-2">
              The file will be downloaded from your logs folder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}