import svgPaths from "./svg-5yigdc067t";
// import imgAvatar from "figma:asset/a2737d3b5b234fc04041650cb9f114889c6859da.png";
const imgAvatar = "";

function Group() {
  return (
    <div className="absolute h-[32px] left-[9.24px] top-0 w-[14.083px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0829 32">
        <g id="Group 1">
          <path d={svgPaths.p1fd1d0f0} fill="var(--fill-0, #1567A4)" id="Vector" />
          <path d={svgPaths.p2140380} fill="var(--fill-0, #1567A4)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute left-0 overflow-clip size-[32px] top-0" data-name="Logo">
      <Group />
    </div>
  );
}

function Content1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Content">
      <Logo />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex flex-col items-start px-[20px] relative w-full">
        <div className="content-stretch flex items-start relative shrink-0" data-name="Logomark">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Item">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-[40px]" data-name="_Nav item button">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="container">
          <div className="absolute inset-[8.93%_12.5%]" data-name="Icon">
            <div className="absolute inset-[-5.07%_-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0007 21.7121">
                <path d={svgPaths.p7ea7b00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#344054] text-[12px] whitespace-nowrap">Lading</p>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Item">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-[40px]" data-name="_Nav item button">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="anchor">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                <path d={svgPaths.p22d4a480} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#344054] text-[12px] whitespace-nowrap">Vloot</p>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0" data-name="_Nav item button">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="clipboard">
          <div className="absolute inset-[8.33%_16.67%]" data-name="Icon">
            <div className="absolute inset-[-5%_-6.25%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0002 22">
                <path d={svgPaths.p20684dc0} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#344054] text-[12px] whitespace-nowrap">Planning</p>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Item">
      <div className="bg-[#e3effb] content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-[40px]" data-name="_Nav item button">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="scales-01">
          <div className="absolute inset-[12.5%_8.33%]" data-name="Icon">
            <div className="absolute inset-[-5.56%_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0001 20">
                <path d={svgPaths.pca96c80} id="Icon" stroke="var(--stroke-0, #1567A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#344054] text-[12px] whitespace-nowrap">Markt</p>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Item">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-[40px]" data-name="_Nav item button">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="box">
          <div className="absolute inset-[12.5%_8.33%]" data-name="Icon">
            <div className="absolute inset-[-5.56%_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
                <path d={svgPaths.p3e829c00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#344054] text-[12px] whitespace-nowrap">Backoffice</p>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Item">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-[40px]" data-name="_Nav item button">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="users-01">
          <div className="absolute inset-[12.5%_8.33%]" data-name="Icon">
            <div className="absolute inset-[-5.56%_-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
                <path d={svgPaths.p364ae300} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#344054] text-[12px] whitespace-nowrap">Relaties</p>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Navigation">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[16px] relative w-full">
          <Item />
          <Item1 />
          <Item2 />
          <Item3 />
          <Item4 />
          <Item5 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] relative shrink-0 w-full" data-name="Navigation">
      <Header />
      <Navigation1 />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Item">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-[40px]" data-name="_Nav item button">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="settings-01">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                <g id="Icon">
                  <path d={svgPaths.p2acf2900} stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p218c3700} stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center pb-[24px] px-[16px] relative w-full">
          <Item6 />
          <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative" data-name="Content">
      <Navigation />
      <Footer />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-[320px] relative" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[#101828] text-[30px] w-full">Inbox</p>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Toevoegen</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <div className="bg-[#1567a4] relative rounded-[6px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus">
            <div className="absolute inset-[20.83%]" data-name="Icon">
              <div className="absolute inset-[-7.14%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                  <path d={svgPaths.p1b67fa00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
          <TextPadding />
        </div>
        <div aria-hidden="true" className="absolute border border-[#1567a4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-start flex flex-wrap gap-[20px_16px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText />
      <Actions />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Page header">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Tabs">
      <div className="content-stretch flex h-[32px] items-center justify-center pb-[12px] px-[4px] relative shrink-0" data-name="Tab button base">
        <div aria-hidden="true" className="absolute border-[#1567a4] border-b-2 border-solid inset-0 pointer-events-none" />
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#145990] text-[14px] whitespace-nowrap">Ladingen</p>
      </div>
      <div className="content-stretch flex h-[32px] items-center justify-center pb-[12px] px-[4px] relative shrink-0" data-name="Tab button base">
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#667085] text-[14px] whitespace-nowrap">Vaartuigen</p>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Tabs">
      <div className="relative shrink-0 w-full" data-name="Horizontal tabs">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
          <Tabs1 />
        </div>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Header section">
      <Container />
      <Tabs />
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Te beoordelen</p>
    </div>
  );
}

