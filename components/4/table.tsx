import * as React from "react";
export function Table({ children }: { children: React.ReactNode }) {
  return <div className="w-full overflow-x-auto border-2 border-black"><table className="w-full border-collapse">{children}</table></div>;
}
export function TableHeader({ children }: { children: React.ReactNode }) { return <thead className="bg-[#ffe500]">{children}</thead>; }
export function TableBody({ children }: { children: React.ReactNode }) { return <tbody>{children}</tbody>; }
export function TableRow({ children }: { children: React.ReactNode }) { return <tr className="border-b-2 border-black last:border-b-0 odd:bg-white even:bg-gray-50">{children}</tr>; }
export function TableHead({ children }: { children: React.ReactNode }) { return <th className="border-r-2 border-black px-4 py-2.5 text-left text-[11px] font-black uppercase tracking-widest last:border-r-0">{children}</th>; }
export function TableCell({ children }: { children: React.ReactNode }) { return <td className="border-r-2 border-black px-4 py-2.5 text-[13.5px] font-medium last:border-r-0">{children}</td>; }
