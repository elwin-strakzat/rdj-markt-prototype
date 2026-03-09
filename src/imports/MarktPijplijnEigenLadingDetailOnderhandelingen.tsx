import svgPaths from "./svg-yd1blr24xw";
// import imgAvatar from "figma:asset/a2737d3b5b234fc04041650cb9f114889c6859da.png";
const imgAvatar = "";
// import imgAvatar1 from "figma:asset/3627de284acb374a4d9313b3c2dbaeeb87a48224.png";
const imgAvatar1 = "";
// import imgAvatar2 from "figma:asset/e7809035038b3816de2a1d67c5de86ebeed325d0.png";
const imgAvatar2 = "";
// import imgAvatar3 from "figma:asset/bf485cb6f98c12534c69bc81459ce34f2e24e4a8.png";
const imgAvatar3 = "";
// import imgAvatar4 from "figma:asset/9e45f45f537bea4bf653bc0307471e5ff5545f63.png";
const imgAvatar4 = "";

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
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Pijplijn</p>
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
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">CRG164-01</p>
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

function Content2() {
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
      <Content2 />
      <div className="h-px relative shrink-0 w-full" data-name="Divider">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1848 1">
          <path clipRule="evenodd" d="M1848 1H0V0H1848V1Z" fill="var(--fill-0, #EAECF0)" fillRule="evenodd" id="Divider" />
        </svg>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[#101828] text-[30px] whitespace-nowrap">m/v Merganser - Agro Delta Groep</p>
      <div className="bg-[#f9fafb] content-stretch flex gap-[4px] items-center pl-[8px] pr-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-center whitespace-nowrap">In de markt</p>
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="chevron-down">
          <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Icon">
            <div className="absolute inset-[-25%_-12.5%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 4.5">
                <path d={svgPaths.p36c58480} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-[320px] relative" data-name="Text and supporting text">
      <Frame />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#475467] text-[0px] text-[16px] whitespace-nowrap">
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
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#b42318] text-[14px] whitespace-nowrap">Uit markt halen</p>
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
                  <path d={svgPaths.p3f40eb80} id="Icon" stroke="var(--stroke-0, #B42318)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
          <TextPadding />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Tabs1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Tabs">
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pb-[12px] px-[4px] relative shrink-0" data-name="Tab button base">
        <div aria-hidden="true" className="absolute border-[#1567a4] border-b-2 border-solid inset-0 pointer-events-none" />
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#145990] text-[14px] whitespace-nowrap">Onderhandelingen</p>
        <div className="bg-[#f2f8fd] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
          <div aria-hidden="true" className="absolute border border-[#c1dff6] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#145990] text-[12px] text-center whitespace-nowrap">4</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center pb-[12px] px-[4px] relative shrink-0" data-name="Tab button base">
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#667085] text-[14px] whitespace-nowrap">Matches</p>
        <div className="bg-[#f9fafb] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
          <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">5</p>
        </div>
      </div>
      <div className="content-stretch flex h-[32px] items-center justify-center pb-[12px] px-[4px] relative shrink-0" data-name="Tab button base">
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#667085] text-[14px] whitespace-nowrap">Activiteit</p>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-start flex flex-wrap gap-[20px_16px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText />
      <Actions />
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1116px]" data-name="Horizontal tabs">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <Tabs1 />
      </div>
    </div>
  );
}

function PageHeader2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[1116px] pt-[24px] relative shrink-0 w-full" data-name="Page header">
      <Content4 />
    </div>
  );
}

function PageHeader1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[1116px] pt-[24px] relative shrink-0 w-full" data-name="Page header">
      <PageHeader2 />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-start justify-center min-h-px min-w-px relative" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[26px] relative shrink-0 text-[#101828] text-[18px] w-full">Onderhandelingen</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full z-[2]" data-name="Content">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <TextAndSupportingText1 />
      </div>
      <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#145990] text-[14px] whitespace-nowrap">Actieve onderhandelingen</p>
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
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus">
            <div className="absolute inset-[20.83%]" data-name="Icon">
              <div className="absolute inset-[-7.14%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                  <path d={svgPaths.p1b67fa00} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">50</p>
    </div>
  );
}