function TextPadding2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Relatie</p>
    </div>
  );
}

function TextPadding3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Laadregio</p>
    </div>
  );
}

function TextPadding4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Losregio</p>
    </div>
  );
}

function TextPadding5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">
        <span className="leading-[20px]">Start laden: 1</span>
        <span className="leading-[20px]">3</span>
        <span className="leading-[20px]">{` `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic">Jan</span>
        <span className="leading-[20px]">{` 202`}</span>
        <span className="leading-[20px]">6</span>
        <span className="leading-[20px]">{` en eerder`}</span>
      </p>
    </div>
  );
}

function Datepicker() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Datepicker">
      <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" data-name="Date picker dropdown">
        <div className="bg-white relative rounded-[6px] shrink-0" data-name="Buttons/Button">
          <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="calendar">
              <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
                <div className="absolute inset-[-5%_-5.56%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 18.3333">
                    <path d={svgPaths.p16594900} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
            </div>
            <TextPadding5 />
          </div>
          <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        </div>
      </button>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <TextPadding1 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
                  <path d={svgPaths.p1b1fa300} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <TextPadding2 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
                  <path d={svgPaths.p1b1fa300} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <TextPadding3 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
                  <path d={svgPaths.p1b1fa300} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <TextPadding4 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
              <div className="absolute inset-[-16.67%_-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
                  <path d={svgPaths.p1b1fa300} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <Datepicker />
    </div>
  );
}

function TextPadding6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#145990] text-[14px] whitespace-nowrap">Filter</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">Geen groepering</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content3 />
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

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input />
    </div>
  );
}

function PageDropdown() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Page dropdown">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Groeperen:</p>
      <button className="content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0 w-[160px]" data-name="Input dropdown">
        <InputWithLabel />
      </button>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="search-lg">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
              <path d={svgPaths.p3190da80} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal h-[18px] leading-[20px] min-h-px min-w-px overflow-hidden relative text-[#667085] text-[14px] text-ellipsis text-left whitespace-nowrap">Zoeken</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[14px] py-[8px] relative size-full">
          <Content4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input1 />
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-h-px min-w-px relative" data-name="Actions">
      <PageDropdown />
      <div className="relative rounded-[6px] shrink-0" data-name="Button group">
        <div className="content-stretch flex isolate items-start overflow-clip relative rounded-[inherit]">
          <div className="bg-[#f2f8fd] content-stretch flex items-center justify-center min-h-[40px] px-[12px] py-[8px] relative shrink-0 z-[9]" data-name="_Button group base">
            <div aria-hidden="true" className="absolute border-[#d0d5dd] border-r border-solid inset-[0_-0.5px_0_0] pointer-events-none" />
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="rows-03">
              <div className="absolute inset-[12.5%]" data-name="Icon">
                <div className="absolute inset-[-5.56%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                    <path d={svgPaths.p1a8a4a40} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center min-h-[40px] px-[12px] py-[8px] relative shrink-0 z-[8]" data-name="_Button group base">
            <div aria-hidden="true" className="absolute border-[#d0d5dd] border-r border-solid inset-[0_-0.5px_0_0] pointer-events-none" />
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="map-01">
              <div className="absolute inset-[8.33%]" data-name="Icon">
                <div className="absolute inset-[-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
                    <path d={svgPaths.p17050b00} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <button className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[8px] items-start max-w-[320px] min-h-px min-w-px relative" data-name="Input dropdown">
        <InputWithLabel1 />
      </button>
    </div>
  );
}

function SectionHeaderWrap() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section header wrap">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[24px] relative w-full">
          <Actions1 />
          <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip py-[10px] relative rounded-[6px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus">
              <div className="absolute inset-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-7.14%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                    <path d={svgPaths.p1b67fa00} id="Icon" stroke="var(--stroke-0, #145990)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
            </div>
            <TextPadding6 />
          </div>
          <Actions2 />
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">50</p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content5 />
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

function InputWithLabel2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input2 />
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Amount">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Regels per pagina</p>
      <button className="content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0 w-[80px]" data-name="Input dropdown">
        <InputWithLabel2 />
      </button>
    </div>
  );
}

