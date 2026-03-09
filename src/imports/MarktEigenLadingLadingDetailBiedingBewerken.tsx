import svgPaths from "./svg-cp0dms5yn7";
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
      <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="_Breadcrumb button base">
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">CRG164-01</p>
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
      <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="_Breadcrumb button base">
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Onderhandelingen</p>
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
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Alpha Barging Rotterdam B.V.</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex items-center pl-[24px] relative shrink-0" data-name="Breadcrumbs">
        <Tabs />
      </div>
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

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-[320px] relative" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[#101828] text-[30px] w-full">Nieuw bod toevoegen</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-start flex flex-wrap gap-[20px_16px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Row">
      <div className="flex flex-[1_0_0] flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#475467] text-[12px] text-ellipsis whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden">Frits van Dam</p>
      </div>
    </div>
  );
}

function TitleAndSubtitle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start justify-center min-h-px min-w-px relative" data-name="Title and subtitle">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black whitespace-nowrap">Alpha Barging Rotterdam B.V.</p>
      <Row1 />
    </div>
  );
}

function TopRow() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Top row">
      <TitleAndSubtitle />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Content">
      <TopRow />
    </div>
  );
}

function CheckboxGroupItem() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="Checkbox group item">
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex items-start p-[16px] relative w-full">
        <Content5 />
      </div>
    </div>
  );
}

function InputBoxGekozen() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="Input box (gekozen)">
      <CheckboxGroupItem />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Row">
      <InputBoxGekozen />
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Header row">
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[26px] min-h-px min-w-px relative text-[#101828] text-[18px]">Bod</p>
    </div>
  );
}

function TextAndSubtext() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[71px]" data-name="Text and subtext">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Uitgaand</p>
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndSubtext />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Content">
      <TextAndSupportingText1 />
    </div>
  );
}

function CheckboxGroupItem1() {
  return (
    <div className="bg-[#f2f8fd] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Checkbox group item">
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center p-[16px] relative w-full">
          <div className="bg-[#e3effb] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Featured icon">
            <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]" data-name="send-01">
              <div className="absolute inset-[9.96%_9.96%_9.91%_9.9%]" data-name="Icon">
                <div className="absolute inset-[-5.2%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1546 14.1546">
                    <path d={svgPaths.p399e68f0} id="Icon" stroke="var(--stroke-0, #1567A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function TextAndSubtext1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[71px]" data-name="Text and subtext">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Inkomend</p>
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndSubtext1 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Content">
      <TextAndSupportingText2 />
    </div>
  );
}

function CheckboxGroupItem2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Checkbox group item">
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center p-[16px] relative w-full">
          <div className="bg-[#e3effb] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Featured icon">
            <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]" data-name="mail-05">
              <div className="absolute inset-[7.86%_8.33%_12.5%_8.33%]" data-name="Icon">
                <div className="absolute inset-[-5.23%_-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6671 14.0764">
                    <path d={svgPaths.p397ea900} id="Icon" stroke="var(--stroke-0, #1567A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function Choices() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Choices">
      <CheckboxGroupItem1 />
      <CheckboxGroupItem2 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative self-stretch" data-name="Row">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Type bod *</p>
      <Choices />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex h-[90px] items-start relative shrink-0 w-full" data-name="List">
      <Row3 />
    </div>
  );
}

function InputDropdown() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Input dropdown">
      <List />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <InputDropdown />
    </div>
  );
}

function TitleAndSubtitle1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative whitespace-nowrap" data-name="Title and subtitle">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black">Schipnaam vanuit markt</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] min-w-full overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-[min-content]">
        <span className="leading-[18px]">{`3.000 ton `}</span>
        <span className="leading-[18px]">{`· `}</span>
        <span className="leading-[18px]">Motorschip</span>
      </p>
    </div>
  );
}

function TopRow1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Top row">
      <TitleAndSubtitle1 />
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

function Row5() {
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
      <Row5 />
      <div className="flex flex-col font-['Hanken_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#667085] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Sinds Ma 12 Jan</p>
      </div>
    </div>
  );
}

