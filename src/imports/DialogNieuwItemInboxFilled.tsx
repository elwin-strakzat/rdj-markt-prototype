import svgPaths from "./svg-hstiyx955m";
// import imgAvatar from "figma:asset/a2737d3b5b234fc04041650cb9f114889c6859da.png";
const imgAvatar = "";

function BackgroundOverlay() {
  return <div className="absolute bg-[#0c111d] inset-0 opacity-70" data-name="Background overlay" />;
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[26px] relative shrink-0 text-[#101828] text-[18px] w-full">Nieuw item toevoegen aan inbox</p>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex gap-[16px] items-start pt-[24px] px-[24px] relative w-full">
        <TextAndSupportingText />
      </div>
    </div>
  );
}

function PaddingBottom() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Padding bottom" />;
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">Agro Delta Groep</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content2 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-9.38%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
                  <path d={svgPaths.p1ddb9c00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Relatie</p>
      <Input />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">Jesper den Oud</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content3 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-9.38%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
                  <path d={svgPaths.p1ddb9c00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Contactpersoon (optioneel)</p>
      <Input1 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[12px] items-start relative shrink-0 w-full" data-name="Row">
      <button className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Input dropdown">
        <InputWithLabel />
      </button>
      <button className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Input dropdown">
        <InputWithLabel1 />
      </button>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[6px] rounded-tl-[6px] self-stretch" data-name="Text input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
          <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[14px] text-ellipsis text-left whitespace-nowrap">5000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-tl-[6px]" />
    </div>
  );
}

function AddOn() {
  return (
    <div className="content-stretch flex items-center px-[12px] py-[8px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-name="Add-on">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] text-left whitespace-nowrap">ton</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <TextInput />
      <AddOn />
    </div>
  );
}

function InputWithLabel2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Tonnage</p>
      <Input2 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal gap-[8px] items-center leading-[20px] min-h-px min-w-px relative text-[14px] text-left whitespace-nowrap" data-name="Content">
      <p className="relative shrink-0 text-[#101828]">Houtpellets</p>
      <p className="relative shrink-0 text-[#475467]">0571</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content4 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-9.38%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
                  <path d={svgPaths.p1ddb9c00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Ladingsoort</p>
      <Input3 />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[12px] items-start relative shrink-0 w-full" data-name="Row">
      <button className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[160px]" data-name="Input field">
        <InputWithLabel2 />
      </button>
      <button className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Input dropdown">
        <InputWithLabel3 />
      </button>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal gap-[8px] items-center leading-[20px] min-h-px min-w-px relative text-[14px] text-left whitespace-nowrap" data-name="Content">
      <p className="relative shrink-0 text-[#101828]">Naaldhoutpellets</p>
      <p className="relative shrink-0 text-[#475467]">1120</p>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content5 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Subsoort (optioneel)</p>
      <Input4 />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[6px] rounded-tl-[6px] self-stretch" data-name="Text input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
          <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[14px] text-ellipsis text-left whitespace-nowrap">0,05</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-tl-[6px]" />
    </div>
  );
}

function AddOn1() {
  return (
    <div className="content-stretch flex items-center px-[12px] py-[8px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-name="Add-on">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#475467] text-[0px] text-left whitespace-nowrap">
        <span className="leading-[20px] text-[14px]">ton/m</span>
        <span className="font-['Codec_Pro:Bold',sans-serif] leading-[20px] not-italic text-[9.030000000000001px]">3</span>
      </p>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <TextInput1 />
      <AddOn1 />
    </div>
  );
}

function InputWithLabel5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Soortelijk gewicht</p>
      <Input5 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[12px] items-start relative shrink-0 w-full" data-name="Row">
      <button className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Input dropdown">
        <InputWithLabel4 />
      </button>
      <button className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[160px]" data-name="Input field">
        <InputWithLabel5 />
      </button>
    </div>
  );
}

function Label() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="info-circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 14.6667">
              <path d={svgPaths.pbb03d00} id="Icon" stroke="var(--stroke-0, #1567A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-h-px min-w-px relative text-[#145990] text-[0px]">
        <span className="leading-[20px] text-[14px]">Benodigde inhoud: 5.000 m</span>
        <span className="font-['Codec_Pro:Regular',sans-serif] leading-[20px] not-italic text-[9.030000000000001px]">3</span>
      </p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Row">
      <Row3 />
      <Label />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">IJmuiden Buitenspuikanaal</p>
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content6 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-9.38%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
                  <path d={svgPaths.p1ddb9c00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Laadhaven</p>
      <Input6 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">Melden bij aankomst</p>
    </div>
  );
}

