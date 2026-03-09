import svgPaths from "./svg-k3lkdbz47k";
// import imgAvatar from "figma:asset/a2737d3b5b234fc04041650cb9f114889c6859da.png";
const imgAvatar = "";

function TextAndBadge() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Agnes</p>
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Motorschip</p>
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px opacity-25 relative" data-name="Text and supporting text">
      <TextAndSupportingText1 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[8px] items-start pl-[24px] pr-[16px] py-[16px] relative size-full">
        <TextAndSupportingText />
      </div>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Aangeboden</p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[192px] relative shrink-0 w-[192px] z-[7]" data-name="Column">
      <TableCell />
      <div className="-translate-y-1/2 absolute content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] right-[16px] rounded-[6px] top-1/2" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="check">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
            <div className="absolute inset-[-9.09%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.8333">
                <path d={svgPaths.p38669a00} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
        <TextPadding />
      </div>
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] opacity-25 relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Market Freight B.V.</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Freyd Hanschmarke</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[184px] relative shrink-0 w-[184px] z-[6]" data-name="Column">
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] opacity-25 relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="overflow-hidden relative shrink-0 text-[#101828] text-ellipsis">Europahaven (Maasvlakte)</p>
      <p className="relative shrink-0 text-[#475467]">Vanaf Ma 13 Jan, 2025</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[192px] relative shrink-0 w-[224px] z-[5]" data-name="Column">
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[88px] relative shrink-0 w-[112px] z-[4]" data-name="Column">
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px opacity-25 overflow-hidden relative text-[#101828] text-[14px] text-ellipsis text-right whitespace-nowrap">
              <span className="leading-[20px]">{`2.835 `}</span>
              <span className="font-['Codec_Pro:Regular',sans-serif] leading-[20px] not-italic">mt</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-w-[88px] relative shrink-0 w-[112px] z-[3]" data-name="Column">
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px opacity-25 overflow-hidden relative text-[#101828] text-[#475467] text-[14px] text-ellipsis text-right whitespace-nowrap">
              <span className="leading-[20px]">4.200 m</span>
              <span className="leading-[20px] text-[9.030000000000001px]">3</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] min-h-px min-w-px opacity-25 relative text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="min-w-full overflow-hidden relative shrink-0 text-[#101828] text-ellipsis w-[min-content]">Automatische feed</p>
      <p className="relative shrink-0 text-[#475467]">Do 5 Feb 12:44</p>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative z-[2]" data-name="Column">
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="bg-[#f2f4f7] opacity-25 relative rounded-[9999px] shrink-0 size-[32px]" data-name="Featured icon">
              <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]" data-name="inbox-01">
                <div className="absolute inset-[16.67%_8.33%]" data-name="Icon">
                  <div className="absolute inset-[-6.25%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12.0001">
                      <path d={svgPaths.p29cbab00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <TextAndSupportingText4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center opacity-25 relative shrink-0">
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475467] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">45%</p>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex gap-[8px] h-[72px] items-center pl-[24px] pr-[16px] py-[16px] relative shrink-0" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[6px] items-center opacity-25 relative shrink-0 w-[12px]" data-name="Laadplanning/Progress">
        <div className="relative shrink-0 size-[12px]" data-name="Line">
          <div className="absolute inset-[-8.33%_-8.33%_-5.89%_41.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 13.7066">
              <path d={svgPaths.p16eb1180} id="Line" stroke="var(--stroke-0, #258DD2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Frame />
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Column">
      <TableCell1 />
    </div>
  );
}

function TextAndBadge1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Aar</p>
    </div>
  );
}

function TextAndSupportingText6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge1 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Motorschip</p>
    </div>
  );
}

function TextAndSupportingText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndSupportingText6 />
    </div>
  );
}

function TextAndSupportingText7() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#101828]">Agaat</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Motorschip</p>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#145990] text-[14px] whitespace-nowrap">Openen</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[8px] items-start pl-[24px] pr-[16px] py-[16px] relative size-full">
        <TextAndSupportingText7 />
        <div className="-translate-y-1/2 absolute bg-white right-[16px] rounded-[6px] top-1/2" data-name="Buttons/Button">
          <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
            <TextPadding1 />
          </div>
          <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function TextAndBadge2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Adsowi</p>
    </div>
  );
}

function TextAndSupportingText9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge2 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Motorschip</p>
    </div>
  );
}

