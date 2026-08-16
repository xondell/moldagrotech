export function FieldVisual({ label, note }: { label: string; note: string }) {
  return (
    <div className="relative min-h-[510px] overflow-hidden rounded-[2rem] border border-white/10 field-gradient glass-grid shadow-panel" aria-label={label}>
      <svg className="absolute inset-x-0 bottom-0 h-[74%] w-full" viewBox="0 0 700 520" preserveAspectRatio="none" aria-hidden="true">
        <defs><linearGradient id="field" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#295f3c"/><stop offset="1" stopColor="#0a2016"/></linearGradient></defs>
        <path d="M0 260C180 190 440 180 700 220V520H0Z" fill="url(#field)"/>
        {[0,1,2,3,4,5,6,7].map((i) => <path key={i} d={`M${35+i*88} 520 L${300+i*18} 240`} stroke="#a6d85f" strokeOpacity=".27" strokeWidth="10"/>)}
        <path d="M0 327C145 294 386 290 700 316" stroke="#d3b66f" strokeOpacity=".38" strokeWidth="2" strokeDasharray="8 12" fill="none"/>
        <path d="M0 395C210 350 424 360 700 390" stroke="#5ca5b5" strokeOpacity=".28" strokeWidth="2" fill="none"/>
      </svg>
      <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[.14em] text-white/70 backdrop-blur">{label}</div>
      <div className="absolute right-5 top-5 rounded-full border border-agro-400/30 bg-agro-400/10 px-3 py-2 text-xs font-semibold text-agro-300">Field 08 · Online</div>
      <div className="absolute left-[12%] top-[36%] h-3 w-3 rounded-full bg-agro-400 shadow-[0_0_0_8px_rgba(166,216,95,.12),0_0_35px_rgba(166,216,95,.5)]"/>
      <div className="absolute right-[19%] top-[46%] h-3 w-3 rounded-full bg-data shadow-[0_0_0_8px_rgba(92,165,181,.12)]"/>
      <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-3">
        {[['Soil moisture','42%','Stable'],['Temperature','24.8°C','+0.6°'],['Irrigation','Standby','Auto']].map(([k,v,s]) => <div key={k} className="rounded-2xl border border-white/10 bg-forest-950/75 p-4 backdrop-blur-xl"><p className="text-[10px] font-bold uppercase tracking-[.13em] text-white/40">{k}</p><div className="mt-2 flex items-end justify-between gap-2"><strong className="text-xl font-semibold text-white">{v}</strong><span className="text-xs text-agro-300">{s}</span></div></div>)}
      </div>
      <p className="absolute bottom-[116px] left-6 text-[10px] text-white/40 sm:bottom-[106px]">{note}</p>
    </div>
  );
}