function Input7() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content7 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-9.38%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
                  <path d={svgPaths.p1ddb9c00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Laadtermijn (optioneel)</p>
      <Input7 />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[12px] items-start relative shrink-0 w-full" data-name="Row">
      <button className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Input dropdown">
        <InputWithLabel6 />
      </button>
      <button className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[270px]" data-name="Input dropdown">
        <InputWithLabel7 />
      </button>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">IJmuiden Buitenspuikanaal</p>
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content8 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-9.38%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
                  <path d={svgPaths.p1ddb9c00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel8() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Loshaven</p>
      <Input8 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">Melden bij aankomst</p>
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content9 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-9.38%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
                  <path d={svgPaths.p1ddb9c00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Lostermijn (optioneel)</p>
      <Input9 />
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[12px] items-start relative shrink-0 w-full" data-name="Row">
      <button className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Input dropdown">
        <InputWithLabel8 />
      </button>
      <button className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[270px]" data-name="Input dropdown">
        <InputWithLabel9 />
      </button>
    </div>
  );
}

function ContrastBorder() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
        <ContrastBorder />
      </div>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">Pelger de Jong</p>
    </div>
  );
}

function Input10() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content10 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
                  <path d={svgPaths.p1b1fa300} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel10() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Eigenaar (optioneel)</p>
      <Input10 />
    </div>
  );
}

function Star() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39488)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39488">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Fill=100%, Color=Yellow">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
              <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star />
      </div>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">1</p>
    </div>
  );
}

function Input11() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content11 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
                  <path d={svgPaths.p1b1fa300} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel11() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Prioriteit (optioneel)</p>
      <Input11 />
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[12px] items-start relative shrink-0 w-full" data-name="Row">
      <button className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Input dropdown">
        <InputWithLabel10 />
      </button>
      <button className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[270px]" data-name="Input dropdown">
        <InputWithLabel11 />
      </button>
    </div>
  );
}

function Content1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[24px] px-[24px] relative w-full">
        <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full" data-name="Horizontal tabs">
          <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center p-[4px] relative w-full">
              <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]" data-name="Tab button base">
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
                    <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Lading</p>
                  </div>
                </div>
              </div>
              <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[4px]" data-name="Tab button base">
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
                    <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#667085] text-[14px] whitespace-nowrap">Vaartuig</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Row />
        <Row1 />
        <Row2 />
        <Row4 />
        <Row5 />
        <Row6 />
      </div>
    </div>
  );
}

function DividerWrap() {
  return (
    <div className="h-[25px] relative shrink-0 w-full" data-name="Divider-wrap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 600 25">
        <g id="Divider-wrap">
          <path clipRule="evenodd" d="M600 1H0V0H600V1Z" fill="var(--fill-0, #EAECF0)" fillRule="evenodd" id="Divider" />
        </g>
      </svg>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Annuleren</p>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Toevoegen</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-h-px min-w-px relative" data-name="Actions">
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <TextPadding />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-[#1567a4] relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <TextPadding1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#1567a4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end pb-[24px] px-[24px] relative w-full">
          <Actions />
        </div>
      </div>
    </div>
  );
}

function ModalActions() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="_Modal actions">
      <DividerWrap />
      <Content12 />
    </div>
  );
}

function Modal() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center max-w-[600px] min-h-px min-w-px overflow-clip relative rounded-[10px] shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08),0px_8px_8px_-4px_rgba(16,24,40,0.03)]" data-name="Modal">
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="_Modal header">
        <Content />
        <div className="absolute content-stretch flex items-center justify-center overflow-clip p-[8px] right-[12px] rounded-[6px] size-[44px] top-[12px]" data-name="Button close X">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d="M13 1L1 13M1 1L13 13" id="Icon" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <PaddingBottom />
      </div>
      <Content1 />
      <ModalActions />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[26px] relative shrink-0 text-[#101828] text-[18px] w-full">Nieuw item toevoegen aan inbox</p>
    </div>
  );
}

function Content13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex gap-[16px] items-start pt-[24px] px-[24px] relative w-full">
        <TextAndSupportingText1 />
      </div>
    </div>
  );
}

function PaddingBottom1() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Padding bottom" />;
}

function InputWithLabel12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Type</p>
    </div>
  );
}

function InputDropdown1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input dropdown">
      <InputWithLabel12 />
    </div>
  );
}