function CardMarket() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Card market">
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <TopRow1 />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="_Card location info">
          <Frame />
        </div>
        <div className="absolute content-stretch flex items-center justify-center overflow-clip p-[8px] right-[8px] rounded-[6px] size-[36px] top-[8px]" data-name="Button close X">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                  <path d={svgPaths.p3f40eb80} id="Icon" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputBoxGekozen1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start justify-center min-h-px min-w-px relative" data-name="Input box (gekozen)">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Aangeboden vaartuig</p>
      <CardMarket />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[532px]" data-name="Form section/Bod/Offers">
        <InputBoxGekozen1 />
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[14px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal h-full leading-[20px] min-h-px min-w-px relative text-[#101828] text-[14px] text-left">We hebben interesse in uw aanbod.</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[154px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Opmerking *</p>
      <Input />
    </div>
  );
}

function InputWithLabel1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Tonnage</p>
    </div>
  );
}

function InputDropdown2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input dropdown">
      <InputWithLabel1 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[14px] text-ellipsis text-left whitespace-nowrap">3000</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function InputWithLabel2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input1 />
    </div>
  );
}

function Check() {
  return <div className="absolute bg-white inset-[31.25%] rounded-[9999px]" data-name="Check" />;
}

function Input2() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0" data-name="Input">
      <div className="bg-[#1567a4] overflow-clip relative rounded-[9999px] shrink-0 size-[16px]" data-name="_Checkbox base">
        <Check />
      </div>
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Ton</p>
    </div>
  );
}

function Input3() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0" data-name="Input">
      <div className="relative rounded-[9999px] shrink-0 size-[16px]" data-name="_Checkbox base">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">m³</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0" data-name="List">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <Input2 />
        <TextAndSupportingText3 />
      </div>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <Input3 />
        <TextAndSupportingText4 />
      </div>
    </div>
  );
}

function Inputs() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Inputs">
      <button className="content-stretch cursor-pointer flex flex-col gap-[6px] items-start relative shrink-0 w-[160px]" data-name="Input field">
        <InputWithLabel2 />
      </button>
      <List1 />
    </div>
  );
}

function InputDropdown1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input dropdown">
      <InputDropdown2 />
      <Inputs />
    </div>
  );
}

function InputWithLabel3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Vrachtprijs</p>
    </div>
  );
}

function InputDropdown4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input dropdown">
      <InputWithLabel3 />
    </div>
  );
}

function AddOn() {
  return (
    <div className="content-stretch flex items-center pl-[14px] pr-[12px] py-[10px] relative rounded-bl-[8px] rounded-tl-[8px] shrink-0" data-name="Add-on">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#475467] text-[14px] text-left whitespace-nowrap">€</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-br-[6px] rounded-tr-[6px] self-stretch" data-name="Text input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative size-full">
          <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[14px] text-ellipsis text-left whitespace-nowrap">5,00</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-br-[6px] rounded-tr-[6px]" />
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <AddOn />
      <TextInput />
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

function Check1() {
  return <div className="absolute bg-white inset-[31.25%] rounded-[9999px]" data-name="Check" />;
}

function Input5() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0" data-name="Input">
      <div className="bg-[#1567a4] overflow-clip relative rounded-[9999px] shrink-0 size-[16px]" data-name="_Checkbox base">
        <Check1 />
      </div>
    </div>
  );
}

function TextAndSupportingText5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Per ton</p>
    </div>
  );
}

function Input6() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0" data-name="Input">
      <div className="relative rounded-[9999px] shrink-0 size-[16px]" data-name="_Checkbox base">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function TextAndSupportingText6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Per m³</p>
    </div>
  );
}

function Input7() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0" data-name="Input">
      <div className="relative rounded-[9999px] shrink-0 size-[16px]" data-name="_Checkbox base">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function TextAndSupportingText7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Blokvracht</p>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0" data-name="List">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <Input5 />
        <TextAndSupportingText5 />
      </div>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <Input6 />
        <TextAndSupportingText6 />
      </div>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <Input7 />
        <TextAndSupportingText7 />
      </div>
    </div>
  );
}

