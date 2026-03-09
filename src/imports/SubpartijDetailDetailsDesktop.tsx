import svgPaths from "./svg-eeb8hhqcmb";
// import imgAvatar from "figma:asset/a2737d3b5b234fc04041650cb9f114889c6859da.png";
const imgAvatar = "";
// import imgAvatar1 from "figma:asset/bf485cb6f98c12534c69bc81459ce34f2e24e4a8.png";
const imgAvatar1 = "";
// import imgAvatar2 from "figma:asset/3627de284acb374a4d9313b3c2dbaeeb87a48224.png";
const imgAvatar2 = "";
// import imgAvatar3 from "figma:asset/e7809035038b3816de2a1d67c5de86ebeed325d0.png";
const imgAvatar3 = "";
// import imgAvatar4 from "figma:asset/9e45f45f537bea4bf653bc0307471e5ff5545f63.png";
const imgAvatar4 = "";
// import imgAvatar5 from "figma:asset/7881cf10e51b32871721baa06e0532dcdfef9031.png";
const imgAvatar5 = "";

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

function Content2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[9px] relative w-full">
          <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#344054] text-[14px]">Alle statussen</p>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[9px] relative w-full">
          <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#344054] text-[14px]">Te verdelen</p>
        </div>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[8px] py-[9px] relative w-full">
          <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#344054] text-[14px]">Afgerond</p>
        </div>
      </div>
    </div>
  );
}

function MenuItems() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[4px] relative shrink-0 w-full" data-name="Menu items">
      <div className="relative shrink-0 w-full" data-name="Action menu item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-px relative w-full">
            <Content2 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Action menu item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-px relative w-full">
            <Content3 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Action menu item">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[4px] py-px relative w-full">
            <Content4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute bg-white left-[313px] rounded-[6px] top-[132px] w-[256px]" data-name="Dropdown">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <MenuItems />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Tabs">
      <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="_Breadcrumb button base">
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Markt</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-right">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-8.33%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
              <path d={svgPaths.p3ec8f700} id="Icon" stroke="var(--stroke-0, #D0D5DD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="_Breadcrumb button base">
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Inbox</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-right">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-8.33%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
              <path d={svgPaths.p3ec8f700} id="Icon" stroke="var(--stroke-0, #D0D5DD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="_Breadcrumb button base">
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">ADG150-01</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Buttons">
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[inherit]">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-up">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
              <div className="absolute inset-[-20.83%_-10.42%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.66667 5.66667">
                  <path d={svgPaths.p3b2e5d00} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[inherit]">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-down">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
              <div className="absolute inset-[-20.83%_-10.42%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.66667 5.66667">
                  <path d={svgPaths.p3571e660} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex items-center pl-[24px] relative shrink-0" data-name="Breadcrumbs">
        <Tabs />
      </div>
      <Buttons />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start pt-[24px] relative shrink-0 w-full" data-name="Page header">
      <Content5 />
      <div className="h-px relative shrink-0 w-full" data-name="Divider">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1848 1">
          <path clipRule="evenodd" d="M1848 1H0V0H1848V1Z" fill="var(--fill-0, #EAECF0)" fillRule="evenodd" id="Divider" />
        </svg>
      </div>
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-[320px] relative" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[#101828] text-[30px] w-full">2.150 - 2.300 ton Raps</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#475467] text-[0px] text-[16px] w-full">
        <span className="leading-[24px]">{`Vanuit `}</span>
        <span className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[24px]">Rotterdam (Do 15 Jan)</span>
        <span className="leading-[24px]">{` naar `}</span>
        <span className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[24px]">Mannheim (Af te stemmen)</span>
      </p>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Archiveren</p>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Naar pijplijn sturen</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                  <path d={svgPaths.p3f40eb80} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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
          <TextPadding1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#1567a4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-start flex flex-wrap gap-[20px_16px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText />
      <Actions />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px relative self-stretch" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[26px] relative shrink-0 text-[#101828] text-[18px] w-full">Matches</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full z-[2]" data-name="Content">
      <TextAndSupportingText1 />
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] shrink-0" data-name="Buttons/Button">
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#145990] text-[14px] whitespace-nowrap">Alle matches</p>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
          <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
            <div className="absolute inset-[-16.67%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
                <path d={svgPaths.p1b1fa300} id="Icon" stroke="var(--stroke-0, #145990)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndBadge() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Agnes</p>
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Motorschip</p>
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px opacity-25 relative" data-name="Text and supporting text">
      <TextAndSupportingText3 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[8px] items-start pl-[24px] pr-[16px] py-[16px] relative size-full">
        <TextAndSupportingText2 />
      </div>
    </div>
  );
}