function Check() {
  return <div className="absolute bg-white inset-[31.25%] rounded-[9999px]" data-name="Check" />;
}

function Input12() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0" data-name="Input">
      <div className="bg-[#1567a4] overflow-clip relative rounded-[9999px] shrink-0 size-[16px]" data-name="_Checkbox base">
        <Check />
      </div>
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Duwbak</p>
    </div>
  );
}

function Input13() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0" data-name="Input">
      <div className="relative rounded-[9999px] shrink-0 size-[16px]" data-name="_Checkbox base">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Motorschip</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <Input12 />
        <TextAndSupportingText2 />
      </div>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <Input13 />
        <TextAndSupportingText3 />
      </div>
    </div>
  );
}

function InputDropdown() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input dropdown">
      <InputDropdown1 />
      <List />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">Agro Delta Groep</p>
    </div>
  );
}

function Input14() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content15 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-9.38%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
                  <path d={svgPaths.p1ddb9c00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel13() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Relatie</p>
      <Input14 />
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">Jesper den Oud</p>
    </div>
  );
}

function Input15() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content16 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-9.38%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
                  <path d={svgPaths.p1ddb9c00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel14() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Contactpersoon (optioneel)</p>
      <Input15 />
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[12px] items-start relative shrink-0 w-full" data-name="Row">
      <button className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Input dropdown">
        <InputWithLabel13 />
      </button>
      <button className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Input dropdown">
        <InputWithLabel14 />
      </button>
    </div>
  );
}

function Content17() {
  return <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px" data-name="Content" />;
}

function Input16() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Content17 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel15() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Naam vaartuig *</p>
      <Input16 />
    </div>
  );
}

function Content18() {
  return <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px" data-name="Content" />;
}

function Input17() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Content18 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel16() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Huidige locatie</p>
      <Input17 />
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal h-[18px] leading-[20px] min-h-px min-w-px overflow-hidden relative text-[#667085] text-[14px] text-ellipsis text-left whitespace-nowrap">Selecteer een datum</p>
    </div>
  );
}

function Input18() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Content19 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel17() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Beschikbaar vanaf</p>
      <Input18 />
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[12px] items-start relative shrink-0 w-full" data-name="Row">
      <button className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Input dropdown">
        <InputWithLabel16 />
      </button>
      <button className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[270px]" data-name="Input dropdown">
        <InputWithLabel17 />
      </button>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[6px] rounded-tl-[6px] self-stretch" data-name="Text input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-tl-[6px]" />
    </div>
  );
}

function AddOn2() {
  return (
    <div className="content-stretch flex items-center pl-[14px] pr-[12px] py-[10px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-name="Add-on">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] text-left whitespace-nowrap">m</p>
    </div>
  );
}

function Input19() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <TextInput2 />
      <AddOn2 />
    </div>
  );
}

function InputWithLabel18() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Lengte</p>
      <Input19 />
    </div>
  );
}

function TextInput3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[6px] rounded-tl-[6px] self-stretch" data-name="Text input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-tl-[6px]" />
    </div>
  );
}

function AddOn3() {
  return (
    <div className="content-stretch flex items-center pl-[14px] pr-[12px] py-[10px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-name="Add-on">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] text-left whitespace-nowrap">m</p>
    </div>
  );
}

function Input20() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <TextInput3 />
      <AddOn3 />
    </div>
  );
}

function InputWithLabel19() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Breedte</p>
      <Input20 />
    </div>
  );
}

function TextInput4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[6px] rounded-tl-[6px] self-stretch" data-name="Text input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-tl-[6px]" />
    </div>
  );
}

function AddOn4() {
  return (
    <div className="content-stretch flex items-center pl-[14px] pr-[12px] py-[10px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-name="Add-on">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] text-left whitespace-nowrap">cm</p>
    </div>
  );
}

function Input21() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <TextInput4 />
      <AddOn4 />
    </div>
  );
}

function InputWithLabel20() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Diepgang</p>
      <Input21 />
    </div>
  );
}

function TextInput5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-bl-[6px] rounded-tl-[6px] self-stretch" data-name="Text input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] size-full" />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-bl-[6px] rounded-tl-[6px]" />
    </div>
  );
}

function AddOn5() {
  return (
    <div className="content-stretch flex items-center pl-[14px] pr-[12px] py-[10px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-name="Add-on">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] text-left whitespace-nowrap">cm</p>
    </div>
  );
}

function Input22() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <TextInput5 />
      <AddOn5 />
    </div>
  );
}

