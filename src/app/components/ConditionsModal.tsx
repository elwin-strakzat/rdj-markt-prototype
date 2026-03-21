import { useState } from "react";
import svgPaths from "../../imports/svg-08ubf28gdz";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";

interface ConditionsModalProps {
  cargo: {
    id: string;
    title: string;
    weight: string;
    from: string;
    to: string;
  };
  onClose: () => void;
  onSave: (conditions: ConditionsData) => void;
}

export interface ConditionsData {
  tonnageMin: string;
  tonnageMax: string;
  price: string;
  priceType: 'per-ton' | 'per-m3' | 'blokvracht';
  loadingTime: string;
  loadingTimeUnit: string;
  unloadingTime: string;
  unloadingTimeUnit: string;
  loadingCondition: string;
  unloadingCondition: string;
  remarks: string;
}

function parseTonnage(value: string): number {
  return parseFloat(value.replace(/\./g, '').replace(',', '.')) || 0;
}

export default function ConditionsModal({ cargo, onClose, onSave }: ConditionsModalProps) {
  // Parse weight string — supports "3.000 ton X" and "0–500 ton X" (range from split)
  const rangeMatch = cargo.weight.match(/^([\d.,]+)\s*[–-]\s*([\d.,]+)\s*ton/);
  const singleMatch = cargo.weight.match(/^([\d.,]+)\s*ton/);

  const initialMin = rangeMatch ? rangeMatch[1] : (singleMatch ? singleMatch[1] : '');
  const initialMax = rangeMatch ? rangeMatch[2] : initialMin;
  const initialIsRange = !!rangeMatch;

  const totalTonnage = parseTonnage(initialMax);

  const [isRange, setIsRange] = useState(initialIsRange);
  const [tonnageMin, setTonnageMin] = useState(initialMin);
  const [tonnageMax, setTonnageMax] = useState(initialMax);
  const [price, setPrice] = useState("4,00");
  const [priceType, setPriceType] = useState<'per-ton' | 'per-m3' | 'blokvracht'>('per-ton');
  const [loadingTime, setLoadingTime] = useState("");
  const [loadingTimeUnit, setLoadingTimeUnit] = useState("uur");
  const [unloadingTime, setUnloadingTime] = useState("");
  const [unloadingTimeUnit, setUnloadingTimeUnit] = useState("uur");
  const [loadingCondition, setLoadingCondition] = useState("conform-nederlands-wettelijk");
  const [unloadingCondition, setUnloadingCondition] = useState("conform-nederlands-wettelijk");
  const [remarks, setRemarks] = useState("");

  const minVal = parseTonnage(tonnageMin);
  const maxVal = parseTonnage(tonnageMax);
  const hasMax = isRange && tonnageMax.trim() !== '';
  const hasMin = tonnageMin.trim() !== '';

  const minError = isRange && hasMin && hasMax && minVal > maxVal ? 'Min mag niet hoger zijn dan max' : '';
  const maxError = isRange && hasMax && hasMin && maxVal < minVal ? 'Max mag niet lager zijn dan min' : '';
  const hasError = !!minError || !!maxError;

  // Calculate remaining tonnage (as a range when max is set)
  const remainingFromMax = hasMin ? totalTonnage - (hasMax ? maxVal : minVal) : totalTonnage;
  const remainingFromMin = hasMax && hasMin ? totalTonnage - minVal : remainingFromMax;

  const handleSubmit = () => {
    if (hasError || !hasMin) return;
    onSave({
      tonnageMin,
      tonnageMax: isRange ? tonnageMax : '',
      price,
      priceType,
      loadingTime,
      loadingTimeUnit,
      unloadingTime,
      unloadingTimeUnit,
      loadingCondition,
      unloadingCondition,
      remarks,
    });
    onClose();
  };

  return (
    <>
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-[#0c111d] opacity-70 z-40" onClick={onClose} />
      
      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-[12px] max-w-[728px] w-full max-h-[90vh] overflow-auto shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08),0px_8px_8px_-4px_rgba(16,24,40,0.03)]">
          {/* Header */}
          <div className="relative shrink-0 w-full">
            <div className="content-stretch flex gap-[16px] items-start pt-[24px] px-[24px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
                <p className="font-sans font-bold leading-[26px] relative shrink-0 text-[#101828] text-[18px] w-full">
                  Bepaal de condities voor {cargo.id}
                </p>
                <p className="font-sans font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-full">
                  {cargo.weight} van {cargo.from} naar {cargo.to}
                </p>
              </div>
              <button onClick={onClose} className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-1/4">
                  <div className="absolute inset-[-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <path d={svgPaths.p2bffb680} stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-[24px] py-[20px] space-y-[20px]">
            {/* Tonnage */}
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
              <div className="flex items-center gap-[12px]">
                <p className="font-sans font-bold leading-[20px] text-[#344054] text-[14px] whitespace-nowrap">Tonnage</p>
                <Checkbox
                  checked={isRange}
                  onChange={(checked) => setIsRange(checked)}
                  label="Range"
                />
              </div>
              <div className="flex gap-[8px] items-center">
                {/* Single / Min input */}
                <div className="flex flex-col gap-[4px]">
                  <div className={`bg-white content-stretch flex items-start relative rounded-[6px] shrink-0 w-[140px]`}>
                    <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${minError ? 'border-[#F04438]' : 'border-[#d0d5dd]'}`} />
                    <input
                      type="text"
                      value={tonnageMin}
                      onChange={(e) => setTonnageMin(e.target.value)}
                      placeholder={isRange ? "Min" : "Aantal"}
                      className="flex-1 px-[12px] py-[8px] font-sans font-normal leading-[20px] text-[#101828] text-[14px] bg-transparent outline-none rounded-l-[6px] w-0"
                    />
                    <div className="content-stretch flex items-center px-[12px] py-[8px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0">
                      <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] text-left whitespace-nowrap">t</p>
                    </div>
                  </div>
                  {minError && <p className="font-sans font-normal text-[#F04438] text-[12px] leading-[16px]">{minError}</p>}
                </div>
                {/* Max input (only when range is active) */}
                {isRange && (
                  <>
                    <span className="font-sans font-normal text-[#475467] text-[14px]">–</span>
                    <div className="flex flex-col gap-[4px]">
                      <div className={`bg-white content-stretch flex items-start relative rounded-[6px] shrink-0 w-[140px]`}>
                        <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${maxError ? 'border-[#F04438]' : 'border-[#d0d5dd]'}`} />
                        <input
                          type="text"
                          value={tonnageMax}
                          onChange={(e) => setTonnageMax(e.target.value)}
                          placeholder="Max"
                          className="flex-1 px-[12px] py-[8px] font-sans font-normal leading-[20px] text-[#101828] text-[14px] bg-transparent outline-none rounded-l-[6px] w-0"
                        />
                        <div className="content-stretch flex items-center px-[12px] py-[8px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0">
                          <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] text-left whitespace-nowrap">t</p>
                        </div>
                      </div>
                      {maxError && <p className="font-sans font-normal text-[#F04438] text-[12px] leading-[16px]">{maxError}</p>}
                    </div>
                  </>
                )}
              </div>
              {hasMin && remainingFromMax >= 0 && (
                <p className="font-sans font-normal leading-[18px] text-[#475467] text-[12px]">
                  <span className="font-bold">{isRange && hasMax ? `${tonnageMin}–${tonnageMax}` : tonnageMin} ton</span>
                  {' naar de werklijst · '}
                  {remainingFromMax <= 0 && remainingFromMin <= 0
                    ? 'volledige lading'
                    : isRange && hasMax && remainingFromMax !== remainingFromMin
                      ? `${remainingFromMax.toLocaleString('nl-NL')}–${remainingFromMin.toLocaleString('nl-NL')} ton over`
                      : `${remainingFromMax.toLocaleString('nl-NL')} ton over`
                  }
                </p>
              )}
            </div>

            {/* Vrachtprijs */}
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[160px]">
                <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Vrachtprijs</p>
                <div className="bg-white content-stretch flex items-start relative rounded-[6px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                  <div className="content-stretch flex items-center pl-[14px] pr-[12px] py-[10px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0">
                    <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] text-left whitespace-nowrap">€</p>
                  </div>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="flex-1 px-[14px] py-[10px] font-sans font-normal leading-[20px] text-[#101828] text-[14px] bg-transparent outline-none rounded-r-[6px]"
                  />
                </div>
              </div>
              
              <div className="relative self-stretch shrink-0 flex-1">
                <div className="flex flex-row items-end size-full">
                  <div className="content-stretch flex gap-[16px] items-end py-[10px] relative size-full">
                    <RadioButton
                      checked={priceType === 'per-ton'}
                      onChange={() => setPriceType('per-ton')}
                      label="Per ton"
                    />
                    <RadioButton
                      checked={priceType === 'per-m3'}
                      onChange={() => setPriceType('per-m3')}
                      label="Per m³"
                    />
                    <RadioButton
                      checked={priceType === 'blokvracht'}
                      onChange={() => setPriceType('blokvracht')}
                      label="Blokvracht"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Laadtijd & Lostijd */}
            <div className="grid grid-cols-2 gap-[16px]">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
                <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Laadtijd</p>
                <div className="flex gap-[8px] w-full">
                  <Checkbox
                    checked={loadingCondition === "conform-nederlands-wettelijk"}
                    onChange={(checked) => setLoadingCondition(checked ? "conform-nederlands-wettelijk" : "")}
                    label="Conform Nederlands Wettelijk"
                  />
                </div>
                <div className="flex gap-[8px] w-full">
                  <input
                    type="text"
                    value={loadingTime}
                    onChange={(e) => setLoadingTime(e.target.value)}
                    placeholder="0"
                    className="flex-1 px-[12px] py-[8px] font-sans font-normal leading-[20px] text-[#101828] text-[14px] bg-white border border-[#d0d5dd] rounded-[6px] outline-none"
                  />
                  <select
                    value={loadingTimeUnit}
                    onChange={(e) => setLoadingTimeUnit(e.target.value)}
                    className="px-[12px] py-[8px] font-sans font-normal leading-[20px] text-[#101828] text-[14px] bg-white border border-[#d0d5dd] rounded-[6px] outline-none"
                  >
                    <option value="uur">uur</option>
                    <option value="dag">dag</option>
                  </select>
                </div>
              </div>

              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
                <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Lostijd</p>
                <div className="flex items-center gap-[8px]">
                  <Checkbox
                    checked={unloadingCondition === "conform-nederlands-wettelijk"}
                    onChange={(checked) => setUnloadingCondition(checked ? "conform-nederlands-wettelijk" : "")}
                    label="Conform Nederlands Wettelijk"
                  />
                </div>
                <div className="flex gap-[8px] w-full">
                  <input
                    type="text"
                    value={unloadingTime}
                    onChange={(e) => setUnloadingTime(e.target.value)}
                    placeholder="0"
                    className="flex-1 px-[12px] py-[8px] font-sans font-normal leading-[20px] text-[#101828] text-[14px] bg-white border border-[#d0d5dd] rounded-[6px] outline-none"
                  />
                  <select
                    value={unloadingTimeUnit}
                    onChange={(e) => setUnloadingTimeUnit(e.target.value)}
                    className="px-[12px] py-[8px] font-sans font-normal leading-[20px] text-[#101828] text-[14px] bg-white border border-[#d0d5dd] rounded-[6px] outline-none"
                  >
                    <option value="uur">uur</option>
                    <option value="dag">dag</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Liggeld laden & lossen */}
            <div className="grid grid-cols-2 gap-[16px]">
              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
                <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Liggeld laden</p>
                <select className="w-full px-[12px] py-[8px] font-sans font-normal leading-[20px] text-[#101828] text-[14px] bg-white border border-[#d0d5dd] rounded-[6px] outline-none">
                  <option>Niet van toepassing</option>
                </select>
              </div>

              <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
                <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Liggeld lossen</p>
                <select className="w-full px-[12px] py-[8px] font-sans font-normal leading-[20px] text-[#101828] text-[14px] bg-white border border-[#d0d5dd] rounded-[6px] outline-none">
                  <option>Niet van toepassing</option>
                </select>
              </div>
            </div>

            {/* Opmerkingen */}
            <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
              <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Opmerkingen</p>
              <textarea
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
                placeholder="Extra informatie en bijzonderheden..."
                rows={3}
                className="w-full px-[14px] py-[12px] font-sans font-normal leading-[20px] text-[#101828] text-[14px] bg-white border border-[#d0d5dd] rounded-[6px] outline-none resize-none"
              />
            </div>
          </div>

          {/* Footer */}
          <div className="h-px relative shrink-0 w-full bg-[#eaecf0]" />
          <div className="px-[24px] py-[20px]">
            <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full">
              <button
                onClick={onClose}
                className="bg-white relative rounded-[6px] shrink-0"
              >
                <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
                  <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Annuleren</p>
                </div>
                <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              </button>
              <button
                onClick={handleSubmit}
                className="bg-[#1567a4] relative rounded-[6px] shrink-0"
              >
                <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
                  <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Toepassen</p>
                </div>
                <div aria-hidden="true" className="absolute border border-[#1567a4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}