function TextPadding2() {
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
        <TextPadding2 />
      </div>
    </div>
  );
}

function TextAndSupportingText4() {
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
            <TextAndSupportingText4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText5() {
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
            <TextAndSupportingText5 />
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

function TextAndSupportingText6() {
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
            <TextAndSupportingText6 />
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

function TextAndSupportingText8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge1 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Motorschip</p>
    </div>
  );
}

function TextAndSupportingText7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndSupportingText8 />
    </div>
  );
}

function TextAndSupportingText9() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#101828]">Agaat</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Motorschip</p>
    </div>
  );
}

function TextPadding3() {
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
        <TextAndSupportingText9 />
        <div className="-translate-y-1/2 absolute bg-white right-[16px] rounded-[6px] top-1/2" data-name="Buttons/Button">
          <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
            <TextPadding3 />
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

function TextAndSupportingText11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge2 />
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

function TextAndBadge3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Antoine V</p>
    </div>
  );
}

function TextAndSupportingText13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge3 />
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

function TextAndBadge4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Agnes</p>
    </div>
  );
}

function TextAndSupportingText15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge4 />
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

function TextAndBadge5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Amber</p>
    </div>
  );
}

function TextAndSupportingText17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge5 />
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

function TextAndBadge6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Ambulant</p>
    </div>
  );
}

function TextAndSupportingText19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge6 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Motorschip</p>
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

function TextAndBadge7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Amer</p>
    </div>
  );
}

function TextAndSupportingText21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge7 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Duwbak</p>
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

function TextAndBadge8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0" data-name="Text and badge">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Annemarie</p>
    </div>
  );
}

function TextAndSupportingText23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge8 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Motorschip</p>
    </div>
  );
}

function TextAndSupportingText22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndSupportingText23 />
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
          <TextAndSupportingText7 />
        </div>
      </div>
      <TableCell2 />
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
        <div className="content-stretch flex gap-[8px] items-start pl-[24px] pr-[16px] py-[16px] relative size-full">
          <TextAndSupportingText14 />
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] items-start px-[24px] py-[16px] relative size-full">
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
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[8px] items-start pl-[24px] pr-[16px] py-[16px] relative size-full">
          <TextAndSupportingText22 />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText24() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Andermans B.V.</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Cees Arendsen</p>
    </div>
  );
}

function TextAndSupportingText25() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Market Freight B.V.</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">H.J. Duivenvoort</p>
    </div>
  );
}

function TextAndSupportingText26() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Buiten Onszelf N.V.</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Lisa Aelbrechtse</p>
    </div>
  );
}

function TextAndSupportingText27() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Market Freight B.V.</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Freyd Hanschmarke</p>
    </div>
  );
}

function TextAndSupportingText28() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Cargo Solutions Ltd.</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Miles Thompson</p>
    </div>
  );
}

function TextAndSupportingText29() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Eco Transport GmbH</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Anna Müller</p>
    </div>
  );
}

function TextAndSupportingText30() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#145990]">Global Shipping Inc.</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467]">Raj Patel</p>
    </div>
  );
}