function TextAndSupportingText8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndSupportingText9 />
    </div>
  );
}

function TextAndBadge3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Antoine V</p>
    </div>
  );
}

function TextAndSupportingText11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge3 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Motorschip</p>
    </div>
  );
}

function TextAndSupportingText10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndSupportingText11 />
    </div>
  );
}

function TextAndBadge4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Agnes</p>
    </div>
  );
}

function TextAndSupportingText13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge4 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Motorschip</p>
    </div>
  );
}

function TextAndSupportingText12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndSupportingText13 />
    </div>
  );
}

function TextAndBadge5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Amber</p>
    </div>
  );
}

function TextAndSupportingText15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge5 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Motorschip</p>
    </div>
  );
}

function TextAndSupportingText14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndSupportingText15 />
    </div>
  );
}

function TextAndBadge6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Ambulant</p>
    </div>
  );
}

function TextAndSupportingText17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge6 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Motorschip</p>
    </div>
  );
}

function TextAndSupportingText16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndSupportingText17 />
    </div>
  );
}

function TextAndBadge7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Amer</p>
    </div>
  );
}

function TextAndSupportingText19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge7 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Duwbak</p>
    </div>
  );
}

function TextAndSupportingText18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndSupportingText19 />
    </div>
  );
}

function TextAndBadge8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Annemarie</p>
    </div>
  );
}

function TextAndSupportingText21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge8 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Motorschip</p>
    </div>
  );
}

function TextAndSupportingText20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndSupportingText21 />
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[192px] relative shrink-0 w-[192px] z-[8]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[24px] pr-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Naam</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] items-start pl-[24px] pr-[16px] py-[16px] relative size-full">
          <TextAndSupportingText5 />
        </div>
      </div>
      <TableCell2 />
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] items-start pl-[24px] pr-[16px] py-[16px] relative size-full">
          <TextAndSupportingText8 />
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] items-start pl-[24px] pr-[16px] py-[16px] relative size-full">
          <TextAndSupportingText10 />
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] items-start pl-[24px] pr-[16px] py-[16px] relative size-full">
          <TextAndSupportingText12 />
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
          <TextAndSupportingText14 />
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] items-start pl-[24px] pr-[16px] py-[16px] relative size-full">
          <TextAndSupportingText16 />
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] items-start pl-[24px] pr-[16px] py-[16px] relative size-full">
          <TextAndSupportingText18 />
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] items-start pl-[24px] pr-[16px] py-[16px] relative size-full">
          <TextAndSupportingText20 />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText22() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Andermans B.V.</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Cees Arendsen</p>
    </div>
  );
}

function TextAndSupportingText23() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Market Freight B.V.</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">H.J. Duivenvoort</p>
    </div>
  );
}

function TextAndSupportingText24() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Buiten Onszelf N.V.</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Lisa Aelbrechtse</p>
    </div>
  );
}

function TextAndSupportingText25() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Market Freight B.V.</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Freyd Hanschmarke</p>
    </div>
  );
}

function TextAndSupportingText26() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Cargo Solutions Ltd.</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Miles Thompson</p>
    </div>
  );
}

function TextAndSupportingText27() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Eco Transport GmbH</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Anna Müller</p>
    </div>
  );
}

function TextAndSupportingText28() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Global Shipping Inc.</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Raj Patel</p>
    </div>
  );
}

function TextAndSupportingText29() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Trans Logistics Group</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Nina Chen</p>
    </div>
  );
}

function Column8() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[184px] relative shrink-0 z-[7]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Relatie</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText22 />
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText23 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText24 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Rederij de Jong</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText25 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText26 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText27 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText28 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText29 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText30() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="overflow-hidden relative shrink-0 text-[#101828] text-ellipsis">Europahaven (Maasvlakte)</p>
      <p className="relative shrink-0 text-[#475467]">Vanaf Ma 31 Dec, 2025</p>
    </div>
  );
}

function TextAndSupportingText31() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Europahaven (Maasvlakte)</p>
      <p className="relative shrink-0 text-[#475467]">Vanaf Ma 13 Jan, 2025</p>
    </div>
  );
}