function Input() {
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

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input />
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Amount">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Regels per pagina</p>
      <button className="content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0 w-[80px]" data-name="Input dropdown">
        <InputWithLabel />
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

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">1</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content7 />
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

function InputWithLabel1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input1 />
    </div>
  );
}

function PageDropdown() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Page dropdown">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Pagina</p>
      <button className="content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0 w-[64px]" data-name="Input dropdown">
        <InputWithLabel1 />
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
        <span className="leading-[20px]">1</span>
        <span className="leading-[20px]">{` tot 5`}</span>
        <span className="leading-[20px]">0</span>
        <span className="leading-[20px]">{` van `}</span>
        <span className="leading-[20px]">2.000</span>
      </p>
      <ButtonWrap />
      <PageDropdown />
      <ButtonWrap1 />
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap">Rederij Abel</p>
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

function TableCell() {
  return (
    <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[24px] pr-[16px] py-[16px] relative size-full">
          <TextAndSupportingText2 />
          <div className="-translate-y-1/2 absolute bg-white right-[16px] rounded-[6px] top-1/2" data-name="Buttons/Button">
            <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
              <TextPadding1 />
            </div>
            <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-[192px] relative z-[6]" data-name="Column">
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
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">{`Janson & Janson B.V.`}</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">De Volharding C.V.</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">Rederij Alfa</p>
          </div>
        </div>
      </div>
      <TableCell />
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">Vaart Wel B.V.</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">Flevo Shipping</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">De Blauwe Golf B.V.</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">IJsseldelta Transport</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">De Nieuwe Hanze N.V.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-end justify-center leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">€3,40 per ton</p>
      <p className="relative shrink-0 text-[#475467]">+10%</p>
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-end justify-center leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">€3,60 per ton</p>
      <p className="relative shrink-0 text-[#dc6803]">-4%</p>
    </div>
  );
}

function TextAndSupportingText5() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-end justify-center leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">€3,70 per ton</p>
      <p className="relative shrink-0 text-[#475467]">+10%</p>
    </div>
  );
}

function TextAndSupportingText6() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-end justify-center leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">€3,80 per ton</p>
      <p className="relative shrink-0 text-[#475467]">+5%</p>
    </div>
  );
}

