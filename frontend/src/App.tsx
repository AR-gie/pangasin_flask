import { useState, useRef, useEffect } from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar, Cell,
  LineChart, Line,
  PieChart, Pie,
} from "recharts";

const assetPathPrefix = "/assets";
const imgMainLogo = `${assetPathPrefix}/2157f.svg`;
const imgMonthlyProductionChart = `${assetPathPrefix}/cfc73.png`;
const imgMunicipalProductionChart = `${assetPathPrefix}/4798e.png`;
const imgPangAsin = `${assetPathPrefix}/39a6d.svg`;
const imgInsightsAnalytics = `${assetPathPrefix}/912ac.svg`;
const imgLogo = `${assetPathPrefix}/89359.svg`;
const imgVector = `${assetPathPrefix}/3acf9.svg`;
const imgMapBackground = `${assetPathPrefix}/4ac85.svg`;
const imgBolinao = `${assetPathPrefix}/3b2bf.svg`;
const imgAnda = `${assetPathPrefix}/62f4c.svg`;
const imgAlaminos = `${assetPathPrefix}/80f30.svg`;
const imgDagupan = `${assetPathPrefix}/3b168.svg`;
const imgLingayen = `${assetPathPrefix}/2054d.svg`;
const imgSual = `${assetPathPrefix}/e2a5e.svg`;
const imgSanCarlos = `${assetPathPrefix}/e58ed.svg`;
const imgUrdaneta = `${assetPathPrefix}/7c212.svg`;
const imgRosales = `${assetPathPrefix}/b345b.svg`;
const imgBinmaley = `${assetPathPrefix}/8a168.svg`;
const imgBani = `${assetPathPrefix}/27ee8.svg`;
const imgCalasiao = `${assetPathPrefix}/956b9.svg`;
const imgMabini = `${assetPathPrefix}/400e0.svg`;
const imgLabrador = `${assetPathPrefix}/1d090.svg`;
const imgManaoag = `${assetPathPrefix}/a4ae2.svg`;
const imgSanFabian = `${assetPathPrefix}/67a5b.svg`;
const imgBugallon = `${assetPathPrefix}/4109f.svg`;
const imgBayambang = `${assetPathPrefix}/56823.svg`;
const imgMangatarem = `${assetPathPrefix}/90b65.svg`;
const imgAguilar = `${assetPathPrefix}/9bbcc.svg`;
const imgBasista = `${assetPathPrefix}/6d64d.svg`;
const imgUmingan = `${assetPathPrefix}/126e7.svg`;
const imgUrbiztondo = `${assetPathPrefix}/4fdd2.svg`;
const imgAstingan = `${assetPathPrefix}/29b52.svg`;
const imgMangaldan = `${assetPathPrefix}/119fb.svg`;
const imgAgno = `${assetPathPrefix}/c8cc2.svg`;
const imgBurgos = `${assetPathPrefix}/a3ea2.svg`;
const imgPozorrubio = `${assetPathPrefix}/5ffc7.svg`;
const imgSanJacinto = `${assetPathPrefix}/42c2e.svg`;
const imgLaoac = `${assetPathPrefix}/dbf15.svg`;
const imgMapandan = `${assetPathPrefix}/c4c9e.svg`;
const imgDasol = `${assetPathPrefix}/3f9fb.svg`;
const imgBinalonan = `${assetPathPrefix}/e9969.svg`;
const imgSanManuel = `${assetPathPrefix}/43f48.svg`;
const imgSantaBarbara = `${assetPathPrefix}/566f6.svg`;
const imgSantoTomas = `${assetPathPrefix}/74f06.svg`;
const imgSison = `${assetPathPrefix}/a4cb9.svg`;
const imgNatividad = `${assetPathPrefix}/e4e06.svg`;
const imgVillasis = `${assetPathPrefix}/a5923.svg`;
const imgAruan = `${assetPathPrefix}/a4555.svg`;
const imgBautista = `${assetPathPrefix}/41ca7.svg`;
const imgSolano = `${assetPathPrefix}/ef51a.svg`;
const imgTayug = `${assetPathPrefix}/88015.svg`;
const imgAlaminos1 = `${assetPathPrefix}/a2dc9.svg`;
const imgLingayen1 = `${assetPathPrefix}/012d5.svg`;
const imgLaoac1 = `${assetPathPrefix}/fed5f.svg`;
const imgDagupan1 = `${assetPathPrefix}/7a37b.svg`;
const imgMangatarem1 = `${assetPathPrefix}/b1e99.svg`;
const imgPositino = `${assetPathPrefix}/0da91.svg`;
const imgPozorrubio1 = `${assetPathPrefix}/9deb7.svg`;
const imgBurgos1 = `${assetPathPrefix}/a69be.svg`;
const imgBolinao1 = `${assetPathPrefix}/99b46.svg`;
const imgCabanatuan = `${assetPathPrefix}/34377.svg`;
const imgSanJacinto1 = `${assetPathPrefix}/ab6be.svg`;
const imgAsingan = `${assetPathPrefix}/da56a.svg`;
const imgEllipse4 = `${assetPathPrefix}/8526b.svg`;
const imgEllipse1 = `${assetPathPrefix}/cae28.svg`;
const imgEllipse3 = `${assetPathPrefix}/5ad19.svg`;
const imgEllipse2 = `${assetPathPrefix}/8bda2.svg`;

const MAP_W = 1360;
const MAP_H = 600;

const montserrat = (weight: number) => ({ fontFamily: "Montserrat, sans-serif", fontWeight: weight });
const impact = { fontFamily: "Impact, sans-serif" };

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar({ onSignIn, label = "Sign in" }: { onSignIn?: () => void; label?: string }) {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-[70px] flex items-center justify-between px-5 sm:px-10">
      <div className="h-[38px] w-[160px] relative shrink-0">
        <img alt="PangAsin" className="absolute block inset-0 max-w-none size-full" src={imgMainLogo} />
      </div>
      {onSignIn && (
        <button
          onClick={onSignIn}
          className="bg-[#008cff] h-[40px] px-5 rounded-[10px] cursor-pointer text-white text-[16px] sm:text-[18px] tracking-[0.2px] shrink-0"
          style={montserrat(900)}
        >
          {label}
        </button>
      )}
    </nav>
  );
}

// ─── KPI Card ─────────────────────────────────────────────────────────────────
function KpiCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white border border-[#cacaca] rounded-[20px] h-[100px] flex flex-col items-center justify-center gap-1 min-w-0">
      <p className="text-[#008cff] text-[32px] sm:text-[36px] leading-none" style={montserrat(900)}>{value}</p>
      <p className="text-[#0a2d5d] text-[11px] sm:text-[12px] leading-normal" style={montserrat(700)}>{label}</p>
    </div>
  );
}

// ─── Chart data ───────────────────────────────────────────────────────────────
const monthlyData = [
  { month: "Jul",  actual: 7100,  target: 7000  },
  { month: "Aug",  actual: 8600,  target: 8400  },
  { month: "Sep",  actual: 9900,  target: 9600  },
  { month: "Oct",  actual: 10800, target: 10500 },
  { month: "Nov",  actual: 10100, target: 9900  },
  { month: "Dec",  actual: 9400,  target: 9300  },
  { month: "Jan",  actual: 7600,  target: 7800  },
  { month: "Feb",  actual: 8100,  target: 8000  },
  { month: "Mar",  actual: 9600,  target: 9400  },
  { month: "Apr",  actual: 10600, target: 10300 },
  { month: "May",  actual: 11000, target: 10700 },
  { month: "Jun",  actual: 9100,  target: 8900  },
];

const muniBarData = [
  { name: "Bolinao",     value: 2100, color: "#4C9BE8" },
  { name: "Dasol",       value: 1950, color: "#4C9BE8" },
  { name: "Infanta",     value: 1720, color: "#4C9BE8" },
  { name: "Lingayen",    value: 1450, color: "#F5A623" },
  { name: "Alaminos",    value: 1230, color: "#F5A623" },
  { name: "San Fabian",  value: 890,  color: "#E05C5C" },
  { name: "Bani",        value: 640,  color: "#E05C5C" },
];