function TextAndSupportingText32() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="overflow-hidden relative shrink-0 text-[#101828] text-ellipsis">Europahaven (Maasvlakte)</p>
      <p className="relative shrink-0 text-[#475467]">Vanaf Ma 13 Jan, 2025</p>
    </div>
  );
}

function TextAndSupportingText33() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="overflow-hidden relative shrink-0 text-[#101828] text-ellipsis">Europahaven (Maasvlakte)</p>
      <p className="relative shrink-0 text-[#475467]">Vanaf Ma 13 Jan, 2025</p>
    </div>
  );
}

function TextAndSupportingText34() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="overflow-hidden relative shrink-0 text-[#101828] text-ellipsis">Europahaven (Maasvlakte)</p>
      <p className="relative shrink-0 text-[#475467]">Vanaf Ma 13 Jan, 2025</p>
    </div>
  );
}

function TextAndSupportingText35() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="overflow-hidden relative shrink-0 text-[#101828] text-ellipsis">Europahaven (Maasvlakte)</p>
      <p className="relative shrink-0 text-[#475467]">Vanaf Ma 13 Jan, 2025</p>
    </div>
  );
}

function TextAndSupportingText36() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="overflow-hidden relative shrink-0 text-[#101828] text-ellipsis">Europahaven (Maasvlakte)</p>
      <p className="relative shrink-0 text-[#475467]">Vanaf Ma 13 Jan, 2025</p>
    </div>
  );
}

function TextAndSupportingText37() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="overflow-hidden relative shrink-0 text-[#101828] text-ellipsis">Europahaven (Maasvlakte)</p>
      <p className="relative shrink-0 text-[#475467]">Vanaf Ma 13 Jan, 2025</p>
    </div>
  );
}

function TextAndSupportingText38() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="overflow-hidden relative shrink-0 text-[#101828] text-ellipsis">Europahaven (Maasvlakte)</p>
      <p className="relative shrink-0 text-[#475467]">Vanaf Ma 13 Jan, 2025</p>
    </div>
  );
}

function Column9() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[192px] relative shrink-0 w-[224px] z-[6]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Locatie</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText30 />
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText31 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText32 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText33 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText34 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText35 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText36 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText37 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText38 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Column10() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[88px] relative shrink-0 w-[112px] z-[4]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Groottonnage</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] text-right">3.519 mt</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-right whitespace-nowrap">2.985 mt</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[14px] text-ellipsis text-right whitespace-nowrap">
              <span className="leading-[20px]">{`3.555 `}</span>
              <span className="font-['Codec_Pro:Regular',sans-serif] leading-[20px] not-italic">mt</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[14px] text-ellipsis text-right whitespace-nowrap">
              <span className="leading-[20px]">{`3.795 `}</span>
              <span className="font-['Codec_Pro:Regular',sans-serif] leading-[20px] not-italic">mt</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[14px] text-ellipsis text-right whitespace-nowrap">
              <span className="leading-[20px]">{`2.835 `}</span>
              <span className="font-['Codec_Pro:Regular',sans-serif] leading-[20px] not-italic">mt</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[14px] text-ellipsis text-right whitespace-nowrap">
              <span className="leading-[20px]">{`3.795 `}</span>
              <span className="font-['Codec_Pro:Regular',sans-serif] leading-[20px] not-italic">mt</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[14px] text-ellipsis text-right whitespace-nowrap">
              <span className="leading-[20px]">{`2.929 `}</span>
              <span className="font-['Codec_Pro:Regular',sans-serif] leading-[20px] not-italic">mt</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[14px] text-ellipsis text-right whitespace-nowrap">
              <span className="leading-[20px]">{`3.519 `}</span>
              <span className="font-['Codec_Pro:Regular',sans-serif] leading-[20px] not-italic">mt</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[14px] text-ellipsis text-right whitespace-nowrap">
              <span className="leading-[20px]">{`2.958 `}</span>
              <span className="font-['Codec_Pro:Regular',sans-serif] leading-[20px] not-italic">mt</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center min-w-[88px] relative shrink-0 w-[112px] z-[3]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Inhoud</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[14px] text-ellipsis text-right whitespace-nowrap">
              <span className="leading-[20px]">4.200 m</span>
              <span className="leading-[20px] text-[9.030000000000001px]">3</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#101828] text-[0px] text-right whitespace-nowrap">
              <span className="leading-[20px] text-[14px]">4.200 m</span>
              <span className="leading-[20px] text-[9.030000000000001px]">3</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[14px] text-ellipsis text-right whitespace-nowrap">
              <span className="leading-[20px]">4.200 m</span>
              <span className="leading-[20px] text-[9.030000000000001px]">3</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[#475467] text-[14px] text-ellipsis text-right whitespace-nowrap">
              <span className="leading-[20px]">4.200 m</span>
              <span className="leading-[20px] text-[9.030000000000001px]">3</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[#475467] text-[14px] text-ellipsis text-right whitespace-nowrap">
              <span className="leading-[20px]">4.200 m</span>
              <span className="leading-[20px] text-[9.030000000000001px]">3</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[#475467] text-[14px] text-ellipsis text-right whitespace-nowrap">
              <span className="leading-[20px]">4.200 m</span>
              <span className="leading-[20px] text-[9.030000000000001px]">3</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[#475467] text-[14px] text-ellipsis text-right whitespace-nowrap">
              <span className="leading-[20px]">4.200 m</span>
              <span className="leading-[20px] text-[9.030000000000001px]">3</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[#475467] text-[14px] text-ellipsis text-right whitespace-nowrap">
              <span className="leading-[20px]">4.200 m</span>
              <span className="leading-[20px] text-[9.030000000000001px]">3</span>
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[#475467] text-[14px] text-ellipsis text-right whitespace-nowrap">
              <span className="leading-[20px]">4.200 m</span>
              <span className="leading-[20px] text-[9.030000000000001px]">3</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] min-h-px min-w-px relative text-[14px]" data-name="Text and supporting text">
      <p className="min-w-full relative shrink-0 text-[#101828] w-[min-content]">Automatische feed</p>
      <p className="relative shrink-0 text-[#475467] whitespace-nowrap">Do 5 Feb 12:44</p>
    </div>
  );
}

function TextAndSupportingText40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] min-h-px min-w-px relative text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="min-w-full overflow-hidden relative shrink-0 text-[#101828] text-ellipsis w-[min-content]">Automatische feed</p>
      <p className="relative shrink-0 text-[#475467]">Do 5 Feb 12:44</p>
    </div>
  );
}