function TextAndSupportingText7() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-end justify-center leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">€3,90 per ton</p>
      <p className="relative shrink-0 text-[#475467]">+4%</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[112px] relative shrink-0 w-[116px] z-[5]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Vrachtprijs</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end p-[16px] relative size-full">
            <TextAndSupportingText3 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end p-[16px] relative size-full">
            <TextAndSupportingText4 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end p-[16px] relative size-full">
            <TextAndSupportingText5 />
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end p-[16px] relative size-full">
            <TextAndSupportingText6 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end p-[16px] relative size-full">
            <TextAndSupportingText7 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[112px] relative shrink-0 w-[112px] z-[4]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex items-center justify-end px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Tonnage</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">2.345 ton</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">3.678 ton</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">2.890 ton</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-end px-[16px] py-[12px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">4.123 ton</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">3.456 ton</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">2.765 ton</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">3.234 ton</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">4.000 ton</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-end p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">2.111 ton</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#dc6803] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Za 14 Feb, 16:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#dc6803] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Eergisteren, 9:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[139px] z-[3]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table header">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Deadline</p>
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
      <TableCell1 />
      <TableCell2 />
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Morgen, 10:00</p>
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Morgen, 11:00</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Do 19 Feb, 11:15</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Vr 20 Feb</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Vr 20 Feb</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Za 21 Feb</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">-</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[140px] z-[2]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Status</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <div className="bg-[#ecfdf3] content-stretch flex gap-[4px] items-center pl-[4px] pr-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#abefc6] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="check">
                <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
                  <div className="absolute inset-[-13.64%_-9.38%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 7">
                      <path d={svgPaths.p1c198100} id="Icon" stroke="var(--stroke-0, #079455)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#067647] text-[12px] text-center whitespace-nowrap">Goedgekeurd</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <div className="bg-[#ecfdf3] content-stretch flex gap-[4px] items-center pl-[4px] pr-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#abefc6] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="check">
                <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
                  <div className="absolute inset-[-13.64%_-9.38%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 7">
                      <path d={svgPaths.p1c198100} id="Icon" stroke="var(--stroke-0, #079455)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#067647] text-[12px] text-center whitespace-nowrap">Goedgekeurd</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <div className="bg-[#eff8ff] content-stretch flex gap-[4px] items-center pl-[4px] pr-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#b2ddff] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="send-01">
                <div className="absolute inset-[9.96%_9.96%_9.91%_9.9%]" data-name="Icon">
                  <div className="absolute inset-[-7.8%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.1159 11.1159">
                      <path d={svgPaths.p39d66500} id="Icon" stroke="var(--stroke-0, #2E90FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#175cd3] text-[12px] text-center whitespace-nowrap">Bod verstuurd</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <div className="bg-[#eff8ff] content-stretch flex gap-[4px] items-center pl-[4px] pr-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#b2ddff] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="mail-04">
                <div className="absolute inset-[7.86%_8.33%_12.5%_8.33%]" data-name="Icon">
                  <div className="absolute inset-[-7.85%_-7.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5006 11.0573">
                      <path d={svgPaths.p2c3a6480} id="Icon" stroke="var(--stroke-0, #2E90FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#175cd3] text-[12px] text-center whitespace-nowrap">Bod ontvangen</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <div className="bg-[#fef3f2] content-stretch flex gap-[4px] items-center pl-[4px] pr-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#fecdca] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x-close">
                <div className="absolute inset-1/4" data-name="Icon">
                  <div className="absolute inset-[-12.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.5 7.5">
                      <path d={svgPaths.p2418cd00} id="Icon" stroke="var(--stroke-0, #D92D20)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#b42318] text-[12px] text-center whitespace-nowrap">Afgewezen</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <div className="bg-white content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="relative shrink-0 size-[8px]" data-name="_Dot">
                <div className="absolute left-px size-[6px] top-px" data-name="Dot">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" fill="var(--fill-0, #2E90FA)" id="Dot" r="3" />
                  </svg>
                </div>
              </div>
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">Via werklijst</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <div className="bg-white content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="relative shrink-0 size-[8px]" data-name="_Dot">
                <div className="absolute left-px size-[6px] top-px" data-name="Dot">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" fill="var(--fill-0, #2E90FA)" id="Dot" r="3" />
                  </svg>
                </div>
              </div>
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">Via werklijst</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <div className="bg-white content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="relative shrink-0 size-[8px]" data-name="_Dot">
                <div className="absolute left-px size-[6px] top-px" data-name="Dot">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" fill="var(--fill-0, #2E90FA)" id="Dot" r="3" />
                  </svg>
                </div>
              </div>
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">Via werklijst</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[16px] relative size-full">
            <div className="bg-white content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
              <div className="relative shrink-0 size-[8px]" data-name="_Dot">
                <div className="absolute left-px size-[6px] top-px" data-name="Dot">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" fill="var(--fill-0, #2E90FA)" id="Dot" r="3" />
                  </svg>
                </div>
              </div>
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#344054] text-[12px] text-center whitespace-nowrap">Via werklijst</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContrastBorder() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText8() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Erick Nieuwkoop</p>
      <p className="relative shrink-0 text-[#475467]">Ma 9 Feb 07:28</p>
    </div>
  );
}

function ContrastBorder1() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText9() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Mitchell den Hoed</p>
      <p className="relative shrink-0 text-[#475467]">Di 10 Feb 19:53</p>
    </div>
  );
}

function ContrastBorder2() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText10() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Khoa Nguyen</p>
      <p className="relative shrink-0 text-[#475467]">Zo 8 Feb 21:12</p>
    </div>
  );
}