function MonthlyTrendChart() {
  return (
    <div className="bg-white border border-[#cacaca] rounded-[20px] overflow-hidden p-5 flex flex-col gap-3">
      <p className="text-[#0a2d5d] text-[18px] sm:text-[20px] text-center" style={impact}>Monthly Production Trend</p>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={monthlyData} margin={{ top: 8, right: 8, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="gradActual" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#4C9BE8" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#4C9BE8" stopOpacity={0.0}  />
            </linearGradient>
            <linearGradient id="gradTarget" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#F5A623" stopOpacity={0.18} />
              <stop offset="95%" stopColor="#F5A623" stopOpacity={0.0}  />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="4 4" stroke="#e8eef4" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 11, fontFamily: "Montserrat, sans-serif", fill: "#888" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fontFamily: "Montserrat, sans-serif", fill: "#888" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} domain={[0, 16000]} />
          <Tooltip
            formatter={(v: number, name: string) => [`${v.toLocaleString()} MT`, name === "actual" ? "Actual" : "Target"]}
            labelStyle={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 12, color: "#0a2d5d" }}
            contentStyle={{ border: "1px solid #e0e0e0", borderRadius: 10, fontFamily: "Montserrat, sans-serif", fontSize: 11 }}
          />
          <Legend formatter={(v) => v === "actual" ? "Actual" : "Target"} wrapperStyle={{ fontSize: 11, fontFamily: "Montserrat, sans-serif" }} />
          <Area type="monotone" dataKey="target" stroke="#F5A623" strokeWidth={2} fill="url(#gradTarget)" dot={false} />
          <Area type="monotone" dataKey="actual" stroke="#4C9BE8" strokeWidth={2} fill="url(#gradActual)" dot={false} activeDot={{ r: 4 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function MunicipalityBarChart() {
  return (
    <div className="bg-white border border-[#cacaca] rounded-[20px] overflow-hidden p-5 flex flex-col gap-3">
      <p className="text-[#0a2d5d] text-[18px] sm:text-[20px] text-center" style={impact}>Production per Municipality</p>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={muniBarData} layout="vertical" margin={{ top: 0, right: 20, left: 10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="#e8eef4" horizontal={false} />
          <XAxis type="number" tick={{ fontSize: 11, fontFamily: "Montserrat, sans-serif", fill: "#888" }} axisLine={false} tickLine={false} tickFormatter={(v) => String(v)} domain={[0, 2600]} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fontFamily: "Montserrat, sans-serif", fill: "#555" }} axisLine={false} tickLine={false} width={58} />
          <Tooltip
            formatter={(v: number) => [`${v.toLocaleString()} MT`, "Production"]}
            labelStyle={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 12, color: "#0a2d5d" }}
            contentStyle={{ border: "1px solid #e0e0e0", borderRadius: 10, fontFamily: "Montserrat, sans-serif", fontSize: 11 }}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={18}>
            {muniBarData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

// ─── Municipality data ────────────────────────────────────────────────────────
interface MuniInfo {
  saltProduced: string;
  farmArea: string;
  saltBeds: number | string;
  method: string;
  rate: string;
}
const MUNI_DATA: Record<string, MuniInfo> = {
  BOLINAO:       { saltProduced: "2,100 MT", farmArea: "580 ha", saltBeds: 145, method: "Solar Evaporation", rate: "3.6 kg/m²" },
  DASOL:         { saltProduced: "1,950 MT", farmArea: "540 ha", saltBeds: 135, method: "Solar Evaporation", rate: "3.6 kg/m²" },
  INFANTA:       { saltProduced: "1,720 MT", farmArea: "482 ha", saltBeds: 120, method: "Solar Evaporation", rate: "3.6 kg/m²" },
  LINGAYEN:      { saltProduced: "1,450 MT", farmArea: "412 ha", saltBeds: 103, method: "Solar Evaporation", rate: "3.5 kg/m²" },
  ALAMINOS:      { saltProduced: "1,230 MT", farmArea: "350 ha", saltBeds: 87,  method: "Solar Evaporation", rate: "3.5 kg/m²" },
  "SAN FABIAN":  { saltProduced: "890 MT",   farmArea: "256 ha", saltBeds: 64,  method: "Solar Evaporation", rate: "3.5 kg/m²" },
  BANI:          { saltProduced: "640 MT",   farmArea: "184 ha", saltBeds: 46,  method: "Solar Evaporation", rate: "3.5 kg/m²" },
};

interface PopupState { name: string; info: MuniInfo | null; x: number; y: number; }

// ─── Choropleth Map ───────────────────────────────────────────────────────────
function ChoroplethMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [baseScale, setBaseScale] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [popup, setPopup] = useState<PopupState | null>(null);

  // Keep refs up-to-date so non-passive event handlers avoid stale closures
  const zoomRef = useRef(zoom);
  const panRef = useRef(pan);
  const baseScaleRef = useRef(baseScale);
  useEffect(() => { zoomRef.current = zoom; }, [zoom]);
  useEffect(() => { panRef.current = pan; }, [pan]);
  useEffect(() => { baseScaleRef.current = baseScale; }, [baseScale]);

  const dragRef = useRef({ active: false, startX: 0, startY: 0, panX: 0, panY: 0, moved: false });

  const clamp = (x: number, y: number, s: number) => {
    const el = containerRef.current;
    const cW = el?.clientWidth ?? MAP_W * s;
    const cH = el?.clientHeight ?? MAP_H * s;
    return {
      x: Math.min(0, Math.max(cW - MAP_W * s, x)),
      y: Math.min(0, Math.max(cH - MAP_H * s, y)),
    };
  };

  // ResizeObserver: fit map to container
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      setBaseScale(e.contentRect.width / MAP_W);
      setZoom(1);
      setPan({ x: 0, y: 0 });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Non-passive wheel handler (zoom-to-cursor)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      const bs = baseScaleRef.current;
      const z = zoomRef.current;
      const p = panRef.current;
      const rect = el.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const factor = e.deltaY < 0 ? 1.15 : 1 / 1.15;
      const newZoom = Math.max(1, Math.min(5, z * factor));
      const oldEff = bs * z;
      const newEff = bs * newZoom;
      const newPan = clamp(
        cx - (cx - p.x) * (newEff / oldEff),
        cy - (cy - p.y) * (newEff / oldEff),
        newEff
      );
      setZoom(newZoom);
      setPan(newPan);
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Non-passive touch handler to block page scroll while panning
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: TouchEvent) => { if (dragRef.current.active) e.preventDefault(); };
    el.addEventListener("touchmove", handler, { passive: false });
    return () => el.removeEventListener("touchmove", handler);
  }, []);

  const effectiveScale = baseScale * zoom;

  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = { active: true, startX: e.clientX, startY: e.clientY, panX: pan.x, panY: pan.y, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    if (!dragRef.current.moved && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) dragRef.current.moved = true;
    if (dragRef.current.moved) setPan(clamp(dragRef.current.panX + dx, dragRef.current.panY + dy, effectiveScale));
  };
  const onPointerUp = () => { dragRef.current.active = false; };

  const doZoom = (factor: number) => {
    const el = containerRef.current;
    if (!el) return;
    const cx = el.clientWidth / 2;
    const cy = el.clientHeight / 2;
    const newZoom = Math.max(1, Math.min(5, zoom * factor));
    const oldEff = effectiveScale;
    const newEff = baseScale * newZoom;
    setZoom(newZoom);
    setPan(clamp(cx - (cx - pan.x) * (newEff / oldEff), cy - (cy - pan.y) * (newEff / oldEff), newEff));
  };

  const handleShapeClick = (name: string, e: React.MouseEvent) => {
    if (dragRef.current.moved) return;
    e.stopPropagation();
    const rect = containerRef.current!.getBoundingClientRect();
    setPopup({ name, info: MUNI_DATA[name] ?? null, x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const shape = (src: string, left: string, top: string, w: string, h: string, name: string, inset?: string) => (
    <div
      className="absolute"
      style={{ left, top, width: w, height: h, transform: "translate(-50%,-50%)", cursor: "pointer" }}
      onClick={(e) => handleShapeClick(name, e)}
    >
      <div className="absolute" style={{ inset: inset ?? "0" }}>
        <img alt={name} className="block max-w-none size-full" src={src} />
      </div>
    </div>
  );

  const lbl = (text: string, left: string, top: string, w: string) => (
    <div className="absolute flex flex-col justify-center" style={{ ...impact, fontSize: 14, color: "#000", left, top, width: w, transform: "translateY(-50%)", pointerEvents: "none", lineHeight: 1.2 }}>
      {text.split(" ").map((t, i) => <p key={i}>{t}</p>)}
    </div>
  );

  // Popup position: appear near click, clamped within container
  const popupW = 270;
  const popupH = 220;
  const popupLeft = popup ? Math.min(Math.max(popup.x + 12, 8), (containerRef.current?.clientWidth ?? 400) - popupW - 8) : 0;
  const popupTop  = popup ? Math.min(Math.max(popup.y - 20, 8), (containerRef.current?.clientHeight ?? 300) - popupH - 8) : 0;

  return (
    <div
      ref={containerRef}
      className="w-full rounded-[20px] overflow-hidden select-none cursor-grab active:cursor-grabbing"
      style={{ paddingBottom: `${(MAP_H / MAP_W) * 100}%`, position: "relative", background: "linear-gradient(to bottom, #41a6ff, #0066ff)" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onClick={() => setPopup(null)}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div style={{ width: MAP_W, height: MAP_H, transformOrigin: "top left", transform: `translate(${pan.x}px,${pan.y}px) scale(${effectiveScale})`, position: "absolute", top: 0, left: 0 }}>
          {/* Background */}
          <div className="absolute" style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 2427.092, height: 1642 }}>
            <img alt="" className="block max-w-none size-full" src={imgMapBackground} />
          </div>
          {/* Municipality shapes */}
          {shape(imgBolinao,     "calc(50% - 528.41px)", "calc(50% - 92.98px)",   "136.719px", "206.54px",  "BOLINAO",    "-0.39% -0.37% -0.25% -0.47%")}
          {shape(imgAnda,        "calc(50% - 110.32px)", "calc(50% + 210.37px)",  "143.517px", "185.026px", "ANDA",       "-0.38% -0.5% -0.51% -0.37%")}
          {shape(imgAlaminos,    "calc(50% - 371.3px)",  "calc(50% - 150.21px)",  "177.508px", "188.468px", "ALAMINOS",   "-0.69% -0.5% -0.36% -0.4%")}
          {shape(imgDagupan,     "calc(50% + 191.07px)", "calc(50% + 169.5px)",   "92.153px",  "58.52px",   "DAGUPAN",    "-0.81% -0.64% -0.87% -0.62%")}
          {shape(imgLingayen,    "calc(50% - 379.23px)", "calc(50% - 283.17px)",  "104.239px", "135.972px", "LINGAYEN",   "-0.55% -1.01% -0.41% -0.5%")}
          {shape(imgSual,        "calc(50% + 311.92px)", "calc(50% + 22.77px)",   "119.346px", "109.294px", "SUAL",       "-0.48% -0.49% -0.5% -1.08%")}
          {shape(imgSanCarlos,   "calc(50% + 352.33px)", "calc(50% + 128.19px)",  "101.973px", "111.876px", "SAN CARLOS", "-0.48% -0.62% -0.46% -0.55%")}
          {shape(imgUrdaneta,    "calc(50% - 494.04px)", "calc(50% - 192.81px)",  "187.328px", "151.463px", "URDANETA",   "-0.33% -0.31% -0.79% -0.27%")}
          {shape(imgRosales,     "calc(50% + 66.43px)",  "calc(50% + 162.18px)",  "58.918px",  "52.496px",  "ROSALES",    "-0.97% -1.11% -1.14% -1%")}
          {shape(imgBinmaley,    "calc(50% + 175.58px)", "calc(50% + 236.62px)",  "108.016px", "75.731px",  "BINMALEY",   "-0.66% -0.59% -0.84% -0.47%")}
          {shape(imgBani,        "calc(50% + 117.42px)", "calc(50% + 236.62px)",  "139.741px", "141.136px", "BANI",       "-0.43% -0.57% -0.43% -0.42%")}
          {shape(imgCalasiao,    "calc(50% + 253.38px)", "calc(50% - 52.97px)",   "86.866px",  "119.621px", "CALASIAO",   "-0.53% -0.6% -0.43% -0.67%")}
          {shape(imgMabini,      "calc(50% - 55.18px)",  "calc(50% + 21.04px)",   "77.046px",  "119.621px", "MABINI",     "-0.53% -0.65% -0.81% -0.82%")}
          {shape(imgLabrador,    "calc(50% - 499.71px)", "calc(50% - 320.18px)",  "159.38px",  "154.905px", "LABRADOR",   "-0.64% -0.32% -0.56% -0.45%")}
          {shape(imgManaoag,     "calc(50% - 142.42px)", "calc(50% + 123.88px)",  "147.294px", "222.031px", "MANAOAG",    "-0.25% -0.36% -0.37% -0.4%")}
          {shape(imgSanFabian,   "calc(50% - 509.15px)", "calc(50% + 0.39px)",    "184.307px", "162.651px", "SAN FABIAN", "-0.49% -0.28% -0.42% -0.28%")}
          {shape(imgBugallon,    "calc(50% + 20.73px)",  "calc(50% + 28.79px)",   "82.334px",  "88.64px",   "BUGALLON",   "-0.67% -0.37% -0.54% -0.64%")}
          {shape(imgBayambang,   "calc(50% - 1.55px)",   "calc(50% - 46.51px)",   "90.643px",  "104.991px", "BAYAMBANG",  "-0.5% -0.7% -0.67% -0.76%")}
          {shape(imgMangatarem,  "calc(50% - 463.45px)", "calc(50% + 79.56px)",   "254.555px", "167.814px", "MANGATAREM", "-0.3% -0.21% -0.65% -0.66%")}
          {shape(imgAguilar,     "calc(50% - 331.26px)", "calc(50% + 174.66px)",  "274.194px", "132.53px",  "AGUILAR",    "-0.55% -0.25% -0.38% -0.22%")}
          {shape(imgBasista,     "calc(50% - 203.99px)", "calc(50% + 30.08px)",   "114.814px", "156.627px", "BASISTA",    "-0.34% -0.65% -0.64% -0.48%")}
          {shape(imgUmingan,     "calc(50% + 192.58px)", "calc(50% - 27.58px)",   "71.003px",  "84.337px",  "UMINGAN",    "-0.67% -0.75% -0.6% -0.71%")}
          {shape(imgUrbiztondo,  "calc(50% - 132.98px)", "calc(50% + 30.94px)",   "142.007px", "117.04px",  "URBIZTONDO", "-0.51% -0.35% -0.5% -1.22%")}
          {shape(imgAstingan,    "calc(50% - 342.97px)", "calc(50% + 8.57px)",    "297.61px",  "251.291px", "ASINGAN",    "-0.34% -0.31% -0.2% -0.21%")}
          {shape(imgMangaldan,   "calc(50% + 120.82px)", "calc(50% + 113.56px)",  "132.943px", "129.088px", "MANGALDAN",  "-0.46% -0.49% -0.46% -0.39%")}
          {shape(imgAgno,        "calc(50% + 151.79px)", "calc(50% - 29.3px)",    "92.153px",  "84.337px",  "AGNO",       "-0.64% -0.98% -0.74% -0.68%")}
          {shape(imgBurgos,      "calc(50% + 61.14px)",  "calc(50% - 47.8px)",    "86.11px",   "80.034px",  "BURGOS",     "-0.83% -2.27% -0.69% -0.77%")}
          {shape(imgPozorrubio,  "calc(50% - 54.8px)",   "calc(50% + 303.32px)",  "218.298px", "243.546px", "POZORRUBIO", "-0.25% -0.26% -0.31% -0.27%")}
          {shape(imgSanJacinto,  "calc(50% + 111px)",    "calc(50% - 3.48px)",    "81.578px",  "58.52px",   "SAN JACINTO","-1.08% -0.65% -0.99% -1.65%")}
          {shape(imgLaoac,       "calc(50% + 485.65px)", "calc(50% - 37.04px)",   "128.41px",  "110.155px", "LAOAC",      "-0.74% -0.49% -0.64% -0.47%")}
          {shape(imgMapandan,    "calc(50% + 175.58px)", "calc(50% - 107.61px)",  "112.548px", "82.616px",  "MAPANDAN",   "-0.71% -0.49% -0.61% -0.45%")}
          {shape(imgDasol,       "calc(50% + 230.72px)", "calc(50% + 111.41px)",  "133.698px", "85.198px",  "DASOL",      "-0.63% -0.45% -0.75% -0.49%")}
          {shape(imgBinalonan,   "calc(50% + 84.94px)",  "calc(50% - 142.9px)",   "92.909px",  "129.088px", "BINALONAN",  "-0.41% -0.58% -0.4% -0.73%")}
          {shape(imgSanManuel,   "calc(50% + 435.8px)",  "calc(50% - 111.49px)",  "208.478px", "162.651px", "SAN MANUEL", "-0.32% -0.35% -0.4% -0.51%")}
          {shape(imgSantaBarbara,"calc(50% + 476.21px)", "calc(50% + 21.91px)",   "200.169px", "116.179px", "SANTA BARBARA","-0.55% -0.29% -0.49% -0.26%")}
          {shape(imgSantoTomas,  "calc(50% + 97.78px)",  "calc(50% + 30.51px)",   "106.505px", "85.198px",  "SANTO TOMAS","-0.62% -0.58% -0.64% -0.49%")}
          {shape(imgSison,       "calc(50% + 12.42px)",  "calc(50% + 212.53px)",  "98.952px",  "98.107px",  "SISON",      "-0.59% -0.56% -0.66% -0.52%")}
          {shape(imgNatividad,   "calc(50% + 230.91px)", "calc(50% + 120.44px)",  "133.32px",  "103.27px",  "NATIVIDAD",  "-0.52% -0.45% -0.67% -0.48%")}
          {shape(imgVillasis,    "calc(50% - 14.77px)",  "calc(50% + 120.01px)",  "154.848px", "126.506px", "VILLASIS",   "-0.4% -0.38% -0.45% -0.32%")}
          {shape(imgAruan,       "calc(50% + 110.62px)", "calc(50% - 72.76px)",   "77.802px",  "83.477px",  "ALCALA",     "-0.69% -0.94% -0.66% -0.92%")}
          {shape(imgBautista,    "calc(50% + 325.52px)", "calc(50% - 110.62px)",  "114.814px", "171.256px", "BAUTISTA",   "-0.49% -0.47% -0.34% -1.44%")}
          {shape(imgSolano,      "calc(50% - 298.4px)",  "calc(50% - 65.87px)",   "154.092px", "205.68px",  "SAN CARLOS", "-0.38% -0.81% -0.44% -0.48%")}
          {shape(imgTayug,       "calc(50% + 399.92px)", "calc(50% + 4.26px)",    "85.355px",  "87.78px",   "TAYUG",      "-0.85% -0.59% -0.79% -0.65%")}
          {shape(imgAlaminos1,   "calc(50% - 371.3px)",  "calc(50% - 150.21px)",  "177.508px", "188.468px", "ALAMINOS",   "-0.69% -0.5% -0.36% -0.4%")}
          {shape(imgLingayen1,   "calc(50% - 481.58px)", "calc(50% - 346.43px)",  "195.637px", "207.401px", "LINGAYEN",   "-0.35% -0.45% -0.42% -0.37%")}
          {shape(imgLaoac1,      "calc(50% - 376.58px)", "calc(50% - 290.92px)",  "109.526px", "151.463px", "LAOAC",      "-0.33% -0.49% -0.37% -0.47%")}
          {shape(imgDagupan1,    "calc(50% - 339.57px)", "calc(50% + 174.66px)",  "290.812px", "132.53px",  "DAGUPAN",    "-0.55% -0.24% -0.38% -0.22%")}
          {shape(imgMangatarem1, "calc(50% - 463.45px)", "calc(50% + 79.56px)",   "254.555px", "167.814px", "MANGATAREM", "-0.3% -0.21% -0.65% -0.66%")}
          {shape(imgPositino,    "calc(50% + 352.71px)", "calc(50% + 56.76px)",   "131.432px", "77.453px",  "UMINGAN",    "-0.67% -0.62% -1.71% -0.86%")}
          {shape(imgPozorrubio1, "calc(50% - 1.55px)",   "calc(50% - 49.52px)",   "90.643px",  "111.015px", "POZORRUBIO", "-0.9% -0.7% -0.63% -0.76%")}
          {shape(imgBurgos1,     "calc(50% + 479.99px)", "calc(50% + 134.64px)",  "204.701px", "212.565px", "BURGOS",     "-0.32% -0.26% -0.25% -0.27%")}
          {shape(imgBolinao1,    "calc(50% + 197.49px)", "calc(50% - 161.4px)",   "189.594px", "138.554px", "BOLINAO",    "-0.45% -0.29% -0.22% -0.34%")}
          {shape(imgCabanatuan,  "calc(50% + 209.57px)", "calc(50% + 51.6px)",    "157.869px", "94.664px",  "MALASIQUI",  "-0.54% -0.32% -0.75% -0.66%")}
          {shape(imgSanJacinto1, "calc(50% + 290.39px)", "calc(50% + 146.69px)",  "95.93px",   "109.294px", "SAN JACINTO","-0.98% -0.66% -0.47% -0.72%")}
          {shape(imgAsingan,     "calc(50% + 227.7px)",  "calc(50% + 154.44px)",  "35.502px",  "35.284px",  "ASINGAN",    "-2.13% -1.56% -1.97% -1.69%")}
          {/* Labels */}
          {lbl("SANTO TOMAS",  "calc(50% + 214.48px)", "calc(50% + 158.1px)",  "66.798px")}
          {lbl("ROSALES",      "calc(50% + 271.89px)", "calc(50% + 157.34px)", "74.352px")}
          {lbl("BALUNGAO",     "calc(50% + 325.52px)", "calc(50% + 128.94px)", "82.661px")}
          {lbl("UMINGAN",      "calc(50% + 425.98px)", "calc(50% + 130.66px)", "79.639px")}
          {lbl("SAN QUINTIN",  "calc(50% + 462.99px)", "calc(50% + 27.39px)",  "91.725px")}
          {lbl("NATIVIDAD",    "calc(50% + 458.46px)", "calc(50% - 30.27px)",  "90.97px")}
          {lbl("SAN NICOLAS",  "calc(50% + 400.3px)",  "calc(50% - 82.76px)",  "94.747px")}
          {lbl("SAN MANUEL",   "calc(50% + 306.63px)", "calc(50% - 99.22px)",  "240.53px")}
          {lbl("URDANETA",     "calc(50% + 178.22px)", "calc(50% + 37.72px)",  "250.35px")}
          {lbl("VILLASIS",     "calc(50% + 200.88px)", "calc(50% + 94.52px)",  "240.53px")}
          {lbl("TAYUG",        "calc(50% + 388.21px)", "calc(50% + 2.44px)",   "66.798px")}
          {lbl("ASINGAN",      "calc(50% + 301.35px)", "calc(50% + 7.6px)",    "76.618px")}
          {lbl("SANTA MARIA",  "calc(50% + 339.87px)", "calc(50% + 58.27px)",  "68.309px")}
          {lbl("SISON",        "calc(50% + 202.4px)",  "calc(50% - 164.52px)", "66.043px")}
          {lbl("POZORRUBIO",   "calc(50% + 148.77px)", "calc(50% - 103.42px)", "90.214px")}
          {lbl("BINALONAN",    "calc(50% + 228.08px)", "calc(50% - 50.06px)",  "86.438px")}
          {lbl("LAOAC",        "calc(50% + 183.51px)", "calc(50% - 20.8px)",   "232.221px")}
          {lbl("MANAOAG",      "calc(50% + 118.55px)", "calc(50% - 37.15px)",  "81.15px")}
          {lbl("MAPANDAN",     "calc(50% + 92.87px)",  "calc(50% - 1.87px)",   "88.704px")}
          {lbl("SAN JACINTO",  "calc(50% + 92.87px)",  "calc(50% - 66.52px)",  "75.107px")}
          {lbl("SAN FABIAN",   "calc(50% + 76.25px)",  "calc(50% - 121.59px)", "72.086px")}
          {lbl("BINMALEY",     "calc(50% - 73.31px)",  "calc(50% + 13.62px)",  "81.15px")}
          {lbl("LINGAYEN",     "calc(50% - 173.02px)", "calc(50% - 7.89px)",   "247.328px")}
          {lbl("BUGALLON",     "calc(50% - 168.48px)", "calc(50% + 110.01px)", "79.639px")}
          {lbl("LABRADOR",     "calc(50% - 231.93px)", "calc(50% + 33.42px)",  "81.15px")}
          {lbl("MABINI",       "calc(50% - 367.14px)", "calc(50% + 11.9px)",   "72.086px")}
          {lbl("SUAL",         "calc(50% - 311.25px)", "calc(50% - 56.94px)",  "62.266px")}
          {lbl("ALAMINOS",     "calc(50% - 420.77px)", "calc(50% - 130.95px)", "253.371px")}
          {lbl("DASOL",        "calc(50% - 468.36px)", "calc(50% + 59.23px)",  "232.977px")}
          {lbl("BURGOS",       "calc(50% - 519.72px)", "calc(50% - 36.29px)",  "242.041px")}
          {lbl("AGNO",         "calc(50% - 552.2px)",  "calc(50% - 107.72px)", "232.221px")}
          {lbl("BANI",         "calc(50% - 537.85px)", "calc(50% - 200.66px)", "230.71px")}
          {lbl("BOLINAO",      "calc(50% - 529.54px)", "calc(50% - 303.07px)", "245.062px")}
          {lbl("ANDA",         "calc(50% - 393.58px)", "calc(50% - 289.3px)",  "224.668px")}
          {lbl("INFANTA",      "calc(50% - 351.28px)", "calc(50% + 157.34px)", "247.328px")}
          {lbl("AGUILAR",      "calc(50% - 132.98px)", "calc(50% + 199.51px)", "74.352px")}
          {lbl("MANGATAREM",   "calc(50% - 83.88px)",  "calc(50% + 276.96px)", "93.991px")}
          {lbl("SANTA BARBARA","calc(50% + 49.06px)",  "calc(50% + 23.85px)",  "246.573px")}
          {lbl("MALASIQUI",    "calc(50% + 91.36px)",  "calc(50% + 116.03px)", "86.438px")}
          {lbl("ALCALA",       "calc(50% + 175.2px)",  "calc(50% + 180.58px)", "101.545px")}
          {lbl("BAUTISTA",     "calc(50% + 157.07px)", "calc(50% + 228.77px)", "79.639px")}
          {lbl("BAYAMBANG",    "calc(50% + 83.8px)",   "calc(50% + 256.31px)", "91.725px")}
          {lbl("BASISTA",      "calc(50% + 49.06px)",  "calc(50% + 168.53px)", "75.863px")}
          {lbl("SAN CARLOS",   "calc(50% - 31.76px)",  "calc(50% + 121.2px)",  "90.214px")}
          {lbl("URBIZTONDO",   "calc(50% - 8.35px)",   "calc(50% + 203.81px)", "90.214px")}
          {lbl("MANGALDAN",    "calc(50% + 32.44px)",  "calc(50% - 40.59px)",  "88.704px")}
          {lbl("CALASIAO",     "calc(50% - 7.59px)",   "calc(50% + 31.7px)",   "80.395px")}
          {lbl("DAGUPAN",      "calc(50% - 20.43px)",  "calc(50% - 24.24px)",  "81.15px")}
          {/* Legend */}
          <div className="absolute bottom-5 right-5 flex items-center gap-3" style={{ pointerEvents: "none" }}>
            <p className="text-white text-[12px]" style={montserrat(400)}>LEGEND:</p>
            {[{ dot: imgEllipse2, text: "HIGH" }, { dot: imgEllipse3, text: "MED" }, { dot: imgEllipse1, text: "LOW" }, { dot: imgEllipse4, text: "N/A" }].map(({ dot, text }) => (
              <div key={text} className="flex items-center gap-1">
                <img alt="" src={dot} style={{ width: 10, height: 10 }} />
                <p className="text-white text-[12px]" style={montserrat(400)}>{text}</p>
              </div>
            ))}
          </div>
          {/* Title */}
          <div className="absolute top-5 right-5" style={{ pointerEvents: "none" }}>
            <p className="text-white text-[18px] text-right" style={{ ...montserrat(800), letterSpacing: "0.2px" }}>Interactive Choropleth Map</p>
          </div>
        </div>
      </div>

      {/* Popup — rendered outside inner div so it doesn't pan/scale */}
      {popup && (
        <div
          className="absolute z-30 bg-white rounded-[14px] shadow-[0px_6px_28px_rgba(0,0,0,0.22)]"
          style={{ left: popupLeft, top: popupTop, width: popupW, pointerEvents: "auto" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-[#0a2d5d] rounded-t-[14px] px-4 py-3">
            <p className="text-white text-[13px] uppercase tracking-wide" style={montserrat(800)}>{popup.name}</p>
            <button
              className="text-white text-[20px] leading-none cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
              onClick={() => setPopup(null)}
              style={{ lineHeight: 1 }}
            >×</button>
          </div>
          {/* Body */}
          <div className="px-4 py-3 flex flex-col gap-2">
            {popup.info ? (
              <>
                {([
                  ["Salt Produced", popup.info.saltProduced],
                  ["Farm Area", popup.info.farmArea],
                  ["No. of Salt Beds", String(popup.info.saltBeds)],
                  ["Production Method", popup.info.method],
                  ["Rate", popup.info.rate],
                ] as [string, string][]).map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between gap-4 border-b border-[#f0f0f0] pb-1.5 last:border-0 last:pb-0">
                    <p className="text-[#666] text-[11px] shrink-0" style={montserrat(700)}>{key}</p>
                    <p className="text-[#0a2d5d] text-[12px] text-right" style={montserrat(800)}>{val}</p>
                  </div>
                ))}
              </>
            ) : (
              <p className="text-[#888] text-[11px] py-1" style={montserrat(400)}>No salt production data available.</p>
            )}
          </div>
        </div>
      )}

      {/* Zoom controls */}
      <div className="absolute bottom-5 left-4 flex flex-col gap-1 z-20">
        {[{ label: "+", factor: 1.3 }, { label: "−", factor: 1 / 1.3 }].map(({ label: l, factor }) => (
          <button
            key={l}
            className="w-7 h-7 bg-white rounded shadow text-[#0a2d5d] text-[16px] font-bold cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center transition-colors"
            onClick={(e) => { e.stopPropagation(); doZoom(factor); }}
          >{l}</button>
        ))}
        <button
          className="w-7 h-7 bg-white rounded shadow text-[#0a2d5d] text-[10px] cursor-pointer hover:bg-[#f0f0f0] flex items-center justify-center transition-colors"
          style={montserrat(700)}
          title="Reset view"
          onClick={(e) => { e.stopPropagation(); setZoom(1); setPan({ x: 0, y: 0 }); }}
        >⊙</button>
      </div>
    </div>
  );
}

// ─── Landing Page ─────────────────────────────────────────────────────────────
function LandingPage({ onSignIn }: { onSignIn: () => void }) {
  return (
    <div className="bg-[#f1f1f1] min-h-screen flex flex-col">
      <Navbar onSignIn={onSignIn} />

      <main className="flex-1 flex flex-col gap-5 px-5 sm:px-10 pt-5 pb-10">
        {/* Hero */}
        <div className="relative bg-gradient-to-b from-[#0a2d5d] to-[#084485] rounded-[20px] overflow-hidden min-h-[180px] sm:min-h-[200px] flex items-center px-5 sm:px-8 py-6">
          {/* Left: wordmark + description */}
          <div className="flex-1 flex flex-col gap-3 z-10 pr-4">
            <div className="flex flex-col gap-2">
              <div className="h-[52px] sm:h-[60px] w-[220px] sm:w-[260px] relative">
                <img alt="PangAsin" className="absolute block inset-0 max-w-none size-full" src={imgPangAsin} />
              </div>
              <div className="h-[16px] sm:h-[20px] w-[220px] sm:w-[260px] relative">
                <img alt="Insights & Analytics" className="absolute block inset-0 max-w-none size-full" src={imgInsightsAnalytics} />
              </div>
            </div>
            <p className="text-white text-[11px] sm:text-[12px] leading-relaxed max-w-[480px]" style={montserrat(700)}>
              {"A proprietary centralized hub for the Province of Pangasinan's 7 salt producing municipalities. Transforming raw data into actionable intelligence for production, and decision support."}
            </p>
          </div>

          {/* Center: logo */}
          <div className="shrink-0 w-[100px] sm:w-[130px] z-10">
            <img alt="Logo" className="w-full h-auto" src={imgLogo} />
          </div>

          {/* Right: quote vector — hidden on small screens */}
          <div className="hidden md:block shrink-0 w-[280px] lg:w-[320px] z-10 pl-4">
            <img alt="" className="w-full h-auto" src={imgVector} />
          </div>
        </div>

        {/* KPI Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard value="9,340 MT" label="Total Production" />
          <KpiCard value="7" label="Active Municipalities" />
          <KpiCard value="Solar" label="Most Used Method" />
          <KpiCard value="56%" label="Supply Sufficiency" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MonthlyTrendChart />
          <MunicipalityBarChart />
        </div>

        {/* Choropleth Map */}
        <ChoroplethMap />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#e0e0e0] px-5 sm:px-10 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <p className="text-black text-[11px] leading-relaxed" style={montserrat(700)}>This system is a capstone project from PSU. Macayan et. al. (2026)</p>
          <p className="text-black text-[11px] leading-relaxed" style={montserrat(700)}>Website owned by Pangasinan ASIN Center. (0946 808 2167)</p>
        </div>
        <p className="text-black text-[18px] sm:text-[20px] text-center sm:text-center" style={montserrat(700)}>PangAsin (2026)</p>
        <div className="text-right">
          <p className="text-black text-[11px] leading-relaxed" style={montserrat(700)}>For inquiries please contact:</p>
          <p className="text-black text-[11px] leading-relaxed" style={montserrat(700)}>asincenter.psu.edu.ph</p>
        </div>
      </footer>
    </div>
  );
}

// ─── Sign-in Page ─────────────────────────────────────────────────────────────
function SignInPage({ onBack, onHelp, onLogin }: { onBack: () => void; onHelp: () => void; onLogin: (user: AppUser) => void }) {
  const [role, setRole] = useState<"coordinator" | "admin">("coordinator");
  const roleUsers = ALL_USERS.filter((u) => u.role === role);
  const [selectedId, setSelectedId] = useState(roleUsers[0]?.id ?? "");

  useEffect(() => {
    const first = ALL_USERS.filter((u) => u.role === role)[0];
    if (first) setSelectedId(first.id);
  }, [role]);

  const selectedUser = ALL_USERS.find((u) => u.id === selectedId);

  return (
    <div className="bg-[#f1f1f1] min-h-screen flex flex-col">
      <Navbar onSignIn={onBack} label="Sign in" />

      <div className="flex-1 flex flex-col items-center justify-center px-5 py-10 gap-6">

        {/* Welcome banner */}
        <div className="w-full max-w-[600px] rounded-[20px] flex items-center justify-center gap-6 px-8 py-5"
          style={{ background: "linear-gradient(to bottom, #0a2d5d, #084485)" }}>
          <p className="text-white text-[26px] sm:text-[30px] shrink-0" style={montserrat(700)}>Welcome to</p>
          <div className="w-[80px] sm:w-[90px] shrink-0">
            <img alt="PangAsin logo" className="w-full h-auto" src={imgLogo} />
          </div>
          <p className="text-white text-[26px] sm:text-[30px] shrink-0" style={montserrat(700)}>PangAsin</p>
        </div>

        {/* Login card */}
        <div className="bg-white border border-[#d4d4d4] rounded-[20px] shadow-[0px_2px_16px_rgba(0,0,0,0.07)] w-full max-w-[600px] px-8 sm:px-10 py-8 flex flex-col gap-5">

          {/* back / help row */}
          <div className="flex items-center justify-between">
            <button onClick={onBack} className="bg-[#008cff] text-white text-[14px] px-5 py-1.5 rounded-full cursor-pointer hover:bg-[#0079e0] transition-colors" style={montserrat(700)}>back</button>
            <button onClick={onHelp} className="bg-[#008cff] text-white text-[14px] px-5 py-1.5 rounded-full cursor-pointer hover:bg-[#0079e0] transition-colors" style={montserrat(700)}>help</button>
          </div>

          {/* Role selector */}
          <div className="flex flex-col gap-1.5">
            <p className="text-black text-[15px]" style={montserrat(700)}>Sign in as:</p>
            <div className="flex gap-3">
              {(["coordinator", "admin"] as const).map((r) => (
                <button key={r} onClick={() => setRole(r)}
                  className="flex-1 h-[46px] rounded-full text-[15px] cursor-pointer transition-colors border"
                  style={{ ...montserrat(700), background: role === r ? "#008cff" : "#fff", color: role === r ? "#fff" : "#555", borderColor: role === r ? "#008cff" : "#cacaca" }}>
                  {r === "coordinator" ? "Coordinator" : "Administrator"}
                </button>
              ))}
            </div>
          </div>

          {/* Account selector */}
          <div className="flex flex-col gap-1.5">
            <label className="text-black text-[15px]" style={montserrat(700)}>
              {role === "coordinator" ? "Select Coordinator:" : "Select Administrator:"}
            </label>
            <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)}
              className="w-full h-[46px] border border-[#cacaca] rounded-full px-5 text-[13px] outline-none focus:border-[#008cff] transition-colors bg-white cursor-pointer"
              style={montserrat(500)}>
              {roleUsers.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name} — {u.municipality}
                </option>
              ))}
            </select>
            {selectedUser && (
              <p className="text-[11px] px-2" style={{ ...montserrat(400), color: "#888" }}>
                {selectedUser.municipality}{selectedUser.adminType === "center" ? " · Asin Center" : ""} · {selectedUser.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-black text-[15px]" style={montserrat(700)}>Password:</label>
            <input type="password" placeholder="••••••••••••••••" defaultValue="demo"
              className="w-full h-[46px] border border-[#cacaca] rounded-full px-5 text-[14px] outline-none focus:border-[#008cff] transition-colors bg-white"
              style={montserrat(400)} />
          </div>

          {/* Sign In */}
          <button onClick={() => selectedUser && onLogin(selectedUser)} disabled={!selectedUser}
            className="w-full h-[52px] bg-[#008cff] text-white text-[18px] rounded-full cursor-pointer hover:bg-[#0079e0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={montserrat(700)}>
            Sign In
          </button>

        </div>
      </div>
    </div>
  );
}

// ─── Help Page ────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    q: "What is PangAsin?",
    a: "PangAsin is a centralized analytics hub for Pangasinan's 7 salt-producing municipalities. It transforms raw production data into actionable insights for coordinators and administrators.",
  },
  {
    q: "How do I navigate the choropleth map?",
    a: "Scroll or pinch to zoom, click and drag to pan. Click on any municipality to see its salt production details — area of salt farm, number of salt beds, production method, and rate.",
  },
  {
    q: "What do the map colors mean?",
    a: "GREEN (HIGH) — strong production output. YELLOW (MED) — moderate output. SALMON (LOW) — low output. GRAY (N/A) — no current data available for that municipality.",
  },
  {
    q: "What do the charts show?",
    a: "The Monthly Production Trend chart compares actual vs. target production from July to June. The Production per Municipality bar chart ranks the 7 active producers by total volume (MT).",
  },
  {
    q: "Who can log in?",
    a: "Access is limited to registered Coordinators and Administrators. Coordinators manage municipal-level data entry; Administrators have full system access including user management.",
  },
  {
    q: "I forgot my password. What do I do?",
    a: "Contact your system administrator or reach the Pangasinan ASIN Center at (0946) 808-2167 or asincenter.psu.edu.ph to request a password reset.",
  },
  {
    q: "How often is the production data updated?",
    a: "Data is updated monthly by assigned municipality coordinators after field verification. Always check the report date on each entry for the most recent period.",
  },
];

function HelpPage({ onBack }: { onBack: () => void }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-[#f1f1f1] min-h-screen flex flex-col">
      <Navbar onSignIn={onBack} label="Sign in" />

      <div className="flex-1 flex flex-col items-center justify-start px-5 py-10 gap-6">

        {/* Banner — same style as sign-in */}
        <div
          className="w-full max-w-[600px] rounded-[20px] flex items-center justify-center gap-6 px-8 py-5"
          style={{ background: "linear-gradient(to bottom, #0a2d5d, #084485)" }}
        >
          <p className="text-white text-[26px] sm:text-[30px] shrink-0" style={montserrat(700)}>Help</p>
          <div className="w-[80px] sm:w-[90px] shrink-0">
            <img alt="PangAsin logo" className="w-full h-auto" src={imgLogo} />
          </div>
          <p className="text-white text-[26px] sm:text-[30px] shrink-0" style={montserrat(700)}>Center</p>
        </div>

        {/* Card — same container as sign-in */}
        <div className="bg-white border border-[#d4d4d4] rounded-[20px] shadow-[0px_2px_16px_rgba(0,0,0,0.07)] w-full max-w-[600px] px-8 sm:px-10 py-8 flex flex-col gap-5">

          {/* back row */}
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="bg-[#008cff] text-white text-[14px] px-5 py-1.5 rounded-full cursor-pointer hover:bg-[#0079e0] transition-colors"
              style={montserrat(700)}
            >
              back
            </button>
            <p className="text-[#0a2d5d] text-[13px]" style={montserrat(700)}>Frequently Asked Questions</p>
          </div>

          {/* FAQ accordion */}
          <div className="flex flex-col gap-2">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="border border-[#e0e0e0] rounded-[14px] overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-3.5 text-left cursor-pointer hover:bg-[#f7f9fc] transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="text-[#0a2d5d] text-[13px] pr-4" style={montserrat(700)}>{item.q}</span>
                  <span
                    className="text-[#008cff] text-[18px] leading-none shrink-0 transition-transform duration-200"
                    style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                  >+</span>
                </button>
                {open === i && (
                  <div className="px-5 pb-4 border-t border-[#f0f0f0]">
                    <p className="text-[#555] text-[13px] leading-relaxed pt-3" style={montserrat(400)}>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact strip */}
          <div
            className="rounded-[14px] px-5 py-4 flex flex-col gap-1"
            style={{ background: "linear-gradient(to right, #0a2d5d, #084485)" }}
          >
            <p className="text-white text-[13px]" style={montserrat(700)}>Still need help?</p>
            <p className="text-[#a8c8ff] text-[12px]" style={montserrat(400)}>Pangasinan ASIN Center · (0946) 808-2167</p>
            <p className="text-[#a8c8ff] text-[12px]" style={montserrat(400)}>asincenter.psu.edu.ph</p>
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── Shared Types & Data ─────────────────────────────────────────────────────

interface AppUser {
  id: string;
  name: string;
  role: "coordinator" | "admin";
  municipality: string;
  adminType?: "municipal" | "center";
  email: string;
  contact: string;
  title?: string;
}

interface AppSubmission {
  id: string;
  coordinatorId: string;
  coordinatorName: string;
  municipality: string;
  period: string;
  type: "Production" | "Producers" | "Income";
  status: "Pending" | "Approved" | "Rejected";
  date: string;
  month: string;
  year: string;
  notes: string;
  fileName?: string;
  volume?: string;
  farmSize?: string;
  saltBeds?: string;
  productionMethod?: string;
  owner?: string;
  farmManager?: string;
  managerContact?: string;
  newWorkerCount?: string;
  workers?: string[];
  amountSold?: string;
  marketRate?: string;
  totalRevenue?: string;
  buyer?: string;
  prescription: string | null;
  prescribedBy: string | null;
  prescribedOn: string | null;
}

interface AppPrescription {
  id: string;
  fromId: string;
  fromName: string;
  toId: string;
  toName: string;
  toType: "coordinator" | "admin";
  municipality: string;
  text: string;
  date: string;
  relatedSubmissionId?: string;
}

const MUNI_KEY: Record<string, string> = {
  "Bolinao": "bolinao", "Lingayen": "lingayen", "Bani": "bani",
  "Alaminos": "alaminos", "Dasol": "dasol", "Infanta": "infanta", "San Fabian": "sanfabian",
};

// Jul Aug Sep Oct Nov Dec Jan Feb Mar Apr May Jun
const FARM_MONTHLY_DATA: Record<string, number[]> = {
  "C-001": [29, 33, 36, 41, 37, 34, 28, 31, 35, 38, 40, 33],
  "C-002": [24, 27, 30, 34, 31, 28, 23, 26, 29, 32, 33, 27],
  "C-003": [20, 23, 25, 29, 26, 24, 19, 22, 24, 27, 28, 23],
  "C-004": [20, 23, 26, 29, 26, 24, 19, 21, 24, 27, 29, 23],
  "C-005": [17, 19, 21, 24, 22, 20, 16, 18, 20, 22, 23, 19],
  "C-006": [11, 12, 14, 16, 14, 13, 10, 11, 13, 15, 16, 12],
  "C-007": [ 9, 10, 12, 14, 12, 11,  8, 10, 11, 13, 14, 10],
  "C-008": [16, 18, 20, 23, 21, 19, 15, 17, 19, 21, 23, 18],
  "C-009": [14, 16, 17, 20, 18, 16, 13, 15, 16, 18, 19, 16],
  "C-010": [26, 30, 33, 37, 34, 31, 25, 28, 32, 35, 37, 30],
  "C-011": [22, 25, 28, 31, 28, 26, 21, 24, 27, 30, 31, 25],
  "C-012": [22, 25, 28, 32, 29, 26, 21, 23, 27, 30, 32, 25],
  "C-013": [18, 21, 23, 26, 23, 21, 17, 19, 22, 25, 26, 21],
  "C-014": [14, 16, 18, 20, 18, 16, 13, 14, 17, 19, 20, 16],
  "C-015": [12, 13, 15, 17, 15, 14, 11, 12, 14, 16, 17, 13],
};

const ALL_USERS: AppUser[] = [
  { id: "C-001", name: "Maria Santos",     role: "coordinator", municipality: "Bolinao",    email: "m.santos@bolinao.gov.ph",     contact: "(0946) 808-2167" },
  { id: "C-002", name: "Carlos Reyes",     role: "coordinator", municipality: "Bolinao",    email: "c.reyes@bolinao.gov.ph",      contact: "(0946) 812-3344" },
  { id: "C-003", name: "Elena Navarro",    role: "coordinator", municipality: "Bolinao",    email: "e.navarro@bolinao.gov.ph",    contact: "(0946) 834-5566" },
  { id: "C-004", name: "Jose Dela Cruz",   role: "coordinator", municipality: "Lingayen",   email: "j.delacruz@lingayen.gov.ph",  contact: "(0915) 234-5678" },
  { id: "C-005", name: "Patricia Mendoza", role: "coordinator", municipality: "Lingayen",   email: "p.mendoza@lingayen.gov.ph",   contact: "(0915) 245-6789" },
  { id: "C-006", name: "Lina Aquino",      role: "coordinator", municipality: "Bani",       email: "l.aquino@bani.gov.ph",        contact: "(0906) 789-0123" },
  { id: "C-007", name: "Ramon Florendo",   role: "coordinator", municipality: "Bani",       email: "r.florendo@bani.gov.ph",      contact: "(0906) 790-1234" },
  { id: "C-008", name: "Pedro Lim",        role: "coordinator", municipality: "Alaminos",   email: "p.lim@alaminos.gov.ph",       contact: "(0917) 456-7890" },
  { id: "C-009", name: "Sofia Torres",     role: "coordinator", municipality: "Alaminos",   email: "s.torres@alaminos.gov.ph",    contact: "(0917) 467-8901" },
  { id: "C-010", name: "Ana Cruz",         role: "coordinator", municipality: "Dasol",      email: "a.cruz@dasol.gov.ph",         contact: "(0928) 345-6789" },
  { id: "C-011", name: "Miguel Bautista",  role: "coordinator", municipality: "Dasol",      email: "m.bautista@dasol.gov.ph",     contact: "(0928) 356-7890" },
  { id: "C-012", name: "Rosa Garcia",      role: "coordinator", municipality: "Infanta",    email: "r.garcia@infanta.gov.ph",     contact: "(0932) 567-8901" },
  { id: "C-013", name: "Benjamin Santos",  role: "coordinator", municipality: "Infanta",    email: "b.santos@infanta.gov.ph",     contact: "(0932) 578-9012" },
  { id: "C-014", name: "Tomas Bautista",   role: "coordinator", municipality: "San Fabian", email: "t.bautista@sanfabian.gov.ph", contact: "(0951) 678-9012" },
  { id: "C-015", name: "Imelda Flores",    role: "coordinator", municipality: "San Fabian", email: "i.flores@sanfabian.gov.ph",   contact: "(0951) 689-0123" },
  { id: "A-001", name: "Dr. Ricardo Santos",        role: "admin", adminType: "municipal", municipality: "Bolinao",    title: "Dr.",        email: "r.santos.admin@bolinao.gov.ph",   contact: "(0946) 900-1111" },
  { id: "A-002", name: "Engr. Maria Fernandez",     role: "admin", adminType: "municipal", municipality: "Bolinao",    title: "Engr.",      email: "m.fernandez@bolinao.gov.ph",      contact: "(0946) 900-2222" },
  { id: "A-003", name: "Atty. Juanita Reyes",       role: "admin", adminType: "municipal", municipality: "Lingayen",   title: "Atty.",      email: "j.reyes.admin@lingayen.gov.ph",   contact: "(0915) 900-3333" },
  { id: "A-004", name: "Engr. Felix Dimayuga",      role: "admin", adminType: "municipal", municipality: "Lingayen",   title: "Engr.",      email: "f.dimayuga@lingayen.gov.ph",      contact: "(0915) 900-4444" },
  { id: "A-005", name: "Dra. Gloria Pascual",       role: "admin", adminType: "municipal", municipality: "Bani",       title: "Dra.",       email: "g.pascual@bani.gov.ph",           contact: "(0906) 900-5555" },
  { id: "A-006", name: "Engr. Leo Santos",          role: "admin", adminType: "municipal", municipality: "Bani",       title: "Engr.",      email: "l.santos@bani.gov.ph",            contact: "(0906) 900-6666" },
  { id: "A-007", name: "Engr. Roberto Cruz",        role: "admin", adminType: "municipal", municipality: "Alaminos",   title: "Engr.",      email: "r.cruz@alaminos.gov.ph",          contact: "(0917) 900-7777" },
  { id: "A-008", name: "Ms. Carmen Villanueva",     role: "admin", adminType: "municipal", municipality: "Alaminos",   title: "Ms.",        email: "c.villanueva@alaminos.gov.ph",    contact: "(0917) 900-8888" },
  { id: "A-009", name: "Dr. Andrea Salazar",        role: "admin", adminType: "municipal", municipality: "Dasol",      title: "Dr.",        email: "a.salazar@dasol.gov.ph",          contact: "(0928) 900-9999" },
  { id: "A-010", name: "Engr. Manuel Torres",       role: "admin", adminType: "municipal", municipality: "Dasol",      title: "Engr.",      email: "m.torres@dasol.gov.ph",           contact: "(0928) 901-0000" },
  { id: "A-011", name: "Dra. Carmen Reyes",         role: "admin", adminType: "municipal", municipality: "Infanta",    title: "Dra.",       email: "c.reyes@infanta.gov.ph",          contact: "(0932) 901-1111" },
  { id: "A-012", name: "Engr. Victor Santos",       role: "admin", adminType: "municipal", municipality: "Infanta",    title: "Engr.",      email: "v.santos@infanta.gov.ph",         contact: "(0932) 901-2222" },
  { id: "A-013", name: "Engr. Arturo Bautista",     role: "admin", adminType: "municipal", municipality: "San Fabian", title: "Engr.",      email: "a.bautista@sanfabian.gov.ph",     contact: "(0951) 901-3333" },
  { id: "A-014", name: "Ms. Rosario Garcia",        role: "admin", adminType: "municipal", municipality: "San Fabian", title: "Ms.",        email: "r.garcia.admin@sanfabian.gov.ph", contact: "(0951) 901-4444" },
  { id: "A-015", name: "Dir. Ramon dela Cruz",      role: "admin", adminType: "center", municipality: "Asin Center", title: "Dir.",        email: "director@asincenter.psu.edu.ph",  contact: "(0946) 808-2167" },
  { id: "A-016", name: "Asst. Dir. Maribel Santos", role: "admin", adminType: "center", municipality: "Asin Center", title: "Asst. Dir.", email: "asst.dir@asincenter.psu.edu.ph",  contact: "(0946) 808-2168" },
  { id: "A-017", name: "Dr. Albert Lim",            role: "admin", adminType: "center", municipality: "Asin Center", title: "Dr.",        email: "a.lim@asincenter.psu.edu.ph",     contact: "(0946) 808-2169" },
  { id: "A-018", name: "Engr. Patricia Torres",     role: "admin", adminType: "center", municipality: "Asin Center", title: "Engr.",      email: "p.torres@asincenter.psu.edu.ph",  contact: "(0946) 808-2170" },
  { id: "A-019", name: "Ms. Gina Aquino",           role: "admin", adminType: "center", municipality: "Asin Center", title: "Ms.",        email: "g.aquino@asincenter.psu.edu.ph",  contact: "(0946) 808-2171" },
];

const INITIAL_SUBMISSIONS: AppSubmission[] = [
  {
    id: "S-2025-0142", coordinatorId: "C-001", coordinatorName: "Maria Santos", municipality: "Bolinao",
    period: "May 2025", type: "Production", status: "Approved", date: "Jun 3", month: "May", year: "2025",
    volume: "198", notes: "Favorable weather throughout May. Solar evaporation yield exceeded estimate.",
    prescription: "Production output is on track. Maintain current solar evaporation schedule. Consider expanding salt bed coverage by 0.5 ha before the dry season peak to capitalize on the projected 3.6% growth rate.",
    prescribedBy: "Dir. Ramon dela Cruz · Asin Center", prescribedOn: "Jun 5",
  },
  {
    id: "S-2025-0141", coordinatorId: "C-001", coordinatorName: "Maria Santos", municipality: "Bolinao",
    period: "May 2025", type: "Producers", status: "Pending", date: "Jun 4", month: "May", year: "2025",
    farmSize: "3.2", saltBeds: "14", productionMethod: "Solar Evaporation",
    owner: "Juan Santos", farmManager: "Maria Santos", managerContact: "(0946) 808-2167",
    newWorkerCount: "2", workers: ["Pedro Santos", "Gina Reyes", "Aling Nora Cruz"],
    notes: "Two new seasonal workers onboarded for peak dry season.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2025-0139", coordinatorId: "C-001", coordinatorName: "Maria Santos", municipality: "Bolinao",
    period: "Apr 2025", type: "Income", status: "Rejected", date: "May 6", month: "Apr", year: "2025",
    amountSold: "185", marketRate: "1500", totalRevenue: "277500", buyer: "National Salt Traders Corp.",
    notes: "Sold at slightly above market due to direct buyer arrangement.",
    prescription: "Report rejected due to inconsistent market rate entry (₱1,500/ton vs. verified regional rate of ₱1,070/ton). Please resubmit with the correct market rate.",
    prescribedBy: "Atty. Juanita Reyes · Lingayen Admin", prescribedOn: "May 7",
  },
  {
    id: "S-2025-0138", coordinatorId: "C-002", coordinatorName: "Carlos Reyes", municipality: "Bolinao",
    period: "Apr 2025", type: "Production", status: "Approved", date: "May 5", month: "Apr", year: "2025",
    volume: "175", notes: "April output consistent with Q2 projections.",
    prescription: "April figures are within normal range. AI trend analysis indicates a potential 12% dip in June–July due to rainy season. Plan for reduced evaporation capacity and adjust worker scheduling accordingly.",
    prescribedBy: "System · AI Analysis", prescribedOn: "May 9",
  },
  {
    id: "S-2025-0136", coordinatorId: "C-003", coordinatorName: "Elena Navarro", municipality: "Bolinao",
    period: "Mar 2025", type: "Producers", status: "Approved", date: "Apr 4", month: "Mar", year: "2025",
    farmSize: "2.8", saltBeds: "12", productionMethod: "Solar Evaporation",
    owner: "Roberto Navarro", farmManager: "Elena Navarro", managerContact: "(0946) 834-5566",
    newWorkerCount: "0", workers: ["Aling Sari Santos", "Mang Tito Reyes"],
    notes: "Worker count stable. No new additions this period.",
    prescription: "Worker count is stable. Recommend onboarding 2–3 additional seasonal workers before the April–May peak window.",
    prescribedBy: "Dr. Ricardo Santos · Bolinao Admin", prescribedOn: "Apr 7",
  },
  {
    id: "S-2025-0140", coordinatorId: "C-004", coordinatorName: "Jose Dela Cruz", municipality: "Lingayen",
    period: "May 2025", type: "Production", status: "Approved", date: "Jun 2", month: "May", year: "2025",
    volume: "174", notes: "Smooth production run. No equipment downtime recorded.",
    prescription: "May output is satisfactory. Lingayen is performing 5% above target. Continue current practices.",
    prescribedBy: "Engr. Felix Dimayuga · Lingayen Admin", prescribedOn: "Jun 4",
  },
  {
    id: "S-2025-0137", coordinatorId: "C-004", coordinatorName: "Jose Dela Cruz", municipality: "Lingayen",
    period: "Apr 2025", type: "Income", status: "Approved", date: "May 4", month: "Apr", year: "2025",
    amountSold: "160", marketRate: "1070", totalRevenue: "171200", buyer: "Metro Salt Distributors Inc.",
    notes: "Direct buyer contract renewed for Q3.",
    prescription: "Revenue is consistent with seasonal expectations. Explore direct buyer partnerships to reduce middleman costs.",
    prescribedBy: "System · AI Analysis", prescribedOn: "May 8",
  },
  {
    id: "S-2025-0135", coordinatorId: "C-005", coordinatorName: "Patricia Mendoza", municipality: "Lingayen",
    period: "Apr 2025", type: "Production", status: "Pending", date: "May 3", month: "Apr", year: "2025",
    volume: "143", notes: "Partial equipment maintenance caused slight delay mid-April.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2025-0133", coordinatorId: "C-006", coordinatorName: "Lina Aquino", municipality: "Bani",
    period: "Apr 2025", type: "Production", status: "Pending", date: "Jun 4", month: "Apr", year: "2025",
    volume: "98", notes: "Lower yield due to early onset of rainy season conditions.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2025-0132", coordinatorId: "C-006", coordinatorName: "Lina Aquino", municipality: "Bani",
    period: "Mar 2025", type: "Producers", status: "Approved", date: "Apr 5", month: "Mar", year: "2025",
    farmSize: "1.5", saltBeds: "8", productionMethod: "Solar Evaporation",
    owner: "Lina Aquino", farmManager: "Lina Aquino", managerContact: "(0906) 789-0123",
    newWorkerCount: "1", workers: ["Aling Rosa Reyes"],
    notes: "Small-scale farm expansion underway.",
    prescription: "Farm size is within acceptable range for Bani. Encourage expansion to 2 ha by Q4 to meet minimum municipal quota.",
    prescribedBy: "Dra. Gloria Pascual · Bani Admin", prescribedOn: "Apr 8",
  },
  {
    id: "S-2025-0131", coordinatorId: "C-007", coordinatorName: "Ramon Florendo", municipality: "Bani",
    period: "Apr 2025", type: "Production", status: "Approved", date: "May 2", month: "Apr", year: "2025",
    volume: "112", notes: "Production stable despite adverse wind conditions mid-month.",
    prescription: "Output is within expected range. Monitor weather patterns for May.",
    prescribedBy: "Dra. Gloria Pascual · Bani Admin", prescribedOn: "May 5",
  },
  {
    id: "S-2025-0130", coordinatorId: "C-008", coordinatorName: "Pedro Lim", municipality: "Alaminos",
    period: "Apr 2025", type: "Production", status: "Approved", date: "May 3", month: "Apr", year: "2025",
    volume: "156", notes: "Consistent output. Salt beds fully operational.",
    prescription: "Alaminos production is meeting targets. Good performance relative to farm area.",
    prescribedBy: "Engr. Roberto Cruz · Alaminos Admin", prescribedOn: "May 6",
  },
  {
    id: "S-2025-0129", coordinatorId: "C-009", coordinatorName: "Sofia Torres", municipality: "Alaminos",
    period: "Mar 2025", type: "Income", status: "Approved", date: "Apr 2", month: "Mar", year: "2025",
    amountSold: "140", marketRate: "1070", totalRevenue: "149800", buyer: "Pangasinan Salt Cooperative",
    notes: "Cooperative pricing arranged for bulk purchase.",
    prescription: "Revenue is on target. Cooperative purchase arrangements are a good practice — continue and expand for future cycles.",
    prescribedBy: "Ms. Carmen Villanueva · Alaminos Admin", prescribedOn: "Apr 5",
  },
  {
    id: "S-2025-0128", coordinatorId: "C-010", coordinatorName: "Ana Cruz", municipality: "Dasol",
    period: "Apr 2025", type: "Production", status: "Approved", date: "May 3", month: "Apr", year: "2025",
    volume: "163", notes: "High yield month. New salt bed section fully productive.",
    prescription: "Dasol production is performing 8% above the regional average. Prioritize equipment maintenance in June to avoid mid-season downtime.",
    prescribedBy: "Dr. Andrea Salazar · Dasol Admin", prescribedOn: "May 7",
  },
  {
    id: "S-2025-0126", coordinatorId: "C-010", coordinatorName: "Ana Cruz", municipality: "Dasol",
    period: "Mar 2025", type: "Income", status: "Approved", date: "Apr 1", month: "Mar", year: "2025",
    amountSold: "155", marketRate: "1070", totalRevenue: "165850", buyer: "Dasol Salt Buyers Association",
    notes: "Local buyer association contract. Volume sold exceeded target by 3 MT.",
    prescription: "Revenue consistent with production output. Local buyer association arrangement is ideal — reduces transport cost and improves margins.",
    prescribedBy: "System · AI Analysis", prescribedOn: "Apr 4",
  },
  {
    id: "S-2025-0125", coordinatorId: "C-011", coordinatorName: "Miguel Bautista", municipality: "Dasol",
    period: "Apr 2025", type: "Producers", status: "Pending", date: "May 4", month: "Apr", year: "2025",
    farmSize: "2.6", saltBeds: "11", productionMethod: "Solar Evaporation",
    owner: "Miguel Bautista", farmManager: "Miguel Bautista", managerContact: "(0928) 356-7890",
    newWorkerCount: "1", workers: ["Aling Nita Aquino", "Mang Juan Santos", "Aling Rosa Cruz"],
    notes: "Farm layout reconfiguration completed. New drainage channel installed.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2025-0123", coordinatorId: "C-012", coordinatorName: "Rosa Garcia", municipality: "Infanta",
    period: "Apr 2025", type: "Income", status: "Approved", date: "May 4", month: "Apr", year: "2025",
    amountSold: "168", marketRate: "1070", totalRevenue: "179760", buyer: "Metro Salt Distributors Inc.",
    notes: "Strong month. Exceeded April income target by ₱12,000.",
    prescription: "Income output is above average. Infanta is positioned well for Q3. Recommend locking in buyer contract for next 2 quarters.",
    prescribedBy: "Dra. Carmen Reyes · Infanta Admin", prescribedOn: "May 8",
  },
  {
    id: "S-2025-0122", coordinatorId: "C-012", coordinatorName: "Rosa Garcia", municipality: "Infanta",
    period: "Mar 2025", type: "Production", status: "Approved", date: "Apr 2", month: "Mar", year: "2025",
    volume: "155", notes: "Good March output despite brief equipment issue on March 14–15.",
    prescription: "Output satisfactory. Equipment downtime should be documented for preventive maintenance schedule.",
    prescribedBy: "Engr. Victor Santos · Infanta Admin", prescribedOn: "Apr 5",
  },
  {
    id: "S-2025-0121", coordinatorId: "C-013", coordinatorName: "Benjamin Santos", municipality: "Infanta",
    period: "Apr 2025", type: "Production", status: "Pending", date: "May 5", month: "Apr", year: "2025",
    volume: "132", notes: "April output slightly lower due to maintenance work on salt beds 7–9.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2025-0119", coordinatorId: "C-014", coordinatorName: "Tomas Bautista", municipality: "San Fabian",
    period: "Mar 2025", type: "Production", status: "Approved", date: "Apr 3", month: "Mar", year: "2025",
    volume: "141", notes: "Steady March output. Weather favorable throughout the period.",
    prescription: "San Fabian production is meeting targets. Consider scaling operations in Q3 to take advantage of the dry season.",
    prescribedBy: "Engr. Arturo Bautista · San Fabian Admin", prescribedOn: "Apr 6",
  },
  {
    id: "S-2025-0118", coordinatorId: "C-014", coordinatorName: "Tomas Bautista", municipality: "San Fabian",
    period: "Feb 2025", type: "Producers", status: "Approved", date: "Mar 3", month: "Feb", year: "2025",
    farmSize: "2.1", saltBeds: "9", productionMethod: "Solar Evaporation",
    owner: "Tomas Bautista", farmManager: "Tomas Bautista", managerContact: "(0951) 678-9012",
    newWorkerCount: "0", workers: ["Aling Belen Santos", "Mang Ado Reyes"],
    notes: "No new workers. Existing team is sufficient for current farm size.",
    prescription: "Workforce is adequate for current farm size. Plan for 1–2 additional workers if production target increases by 15%+ in Q3.",
    prescribedBy: "Ms. Rosario Garcia · San Fabian Admin", prescribedOn: "Mar 6",
  },
  {
    id: "S-2025-0117", coordinatorId: "C-015", coordinatorName: "Imelda Flores", municipality: "San Fabian",
    period: "Apr 2025", type: "Production", status: "Pending", date: "May 2", month: "Apr", year: "2025",
    volume: "89", notes: "New coordinator, first month of full operations.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  // ── 2024 entries ──────────────────────────────────────────────────────────
  {
    id: "S-2024-0098", coordinatorId: "C-001", coordinatorName: "Maria Santos", municipality: "Bolinao",
    period: "Nov 2024", type: "Production", status: "Approved", date: "Dec 3, 2024", month: "Nov", year: "2024",
    volume: "185", productionMethod: "Solar Evaporation", notes: "Strong dry-season output. Hybrid test beds yielded 15% more.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2024-0091", coordinatorId: "C-002", coordinatorName: "Carlos Reyes", municipality: "Bolinao",
    period: "Oct 2024", type: "Production", status: "Approved", date: "Nov 2, 2024", month: "Oct", year: "2024",
    volume: "172", productionMethod: "Hybrid", notes: "Introduced hybrid (covered + solar) method on 4 beds. Promising results.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2024-0085", coordinatorId: "C-003", coordinatorName: "Elena Navarro", municipality: "Bolinao",
    period: "Sep 2024", type: "Producers", status: "Approved", date: "Oct 4, 2024", month: "Sep", year: "2024",
    farmSize: "2.8", saltBeds: "12", productionMethod: "Solar Evaporation",
    owner: "Roberto Navarro", farmManager: "Elena Navarro", managerContact: "(0946) 834-5566",
    newWorkerCount: "1", workers: ["Aling Sari Santos", "Mang Tito Reyes", "Gina Cruz"],
    notes: "One new worker added ahead of the peak October season.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2024-0079", coordinatorId: "C-004", coordinatorName: "Jose Dela Cruz", municipality: "Lingayen",
    period: "Oct 2024", type: "Production", status: "Approved", date: "Nov 1, 2024", month: "Oct", year: "2024",
    volume: "168", productionMethod: "Solar Evaporation", notes: "Consistent output. No disruptions recorded.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2024-0073", coordinatorId: "C-005", coordinatorName: "Patricia Mendoza", municipality: "Lingayen",
    period: "Nov 2024", type: "Income", status: "Approved", date: "Dec 2, 2024", month: "Nov", year: "2024",
    amountSold: "148", marketRate: "1070", totalRevenue: "158360", buyer: "Metro Salt Distributors Inc.",
    notes: "November income above seasonal average. Buyer arrangement renewed.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2024-0067", coordinatorId: "C-006", coordinatorName: "Lina Aquino", municipality: "Bani",
    period: "Oct 2024", type: "Production", status: "Approved", date: "Nov 3, 2024", month: "Oct", year: "2024",
    volume: "104", productionMethod: "Cooking", notes: "Switched 3 beds to cooking method due to cloudy weather. Output maintained.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2024-0061", coordinatorId: "C-007", coordinatorName: "Ramon Florendo", municipality: "Bani",
    period: "Nov 2024", type: "Production", status: "Approved", date: "Dec 1, 2024", month: "Nov", year: "2024",
    volume: "118", productionMethod: "Hybrid", notes: "Hybrid method trial extended to 5 beds. Overall yield improved by 8%.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2024-0055", coordinatorId: "C-008", coordinatorName: "Pedro Lim", municipality: "Alaminos",
    period: "Oct 2024", type: "Production", status: "Approved", date: "Nov 4, 2024", month: "Oct", year: "2024",
    volume: "152", productionMethod: "Solar Evaporation", notes: "October was the highest output month of 2024.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2024-0049", coordinatorId: "C-009", coordinatorName: "Sofia Torres", municipality: "Alaminos",
    period: "Sep 2024", type: "Producers", status: "Approved", date: "Oct 3, 2024", month: "Sep", year: "2024",
    farmSize: "2.0", saltBeds: "9", productionMethod: "Solar Evaporation",
    owner: "Sofia Torres", farmManager: "Sofia Torres", managerContact: "(0917) 467-8901",
    newWorkerCount: "0", workers: ["Mang Pedro Villas", "Aling Nita Ruiz"],
    notes: "No change in workforce. Operations stable.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2024-0043", coordinatorId: "C-010", coordinatorName: "Ana Cruz", municipality: "Dasol",
    period: "Oct 2024", type: "Production", status: "Approved", date: "Nov 2, 2024", month: "Oct", year: "2024",
    volume: "178", productionMethod: "Hybrid", notes: "Hybrid method fully integrated on east section. 12% yield improvement over 2023.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2024-0037", coordinatorId: "C-011", coordinatorName: "Miguel Bautista", municipality: "Dasol",
    period: "Nov 2024", type: "Income", status: "Approved", date: "Dec 3, 2024", month: "Nov", year: "2024",
    amountSold: "161", marketRate: "1070", totalRevenue: "172270", buyer: "Dasol Salt Buyers Association",
    notes: "November income up 6% year-over-year.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2024-0031", coordinatorId: "C-012", coordinatorName: "Rosa Garcia", municipality: "Infanta",
    period: "Oct 2024", type: "Production", status: "Approved", date: "Nov 1, 2024", month: "Oct", year: "2024",
    volume: "162", productionMethod: "Solar Evaporation", notes: "Peak month. All 14 beds fully operational.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2024-0025", coordinatorId: "C-013", coordinatorName: "Benjamin Santos", municipality: "Infanta",
    period: "Oct 2024", type: "Production", status: "Approved", date: "Nov 2, 2024", month: "Oct", year: "2024",
    volume: "138", productionMethod: "Cooking", notes: "Cooking method used during low-wind week. Maintained output target.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2024-0019", coordinatorId: "C-014", coordinatorName: "Tomas Bautista", municipality: "San Fabian",
    period: "Nov 2024", type: "Production", status: "Approved", date: "Dec 2, 2024", month: "Nov", year: "2024",
    volume: "147", productionMethod: "Solar Evaporation", notes: "Good dry-season run in November.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2024-0013", coordinatorId: "C-015", coordinatorName: "Imelda Flores", municipality: "San Fabian",
    period: "Oct 2024", type: "Production", status: "Approved", date: "Nov 3, 2024", month: "Oct", year: "2024",
    volume: "96", productionMethod: "Solar Evaporation", notes: "Second month of full operations. Production improving.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  // ── 2023 entries ──────────────────────────────────────────────────────────
  {
    id: "S-2023-0182", coordinatorId: "C-001", coordinatorName: "Maria Santos", municipality: "Bolinao",
    period: "Apr 2023", type: "Production", status: "Approved", date: "May 4, 2023", month: "Apr", year: "2023",
    volume: "171", productionMethod: "Solar Evaporation", notes: "Excellent April. Peak sun hours contributed to record output.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2023-0165", coordinatorId: "C-004", coordinatorName: "Jose Dela Cruz", municipality: "Lingayen",
    period: "Apr 2023", type: "Production", status: "Approved", date: "May 2, 2023", month: "Apr", year: "2023",
    volume: "158", productionMethod: "Hybrid", notes: "Piloted hybrid method on 2 beds. Results compared to pure-solar favorable.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2023-0148", coordinatorId: "C-006", coordinatorName: "Lina Aquino", municipality: "Bani",
    period: "Mar 2023", type: "Income", status: "Approved", date: "Apr 3, 2023", month: "Mar", year: "2023",
    amountSold: "89", marketRate: "990", totalRevenue: "88110", buyer: "Pangasinan Salt Cooperative",
    notes: "March income reflects lower 2023 market rate.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2023-0135", coordinatorId: "C-008", coordinatorName: "Pedro Lim", municipality: "Alaminos",
    period: "May 2023", type: "Production", status: "Approved", date: "Jun 3, 2023", month: "May", year: "2023",
    volume: "147", productionMethod: "Solar Evaporation", notes: "Consistent output throughout May.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2023-0120", coordinatorId: "C-010", coordinatorName: "Ana Cruz", municipality: "Dasol",
    period: "Oct 2023", type: "Production", status: "Approved", date: "Nov 1, 2023", month: "Oct", year: "2023",
    volume: "166", productionMethod: "Hybrid", notes: "Second year of hybrid method. Bed optimization ongoing.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2023-0108", coordinatorId: "C-012", coordinatorName: "Rosa Garcia", municipality: "Infanta",
    period: "Nov 2023", type: "Producers", status: "Approved", date: "Dec 2, 2023", month: "Nov", year: "2023",
    farmSize: "2.3", saltBeds: "10", productionMethod: "Solar Evaporation",
    owner: "Rosa Garcia", farmManager: "Rosa Garcia", managerContact: "(0932) 567-8901",
    newWorkerCount: "1", workers: ["Aling Nena Reyes", "Mang Ben Cruz"],
    notes: "Worker added for peak season.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2023-0092", coordinatorId: "C-014", coordinatorName: "Tomas Bautista", municipality: "San Fabian",
    period: "Apr 2023", type: "Income", status: "Approved", date: "May 4, 2023", month: "Apr", year: "2023",
    amountSold: "133", marketRate: "990", totalRevenue: "131670", buyer: "National Salt Traders Corp.",
    notes: "Income consistent with 2023 seasonal average.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  // ── 2022 entries ──────────────────────────────────────────────────────────
  {
    id: "S-2022-0174", coordinatorId: "C-002", coordinatorName: "Carlos Reyes", municipality: "Bolinao",
    period: "Mar 2022", type: "Production", status: "Approved", date: "Apr 2, 2022", month: "Mar", year: "2022",
    volume: "155", productionMethod: "Solar Evaporation", notes: "2022 production baseline established.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2022-0158", coordinatorId: "C-005", coordinatorName: "Patricia Mendoza", municipality: "Lingayen",
    period: "Oct 2022", type: "Production", status: "Approved", date: "Nov 3, 2022", month: "Oct", year: "2022",
    volume: "135", productionMethod: "Cooking", notes: "Cooking method used on 2 beds due to overcast week. Output maintained.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2022-0142", coordinatorId: "C-007", coordinatorName: "Ramon Florendo", municipality: "Bani",
    period: "Apr 2022", type: "Production", status: "Approved", date: "May 3, 2022", month: "Apr", year: "2022",
    volume: "108", productionMethod: "Solar Evaporation", notes: "Standard output for Bani April period.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2022-0129", coordinatorId: "C-009", coordinatorName: "Sofia Torres", municipality: "Alaminos",
    period: "May 2022", type: "Income", status: "Approved", date: "Jun 1, 2022", month: "May", year: "2022",
    amountSold: "130", marketRate: "920", totalRevenue: "119600", buyer: "Pangasinan Salt Cooperative",
    notes: "May 2022 income. Market rate was ₱920 during this period.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2022-0113", coordinatorId: "C-011", coordinatorName: "Miguel Bautista", municipality: "Dasol",
    period: "Mar 2022", type: "Production", status: "Approved", date: "Apr 4, 2022", month: "Mar", year: "2022",
    volume: "145", productionMethod: "Solar Evaporation", notes: "Dasol 2022 March production. Above previous year baseline.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2022-0097", coordinatorId: "C-013", coordinatorName: "Benjamin Santos", municipality: "Infanta",
    period: "Apr 2022", type: "Production", status: "Approved", date: "May 2, 2022", month: "Apr", year: "2022",
    volume: "124", productionMethod: "Solar Evaporation", notes: "Consistent April output for 2022.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  // ── 2021 entries ──────────────────────────────────────────────────────────
  {
    id: "S-2021-0188", coordinatorId: "C-001", coordinatorName: "Maria Santos", municipality: "Bolinao",
    period: "Oct 2021", type: "Production", status: "Approved", date: "Nov 3, 2021", month: "Oct", year: "2021",
    volume: "160", productionMethod: "Solar Evaporation", notes: "2021 peak season. Standard solar evaporation — no hybrid used.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2021-0171", coordinatorId: "C-004", coordinatorName: "Jose Dela Cruz", municipality: "Lingayen",
    period: "Nov 2021", type: "Production", status: "Approved", date: "Dec 2, 2021", month: "Nov", year: "2021",
    volume: "148", productionMethod: "Solar Evaporation", notes: "Baseline output. Solar evaporation primary method.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2021-0154", coordinatorId: "C-010", coordinatorName: "Ana Cruz", municipality: "Dasol",
    period: "Oct 2021", type: "Production", status: "Approved", date: "Nov 1, 2021", month: "Oct", year: "2021",
    volume: "155", productionMethod: "Solar Evaporation", notes: "Pre-hybrid baseline for Dasol.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2021-0138", coordinatorId: "C-012", coordinatorName: "Rosa Garcia", municipality: "Infanta",
    period: "Apr 2021", type: "Income", status: "Approved", date: "May 2, 2021", month: "Apr", year: "2021",
    amountSold: "142", marketRate: "880", totalRevenue: "124960", buyer: "Metro Salt Distributors Inc.",
    notes: "2021 income baseline. Market rate was ₱880 at time of sale.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2021-0122", coordinatorId: "C-006", coordinatorName: "Lina Aquino", municipality: "Bani",
    period: "Mar 2021", type: "Producers", status: "Approved", date: "Apr 3, 2021", month: "Mar", year: "2021",
    farmSize: "1.2", saltBeds: "6", productionMethod: "Solar Evaporation",
    owner: "Lina Aquino", farmManager: "Lina Aquino", managerContact: "(0906) 789-0123",
    newWorkerCount: "0", workers: ["Aling Rosa Reyes"],
    notes: "2021 producer record. Single worker. Farm smaller than current size.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
  {
    id: "S-2021-0108", coordinatorId: "C-014", coordinatorName: "Tomas Bautista", municipality: "San Fabian",
    period: "May 2021", type: "Production", status: "Approved", date: "Jun 2, 2021", month: "May", year: "2021",
    volume: "128", productionMethod: "Cooking", notes: "Cooking method used for 2 of 9 beds. Exploring method diversification.",
    prescription: null, prescribedBy: null, prescribedOn: null,
  },
];

const INITIAL_PRESCRIPTIONS: AppPrescription[] = [
  {
    id: "P-001", fromId: "A-001", fromName: "Dr. Ricardo Santos",
    toId: "C-001", toName: "Maria Santos", toType: "coordinator",
    municipality: "Bolinao",
    text: "Recommended switching to covered salt beds during rainy season to improve yield consistency. Target: 35 MT for June reporting.",
    date: "Jun 3, 2025",
  },
  {
    id: "P-002", fromId: "A-001", fromName: "Dr. Ricardo Santos",
    toId: "C-002", toName: "Carlos Reyes", toType: "coordinator",
    municipality: "Bolinao",
    text: "Consider adding 3 more salt beds in the eastern section to meet the provincial quota increase. Apply for the expansion grant by July.",
    date: "Jun 4, 2025",
  },
  {
    id: "P-003", fromId: "A-015", fromName: "Dir. Ramon dela Cruz",
    toId: "A-001", toName: "Dr. Ricardo Santos", toType: "admin",
    municipality: "Bolinao",
    text: "Please ensure all Bolinao farms submit their Q2 income reports by June 15. Provincial consolidation deadline is June 20.",
    date: "Jun 5, 2025",
  },
  {
    id: "P-004", fromId: "A-003", fromName: "Atty. Juanita Reyes",
    toId: "C-004", toName: "Jose Dela Cruz", toType: "coordinator",
    municipality: "Lingayen",
    text: "Your May production was excellent. To sustain this, recommend solar evaporation scheduling during the morning shift for higher brine concentration.",
    date: "Jun 2, 2025", relatedSubmissionId: "S-2025-0140",
  },
  {
    id: "P-005", fromId: "A-015", fromName: "Dir. Ramon dela Cruz",
    toId: "A-003", toName: "Atty. Juanita Reyes", toType: "admin",
    municipality: "Lingayen",
    text: "Lingayen is performing above provincial average. Please prepare a best-practices report for the September inter-municipal seminar.",
    date: "Jun 1, 2025",
  },
  {
    id: "P-006", fromId: "A-001", fromName: "Dr. Ricardo Santos",
    toId: "C-001", toName: "Maria Santos", toType: "coordinator",
    municipality: "Bolinao",
    text: "Follow-up: please document the new dike repair before the next inspection. Include photos in the Producers report for July.",
    date: "Jun 8, 2025",
  },
];

// ─── 5-Year Production Data ───────────────────────────────────────────────────

// Annual provincial total per municipality (MT × 1000 approximation, Jul–Jun fiscal year)
const ANNUAL_PRODUCTION_5Y = [
  { year: "2020-21", bolinao: 302, lingayen: 218, bani: 115, alaminos: 178, dasol: 285, infanta: 238, sanfabian: 158 },
  { year: "2021-22", bolinao: 321, lingayen: 229, bani: 122, alaminos: 188, dasol: 306, infanta: 252, sanfabian: 168 },
  { year: "2022-23", bolinao: 345, lingayen: 245, bani: 130, alaminos: 200, dasol: 328, infanta: 270, sanfabian: 180 },
  { year: "2023-24", bolinao: 372, lingayen: 264, bani: 138, alaminos: 215, dasol: 352, infanta: 289, sanfabian: 193 },
  { year: "2024-25", bolinao: 396, lingayen: 280, bani: 146, alaminos: 228, dasol: 374, infanta: 306, sanfabian: 204 },
];

// Production method evolution (provincial aggregate, percentages)
const METHOD_TREND_PROVINCIAL = [
  { year: "2020-21", Sun: 92, Cooked: 8,  Hybrid: 0  },
  { year: "2021-22", Sun: 86, Cooked: 10, Hybrid: 4  },
  { year: "2022-23", Sun: 78, Cooked: 10, Hybrid: 12 },
  { year: "2023-24", Sun: 70, Cooked: 9,  Hybrid: 21 },
  { year: "2024-25", Sun: 63, Cooked: 8,  Hybrid: 29 },
];

// Per-coordinator method mix by year (% of production by method)
const COORD_METHOD_TREND: Record<string, { year: string; Sun: number; Cooked: number; Hybrid: number }[]> = {
  "C-001": [
    { year: "2020-21", Sun: 95, Cooked: 5,  Hybrid: 0  },
    { year: "2021-22", Sun: 90, Cooked: 7,  Hybrid: 3  },
    { year: "2022-23", Sun: 82, Cooked: 7,  Hybrid: 11 },
    { year: "2023-24", Sun: 73, Cooked: 7,  Hybrid: 20 },
    { year: "2024-25", Sun: 65, Cooked: 7,  Hybrid: 28 },
  ],
  "C-002": [
    { year: "2020-21", Sun: 93, Cooked: 7,  Hybrid: 0  },
    { year: "2021-22", Sun: 88, Cooked: 9,  Hybrid: 3  },
    { year: "2022-23", Sun: 80, Cooked: 9,  Hybrid: 11 },
    { year: "2023-24", Sun: 72, Cooked: 8,  Hybrid: 20 },
    { year: "2024-25", Sun: 68, Cooked: 8,  Hybrid: 24 },
  ],
  "C-003": [
    { year: "2020-21", Sun: 100, Cooked: 0, Hybrid: 0  },
    { year: "2021-22", Sun: 97, Cooked: 3,  Hybrid: 0  },
    { year: "2022-23", Sun: 90, Cooked: 5,  Hybrid: 5  },
    { year: "2023-24", Sun: 82, Cooked: 5,  Hybrid: 13 },
    { year: "2024-25", Sun: 75, Cooked: 5,  Hybrid: 20 },
  ],
  "C-004": [
    { year: "2020-21", Sun: 91, Cooked: 9,  Hybrid: 0  },
    { year: "2021-22", Sun: 86, Cooked: 10, Hybrid: 4  },
    { year: "2022-23", Sun: 78, Cooked: 10, Hybrid: 12 },
    { year: "2023-24", Sun: 68, Cooked: 10, Hybrid: 22 },
    { year: "2024-25", Sun: 60, Cooked: 9,  Hybrid: 31 },
  ],
  "C-005": [
    { year: "2020-21", Sun: 94, Cooked: 6,  Hybrid: 0  },
    { year: "2021-22", Sun: 89, Cooked: 8,  Hybrid: 3  },
    { year: "2022-23", Sun: 82, Cooked: 8,  Hybrid: 10 },
    { year: "2023-24", Sun: 75, Cooked: 7,  Hybrid: 18 },
    { year: "2024-25", Sun: 68, Cooked: 7,  Hybrid: 25 },
  ],
  "C-006": [
    { year: "2020-21", Sun: 88, Cooked: 12, Hybrid: 0  },
    { year: "2021-22", Sun: 82, Cooked: 14, Hybrid: 4  },
    { year: "2022-23", Sun: 74, Cooked: 14, Hybrid: 12 },
    { year: "2023-24", Sun: 65, Cooked: 14, Hybrid: 21 },
    { year: "2024-25", Sun: 55, Cooked: 15, Hybrid: 30 },
  ],
  "C-007": [
    { year: "2020-21", Sun: 90, Cooked: 10, Hybrid: 0  },
    { year: "2021-22", Sun: 84, Cooked: 12, Hybrid: 4  },
    { year: "2022-23", Sun: 76, Cooked: 12, Hybrid: 12 },
    { year: "2023-24", Sun: 68, Cooked: 11, Hybrid: 21 },
    { year: "2024-25", Sun: 60, Cooked: 11, Hybrid: 29 },
  ],
  "C-008": [
    { year: "2020-21", Sun: 96, Cooked: 4,  Hybrid: 0  },
    { year: "2021-22", Sun: 92, Cooked: 5,  Hybrid: 3  },
    { year: "2022-23", Sun: 85, Cooked: 5,  Hybrid: 10 },
    { year: "2023-24", Sun: 76, Cooked: 5,  Hybrid: 19 },
    { year: "2024-25", Sun: 68, Cooked: 5,  Hybrid: 27 },
  ],
  "C-009": [
    { year: "2020-21", Sun: 97, Cooked: 3,  Hybrid: 0  },
    { year: "2021-22", Sun: 93, Cooked: 4,  Hybrid: 3  },
    { year: "2022-23", Sun: 86, Cooked: 4,  Hybrid: 10 },
    { year: "2023-24", Sun: 77, Cooked: 4,  Hybrid: 19 },
    { year: "2024-25", Sun: 70, Cooked: 4,  Hybrid: 26 },
  ],
  "C-010": [
    { year: "2020-21", Sun: 89, Cooked: 11, Hybrid: 0  },
    { year: "2021-22", Sun: 83, Cooked: 11, Hybrid: 6  },
    { year: "2022-23", Sun: 73, Cooked: 10, Hybrid: 17 },
    { year: "2023-24", Sun: 62, Cooked: 9,  Hybrid: 29 },
    { year: "2024-25", Sun: 52, Cooked: 9,  Hybrid: 39 },
  ],
  "C-011": [
    { year: "2020-21", Sun: 91, Cooked: 9,  Hybrid: 0  },
    { year: "2021-22", Sun: 86, Cooked: 10, Hybrid: 4  },
    { year: "2022-23", Sun: 78, Cooked: 10, Hybrid: 12 },
    { year: "2023-24", Sun: 69, Cooked: 9,  Hybrid: 22 },
    { year: "2024-25", Sun: 61, Cooked: 9,  Hybrid: 30 },
  ],
  "C-012": [
    { year: "2020-21", Sun: 93, Cooked: 7,  Hybrid: 0  },
    { year: "2021-22", Sun: 88, Cooked: 8,  Hybrid: 4  },
    { year: "2022-23", Sun: 80, Cooked: 8,  Hybrid: 12 },
    { year: "2023-24", Sun: 71, Cooked: 8,  Hybrid: 21 },
    { year: "2024-25", Sun: 64, Cooked: 7,  Hybrid: 29 },
  ],
  "C-013": [
    { year: "2020-21", Sun: 95, Cooked: 5,  Hybrid: 0  },
    { year: "2021-22", Sun: 91, Cooked: 6,  Hybrid: 3  },
    { year: "2022-23", Sun: 84, Cooked: 6,  Hybrid: 10 },
    { year: "2023-24", Sun: 75, Cooked: 6,  Hybrid: 19 },
    { year: "2024-25", Sun: 67, Cooked: 6,  Hybrid: 27 },
  ],
  "C-014": [
    { year: "2020-21", Sun: 84, Cooked: 16, Hybrid: 0  },
    { year: "2021-22", Sun: 78, Cooked: 17, Hybrid: 5  },
    { year: "2022-23", Sun: 70, Cooked: 16, Hybrid: 14 },
    { year: "2023-24", Sun: 61, Cooked: 15, Hybrid: 24 },
    { year: "2024-25", Sun: 54, Cooked: 14, Hybrid: 32 },
  ],
  "C-015": [
    { year: "2020-21", Sun: 98, Cooked: 2,  Hybrid: 0  },
    { year: "2021-22", Sun: 95, Cooked: 3,  Hybrid: 2  },
    { year: "2022-23", Sun: 88, Cooked: 3,  Hybrid: 9  },
    { year: "2023-24", Sun: 80, Cooked: 3,  Hybrid: 17 },
    { year: "2024-25", Sun: 72, Cooked: 3,  Hybrid: 25 },
  ],
};

// Year-over-year per-coordinator monthly production (5 fiscal years)
// Format: coordinatorId → year → monthly array [Jul..Jun]
const FARM_MONTHLY_5Y: Record<string, Record<string, number[]>> = {
  "C-001": {
    "2020-21": [22, 25, 28, 32, 29, 26, 21, 24, 27, 30, 32, 26],
    "2021-22": [24, 28, 31, 35, 32, 29, 23, 26, 30, 33, 35, 29],
    "2022-23": [26, 30, 33, 38, 34, 31, 25, 28, 32, 36, 37, 31],
    "2023-24": [28, 31, 34, 39, 35, 33, 27, 30, 34, 37, 39, 32],
    "2024-25": [29, 33, 36, 41, 37, 34, 28, 31, 35, 38, 40, 33],
  },
  "C-004": {
    "2020-21": [16, 18, 20, 23, 21, 19, 15, 17, 19, 21, 22, 18],
    "2021-22": [17, 20, 22, 25, 23, 21, 16, 18, 21, 23, 25, 20],
    "2022-23": [18, 21, 24, 27, 24, 22, 17, 20, 22, 25, 26, 21],
    "2023-24": [19, 22, 25, 28, 25, 23, 18, 21, 24, 26, 28, 22],
    "2024-25": [20, 23, 26, 29, 26, 24, 19, 21, 24, 27, 29, 23],
  },
  "C-010": {
    "2020-21": [21, 24, 27, 30, 28, 25, 20, 23, 26, 28, 30, 24],
    "2021-22": [22, 26, 29, 32, 30, 27, 22, 24, 28, 31, 32, 26],
    "2022-23": [23, 27, 31, 35, 31, 29, 23, 26, 30, 33, 35, 28],
    "2023-24": [25, 28, 32, 36, 32, 30, 24, 27, 31, 34, 36, 29],
    "2024-25": [26, 30, 33, 37, 34, 31, 25, 28, 32, 35, 37, 30],
  },
};

// ─── Coordinator Dashboard ────────────────────────────────────────────────────
import { createContext, useContext } from "react";

const ThemeCtx = createContext(false);
function useDark() { return useContext(ThemeCtx); }

type Tok = ReturnType<typeof tok>;
function tok(dark: boolean) {
  return dark ? {
    pageBg:        "#0d1424",
    navBg:         "#0a1220",
    navShadow:     "0px 4px 8px rgba(0,0,0,0.5)",
    card:          "#141e33",
    cardBorder:    "#243352",
    cardShadow:    "none",
    sectionBg:     "#0f1929",
    sectionBorder: "#243352",
    heading:       "#e8f0ff",
    body:          "#c0d0e4",
    muted:         "#8aa4c0",
    inputBg:       "#0f1929",
    inputBorder:   "#2a3d5e",
    inputText:     "#e8f0ff",
    ph:            "#4a6080",
    tableHead:     "#0f1929",
    tableRow2:     "#111c30",
    tableHover:    "#1a2a42",
    divider:       "#1e2d48",
  } : {
    pageBg:        "#f1f3f6",
    navBg:         "#ffffff",
    navShadow:     "0px 4px 4px rgba(0,0,0,0.25)",
    card:          "#ffffff",
    cardBorder:    "#e8e8e8",
    cardShadow:    "0px 1px 6px rgba(0,0,0,0.06)",
    sectionBg:     "#f4f8ff",
    sectionBorder: "#d0e4ff",
    heading:       "#0a2d5d",
    body:          "#555555",
    muted:         "#888888",
    inputBg:       "#ffffff",
    inputBorder:   "#dddddd",
    inputText:     "#333333",
    ph:            "#bbbbbb",
    tableHead:     "#f8f9fc",
    tableRow2:     "#fafafa",
    tableHover:    "#f0f6ff",
    divider:       "#f0f0f0",
  };
}

function Toggle({ on, onToggle, label }: { on: boolean; onToggle: () => void; label: string }) {
  const dark = useDark(); const tk = tok(dark);
  return (
    <div className="flex items-center justify-between py-3 px-4 border-b" style={{ borderColor: tk.divider }}>
      <span className="text-[13px]" style={{ ...montserrat(500), color: tk.body }}>{label}</span>
      <button
        onClick={onToggle}
        className="w-11 h-6 rounded-full transition-colors cursor-pointer relative shrink-0 overflow-hidden"
        style={{ background: on ? "#008cff" : dark ? "#2a3d5e" : "#ccc" }}
      >
        <span
          className="absolute top-1 h-4 w-4 bg-white rounded-full shadow transition-all duration-200"
          style={{ left: on ? "calc(100% - 20px)" : "4px" }}
        />
      </button>
    </div>
  );
}

type CoordTab = "home" | "submit" | "records" | "settings";

const BOLINAO_MONTHLY = [
  { month: "Jul", production: 28, revenue: 29960 },
  { month: "Aug", production: 32, revenue: 34240 },
  { month: "Sep", production: 35, revenue: 37450 },
  { month: "Oct", production: 40, revenue: 42800 },
  { month: "Nov", production: 36, revenue: 38520 },
  { month: "Dec", production: 33, revenue: 35310 },
  { month: "Jan", production: 27, revenue: 28890 },
  { month: "Feb", production: 30, revenue: 32100 },
  { month: "Mar", production: 34, revenue: 36380 },
  { month: "Apr", production: 37, revenue: 39590 },
  { month: "May", production: 39, revenue: 41730 },
  { month: "Jun", production: 32, revenue: 34240 },
];


function StatusPill({ status }: { status: string }) {
  const map: Record<string, string> = {
    Approved: "bg-green-100 text-green-700 border border-green-300",
    Pending:  "bg-yellow-100 text-yellow-700 border border-yellow-300",
    Rejected: "bg-red-100 text-red-600 border border-red-300",
  };
  return (
    <span className={`px-3 py-0.5 rounded-full text-[11px] ${map[status] ?? map.Pending}`} style={montserrat(700)}>
      {status}
    </span>
  );
}

function CoordNavBar({ onSignOut }: { onSignOut: () => void }) {
  const dark = useDark(); const tk = tok(dark);
  return (
    <nav
      className="h-[70px] flex items-center justify-between px-5 sm:px-10 shrink-0 transition-colors duration-300"
      style={{ background: tk.navBg, boxShadow: tk.navShadow }}
    >
      <div className="h-[38px] w-[160px] relative shrink-0">
        <img alt="PangAsin" className="absolute block inset-0 max-w-none size-full" src={imgMainLogo} />
      </div>
      <button
        onClick={onSignOut}
        className="bg-[#008cff] h-[40px] px-5 rounded-[10px] cursor-pointer text-white text-[16px] sm:text-[18px] tracking-[0.2px] shrink-0 hover:bg-[#0079e0] transition-colors"
        style={montserrat(900)}
      >
        Sign out
      </button>
    </nav>
  );
}

const COORD_TABS: { id: CoordTab; label: string; icon: React.ReactNode }[] = [
  {
    id: "home", label: "HOME",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "submit", label: "SUBMIT",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    id: "records", label: "RECORDS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: "settings", label: "SETTINGS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

function CoordBottomNav({ active, onChange }: { active: CoordTab; onChange: (t: CoordTab) => void }) {
  const dark = useDark(); const tk = tok(dark);
  return (
    <div
      className="shrink-0 px-3 pb-3 pt-2 transition-colors duration-300"
      style={{ background: tk.pageBg }}
    >
      <div
        className="flex items-center rounded-[30px] overflow-hidden px-1 py-1"
        style={{ background: "linear-gradient(to bottom, #0d3567, #073070)" }}
      >
        {COORD_TABS.map((t) => {
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onChange(t.id)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-2 rounded-[24px] cursor-pointer transition-all duration-200"
              style={{
                background: isActive ? "#008cff" : "transparent",
                color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
              }}
            >
              {t.icon}
              <span className="text-[11px] tracking-wider whitespace-nowrap" style={montserrat(800)}>{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function CoordHomeTab({ user, submissions, prescriptions, onSubmit }: {
  user: AppUser;
  submissions: AppSubmission[];
  prescriptions: AppPrescription[];
  onSubmit: (type: "Production" | "Producers" | "Income") => void;
}) {
  const dark = useDark(); const tk = tok(dark);
  const [chartType, setChartType] = useState<"production" | "revenue">("production");

  const muniKey = MUNI_KEY[user.municipality] ?? "bolinao";
  const chartColor = chartType === "production" ? "#008cff" : (dark ? "#4a9eff" : "#0a2d5d");
  const chartData = MUNI_TREND_DATA.map((d) => ({
    month: d.month,
    value: chartType === "production"
      ? (d as unknown as Record<string, number>)[muniKey] ?? 0
      : ((d as unknown as Record<string, number>)[muniKey] ?? 0) * 1070,
  }));

  const approved = submissions.filter((s) => s.status === "Approved").length;
  const pending  = submissions.filter((s) => s.status === "Pending").length;
  const rejected = submissions.filter((s) => s.status === "Rejected").length;
  const totalProd = submissions.filter((s) => s.type === "Production" && s.status === "Approved")
    .reduce((sum, s) => sum + parseFloat(s.volume ?? "0"), 0);
  const totalRev = submissions.filter((s) => s.type === "Income" && s.status === "Approved")
    .reduce((sum, s) => sum + parseFloat(s.totalRevenue ?? "0"), 0);
  const myPrescriptions = prescriptions
    .filter((p) => p.toId === user.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const latestPrescription = myPrescriptions[0] ?? null;

  return (
    <div className="px-4 py-4 flex flex-col gap-4" style={{ background: tk.pageBg }}>
      {/* Stat cards row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-[16px] border p-3 flex flex-col gap-2" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
          <p className="text-[11px] leading-tight text-center" style={{ ...montserrat(800), color: tk.heading }}>Report Status</p>
          <div className="flex flex-col gap-1.5">
            {[{ label: "Approved", val: approved, color: "#22c55e" }, { label: "Pending", val: pending, color: "#ca8a04" }, { label: "Rejected", val: rejected, color: "#ef4444" }].map(({ label, val, color }) => (
              <div key={label} className="flex items-center justify-between">
                <span className="text-[10px]" style={{ ...montserrat(700), color }}>{label}</span>
                <span className="text-[14px]" style={{ ...montserrat(900), color }}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[16px] border p-3 flex flex-col items-center text-center gap-0.5" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
          <p className="text-[22px] leading-none" style={{ ...montserrat(900), color: tk.inputText }}>{totalProd > 0 ? `${totalProd} MT` : "— MT"}</p>
          <p className="text-[10px] mt-1" style={{ ...montserrat(400), color: tk.body }}>Your Production</p>
          <p className="text-[11px]" style={{ ...montserrat(800), color: tk.heading }}>{user.municipality}</p>
        </div>

        <div className="rounded-[16px] border p-3 flex flex-col items-center text-center gap-0.5" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
          <p className="text-[16px] leading-none" style={{ ...montserrat(900), color: tk.inputText }}>{totalRev > 0 ? `₱${totalRev.toLocaleString()}` : "—"}</p>
          <p className="text-[10px] mt-1" style={{ ...montserrat(400), color: tk.body }}>Your Revenue</p>
          <p className="text-[11px]" style={{ ...montserrat(800), color: tk.heading }}>{user.municipality}</p>
        </div>
      </div>

      {/* Latest Prescription widget */}
      {latestPrescription ? (
        <div className="rounded-[16px] border overflow-hidden" style={{ background: dark ? "#0d1f3a" : "#f0f7ff", borderColor: dark ? "#1e3a5f" : "#bfdbfe" }}>
          <div className="px-4 py-2.5 flex items-center gap-2 border-b" style={{ background: dark ? "#0a1929" : "#dbeafe", borderColor: dark ? "#1e3a5f" : "#93c5fd" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
              <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            <p className="text-[11px] text-blue-600 flex-1" style={montserrat(800)}>Latest Prescription</p>
            <span className="text-[10px] text-blue-500" style={montserrat(500)}>{latestPrescription.id} · {latestPrescription.date}</span>
            <span className="text-[10px] text-blue-500" style={montserrat(500)}>
              {myPrescriptions.length} prescription{myPrescriptions.length !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="px-4 py-3 flex flex-col gap-1.5">
            <p className="text-[12px] leading-relaxed" style={{ ...montserrat(500), color: dark ? "#c8daf0" : "#1e3a5f" }}>
              {latestPrescription.text}
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 shrink-0">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="text-[10px] text-blue-400" style={montserrat(600)}>{latestPrescription.fromName}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-[16px] border px-4 py-3 flex items-center gap-2" style={{ background: tk.card, borderColor: tk.cardBorder }}>
          <svg viewBox="0 0 24 24" fill="none" stroke={tk.muted} strokeWidth="2" strokeLinecap="round" className="w-4 h-4 shrink-0">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="text-[12px]" style={{ ...montserrat(500), color: tk.muted }}>No prescriptions received yet.</p>
        </div>
      )}

      {/* Chart card */}
      <div className="rounded-[16px] border p-4" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[12px]" style={{ ...montserrat(700), color: tk.heading }}>{user.municipality} Trend · 12 Months</p>
          <div className="flex gap-1">
            {(["production", "revenue"] as const).map((ct) => (
              <button key={ct} onClick={() => setChartType(ct)}
                className="px-3 py-0.5 rounded-full text-[10px] transition-colors cursor-pointer"
                style={{ ...montserrat(700), background: chartType === ct ? "#008cff" : (dark ? "#1e2d4a" : "#f0f4f8"), color: chartType === ct ? "#fff" : tk.body }}>
                {ct === "production" ? "Production" : "Revenue"}
              </button>
            ))}
          </div>
        </div>
        <ResponsiveContainer width="100%" height={140}>
          <AreaChart data={chartData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
            <defs>
              <linearGradient id="coordGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColor} stopOpacity={0.25} />
                <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={tk.divider} vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 9, fill: tk.muted, fontFamily: "Montserrat, sans-serif" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 9, fill: tk.muted, fontFamily: "Montserrat, sans-serif" }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ fontSize: 11, borderRadius: 10, border: `1px solid ${tk.cardBorder}`, fontFamily: "Montserrat, sans-serif", background: tk.card, color: tk.inputText }}
              formatter={(v: unknown) => { const n = Number(v); return [chartType === "production" ? `${n} MT` : `₱${n.toLocaleString()}`, chartType === "production" ? "Production" : "Revenue"]; }}
            />
            <Area type="monotone" dataKey="value" stroke={chartColor} strokeWidth={2} fill="url(#coordGrad)" dot={false} activeDot={{ r: 4 }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Submit action buttons */}
      <div className="grid grid-cols-3 gap-2.5">
        {(["Production", "Producers", "Income"] as const).map((type) => (
          <button key={type} onClick={() => onSubmit(type)}
            className="h-[46px] bg-[#008cff] text-white text-[10px] rounded-[10px] cursor-pointer hover:bg-[#0079e0] transition-colors px-2"
            style={montserrat(800)}>
            Submit {type} Report
          </button>
        ))}
      </div>

      {/* Recent submissions */}
      <div className="rounded-[16px] border overflow-hidden" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
        <div className="px-4 py-3 border-b" style={{ borderColor: tk.divider }}>
          <p className="text-[12px]" style={{ ...montserrat(700), color: tk.heading }}>Recent Submissions</p>
          <p className="text-[10px]" style={{ ...montserrat(400), color: tk.muted }}>Your latest reports</p>
        </div>
        <table className="w-full">
          <thead>
            <tr style={{ background: tk.tableHead }}>
              {["ID", "PERIOD", "TYPE", "STATUS", "DATE"].map((h) => (
                <th key={h} className="px-3 py-2 text-left text-[10px]" style={{ ...montserrat(700), color: tk.muted }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {submissions.slice(0, 5).map((row, i) => (
              <tr key={row.id} className="border-t cursor-pointer transition-colors" style={{ borderColor: tk.divider, background: i % 2 === 1 ? tk.tableRow2 : "transparent" }}>
                <td className="px-3 py-2.5 text-[10px]" style={{ ...montserrat(700), color: tk.heading }}>{row.id}</td>
                <td className="px-3 py-2.5 text-[10px]" style={{ ...montserrat(500), color: tk.body }}>{row.period}</td>
                <td className="px-3 py-2.5 text-[10px]" style={{ ...montserrat(500), color: tk.body }}>{row.type}</td>
                <td className="px-3 py-2.5"><StatusPill status={row.status} /></td>
                <td className="px-3 py-2.5 text-[10px]" style={{ ...montserrat(500), color: tk.muted }}>{row.date}</td>
              </tr>
            ))}
            {submissions.length === 0 && (
              <tr><td colSpan={5} className="px-3 py-6 text-center text-[12px]" style={{ ...montserrat(500), color: tk.muted }}>No submissions yet</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// shared field + label wrapper
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  const dark = useDark(); const tk = tok(dark);
  return (
    <div className="flex flex-col gap-1.5">
      <p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>{label}</p>
      {children}
    </div>
  );
}

function useInputStyle() {
  const dark = useDark(); const tk = tok(dark);
  return {
    base: {
      background: tk.inputBg,
      borderColor: tk.inputBorder,
      color: tk.inputText,
    } as React.CSSProperties,
    cls: "border rounded-[10px] px-3 py-2.5 text-[13px] outline-none focus:border-[#008cff] transition-colors",
  };
}

const inputCls = "border border-[#ddd] rounded-[10px] px-3 py-2.5 text-[13px] text-[#333] placeholder-[#bbb] outline-none focus:border-[#008cff] transition-colors bg-white";
const selectCls = `${inputCls} cursor-pointer`;

function FileUploadZone({ accept, label }: { accept: string; label: string }) {
  const dark = useDark(); const tk = tok(dark);
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div
      onClick={() => inputRef.current?.click()}
      className="border-2 border-dashed rounded-[12px] px-4 py-5 flex flex-col items-center gap-2 cursor-pointer hover:border-[#008cff] transition-colors"
      style={{ borderColor: dark ? "#1e2d4a" : "#c8d8f0", background: dark ? "#0f1929" : "transparent" }}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />
      {file ? (
        <>
          <svg viewBox="0 0 24 24" fill="none" stroke="#008cff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
          </svg>
          <p className="text-[#008cff] text-[12px] text-center" style={montserrat(700)}>{file.name}</p>
          <p className="text-[#888] text-[10px]" style={montserrat(400)}>Tap to change file</p>
        </>
      ) : (
        <>
          <svg viewBox="0 0 24 24" fill="none" stroke="#aac4e0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" />
            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
          </svg>
          <p className="text-[#555] text-[12px] text-center" style={montserrat(600)}>{label}</p>
          <p className="text-[#aaa] text-[10px]" style={montserrat(400)}>Excel, CSV or PDF accepted</p>
        </>
      )}
    </div>
  );
}

function ProductionForm() {
  return (
    <>
      <div className="flex gap-3">
        <Field label="Month">
          <select className={selectCls} style={montserrat(500)}>
            {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m) => <option key={m}>{m}</option>)}
          </select>
        </Field>
        <Field label="Year">
          <select className={selectCls} style={montserrat(500)}>
            {["2025","2026","2024"].map((y) => <option key={y}>{y}</option>)}
          </select>
        </Field>
      </div>
      <Field label="Volume (MT)">
        <input type="number" placeholder="e.g. 182" className={inputCls} style={montserrat(500)} />
      </Field>
      <Field label="Notes (optional)">
        <textarea rows={2} placeholder="Any additional remarks…" className={`${inputCls} resize-none`} style={montserrat(500)} />
      </Field>
      <Field label="Attach File (Excel / CSV / PDF)">
        <FileUploadZone accept=".xlsx,.xls,.csv,.pdf" label="Upload production data file" />
      </Field>
    </>
  );
}

function ProducersForm() {
  const [workers, setWorkers] = useState<string[]>([""]);
  const addWorker = () => setWorkers((w) => [...w, ""]);
  const updateWorker = (i: number, v: string) => setWorkers((w) => w.map((x, idx) => idx === i ? v : x));
  const removeWorker = (i: number) => setWorkers((w) => w.filter((_, idx) => idx !== i));

  return (
    <>
      <div className="flex gap-3">
        <Field label="Month">
          <select className={selectCls} style={montserrat(500)}>
            {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m) => <option key={m}>{m}</option>)}
          </select>
        </Field>
        <Field label="Year">
          <select className={selectCls} style={montserrat(500)}>
            {["2025","2026","2024"].map((y) => <option key={y}>{y}</option>)}
          </select>
        </Field>
      </div>

      {/* Farm info */}
      <div
        className="rounded-[12px] px-4 py-3 flex flex-col gap-3"
        style={{ background: "#f4f8ff", border: "1px solid #d0e4ff" }}
      >
        <p className="text-[#0a2d5d] text-[12px]" style={montserrat(800)}>Farm Information</p>
        <Field label="Farm Size (hectares)">
          <input type="number" step="0.01" placeholder="e.g. 2.5" className={inputCls} style={montserrat(500)} />
        </Field>
        <Field label="Number of Salt Beds">
          <input type="number" placeholder="e.g. 12" className={inputCls} style={montserrat(500)} />
        </Field>
        <Field label="Production Method">
          <select className={selectCls} style={montserrat(500)}>
            <option>Solar Evaporation</option>
            <option>Mechanical Evaporation</option>
            <option>Boiling</option>
          </select>
        </Field>
      </div>

      {/* Management */}
      <div
        className="rounded-[12px] px-4 py-3 flex flex-col gap-3"
        style={{ background: "#f4f8ff", border: "1px solid #d0e4ff" }}
      >
        <p className="text-[#0a2d5d] text-[12px]" style={montserrat(800)}>Management</p>
        <Field label="Farm Owner">
          <input type="text" placeholder="Full name" className={inputCls} style={montserrat(500)} />
        </Field>
        <Field label="Manager / Operator">
          <input type="text" placeholder="Full name (if different from owner)" className={inputCls} style={montserrat(500)} />
        </Field>
        <Field label="Contact Number">
          <input type="tel" placeholder="e.g. 09XX-XXX-XXXX" className={inputCls} style={montserrat(500)} />
        </Field>
      </div>

      {/* Workers */}
      <div
        className="rounded-[12px] px-4 py-3 flex flex-col gap-3"
        style={{ background: "#f4f8ff", border: "1px solid #d0e4ff" }}
      >
        <div className="flex items-center justify-between">
          <p className="text-[#0a2d5d] text-[12px]" style={montserrat(800)}>Workers</p>
          <button
            type="button"
            onClick={addWorker}
            className="text-[11px] text-[#008cff] flex items-center gap-1 cursor-pointer"
            style={montserrat(700)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5">
              <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add Worker
          </button>
        </div>
        <Field label="New Worker Count">
          <input type="number" placeholder="Number of newly added workers" className={inputCls} style={montserrat(500)} />
        </Field>
        <div className="flex flex-col gap-2">
          <p className="text-[#555] text-[12px]" style={montserrat(700)}>Worker Names</p>
          {workers.map((w, i) => (
            <div key={i} className="flex gap-2 items-center">
              <input
                type="text"
                value={w}
                onChange={(e) => updateWorker(i, e.target.value)}
                placeholder={`Worker ${i + 1} full name`}
                className={`${inputCls} flex-1`}
                style={montserrat(500)}
              />
              {workers.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeWorker(i)}
                  className="text-red-400 hover:text-red-600 cursor-pointer shrink-0"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <Field label="Notes (optional)">
        <textarea rows={2} placeholder="Any additional remarks…" className={`${inputCls} resize-none`} style={montserrat(500)} />
      </Field>
      <Field label="Attach File (Excel / CSV / PDF)">
        <FileUploadZone accept=".xlsx,.xls,.csv,.pdf" label="Upload producers data file" />
      </Field>
    </>
  );
}

function IncomeForm() {
  return (
    <>
      <div className="flex gap-3">
        <Field label="Month">
          <select className={selectCls} style={montserrat(500)}>
            {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m) => <option key={m}>{m}</option>)}
          </select>
        </Field>
        <Field label="Year">
          <select className={selectCls} style={montserrat(500)}>
            {["2025","2026","2024"].map((y) => <option key={y}>{y}</option>)}
          </select>
        </Field>
      </div>
      <Field label="Amount Sold (MT)">
        <input type="number" placeholder="e.g. 360" className={inputCls} style={montserrat(500)} />
      </Field>
      <Field label="Market Rate (₱/ton)">
        <input type="number" placeholder="e.g. 1070" className={inputCls} style={montserrat(500)} />
      </Field>
      <Field label="Total Revenue (₱)">
        <input type="number" placeholder="Auto-calculated or enter manually" className={inputCls} style={montserrat(500)} />
      </Field>
      <Field label="Buyer / Buyer Company">
        <input type="text" placeholder="Name of buyer or trading company" className={inputCls} style={montserrat(500)} />
      </Field>
      <Field label="Notes (optional)">
        <textarea rows={2} placeholder="Any additional remarks…" className={`${inputCls} resize-none`} style={montserrat(500)} />
      </Field>
      <Field label="Attach File (Excel / CSV / PDF)">
        <FileUploadZone accept=".xlsx,.xls,.csv,.pdf" label="Upload income data file" />
      </Field>
    </>
  );
}

function CoordSubmitTab({ user, setSubmissions, initialType }: {
  user: AppUser;
  setSubmissions: React.Dispatch<React.SetStateAction<AppSubmission[]>>;
  initialType?: "Production" | "Producers" | "Income";
}) {
  const dark = useDark(); const tk = tok(dark);
  const [reportType, setReportType] = useState<"Production" | "Producers" | "Income">(initialType ?? "Production");
  const [submitted, setSubmitted] = useState(false);

  const [pMonth, setPMonth] = useState("May"); const [pYear, setPYear] = useState("2025");
  const [pVolume, setPVolume] = useState(""); const [pNotes, setPNotes] = useState("");

  const [rMonth, setRMonth] = useState("May"); const [rYear, setRYear] = useState("2025");
  const [rFarmSize, setRFarmSize] = useState(""); const [rSaltBeds, setRSaltBeds] = useState("");
  const [rMethod, setRMethod] = useState("Solar Evaporation");
  const [rOwner, setROwner] = useState(""); const [rManager, setRManager] = useState(user.name);
  const [rContact, setRContact] = useState(user.contact);
  const [rNewWorkers, setRNewWorkers] = useState(""); const [rWorkers, setRWorkers] = useState<string[]>([""]);
  const [rNotes, setRNotes] = useState("");

  const [iMonth, setIMonth] = useState("May"); const [iYear, setIYear] = useState("2025");
  const [iAmountSold, setIAmountSold] = useState(""); const [iRate, setIRate] = useState("");
  const [iRevenue, setIRevenue] = useState(""); const [iBuyer, setIBuyer] = useState("");
  const [iNotes, setINotes] = useState("");

  useEffect(() => {
    const s = parseFloat(iAmountSold) || 0;
    const r = parseFloat(iRate) || 0;
    if (s > 0 && r > 0) setIRevenue(String(s * r));
  }, [iAmountSold, iRate]);

  const MO = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const YR = ["2025","2026","2024"];
  const iCls = "border rounded-[10px] px-3 py-2.5 text-[13px] outline-none focus:border-[#008cff] transition-colors";
  const iSty: React.CSSProperties = { background: tk.inputBg, borderColor: tk.inputBorder, color: tk.inputText };
  const curMonth = MO[new Date().getMonth()];
  const curDay = new Date().getDate();

  const handleSubmit = () => {
    const ts = String(Date.now()).slice(-4);
    let newSub: AppSubmission;
    if (reportType === "Production") {
      newSub = { id: `S-${pYear}-${ts}`, coordinatorId: user.id, coordinatorName: user.name, municipality: user.municipality,
        period: `${pMonth} ${pYear}`, type: "Production", status: "Pending", date: `${curMonth} ${curDay}`,
        month: pMonth, year: pYear, volume: pVolume, notes: pNotes, prescription: null, prescribedBy: null, prescribedOn: null };
    } else if (reportType === "Producers") {
      newSub = { id: `S-${rYear}-${ts}`, coordinatorId: user.id, coordinatorName: user.name, municipality: user.municipality,
        period: `${rMonth} ${rYear}`, type: "Producers", status: "Pending", date: `${curMonth} ${curDay}`,
        month: rMonth, year: rYear, farmSize: rFarmSize, saltBeds: rSaltBeds, productionMethod: rMethod,
        owner: rOwner, farmManager: rManager, managerContact: rContact,
        newWorkerCount: rNewWorkers, workers: rWorkers.filter((w) => w.trim()),
        notes: rNotes, prescription: null, prescribedBy: null, prescribedOn: null };
    } else {
      newSub = { id: `S-${iYear}-${ts}`, coordinatorId: user.id, coordinatorName: user.name, municipality: user.municipality,
        period: `${iMonth} ${iYear}`, type: "Income", status: "Pending", date: `${curMonth} ${curDay}`,
        month: iMonth, year: iYear, amountSold: iAmountSold, marketRate: iRate, totalRevenue: iRevenue,
        buyer: iBuyer, notes: iNotes, prescription: null, prescribedBy: null, prescribedOn: null };
    }
    setSubmissions((prev) => [newSub, ...prev]);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="px-6 py-16 flex flex-col items-center gap-5" style={{ background: tk.pageBg }}>
        <div className="w-[70px] h-[70px] bg-green-100 rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <p className="text-[18px] text-center" style={{ ...montserrat(800), color: tk.heading }}>Report Submitted!</p>
        <p className="text-[13px] text-center" style={{ ...montserrat(400), color: tk.body }}>Your {reportType} Report has been sent for review.</p>
        <button onClick={() => setSubmitted(false)}
          className="bg-[#008cff] text-white text-[14px] px-8 py-2.5 rounded-full cursor-pointer hover:bg-[#0079e0] transition-colors" style={montserrat(700)}>
          New Report
        </button>
      </div>
    );
  }

  const curM = reportType === "Production" ? pMonth : reportType === "Producers" ? rMonth : iMonth;
  const curY = reportType === "Production" ? pYear  : reportType === "Producers" ? rYear  : iYear;
  const setM = (v: string) => { if (reportType === "Production") setPMonth(v); else if (reportType === "Producers") setRMonth(v); else setIMonth(v); };
  const setY = (v: string) => { if (reportType === "Production") setPYear(v); else if (reportType === "Producers") setRYear(v); else setIYear(v); };

  return (
    <div className="px-4 py-5 flex flex-col gap-4" style={{ background: tk.pageBg }}>
      <p className="text-[18px]" style={{ ...montserrat(800), color: tk.heading }}>New Report</p>

      <div className="flex gap-2">
        {(["Production", "Producers", "Income"] as const).map((rt) => (
          <button key={rt} onClick={() => setReportType(rt)}
            className="flex-1 py-2 rounded-full text-[12px] cursor-pointer transition-colors border"
            style={{ ...montserrat(700), background: reportType === rt ? "#008cff" : tk.card, color: reportType === rt ? "#fff" : tk.body, borderColor: reportType === rt ? "#008cff" : tk.cardBorder }}>
            {rt}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <div className="flex flex-col gap-1.5 flex-1">
          <p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>Month</p>
          <select value={curM} onChange={(e) => setM(e.target.value)} className={`${iCls} cursor-pointer`} style={iSty}>{MO.map((m) => <option key={m}>{m}</option>)}</select>
        </div>
        <div className="flex flex-col gap-1.5 flex-1">
          <p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>Year</p>
          <select value={curY} onChange={(e) => setY(e.target.value)} className={`${iCls} cursor-pointer`} style={iSty}>{YR.map((y) => <option key={y}>{y}</option>)}</select>
        </div>
      </div>

      {reportType === "Production" && (
        <>
          <div className="flex flex-col gap-1.5">
            <p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>Volume (MT)</p>
            <input type="number" value={pVolume} onChange={(e) => setPVolume(e.target.value)} placeholder="e.g. 182" className={iCls} style={iSty} />
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>Notes (optional)</p>
            <textarea rows={2} value={pNotes} onChange={(e) => setPNotes(e.target.value)} placeholder="Any additional remarks…" className={`${iCls} resize-none`} style={iSty} />
          </div>
        </>
      )}

      {reportType === "Producers" && (
        <>
          <div className="rounded-[12px] px-4 py-3 flex flex-col gap-3 border" style={{ background: dark ? "#0f1929" : "#f4f8ff", borderColor: dark ? "#243352" : "#d0e4ff" }}>
            <p className="text-[12px]" style={{ ...montserrat(800), color: tk.heading }}>Farm Information</p>
            <div className="flex flex-col gap-1.5"><p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>Farm Size (ha)</p><input type="number" step="0.01" value={rFarmSize} onChange={(e) => setRFarmSize(e.target.value)} placeholder="e.g. 2.5" className={iCls} style={iSty} /></div>
            <div className="flex flex-col gap-1.5"><p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>Salt Beds</p><input type="number" value={rSaltBeds} onChange={(e) => setRSaltBeds(e.target.value)} placeholder="e.g. 12" className={iCls} style={iSty} /></div>
            <div className="flex flex-col gap-1.5"><p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>Production Method</p><select value={rMethod} onChange={(e) => setRMethod(e.target.value)} className={`${iCls} cursor-pointer`} style={iSty}><option>Solar Evaporation</option><option>Mechanical Evaporation</option><option>Boiling</option></select></div>
          </div>
          <div className="rounded-[12px] px-4 py-3 flex flex-col gap-3 border" style={{ background: dark ? "#0f1929" : "#f4f8ff", borderColor: dark ? "#243352" : "#d0e4ff" }}>
            <p className="text-[12px]" style={{ ...montserrat(800), color: tk.heading }}>Management</p>
            <div className="flex flex-col gap-1.5"><p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>Farm Owner</p><input type="text" value={rOwner} onChange={(e) => setROwner(e.target.value)} placeholder="Full name" className={iCls} style={iSty} /></div>
            <div className="flex flex-col gap-1.5"><p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>Manager / Operator</p><input type="text" value={rManager} onChange={(e) => setRManager(e.target.value)} placeholder="Full name" className={iCls} style={iSty} /></div>
            <div className="flex flex-col gap-1.5"><p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>Contact Number</p><input type="tel" value={rContact} onChange={(e) => setRContact(e.target.value)} placeholder="09XX-XXX-XXXX" className={iCls} style={iSty} /></div>
          </div>
          <div className="rounded-[12px] px-4 py-3 flex flex-col gap-3 border" style={{ background: dark ? "#0f1929" : "#f4f8ff", borderColor: dark ? "#243352" : "#d0e4ff" }}>
            <div className="flex items-center justify-between">
              <p className="text-[12px]" style={{ ...montserrat(800), color: tk.heading }}>Workers</p>
              <button type="button" onClick={() => setRWorkers((w) => [...w, ""])} className="text-[11px] text-[#008cff] flex items-center gap-1 cursor-pointer" style={montserrat(700)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                Add Worker
              </button>
            </div>
            <div className="flex flex-col gap-1.5"><p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>New Worker Count</p><input type="number" value={rNewWorkers} onChange={(e) => setRNewWorkers(e.target.value)} placeholder="Number of new workers" className={iCls} style={iSty} /></div>
            <div className="flex flex-col gap-2">
              <p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>Worker Names</p>
              {rWorkers.map((w, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <input type="text" value={w} onChange={(e) => setRWorkers((prev) => prev.map((x, idx) => idx === i ? e.target.value : x))} placeholder={`Worker ${i + 1} full name`} className={`${iCls} flex-1`} style={iSty} />
                  {rWorkers.length > 1 && <button type="button" onClick={() => setRWorkers((prev) => prev.filter((_, idx) => idx !== i))} className="text-red-400 hover:text-red-600 cursor-pointer shrink-0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg></button>}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1.5"><p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>Notes (optional)</p><textarea rows={2} value={rNotes} onChange={(e) => setRNotes(e.target.value)} placeholder="Any additional remarks…" className={`${iCls} resize-none`} style={iSty} /></div>
        </>
      )}

      {reportType === "Income" && (
        <>
          <div className="flex flex-col gap-1.5"><p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>Amount Sold (MT)</p><input type="number" value={iAmountSold} onChange={(e) => setIAmountSold(e.target.value)} placeholder="e.g. 360" className={iCls} style={iSty} /></div>
          <div className="flex flex-col gap-1.5"><p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>Market Rate (₱/ton)</p><input type="number" value={iRate} onChange={(e) => setIRate(e.target.value)} placeholder="e.g. 1070" className={iCls} style={iSty} /></div>
          <div className="flex flex-col gap-1.5"><p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>Total Revenue (₱)</p><input type="number" value={iRevenue} onChange={(e) => setIRevenue(e.target.value)} placeholder="Auto-calculated" className={iCls} style={iSty} /></div>
          <div className="flex flex-col gap-1.5"><p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>Buyer / Company</p><input type="text" value={iBuyer} onChange={(e) => setIBuyer(e.target.value)} placeholder="Name of buyer or company" className={iCls} style={iSty} /></div>
          <div className="flex flex-col gap-1.5"><p className="text-[12px]" style={{ ...montserrat(700), color: tk.body }}>Notes (optional)</p><textarea rows={2} value={iNotes} onChange={(e) => setINotes(e.target.value)} placeholder="Any additional remarks…" className={`${iCls} resize-none`} style={iSty} /></div>
        </>
      )}

      <button onClick={handleSubmit}
        className="w-full h-[48px] bg-[#008cff] text-white text-[15px] rounded-full cursor-pointer hover:bg-[#0079e0] transition-colors mt-1"
        style={montserrat(700)}>
        Submit {reportType} Report
      </button>
    </div>
  );
}

function FullReportView({ sub, tk }: { sub: AppSubmission; tk: Tok }) {
  const dark = useDark();
  const secBg: React.CSSProperties = { background: dark ? "#0a1929" : "#f4f8ff", border: `1px solid ${dark ? "#1e3a5f" : "#d0e4ff"}` };
  if (sub.type === "Production") {
    return (
      <div className="grid grid-cols-2 gap-y-2 gap-x-4">
        {[{ label: "Volume (MT)", value: sub.volume ?? "—" }, { label: "Period", value: sub.period }, { label: "Filed", value: sub.date }, { label: "Notes", value: sub.notes || "—" }].map(({ label, value }) => (
          <div key={label}><p className="text-[9px]" style={{ ...montserrat(500), color: tk.muted }}>{label}</p><p className="text-[11px]" style={{ ...montserrat(700), color: tk.inputText }}>{value}</p></div>
        ))}
      </div>
    );
  }
  if (sub.type === "Producers") {
    return (
      <div className="flex flex-col gap-2">
        <div className="rounded-[10px] px-3 py-2 flex flex-col gap-1.5" style={secBg}>
          <p className="text-[10px]" style={{ ...montserrat(700), color: "#008cff" }}>Farm Information</p>
          <div className="grid grid-cols-3 gap-y-1.5 gap-x-2">
            {[{ label: "Farm Size (ha)", value: sub.farmSize ?? "—" }, { label: "Salt Beds", value: sub.saltBeds ?? "—" }, { label: "Method", value: sub.productionMethod ?? "—" }].map(({ label, value }) => (
              <div key={label}><p className="text-[9px]" style={{ ...montserrat(500), color: tk.muted }}>{label}</p><p className="text-[11px]" style={{ ...montserrat(700), color: tk.inputText }}>{value}</p></div>
            ))}
          </div>
        </div>
        <div className="rounded-[10px] px-3 py-2 flex flex-col gap-1.5" style={secBg}>
          <p className="text-[10px]" style={{ ...montserrat(700), color: "#008cff" }}>Management</p>
          <div className="grid grid-cols-2 gap-y-1.5 gap-x-2">
            {[{ label: "Owner", value: sub.owner ?? "—" }, { label: "Manager", value: sub.farmManager ?? "—" }, { label: "Contact", value: sub.managerContact ?? "—" }].map(({ label, value }) => (
              <div key={label}><p className="text-[9px]" style={{ ...montserrat(500), color: tk.muted }}>{label}</p><p className="text-[11px]" style={{ ...montserrat(700), color: tk.inputText }}>{value}</p></div>
            ))}
          </div>
        </div>
        <div className="rounded-[10px] px-3 py-2 flex flex-col gap-1.5" style={secBg}>
          <p className="text-[10px]" style={{ ...montserrat(700), color: "#008cff" }}>Workers · New: {sub.newWorkerCount ?? "0"}</p>
          {(sub.workers ?? []).length > 0 ? (sub.workers ?? []).map((w, i) => <p key={i} className="text-[11px]" style={{ ...montserrat(500), color: tk.inputText }}>• {w}</p>) : <p className="text-[11px]" style={{ ...montserrat(400), color: tk.muted }}>No workers listed</p>}
        </div>
        {sub.notes && <div><p className="text-[9px]" style={{ ...montserrat(500), color: tk.muted }}>Notes</p><p className="text-[11px]" style={{ ...montserrat(500), color: tk.inputText }}>{sub.notes}</p></div>}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
      {[
        { label: "Amount Sold (MT)", value: sub.amountSold ?? "—" },
        { label: "Market Rate (₱/ton)", value: sub.marketRate ? `₱${parseFloat(sub.marketRate).toLocaleString()}` : "—" },
        { label: "Total Revenue", value: sub.totalRevenue ? `₱${parseFloat(sub.totalRevenue).toLocaleString()}` : "—" },
        { label: "Buyer", value: sub.buyer ?? "—" },
        { label: "Period", value: sub.period },
        { label: "Notes", value: sub.notes || "—" },
      ].map(({ label, value }) => (
        <div key={label}><p className="text-[9px]" style={{ ...montserrat(500), color: tk.muted }}>{label}</p><p className="text-[11px]" style={{ ...montserrat(700), color: tk.inputText }}>{value}</p></div>
      ))}
    </div>
  );
}

function PrescriptionBlock({ sub, tk }: { sub: AppSubmission; tk: Tok }) {
  const dark = useDark();
  if (!sub.prescription) {
    return (
      <div className="rounded-[12px] border px-3 py-2.5 flex items-center gap-2" style={{ background: dark ? "#111829" : "#f8f9fc", borderColor: tk.cardBorder }}>
        <svg viewBox="0 0 24 24" fill="none" stroke={tk.muted} strokeWidth="2" strokeLinecap="round" className="w-4 h-4 shrink-0"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
        <p className="text-[12px]" style={{ ...montserrat(500), color: tk.muted }}>No prescription yet — awaiting review.</p>
      </div>
    );
  }
  return (
    <div className="rounded-[12px] border overflow-hidden" style={{ background: dark ? "#0d1f3a" : "#f0f7ff", borderColor: dark ? "#1e3a5f" : "#bfdbfe" }}>
      <div className="px-3 py-2 flex items-center gap-2 border-b" style={{ background: dark ? "#0a1929" : "#dbeafe", borderColor: dark ? "#1e3a5f" : "#93c5fd" }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
        <p className="text-[11px] text-blue-600 flex-1" style={montserrat(800)}>Prescription</p>
        <span className="text-[10px] text-blue-400" style={montserrat(500)}>{sub.prescribedOn}</span>
      </div>
      <div className="px-3 py-2.5 flex flex-col gap-1.5">
        <p className="text-[12px] leading-relaxed" style={{ ...montserrat(400), color: dark ? "#c8daf0" : "#1e3a5f" }}>{sub.prescription}</p>
        <div className="flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" className="w-3 h-3 shrink-0"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
          <span className="text-[10px] text-blue-400" style={montserrat(600)}>{sub.prescribedBy}</span>
        </div>
      </div>
    </div>
  );
}

function CoordRecordsTab({ submissions, prescriptions, user, onResubmit }: {
  submissions: AppSubmission[];
  prescriptions: AppPrescription[];
  user: AppUser;
  onResubmit: (type: "Production" | "Producers" | "Income") => void;
}) {
  const dark = useDark(); const tk = tok(dark);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = submissions.filter((r) => {
    if (statusFilter !== "All" && r.status !== statusFilter) return false;
    if (typeFilter !== "All" && r.type !== typeFilter) return false;
    if (search && !r.id.toLowerCase().includes(search.toLowerCase()) && !r.period.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const dInput: React.CSSProperties = { background: tk.inputBg, borderColor: tk.inputBorder, color: tk.inputText };

  return (
    <div className="px-4 py-5 flex flex-col gap-4" style={{ background: tk.pageBg }}>
      <p className="text-[18px]" style={{ ...montserrat(800), color: tk.heading }}>Records</p>

      {/* General farm prescriptions */}
      {(() => {
        const farmPrescriptions = prescriptions
          .filter((p) => p.toId === user.id)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        if (farmPrescriptions.length === 0) return null;
        return (
          <div className="rounded-[16px] border overflow-hidden" style={{ background: tk.card, borderColor: tk.cardBorder }}>
            <div className="px-4 py-2.5 border-b flex items-center justify-between" style={{ background: "#008cff", borderColor: "#0070d0" }}>
              <p className="text-[12px] text-white" style={montserrat(700)}>Farm Prescriptions</p>
              <span className="text-[10px] text-white opacity-80" style={montserrat(600)}>{farmPrescriptions.length} total</span>
            </div>
            <div className="flex flex-col">
              {farmPrescriptions.map((p) => (
                <div key={p.id} className="px-4 py-3 border-b last:border-0" style={{ borderColor: tk.divider }}>
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-[11px]" style={{ ...montserrat(700), color: tk.heading }}>{p.fromName}</p>
                    <p className="text-[10px]" style={{ ...montserrat(400), color: tk.muted }}>{p.date}</p>
                  </div>
                  <p className="text-[12px] leading-relaxed" style={{ ...montserrat(400), color: tk.body }}>{p.text}</p>
                  {p.relatedSubmissionId && (
                    <p className="text-[10px] mt-1" style={{ ...montserrat(600), color: "#008cff" }}>Re: {p.relatedSubmissionId}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })()}

      <div className="relative">
        <svg viewBox="0 0 24 24" fill="none" stroke={tk.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by ID or period…"
          className="w-full border rounded-[10px] pl-9 pr-3 py-2.5 text-[13px] outline-none focus:border-[#008cff] transition-colors"
          style={{ ...montserrat(500), ...dInput }} />
      </div>

      <div className="rounded-[12px] px-4 py-3 flex flex-col gap-3 border" style={{ background: tk.card, borderColor: tk.cardBorder }}>
        <p className="text-[11px]" style={{ ...montserrat(800), color: tk.heading }}>Filters</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <p className="text-[10px]" style={{ ...montserrat(600), color: tk.muted }}>Status</p>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="border rounded-[10px] px-2 py-2 text-[12px] outline-none focus:border-[#008cff] transition-colors cursor-pointer" style={{ ...montserrat(500), ...dInput }}>
              {["All","Approved","Pending","Rejected"].map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[10px]" style={{ ...montserrat(600), color: tk.muted }}>Type</p>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="border rounded-[10px] px-2 py-2 text-[12px] outline-none focus:border-[#008cff] transition-colors cursor-pointer" style={{ ...montserrat(500), ...dInput }}>
              {["All","Production","Producers","Income"].map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
        </div>
      </div>

      <p className="text-[11px]" style={{ ...montserrat(500), color: tk.muted }}>{filtered.length} record{filtered.length !== 1 ? "s" : ""} found</p>

      <div className="flex flex-col gap-2.5">
        {filtered.length === 0 && <p className="text-center text-[13px] py-8" style={{ ...montserrat(500), color: tk.muted }}>No records match your filters</p>}
        {filtered.map((row) => {
          const isExpanded = expandedId === row.id;
          return (
            <div key={row.id} className="rounded-[14px] border overflow-hidden" style={{ background: tk.card, borderColor: tk.cardBorder }}>
              <button className="w-full px-4 py-3 flex items-center justify-between cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setExpandedId(isExpanded ? null : row.id)}>
                <div className="flex flex-col items-start gap-0.5">
                  <span className="text-[12px]" style={{ ...montserrat(800), color: tk.heading }}>{row.id}</span>
                  <span className="text-[10px]" style={{ ...montserrat(500), color: tk.muted }}>{row.type} · {row.period}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <StatusPill status={row.status} />
                  <svg viewBox="0 0 24 24" fill="none" stroke={tk.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform duration-200" style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </button>

              {isExpanded && (
                <div className="border-t px-4 py-3 flex flex-col gap-3" style={{ borderColor: tk.divider }}>
                  <FullReportView sub={row} tk={tk} />
                  <PrescriptionBlock sub={row} tk={tk} />
                  {/* Additional farm prescriptions for this submission */}
                  {(() => {
                    const related = prescriptions.filter((p) => p.relatedSubmissionId === row.id && p.toId === user.id);
                    if (related.length === 0) return null;
                    return (
                      <div className="mt-2 flex flex-col gap-2">
                        {related.map((p) => (
                          <div key={p.id} className="rounded-[10px] border px-3 py-2.5"
                            style={{ background: dark ? "#0d1f3a" : "#f0f7ff", borderColor: dark ? "#1e3a5f" : "#bfdbfe" }}>
                            <p className="text-[10px] text-blue-400 mb-1" style={montserrat(600)}>{p.fromName} · {p.date}</p>
                            <p className="text-[11px] leading-relaxed" style={{ ...montserrat(400), color: dark ? "#c8daf0" : "#1e3a5f" }}>{p.text}</p>
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                  <div className="flex gap-2 pt-1">
                    <button onClick={() => onResubmit(row.type as "Production" | "Producers" | "Income")}
                      className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-[8px] text-[11px] bg-[#008cff] text-white hover:bg-[#0079e0] cursor-pointer transition-colors" style={montserrat(700)}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 .49-4.95" /></svg>
                      Resubmit
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SettingsCard({ label, children }: { label: string; children: React.ReactNode }) {
  const dark = useDark(); const tk = tok(dark);
  return (
    <div className="rounded-[16px] border overflow-hidden" style={{ background: tk.card, borderColor: tk.cardBorder }}>
      <div className="px-4 py-2.5 border-b" style={{ borderColor: tk.divider, background: dark ? "#0f1929" : "#f8f9fc" }}>
        <p className="text-[10px] tracking-widest" style={{ ...montserrat(800), color: tk.muted }}>{label}</p>
      </div>
      {children}
    </div>
  );
}

function CoordSettingsTab({ user, onSignOut, darkMode, setDarkMode }: { user: AppUser; onSignOut: () => void; darkMode: boolean; setDarkMode: (v: boolean) => void }) {
  const dark = useDark(); const tk = tok(dark);

  const initProfile = { name: user.name, municipality: user.municipality, contact: user.contact, email: user.email };
  const [profile, setProfile] = useState(initProfile);
  const [draft, setDraft]     = useState(initProfile);
  const [editing, setEditing] = useState(false);
  const [profilePending, setProfilePending] = useState(false);

  const [notifPush, setNotifPush]   = useState(true);
  const [notifEmail, setNotifEmail] = useState(false);

  const [showTerminate, setShowTerminate]   = useState(false);
  const [terminateInput, setTerminateInput] = useState("");
  const [terminatePending, setTerminatePending] = useState(false);

  const dInput: React.CSSProperties = { background: tk.inputBg, borderColor: tk.inputBorder, color: tk.inputText };
  const iCls = "border rounded-[10px] px-3 py-2.5 text-[13px] outline-none focus:border-[#008cff] transition-colors w-full";

  const saveProfile = () => {
    setProfile(draft);
    setEditing(false);
    setProfilePending(true);
  };

  const cancelEdit = () => {
    setDraft(profile);
    setEditing(false);
  };

  return (
    <div className="px-4 py-5 flex flex-col gap-4" style={{ background: tk.pageBg }}>
      <p className="text-[18px]" style={{ ...montserrat(800), color: tk.heading }}>Settings</p>

      {/* Pending review banner */}
      {profilePending && (
        <div className="rounded-[12px] px-4 py-3 flex items-start gap-3 border" style={{ background: dark ? "#1a1500" : "#fffbeb", borderColor: dark ? "#5a4000" : "#fde68a" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 shrink-0">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <div>
            <p className="text-[12px] text-amber-700" style={montserrat(700)}>Changes Pending Review</p>
            <p className="text-[11px] text-amber-600 mt-0.5" style={montserrat(400)}>Your profile changes have been submitted and are awaiting administrator approval before taking effect.</p>
          </div>
          <button onClick={() => setProfilePending(false)} className="ml-auto text-amber-400 hover:text-amber-600 cursor-pointer shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-4 h-4">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}

      {/* Terminate pending banner */}
      {terminatePending && (
        <div className="rounded-[12px] px-4 py-3 flex items-start gap-3 border" style={{ background: dark ? "#1a0505" : "#fff1f1", borderColor: dark ? "#5a0f0f" : "#fecaca" }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 shrink-0">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <div>
            <p className="text-[12px] text-red-700" style={montserrat(700)}>Termination Request Submitted</p>
            <p className="text-[11px] text-red-500 mt-0.5" style={montserrat(400)}>Your account termination request is under review. An administrator will contact you before any action is taken.</p>
          </div>
        </div>
      )}

      {/* Profile */}
      <SettingsCard label="PROFILE">
        <div className="px-4 pt-3 pb-2 flex items-center justify-between border-b" style={{ borderColor: tk.divider }}>
          <p className="text-[11px]" style={{ ...montserrat(600), color: tk.muted }}>Account details · Role: Coordinator</p>
          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              className="text-[11px] text-[#008cff] cursor-pointer flex items-center gap-1"
              style={montserrat(700)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Edit
            </button>
          ) : (
            <div className="flex gap-2">
              <button onClick={cancelEdit} className="text-[11px] cursor-pointer" style={{ ...montserrat(600), color: tk.muted }}>Cancel</button>
              <button onClick={saveProfile} className="text-[11px] text-[#008cff] cursor-pointer" style={montserrat(700)}>Save & Submit</button>
            </div>
          )}
        </div>

        {editing ? (
          <div className="px-4 py-3 flex flex-col gap-3">
            <div className="rounded-[10px] px-3 py-2.5 border flex gap-2 items-center" style={{ background: dark ? "#1a2840" : "#f0f7ff", borderColor: dark ? "#2a3d5e" : "#bfdbfe" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <p className="text-[11px] text-blue-500" style={montserrat(500)}>Changes require administrator approval before taking effect.</p>
            </div>
            {[
              { key: "name" as const,         label: "Full Name",      type: "text" },
              { key: "municipality" as const,  label: "Municipality",   type: "text" },
              { key: "contact" as const,       label: "Contact Number", type: "tel"  },
              { key: "email" as const,         label: "Email",          type: "email"},
            ].map(({ key, label, type }) => (
              <div key={key} className="flex flex-col gap-1">
                <p className="text-[11px]" style={{ ...montserrat(600), color: tk.muted }}>{label}</p>
                <input
                  type={type}
                  value={draft[key]}
                  onChange={(e) => setDraft({ ...draft, [key]: e.target.value })}
                  className={iCls}
                  style={{ ...montserrat(500), ...dInput }}
                />
              </div>
            ))}
          </div>
        ) : (
          <>
            {[
              { label: "Name",         value: profile.name },
              { label: "Municipality", value: profile.municipality },
              { label: "Role",         value: "Coordinator" },
              { label: "Contact",      value: profile.contact },
              { label: "Email",        value: profile.email },
            ].map(({ label, value }) => (
              <div key={label} className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: tk.divider }}>
                <span className="text-[12px]" style={{ ...montserrat(500), color: tk.muted }}>{label}</span>
                <span className="text-[12px]" style={{ ...montserrat(700), color: tk.heading }}>{value}</span>
              </div>
            ))}
          </>
        )}
      </SettingsCard>

      {/* Appearance */}
      <SettingsCard label="APPEARANCE">
        <Toggle label="Dark Mode" on={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        <div className="border-b" style={{ borderColor: tk.divider }} />
      </SettingsCard>

      {/* Notifications */}
      <SettingsCard label="NOTIFICATIONS">
        <Toggle label="Push Notifications" on={notifPush}  onToggle={() => setNotifPush(!notifPush)} />
        <Toggle label="Email Notifications" on={notifEmail} onToggle={() => setNotifEmail(!notifEmail)} />
        <div className="border-b" style={{ borderColor: tk.divider }} />
      </SettingsCard>

      {/* Danger zone */}
      <SettingsCard label="DANGER ZONE">
        {!showTerminate ? (
          <div className="px-4 py-4 flex flex-col gap-2">
            <p className="text-[12px]" style={{ ...montserrat(400), color: tk.body }}>Permanently deactivate this account. All associated data will be flagged for removal after administrator review.</p>
            <button
              onClick={() => setShowTerminate(true)}
              className="mt-1 w-full h-[42px] border border-red-400 text-red-500 text-[13px] rounded-[10px] cursor-pointer transition-colors"
              style={{ ...montserrat(700), background: dark ? "transparent" : undefined }}
            >
              Terminate Account
            </button>
          </div>
        ) : (
          <div className="px-4 py-4 flex flex-col gap-3">
            <div className="rounded-[10px] px-3 py-2.5 border flex gap-2 items-start" style={{ background: dark ? "#1a0505" : "#fff1f1", borderColor: dark ? "#5a0f0f" : "#fecaca" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mt-0.5 shrink-0">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              <p className="text-[11px] text-red-600" style={montserrat(500)}>This action will submit a termination request to your administrator. You will not be immediately signed out.</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[12px]" style={{ ...montserrat(600), color: tk.body }}>Type <span className="font-bold text-red-500">TERMINATE</span> to confirm</p>
              <input
                type="text"
                value={terminateInput}
                onChange={(e) => setTerminateInput(e.target.value)}
                placeholder="TERMINATE"
                className={`${iCls} tracking-widest`}
                style={{ ...montserrat(700), ...dInput, borderColor: terminateInput === "TERMINATE" ? "#dc2626" : tk.inputBorder }}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => { setShowTerminate(false); setTerminateInput(""); }}
                className="flex-1 h-[40px] rounded-[10px] border text-[13px] cursor-pointer transition-colors"
                style={{ ...montserrat(600), borderColor: tk.cardBorder, color: tk.body, background: "transparent" }}
              >
                Cancel
              </button>
              <button
                onClick={() => { setTerminatePending(true); setShowTerminate(false); setTerminateInput(""); }}
                disabled={terminateInput !== "TERMINATE"}
                className="flex-1 h-[40px] rounded-[10px] text-[13px] text-white cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                style={{ ...montserrat(700), background: terminateInput === "TERMINATE" ? "#dc2626" : "#aaa" }}
              >
                Submit Request
              </button>
            </div>
          </div>
        )}
      </SettingsCard>

      {/* Sign out */}
      <button
        onClick={onSignOut}
        className="w-full h-[46px] rounded-full text-[14px] cursor-pointer transition-colors border"
        style={{ ...montserrat(700), borderColor: "#f87171", color: "#ef4444", background: "transparent" }}
      >
        Sign Out
      </button>
    </div>
  );
}

function CoordinatorDashboard({ user, submissions, setSubmissions, prescriptions, onSignOut }: {
  user: AppUser;
  submissions: AppSubmission[];
  setSubmissions: React.Dispatch<React.SetStateAction<AppSubmission[]>>;
  prescriptions: AppPrescription[];
  onSignOut: () => void;
}) {
  const [tab, setTab] = useState<CoordTab>("home");
  const [submitType, setSubmitType] = useState<"Production" | "Producers" | "Income">("Production");
  const [darkMode, setDarkMode] = useState(false);
  const tk = tok(darkMode);

  const mySubmissions = submissions.filter((s) => s.coordinatorId === user.id);

  const goToResubmit = (type: "Production" | "Producers" | "Income") => {
    setSubmitType(type);
    setTab("submit");
  };

  return (
    <ThemeCtx.Provider value={darkMode}>
      <div className="h-screen flex flex-col overflow-hidden transition-colors duration-300" style={{ background: tk.pageBg }}>
        <CoordNavBar onSignOut={onSignOut} />
        <div className="flex-1 overflow-y-auto" style={{ minHeight: 0 }}>
          {tab === "home"     && <CoordHomeTab user={user} submissions={mySubmissions} prescriptions={prescriptions} onSubmit={(type) => { setSubmitType(type); setTab("submit"); }} />}
          {tab === "submit"   && <CoordSubmitTab user={user} setSubmissions={setSubmissions} initialType={submitType} />}
          {tab === "records"  && <CoordRecordsTab submissions={mySubmissions} prescriptions={prescriptions} user={user} onResubmit={goToResubmit} />}
          {tab === "settings" && <CoordSettingsTab user={user} onSignOut={onSignOut} darkMode={darkMode} setDarkMode={setDarkMode} />}
        </div>
        <CoordBottomNav active={tab} onChange={setTab} />
      </div>
    </ThemeCtx.Provider>
  );
}

// ─── Admin Dashboard ──────────────────────────────────────────────────────────

type AdminTab = "overview" | "analytics" | "storage" | "management";

const ADMIN_COORDINATOR_LIST = [
  { id: "C-001", name: "Maria Santos",   municipality: "Bolinao",   status: "Active",   lastSubmit: "Jun 3",  submissions: 24, email: "m.santos@bolinao.gov.ph",    contact: "(0946) 808-2167" },
  { id: "C-002", name: "Jose Reyes",     municipality: "Lingayen",  status: "Active",   lastSubmit: "Jun 2",  submissions: 21, email: "j.reyes@lingayen.gov.ph",   contact: "(0915) 234-5678" },
  { id: "C-003", name: "Ana Cruz",       municipality: "Dasol",     status: "Active",   lastSubmit: "May 28", submissions: 18, email: "a.cruz@dasol.gov.ph",        contact: "(0928) 345-6789" },
  { id: "C-004", name: "Pedro Lim",      municipality: "Alaminos",  status: "Inactive", lastSubmit: "Apr 15", submissions: 12, email: "p.lim@alaminos.gov.ph",      contact: "(0917) 456-7890" },
  { id: "C-005", name: "Rosa Garcia",    municipality: "Infanta",   status: "Active",   lastSubmit: "Jun 1",  submissions: 20, email: "r.garcia@infanta.gov.ph",    contact: "(0932) 567-8901" },
  { id: "C-006", name: "Tomas Bautista", municipality: "San Fabian",status: "Active",   lastSubmit: "May 30", submissions: 16, email: "t.bautista@sanfabian.gov.ph",contact: "(0951) 678-9012" },
  { id: "C-007", name: "Lina Aquino",    municipality: "Bani",      status: "Pending",  lastSubmit: "Jun 4",  submissions:  9, email: "l.aquino@bani.gov.ph",       contact: "(0906) 789-0123" },
];

const ADMIN_ALL_SUBMISSIONS = [
  { id: "S-2025-0142", coordinator: "Maria Santos",   municipality: "Bolinao",  period: "May 2025", type: "Production", volume: "198 MT", status: "Approved", date: "Jun 3" },
  { id: "S-2025-0141", coordinator: "Maria Santos",   municipality: "Bolinao",  period: "May 2025", type: "Producers",  volume: "—",      status: "Pending",  date: "Jun 4" },
  { id: "S-2025-0140", coordinator: "Jose Reyes",     municipality: "Lingayen",  period: "May 2025", type: "Production", volume: "174 MT", status: "Approved", date: "Jun 2" },
  { id: "S-2025-0139", coordinator: "Maria Santos",   municipality: "Bolinao",  period: "Apr 2025", type: "Production", volume: "182 MT", status: "Approved", date: "May 5" },
  { id: "S-2025-0138", coordinator: "Rosa Garcia",    municipality: "Infanta",   period: "Apr 2025", type: "Income",     volume: "₱186k", status: "Approved", date: "May 4" },
  { id: "S-2025-0137", coordinator: "Maria Santos",   municipality: "Bolinao",  period: "Apr 2025", type: "Income",     volume: "₱194k", status: "Rejected", date: "May 6" },
  { id: "S-2025-0136", coordinator: "Ana Cruz",       municipality: "Dasol",    period: "Apr 2025", type: "Production", volume: "163 MT", status: "Approved", date: "May 3" },
  { id: "S-2025-0135", coordinator: "Lina Aquino",    municipality: "Bani",      period: "Apr 2025", type: "Production", volume: "98 MT",  status: "Pending",  date: "Jun 4" },
  { id: "S-2025-0134", coordinator: "Tomas Bautista", municipality: "San Fabian",period: "Mar 2025", type: "Production", volume: "141 MT", status: "Approved", date: "Apr 3" },
];

const PENDING_PROFILE_CHANGES = [
  { id: "PC-001", coordinator: "Maria Santos",  municipality: "Bolinao", field: "Contact Number", from: "(0946) 808-2167",      to: "(0946) 123-4567",       date: "Jun 5" },
  { id: "PC-002", coordinator: "Lina Aquino",   municipality: "Bani",     field: "Account Status",  from: "Pending",                 to: "Active",                   date: "Jun 4" },
  { id: "PC-003", coordinator: "Jose Reyes",    municipality: "Lingayen", field: "Email",            from: "j.reyes@lingayen.gov.ph", to: "jreyes.lingayen@gmail.com", date: "Jun 3" },
];

const ADMIN_STORAGE_FILES = [
  { id: "F-0142", name: "Production_Bolinao_May2025.xlsx", coordinator: "M. Santos",   municipality: "Bolinao",  type: "Production", date: "Jun 3",  size: "24 KB"  },
  { id: "F-0141", name: "Producers_Bolinao_May2025.pdf",   coordinator: "M. Santos",   municipality: "Bolinao",  type: "Producers",  date: "Jun 4",  size: "156 KB" },
  { id: "F-0140", name: "Production_Lingayen_May2025.xlsx", coordinator: "J. Reyes",    municipality: "Lingayen",  type: "Production", date: "Jun 2",  size: "19 KB"  },
  { id: "F-0138", name: "Income_Infanta_Apr2025.csv",      coordinator: "R. Garcia",   municipality: "Infanta",   type: "Income",     date: "May 4",  size: "8 KB"   },
  { id: "F-0136", name: "Production_Dasol_Apr2025.xlsx",   coordinator: "A. Cruz",     municipality: "Dasol",    type: "Production", date: "May 3",  size: "21 KB"  },
  { id: "F-0135", name: "Producers_Bani_Apr2025.pdf",       coordinator: "L. Aquino",   municipality: "Bani",      type: "Producers",  date: "Jun 4",  size: "67 KB"  },
  { id: "F-0134", name: "Production_SanFabian_Mar2025.pdf",coordinator: "T. Bautista", municipality: "San Fabian",type: "Production", date: "Apr 3",  size: "88 KB"  },
  { id: "F-0130", name: "Income_Bolinao_Mar2025.csv",      coordinator: "M. Santos",   municipality: "Bolinao",  type: "Income",     date: "Apr 3",  size: "7 KB"   },
];

const MUNI_TREND_DATA = [
  { month: "Jul", bolinao: 28, lingayen: 20, bani: 10, alaminos: 16, dasol: 26, infanta: 22, sanfabian: 14 },
  { month: "Aug", bolinao: 32, lingayen: 23, bani: 12, alaminos: 18, dasol: 30, infanta: 25, sanfabian: 16 },
  { month: "Sep", bolinao: 35, lingayen: 26, bani: 14, alaminos: 20, dasol: 33, infanta: 28, sanfabian: 18 },
  { month: "Oct", bolinao: 40, lingayen: 29, bani: 16, alaminos: 23, dasol: 37, infanta: 32, sanfabian: 20 },
  { month: "Nov", bolinao: 36, lingayen: 26, bani: 14, alaminos: 21, dasol: 34, infanta: 29, sanfabian: 18 },
  { month: "Dec", bolinao: 33, lingayen: 24, bani: 13, alaminos: 19, dasol: 31, infanta: 26, sanfabian: 16 },
  { month: "Jan", bolinao: 27, lingayen: 19, bani: 10, alaminos: 15, dasol: 25, infanta: 21, sanfabian: 13 },
  { month: "Feb", bolinao: 30, lingayen: 21, bani: 11, alaminos: 17, dasol: 28, infanta: 23, sanfabian: 14 },
  { month: "Mar", bolinao: 34, lingayen: 24, bani: 13, alaminos: 19, dasol: 32, infanta: 27, sanfabian: 17 },
  { month: "Apr", bolinao: 37, lingayen: 27, bani: 15, alaminos: 21, dasol: 35, infanta: 30, sanfabian: 19 },
  { month: "May", bolinao: 39, lingayen: 29, bani: 16, alaminos: 23, dasol: 37, infanta: 32, sanfabian: 20 },
  { month: "Jun", bolinao: 32, lingayen: 23, bani: 12, alaminos: 18, dasol: 30, infanta: 25, sanfabian: 16 },
];

const MUNI_COLORS: Record<string, string> = {
  bolinao: "#008cff", lingayen: "#22c55e", bani: "#a855f7",
  alaminos: "#f59e0b", dasol: "#ef4444", infanta: "#14b8a6", sanfabian: "#f97316",
};
const MUNI_LABELS: Record<string, string> = {
  bolinao: "Bolinao", lingayen: "Lingayen", bani: "Bani",
  alaminos: "Alaminos", dasol: "Dasol", infanta: "Infanta", sanfabian: "San Fabian",
};

const MUNI_EFFICIENCY = [
  { name: "Bolinao",    eff: 6.5 },
  { name: "Lingayen",   eff: 6.0 },
  { name: "Dasol",      eff: 5.4 },
  { name: "San Fabian", eff: 5.4 },
  { name: "Alaminos",   eff: 4.1 },
  { name: "Infanta",    eff: 1.9 },
  { name: "Bani",       eff: 1.7 },
];

const FARM_EFFICIENCY: Record<string, { name: string; eff: number }[]> = {
  "Bolinao":    [{ name: "Santos Farm", eff: 7.2 }, { name: "Reyes Beds", eff: 6.8 }, { name: "Navarro Farm", eff: 6.1 }],
  "Lingayen":   [{ name: "Dela Cruz Farm", eff: 6.3 }, { name: "Mendoza Beds", eff: 5.7 }],
  "Bani":       [{ name: "Aquino Salt", eff: 4.2 }, { name: "Florendo Farm", eff: 3.8 }],
  "Alaminos":   [{ name: "Lim Farm", eff: 4.5 }, { name: "Torres Beds", eff: 3.9 }],
  "Dasol":      [{ name: "Cruz Farm", eff: 5.8 }, { name: "Bautista Salt", eff: 5.1 }],
  "Infanta":    [{ name: "Garcia Farm", eff: 2.3 }, { name: "Santos Beds", eff: 1.8 }],
  "San Fabian": [{ name: "Bautista Farm", eff: 5.6 }, { name: "Flores Beds", eff: 4.9 }],
};

const ADMIN_TABS: { id: AdminTab; label: string; icon: React.ReactNode }[] = [
  {
    id: "overview", label: "HOME",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    id: "analytics", label: "ANALYTICS",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: "storage", label: "STORAGE",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    id: "management", label: "MGMT",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

function AdminBottomNav({ active, onChange }: { active: AdminTab; onChange: (t: AdminTab) => void }) {
  const dark = useDark(); const tk = tok(dark);
  return (
    <div className="shrink-0 px-3 pb-3 pt-2 transition-colors duration-300" style={{ background: tk.pageBg }}>
      <div className="flex items-center rounded-[30px] overflow-hidden px-1 py-1"
        style={{ background: "linear-gradient(to bottom, #0d3567, #073070)" }}>
        {ADMIN_TABS.map((t) => {
          const isActive = active === t.id;
          return (
            <button key={t.id} onClick={() => onChange(t.id)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-1.5 rounded-[24px] cursor-pointer transition-all duration-200"
              style={{ background: isActive ? "#008cff" : "transparent", color: isActive ? "#fff" : "rgba(255,255,255,0.5)" }}>
              {t.icon}
              <span className="text-[10px] tracking-wider whitespace-nowrap" style={montserrat(800)}>{t.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function AdminSubmissionCard({ sub, adminUser, setSubmissions }: {
  sub: AppSubmission;
  adminUser: AppUser;
  setSubmissions: React.Dispatch<React.SetStateAction<AppSubmission[]>>;
}) {
  const dark = useDark(); const tk = tok(dark);
  const [expanded, setExpanded] = useState(false);
  const [prescText, setPrescText] = useState(sub.prescription ?? "");
  const [editingPresc, setEditingPresc] = useState(false);

  const update = (updates: Partial<AppSubmission>) =>
    setSubmissions((prev) => prev.map((s) => s.id === sub.id ? { ...s, ...updates } : s));

  const handleApprove = () => update({ status: "Approved" });
  const handleReject  = () => update({ status: "Rejected" });
  const handleSavePresc = () => {
    update({
      prescription: prescText.trim() || null,
      prescribedBy: adminUser.name,
      prescribedOn: new Date().toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric" }),
    });
    setEditingPresc(false);
  };

  const dInput: React.CSSProperties = { background: tk.inputBg, borderColor: tk.inputBorder, color: tk.inputText };

  return (
    <div className="rounded-[14px] border overflow-hidden" style={{ background: tk.card, borderColor: tk.cardBorder }}>
      {/* Header row */}
      <button className="w-full px-4 py-3 flex items-center gap-3 cursor-pointer text-left" onClick={() => setExpanded((v) => !v)}>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-[12px]" style={{ ...montserrat(700), color: tk.heading }}>{sub.id}</p>
            <span className="text-[10px] px-2 py-0.5 rounded-full"
              style={{ ...montserrat(600), background: sub.type === "Production" ? "#008cff22" : sub.type === "Producers" ? "#22c55e22" : "#f59e0b22",
                color: sub.type === "Production" ? "#008cff" : sub.type === "Producers" ? "#16a34a" : "#d97706" }}>
              {sub.type}
            </span>
          </div>
          <p className="text-[10px] mt-0.5" style={{ ...montserrat(400), color: tk.muted }}>
            {sub.coordinatorName} · {sub.municipality} · {sub.period}
          </p>
        </div>
        <StatusPill status={sub.status} />
        <svg viewBox="0 0 24 24" fill="none" stroke={tk.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          className="w-4 h-4 shrink-0 transition-transform" style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {expanded && (
        <div className="border-t px-4 py-3 flex flex-col gap-3" style={{ borderColor: tk.divider }}>
          {/* Full report data */}
          <FullReportView sub={sub} tk={tk} />

          {/* Prescription section */}
          <div className="rounded-[12px] border p-3 flex flex-col gap-2"
            style={{ background: dark ? "#0d1f3a" : "#f0f7ff", borderColor: dark ? "#1e3a5f" : "#bfdbfe" }}>
            <div className="flex items-center justify-between">
              <p className="text-[11px] text-blue-400" style={montserrat(700)}>Prescription</p>
              {!editingPresc && (
                <button onClick={() => { setPrescText(sub.prescription ?? ""); setEditingPresc(true); }}
                  className="text-[10px] text-[#008cff] cursor-pointer" style={montserrat(600)}>
                  {sub.prescription ? "Edit" : "Write"}
                </button>
              )}
            </div>
            {editingPresc ? (
              <>
                <textarea rows={3} value={prescText} onChange={(e) => setPrescText(e.target.value)}
                  placeholder="Enter recommendation or action item…"
                  className="border rounded-[8px] px-3 py-2 text-[12px] outline-none focus:border-[#008cff] resize-none w-full"
                  style={{ ...montserrat(400), ...dInput }} />
                <div className="flex gap-2">
                  <button onClick={() => setEditingPresc(false)}
                    className="flex-1 py-1.5 rounded-[8px] text-[11px] border cursor-pointer"
                    style={{ ...montserrat(600), borderColor: tk.cardBorder, color: tk.muted }}>
                    Cancel
                  </button>
                  <button onClick={handleSavePresc} disabled={!prescText.trim()}
                    className="flex-1 py-1.5 rounded-[8px] text-[11px] bg-[#008cff] text-white cursor-pointer disabled:opacity-40"
                    style={montserrat(700)}>
                    Save &amp; Send
                  </button>
                </div>
              </>
            ) : sub.prescription ? (
              <>
                <p className="text-[12px] leading-relaxed" style={{ ...montserrat(400), color: dark ? "#c8daf0" : "#1e3a5f" }}>
                  {sub.prescription}
                </p>
                <p className="text-[10px]" style={{ ...montserrat(500), color: tk.muted }}>
                  — {sub.prescribedBy ?? adminUser.name}, {sub.prescribedOn ?? ""}
                </p>
              </>
            ) : (
              <p className="text-[11px]" style={{ ...montserrat(400), color: tk.muted }}>No prescription written yet.</p>
            )}
          </div>

          {/* Approve / Reject */}
          {sub.status === "Pending" && (
            <div className="flex gap-2">
              <button onClick={handleReject}
                className="flex-1 py-2 rounded-[8px] text-[12px] border border-red-300 text-red-500 cursor-pointer"
                style={montserrat(700)}>
                Reject
              </button>
              <button onClick={handleApprove}
                className="flex-1 py-2 rounded-[8px] text-[12px] bg-[#008cff] text-white cursor-pointer"
                style={montserrat(700)}>
                Approve
              </button>
            </div>
          )}
          {sub.status !== "Pending" && (
            <button onClick={() => update({ status: "Pending" })}
              className="w-full py-2 rounded-[8px] text-[12px] border cursor-pointer"
              style={{ ...montserrat(600), borderColor: tk.cardBorder, color: tk.muted }}>
              Reset to Pending
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function AdminOverviewTab({ user, submissions, setSubmissions, prescriptions, onNavigate }: {
  user: AppUser;
  submissions: AppSubmission[];
  setSubmissions: React.Dispatch<React.SetStateAction<AppSubmission[]>>;
  prescriptions: AppPrescription[];
  onNavigate: (tab: AdminTab) => void;
}) {
  const dark = useDark(); const tk = tok(dark);
  const [effView, setEffView] = useState<"municipal" | "farm">("municipal");

  const mySubs = submissions.filter((s) => user.adminType === "center" || s.municipality === user.municipality);
  const approved = mySubs.filter((s) => s.status === "Approved");
  const pending  = mySubs.filter((s) => s.status === "Pending");
  const rejected = mySubs.filter((s) => s.status === "Rejected");

  const totalProdMT = approved
    .filter((s) => s.type === "Production")
    .reduce((acc, s) => acc + parseFloat((s.volume ?? "0").replace(/[^0-9.]/g, "")), 0);

  const totalRevenue = approved
    .filter((s) => s.type === "Income")
    .reduce((acc, s) => acc + parseFloat((s.amountSold ?? "0").replace(/[^0-9.]/g, "")) * parseFloat((s.marketRate ?? "1").replace(/[^0-9.]/g, "")), 0);

  const provincialTrend = MUNI_TREND_DATA.map((d) => {
    const sum = d.bolinao + d.lingayen + d.bani + d.alaminos + d.dasol + d.infanta + d.sanfabian;
    return { month: d.month, Production: sum * 400, Demand: Math.round(sum * 385) };
  });

  // Report type distribution
  const typeDistData = [
    { name: "Production", value: mySubs.filter((s) => s.type === "Production").length, color: "#008cff" },
    { name: "Producers",  value: mySubs.filter((s) => s.type === "Producers").length,  color: "#22c55e" },
    { name: "Income",     value: mySubs.filter((s) => s.type === "Income").length,      color: "#f59e0b" },
  ];

  // Monthly submission activity
  const MONTH_ORDER = ["Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun"];
  const activityData = MONTH_ORDER.map((m) => ({
    month: m,
    Submitted: mySubs.filter((s) => s.month === m).length,
    Approved:  mySubs.filter((s) => s.month === m && s.status === "Approved").length,
  }));

  // Approval rate per municipality (for center admins)
  const approvalRateData = Object.keys(MUNI_LABELS).map((key) => {
    const muniName = MUNI_LABELS[key];
    const muniSubs = submissions.filter((s) => s.municipality === muniName);
    return {
      name: muniName.slice(0, 6),
      Approved: muniSubs.filter((s) => s.status === "Approved").length,
      Pending:  muniSubs.filter((s) => s.status === "Pending").length,
      Rejected: muniSubs.filter((s) => s.status === "Rejected").length,
    };
  });

  const recentPrescriptions = prescriptions
    .filter((p) => p.fromId === user.id ||
      (user.adminType === "center") ||
      (user.adminType === "municipal" && p.municipality === user.municipality))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);
  const effData = effView === "farm" && user.adminType === "municipal"
    ? (FARM_EFFICIENCY[user.municipality] ?? MUNI_EFFICIENCY)
    : MUNI_EFFICIENCY;

  return (
    <div className="px-4 py-4 flex flex-col gap-4" style={{ background: tk.pageBg }}>
      {/* Report Validations card */}
      <div className="rounded-[16px] border p-4" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
        <p className="text-[14px] mb-3 text-center" style={{ ...montserrat(700), color: tk.heading }}>Report Validations</p>
        <div className="flex items-center justify-around">
          {[
            { label: "Approved", count: approved.length, color: "#16a34a" },
            { label: "Pending",  count: pending.length,  color: "#d97706" },
            { label: "Rejected", count: rejected.length, color: "#ef4444" },
          ].map(({ label, count, color }) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-[13px]" style={{ ...montserrat(700), color }}>{label}</span>
              <span className="text-[28px] leading-none" style={{ ...montserrat(900), color }}>{count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Production + Revenue row */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-[16px] border p-3 flex flex-col gap-1" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
          <p className="text-[20px] leading-none" style={{ ...montserrat(900), color: tk.heading }}>
            {totalProdMT > 0 ? `${totalProdMT.toFixed(0)} MT` : "2,104 MT"}
          </p>
          <p className="text-[9px]" style={{ ...montserrat(600), color: tk.muted }}>Provincial Production</p>
          <p className="text-[10px]" style={{ ...montserrat(700), color: tk.heading }}>Pangasinan, Philippines</p>
          <div className="mt-1 pt-2 border-t flex flex-col gap-0.5" style={{ borderColor: tk.divider }}>
            <div className="flex justify-between">
              <p className="text-[9px]" style={{ ...montserrat(500), color: tk.muted }}>Avg. Rate:</p>
              <p className="text-[9px]" style={{ ...montserrat(700), color: tk.body }}>300/muni</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[9px]" style={{ ...montserrat(500), color: tk.muted }}>Predicted:</p>
              <p className="text-[9px]" style={{ ...montserrat(700), color: "#22c55e" }}>↑ 2.5%</p>
            </div>
          </div>
        </div>
        <div className="rounded-[16px] border p-3 flex flex-col gap-1" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
          <p className="text-[18px] leading-none" style={{ ...montserrat(900), color: tk.heading }}>
            {totalRevenue > 0 ? `₱${totalRevenue.toLocaleString()}` : "₱2,033,000"}
          </p>
          <p className="text-[9px]" style={{ ...montserrat(600), color: tk.muted }}>Provincial Revenue</p>
          <p className="text-[10px]" style={{ ...montserrat(700), color: tk.heading }}>Pangasinan, Philippines</p>
          <div className="mt-1 pt-2 border-t flex flex-col gap-0.5" style={{ borderColor: tk.divider }}>
            <div className="flex justify-between">
              <p className="text-[9px]" style={{ ...montserrat(500), color: tk.muted }}>Market Rate:</p>
              <p className="text-[9px]" style={{ ...montserrat(700), color: tk.body }}>₱1,070/ton</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[9px]" style={{ ...montserrat(500), color: tk.muted }}>Amount Sold:</p>
              <p className="text-[9px]" style={{ ...montserrat(700), color: tk.body }}>1,900 MT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col gap-2.5">
        {[
          { label: "Validate Reports",      tab: "overview"  as AdminTab },
          { label: "View Reports",          tab: "storage"   as AdminTab },
          { label: "Manage Market Changes", tab: "analytics" as AdminTab },
        ].map(({ label, tab }) => (
          <button key={label} onClick={() => onNavigate(tab)}
            className="w-full py-3 rounded-[12px] text-white text-[14px] cursor-pointer hover:opacity-90 transition-opacity"
            style={{ ...montserrat(700), background: "#008cff" }}>
            {label}
          </button>
        ))}
      </div>

      {/* Provincial Production Trend */}
      <div className="rounded-[16px] border p-4" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
        <p className="text-[13px] mb-3" style={{ ...montserrat(700), color: tk.heading }}>Provincial Production Trend</p>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={provincialTrend} margin={{ top: 4, right: 8, bottom: 0, left: -10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={tk.divider} vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 9, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 9, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ fontSize: 10, borderRadius: 10, border: `1px solid ${tk.cardBorder}`, background: tk.card, color: tk.inputText }} />
            <Legend wrapperStyle={{ fontSize: 10, fontFamily: "Montserrat,sans-serif" }} />
            <Line type="monotone" dataKey="Production" stroke="#008cff" strokeWidth={2} dot={false} activeDot={{ r: 3 }} strokeDasharray="5 3" />
            <Line type="monotone" dataKey="Demand"     stroke="#f97316" strokeWidth={2} dot={false} activeDot={{ r: 3 }} strokeDasharray="5 3" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Efficiency chart with Municipal/Farm toggle */}
      <div className="rounded-[16px] border p-4" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
        <div className="flex items-start justify-between mb-1 gap-2">
          <div>
            <p className="text-[13px]" style={{ ...montserrat(700), color: tk.heading }}>
              {effView === "farm" ? "Farm Production Efficiency" : "Municipal Production Efficiency"}
            </p>
            <p className="text-[10px] mt-0.5" style={{ ...montserrat(500), color: tk.muted }}>kg/sq.m</p>
          </div>
          {user.adminType === "municipal" && (
            <div className="flex gap-1 shrink-0 p-0.5 rounded-full" style={{ background: dark ? "#0f1929" : "#f0f4f8" }}>
              {(["municipal", "farm"] as const).map((v) => (
                <button key={v} onClick={() => setEffView(v)}
                  className="px-3 py-1 rounded-full text-[10px] cursor-pointer transition-all"
                  style={{ ...montserrat(700), background: effView === v ? "#008cff" : "transparent", color: effView === v ? "#fff" : tk.muted }}>
                  {v === "municipal" ? "Municipal" : "Farm"}
                </button>
              ))}
            </div>
          )}
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={effData} margin={{ top: 4, right: 8, bottom: 0, left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={tk.divider} vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 8, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false}
              tickFormatter={(v: string) => v.slice(0, 7)} />
            <YAxis tick={{ fontSize: 9, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} domain={[0, 8]} />
            <Tooltip contentStyle={{ fontSize: 10, borderRadius: 10, border: `1px solid ${tk.cardBorder}`, background: tk.card, color: tk.inputText }}
              formatter={(v: unknown) => [`${Number(v)} kg/sq.m`, "Efficiency"]} />
            <Bar dataKey="eff" fill="#008cff" radius={[4, 4, 0, 0]} barSize={28}
              label={{ position: "insideBottom", offset: 6, fontSize: 9, fill: "#fff", fontFamily: "Montserrat,sans-serif" }} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Report Type Distribution + Monthly Activity */}
      <div className="grid grid-cols-2 gap-3">
        {/* Report Type Distribution */}
        <div className="rounded-[16px] border p-3" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
          <p className="text-[12px] mb-1" style={{ ...montserrat(700), color: tk.heading }}>Report Types</p>
          <p className="text-[9px] mb-2" style={{ ...montserrat(500), color: tk.muted }}>Distribution</p>
          <ResponsiveContainer width="100%" height={100}>
            <PieChart>
              <Pie data={typeDistData} cx="50%" cy="50%" innerRadius={25} outerRadius={42} dataKey="value" strokeWidth={0}>
                {typeDistData.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
              </Pie>
              <Tooltip contentStyle={{ fontSize: 9, borderRadius: 8, border: `1px solid ${tk.cardBorder}`, background: tk.card }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-col gap-0.5 mt-1">
            {typeDistData.map((t) => (
              <div key={t.name} className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: t.color }} />
                <span className="text-[9px]" style={{ ...montserrat(500), color: tk.muted }}>{t.name}: {t.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Approval Rate Snapshot */}
        <div className="rounded-[16px] border p-3" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
          <p className="text-[12px] mb-1" style={{ ...montserrat(700), color: tk.heading }}>Approval Rate</p>
          <p className="text-[9px] mb-2" style={{ ...montserrat(500), color: tk.muted }}>Out of total submitted</p>
          {(() => {
            const total = mySubs.length;
            const appRate = total > 0 ? Math.round(approved.length / total * 100) : 0;
            const rejRate = total > 0 ? Math.round(rejected.length / total * 100) : 0;
            const pendRate = total > 0 ? Math.round(pending.length / total * 100) : 0;
            return (
              <div className="flex flex-col gap-2 mt-2">
                {[
                  { label: "Approved", rate: appRate,  color: "#16a34a" },
                  { label: "Pending",  rate: pendRate, color: "#d97706" },
                  { label: "Rejected", rate: rejRate,  color: "#ef4444" },
                ].map(({ label, rate, color }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <div className="flex justify-between">
                      <span className="text-[9px]" style={{ ...montserrat(600), color: tk.muted }}>{label}</span>
                      <span className="text-[9px]" style={{ ...montserrat(700), color }}>{rate}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: dark ? "#1e2d4a" : "#f0f4f8" }}>
                      <div className="h-full rounded-full transition-all" style={{ width: `${rate}%`, background: color }} />
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}
        </div>
      </div>

      {/* Monthly Submission Activity */}
      <div className="rounded-[16px] border p-4" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
        <p className="text-[13px] mb-1" style={{ ...montserrat(700), color: tk.heading }}>Submission Activity</p>
        <p className="text-[10px] mb-3" style={{ ...montserrat(500), color: tk.muted }}>Reports filed per month</p>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={activityData} margin={{ top: 4, right: 8, bottom: 0, left: -22 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={tk.divider} vertical={false} />
            <XAxis dataKey="month" tick={{ fontSize: 9, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 9, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} allowDecimals={false} />
            <Tooltip contentStyle={{ fontSize: 10, borderRadius: 10, border: `1px solid ${tk.cardBorder}`, background: tk.card, color: tk.inputText }} />
            <Legend wrapperStyle={{ fontSize: 10, fontFamily: "Montserrat,sans-serif" }} />
            <Bar dataKey="Submitted" fill={dark ? "#1e3a5f" : "#bfdbfe"} radius={[3, 3, 0, 0]} barSize={14} />
            <Bar dataKey="Approved"  fill="#008cff"                       radius={[3, 3, 0, 0]} barSize={14} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Per-municipality approval breakdown — center admins only */}
      {user.adminType === "center" && (
        <div className="rounded-[16px] border p-4" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
          <p className="text-[13px] mb-1" style={{ ...montserrat(700), color: tk.heading }}>Municipal Report Status</p>
          <p className="text-[10px] mb-3" style={{ ...montserrat(500), color: tk.muted }}>Approved / Pending / Rejected per municipality</p>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={approvalRateData} margin={{ top: 4, right: 8, bottom: 0, left: -22 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={tk.divider} vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 8, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 9, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} allowDecimals={false} />
              <Tooltip contentStyle={{ fontSize: 10, borderRadius: 10, border: `1px solid ${tk.cardBorder}`, background: tk.card, color: tk.inputText }} />
              <Legend wrapperStyle={{ fontSize: 10, fontFamily: "Montserrat,sans-serif" }} />
              <Bar dataKey="Approved" fill="#22c55e" radius={[2, 2, 0, 0]} barSize={10} stackId="a" />
              <Bar dataKey="Pending"  fill="#f59e0b" radius={[0, 0, 0, 0]} barSize={10} stackId="a" />
              <Bar dataKey="Rejected" fill="#ef4444" radius={[2, 2, 0, 0]} barSize={10} stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* Prescriptions */}
      <div className="rounded-[16px] border overflow-hidden" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
        <div className="px-4 py-3" style={{ background: "#008cff" }}>
          <p className="text-[13px] text-white" style={montserrat(700)}>Prescriptions</p>
        </div>
        {recentPrescriptions.length === 0 ? (
          <p className="px-4 py-5 text-[12px] text-center" style={{ ...montserrat(500), color: tk.muted }}>No prescriptions issued yet.</p>
        ) : (
          <div className="flex flex-col">
            {recentPrescriptions.map((p) => (
              <div key={p.id} className="px-4 py-3 border-b last:border-0 flex flex-col gap-1" style={{ borderColor: tk.divider }}>
                <div className="flex justify-between items-center">
                  <p className="text-[11px]" style={{ ...montserrat(700), color: tk.heading }}>{p.id} · {p.toName}</p>
                  <p className="text-[10px]" style={{ ...montserrat(400), color: tk.muted }}>{p.date}</p>
                </div>
                <p className="text-[11px] leading-relaxed line-clamp-2" style={{ ...montserrat(400), color: tk.body }}>{p.text}</p>
                <p className="text-[10px] mt-1" style={{ ...montserrat(600), color: "#008cff" }}>
                  → {p.toName} {p.toType === "admin" ? "(Admin)" : ""}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Year-over-Year Production by Municipality */}
      <div className="rounded-[16px] border p-4" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
        <p className="text-[13px] mb-1" style={{ ...montserrat(700), color: tk.heading }}>Year-over-Year Production</p>
        <p className="text-[10px] mb-3" style={{ ...montserrat(500), color: tk.muted }}>Total MT per municipality, 5 fiscal years</p>
        <ResponsiveContainer width="100%" height={180}>
          <BarChart data={ANNUAL_PRODUCTION_5Y} margin={{ top: 4, right: 4, bottom: 0, left: -10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={tk.divider} vertical={false} />
            <XAxis dataKey="year" tick={{ fontSize: 8, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 8, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ fontSize: 9, borderRadius: 10, border: `1px solid ${tk.cardBorder}`, background: tk.card, color: tk.inputText }} />
            <Legend wrapperStyle={{ fontSize: 9, fontFamily: "Montserrat,sans-serif" }} />
            {user.adminType === "center" ? (
              Object.keys(MUNI_COLORS).map((k) => (
                <Bar key={k} dataKey={k} stackId="a" fill={MUNI_COLORS[k]} barSize={20} />
              ))
            ) : (
              <Bar dataKey={MUNI_KEY[user.municipality] ?? "bolinao"} fill="#008cff" radius={[3, 3, 0, 0]} barSize={28} />
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Provincial Method Trend */}
      <div className="rounded-[16px] border p-4" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
        <p className="text-[13px] mb-1" style={{ ...montserrat(700), color: tk.heading }}>Production Method Trend</p>
        <p className="text-[10px] mb-3" style={{ ...montserrat(500), color: tk.muted }}>
          {user.adminType === "center" ? "Provincial method mix evolution (% of output)" : `${user.municipality} method mix evolution`}
        </p>
        <ResponsiveContainer width="100%" height={160}>
          <BarChart data={METHOD_TREND_PROVINCIAL} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={tk.divider} vertical={false} />
            <XAxis dataKey="year" tick={{ fontSize: 8, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 8, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} domain={[0, 100]} />
            <Tooltip contentStyle={{ fontSize: 9, borderRadius: 10, border: `1px solid ${tk.cardBorder}`, background: tk.card, color: tk.inputText }}
              formatter={(v: unknown) => [`${Number(v)}%`, ""]} />
            <Legend wrapperStyle={{ fontSize: 9, fontFamily: "Montserrat,sans-serif" }} />
            <Bar dataKey="Sun"    stackId="m" fill="#f59e0b" barSize={24} />
            <Bar dataKey="Cooked" stackId="m" fill="#008cff" barSize={24} />
            <Bar dataKey="Hybrid" stackId="m" fill="#22c55e" barSize={24} radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function AdminAnalyticsTab({ user, submissions }: { user: AppUser; submissions: AppSubmission[] }) {
  const dark = useDark(); const tk = tok(dark);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loc1, setLoc1] = useState("All");
  const [loc2, setLoc2] = useState("All");
  const [compMode, setCompMode] = useState<"municipality" | "farm">("municipality");
  const [farm1, setFarm1] = useState("");
  const [farm2, setFarm2] = useState("");
  const [yearFilter, setYearFilter] = useState("2024-25");

  const mySubs = submissions.filter((s) => user.adminType === "center" || s.municipality === user.municipality);
  const filteredList = mySubs.filter((s) => {
    if (!search) return true;
    return s.id.toLowerCase().includes(search.toLowerCase()) || s.coordinatorName.toLowerCase().includes(search.toLowerCase());
  });

  const munis = ["All", "Bolinao", "Lingayen", "Bani", "Alaminos", "Dasol", "Infanta", "San Fabian"];

  const comparisonData = MUNI_TREND_DATA.map((d) => {
    const key1 = MUNI_KEY[loc1];
    const key2 = MUNI_KEY[loc2];
    const v1 = loc1 !== "All" && key1 ? ((d as unknown as Record<string, number>)[key1] ?? 0) * 400 : 0;
    const v2 = loc2 !== "All" && key2 ? ((d as unknown as Record<string, number>)[key2] ?? 0) * 400 : 0;
    return { month: d.month, [loc1 !== "All" ? loc1 : "Loc1"]: v1, [loc2 !== "All" ? loc2 : "Loc2"]: v2 };
  });

  const MONTH_LABELS = ["Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun"];
  const f1name = ALL_USERS.find(u => u.id === farm1)?.name ?? "Farm 1";
  const f2name = ALL_USERS.find(u => u.id === farm2)?.name ?? "Farm 2";
  const farmComparisonData = MONTH_LABELS.map((month, i) => {
    return {
      month,
      [f1name]: farm1 ? (FARM_MONTHLY_DATA[farm1]?.[i] ?? 0) * 40 : 0,
      [f2name]: farm2 ? (FARM_MONTHLY_DATA[farm2]?.[i] ?? 0) * 40 : 0,
    };
  });

  const methodSubs = mySubs.filter((s) => s.productionMethod);
  const solar = methodSubs.filter((s) => /solar|sun/i.test(s.productionMethod ?? "")).length;
  const cooked = methodSubs.filter((s) => /cook|boil/i.test(s.productionMethod ?? "")).length;
  const hybrid = methodSubs.filter((s) => /hybrid/i.test(s.productionMethod ?? "")).length;
  const methodData = [
    { name: "Solar/Sun",     value: solar  || 7,  color: "#f59e0b" },
    { name: "Cooked/Boiled", value: cooked || 3,  color: "#008cff" },
    { name: "Hybrid",        value: hybrid || 4,  color: "#22c55e" },
  ];
  const methodTotal = methodData.reduce((a, b) => a + b.value, 0);

  const selected = mySubs.find((s) => s.id === selectedId);
  const dInput: React.CSSProperties = { background: tk.inputBg, borderColor: tk.inputBorder, color: tk.inputText };

  return (
    <div className="h-full flex flex-col overflow-hidden" style={{ background: tk.pageBg }}>
      <div className="flex flex-1 overflow-hidden" style={{ minHeight: 0 }}>

        {/* Left panel: Reports list */}
        <div className="flex flex-col border-r" style={{ width: "42%", borderColor: tk.divider }}>
          <div className="px-3 py-3 border-b flex flex-col gap-2" style={{ borderColor: tk.divider }}>
            <p className="text-[13px]" style={{ ...montserrat(700), color: tk.heading }}>Reports</p>
            {!selectedId && (
              <div className="w-full py-1.5 rounded-full text-center text-[10px] text-white"
                style={{ ...montserrat(600), background: "#008cff" }}>
                Choose a report to start analyzing.
              </div>
            )}
            <div className="relative">
              <svg viewBox="0 0 24 24" fill="none" stroke={tk.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search"
                className="w-full border rounded-full pl-8 pr-3 py-1.5 text-[12px] outline-none focus:border-[#008cff]"
                style={{ ...montserrat(500), ...dInput }} />
            </div>
          </div>
          {/* Table header */}
          <div className="grid px-2 py-2" style={{ gridTemplateColumns: "1.6fr 1fr 0.9fr 0.9fr", background: "#008cff" }}>
            {["Reference ID", "Period", "Volume", "Date"].map((h) => (
              <p key={h} className="text-[9px] text-white" style={montserrat(700)}>{h}</p>
            ))}
          </div>
          {/* Rows */}
          <div className="flex-1 overflow-y-auto">
            {filteredList.length === 0 && (
              <p className="text-center py-6 text-[11px]" style={{ ...montserrat(500), color: tk.muted }}>No reports</p>
            )}
            {filteredList.map((s) => (
              <button key={s.id}
                onClick={() => setSelectedId(s.id === selectedId ? null : s.id)}
                className="w-full grid px-2 py-2.5 border-b text-left cursor-pointer transition-colors"
                style={{ gridTemplateColumns: "1.6fr 1fr 0.9fr 0.9fr", borderColor: tk.divider,
                  background: selectedId === s.id ? (dark ? "#0a1929" : "#e8f4ff") : "transparent" }}>
                <p className="text-[9px] truncate" style={{ ...montserrat(600), color: "#008cff" }}>{s.id}</p>
                <p className="text-[9px]" style={{ ...montserrat(500), color: tk.body }}>{s.period}</p>
                <p className="text-[9px]" style={{ ...montserrat(500), color: tk.body }}>{s.volume ?? s.amountSold ?? "—"}</p>
                <p className="text-[9px]" style={{ ...montserrat(400), color: tk.muted }}>{s.date}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Right panel: Comparison */}
        <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-3">
          {/* Date range */}
          <div className="flex items-center gap-1.5">
            <p className="text-[10px] shrink-0" style={{ ...montserrat(600), color: tk.muted }}>From:</p>
            <select className="flex-1 border rounded-[10px] px-2 py-1.5 text-[10px] outline-none" style={{ ...montserrat(500), ...dInput }}>
              <option>Set Date</option>
            </select>
            <span style={{ color: tk.muted }}>—</span>
            <p className="text-[10px] shrink-0" style={{ ...montserrat(600), color: tk.muted }}>To:</p>
            <select className="flex-1 border rounded-[10px] px-2 py-1.5 text-[10px] outline-none" style={{ ...montserrat(500), ...dInput }}>
              <option>Set Date</option>
            </select>
          </div>
          {/* Year filter */}
          <div className="flex items-center gap-1.5">
            <p className="text-[10px] shrink-0" style={{ ...montserrat(600), color: tk.muted }}>Year:</p>
            <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)}
              className="flex-1 border rounded-[10px] px-2 py-1.5 text-[10px] outline-none focus:border-[#008cff]"
              style={{ ...montserrat(500), ...dInput }}>
              {["2020-21","2021-22","2022-23","2023-24","2024-25"].map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          {/* Comparison mode toggle */}
          <div className="flex gap-1 p-0.5 rounded-full" style={{ background: dark ? "#0f1929" : "#f0f4f8" }}>
            {(["municipality", "farm"] as const).map((mode) => (
              <button key={mode} onClick={() => setCompMode(mode)}
                className="flex-1 py-1 rounded-full text-[10px] cursor-pointer transition-all"
                style={{ ...montserrat(700), background: compMode === mode ? "#008cff" : "transparent", color: compMode === mode ? "#fff" : tk.muted }}>
                {mode === "municipality" ? "Municipality" : "Farm"}
              </button>
            ))}
          </div>
          {/* Location pickers */}
          {compMode === "municipality" && (
            <div className="flex items-center gap-1.5">
              <p className="text-[10px] shrink-0" style={{ ...montserrat(600), color: tk.muted }}>Loc 1:</p>
              <select value={loc1} onChange={(e) => setLoc1(e.target.value)}
                className="flex-1 border rounded-[10px] px-2 py-1.5 text-[10px] outline-none focus:border-[#008cff]"
                style={{ ...montserrat(500), ...dInput }}>
                {munis.map((m) => <option key={m}>{m}</option>)}
              </select>
              <svg viewBox="0 0 24 24" fill="none" stroke={tk.muted} strokeWidth="2" strokeLinecap="round" className="w-3 h-3 shrink-0">
                <path d="M17 3l4 9H3l4-9" /><path d="M7 21l5-9 5 9" />
              </svg>
              <p className="text-[10px] shrink-0" style={{ ...montserrat(600), color: tk.muted }}>Loc 2:</p>
              <select value={loc2} onChange={(e) => setLoc2(e.target.value)}
                className="flex-1 border rounded-[10px] px-2 py-1.5 text-[10px] outline-none focus:border-[#008cff]"
                style={{ ...montserrat(500), ...dInput }}>
                {munis.map((m) => <option key={m}>{m}</option>)}
              </select>
            </div>
          )}
          {compMode === "farm" && (
            <div className="flex items-center gap-1.5">
              <p className="text-[10px] shrink-0" style={{ ...montserrat(600), color: tk.muted }}>Farm 1:</p>
              <select value={farm1} onChange={(e) => setFarm1(e.target.value)}
                className="flex-1 border rounded-[10px] px-2 py-1.5 text-[10px] outline-none focus:border-[#008cff]"
                style={{ ...montserrat(500), ...dInput }}>
                <option value="">Select Farm</option>
                {ALL_USERS.filter((u) => u.role === "coordinator" && (user.adminType === "center" || u.municipality === user.municipality))
                  .map((c) => <option key={c.id} value={c.id}>{c.name} ({c.municipality})</option>)}
              </select>
              <svg viewBox="0 0 24 24" fill="none" stroke={tk.muted} strokeWidth="2" strokeLinecap="round" className="w-3 h-3 shrink-0">
                <path d="M17 3l4 9H3l4-9" /><path d="M7 21l5-9 5 9" />
              </svg>
              <p className="text-[10px] shrink-0" style={{ ...montserrat(600), color: tk.muted }}>Farm 2:</p>
              <select value={farm2} onChange={(e) => setFarm2(e.target.value)}
                className="flex-1 border rounded-[10px] px-2 py-1.5 text-[10px] outline-none focus:border-[#008cff]"
                style={{ ...montserrat(500), ...dInput }}>
                <option value="">Select Farm</option>
                {ALL_USERS.filter((u) => u.role === "coordinator" && (user.adminType === "center" || u.municipality === user.municipality))
                  .map((c) => <option key={c.id} value={c.id}>{c.name} ({c.municipality})</option>)}
              </select>
            </div>
          )}
          {/* Comparison chart */}
          <div className="rounded-[12px] border p-3" style={{ background: tk.card, borderColor: tk.cardBorder }}>
            <p className="text-[11px] mb-2 text-center" style={{ ...montserrat(700), color: tk.heading }}>Comparison</p>
            <ResponsiveContainer width="100%" height={155}>
              <LineChart data={compMode === "municipality" ? comparisonData : farmComparisonData} margin={{ top: 4, right: 4, bottom: 0, left: -22 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={tk.divider} vertical={false} />
                <XAxis dataKey="month" tick={{ fontSize: 8, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 8, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ fontSize: 9, borderRadius: 8, border: `1px solid ${tk.cardBorder}`, background: tk.card, color: tk.inputText }} />
                {compMode === "municipality" ? (
                  <>
                    {loc1 !== "All" && <Line type="monotone" dataKey={loc1} stroke="#008cff" strokeWidth={1.5} dot={false} strokeDasharray="4 2" />}
                    {loc2 !== "All" && <Line type="monotone" dataKey={loc2} stroke="#22c55e" strokeWidth={1.5} dot={false} />}
                  </>
                ) : (
                  <>
                    {farm1 && <Line type="monotone" dataKey={f1name} stroke="#008cff" strokeWidth={1.5} dot={false} strokeDasharray="4 2" />}
                    {farm2 && <Line type="monotone" dataKey={f2name} stroke="#22c55e" strokeWidth={1.5} dot={false} />}
                  </>
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* Method + Stats row */}
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-[12px] border p-3" style={{ background: tk.card, borderColor: tk.cardBorder }}>
              <p className="text-[11px] mb-0.5" style={{ ...montserrat(700), color: tk.heading }}>Method Distribution</p>
              <p className="text-[9px] mb-2" style={{ ...montserrat(500), color: tk.muted }}>Solar / Cooked / Hybrid</p>
              <ResponsiveContainer width="100%" height={90}>
                <PieChart>
                  <Pie data={methodData} cx="50%" cy="50%" innerRadius={22} outerRadius={38} dataKey="value" strokeWidth={0}>
                    {methodData.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ fontSize: 9, borderRadius: 8, border: `1px solid ${tk.cardBorder}`, background: tk.card }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col gap-0.5 mt-1">
                {methodData.map((m) => (
                  <div key={m.name} className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ background: m.color }} />
                    <span className="text-[9px]" style={{ ...montserrat(500), color: tk.muted }}>
                      {m.name}: {Math.round(m.value / methodTotal * 100)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[12px] border p-3 flex flex-col gap-1.5" style={{ background: tk.card, borderColor: tk.cardBorder }}>
              <p className="text-[11px]" style={{ ...montserrat(700), color: tk.heading }}>Farm Stats</p>
              {selected && selected.farmSize ? (
                <>
                  <p className="text-[10px]" style={{ ...montserrat(600), color: tk.body }}>
                    Hectares: <span style={{ color: tk.heading }}>{selected.farmSize}</span>
                  </p>
                  {selected.saltBeds && (
                    <p className="text-[10px]" style={{ ...montserrat(600), color: tk.body }}>
                      Beds: <span style={{ color: tk.heading }}>{selected.saltBeds}</span>
                    </p>
                  )}
                </>
              ) : (
                <>
                  <p className="text-[10px]" style={{ ...montserrat(600), color: tk.body }}>Hectares: <span style={{ color: tk.heading }}>10</span></p>
                  <p className="text-[10px]" style={{ ...montserrat(600), color: tk.body }}>Beds used: <span style={{ color: tk.heading }}>45</span></p>
                </>
              )}
              <div className="mt-1">
                <p className="text-[9px]" style={{ ...montserrat(600), color: tk.muted }}>Utilization</p>
                <div className="mt-1 w-full h-2 rounded-full overflow-hidden" style={{ background: dark ? "#1e2d4a" : "#e8f0fb" }}>
                  <div className="h-full rounded-full" style={{ width: "67.5%", background: "#22c55e" }} />
                </div>
                <p className="text-[9px] mt-0.5" style={{ ...montserrat(700), color: "#22c55e" }}>67.5%</p>
              </div>
            </div>
          </div>
          {/* Production volume by municipality (right panel extra chart) */}
          <div className="rounded-[12px] border p-3" style={{ background: tk.card, borderColor: tk.cardBorder }}>
            <p className="text-[11px] mb-1" style={{ ...montserrat(700), color: tk.heading }}>Annual Production Volume</p>
            <p className="text-[9px] mb-2" style={{ ...montserrat(500), color: tk.muted }}>{yearFilter} fiscal year</p>
            <ResponsiveContainer width="100%" height={130}>
              <BarChart
                data={Object.keys(MUNI_LABELS).map((k) => ({
                  name: MUNI_LABELS[k].slice(0, 6),
                  total: (ANNUAL_PRODUCTION_5Y.find(y => y.year === yearFilter) as Record<string, number> | undefined)?.[k] ?? 0,
                  color: MUNI_COLORS[k],
                }))}
                margin={{ top: 4, right: 4, bottom: 0, left: -22 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={tk.divider} vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 8, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 8, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ fontSize: 9, borderRadius: 8, border: `1px solid ${tk.cardBorder}`, background: tk.card, color: tk.inputText }}
                  formatter={(v: unknown) => [`${Number(v)} MT`, "Annual Total"]} />
                <Bar dataKey="total" radius={[3, 3, 0, 0]} barSize={22}>
                  {Object.keys(MUNI_LABELS).map((k) => <Cell key={k} fill={MUNI_COLORS[k]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Year-over-Year comparison chart */}
          <div className="rounded-[12px] border p-3" style={{ background: tk.card, borderColor: tk.cardBorder }}>
            <p className="text-[11px] mb-1" style={{ ...montserrat(700), color: tk.heading }}>Year-over-Year Production</p>
            <p className="text-[9px] mb-2" style={{ ...montserrat(500), color: tk.muted }}>
              {compMode === "farm" && farm1
                ? `${ALL_USERS.find(u => u.id === farm1)?.name ?? "Farm"} — 5-year monthly trend`
                : "Provincial total — 5 fiscal years"}
            </p>
            <ResponsiveContainer width="100%" height={130}>
              <BarChart data={ANNUAL_PRODUCTION_5Y} margin={{ top: 4, right: 4, bottom: 0, left: -18 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={tk.divider} vertical={false} />
                <XAxis dataKey="year" tick={{ fontSize: 7, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 7, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ fontSize: 9, borderRadius: 8, border: `1px solid ${tk.cardBorder}`, background: tk.card, color: tk.inputText }} />
                {compMode === "municipality" && loc1 !== "All" ? (
                  <Bar dataKey={MUNI_KEY[loc1] ?? "bolinao"} fill="#008cff" radius={[3, 3, 0, 0]} barSize={20} />
                ) : compMode === "farm" && farm1 ? (
                  <Bar dataKey="bolinao" fill="#008cff" radius={[3, 3, 0, 0]} barSize={20} />
                ) : (
                  Object.keys(MUNI_COLORS).map((k) => (
                    <Bar key={k} dataKey={k} stackId="a" fill={MUNI_COLORS[k]} barSize={20} />
                  ))
                )}
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Method trend for selected coordinator / municipality */}
          <div className="rounded-[12px] border p-3" style={{ background: tk.card, borderColor: tk.cardBorder }}>
            <p className="text-[11px] mb-0.5" style={{ ...montserrat(700), color: tk.heading }}>Production Method Evolution</p>
            <p className="text-[9px] mb-2" style={{ ...montserrat(500), color: tk.muted }}>
              {compMode === "farm" && farm1
                ? `${ALL_USERS.find(u => u.id === farm1)?.name ?? "Farm"} — method mix by year`
                : "Provincial — Sun / Cooked / Hybrid trend"}
            </p>
            <ResponsiveContainer width="100%" height={130}>
              <BarChart
                data={compMode === "farm" && farm1 && COORD_METHOD_TREND[farm1]
                  ? COORD_METHOD_TREND[farm1]
                  : METHOD_TREND_PROVINCIAL}
                margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={tk.divider} vertical={false} />
                <XAxis dataKey="year" tick={{ fontSize: 7, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 8, fill: tk.muted, fontFamily: "Montserrat,sans-serif" }} axisLine={false} tickLine={false} domain={[0, 100]} />
                <Tooltip contentStyle={{ fontSize: 9, borderRadius: 8, border: `1px solid ${tk.cardBorder}`, background: tk.card, color: tk.inputText }}
                  formatter={(v: unknown) => [`${Number(v)}%`, ""]} />
                <Legend wrapperStyle={{ fontSize: 8, fontFamily: "Montserrat,sans-serif" }} />
                <Bar dataKey="Sun"    stackId="m" fill="#f59e0b" barSize={20} />
                <Bar dataKey="Cooked" stackId="m" fill="#008cff" barSize={20} />
                <Bar dataKey="Hybrid" stackId="m" fill="#22c55e" barSize={20} radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Selected report detail */}
          {selected && (
            <div className="rounded-[12px] border p-3" style={{ background: tk.card, borderColor: tk.cardBorder }}>
              <p className="text-[11px] mb-2" style={{ ...montserrat(700), color: tk.heading }}>
                {selected.id} — {selected.type} Report
              </p>
              <FullReportView sub={selected} tk={tk} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AdminStorageTab({ user, submissions }: { user: AppUser; submissions: AppSubmission[] }) {
  const dark = useDark(); const tk = tok(dark);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("Production");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const mySubs = submissions.filter((s) => user.adminType === "center" || s.municipality === user.municipality);
  const filtered = mySubs.filter((s) => {
    if (typeFilter !== "All" && s.type !== typeFilter) return false;
    if (statusFilter !== "All Status" && s.status !== statusFilter) return false;
    if (search && !s.id.toLowerCase().includes(search.toLowerCase()) && !s.coordinatorName.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const getVol = (s: AppSubmission) =>
    s.volume ?? (s.amountSold ? `₱${parseFloat(s.amountSold).toLocaleString()}` : "—");

  const dInput: React.CSSProperties = { background: tk.inputBg, borderColor: tk.inputBorder, color: tk.inputText };

  return (
    <div className="px-4 py-4 flex flex-col gap-3" style={{ background: tk.pageBg }}>
      {/* Filters row */}
      <div className="flex gap-2 flex-wrap">
        <div className="relative flex-1 min-w-[120px]">
          <svg viewBox="0 0 24 24" fill="none" stroke={tk.muted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search"
            className="w-full border rounded-full pl-9 pr-3 py-2.5 text-[13px] outline-none focus:border-[#008cff]"
            style={{ ...montserrat(500), ...dInput }} />
        </div>
        <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}
          className="border rounded-full px-4 py-2.5 text-[12px] outline-none focus:border-[#008cff] cursor-pointer"
          style={{ ...montserrat(500), ...dInput }}>
          {["All", "Production", "Producers", "Income"].map((v) => <option key={v}>{v}</option>)}
        </select>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-full px-4 py-2.5 text-[12px] outline-none focus:border-[#008cff] cursor-pointer"
          style={{ ...montserrat(500), ...dInput }}>
          {["All Status", "Approved", "Pending", "Rejected"].map((v) => <option key={v}>{v}</option>)}
        </select>
      </div>

      {/* Table card */}
      <div className="rounded-[16px] overflow-hidden border" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
        {/* Blue header */}
        <div className="grid px-4 py-3" style={{ gridTemplateColumns: "2fr 1.2fr 1.2fr 1.4fr 1fr", background: "#008cff" }}>
          {["Reference ID", "Period", "Volume", "Status", "Date"].map((h) => (
            <p key={h} className="text-[11px] text-white text-center" style={montserrat(700)}>{h}</p>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center py-8 text-[13px]" style={{ ...montserrat(500), color: tk.muted }}>No reports match filters</p>
        )}
        {filtered.map((s, i) => (
          <div key={s.id} className="grid px-4 py-4 border-b last:border-0 items-center"
            style={{ gridTemplateColumns: "2fr 1.2fr 1.2fr 1.4fr 1fr", borderColor: tk.divider,
              background: i % 2 === 1 ? tk.tableRow2 : "transparent" }}>
            <p className="text-[12px]" style={{ ...montserrat(600), color: "#008cff" }}>{s.id}</p>
            <p className="text-[13px] text-center" style={{ ...montserrat(500), color: tk.body }}>{s.period}</p>
            <p className="text-[13px] text-center" style={{ ...montserrat(500), color: tk.body }}>{getVol(s)}</p>
            <div className="flex justify-center">
              <span className="px-3 py-1 rounded-full text-[11px] border" style={{
                ...montserrat(700),
                color:       s.status === "Approved" ? "#16a34a" : s.status === "Pending" ? "#d97706" : "#ef4444",
                background:  s.status === "Approved" ? (dark ? "#052010" : "#f0fdf4") : s.status === "Pending" ? (dark ? "#1a1000" : "#fffbeb") : (dark ? "#1a0505" : "#fef2f2"),
                borderColor: s.status === "Approved" ? "#bbf7d0" : s.status === "Pending" ? "#fde68a" : "#fecaca",
              }}>
                {s.status}
              </span>
            </div>
            <p className="text-[12px] text-center" style={{ ...montserrat(500), color: tk.muted }}>{s.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminManagementTab({ user, submissions, setSubmissions, prescriptions, setPrescriptions, onSignOut, darkMode, setDarkMode }: {
  user: AppUser;
  submissions: AppSubmission[];
  setSubmissions: React.Dispatch<React.SetStateAction<AppSubmission[]>>;
  prescriptions: AppPrescription[];
  setPrescriptions: React.Dispatch<React.SetStateAction<AppPrescription[]>>;
  onSignOut: () => void;
  darkMode: boolean;
  setDarkMode: (v: boolean) => void;
}) {
  const dark = useDark(); const tk = tok(dark);
  const [openSection, setOpenSection] = useState<"settings" | "admin" | "coordinators" | "prescriptions" | null>("settings");
  const [prescTargetType, setPrescTargetType] = useState<"farm" | "admin">("farm");
  const [prescTargetId, setPrescTargetId] = useState("");
  const [prescText, setPrescText] = useState("");
  const [prescSent, setPrescSent] = useState(false);
  const [profile, setProfile] = useState({ name: user.name, title: user.title ?? "", contact: user.contact, email: user.email });
  const [saved, setSaved] = useState(false);
  const [adminStatuses, setAdminStatuses] = useState<Record<string, boolean>>({});
  const myCoords = ALL_USERS.filter((u) => u.role === "coordinator" && (user.adminType === "center" || u.municipality === user.municipality));
  const [coordStatuses, setCoordStatuses] = useState<Record<string, boolean>>({});

  const dInput: React.CSSProperties = { background: tk.inputBg, borderColor: tk.inputBorder, color: tk.inputText };

  const SectionHeader = ({ id, label }: { id: typeof openSection; label: string }) => (
    <button onClick={() => setOpenSection(openSection === id ? null : id)}
      className="w-full px-4 py-3 text-left flex items-center justify-between rounded-[12px] cursor-pointer"
      style={{ background: "#008cff" }}>
      <p className="text-[14px] text-white" style={montserrat(700)}>{label}</p>
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        className="w-4 h-4 transition-transform" style={{ transform: openSection === id ? "rotate(180deg)" : "rotate(0deg)" }}>
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );

  return (
    <div className="px-4 py-4 flex flex-col gap-3" style={{ background: tk.pageBg }}>

      {/* 1. USER SETTINGS */}
      <div className="rounded-[16px] border overflow-hidden" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
        <SectionHeader id="settings" label="User Settings" />
        {openSection === "settings" && (
          <div className="p-4 flex flex-col gap-3">
            {[
              { label: "Full Name",    key: "name",    type: "text"  },
              { label: "Title / Role", key: "title",   type: "text"  },
              { label: "Contact",      key: "contact", type: "tel"   },
              { label: "Email",        key: "email",   type: "email" },
            ].map(({ label, key, type }) => (
              <div key={key} className="flex flex-col gap-1">
                <p className="text-[10px]" style={{ ...montserrat(600), color: tk.muted }}>{label}</p>
                <input type={type}
                  value={(profile as Record<string, string>)[key]}
                  onChange={(e) => setProfile((p) => ({ ...p, [key]: e.target.value }))}
                  className="border rounded-[10px] px-3 py-2.5 text-[13px] outline-none focus:border-[#008cff]"
                  style={{ ...montserrat(500), ...dInput }} />
              </div>
            ))}
            <div className="flex flex-col gap-1">
              <p className="text-[10px]" style={{ ...montserrat(600), color: tk.muted }}>Municipality</p>
              <div className="border rounded-[10px] px-3 py-2.5 opacity-70" style={{ ...dInput }}>
                <p className="text-[13px]" style={{ ...montserrat(500), color: tk.inputText }}>{user.municipality}</p>
              </div>
            </div>
            <button onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
              className="w-full py-2.5 rounded-full text-white text-[13px] cursor-pointer transition-colors"
              style={{ ...montserrat(700), background: saved ? "#22c55e" : "#008cff" }}>
              {saved ? "Saved!" : "Save Changes"}
            </button>
            <div className="border-t pt-3 flex flex-col gap-2" style={{ borderColor: tk.divider }}>
              <Toggle label="Dark Mode" on={darkMode} onToggle={() => setDarkMode(!darkMode)} />
              <button onClick={onSignOut}
                className="w-full h-[46px] rounded-full text-[14px] cursor-pointer border"
                style={{ ...montserrat(700), borderColor: "#f87171", color: "#ef4444", background: "transparent" }}>
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 2. ADMINISTRATION */}
      <div className="rounded-[16px] border overflow-hidden" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
        <SectionHeader id="admin" label="Administration" />
        {openSection === "admin" && (
          <div className="p-4 flex flex-col gap-3">
            {user.adminType !== "center" ? (
              <div className="rounded-[12px] border px-4 py-6 text-center" style={{ borderColor: tk.cardBorder }}>
                <p className="text-[12px]" style={{ ...montserrat(500), color: tk.muted }}>
                  Only Asin Center administrators can manage admin accounts.
                </p>
              </div>
            ) : (
              <>
                <p className="text-[11px]" style={{ ...montserrat(500), color: tk.muted }}>
                  Manage all admin accounts. Municipal admins can be deactivated. Asin Center accounts can only be removed by their own holder.
                </p>
                {ALL_USERS.filter((u) => u.role === "admin").map((a) => {
                  const isSelf = a.id === user.id;
                  const isCenter = a.adminType === "center";
                  const isActive = adminStatuses[a.id] !== false;
                  return (
                    <div key={a.id} className="rounded-[12px] border px-3 py-3 flex flex-col gap-2" style={{ borderColor: tk.cardBorder }}>
                      <div className="flex justify-between items-start gap-2">
                        <div className="flex-1 min-w-0">
                          <p className="text-[12px]" style={{ ...montserrat(700), color: tk.heading }}>{a.name}{isSelf ? " (You)" : ""}</p>
                          <p className="text-[10px] truncate" style={{ ...montserrat(400), color: tk.muted }}>{a.municipality} · {a.email}</p>
                          <span className="text-[10px]" style={{ ...montserrat(600), color: isCenter ? "#008cff" : "#a855f7" }}>
                            {isCenter ? "Asin Center" : "Municipal"}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[10px] border shrink-0" style={{
                          ...montserrat(700),
                          color: isActive ? "#16a34a" : "#6b7280",
                          background: isActive ? (dark ? "#052010" : "#f0fdf4") : (dark ? "#1a1a1a" : "#f9fafb"),
                          borderColor: isActive ? "#bbf7d0" : "#d1d5db",
                        }}>
                          {isActive ? "Active" : "Inactive"}
                        </span>
                      </div>
                      {!isSelf && !isCenter && (
                        <button
                          onClick={() => setAdminStatuses((p) => ({ ...p, [a.id]: p[a.id] === false }))}
                          className="w-full py-1.5 rounded-[8px] text-[11px] border cursor-pointer transition-colors"
                          style={{ ...montserrat(700), borderColor: isActive ? "#f87171" : "#4ade80", color: isActive ? "#ef4444" : "#16a34a" }}>
                          {isActive ? "Deactivate" : "Activate"}
                        </button>
                      )}
                    </div>
                  );
                })}
              </>
            )}
          </div>
        )}
      </div>

      {/* 3. MUNICIPALITIES / COORDINATOR ACCOUNTS */}
      <div className="rounded-[16px] border overflow-hidden" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
        <SectionHeader id="coordinators" label="Municipalities" />
        {openSection === "coordinators" && (
          <div className="p-4 flex flex-col gap-3">
            <p className="text-[11px]" style={{ ...montserrat(500), color: tk.muted }}>
              {user.adminType === "center"
                ? "All municipalities and their coordinators."
                : `Coordinators in ${user.municipality}. Municipal admins can activate or deactivate coordinators.`}
            </p>
            {myCoords.map((c) => {
              const cSubs = submissions.filter((s) => s.coordinatorId === c.id);
              const isActive = coordStatuses[c.id] !== false;
              return (
                <div key={c.id} className="rounded-[12px] border px-3 py-3 flex flex-col gap-2" style={{ borderColor: tk.cardBorder }}>
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px]" style={{ ...montserrat(700), color: tk.heading }}>{c.name}</p>
                      <p className="text-[10px] truncate" style={{ ...montserrat(400), color: tk.muted }}>{c.municipality} · {c.email}</p>
                      <p className="text-[10px] mt-0.5" style={{ ...montserrat(500), color: tk.muted }}>
                        Submissions: {cSubs.length} · Pending: {cSubs.filter((s) => s.status === "Pending").length}
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] border shrink-0" style={{
                      ...montserrat(700),
                      color: isActive ? "#16a34a" : "#6b7280",
                      background: isActive ? (dark ? "#052010" : "#f0fdf4") : (dark ? "#1a1a1a" : "#f9fafb"),
                      borderColor: isActive ? "#bbf7d0" : "#d1d5db",
                    }}>
                      {isActive ? "Active" : "Inactive"}
                    </span>
                  </div>
                  <button
                    onClick={() => setCoordStatuses((p) => ({ ...p, [c.id]: p[c.id] === false }))}
                    className="w-full py-1.5 rounded-[8px] text-[11px] border cursor-pointer transition-colors"
                    style={{ ...montserrat(700), borderColor: isActive ? "#f87171" : "#4ade80", color: isActive ? "#ef4444" : "#16a34a" }}>
                    {isActive ? "Deactivate" : "Activate"}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 4. PRESCRIPTIONS */}
      <div className="rounded-[16px] border overflow-hidden" style={{ background: tk.card, borderColor: tk.cardBorder, boxShadow: tk.cardShadow }}>
        <SectionHeader id="prescriptions" label="Prescriptions" />
        {openSection === "prescriptions" && (
          <div className="p-4 flex flex-col gap-3">
            {/* Target type toggle — only center admins can prescribe to other admins */}
            {user.adminType === "center" && (
              <div className="flex gap-1 p-0.5 rounded-full" style={{ background: dark ? "#0f1929" : "#f0f4f8" }}>
                {(["farm", "admin"] as const).map((t) => (
                  <button key={t} onClick={() => { setPrescTargetType(t); setPrescTargetId(""); }}
                    className="flex-1 py-1 rounded-full text-[10px] cursor-pointer transition-all"
                    style={{ ...montserrat(700), background: prescTargetType === t ? "#008cff" : "transparent", color: prescTargetType === t ? "#fff" : tk.muted }}>
                    {t === "farm" ? "Farm / Coordinator" : "Admin"}
                  </button>
                ))}
              </div>
            )}
            {/* Target selector */}
            <div className="flex flex-col gap-1">
              <p className="text-[10px]" style={{ ...montserrat(600), color: tk.muted }}>
                {prescTargetType === "admin" ? "Select Admin" : "Select Coordinator"}
              </p>
              <select value={prescTargetId} onChange={(e) => setPrescTargetId(e.target.value)}
                className="border rounded-[10px] px-3 py-2.5 text-[12px] outline-none focus:border-[#008cff] cursor-pointer"
                style={{ ...montserrat(500), ...dInput }}>
                <option value="">— Select —</option>
                {prescTargetType === "admin" && user.adminType === "center"
                  ? ALL_USERS.filter((u) => u.role === "admin" && u.id !== user.id)
                      .map((a) => <option key={a.id} value={a.id}>{a.name} ({a.municipality})</option>)
                  : ALL_USERS.filter((u) => u.role === "coordinator" && (user.adminType === "center" || u.municipality === user.municipality))
                      .map((c) => <option key={c.id} value={c.id}>{c.name} ({c.municipality})</option>)
                }
              </select>
            </div>
            {/* Prescription text */}
            <div className="flex flex-col gap-1">
              <p className="text-[10px]" style={{ ...montserrat(600), color: tk.muted }}>Prescription / Note</p>
              <textarea
                value={prescText}
                onChange={(e) => setPrescText(e.target.value)}
                rows={4}
                placeholder="Write your prescription or recommendation here..."
                className="border rounded-[10px] px-3 py-2.5 text-[12px] outline-none focus:border-[#008cff] resize-none"
                style={{ ...montserrat(400), ...dInput }} />
            </div>
            {/* Send button */}
            <button
              onClick={() => {
                if (!prescTargetId || !prescText.trim()) return;
                const target = ALL_USERS.find(u => u.id === prescTargetId);
                if (!target) return;
                const newPrescription: AppPrescription = {
                  id: `P-${Date.now()}`,
                  fromId: user.id,
                  fromName: user.name,
                  toId: prescTargetId,
                  toName: target.name,
                  toType: prescTargetType === "admin" ? "admin" : "coordinator",
                  municipality: target.municipality ?? user.municipality,
                  text: prescText.trim(),
                  date: new Date().toLocaleDateString("en-PH", { month: "short", day: "numeric", year: "numeric" }),
                };
                setPrescriptions(prev => [newPrescription, ...prev]);
                setPrescTargetId("");
                setPrescText("");
                setPrescSent(true);
                setTimeout(() => setPrescSent(false), 2000);
              }}
              className="w-full py-2.5 rounded-full text-white text-[13px] cursor-pointer transition-colors"
              style={{ ...montserrat(700), background: prescSent ? "#22c55e" : (prescTargetId && prescText.trim() ? "#008cff" : (dark ? "#1e2d4a" : "#d1d5db")) }}>
              {prescSent ? "Sent!" : "Send Prescription"}
            </button>
            {/* Recently sent prescriptions */}
            {prescriptions.filter((p) => p.fromId === user.id).length > 0 && (
              <div className="flex flex-col gap-2 mt-1">
                <p className="text-[10px]" style={{ ...montserrat(700), color: tk.muted }}>Recently Sent</p>
                {prescriptions.filter((p) => p.fromId === user.id).slice(0, 5).map((p) => (
                  <div key={p.id} className="rounded-[10px] border px-3 py-2.5" style={{ borderColor: tk.cardBorder }}>
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-[11px]" style={{ ...montserrat(700), color: tk.heading }}>→ {p.toName} {p.toType === "admin" ? "(Admin)" : ""}</p>
                      <p className="text-[10px]" style={{ ...montserrat(400), color: tk.muted }}>{p.date}</p>
                    </div>
                    <p className="text-[11px] leading-relaxed line-clamp-2" style={{ ...montserrat(400), color: tk.body }}>{p.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function AdminDashboard({ user, submissions, setSubmissions, prescriptions, setPrescriptions, onSignOut }: {
  user: AppUser;
  submissions: AppSubmission[];
  setSubmissions: React.Dispatch<React.SetStateAction<AppSubmission[]>>;
  prescriptions: AppPrescription[];
  setPrescriptions: React.Dispatch<React.SetStateAction<AppPrescription[]>>;
  onSignOut: () => void;
}) {
  const [tab, setTab] = useState<AdminTab>("overview");
  const [darkMode, setDarkMode] = useState(false);
  const tk = tok(darkMode);

  return (
    <ThemeCtx.Provider value={darkMode}>
      <div className="h-screen flex flex-col overflow-hidden transition-colors duration-300" style={{ background: tk.pageBg }}>
        <CoordNavBar onSignOut={onSignOut} />
        <div className={`flex-1 ${tab === "analytics" ? "overflow-hidden" : "overflow-y-auto"}`} style={{ minHeight: 0 }}>
          {tab === "overview"    && <AdminOverviewTab user={user} submissions={submissions} setSubmissions={setSubmissions} prescriptions={prescriptions} onNavigate={setTab} />}
          {tab === "analytics"   && <AdminAnalyticsTab user={user} submissions={submissions} />}
          {tab === "storage"     && <AdminStorageTab user={user} submissions={submissions} />}
          {tab === "management"  && <AdminManagementTab user={user} submissions={submissions} setSubmissions={setSubmissions} prescriptions={prescriptions} setPrescriptions={setPrescriptions} onSignOut={onSignOut} darkMode={darkMode} setDarkMode={setDarkMode} />}
        </div>
        <AdminBottomNav active={tab} onChange={setTab} />
      </div>
    </ThemeCtx.Provider>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState<"landing" | "signin" | "help" | "coordinator" | "admin">("landing");
  const [currentUser, setCurrentUser] = useState<AppUser | null>(null);
  const [submissions, setSubmissions] = useState<AppSubmission[]>(INITIAL_SUBMISSIONS);
  const [prescriptions, setPrescriptions] = useState<AppPrescription[]>(INITIAL_PRESCRIPTIONS);

  const handleLogin = (user: AppUser) => {
    setCurrentUser(user);
    setPage(user.role === "coordinator" ? "coordinator" : "admin");
  };
  const handleSignOut = () => {
    setCurrentUser(null);
    setPage("landing");
  };

  if (page === "signin")      return <SignInPage onBack={() => setPage("landing")} onHelp={() => setPage("help")} onLogin={handleLogin} />;
  if (page === "help")        return <HelpPage onBack={() => setPage("signin")} />;
  if (page === "coordinator" && currentUser) return <CoordinatorDashboard user={currentUser} submissions={submissions} setSubmissions={setSubmissions} prescriptions={prescriptions} onSignOut={handleSignOut} />;
  if (page === "admin"       && currentUser) return <AdminDashboard user={currentUser} submissions={submissions} setSubmissions={setSubmissions} prescriptions={prescriptions} setPrescriptions={setPrescriptions} onSignOut={handleSignOut} />;
  return <LandingPage onSignIn={() => setPage("signin")} />;
}