function TextAndSupportingText41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] min-h-px min-w-px relative text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="min-w-full overflow-hidden relative shrink-0 text-[#101828] text-ellipsis w-[min-content]">Automatische feed</p>
      <p className="relative shrink-0 text-[#475467]">Do 5 Feb 12:44</p>
    </div>
  );
}

function ContrastBorder() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText42() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Pelger de Jong</p>
      <p className="relative shrink-0 text-[#475467]">Do 5 Feb 13:24</p>
    </div>
  );
}

function TextAndSupportingText43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] min-h-px min-w-px relative text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="min-w-full overflow-hidden relative shrink-0 text-[#101828] text-ellipsis w-[min-content]">Automatische feed</p>
      <p className="relative shrink-0 text-[#475467]">Do 5 Feb 12:44</p>
    </div>
  );
}

function TextAndSupportingText44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] min-h-px min-w-px relative text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="min-w-full overflow-hidden relative shrink-0 text-[#101828] text-ellipsis w-[min-content]">Automatische feed</p>
      <p className="relative shrink-0 text-[#475467]">Do 5 Feb 12:44</p>
    </div>
  );
}

function TextAndSupportingText45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] min-h-px min-w-px relative text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="min-w-full overflow-hidden relative shrink-0 text-[#101828] text-ellipsis w-[min-content]">Automatische feed</p>
      <p className="relative shrink-0 text-[#475467]">Do 5 Feb 12:44</p>
    </div>
  );
}

function TextAndSupportingText46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] min-h-px min-w-px relative text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="min-w-full overflow-hidden relative shrink-0 text-[#101828] text-ellipsis w-[min-content]">Automatische feed</p>
      <p className="relative shrink-0 text-[#475467]">Do 5 Feb 12:44</p>
    </div>
  );
}

function TextAndSupportingText47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] min-h-px min-w-px relative text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="min-w-full overflow-hidden relative shrink-0 text-[#101828] text-ellipsis w-[min-content]">Automatische feed</p>
      <p className="relative shrink-0 text-[#475467]">Do 5 Feb 12:44</p>
    </div>
  );
}