function Inputs1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Inputs">
      <button className="content-stretch cursor-pointer flex flex-col gap-[6px] items-start relative shrink-0 w-[160px]" data-name="Input field">
        <InputWithLabel4 />
      </button>
      <List2 />
    </div>
  );
}

function InputDropdown3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input dropdown">
      <InputDropdown4 />
      <Inputs1 />
    </div>
  );
}

function HeaderRow1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Header row">
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[26px] min-h-px min-w-px relative text-[#101828] text-[18px]">Laden</p>
    </div>
  );
}

function InputWithLabel5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Laadtijd</p>
    </div>
  );
}

function InputDropdown6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input dropdown">
      <InputWithLabel5 />
    </div>
  );
}

function Input8() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0" data-name="Input">
      <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="_Checkbox base">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function TextAndSupportingText8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Uren conform Nederlands Wettelijk</p>
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px overflow-hidden relative text-[#101828] text-[14px] text-ellipsis text-left whitespace-nowrap">12</p>
    </div>
  );
}

function Input9() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input9 />
    </div>
  );
}

function Check2() {
  return <div className="absolute bg-white inset-[31.25%] rounded-[9999px]" data-name="Check" />;
}

function Input10() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0" data-name="Input">
      <div className="bg-[#1567a4] overflow-clip relative rounded-[9999px] shrink-0 size-[16px]" data-name="_Checkbox base">
        <Check2 />
      </div>
    </div>
  );
}

function TextAndSupportingText9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Uren</p>
    </div>
  );
}

function Input11() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0" data-name="Input">
      <div className="relative rounded-[9999px] shrink-0 size-[16px]" data-name="_Checkbox base">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function TextAndSupportingText10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Dagen</p>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0" data-name="List">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <Input10 />
        <TextAndSupportingText9 />
      </div>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <Input11 />
        <TextAndSupportingText10 />
      </div>
    </div>
  );
}

function Inputs3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Inputs">
      <button className="content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0 w-[80px]" data-name="Input dropdown">
        <InputWithLabel6 />
      </button>
      <List3 />
    </div>
  );
}

function Inputs2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Inputs">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <Input8 />
        <TextAndSupportingText8 />
      </div>
      <Inputs3 />
    </div>
  );
}

function InputDropdown5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input dropdown">
      <InputDropdown6 />
      <Inputs2 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">Nederlands Wettelijk</p>
    </div>
  );
}

function Input12() {
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

function InputWithLabel7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Liggeld laden</p>
      <Input12 />
    </div>
  );
}

function Input13() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0" data-name="Input">
      <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="_Checkbox base">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function TextAndSupportingText11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Duwbak gelijk aan motorschepen</p>
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[392px]" data-name="List">
      <button className="content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0 w-[392px]" data-name="Input dropdown">
        <InputWithLabel7 />
      </button>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <Input13 />
        <TextAndSupportingText11 />
      </div>
    </div>
  );
}

function HeaderRow2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Header row">
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[26px] min-h-px min-w-px relative text-[#101828] text-[18px]">Lossen</p>
    </div>
  );
}

function InputWithLabel8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Input with label">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Lostijd</p>
    </div>
  );
}

function InputDropdown8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input dropdown">
      <InputWithLabel8 />
    </div>
  );
}

function Input14() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0" data-name="Input">
      <div className="bg-[#1567a4] overflow-clip relative rounded-[4px] shrink-0 size-[16px]" data-name="_Checkbox base">
        <div className="absolute inset-[12.5%] overflow-clip" data-name="check">
          <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
            <div className="absolute inset-[-15.15%_-10.42%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6666 7.1666">
                <path d={svgPaths.p38f57cf0} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6666" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Uren conform Nederlands Wettelijk</p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px overflow-hidden relative text-[#667085] text-[14px] text-ellipsis text-left whitespace-nowrap">8</p>
    </div>
  );
}

function Input15() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel9() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input15 />
    </div>
  );
}

