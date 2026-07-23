import * as React from "react";
export function FileInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="flex cursor-pointer items-center justify-center border-2 border-dashed border-black bg-white px-6 py-8 text-center transition-colors hover:bg-[#ffe500]">
      <div>
        <div className="text-[13px] font-black uppercase tracking-wide">Drop file or click to upload</div>
        <input type="file" className="sr-only" {...props} />
      </div>
    </label>
  );
}