function TextAndSupportingText31() {
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
            <TextAndSupportingText24 />
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
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
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Rederij de Jong</p>
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
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText30 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText31 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText32() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="overflow-hidden relative shrink-0 text-[#101828] text-ellipsis">Europahaven (Maasvlakte)</p>
      <p className="relative shrink-0 text-[#475467]">Vanaf Ma 31 Dec, 2025</p>
    </div>
  );
}

function TextAndSupportingText33() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Europahaven (Maasvlakte)</p>
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

function TextAndSupportingText39() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="overflow-hidden relative shrink-0 text-[#101828] text-ellipsis">Europahaven (Maasvlakte)</p>
      <p className="relative shrink-0 text-[#475467]">Vanaf Ma 13 Jan, 2025</p>
    </div>
  );
}

function TextAndSupportingText40() {
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
            <TextAndSupportingText32 />
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
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
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText39 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <TextAndSupportingText40 />
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

function TextAndSupportingText41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] min-h-px min-w-px relative text-[14px]" data-name="Text and supporting text">
      <p className="min-w-full relative shrink-0 text-[#101828] w-[min-content]">Automatische feed</p>
      <p className="relative shrink-0 text-[#475467] whitespace-nowrap">Do 5 Feb 12:44</p>
    </div>
  );
}

function TextAndSupportingText42() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] min-h-px min-w-px relative text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="min-w-full overflow-hidden relative shrink-0 text-[#101828] text-ellipsis w-[min-content]">Automatische feed</p>
      <p className="relative shrink-0 text-[#475467]">Do 5 Feb 12:44</p>
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

function ContrastBorder() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText44() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Pelger de Jong</p>
      <p className="relative shrink-0 text-[#475467]">Do 5 Feb 13:24</p>
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

function TextAndSupportingText48() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] min-h-px min-w-px relative text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="min-w-full overflow-hidden relative shrink-0 text-[#101828] text-ellipsis w-[min-content]">Automatische feed</p>
      <p className="relative shrink-0 text-[#475467]">Do 5 Feb 12:44</p>
    </div>
  );
}

function TextAndSupportingText49() {
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
            <TextAndSupportingText41 />
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
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
                <div className="absolute bg-[#cfcbdc] inset-0 rounded-[9999px]" />
                <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgAvatar} />
              </div>
              <ContrastBorder />
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
            <TextAndSupportingText48 />
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
            <TextAndSupportingText49 />
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

function Subpartijen() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Subpartijen">
      <div className="content-stretch flex flex-col gap-[20px] isolate items-start relative shrink-0 w-full" data-name="Section header">
        <Content9 />
      </div>
      <div className="bg-white content-stretch flex isolate items-start relative shrink-0 w-full" data-name="Matches tabel/Vaartuigen">
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
    </div>
  );
}

function TextAndSupportingText50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[26px] relative shrink-0 text-[#101828] text-[18px] w-full">Activiteit</p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full z-[2]" data-name="Content">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TextAndSupportingText50 />
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#145990] text-[14px] whitespace-nowrap">Alle activiteit</p>
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-down">
          <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
            <div className="absolute inset-[-16.67%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 6.66667">
                <path d={svgPaths.p1b1fa300} id="Icon" stroke="var(--stroke-0, #145990)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start pb-[14px] pt-[10px] px-[14px] relative size-full">
          <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal h-full leading-[20px] min-h-px min-w-px relative text-[#667085] text-[14px] text-left">Plaats een opmerking...</p>
        </div>
      </div>
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative w-full" data-name="Input with label">
      <Input1 />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Input">
      <button className="content-stretch cursor-pointer flex flex-col gap-[6px] h-[40px] items-start relative shrink-0 w-full" data-name="Textarea input field">
        <InputWithLabel />
      </button>
      <div className="content-stretch flex items-center justify-center overflow-clip p-[14px] relative rounded-[6px] shrink-0 size-[40px]" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="upload-03">
          <div className="absolute inset-[8.33%]" data-name="Icon">
            <div className="absolute inset-[-5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
                <path d={svgPaths.p335fb880} id="Icon" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Comment1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[80px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Comment">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <Input />
    </div>
  );
}

function Comment() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Comment">
      <Comment1 />
    </div>
  );
}

