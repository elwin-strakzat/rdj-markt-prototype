import svgPaths from "./svg-vijwxt2e8e";
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
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[#101828] text-[30px] w-full">Bevrachting</p>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Werklijst e-mailen</p>
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
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="send-01">
            <div className="absolute inset-[9.96%_9.96%_9.91%_9.9%]" data-name="Icon">
              <div className="absolute inset-[-5.2%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6933 17.6933">
                  <path d={svgPaths.p31aa2800} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
          <TextPadding />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
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
          <TextPadding1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#1567a4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-center flex flex-wrap gap-[20px_16px] items-center relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] overflow-hidden relative shrink-0 text-[#344054] text-[12px] text-ellipsis whitespace-nowrap">
        <span className="leading-[18px]">{`Laatste werklijst gemaild `}</span>
        <span className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px]">vandaag om 9:00</span>
        <span className="leading-[18px]">{` door `}</span>
        <span className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px]">Khoa Nguyen</span>
      </p>
      <Actions />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Page header">
      <Content2 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <PageHeader />
      </div>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Tabs">
      <div className="content-stretch flex h-[32px] items-center justify-center pb-[12px] px-[4px] relative shrink-0" data-name="Tab button base">
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#667085] text-[14px] whitespace-nowrap">Ladingen</p>
      </div>
      <div className="content-stretch flex h-[32px] items-center justify-center pb-[12px] px-[4px] relative shrink-0" data-name="Tab button base">
        <div aria-hidden="true" className="absolute border-[#1567a4] border-b-2 border-solid inset-0 pointer-events-none" />
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#145990] text-[14px] whitespace-nowrap">Vaartuigen</p>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tabs">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Horizontal tabs">
          <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
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

function TextPadding2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Jan 1, 2026 – Jan 31, 2026</p>
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
            <TextPadding2 />
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
      <div className="relative rounded-[6px] shrink-0" data-name="Button">
        <div className="content-stretch flex isolate items-start overflow-clip relative rounded-[inherit]">
          <div className="bg-white content-stretch flex gap-[8px] items-center justify-center min-h-[40px] pl-[14px] pr-[16px] py-[8px] relative shrink-0 z-[8]" data-name="_Button group base">
            <div aria-hidden="true" className="absolute border-[#d0d5dd] border-r border-solid inset-[0_-0.5px_0_0] pointer-events-none" />
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="cube-01">
              <div className="absolute inset-[8.93%_12.5%]" data-name="Icon">
                <div className="absolute inset-[-5.07%_-5.56%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6673 18.0934">
                    <path d={svgPaths.p10b89700} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Ladingen</p>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <Datepicker />
    </div>
  );
}

function TextPadding3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Regio</p>
    </div>
  );
}

function TextPadding4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#145990] text-[14px] whitespace-nowrap">Filter</p>
    </div>
  );
}

function Content3() {
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

function Input() {
  return (
    <div className="bg-white h-[40px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[14px] py-[8px] relative size-full">
          <Content3 />
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

function Actions2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center justify-end min-h-px min-w-px relative" data-name="Actions">
      <div className="relative rounded-[6px] shrink-0" data-name="Button group">
        <div className="content-stretch flex isolate items-start overflow-clip relative rounded-[inherit]">
          <div className="bg-[#f2f8fd] content-stretch flex items-center justify-center min-h-[40px] px-[12px] py-[8px] relative shrink-0 z-[9]" data-name="_Button group base">
            <div aria-hidden="true" className="absolute border-[#d0d5dd] border-r border-solid inset-[0_-0.5px_0_0] pointer-events-none" />
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="columns-01">
              <div className="absolute inset-[12.5%]" data-name="Icon">
                <div className="absolute inset-[-5.56%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                    <g id="Icon">
                      <path d={svgPaths.p33b6bf2} stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p2c784200} stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex items-center justify-center min-h-[40px] px-[12px] py-[8px] relative shrink-0 z-[8]" data-name="_Button group base">
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
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <button className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[8px] items-start max-w-[320px] min-h-px min-w-px relative" data-name="Input dropdown">
        <InputWithLabel />
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
            <TextPadding4 />
          </div>
          <Actions2 />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Title">
      <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
        <div className="relative shrink-0 size-[8px]" data-name="_Dot">
          <div className="absolute left-px size-[6px] top-px" data-name="Dot">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #667085)" id="Dot" r="3" />
            </svg>
          </div>
        </div>
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-center whitespace-nowrap">Intake</p>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Header Row">
      <Title />
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#667085] text-[14px] whitespace-nowrap">3</p>
    </div>
  );
}

function TitleAndSubtitle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative whitespace-nowrap" data-name="Title and subtitle">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black">Emily</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-[min-content]">
        <span className="leading-[18px]">{`3.000 ton `}</span>
        <span className="leading-[18px]">{`· `}</span>
        <span className="leading-[18px]">Motorschip</span>
      </p>
    </div>
  );
}