function ButtonWrap() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="Button wrap">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-left">
          <div className="absolute inset-[20.83%]" data-name="Icon">
            <div className="absolute inset-[-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p3ba8b580} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">1</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content6 />
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

function InputWithLabel3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input3 />
    </div>
  );
}

function PageDropdown1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Page dropdown">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Pagina</p>
      <button className="content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0 w-[64px]" data-name="Input dropdown">
        <InputWithLabel3 />
      </button>
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">van 10</p>
    </div>
  );
}

function ButtonWrap1() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-end relative shrink-0" data-name="Button wrap">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-right">
          <div className="absolute inset-[20.83%]" data-name="Icon">
            <div className="absolute inset-[-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p19aed710} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navigation2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Navigation">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#344054] text-[0px] text-[14px] whitespace-nowrap">
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic">1</span>
        <span className="font-['Inter:Regular',sans-serif] leading-[20px] not-italic">{` `}</span>
        <span className="leading-[20px]">tot</span>
        <span className="font-['Inter:Regular',sans-serif] leading-[20px] not-italic">{` `}</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic">50</span>
        <span className="font-['Inter:Regular',sans-serif] leading-[20px] not-italic">{` van `}</span>
        <span className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic">2.000</span>
      </p>
      <ButtonWrap />
      <PageDropdown1 />
      <ButtonWrap1 />
    </div>
  );
}

function Pagination() {
  return (
    <div className="relative shrink-0 w-full" data-name="Pagination">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <div className="content-stretch flex items-center justify-between pt-[24px] relative shrink-0 w-full" data-name="Pagination">
          <div aria-hidden="true" className="absolute border-[#eaecf0] border-solid border-t inset-[-1px_0_0_0] pointer-events-none" />
          <Amount />
          <Navigation2 />
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
              <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
                <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[72px] items-center p-[16px] relative shrink-0" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
          <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
            <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[72px] items-center p-[16px] relative shrink-0" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
          <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
            <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[72px] items-center p-[16px] relative shrink-0" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
          <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
            <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex h-[72px] items-center p-[16px] relative shrink-0" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
          <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
            <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] content-stretch flex h-[72px] items-center p-[16px] relative shrink-0" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
          <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
            <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-[26px]" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center shrink-0" data-name="Table header" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[72px] items-center px-[8px] py-[16px] relative shrink-0 w-[26px]" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="relative shrink-0 size-[10px]" data-name="_Dot">
          <div className="absolute left-px size-[8px] top-px" data-name="Dot">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #258DD2)" id="Dot" r="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[72px] items-center px-[8px] py-[16px] relative shrink-0" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="relative shrink-0 size-[10px]" data-name="_Dot">
          <div className="absolute left-px size-[8px] top-px" data-name="Dot">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #258DD2)" id="Dot" r="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[72px] items-center px-[8px] py-[16px] relative shrink-0" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="relative shrink-0 size-[10px]" data-name="_Dot">
          <div className="absolute left-px size-[8px] top-px" data-name="Dot">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #258DD2)" id="Dot" r="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[72px] items-center px-[8px] py-[16px] relative shrink-0" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="relative shrink-0 size-[10px]" data-name="_Dot">
          <div className="absolute left-px size-[8px] top-px" data-name="Dot">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <circle cx="4" cy="4" fill="var(--fill-0, #258DD2)" id="Dot" r="4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] content-stretch flex gap-[8px] h-[72px] items-center px-[8px] py-[16px] relative shrink-0" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="shrink-0 size-[10px]" data-name="_Dot" />
      </div>
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">3.000 ton Houtpellets (0571)</p>
    </div>
  );
}

function TextPadding7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#145990] text-[14px] whitespace-nowrap">Openen</p>
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <TextAndSupportingText1 />
          <div className="-translate-y-1/2 absolute bg-white right-[16px] rounded-[6px] top-1/2" data-name="Buttons/Button">
            <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
              <TextPadding7 />
            </div>
            <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[256px] relative" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Lading</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">Af te stemmen ton Houtpellets (0571)</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">1.000 - 2.500 ton Houtpellets (0571)</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">3.000 ton Houtpellets (0571)</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">3.000 ton Houtpellets (0571)</p>
          </div>
        </div>
      </div>
      <TableCell />
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#145990] text-[14px] whitespace-nowrap">Freight OOC GmbH</p>
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Buiten Onszelf N.V.</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Lisa Aelbrechtse</p>
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Freight OOC GmbH</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Wanda in ‘t Veld</p>
    </div>
  );
}