function Check3() {
  return <div className="absolute bg-[#d0d5dd] inset-[31.25%] rounded-[9999px]" data-name="Check" />;
}

function Input16() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0" data-name="Input">
      <div className="bg-[#f9fafb] relative rounded-[9999px] shrink-0 size-[16px]" data-name="_Checkbox base">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <Check3 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function TextAndSupportingText13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Uren</p>
    </div>
  );
}

function Input17() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0" data-name="Input">
      <div className="bg-[#f9fafb] relative rounded-[9999px] shrink-0 size-[16px]" data-name="_Checkbox base">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function TextAndSupportingText14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Dagen</p>
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0" data-name="List">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <Input16 />
        <TextAndSupportingText13 />
      </div>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <Input17 />
        <TextAndSupportingText14 />
      </div>
    </div>
  );
}

function Inputs5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Inputs">
      <button className="content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0 w-[80px]" data-name="Input dropdown">
        <InputWithLabel9 />
      </button>
      <List5 />
    </div>
  );
}

function Inputs4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Inputs">
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <Input14 />
        <TextAndSupportingText12 />
      </div>
      <Inputs5 />
    </div>
  );
}

function InputDropdown7() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input dropdown">
      <InputDropdown8 />
      <Inputs4 />
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-left whitespace-nowrap">Nederlands Wettelijk</p>
    </div>
  );
}

function Input18() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <Content12 />
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
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap">Liggeld lossen</p>
      <Input18 />
    </div>
  );
}

function Input19() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0" data-name="Input">
      <div className="relative rounded-[4px] shrink-0 size-[16px]" data-name="_Checkbox base">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

function TextAndSupportingText15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Duwbak gelijk aan motorschepen</p>
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[392px]" data-name="List">
      <button className="content-stretch cursor-pointer flex flex-col gap-[8px] items-start relative shrink-0 w-[392px]" data-name="Input dropdown">
        <InputWithLabel10 />
      </button>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Checkbox">
        <Input19 />
        <TextAndSupportingText15 />
      </div>
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#145990] text-[14px] whitespace-nowrap">Overige condities</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Form">
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[10px] shrink-0 w-[580px]" data-name="Relatie">
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[26px] relative shrink-0 text-[#101828] text-[18px] w-full">Relatie</p>
        <Row />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[10px] shrink-0 w-[580px]" data-name="Bod">
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        <HeaderRow />
        <Row2 />
        <Row4 />
        <button className="content-stretch cursor-pointer flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Textarea input field">
          <InputWithLabel />
        </button>
        <InputDropdown1 />
        <InputDropdown3 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[10px] shrink-0 w-[580px]" data-name="Laden">
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        <HeaderRow1 />
        <InputDropdown5 />
        <List4 />
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[10px] shrink-0 w-[580px]" data-name="Lossen">
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        <HeaderRow2 />
        <InputDropdown7 />
        <List6 />
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus">
            <div className="absolute inset-[20.83%]" data-name="Icon">
              <div className="absolute inset-[-7.14%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                  <path d={svgPaths.p1b67fa00} id="Icon" stroke="var(--stroke-0, #145990)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[580px] relative shrink-0 w-[580px]">
      <div className="content-stretch flex flex-col gap-[20px] items-start pt-[24px] relative shrink-0 w-full" data-name="Page header">
        <Content4 />
      </div>
      <Form />
    </div>
  );
}

function Content3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[48px] pt-[24px] px-[24px] relative w-full">
          <div className="bg-white content-stretch flex items-center relative shrink-0" data-name="Form">
            <Frame2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Annuleren</p>
    </div>
  );
}

function TextPadding2() {
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
          <TextPadding1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-[#1567a4] relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <TextPadding2 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#1567a4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end max-w-[580px] py-[16px] relative shrink-0 w-full" data-name="Content">
      <Actions />
    </div>
  );
}