function ContrastBorder() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TopRow() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Top row">
      <TitleAndSubtitle />
      <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
        <ContrastBorder />
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="location">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_16241)">
          <path d={svgPaths.p2ca50880} fill="var(--fill-0, #258DD2)" id="Dot area" opacity="0.3" />
          <circle cx="6" cy="6" fill="var(--fill-0, #258DD2)" id="Dot" r="3" />
        </g>
        <defs>
          <clipPath id="clip0_1_16241">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] overflow-hidden relative shrink-0 text-[#101828] text-[12px] text-ellipsis whitespace-nowrap">Waalhaven</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="Row">
      <Location />
      <Text />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Row />
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667085] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Sinds Ma 12 Jan</p>
      </div>
    </div>
  );
}

function TitleAndSubtitle1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative whitespace-nowrap" data-name="Title and subtitle">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black">Bregje</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-[min-content]">
        <span className="leading-[18px]">{`3.000 ton `}</span>
        <span className="leading-[18px]">{`· `}</span>
        <span className="leading-[18px]">Motorschip</span>
      </p>
    </div>
  );
}

function ContrastBorder1() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TopRow1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Top row">
      <TitleAndSubtitle1 />
      <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
        <ContrastBorder1 />
      </div>
    </div>
  );
}

function Location1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="location">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_16241)">
          <path d={svgPaths.p2ca50880} fill="var(--fill-0, #258DD2)" id="Dot area" opacity="0.3" />
          <circle cx="6" cy="6" fill="var(--fill-0, #258DD2)" id="Dot" r="3" />
        </g>
        <defs>
          <clipPath id="clip0_1_16241">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] overflow-hidden relative shrink-0 text-[#101828] text-[12px] text-ellipsis whitespace-nowrap">Bremerhaven</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="Row">
      <Location1 />
      <Text1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Row1 />
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667085] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Sinds Di 23 Feb</p>
      </div>
    </div>
  );
}

function TitleAndSubtitle2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative whitespace-nowrap" data-name="Title and subtitle">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black">Hercules</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-[min-content]">
        <span className="leading-[18px]">{`3.000 ton `}</span>
        <span className="leading-[18px]">{`· `}</span>
        <span className="leading-[18px]">Motorschip</span>
      </p>
    </div>
  );
}

function ContrastBorder2() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TopRow2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Top row">
      <TitleAndSubtitle2 />
      <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
        <ContrastBorder2 />
      </div>
    </div>
  );
}

function Location2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="location">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_16241)">
          <path d={svgPaths.p2ca50880} fill="var(--fill-0, #258DD2)" id="Dot area" opacity="0.3" />
          <circle cx="6" cy="6" fill="var(--fill-0, #258DD2)" id="Dot" r="3" />
        </g>
        <defs>
          <clipPath id="clip0_1_16241">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] overflow-hidden relative shrink-0 text-[#101828] text-[12px] text-ellipsis whitespace-nowrap">Bremerhaven</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="Row">
      <Location2 />
      <Text2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Row2 />
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667085] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Sinds Di 23 Feb</p>
      </div>
    </div>
  );
}

function Deadline() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Deadline">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="flag-06">
        <div className="absolute inset-[12.5%_12.5%_12.5%_16.67%]" data-name="Icon">
          <div className="absolute inset-[-5.56%_-5.88%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.50001 10">
              <path d={svgPaths.p2eae9e00} id="Icon" stroke="var(--stroke-0, #DC6803)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#dc6803] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Gisteren, 14:00</p>
      </div>
    </div>
  );
}

function Badges() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Badges">
      <div className="bg-[#f9fafb] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">5 biedingen</p>
      </div>
      <div className="bg-[#f9fafb] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">12 matches</p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Section">
      <Deadline />
      <Badges />
    </div>
  );
}

function TextPadding5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Vaartuig toevoegen</p>
    </div>
  );
}

function Column() {
  return (
    <div className="bg-[#f9fafb] flex-[1_0_0] max-w-[360px] min-h-px min-w-px relative rounded-[8px]" data-name="Column">
      <div className="max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[inherit] px-[8px] py-[12px] relative w-full">
          <HeaderRow />
          <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Card market">
            <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
            <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
              <TopRow />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_Card location info">
                <Frame />
              </div>
            </div>
          </div>
          <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Card market">
            <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
            <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
              <TopRow1 />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_Card location info">
                <Frame1 />
              </div>
            </div>
          </div>
          <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Card market">
            <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
            <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
              <TopRow2 />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_Card location info">
                <Frame2 />
              </div>
              <Section />
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip py-[10px] relative rounded-[6px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus">
              <div className="absolute inset-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-7.14%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                    <path d={svgPaths.p1b67fa00} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
            </div>
            <TextPadding5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderRow1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Header Row">
      <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
        <div className="relative shrink-0 size-[8px]" data-name="_Dot">
          <div className="absolute left-px size-[6px] top-px" data-name="Dot">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #258DD2)" id="Dot" r="3" />
            </svg>
          </div>
        </div>
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-center whitespace-nowrap">Werklijst</p>
      </div>
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#667085] text-[14px] whitespace-nowrap">0</p>
    </div>
  );
}

function TitleAndSubtitle3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative whitespace-nowrap" data-name="Title and subtitle">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black">S.S. Anne</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-[min-content]">
        <span className="leading-[18px]">{`3.000 ton `}</span>
        <span className="leading-[18px]">{`· `}</span>
        <span className="leading-[18px]">Motorschip</span>
      </p>
    </div>
  );
}

