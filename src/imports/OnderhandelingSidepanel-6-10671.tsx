import svgPaths from "./svg-por9tp2hoz";
// import imgAvatar from "figma:asset/a2737d3b5b234fc04041650cb9f114889c6859da.png";
const imgAvatar = "";

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[26px] relative shrink-0 text-[#101828] text-[18px] w-full">Onderhandeling met Rederij Alfa</p>
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

function AvatarWrap() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
          <div className="bg-[#dcfae6] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Featured icon">
            <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]" data-name="check">
              <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
                <div className="absolute inset-[-9.09%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8.66667">
                    <path d={svgPaths.pb811a00} id="Icon" stroke="var(--stroke-0, #079455)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" data-name="Connector" />
        </div>
      </div>
    </div>
  );
}

function TextAndSubtext() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative whitespace-nowrap" data-name="Text and subtext">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px]">Bod goedgekeurd</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px]">6 uur geleden</p>
    </div>
  );
}

function ContrastBorder() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext />
      <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
        <ContrastBorder />
      </div>
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0 size-[36px]" data-name="Button close X">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dots-vertical">
          <div className="absolute inset-[16.67%_45.83%]" data-name="Icon">
            <div className="absolute inset-[-7.5%_-60%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 15.3333">
                <g id="Icon">
                  <path d={svgPaths.p32d79700} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p61f2c00} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2a96b080} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleAndSubtitle() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full whitespace-nowrap" data-name="Title and subtitle">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-black">3.000 ton Houtpellets</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[0] overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis">
        <span className="leading-[18px]">{`€3,50 per ton `}</span>
        <span className="leading-[18px] text-[#079455]">(-20%)</span>
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal gap-[4px] items-center min-h-px min-w-px relative text-[12px] whitespace-nowrap" data-name="Text">
      <p className="flex-[1_0_0] leading-[18px] min-h-px min-w-px overflow-hidden relative text-[#101828] text-ellipsis">Salzgitter Stichkanal</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#667085]">
        <p className="leading-[18px]">Ma 12 Jan 10:00</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Row">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="circle">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
              <path d={svgPaths.p16fbdc80} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal gap-[4px] items-center min-h-px min-w-px relative text-[12px] whitespace-nowrap" data-name="Text">
      <p className="flex-[1_0_0] leading-[18px] min-h-px min-w-px overflow-hidden relative text-[#101828] text-ellipsis">Hamburg Veddelkanal</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#667085]">
        <p className="leading-[18px]">Vr 20 Jan</p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Row">
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="marker-pin-01">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Icon">
          <div className="absolute inset-[-5%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 11">
              <g id="Icon">
                <path d={svgPaths.p1f9800c0} stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p20a0a700} stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Text1 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
        <TitleAndSubtitle />
        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="_Card location info">
          <div className="absolute bg-[#d0d5dd] bottom-[16px] left-[5.5px] top-[14px] w-px" data-name="Connector" />
          <Row />
          <Row1 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-center min-h-px min-w-px relative" data-name="cell">
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold h-full leading-[18px] min-h-px min-w-px relative text-[#344054] text-[12px]">Wo 4 Feb, 2026</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative self-stretch shrink-0 text-[#475467] text-[12px] w-[200px]">Deadline</p>
      <Cell />
    </div>
  );
}

function Cell1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="cell">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#344054] w-full">Conform Nederlands Wettelijk</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-full">Duwbak gelijk aan motorschepen</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[18px] relative shrink-0 text-[12px] w-full" data-name="row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative self-stretch shrink-0 text-[#475467] w-[200px]">Liggeld laden</p>
      <Cell1 />
    </div>
  );
}

function Cell2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="cell">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#344054] text-[12px] w-full">Conform Nederlands Wettelijk</p>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative self-stretch shrink-0 text-[#475467] text-[12px] w-[200px]">Lostijd</p>
      <Cell2 />
    </div>
  );
}

function Cell3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="cell">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#344054] w-full">Conform Nederlands Wettelijk</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-full">Duwbak gelijk aan motorschepen</p>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[18px] relative shrink-0 text-[12px] w-full" data-name="row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative self-stretch shrink-0 text-[#475467] w-[200px]">Liggeld lossen</p>
      <Cell3 />
    </div>
  );
}

