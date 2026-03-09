import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";
import { toast } from "sonner";
import svgPaths from "../../imports/svg-kcwma38iau";
// import imgAvatar from "figma:asset/a2737d3b5b234fc04041650cb9f114889c6859da.png";
const imgAvatar = "";

interface TimelineEvent {
  id: string;
  type: 'sent' | 'updated' | 'received' | 'quote' | 'worklist' | 'approved';
  title: string;
  description?: string;
  timestamp: string;
  avatar?: string;
  isLatest?: boolean;
  quote?: string;
  details?: {
    title?: string;
    subtitle?: string;
    loadingLocation?: string;
    loadingDate?: string;
    unloadingLocation?: string;
    unloadingDate?: string;
    deadline?: string;
    liggeldLaden?: string;
    liggeldLadenSub?: string;
    lostijd?: string;
    liggeldLossen?: string;
    liggeldLossenSub?: string;
    laagwaterToeslag?: string;
    laagwaterToeslagSub?: string;
  };
  message?: string;
  showActions?: boolean;
  showPlanningButton?: boolean;
}

const mockTimelineEvents: TimelineEvent[] = [
  {
    id: '1',
    type: 'sent',
    title: 'Bod verstuurd',
    description: 'per mail',
    timestamp: '6 uur geleden',
    avatar: imgAvatar,
    isLatest: true,
    details: {
      title: '3.000 ton Houtpellets',
      subtitle: '€3,50 per ton (-20%)',
      loadingLocation: 'Rotterdam Waalhaven',
      loadingDate: 'Ma 12 Jan 10:00',
      unloadingLocation: 'Nijmegen Waal',
      unloadingDate: 'Vr 20 Jan',
      deadline: 'Wo 4 Feb, 2026',
      liggeldLaden: 'Conform Nederlands Wettelijk',
      liggeldLadenSub: 'Duwbak gelijk aan motorschepen',
      lostijd: 'Conform Nederlands Wettelijk',
      liggeldLossen: 'Conform Nederlands Wettelijk',
      liggeldLossenSub: 'Duwbak gelijk aan motorschepen',
      laagwaterToeslag: 'Basis IJsselkop - m Twentenkanaal',
      laagwaterToeslagSub: '2,50m / 10% per dm'
    },
    showActions: true
  },
  {
    id: '2',
    type: 'updated',
    title: 'Bod bijgewerkt',
    timestamp: '6 uur geleden',
    avatar: imgAvatar,
    quote: '"Lading aangepast."',
    details: {
      title: 'Lading',
      subtitle: '2.000 ton Houtpellets → 3.000 ton Houtpellets'
    }
  },
  {
    id: '3',
    type: 'received',
    title: 'Bod ontvangen',
    timestamp: '6 uur geleden',
    avatar: imgAvatar,
    quote: '"Lading toegevoegd."',
    details: {
      title: 'Lading',
      subtitle: '2.000 ton Houtpellets'
    }
  },
  {
    id: '4',
    type: 'sent',
    title: 'Bod verstuurd',
    timestamp: '6 uur geleden',
    avatar: imgAvatar,
    quote: '"Voor het eerst gesproken."',
    details: {
      title: 'Vrachtprijs',
      subtitle: '€3,50 per ton',
      loadingLocation: 'Rotterdam Europoort',
      loadingDate: 'Jan 4, 2025 10:00',
      unloadingLocation: 'Dordrecht Zeehaven',
      unloadingDate: 'Melden bij aankomst'
    }
  },
  {
    id: '5',
    type: 'worklist',
    title: 'Via werklijst',
    timestamp: '6 uur geleden',
    avatar: imgAvatar,
    quote: '"Goedendag,',
    message: 'Zie bijgevoegd beschikbare vaartuigen en lading van dinsdag 27 januari. Bij interesse, neem contact op met bevrachtingenenredijdejong.nl of bel +31 (0)10-2311510."'
  }
];

interface NegotiationSidebarProps {
  onClose: () => void;
}