function TextAndSupportingText5() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Market Freight B.V.</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Freyd Hanschmarke</p>
    </div>
  );
}

function TextAndSupportingText6() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Market Freight B.V.</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">H.J. Duivenvoort</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col h-[404px] items-start min-w-[200px] relative shrink-0" data-name="Column">
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
            <TextAndSupportingText2 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText3 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText4 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText5 />
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText7() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Salzgitter</p>
      <p className="relative shrink-0 text-[#475467]">Do 15 Jan</p>
    </div>
  );
}

function TextAndSupportingText8() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Hamburg</p>
      <p className="relative shrink-0 text-[#475467]">Do 15 Jan</p>
    </div>
  );
}

function TextAndSupportingText9() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Antwerpen</p>
      <p className="relative shrink-0 text-[#475467]">Af te stemmen</p>
    </div>
  );
}

function TextAndSupportingText10() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Beringen</p>
      <p className="relative shrink-0 text-[#475467]">Do 15 Jan</p>
    </div>
  );
}

function TextAndSupportingText11() {
  return (
    <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Text and supporting text">
      <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] px-[12px] py-[8px] relative text-[14px] w-full whitespace-nowrap">
        <p className="relative shrink-0 text-[#101828]">Veen</p>
        <p className="relative shrink-0 text-[#475467]">Vr 16 Jan</p>
      </div>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[200px] relative shrink-0 w-[200px]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table header">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Laden</p>
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
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText7 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText8 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText9 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText10 />
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-[16px] relative size-full">
            <TextAndSupportingText11 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText12() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Oldenburg</p>
      <p className="relative shrink-0 text-[#475467]">Af te stemmen</p>
    </div>
  );
}

function TextAndSupportingText13() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Oldenburg</p>
      <p className="relative shrink-0 text-[#475467]">Za 17 Jan</p>
    </div>
  );
}

function TextAndSupportingText14() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Roeselare</p>
      <p className="relative shrink-0 text-[#475467]">Week 7 of 8</p>
    </div>
  );
}

function TextAndSupportingText15() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Landelies</p>
      <p className="relative shrink-0 text-[#475467]">Onbekend</p>
    </div>
  );
}

function TextAndSupportingText16() {
  return (
    <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Text and supporting text">
      <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] px-[12px] py-[8px] relative text-[14px] w-full whitespace-nowrap">
        <p className="relative shrink-0 text-[#101828]">Antwerpen</p>
        <p className="relative shrink-0 text-[#475467]">Za 17 Jan</p>
      </div>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[200px] relative shrink-0 w-[200px]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Lossen</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText12 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText13 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText14 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText15 />
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-[16px] relative size-full">
            <TextAndSupportingText16 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] min-h-px min-w-px relative text-[14px]" data-name="Text and supporting text">
      <p className="min-w-full relative shrink-0 text-[#101828] w-[min-content]">Automatische feed</p>
      <p className="relative shrink-0 text-[#475467] whitespace-nowrap">Do 5 Feb 12:44</p>
    </div>
  );
}

function TextAndSupportingText18() {
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

function TextAndSupportingText19() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Pelger de Jong</p>
      <p className="relative shrink-0 text-[#475467]">Do 5 Feb 13:24</p>
    </div>
  );
}

function TextAndSupportingText20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] min-h-px min-w-px relative text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="min-w-full overflow-hidden relative shrink-0 text-[#101828] text-ellipsis w-[min-content]">Automatische feed</p>
      <p className="relative shrink-0 text-[#475467]">Do 5 Feb 12:44</p>
    </div>
  );
}

