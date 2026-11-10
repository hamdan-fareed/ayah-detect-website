import React, { createContext, useContext, useState, useCallback } from 'react';

interface ToastContextType {
  showToast: (message: string, duration?: number) => void;
  copyEmailAndToast: (email?: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const showToast = useCallback((message: string, duration: number = 2600) => {
    if (timerId) clearTimeout(timerId);
    setToastMessage(message);
    const id = setTimeout(() => {
      setToastMessage(null);
    }, duration);
    setTimerId(id);
  }, [timerId]);

  const copyEmailAndToast = useCallback((email: string = 'hamdanfareedibniqbal@gmail.com') => {
    // 1. Silent clipboard copy
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).catch(() => {});
    }
    // 2. Trigger native mailto
    window.location.href = `mailto:${email}`;
    // 3. Show 0px zero-radius monospaced micro-toast
    showToast(`[ email copied: ${email} ]`, 2600);
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ showToast, copyEmailAndToast }}>
      {children}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        >
          <div className="bg-[#09090b] text-[#fbfbf8] font-mono-tech text-xs tracking-wider px-4 py-2.5 rounded-none border border-neutral-800 shadow-2xl flex items-center justify-center transition-all duration-150 animate-in fade-in slide-in-from-bottom-2">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};