function ModalActions() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="_Modal actions">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-solid border-t inset-0 pointer-events-none" />
      <Content13 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Content3 />
      <ModalActions />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[32px] min-w-full relative shrink-0 text-[#101828] text-[24px] w-[min-content]">m/v Merganser - Cargo Solutions Ltd.</p>
      <div className="bg-white content-stretch flex gap-[6px] items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="relative shrink-0 size-[8px]" data-name="_Dot">
          <div className="absolute left-px size-[6px] top-px" data-name="Dot">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #2E90FA)" id="Dot" r="3" />
            </svg>
          </div>
        </div>
        <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-center whitespace-nowrap">Onderhandeling</p>
      </div>
    </div>
  );
}

function TextAndSupportingText16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-[320px] relative" data-name="Text and supporting text">
      <Frame1 />
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#475467] text-[0px] text-[16px] w-full">
        <span className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[24px]">2.000 ton Houtpellets</span>
        <span className="leading-[24px]">{` vanuit `}</span>
        <span className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[24px]">Rotterdam (Do 15 Jan)</span>
        <span className="leading-[24px]">{` naar `}</span>
        <span className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[24px]">Mannheim (Af te stemmen)</span>
      </p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-start flex flex-wrap gap-[20px_16px] items-start relative shrink-0 w-full" data-name="Content">
      <TextAndSupportingText16 />
    </div>
  );
}

function PageHeader1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[1116px] pt-[24px] relative shrink-0 w-full" data-name="Page header">
      <Content14 />
    </div>
  );
}

function DetailsHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start max-w-[1116px] pb-[24px] relative shrink-0 w-full" data-name="Details header">
      <PageHeader1 />
    </div>
  );
}

function Content15() {
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

function Row6() {
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

function Row7() {
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

function Row8() {
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

function Row9() {
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

function Row10() {
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

function Row11() {
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

function Row12() {
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

function Row13() {
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

function Row14() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Label">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Bijzonderheden</p>
      </div>
      <Data8 />
    </div>
  );
}

function Row15() {
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

function Row16() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-[144px]">Laaddatum</p>
      <Data9 />
    </div>
  );
}

function Row17() {
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

function Row18() {
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

function Row19() {
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

function Row20() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Row">
      <div className="bg-white content-stretch flex items-center py-[8px] relative rounded-[6px] shrink-0 w-[144px]" data-name="Label">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#475467] text-[14px]">Contactgegevens</p>
      </div>
      <Data12 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start py-[16px] relative shrink-0 w-full">
      <div className="bg-[#d9d9d9] h-px relative shrink-0 w-full" data-name="Divider">
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function ContrastBorder() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function Label3() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[12px] pr-[6px] py-[8px] relative w-full">
          <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
            <ContrastBorder />
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

function Row21() {
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

function Row22() {
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
      <Row6 />
      <Row7 />
      <Row8 />
      <Row9 />
      <Row10 />
      <Row11 />
      <Row12 />
      <Row13 />
      <Row14 />
      <Row15 />
      <Row16 />
      <Row17 />
      <Row18 />
      <Row19 />
      <Row20 />
      <Frame5 />
      <Row21 />
      <Row22 />
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

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame4 />
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0 w-[400px]" data-name="Sidebar/Markt/Eigen lading">
          <div aria-hidden="true" className="absolute border-[#eaecf0] border-l border-solid inset-0 pointer-events-none" />
          <div className="flex flex-col items-center size-full">
            <div className="content-stretch flex flex-col gap-[16px] items-center pt-[16px] px-[24px] relative size-full">
              <DetailsHeader />
              <Content15 />
              <Section />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Modal() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-full" data-name="Modal">
      <PageHeader />
      <Frame3 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Modal />
    </div>
  );
}

function LadingSubpartijenDesktop() {
  return (
    <div className="bg-white content-stretch flex items-start min-h-[1080px] overflow-clip relative shrink-0 w-[1920px]" data-name="Lading Subpartijen - Desktop">
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

export default function MarktEigenLadingLadingDetailBiedingBewerken() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Markt - Eigen lading - Lading detail - Bieding bewerken">
      <LadingSubpartijenDesktop />
    </div>
  );
}