function TextAndSupportingText21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] min-h-px min-w-px relative text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="min-w-full overflow-hidden relative shrink-0 text-[#101828] text-ellipsis w-[min-content]">Automatische feed</p>
      <p className="relative shrink-0 text-[#475467]">Do 5 Feb 12:44</p>
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col h-[404px] items-start min-w-[264px] relative shrink-0" data-name="Column">
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
            <TextAndSupportingText17 />
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
            <TextAndSupportingText18 />
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
            <TextAndSupportingText19 />
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
            <TextAndSupportingText20 />
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
            <TextAndSupportingText21 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Badges() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Badges">
      <div className="bg-white content-stretch flex items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">4</p>
      </div>
    </div>
  );
}

function Badges1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Badges">
      <div className="bg-white content-stretch flex items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">7</p>
      </div>
    </div>
  );
}

function Badges2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Badges">
      <div className="bg-[#f2f8fd] content-stretch flex items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#c1dff6] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#145990] text-[12px] text-center whitespace-nowrap">7</p>
      </div>
    </div>
  );
}

function Badges3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Badges">
      <div className="bg-white content-stretch flex items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">7</p>
      </div>
    </div>
  );
}

function Badges4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Badges">
      <div className="bg-white content-stretch flex items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">8</p>
      </div>
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[80px] relative shrink-0 w-[80px]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Matches</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[16px] relative size-full">
            <Badges />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[16px] relative size-full">
            <Badges1 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[16px] relative size-full">
            <Badges2 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[16px] relative size-full">
            <Badges3 />
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[16px] pr-[24px] py-[16px] relative size-full">
            <Badges4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContrastBorder1() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function ContrastBorder2() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function Column8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Eigenaar</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="bg-white relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-dashed inset-0 pointer-events-none rounded-[9999px]" />
              <div className="absolute inset-[18.75%] overflow-clip" data-name="user-01">
                <div className="absolute inset-[12.5%_16.67%]" data-name="Icon">
                  <div className="absolute inset-[-5.56%_-6.25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0001 16.6667">
                      <path d={svgPaths.p3b108600} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="bg-white relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-dashed inset-0 pointer-events-none rounded-[9999px]" />
              <div className="absolute inset-[18.75%] overflow-clip" data-name="user-01">
                <div className="absolute inset-[12.5%_16.67%]" data-name="Icon">
                  <div className="absolute inset-[-5.56%_-6.25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0001 16.6667">
                      <path d={svgPaths.p3b108600} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
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
              <ContrastBorder1 />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="bg-white relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-dashed inset-0 pointer-events-none rounded-[9999px]" />
              <div className="absolute inset-[18.75%] overflow-clip" data-name="user-01">
                <div className="absolute inset-[12.5%_16.67%]" data-name="Icon">
                  <div className="absolute inset-[-5.56%_-6.25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.0001 16.6667">
                      <path d={svgPaths.p3b108600} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
                <div className="absolute bg-[#cfcbdc] inset-0 rounded-[9999px]" />
                <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgAvatar} />
              </div>
              <ContrastBorder2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Star() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star1() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star2() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star3() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star4() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-px" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
        <g clipPath="url(#clip0_1_39473)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39473">
            <rect fill="white" height="20" width="1" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star5() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star6() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star7() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star8() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star9() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-px" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
        <g clipPath="url(#clip0_1_39473)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39473">
            <rect fill="white" height="20" width="1" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star10() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star11() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star12() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star13() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star14() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-px" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
        <g clipPath="url(#clip0_1_39473)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39473">
            <rect fill="white" height="20" width="1" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star15() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star16() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star17() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star18() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star19() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-px" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
        <g clipPath="url(#clip0_1_39473)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39473">
            <rect fill="white" height="20" width="1" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star20() {
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

function Star21() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star22() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star23() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_39468)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #F2F4F7)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39468">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Star24() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-px" data-name="Star">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
        <g clipPath="url(#clip0_1_39473)" id="Star">
          <path d={svgPaths.p2f878000} fill="var(--fill-0, #FDB022)" id="Star_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_39473">
            <rect fill="white" height="20" width="1" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Column9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[40px]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Prioriteit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center pl-[16px] pr-[24px] py-[16px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star1 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star2 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star3 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star4 />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center pl-[16px] pr-[24px] py-[16px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star5 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star6 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star7 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star8 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star9 />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center pl-[16px] pr-[24px] py-[16px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star10 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star11 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star12 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star13 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star14 />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center pl-[16px] pr-[24px] py-[16px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star15 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star16 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star17 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star18 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star19 />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center pl-[16px] pr-[24px] py-[16px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star20 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star21 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star22 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star23 />
            </div>
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Star icon">
              <div className="absolute inset-[2.5%_0_-2.5%_0]" data-name="Star background">
                <div className="absolute inset-[4.01%_6.13%_12.31%_6.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.546 16.7364">
                    <path d={svgPaths.p30303900} fill="var(--fill-0, #F2F4F7)" id="Star background" />
                  </svg>
                </div>
              </div>
              <Star24 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="Column">
      <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="size-full" />
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center p-[16px] size-full" />
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center p-[16px] size-full" />
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center p-[16px] size-full" />
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center p-[16px] size-full" />
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center p-[16px] relative size-full">
            <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[6px] shrink-0" data-name="Buttons/Button">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="x-close">
                <div className="absolute inset-1/4" data-name="Icon">
                  <div className="absolute inset-[-10.42%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.66667 9.66667">
                      <path d={svgPaths.p448fa80} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[6px] shrink-0" data-name="Buttons/Button">
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="check">
                <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
                  <div className="absolute inset-[-11.34%_-7.79%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3292 8.99583">
                      <path d={svgPaths.p1c26b00} id="Icon" stroke="var(--stroke-0, #145990)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6625" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Content">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
      <Column5 />
      <Column6 />
      <Column7 />
      <Column8 />
      <Column9 />
      <Column10 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">50</p>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content8 />
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

function InputWithLabel4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input4 />
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Amount">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Regels per pagina</p>
      <button className="content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0 w-[80px]" data-name="Input dropdown">
        <InputWithLabel4 />
      </button>
    </div>
  );
}

function ButtonWrap2() {
  return (
    <div className="content-stretch flex h-[20px] items-center relative shrink-0" data-name="Button wrap">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-left">
          <div className="absolute inset-[20.83%]" data-name="Icon">
            <div className="absolute inset-[-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p3ba8b580} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">1</p>
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content9 />
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

function InputWithLabel5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input5 />
    </div>
  );
}

function PageDropdown2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Page dropdown">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Pagina</p>
      <button className="content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0 w-[64px]" data-name="Input dropdown">
        <InputWithLabel5 />
      </button>
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">van 10</p>
    </div>
  );
}

function ButtonWrap3() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-end relative shrink-0" data-name="Button wrap">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-right">
          <div className="absolute inset-[20.83%]" data-name="Icon">
            <div className="absolute inset-[-7.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                <path d={svgPaths.p19aed710} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navigation3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Navigation">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#344054] text-[0px] text-[14px] whitespace-nowrap">
        <span className="leading-[20px]">1</span>
        <span className="leading-[20px]">{` tot 5`}</span>
        <span className="leading-[20px]">0</span>
        <span className="leading-[20px]">{` van `}</span>
        <span className="leading-[20px]">2.000</span>
      </p>
      <ButtonWrap2 />
      <PageDropdown2 />
      <ButtonWrap3 />
    </div>
  );
}