function ContrastBorder1() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function AvatarWrap() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
          <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar1} />
            <ContrastBorder1 />
          </div>
          <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" data-name="Connector" />
        </div>
      </div>
    </div>
  );
}

function TextAndSubtext() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full whitespace-nowrap" data-name="Text and subtext">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px]">Khoa Nguyen</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px]">Zojuist</p>
    </div>
  );
}

function TextAndSupportingText51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#475467] text-[0px] text-[14px] w-full">
        <span className="leading-[20px]">{`Heeft `}</span>
        <span className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] text-[#145990]">{`Vliet `}</span>
        <span className="font-['Codec_Pro:Regular',sans-serif] leading-[20px] not-italic">{`en `}</span>
        <span className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] text-[#145990]">Nugget</span>
        <span className="leading-[20px]">{` ingepland op de partij.`}</span>
      </p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[32px] relative" data-name="Content">
      <TextAndSupportingText51 />
    </div>
  );
}

function ContrastBorder2() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function AvatarWrap1() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
          <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
              <div className="absolute bg-[#cfcbdc] inset-0 rounded-[9999px]" />
              <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgAvatar} />
            </div>
            <ContrastBorder2 />
          </div>
          <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" data-name="Connector" />
        </div>
      </div>
    </div>
  );
}

function TextAndSubtext1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full whitespace-nowrap" data-name="Text and subtext">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px]">Pelger de Jong</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px]">2 min geleden</p>
    </div>
  );
}

function TextAndSupportingText52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext1 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#475467] text-[0px] text-[14px] w-full">
        <span className="leading-[20px]">{`Heeft de herkomst aangepast van `}</span>
        <span className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px]">Argentinië</span>
        <span className="leading-[20px]">{` naar `}</span>
        <span className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px]">Brazilië</span>
        <span className="leading-[20px]">.</span>
      </p>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[32px] relative" data-name="Content">
      <TextAndSupportingText52 />
    </div>
  );
}

function ContrastBorder3() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function AvatarWrap2() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
          <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar2} />
            <ContrastBorder3 />
          </div>
          <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" data-name="Connector" />
        </div>
      </div>
    </div>
  );
}

function TextAndSubtext2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full whitespace-nowrap" data-name="Text and subtext">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px]">Erick Nieuwkoop</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px]">2 min geleden</p>
    </div>
  );
}

function TextAndSupportingText53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext2 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#475467] text-[0px] text-[14px] w-full">
        <span className="leading-[20px]">{`Heeft de tonnage aangepast van `}</span>
        <span className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px]">55.000</span>
        <span className="leading-[20px]">{` naar `}</span>
        <span className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px]">60.000</span>
        <span className="leading-[20px]">{` ton.`}</span>
      </p>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[32px] relative" data-name="Content">
      <TextAndSupportingText53 />
    </div>
  );
}

function ContrastBorder4() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function AvatarWrap3() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
          <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar3} />
            <ContrastBorder4 />
          </div>
          <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" data-name="Connector" />
        </div>
      </div>
    </div>
  );
}

function TextAndSubtext3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full whitespace-nowrap" data-name="Text and subtext">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px]">Mitchell den Hoed</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px]">3 uur geleden</p>
    </div>
  );
}

function TextAndSupportingText54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext3 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#475467] text-[0px] text-[14px] w-full">
        <span className="leading-[20px]">{`Heeft de ETS aangepast van `}</span>
        <span className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px]">Di 13 Jan 10:05</span>
        <span className="leading-[20px]">{` naar Wo `}</span>
        <span className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px]">14 Jan 10:05</span>
        <span className="leading-[20px]">.</span>
      </p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[32px] relative" data-name="Content">
      <TextAndSupportingText54 />
    </div>
  );
}

function ContrastBorder5() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function AvatarWrap4() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
          <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar4} />
            <ContrastBorder5 />
          </div>
          <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" data-name="Connector" />
        </div>
      </div>
    </div>
  );
}