function ContrastBorder3() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText11() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Pelger de Jong</p>
      <p className="relative shrink-0 text-[#475467]">Za 7 Feb 18:39</p>
    </div>
  );
}

function ContrastBorder4() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText12() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Mitchell den Hoed</p>
      <p className="relative shrink-0 text-[#475467]">Vr 6 Feb 11:47</p>
    </div>
  );
}

function ContrastBorder5() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText13() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Khoa Nguyen</p>
      <p className="relative shrink-0 text-[#475467]">Vr 6 Feb 09:01</p>
    </div>
  );
}

function ContrastBorder6() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText14() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Khoa Nguyen</p>
      <p className="relative shrink-0 text-[#475467]">Do 5 Feb 16:22</p>
    </div>
  );
}

function ContrastBorder7() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText15() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Jan-Willem van der Kraan</p>
      <p className="relative shrink-0 text-[#475467]">Do 5 Feb 14:55</p>
    </div>
  );
}

function ContrastBorder8() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText16() {
  return (
    <div className="content-stretch flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal items-start leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Erick Nieuwkoop</p>
      <p className="relative shrink-0 text-[#475467]">Wo 11 Feb 12:06</p>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[200px] relative shrink-0 w-[239px] z-[1]" data-name="Column">
      <div className="h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Laatste update</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar1} />
              <ContrastBorder />
            </div>
            <TextAndSupportingText8 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar2} />
              <ContrastBorder1 />
            </div>
            <TextAndSupportingText9 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar3} />
              <ContrastBorder2 />
            </div>
            <TextAndSupportingText10 />
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
              <ContrastBorder3 />
            </div>
            <TextAndSupportingText11 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar2} />
              <ContrastBorder4 />
            </div>
            <TextAndSupportingText12 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar3} />
              <ContrastBorder5 />
            </div>
            <TextAndSupportingText13 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar3} />
              <ContrastBorder6 />
            </div>
            <TextAndSupportingText14 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar4} />
              <ContrastBorder7 />
            </div>
            <TextAndSupportingText15 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar1} />
              <ContrastBorder8 />
            </div>
            <TextAndSupportingText16 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="h-full relative shrink-0 w-[1448px]" data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center p-[24px] relative size-full">
          <PageHeader1 />
          <div className="content-stretch flex flex-col gap-[20px] isolate items-start pt-[24px] relative shrink-0 w-[1116px]" data-name="Section header">
            <Content5 />
          </div>
          <div className="content-stretch flex items-center justify-between max-w-[1116px] py-[20px] relative shrink-0 w-full" data-name="Pagination">
            <Amount />
            <Navigation2 />
          </div>
          <div className="bg-white content-stretch flex h-[692px] isolate items-start max-w-[1116px] relative shrink-0 w-[1116px]" data-name="Onderhandelingen tabel/Lading">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-231px)] size-[20px] top-[calc(50%-14px)] z-[10]" data-name="Cursor">
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
            <Column />
            <Column1 />
            <Column2 />
            <Column3 />
            <Column4 />
            <Column5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content8() {
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
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Data">
      <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Buttons/Button">
          <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px overflow-hidden relative text-[#145990] text-[14px] text-ellipsis whitespace-nowrap">CRG164</p>
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Label">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Partij</p>
      </div>
      <Data />
    </div>
  );
}

function Data1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Data">
      <div className="content-stretch flex flex-col items-start px-[12px] relative w-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Buttons/Button">
          <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px overflow-hidden relative text-[#145990] text-[14px] text-ellipsis whitespace-nowrap">CRG164-01</p>
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Label">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Subpartij</p>
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
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">2.000 t</p>
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
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Tonnage</p>
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
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[0] min-h-px min-w-px relative text-[#101828] text-[0px] text-[14px]">
              <span className="leading-[20px]">
                Merganser
                <br aria-hidden="true" />
              </span>
              <span className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px]">Zeeboot</span>
            </p>
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
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Ex.</p>
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
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">Houtpellets (0571)</p>
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
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Lading</p>
      </div>
      <Data4 />
    </div>
  );
}

