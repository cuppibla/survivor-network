import React from 'react';
import { User, Zap, AlertCircle, Package, Map } from 'lucide-react';

export const GraphLegend: React.FC = () => {
    const legendItems = [
        { icon: User, label: 'Survivor', color: '#4ade80' },
        { icon: Zap, label: 'Skill', color: '#fbbf24' },
        { icon: AlertCircle, label: 'Need', color: '#f87171' },
        { icon: Package, label: 'Resource', color: '#60a5fa' },
        { icon: Map, label: 'Biome', color: '#a78bfa' },
    ];

    return (
        <div className="absolute top-4 right-4 bg-space-800/90 border border-gray-700 rounded-lg p-3 backdrop-blur-sm z-10">
            <h3 className="text-xs font-semibold text-gray-400 mb-2">Legend</h3>
            <div className="space-y-1.5">
                {legendItems.map(({ icon: Icon, label, color }) => (
                    <div key={label} className="flex items-center gap-2 text-xs">
                        <Icon size={14} style={{ color }} />
                        <span className="text-gray-300">{label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