function InputWithLabel21() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Kruiphoogte</p>
      <Input22 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[12px] items-end relative shrink-0 w-full">
      <button className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative" data-name="Input field">
        <InputWithLabel18 />
      </button>
      <button className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative" data-name="Input field">
        <InputWithLabel19 />
      </button>
      <button className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative" data-name="Input field">
        <InputWithLabel20 />
      </button>
      <button className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative" data-name="Input field">
        <InputWithLabel21 />
      </button>
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px overflow-hidden relative text-[#667085] text-[14px] text-ellipsis text-left whitespace-nowrap">Voeg bijzonderheden toe...</p>
    </div>
  );
}

function Input23() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Content20 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel22() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Bijzonderheden</p>
      <Input23 />
    </div>
  );
}

function ContrastBorder1() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function Content21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
        <ContrastBorder1 />
      </div>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">Pelger de Jong</p>
    </div>
  );
}

function Input24() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content21 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
                  <path d={svgPaths.p1b1fa300} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel23() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Eigenaar (optioneel)</p>
      <Input24 />
    </div>
  );
}

function Star1() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39488)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39488">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Fill=100%, Color=Yellow">
        <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
          <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
              <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
            </svg>
          </div>
        </div>
        <Star1 />
      </div>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">1</p>
    </div>
  );
}

function Input25() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content22 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
                  <path d={svgPaths.p1b1fa300} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel24() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Prioriteit (optioneel)</p>
      <Input25 />
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[12px] items-start relative shrink-0 w-full" data-name="Row">
      <button className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Input dropdown">
        <InputWithLabel23 />
      </button>
      <button className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[270px]" data-name="Input dropdown">
        <InputWithLabel24 />
      </button>
    </div>
  );
}

function Content14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[24px] px-[24px] relative w-full">
        <div className="bg-[#f9fafb] relative rounded-[8px] shrink-0 w-full" data-name="Horizontal tabs">
          <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center p-[4px] relative w-full">
              <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[4px]" data-name="Tab button base">
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
                    <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#667085] text-[14px] whitespace-nowrap">Lading</p>
                  </div>
                </div>
              </div>
              <div className="bg-white flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[4px] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.1),0px_1px_2px_0px_rgba(16,24,40,0.06)]" data-name="Tab button base">
                <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
                    <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Vaartuig</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <InputDropdown />
        <Row7 />
        <button className="content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input dropdown">
          <InputWithLabel15 />
        </button>
        <Row8 />
        <Frame />
        <button className="content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input dropdown">
          <InputWithLabel22 />
        </button>
        <Row9 />
      </div>
    </div>
  );
}

function DividerWrap1() {
  return (
    <div className="h-[25px] relative shrink-0 w-full" data-name="Divider-wrap">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 600 25">
        <g id="Divider-wrap">
          <path clipRule="evenodd" d="M600 1H0V0H600V1Z" fill="var(--fill-0, #EAECF0)" fillRule="evenodd" id="Divider" />
        </g>
      </svg>
    </div>
  );
}

function TextPadding2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Annuleren</p>
    </div>
  );
}

function TextPadding3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Toevoegen</p>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-h-px min-w-px relative" data-name="Actions">
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <TextPadding2 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-[#1567a4] relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <TextPadding3 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#1567a4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Content23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end pb-[24px] px-[24px] relative w-full">
          <Actions1 />
        </div>
      </div>
    </div>
  );
}

function ModalActions1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="_Modal actions">
      <DividerWrap1 />
      <Content23 />
    </div>
  );
}

function Modal1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center max-w-[600px] min-h-px min-w-px overflow-clip relative rounded-[10px] shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08),0px_8px_8px_-4px_rgba(16,24,40,0.03)]" data-name="Modal">
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="_Modal header">
        <Content13 />
        <div className="absolute content-stretch flex items-center justify-center overflow-clip p-[8px] right-[12px] rounded-[6px] size-[44px] top-[12px]" data-name="Button close X">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <path d="M13 1L1 13M1 1L13 13" id="Icon" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <PaddingBottom1 />
      </div>
      <Content14 />
      <ModalActions1 />
    </div>
  );
}

export default function DialogNieuwItemInboxFilled() {
  return (
    <div className="bg-white content-stretch flex gap-[100px] items-center justify-center relative size-full" data-name="Dialog - Nieuw item inbox - Filled">
      <BackgroundOverlay />
      <Modal />
      <Modal1 />
    </div>
  );
}