function Cell4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="cell">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold h-[18px] relative shrink-0 text-[#344054] w-full">Basis IJsselkop - m Twentenkanaal</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-full">2,50m / 10% per dm</p>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[18px] relative shrink-0 text-[12px] w-full" data-name="row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative self-stretch shrink-0 text-[#475467] w-[200px]">Laagwater toeslag</p>
      <Cell4 />
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Doorsturen naar laadplanning</p>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#98a2b3] text-[14px] whitespace-nowrap">Doorgestuurd naar laadplanning</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="Actions">
      <div className="bg-[#1567a4] relative rounded-[6px] shrink-0 w-[548px]" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit] w-full">
          <TextPadding />
        </div>
        <div aria-hidden="true" className="absolute border border-[#1567a4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-[#f2f4f7] relative rounded-[6px] shrink-0 w-full" data-name="Buttons/Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[14px] py-[10px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="check">
              <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
                <div className="absolute inset-[-9.09%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.8333">
                    <path d={svgPaths.p38669a00} id="Icon" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
            </div>
            <TextPadding1 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#f2f4f7] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
    </div>
  );
}

function Bid() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start py-[12px] relative shrink-0 w-full" data-name="Bid">
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
      <Row6 />
      <Actions />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px pb-[32px] relative" data-name="Content">
      <TextAndSupportingText1 />
      <Card />
      <Bid />
    </div>
  );
}

function FeedItemBase() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="_Feed item base">
      <AvatarWrap />
      <Content1 />
    </div>
  );
}

function AvatarWrap1() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
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
          <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" data-name="Connector" />
        </div>
      </div>
    </div>
  );
}

function TextAndSubtext1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative whitespace-nowrap" data-name="Text and subtext">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px]">Bod verstuurd</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px]">6 uur geleden</p>
    </div>
  );
}

function ContrastBorder1() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext1 />
      <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
        <ContrastBorder1 />
      </div>
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0 size-[36px]" data-name="Button close X">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dots-vertical">
          <div className="absolute inset-[16.67%_45.83%]" data-name="Icon">
            <div className="absolute inset-[-7.5%_-60%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 15.3333">
                <g id="Icon">
                  <path d={svgPaths.p32d79700} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p61f2c00} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2a96b080} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageBubble() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message bubble">
      <div aria-hidden="true" className="absolute border-[#f2f4f7] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#344054] text-[14px]">“Vrachtprijs nog even goed doorgenomen.”</p>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-center min-h-px min-w-px relative" data-name="cell">
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold h-full leading-[0] min-h-px min-w-px relative text-[#dc6803] text-[0px] text-[12px]">
        <span className="[text-decoration-skip-ink:none] decoration-solid font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] line-through text-[#667085]">€3,75 per ton</span>
        <span className="leading-[18px] text-[#344054]">{` €3,50 per ton`}</span>
      </p>
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative self-stretch shrink-0 text-[#475467] text-[12px] w-[160px]">Vrachtprijs</p>
      <Cell5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f2f4f7] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <Row7 />
      </div>
    </div>
  );
}

function CardBid() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="card_bid">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <MessageBubble />
        <Frame1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px pb-[32px] relative" data-name="Content">
      <TextAndSupportingText2 />
      <CardBid />
    </div>
  );
}

function FeedItemBase1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="_Feed item base">
      <AvatarWrap1 />
      <Content2 />
    </div>
  );
}

function AvatarWrap2() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
          <div className="bg-[#f2f4f7] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Featured icon">
            <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]" data-name="edit-01">
              <div className="absolute inset-[9.05%_9.05%_10.42%_10.42%]" data-name="Icon">
                <div className="absolute inset-[-5.17%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.219 14.219">
                    <path d={svgPaths.p35e363c0} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" data-name="Connector" />
        </div>
      </div>
    </div>
  );
}

function TextAndSubtext2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative whitespace-nowrap" data-name="Text and subtext">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px]">Bod bijgewerkt</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px]">6 uur geleden</p>
    </div>
  );
}

function ContrastBorder2() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext2 />
      <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
        <ContrastBorder2 />
      </div>
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0 size-[36px]" data-name="Button close X">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dots-vertical">
          <div className="absolute inset-[16.67%_45.83%]" data-name="Icon">
            <div className="absolute inset-[-7.5%_-60%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 15.3333">
                <g id="Icon">
                  <path d={svgPaths.p32d79700} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p61f2c00} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2a96b080} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageBubble1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message bubble">
      <div aria-hidden="true" className="absolute border-[#f2f4f7] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#344054] text-[14px]">“Lading aangepast.”</p>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-center min-h-px min-w-px relative" data-name="cell">
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold h-full leading-[0] min-h-px min-w-px relative text-[#dc6803] text-[0px] text-[12px]">
        <span className="[text-decoration-skip-ink:none] decoration-solid font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] line-through text-[#667085]">2.000 ton Houtpellets</span>
        <span className="leading-[18px] text-[#344054]">{` 3.000 ton Houtpellets`}</span>
      </p>
    </div>
  );
}