function TextAndSubtext4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full whitespace-nowrap" data-name="Text and subtext">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px]">Jan-Willen van der Kraan</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px]">6 uur geleden</p>
    </div>
  );
}

function TextAndSupportingText55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext4 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-full">Heeft een opmerking geplaatst:</p>
    </div>
  );
}

function MessageBubble() {
  return (
    <div className="relative rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Message bubble">
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-bl-[8px] rounded-br-[8px] rounded-tr-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#344054] text-[14px]">“Gebeld met de laadhaven. Loopt volgens planning.”</p>
      </div>
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px pb-[32px] relative" data-name="Content">
      <TextAndSupportingText55 />
      <MessageBubble />
    </div>
  );
}

function ContrastBorder6() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function AvatarWrap5() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
          <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar5} />
            <ContrastBorder6 />
          </div>
          <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" data-name="Connector" />
        </div>
      </div>
    </div>
  );
}

function TextAndSubtext5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full whitespace-nowrap" data-name="Text and subtext">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px]">Jordi van den Burg</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px]">12 uur geleden</p>
    </div>
  );
}

function TextAndSupportingText56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext5 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#475467] text-[0px] text-[14px] w-full">
        <span className="leading-[20px]">{`Heeft deze partij toegewezen aan relatie `}</span>
        <span className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] text-[#145990]">Wurstermann GmbH.</span>
      </p>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[32px] relative" data-name="Content">
      <TextAndSupportingText56 />
    </div>
  );
}

function ContrastBorder7() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function AvatarWrap6() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
          <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar5} />
            <ContrastBorder7 />
          </div>
          <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" data-name="Connector" />
        </div>
      </div>
    </div>
  );
}

function TextAndSubtext6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full whitespace-nowrap" data-name="Text and subtext">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px]">Jordi van den Burg</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px]">12 uur geleden</p>
    </div>
  );
}

function TextAndSupportingText57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext6 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-full">Heeft 3 bijzonderheden toegewezen:</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Row">
      <div className="bg-white content-stretch flex items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">KS</p>
      </div>
      <div className="bg-white content-stretch flex items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">LK</p>
      </div>
      <div className="bg-white content-stretch flex items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">GMP</p>
      </div>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px pb-[32px] relative" data-name="Content">
      <TextAndSupportingText57 />
      <Row />
    </div>
  );
}

function ContrastBorder8() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSubtext7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full whitespace-nowrap" data-name="Text and subtext">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px]">Jordi van den Burg</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px]">12 uur geleden</p>
    </div>
  );
}

function TextAndSupportingText58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext7 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-full">Heeft deze partij aangemaakt</p>
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Content">
      <TextAndSupportingText58 />
    </div>
  );
}

function Activiteit() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Activiteit">
      <div className="content-stretch flex flex-col gap-[20px] isolate items-start relative shrink-0 w-full" data-name="Section header">
        <Content10 />
      </div>
      <Comment />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Activity feed">
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Feed item base">
          <AvatarWrap />
          <Content11 />
          <div className="absolute right-0 size-[10px] top-0" data-name="_Dot">
            <div className="absolute left-px size-[8px] top-px" data-name="Dot">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                <circle cx="4" cy="4" fill="var(--fill-0, #1567A4)" id="Dot" r="4" />
              </svg>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Feed item base">
          <AvatarWrap1 />
          <Content12 />
          <div className="absolute right-0 size-[10px] top-0" data-name="_Dot">
            <div className="absolute left-px size-[8px] top-px" data-name="Dot">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                <circle cx="4" cy="4" fill="var(--fill-0, #1567A4)" id="Dot" r="4" />
              </svg>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Feed item base">
          <AvatarWrap2 />
          <Content13 />
          <div className="absolute right-0 size-[10px] top-0" data-name="_Dot">
            <div className="absolute left-px size-[8px] top-px" data-name="Dot">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                <circle cx="4" cy="4" fill="var(--fill-0, #1567A4)" id="Dot" r="4" />
              </svg>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Feed item base">
          <AvatarWrap3 />
          <Content14 />
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Feed item base">
          <AvatarWrap4 />
          <Content15 />
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Feed item base">
          <AvatarWrap5 />
          <Content16 />
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Feed item base">
          <AvatarWrap6 />
          <Content17 />
        </div>
        <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Feed item base">
          <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar5} />
            <ContrastBorder8 />
          </div>
          <Content18 />
        </div>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[1116px] py-[24px] relative shrink-0 w-[1116px]" data-name="Content">
      <Subpartijen />
      <Activiteit />
    </div>
  );
}