function Column12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative z-[2]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Bron</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="bg-[#f2f4f7] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Featured icon">
              <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]" data-name="inbox-01">
                <div className="absolute inset-[16.67%_8.33%]" data-name="Icon">
                  <div className="absolute inset-[-6.25%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12.0001">
                      <path d={svgPaths.p29cbab00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <TextAndSupportingText39 />
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="bg-[#f2f4f7] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Featured icon">
              <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]" data-name="inbox-01">
                <div className="absolute inset-[16.67%_8.33%]" data-name="Icon">
                  <div className="absolute inset-[-6.25%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12.0001">
                      <path d={svgPaths.p29cbab00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <TextAndSupportingText40 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="bg-[#f2f4f7] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Featured icon">
              <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]" data-name="inbox-01">
                <div className="absolute inset-[16.67%_8.33%]" data-name="Icon">
                  <div className="absolute inset-[-6.25%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12.0001">
                      <path d={svgPaths.p29cbab00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <TextAndSupportingText41 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
                <div className="absolute bg-[#cfcbdc] inset-0 rounded-[9999px]" />
                <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgAvatar} />
              </div>
              <ContrastBorder />
            </div>
            <TextAndSupportingText42 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="bg-[#f2f4f7] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Featured icon">
              <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]" data-name="inbox-01">
                <div className="absolute inset-[16.67%_8.33%]" data-name="Icon">
                  <div className="absolute inset-[-6.25%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12.0001">
                      <path d={svgPaths.p29cbab00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <TextAndSupportingText43 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="bg-[#f2f4f7] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Featured icon">
              <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]" data-name="inbox-01">
                <div className="absolute inset-[16.67%_8.33%]" data-name="Icon">
                  <div className="absolute inset-[-6.25%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12.0001">
                      <path d={svgPaths.p29cbab00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <TextAndSupportingText44 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="bg-[#f2f4f7] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Featured icon">
              <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]" data-name="inbox-01">
                <div className="absolute inset-[16.67%_8.33%]" data-name="Icon">
                  <div className="absolute inset-[-6.25%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12.0001">
                      <path d={svgPaths.p29cbab00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <TextAndSupportingText45 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="bg-[#f2f4f7] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Featured icon">
              <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]" data-name="inbox-01">
                <div className="absolute inset-[16.67%_8.33%]" data-name="Icon">
                  <div className="absolute inset-[-6.25%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12.0001">
                      <path d={svgPaths.p29cbab00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <TextAndSupportingText46 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="bg-[#f2f4f7] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Featured icon">
              <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]" data-name="inbox-01">
                <div className="absolute inset-[16.67%_8.33%]" data-name="Icon">
                  <div className="absolute inset-[-6.25%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 12.0001">
                      <path d={svgPaths.p29cbab00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <TextAndSupportingText47 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475467] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">90%</p>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[72px] items-center pl-[24px] pr-[16px] py-[16px] relative shrink-0" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[12px]" data-name="Laadplanning/Progress">
        <div className="relative shrink-0 size-[12px]" data-name="Line">
          <div className="absolute inset-[-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.p2a89f000} id="Line" stroke="var(--stroke-0, #079455)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475467] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">75%</p>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex gap-[8px] h-[72px] items-center pl-[24px] pr-[16px] py-[16px] relative shrink-0" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[12px]" data-name="Laadplanning/Progress">
        <div className="relative shrink-0 size-[12px]" data-name="Line">
          <div className="absolute inset-[-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.pbfd93c0} id="Line" stroke="var(--stroke-0, #079455)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475467] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">60%</p>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[72px] items-center pl-[24px] pr-[16px] py-[16px] relative shrink-0" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[12px]" data-name="Laadplanning/Progress">
        <div className="relative shrink-0 size-[12px]" data-name="Line">
          <div className="absolute inset-[-8.33%_-8.33%_-8.33%_12.28%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5268 14">
              <path d={svgPaths.p22cfa080} id="Line" stroke="var(--stroke-0, #258DD2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475467] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">60%</p>
      </div>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[72px] items-center pl-[24px] pr-[16px] py-[16px] relative shrink-0" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[12px]" data-name="Laadplanning/Progress">
        <div className="relative shrink-0 size-[12px]" data-name="Line">
          <div className="absolute inset-[-8.33%_-8.33%_-8.33%_12.28%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5268 14">
              <path d={svgPaths.p22cfa080} id="Line" stroke="var(--stroke-0, #258DD2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475467] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">45%</p>
      </div>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[72px] items-center pl-[24px] pr-[16px] py-[16px] relative shrink-0" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[12px]" data-name="Laadplanning/Progress">
        <div className="relative shrink-0 size-[12px]" data-name="Line">
          <div className="absolute inset-[-8.33%_-8.33%_-5.89%_41.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00002 13.7066">
              <path d={svgPaths.p16eb1180} id="Line" stroke="var(--stroke-0, #258DD2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475467] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">40%</p>
      </div>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[72px] items-center pl-[24px] pr-[16px] py-[16px] relative shrink-0" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[12px]" data-name="Laadplanning/Progress">
        <div className="relative shrink-0 size-[12px]" data-name="Line">
          <div className="absolute inset-[-8.33%_-8.33%_1.22%_41.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12.8542">
              <path d={svgPaths.p24f55f80} id="Line" stroke="var(--stroke-0, #258DD2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475467] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">20%</p>
      </div>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[72px] items-center pl-[24px] pr-[16px] py-[16px] relative shrink-0" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[12px]" data-name="Laadplanning/Progress">
        <div className="relative shrink-0 size-[12px]" data-name="Line">
          <div className="absolute inset-[-8.33%_-5.89%_57.12%_41.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.70661 6.14617">
              <path d={svgPaths.p10c29f00} id="Line" stroke="var(--stroke-0, #258DD2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475467] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">20%</p>
      </div>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[72px] items-center pl-[24px] pr-[16px] py-[16px] relative shrink-0" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[12px]" data-name="Laadplanning/Progress">
        <div className="relative shrink-0 size-[12px]" data-name="Line">
          <div className="absolute inset-[-8.33%_-5.89%_57.12%_41.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.70661 6.14617">
              <path d={svgPaths.p10c29f00} id="Line" stroke="var(--stroke-0, #258DD2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#475467] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[20px]">20%</p>
      </div>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[72px] items-center pl-[24px] pr-[16px] py-[16px] relative shrink-0" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-[12px]" data-name="Laadplanning/Progress">
        <div className="relative shrink-0 size-[12px]" data-name="Line">
          <div className="absolute inset-[-8.33%_-5.89%_57.12%_41.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.70661 6.14617">
              <path d={svgPaths.p10c29f00} id="Line" stroke="var(--stroke-0, #258DD2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <Frame9 />
    </div>
  );
}