function Row8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative self-stretch shrink-0 text-[#475467] text-[12px] w-[160px]">Lading</p>
      <Cell6 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f2f4f7] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <Row8 />
      </div>
    </div>
  );
}

function CardBid1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="card_bid">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <MessageBubble1 />
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px pb-[32px] relative" data-name="Content">
      <TextAndSupportingText3 />
      <CardBid1 />
    </div>
  );
}

function FeedItemBase2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="_Feed item base">
      <AvatarWrap2 />
      <Content3 />
      <div className="absolute left-[343px] size-[20px] top-[408px]" data-name="Cursor">
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

function AvatarWrap3() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
          <div className="bg-[#e3effb] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Featured icon">
            <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]" data-name="mail-04">
              <div className="absolute inset-[7.86%_8.33%_12.5%_8.33%]" data-name="Icon">
                <div className="absolute inset-[-5.23%_-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6671 14.0764">
                    <path d={svgPaths.p1e0d3680} id="Icon" stroke="var(--stroke-0, #1567A4)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" data-name="Connector" />
        </div>
      </div>
    </div>
  );
}

function TextAndSubtext3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative whitespace-nowrap" data-name="Text and subtext">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px]">Bod ontvangen</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px]">6 uur geleden</p>
    </div>
  );
}

function ContrastBorder3() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext3 />
      <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
        <ContrastBorder3 />
      </div>
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0 size-[36px]" data-name="Button close X">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dots-vertical">
          <div className="absolute inset-[16.67%_45.83%]" data-name="Icon">
            <div className="absolute inset-[-7.5%_-60%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 15.3333">
                <g id="Icon">
                  <path d={svgPaths.p32d79700} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p61f2c00} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2a96b080} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageBubble2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message bubble">
      <div aria-hidden="true" className="absolute border-[#f2f4f7] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#344054] text-[14px]">“Lading toegevoegd.”</p>
      </div>
    </div>
  );
}

function Cell7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-center min-h-px min-w-px relative" data-name="cell">
      <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold h-full leading-[18px] min-h-px min-w-px relative text-[#344054] text-[12px]">2.000 ton Houtpellets</p>
    </div>
  );
}

function Row9() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative self-stretch shrink-0 text-[#475467] text-[12px] w-[160px]">Lading</p>
      <Cell7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f2f4f7] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <Row9 />
      </div>
    </div>
  );
}

function CardBid2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="card_bid">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <MessageBubble2 />
        <Frame3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px pb-[32px] relative" data-name="Content">
      <TextAndSupportingText4 />
      <CardBid2 />
    </div>
  );
}

function FeedItemBase3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="_Feed item base">
      <AvatarWrap3 />
      <Content4 />
    </div>
  );
}

function AvatarWrap4() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
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
          <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" data-name="Connector" />
        </div>
      </div>
    </div>
  );
}

function TextAndSubtext4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative whitespace-nowrap" data-name="Text and subtext">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px]">Bod verstuurd</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px]">6 uur geleden</p>
    </div>
  );
}

function ContrastBorder4() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText5() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext4 />
      <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
        <ContrastBorder4 />
      </div>
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0 size-[36px]" data-name="Button close X">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dots-vertical">
          <div className="absolute inset-[16.67%_45.83%]" data-name="Icon">
            <div className="absolute inset-[-7.5%_-60%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 15.3333">
                <g id="Icon">
                  <path d={svgPaths.p32d79700} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p61f2c00} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2a96b080} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageBubble3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message bubble">
      <div aria-hidden="true" className="absolute border-[#f2f4f7] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#344054] text-[14px]">“Voor het eerst gesproken.”</p>
      </div>
    </div>
  );
}

function Cell8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="cell">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold h-[18px] leading-[18px] relative shrink-0 text-[#344054] text-[12px] w-full">€3,50 per ton</p>
    </div>
  );
}

function Row10() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative self-stretch shrink-0 text-[#475467] text-[12px] w-[160px]">Vrachtprijs</p>
      <Cell8 />
    </div>
  );
}

