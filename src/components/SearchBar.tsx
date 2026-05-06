// SearchBar.tsx
import type { ChangeEvent } from 'react';
import { HiSearch } from 'react-icons/hi';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="flex items-center flex-1 gap-2">
      <HiSearch className="text-slate-500 shrink-0" />
      <input
        type="search"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        placeholder="Search..."
        className="w-full bg-transparent border-none text-sm text-slate-200 placeholder:text-slate-500 focus:ring-0 outline-none"
      />
    </div>
  );
};