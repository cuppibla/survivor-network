import { useEffect } from 'react';
import { MainLayout } from './components/layout/MainLayout';
import { GraphCanvas } from './components/graph/GraphCanvas';
import { DetailsPanel } from './components/details/DetailsPanel';
import { ChatPanel } from './components/chat/ChatPanel';
import { useGraphStore } from './stores/graphStore';

function App() {
  const { fetchGraph, isLoading, error } = useGraphStore();

  useEffect(() => {
    fetchGraph();
  }, [fetchGraph]);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-accent-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-400">Loading survivor network...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <p className="text-accent-red mb-2">Error loading graph</p>
            <p className="text-gray-400 text-sm">{error}</p>
            <button
              onClick={() => fetchGraph()}
              className="mt-4 px-4 py-2 bg-accent-cyan/20 border border-accent-cyan/50 text-accent-cyan rounded-lg hover:bg-accent-cyan/30 transition-all"
            >
              Retry
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Three-panel layout - explicit height chain */}
      <div className="flex-1 flex flex-col min-h-0" style={{ height: '100%' }}>
        {/* Top: Graph and Details - flex-1 takes remaining space */}
        <div className="flex-1 flex overflow-hidden min-h-0">
          {/* Left: Graph Canvas */}
          <div className="flex-1 p-4 min-h-0" style={{ display: 'flex', flexDirection: 'column' }}>
            <GraphCanvas />
          </div>

          {/* Right: Details Panel */}
          <div className="w-96 p-4 pl-0 flex-shrink-0 overflow-y-auto">
            <DetailsPanel />
          </div>
        </div>

        {/* Bottom: Chat Panel - fixed height, won't expand */}
        <div className="px-4 pb-4 flex-shrink-0" style={{ height: '240px', minHeight: '240px', maxHeight: '240px' }}>
          <ChatPanel />
        </div>
      </div>
    </MainLayout>
  );
}

export default App;