function ContrastBorder3() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TopRow3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Top row">
      <TitleAndSubtitle3 />
      <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
        <ContrastBorder3 />
      </div>
    </div>
  );
}

function Location3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="location">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_16241)">
          <path d={svgPaths.p2ca50880} fill="var(--fill-0, #258DD2)" id="Dot area" opacity="0.3" />
          <circle cx="6" cy="6" fill="var(--fill-0, #258DD2)" id="Dot" r="3" />
        </g>
        <defs>
          <clipPath id="clip0_1_16241">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] overflow-hidden relative shrink-0 text-[#101828] text-[12px] text-ellipsis whitespace-nowrap">Bremerhaven</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative" data-name="Row">
      <Location3 />
      <Text3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Row3 />
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667085] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Sinds Ma 12 Jan</p>
      </div>
    </div>
  );
}

function TextPadding6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Vaartuig toevoegen</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="bg-[#f2f8fd] flex-[1_0_0] max-w-[360px] min-h-px min-w-px relative rounded-[8px]" data-name="Column">
      <div className="max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[inherit] px-[8px] py-[12px] relative w-full">
          <HeaderRow1 />
          <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Card market">
            <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
            <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
              <TopRow3 />
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_Card location info">
                <Frame3 />
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip py-[10px] relative rounded-[6px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus">
              <div className="absolute inset-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-7.14%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                    <path d={svgPaths.p1b67fa00} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
            </div>
            <TextPadding6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderRow2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Header Row">
      <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
        <div className="relative shrink-0 size-[8px]" data-name="_Dot">
          <div className="absolute left-px size-[6px] top-px" data-name="Dot">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #17B26A)" id="Dot" r="3" />
            </svg>
          </div>
        </div>
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-center whitespace-nowrap">In de markt</p>
      </div>
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#667085] text-[14px] whitespace-nowrap">0</p>
    </div>
  );
}

function TextPadding7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Vaartuig toevoegen</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="bg-[#ecfdf3] flex-[1_0_0] max-w-[360px] min-h-px min-w-px relative rounded-[8px]" data-name="Column">
      <div className="max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[inherit] px-[8px] py-[12px] relative w-full">
          <HeaderRow2 />
          <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip py-[10px] relative rounded-[6px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus">
              <div className="absolute inset-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-7.14%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                    <path d={svgPaths.p1b67fa00} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
            </div>
            <TextPadding7 />
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderRow3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Header Row">
      <div className="content-stretch flex gap-[6px] items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
        <div className="relative shrink-0 size-[8px]" data-name="_Dot">
          <div className="absolute left-px size-[6px] top-px" data-name="Dot">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #17B26A)" id="Dot" r="3" />
            </svg>
          </div>
        </div>
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-center whitespace-nowrap">Gesloten</p>
      </div>
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#667085] text-[14px] whitespace-nowrap">0</p>
    </div>
  );
}

function TextPadding8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Vaartuig toevoegen</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="bg-[#ecfdf3] flex-[1_0_0] max-w-[360px] min-h-px min-w-px relative rounded-[8px]" data-name="Column">
      <div className="max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[inherit] px-[8px] py-[12px] relative w-full">
          <HeaderRow3 />
          <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip py-[10px] relative rounded-[6px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus">
              <div className="absolute inset-[20.83%]" data-name="Icon">
                <div className="absolute inset-[-7.14%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                    <path d={svgPaths.p1b67fa00} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
            </div>
            <TextPadding8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start pt-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-solid border-t inset-0 pointer-events-none" />
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
    </div>
  );
}

function Board() {
  return (
    <div className="relative shrink-0 w-full" data-name="Board">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <Container2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[992px] items-start relative shrink-0 w-[1848px]" data-name="Container">
      <SectionHeaderWrap />
      <Board />
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

export default function MarktBevrachtingOverzichtVaartuigenBoardView() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Markt - Bevrachting - Overzicht Vaartuigen (board view)">
      <VlootVaartuigenAllesDesktop />
    </div>
  );
}