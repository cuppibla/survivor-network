import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
    isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
    onSendMessage,
    isLoading,
}) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim() && !isLoading) {
            onSendMessage(message);
            setMessage('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="px-6 pb-4">
            <div className="relative">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter query for Mission Control AI..."
                    disabled={isLoading}
                    className={cn(
                        'w-full px-4 py-3 pr-12 rounded-lg',
                        'bg-space-700/50 border border-gray-700',
                        'text-white placeholder-gray-500',
                        'focus:outline-none focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/30',
                        'transition-all disabled:opacity-50 disabled:cursor-not-allowed'
                    )}
                />

                <button
                    type="submit"
                    disabled={!message.trim() || isLoading}
                    className={cn(
                        'absolute right-2 top-1/2 -translate-y-1/2',
                        'p-2 rounded-lg transition-all',
                        'bg-accent-cyan/20 border border-accent-cyan/50 text-accent-cyan',
                        'hover:bg-accent-cyan/30 hover:shadow-glow-sm-cyan',
                        'disabled:opacity-50 disabled:cursor-not-allowed'
                    )}
                >
                    <Send className="w-4 h-4" />
                </button>
            </div>
        </form>
    );
};