function Pagination1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Pagination">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <div className="content-stretch flex items-center justify-between pb-[20px] relative shrink-0 w-full" data-name="Pagination">
          <Amount1 />
          <Navigation3 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative w-[1848px]" data-name="Container">
      <SectionHeaderWrap />
      <Pagination />
      <Content7 />
      <Pagination1 />
    </div>
  );
}

function Main() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Main">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start pt-[24px] relative size-full">
          <HeaderSection />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Screen() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-h-px min-w-px relative" data-name="Screen">
      <Main />
    </div>
  );
}

function VlootVaartuigenAllesDesktop() {
  return (
    <div className="bg-white content-stretch flex h-[1080px] items-start min-h-[1080px] overflow-clip relative shrink-0 w-[1920px]" data-name="Vloot Vaartuigen Alles - Desktop">
      <div className="bg-[#f9fafb] h-full relative shrink-0 w-[72px]" data-name="Sidebar navigation">
        <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[inherit] size-full">
          <Content />
        </div>
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-r border-solid inset-0 pointer-events-none" />
      </div>
      <Screen />
    </div>
  );
}

export default function MarktInboxLadingLijst() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Markt - Inbox - Lading Lijst">
      <VlootVaartuigenAllesDesktop />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+335px)] size-[20px] top-[calc(50%+100px)]" data-name="Cursor">
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
    </div>
  );
}