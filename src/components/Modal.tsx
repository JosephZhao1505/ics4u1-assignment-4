import type { ReactNode } from 'react';
import { HiX } from 'react-icons/hi';

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-slate-950/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2rem] bg-slate-900 border border-slate-800 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-950/50 text-slate-400 hover:text-white hover:bg-indigo-600 transition-all z-50 border border-slate-700/50"
        >
          <HiX className="w-6 h-6" />
        </button>

        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};