function Content6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center p-[24px] relative w-full">
          <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[1116px] pt-[24px] relative shrink-0 w-full" data-name="Page header">
            <Content7 />
            <div className="h-px relative shrink-0 w-full" data-name="Divider">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1216 1">
                <path clipRule="evenodd" d="M1216 1H0V0H1216V1Z" fill="var(--fill-0, #EAECF0)" fillRule="evenodd" id="Divider" />
              </svg>
            </div>
          </div>
          <Content8 />
          <div className="absolute bg-[#6938ef] h-[23px] left-[154px] rounded-[2px] top-[55px] w-[4px]" data-name="Colour" />
        </div>
      </div>
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pb-[16px] relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <div className="content-stretch flex gap-[4px] h-[40px] items-center relative shrink-0 w-full" data-name="Horizontal tabs">
        <div className="bg-[#f2f8fd] h-full relative rounded-[4px] shrink-0" data-name="Tab button base">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex h-full items-center justify-center px-[12px] py-[8px] relative">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Details</p>
            </div>
          </div>
        </div>
        <div className="h-full relative rounded-[4px] shrink-0" data-name="Tab button base">
          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex h-full items-center justify-center px-[12px] py-[8px] relative">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#667085] text-[14px] whitespace-nowrap">Condities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">2.150 - 2.300 t</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Label">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Tonnage</p>
      </div>
      <Data />
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">Raps</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Label">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Lading</p>
      </div>
      <Data1 />
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#667085] text-[14px]">Voeg toe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Label">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Subsoort</p>
      </div>
      <Data2 />
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[0] min-h-px min-w-px relative text-[#101828] text-[0px]">
              <span className="leading-[20px] text-[14px]">0,05 t/m</span>
              <span className="leading-[20px] text-[9.030000000000001px]">3</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Label">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Soortelijk gewicht</p>
      </div>
      <Data3 />
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[0] min-h-px min-w-px relative text-[#101828] text-[0px]">
              <span className="leading-[20px] text-[14px]">5.000 m</span>
              <span className="leading-[20px] text-[9.030000000000001px]">3</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-[144px]">Inhoud</p>
      <Data4 />
    </div>
  );
}

function Label() {
  return (
    <div className="bg-white h-[36px] relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative size-full">
          <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#667085] text-[14px]">Selecteer</p>
        </div>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <Label />
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Label">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Bijzonderheden</p>
      </div>
      <Data5 />
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-[144px]">Laadhaven</p>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]" data-name="Label">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
            <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-[163.333px]">Rotterdam</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">Ma 16 Feb</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-[144px]">Laaddatum</p>
      <Data6 />
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-[144px]">Loshaven</p>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]" data-name="Label">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
            <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-[163.333px]">Mannheim - Bunge</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#667085] text-[14px]">Selecteer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-[144px]">Losdatum</p>
      <Data7 />
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Buttons/Button">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#145990] text-[14px]">{`FW: 2150 to 2300 to Raps - 110 M Schip van Rotterdam (2) naar Mannheim - Bunge op 16-2-2026 `}</p>
          </div>
          <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-[163.333px]">Do 12 Feb 15:59</p>
        </div>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <Label1 />
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Label">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Bron</p>
      </div>
      <Data8 />
    </div>
  );
}