function Column13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Column">
      <div className="content-stretch flex h-[44px] items-center pl-[16px] pr-[24px] py-[12px] relative shrink-0" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table header">
          <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Match</p>
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-down">
            <div className="absolute inset-[20.83%]" data-name="Icon">
              <div className="absolute inset-[-7.14%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
                  <path d={svgPaths.p1d836680} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

export default function MatchesTabelVaartuigen() {
  return (
    <div className="bg-white content-stretch flex isolate items-start relative size-full" data-name="Matches tabel/Vaartuigen">
      <div className="absolute content-stretch flex isolate items-start left-0 top-[332px] w-[1116px] z-[13]" data-name="Aangeboden vaartuig">
        <Column />
        <Column1 />
        <Column2 />
        <Column3 />
        <Column4 />
        <Column5 />
        <Column6 />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-258px)] size-[20px] top-[calc(50%-164px)] z-[12]" data-name="Cursor">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-[calc(50%-1px)] top-1/2 w-[14px]" data-name="Shape">
          <div className="absolute inset-[-8.59%_-16.96%_-21.09%_-16.96%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7499 20.75">
              <g filter="url(#filter0_d_1_16145)" id="Shape">
                <path clipRule="evenodd" d={svgPaths.pd15ef00} fill="var(--fill-0, white)" fillRule="evenodd" />
                <path clipRule="evenodd" d={svgPaths.pd15ef00} fillRule="evenodd" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.75" id="filter0_d_1_16145" width="18.7499" x="0" y="-5.96046e-08">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_16145" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_16145" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-[calc(50%+0.5px)] top-[calc(50%+3px)] w-[5px]" data-name="Lines">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 4">
            <path d={svgPaths.p2cc24780} fill="var(--fill-0, black)" id="Lines" />
          </svg>
        </div>
      </div>
      <Column7 />
      <Column8 />
      <Column9 />
      <Column10 />
      <Column11 />
      <Column12 />
      <Column13 />
    </div>
  );
}