import { Search } from "lucide-react";

interface TechStackSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

export const TechStackSearchInput = ({
  value,
  onChange,
  placeholder,
}: TechStackSearchInputProps) => (
  <div className="relative group w-full mb-4">
    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
      <Search className="h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
    </div>

    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-gray-500 transition-all placeholder:text-slate-400"
    />
  </div>
);