function Data5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">USA/FRAM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Label">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Subsoort</p>
      </div>
      <Data5 />
    </div>
  );
}

function Data6() {
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

function Row6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Label">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Soortelijk gewicht</p>
      </div>
      <Data6 />
    </div>
  );
}

function Data7() {
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

function Row7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-[144px]">Inhoud</p>
      <Data7 />
    </div>
  );
}

function Badges() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px relative" data-name="Badges">
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

function Label() {
  return (
    <div className="bg-white h-[36px] relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative size-full">
          <Badges />
        </div>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <Label />
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Label">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Bijzonderheden</p>
      </div>
      <Data8 />
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-[144px]">Laadhaven</p>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]" data-name="Label">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
            <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#101828] text-[0px] text-[14px] w-[163.333px]">
              <span className="leading-[20px]">IJmuiden Buitenspuikkanaal</span>
              <span className="leading-[20px]">
                <br aria-hidden="true" />
              </span>
              <span className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] text-[#475467]">Amsterdam</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">Di 13 Jan 10:05</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-[144px]">Laaddatum</p>
      <Data9 />
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-[144px]">Loshaven</p>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]" data-name="Label">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
            <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#101828] text-[0px] text-[14px] w-[163.333px]">
              <span className="leading-[20px]">Eemhaven</span>
              <span className="leading-[20px]">
                <br aria-hidden="true" />
              </span>
              <span className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] text-[#475467]">Rotterdam</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
            <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px]">Do 15 Jan 10:05</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-[144px]">Losdatum</p>
      <Data10 />
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#101828] text-[14px] w-full">Agro Delta Groep</p>
        </div>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <Label1 />
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Label">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Relatie</p>
      </div>
      <Data11 />
    </div>
  );
}

function Label2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#101828] text-[0px] text-[14px] whitespace-nowrap">
            <span className="leading-[20px]">
              Jesper den Oud
              <br aria-hidden="true" />
            </span>
            <span className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] text-[#145990]">jesper@adg.nl</span>
            <span className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px]">
              <br aria-hidden="true" />
              +31 (0)10 12 34 56 78
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <Label2 />
    </div>
  );
}

function Row14() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Label">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Contactgegevens</p>
      </div>
      <Data12 />
    </div>
  );
}

function Frame1() {
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

function Data13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <Label3 />
    </div>
  );
}

function Row15() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-[144px]">Eigenaar</p>
      <Data13 />
    </div>
  );
}

function Label4() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <div className="flex flex-col font-['Hanken_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#dc6803] text-[14px] whitespace-nowrap">
            <p className="leading-[20px]">Eergisteren, 9:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Data">
      <Label4 />
    </div>
  );
}

function Row16() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-[144px]">Deadline</p>
      <Data14 />
    </div>
  );
}

function Subsection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Subsection">
      <Row />
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
      <Row14 />
      <Frame1 />
      <Row15 />
      <Row16 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center px-[24px] py-[16px] relative shrink-0 w-[400px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-l border-solid inset-0 pointer-events-none" />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-full">Partij krijgt voorrang ten op zichte van de andere partijen in april.</p>
      <Subsection />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col items-center px-[24px] relative shrink-0 w-[400px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-l border-solid inset-0 pointer-events-none" />
      <Section1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="Container">
      <Content3 />
      <div className="h-full relative shrink-0 w-[400px]" data-name="Sidebar/Markt/Eigen lading">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-l border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-center pt-[16px] px-[24px] relative size-full">
            <Content8 />
            <Section />
          </div>
        </div>
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative" data-name="Modal">
      <PageHeader />
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <Modal />
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
      <Container />
    </div>
  );
}

export default function MarktPijplijnEigenLadingDetailOnderhandelingen() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Markt - Pijplijn - Eigen lading detail - Onderhandelingen">
      <VlootVaartuigenAllesDesktop />
    </div>
  );
}