export default function NegotiationSidebar({ onClose }: NegotiationSidebarProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>(mockTimelineEvents);
  const [isSentToPlanning, setIsSentToPlanning] = useState(false);

  const handleNewBid = () => {
    navigate(`/markt/pijplijn/${id}/nieuwbod`, {
      state: { negotiationId: '1' }
    });
  };

  const handleApprove = () => {
    // Create the new "Bod goedgekeurd" entry
    const approvedEntry: TimelineEvent = {
      id: 'approved-1',
      type: 'approved',
      title: 'Bod goedgekeurd',
      timestamp: '6 uur geleden',
      avatar: imgAvatar,
      isLatest: true,
      details: {
        title: '3.000 ton Houtpellets',
        subtitle: '€3,50 per ton (-20%)',
        loadingLocation: 'Rotterdam Waalhaven',
        loadingDate: 'Ma 12 Jan 10:00',
        unloadingLocation: 'Nijmegen Waal',
        unloadingDate: 'Vr 20 Jan',
        deadline: 'Wo 4 Feb, 2026',
        liggeldLaden: 'Conform Nederlands Wettelijk',
        liggeldLadenSub: 'Duwbak gelijk aan motorschepen',
        lostijd: 'Conform Nederlands Wettelijk',
        liggeldLossen: 'Conform Nederlands Wettelijk',
        liggeldLossenSub: 'Duwbak gelijk aan motorschepen',
        laagwaterToeslag: 'Basis IJsselkop - m Twentenkanaal',
        laagwaterToeslagSub: '2,50m / 10% per dm'
      },
      showPlanningButton: true
    };

    // Update the first entry to be compact, showing only the changes
    const compactFirstEntry: TimelineEvent = {
      ...timelineEvents[0],
      description: 'per mail',
      quote: '"Vrachtprijs aangepast."',
      details: {
        title: 'Vrachtprijs',
        subtitle: '€3,20 per ton → €3,50 per ton'
      },
      showActions: false
    };

    // Update the timeline: add approved entry at top, make first entry compact
    const updatedEvents = [
      approvedEntry,
      compactFirstEntry,
      ...timelineEvents.slice(1)
    ];
    
    setTimelineEvents(updatedEvents);
  };

  const handleSendToPlanning = () => {
    setIsSentToPlanning(true);
    toast.success('Bod doorgestuurd naar laadplanning');
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'sent':
        return (
          <div className="bg-[#e3effb] relative rounded-[9999px] shrink-0 size-[32px]">
            <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]">
              <div className="absolute inset-[9.96%_9.96%_9.91%_9.9%]">
                <div className="absolute inset-[-5.2%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1546 14.1546">
                    <path d={svgPaths.p399e68f0} stroke="#1567A4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      case 'updated':
        return (
          <div className="bg-[#f2f4f7] relative rounded-[9999px] shrink-0 size-[32px]">
            <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]">
              <div className="absolute inset-[9.05%_9.05%_10.42%_10.42%]">
                <div className="absolute inset-[-5.17%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.219 14.219">
                    <path d={svgPaths.p35e363c0} stroke="#667085" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      case 'received':
        return (
          <div className="bg-[#e3effb] relative rounded-[9999px] shrink-0 size-[32px]">
            <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]">
              <div className="absolute inset-[7.86%_8.33%_12.5%_8.33%]">
                <div className="absolute inset-[-5.23%_-5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6671 14.0764">
                    <path d={svgPaths.p1e0d3680} stroke="#1567A4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      case 'worklist':
        return (
          <div className="bg-[#f2f4f7] relative rounded-[9999px] shrink-0 size-[32px]">
            <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]">
              <div className="absolute inset-[8.33%_16.67%]">
                <div className="absolute inset-[-5%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 14.6667">
                    <path d={svgPaths.pc4c6f00} stroke="#667085" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      case 'approved':
        return (
          <div className="bg-[#dcfae6] relative rounded-[9999px] shrink-0 size-[32px]">
            <div className="absolute left-[8px] overflow-clip size-[16px] top-[8px]">
              <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                <div className="absolute inset-[-9.09%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 8.66667">
                    <path d={svgPaths.pb811a00} stroke="#079455" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white border-l border-[#eaecf0] w-[640px] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="border-b border-[#eaecf0] px-[24px] py-[20px]">
        <div className="flex items-start justify-between">
          <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[28px] text-[#101828] text-[18px]">
            Onderhandeling met Rederij Alfa
          </p>
          <button 
            onClick={onClose}
            className="overflow-clip relative shrink-0 size-[24px] hover:opacity-70"
          >
            <div className="absolute inset-[8.33%]">
              <div className="absolute inset-[-5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                  <path d={svgPaths.p2418cd00} stroke="#667085" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-[24px] py-[20px] space-y-0">
          {timelineEvents.map((event, index) => (
            <div key={event.id} className="flex gap-[12px]">
              {/* Avatar wrap with icon and connector */}
              <div className="relative self-stretch shrink-0">
                <div className="flex flex-col items-center size-full">
                  <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
                    {getIconForType(event.type)}
                    {index !== timelineEvents.length - 1 && (
                      <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" />
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-[32px]">
                {/* Header with title, timestamp, avatar and menu */}
                <div className="flex items-center justify-between h-[32px] mb-[12px]">
                  <div className="flex items-center gap-[8px] flex-1">
                    <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] text-[#344054] text-[14px]">
                      {event.title}
                      {event.description && (
                        <span className="text-[#145990] underline decoration-solid ml-[4px]">
                          {event.description}
                        </span>
                      )}
                    </p>
                    <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] text-[#475467] text-[12px]">
                      {event.timestamp}
                    </p>
                  </div>
                  <div className="flex items-center gap-0">
                    <div className="overflow-clip relative rounded-[9999px] shrink-0 size-[24px]">
                      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={event.avatar} />
                      <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" />
                    </div>
                    <button className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0 size-[36px] hover:bg-rdj-bg-primary-hover">
                      <div className="overflow-clip relative shrink-0 size-[20px]">
                        <div className="absolute inset-[16.67%_45.83%]">
                          <div className="absolute inset-[-7.5%_-60%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.66667 15.3333">
                              <path d={svgPaths.p32d79700} stroke="#98A2B3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              <path d={svgPaths.p61f2c00} stroke="#98A2B3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              <path d={svgPaths.p2a96b080} stroke="#98A2B3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Quote */}
                {event.quote && (
                  <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] text-[#475467] text-[14px] mb-[12px]">
                    {event.quote}
                  </p>
                )}

                {/* Card with details */}
                {event.details && (
                  <div className="bg-white relative rounded-[8px] shrink-0 w-full mb-[12px]">
                    <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                    <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full">
                      {/* Title and subtitle */}
                      {event.details.title && (
                        <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
                          <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] text-[14px] text-black">
                            {event.details.title}
                          </p>
                          {event.details.subtitle && (
                            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] text-[#475467] text-[12px]">
                              {event.details.subtitle.includes('→') ? (
                                event.details.subtitle
                              ) : event.details.subtitle.includes('(-') ? (
                                <>
                                  {event.details.subtitle.split('(-')[0]}
                                  <span className="text-[#079455]">
                                    (-{event.details.subtitle.split('(-')[1]}
                                  </span>
                                </>
                              ) : (
                                event.details.subtitle
                              )}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Location info */}
                      {event.details.loadingLocation && event.details.unloadingLocation && (
                        <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                          <div className="absolute bg-[#d0d5dd] bottom-[16px] left-[5.5px] top-[14px] w-px" />
                          {/* Loading */}
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
                            <div className="overflow-clip relative shrink-0 size-[12px]">
                              <div className="absolute inset-[8.33%]">
                                <div className="absolute inset-[-5%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                                    <path d={svgPaths.p16fbdc80} stroke="#667085" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal gap-[4px] items-center min-h-px min-w-px relative text-[12px]">
                              <p className="flex-[1_0_0] leading-[18px] min-h-px min-w-px overflow-hidden relative text-[#101828] text-ellipsis">
                                {event.details.loadingLocation}
                              </p>
                              <p className="leading-[18px] text-[#667085]">
                                {event.details.loadingDate}
                              </p>
                            </div>
                          </div>
                          {/* Unloading */}
                          <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full">
                            <div className="overflow-clip relative shrink-0 size-[12px]">
                              <div className="absolute inset-[8.33%_16.67%]">
                                <div className="absolute inset-[-5%_-6.25%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 11">
                                    <path d={svgPaths.p1f9800c0} stroke="#667085" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d={svgPaths.p20a0a700} stroke="#667085" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] font-['Hanken_Grotesk:Regular',sans-serif] font-normal gap-[4px] items-center min-h-px min-w-px relative text-[12px]">
                              <p className="flex-[1_0_0] leading-[18px] min-h-px min-w-px overflow-hidden relative text-[#101828] text-ellipsis">
                                {event.details.unloadingLocation}
                              </p>
                              <p className="leading-[18px] text-[#667085]">
                                {event.details.unloadingDate}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Bid details table */}
                {event.details?.deadline && (
                  <div className="content-stretch flex flex-col gap-[16px] items-start py-[12px] relative shrink-0 w-full">
                    {/* Deadline */}
                    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative self-stretch shrink-0 text-[#475467] text-[12px] w-[200px]">
                        Deadline
                      </p>
                      <div className="content-stretch flex flex-[1_0_0] h-[18px] items-center min-h-px min-w-px relative">
                        <p className="flex-[1_0_0] font-['Hanken_Grotesk:Bold',sans-serif] font-bold h-full leading-[18px] min-h-px min-w-px relative text-[#344054] text-[12px]">
                          {event.details.deadline}
                        </p>
                      </div>
                    </div>

                    {/* Liggeld laden */}
                    {event.details.liggeldLaden && (
                      <div className="content-stretch flex gap-[8px] items-start leading-[18px] relative shrink-0 text-[12px] w-full">
                        <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative self-stretch shrink-0 text-[#475467] w-[200px]">
                          Liggeld laden
                        </p>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                          <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#344054] w-full">
                            {event.details.liggeldLaden}
                          </p>
                          {event.details.liggeldLadenSub && (
                            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-full">
                              {event.details.liggeldLadenSub}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Lostijd */}
                    {event.details.lostijd && (
                      <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                        <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative self-stretch shrink-0 text-[#475467] text-[12px] w-[200px]">
                          Lostijd
                        </p>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                          <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#344054] text-[12px] w-full">
                            {event.details.lostijd}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Liggeld lossen */}
                    {event.details.liggeldLossen && (
                      <div className="content-stretch flex gap-[8px] items-start leading-[18px] relative shrink-0 text-[12px] w-full">
                        <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative self-stretch shrink-0 text-[#475467] w-[200px]">
                          Liggeld lossen
                        </p>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                          <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#344054] w-full">
                            {event.details.liggeldLossen}
                          </p>
                          {event.details.liggeldLossenSub && (
                            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-full">
                              {event.details.liggeldLossenSub}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Laagwater toeslag */}
                    {event.details.laagwaterToeslag && (
                      <div className="content-stretch flex gap-[8px] items-start leading-[18px] relative shrink-0 text-[12px] w-full">
                        <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative self-stretch shrink-0 text-[#475467] w-[200px]">
                          Laagwater toeslag
                        </p>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                          <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold h-[18px] relative shrink-0 text-[#344054] w-full">
                            {event.details.laagwaterToeslag}
                          </p>
                          {event.details.laagwaterToeslagSub && (
                            <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#475467] w-full">
                              {event.details.laagwaterToeslagSub}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Message */}
                {event.message && (
                  <p className="font-['Hanken_Grotesk:Regular',sans-serif] font-normal leading-[20px] text-[#475467] text-[14px] mb-[12px]">
                    {event.message}
                  </p>
                )}

                {/* Actions */}
                {event.showActions && (
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                    {/* Afgewezen */}
                    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] hover:opacity-80 cursor-pointer">
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[4px] items-center justify-center px-[14px] py-[10px] relative w-full">
                          <div className="overflow-clip relative shrink-0 size-[20px]">
                            <div className="absolute inset-[29.17%]">
                              <div className="absolute inset-[-10%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                                  <path d={svgPaths.p25b911c0} stroke="#DC6803" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] text-[#344054] text-[14px] whitespace-nowrap">
                            Afgewezen
                          </p>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                    </div>

                    {/* Nieuw bod */}
                    <button 
                      onClick={handleNewBid}
                      className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] hover:opacity-80"
                    >
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[4px] items-center justify-center px-[14px] py-[10px] relative w-full">
                          <div className="overflow-clip relative shrink-0 size-[20px]">
                            <div className="absolute inset-[20.83%]">
                              <div className="absolute inset-[-7.14%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                                  <path d={svgPaths.p1b67fa00} stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] text-[#344054] text-[14px] whitespace-nowrap">
                            Nieuw bod
                          </p>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                    </button>

                    {/* Goedgekeurd */}
                    <button 
                      onClick={handleApprove}
                      className="bg-[#1567a4] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px] hover:opacity-90"
                    >
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[4px] items-center justify-center px-[14px] py-[10px] relative w-full">
                          <div className="overflow-clip relative shrink-0 size-[20px]">
                            <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                              <div className="absolute inset-[-9.09%_-6.25%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.8333">
                                  <path d={svgPaths.p38669a00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] text-[14px] text-white whitespace-nowrap">
                            Goedgekeurd
                          </p>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border border-[#1567a4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                    </button>
                  </div>
                )}

                {/* Doorsturen naar laadplanning button (shows after approval) */}
                {event.showPlanningButton && (
                  <div className="content-stretch flex items-center relative shrink-0 w-full">
                    {isSentToPlanning ? (
                      <div className="bg-white flex-1 relative rounded-[6px]">
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[4px] items-center justify-center px-[14px] py-[10px] relative w-full">
                            <div className="overflow-clip relative shrink-0 size-[20px]">
                              <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                                <div className="absolute inset-[-9.09%_-6.25%]">
                                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.8333">
                                    <path d={svgPaths.p38669a00} stroke="#98A2B3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] text-[#667085] text-[14px] whitespace-nowrap">
                              Doorgestuurd naar laadplanning
                            </p>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#f2f4f7] border-solid inset-0 pointer-events-none rounded-[6px]" />
                      </div>
                    ) : (
                      <button 
                        onClick={handleSendToPlanning}
                        className="bg-[#1567a4] flex-1 relative rounded-[6px] hover:opacity-90"
                      >
                        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex items-center justify-center px-[14px] py-[10px] relative w-full">
                            <p className="font-['Hanken_Grotesk:Bold',sans-serif] font-bold leading-[20px] text-white text-[14px] whitespace-nowrap">
                              Doorsturen naar laadplanning
                            </p>
                          </div>
                        </div>
                        <div aria-hidden="true" className="absolute border border-[#1567a4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}