function Label2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-w-full relative shrink-0 text-[#101828] text-[14px] w-[min-content]">Rhenus LBH Partnership B.V.</p>
          <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
            <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#145990] text-[14px] whitespace-nowrap">Als relatie toevoegen</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <Label2 />
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Label">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Relatie</p>
      </div>
      <Data9 />
    </div>
  );
}

function Data10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
            <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Eltje Warris</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Label">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Contactpersoon</p>
      </div>
      <Data10 />
    </div>
  );
}

function Subsection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Subsection">
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
      <Row8 />
      <Row9 />
      <Row10 />
      <Row11 />
      <Row12 />
      <Row13 />
    </div>
  );
}

function TextPadding4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Reset naar bron</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-full">
      <div className="bg-[#d9d9d9] h-px relative shrink-0 w-full" data-name="Divider">
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ContrastBorder9() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function Label3() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
            <ContrastBorder9 />
          </div>
          <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">Pelger de Jong</p>
        </div>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <Label3 />
    </div>
  );
}

function Row14() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-[144px]">Eigenaar</p>
      <Data11 />
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

function Label4() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
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
  );
}

function Data12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <Label4 />
    </div>
  );
}

function Row15() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-[144px]">Prioriteit</p>
      <Data12 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center px-[24px] py-[16px] relative shrink-0 w-[400px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-l border-solid inset-0 pointer-events-none" />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-full">Partij krijgt voorrang ten op zichte van de andere partijen in april.</p>
      <Subsection />
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Buttons/Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="refresh-ccw-01">
              <div className="absolute inset-[12.5%_12.5%_12.5%_8.33%]" data-name="Icon">
                <div className="absolute inset-[-5.56%_-5.26%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 16.6667">
                    <path d={svgPaths.p2a084400} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
            </div>
            <TextPadding4 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <Frame10 />
      <Row14 />
      <Row15 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Content6 />
      <div className="content-stretch flex flex-col gap-[16px] items-center pt-[16px] px-[24px] relative shrink-0 w-[400px]" data-name="Sidebar/Markt/Markt lading">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-l border-solid inset-0 pointer-events-none" />
        <Content19 />
        <Section />
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative self-stretch" data-name="Modal">
      <PageHeader />
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Container">
      <Dropdown />
      <Modal />
    </div>
  );
}

function LadingSubpartijenDesktop() {
  return (
    <div className="bg-white content-stretch flex items-start overflow-clip relative shrink-0 w-[1920px]" data-name="Lading Subpartijen - Desktop">
      <div className="bg-[#f9fafb] relative self-stretch shrink-0 w-[72px]" data-name="Sidebar navigation">
        <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[inherit] size-full">
          <Content />
        </div>
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-r border-solid inset-0 pointer-events-none" />
      </div>
      <Container />
    </div>
  );
}

function Content20() {
  return (
    <div className="bg-[#0c111d] relative rounded-[6px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[12px] text-center text-white whitespace-pre">
          {`Laatst geupdate: `}
          <br aria-hidden="true" />
          Vandaag 9:00 door Pelger de Jong
        </p>
      </div>
    </div>
  );
}

function Tooltip() {
  return (
    <div className="h-[6px] relative shrink-0 w-[16px]" data-name="Tooltip">
      <div className="absolute inset-[-41.91%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 8.51471">
          <g id="Tooltip">
            <path d={svgPaths.p243a4cc0} fill="var(--fill-0, #0C111D)" id="Tooltip shape" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function SubpartijDetailDetailsDesktop() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Subpartij Detail - Details - Desktop">
      <LadingSubpartijenDesktop />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-234px)] size-[20px] top-[calc(50%-447px)]" data-name="Cursor">
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
      <div className="absolute content-stretch flex flex-col items-center left-[607px] shadow-[0px_12px_16px_0px_rgba(16,24,40,0.08),0px_4px_6px_0px_rgba(16,24,40,0.03)] top-[382px]" data-name="Tooltip">
        <Content20 />
        <Tooltip />
      </div>
    </div>
  );
}