function Cell9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="cell">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold h-[18px] relative shrink-0 text-[#344054] w-full">Basis IJsselkop - m Twentenkanaal</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-full">2,50m / 10% per dm</p>
    </div>
  );
}

function Row11() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[18px] relative shrink-0 text-[12px] w-full" data-name="row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative self-stretch shrink-0 text-[#475467] w-[160px]">Laagwater toeslag</p>
      <Cell9 />
    </div>
  );
}

function Cell10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="cell">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#344054] w-full">Salzgitter</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-full">Jan 4, 2025 10:00</p>
    </div>
  );
}

function Row12() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[18px] relative shrink-0 text-[12px] w-full" data-name="row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative self-stretch shrink-0 text-[#475467] w-[160px]">Laden</p>
      <Cell10 />
    </div>
  );
}

function Cell11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative" data-name="cell">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#344054] w-full">IJmuiden</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-full">Melden bij aankomst</p>
    </div>
  );
}

function Row13() {
  return (
    <div className="content-stretch flex gap-[8px] items-start leading-[18px] relative shrink-0 text-[12px] w-full" data-name="row">
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative self-stretch shrink-0 text-[#475467] w-[160px]">Lossen</p>
      <Cell11 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#f2f4f7] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[12px] relative w-full">
        <Row10 />
        <Row11 />
        <Row12 />
        <Row13 />
      </div>
    </div>
  );
}

function CardBid3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="card_bid">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <MessageBubble3 />
        <Frame />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px pb-[32px] relative" data-name="Content">
      <TextAndSupportingText5 />
      <CardBid3 />
    </div>
  );
}

function FeedItemBase4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="_Feed item base">
      <AvatarWrap4 />
      <Content5 />
    </div>
  );
}

function AvatarWrap5() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Avatar wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
          <div className="bg-[#f2f4f7] relative rounded-[9999px] shrink-0 size-[32px]" data-name="Featured icon">
            <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]" data-name="file-attachment-05">
              <div className="absolute inset-[8.33%_16.67%]" data-name="Icon">
                <div className="absolute inset-[-5%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6667">
                    <path d={svgPaths.pc4c6f00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSubtext5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative whitespace-nowrap" data-name="Text and subtext">
      <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px]">Via werklijst</p>
      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px]">6 uur geleden</p>
    </div>
  );
}

function ContrastBorder5() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText6() {
  return (
    <div className="content-stretch flex h-[32px] items-center relative shrink-0 w-full" data-name="Text and supporting text">
      <TextAndSubtext5 />
      <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
        <ContrastBorder5 />
      </div>
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0 size-[36px]" data-name="Button close X">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dots-vertical">
          <div className="absolute inset-[16.67%_45.83%]" data-name="Icon">
            <div className="absolute inset-[-7.5%_-60%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 15.3333">
                <g id="Icon">
                  <path d={svgPaths.p32d79700} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p61f2c00} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p2a96b080} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MessageBubble4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message bubble">
      <div aria-hidden="true" className="absolute border-[#f2f4f7] border-b border-solid inset-[0_0_-1px_0] pointer-events-none" />
      <div className="content-stretch flex items-start px-[12px] py-[10px] relative w-full">
        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#344054] text-[14px] whitespace-pre-wrap">
          “Goedendag,
          <br aria-hidden="true" />
          <br aria-hidden="true" />
          Zie bijgevoegd beschikbare vaartuigen en lading van dinsdag 27 januari. Bij interesse, neem contact op met bevrachtingen@rederijdejong.nl of bel +31 (0)10-2311510.”
        </p>
      </div>
    </div>
  );
}

function CardBid4() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="card_bid">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <MessageBubble4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px pb-[32px] relative" data-name="Content">
      <TextAndSupportingText6 />
      <CardBid4 />
    </div>
  );
}

function FeedItemBase5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="_Feed item base">
      <AvatarWrap5 />
      <Content6 />
    </div>
  );
}

function ActivityFeed() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Activity feed">
      <FeedItemBase />
      <FeedItemBase1 />
      <FeedItemBase2 />
      <FeedItemBase3 />
      <FeedItemBase4 />
      <FeedItemBase5 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start px-[24px] relative w-full">
        <ActivityFeed />
      </div>
    </div>
  );
}

export default function OnderhandelingSidepanel() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Onderhandeling sidepanel">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-l border-solid inset-0 pointer-events-none shadow-[0px_12px_16px_0px_rgba(16,24,40,0.08),0px_4px_6px_0px_rgba(16,24,40,0.03)]" />
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
      <Container />
    </div>
  );
}