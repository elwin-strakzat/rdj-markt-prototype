import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { toast, Toaster } from "sonner";
import Sidebar from "../components/Sidebar";
import AddInboxItemModal from "../components/AddInboxItemModal";
import InboxMapView from "../components/InboxMapView";
import SegmentedButtonGroup from "../components/SegmentedButtonGroup";
import PageHeader from "../components/PageHeader";
import FilterDropdown from "../components/FilterDropdown";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import type { Column } from "../components/Table";
import svgPaths from "../../imports/svg-5yigdc067t";
import { useInboxLadingen, updateLadingMarktPriority } from "../data/useMarktData";
import * as apiClient from "../data/api";

type InboxSubView = 'te-beoordelen' | 'interessant' | 'archief';

interface InboxItem {
  id: string;
  title: string;
  relation: string;
  relationLink: string;
  loadLocation: string;
  loadDate: string;
  unloadLocation: string;
  unloadDate: string;
  source: string;
  sourceDate: string;
  matches: number;
  /** Best match type: 'eigen' = match with own item, 'interessant' = match with prio>=3, 'none' = no qualifying match */
  matchType: 'eigen' | 'interessant' | 'none';
  onderhandelingen: number;
  owner: string;
  priority: number;
  selected?: boolean;
}

const mockInboxData: InboxItem[] = [
  // Te beoordelen (priority 0)
  {
    id: '1',
    title: 'Af te stemmen ton Houtpellets (0571)',
    relation: 'Van Dijk Shipping B.V.',
    relationLink: '',
    loadLocation: 'Rotterdam Europoort',
    loadDate: 'Do 15 Jan',
    unloadLocation: 'Af te stemmen',
    unloadDate: '',
    source: 'Automatische feed',
    sourceDate: 'Do 5 Feb 12:44',
    matches: 4,
    matchType: 'interessant',
    onderhandelingen: 0,
    owner: '',
    priority: 0,
  },
  {
    id: '6',
    title: '2.500 ton Graan (0412)',
    relation: 'Limber Benelux N.V.',
    relationLink: 'K. van Hoorn',
    loadLocation: 'Antwerpen Kanaaldok',
    loadDate: 'Ma 19 Jan',
    unloadLocation: 'Krefeld Rheinhafen',
    unloadDate: 'Wo 21 Jan',
    source: 'Automatische feed',
    sourceDate: 'Vr 6 Feb 09:15',
    matches: 3,
    matchType: 'none',
    onderhandelingen: 0,
    owner: '',
    priority: 0,
  },
  {
    id: '7',
    title: '1.800 ton Koolzaad (0298)',
    relation: 'Cargo Solutions Ltd.',
    relationLink: 'Marie Thomas',
    loadLocation: 'Gent Zeehaven',
    loadDate: 'Di 20 Jan',
    unloadLocation: 'Mannheim Industriehafen',
    unloadDate: 'Za 24 Jan',
    source: 'Pager de Jong',
    sourceDate: 'Vr 6 Feb 11:30',
    matches: 5,
    matchType: 'eigen',
    onderhandelingen: 1,
    owner: '',
    priority: 0,
  },
  {
    id: '8',
    title: '4.000 ton Steenkool (0633)',
    relation: 'Eco Transport GmbH',
    relationLink: 'Anna Müller',
    loadLocation: 'Amsterdam Westhaven',
    loadDate: 'Wo 21 Jan',
    unloadLocation: 'Duisburg Ruhrort',
    unloadDate: 'Vr 23 Jan',
    source: 'Automatische feed',
    sourceDate: 'Za 7 Feb 08:00',
    matches: 6,
    matchType: 'eigen',
    onderhandelingen: 2,
    owner: '',
    priority: 0,
  },
  {
    id: '9',
    title: '900 ton Sojameel (0187)',
    relation: 'Global Shipping Inc.',
    relationLink: 'Raj Patel',
    loadLocation: 'Terneuzen Kanaalzone',
    loadDate: 'Do 22 Jan',
    unloadLocation: 'Basel Rheinhafen',
    unloadDate: 'Di 27 Jan',
    source: 'Automatische feed',
    sourceDate: 'Za 7 Feb 14:20',
    matches: 2,
    matchType: 'none',
    onderhandelingen: 0,
    owner: '',
    priority: 0,
  },
  {
    id: '10',
    title: '3.200 ton Ijzererts (0744)',
    relation: 'Trans Logistics Group',
    relationLink: '',
    loadLocation: 'IJmuiden Zeehaven',
    loadDate: 'Af te stemmen',
    unloadLocation: 'Af te stemmen',
    unloadDate: '',
    source: 'Automatische feed',
    sourceDate: 'Ma 9 Feb 10:00',
    matches: 1,
    matchType: 'none',
    onderhandelingen: 0,
    owner: '',
    priority: 0,
  },
  // Interessant (priority >= 3)
  {
    id: '2',
    title: '1.000 - 3.500 ton Houtpellets (0571)',
    relation: 'Rijnvaart Transport N.V.',
    relationLink: 'Lisa Ashbourne',
    loadLocation: 'Amsterdam Westhaven',
    loadDate: 'Do 15 Jan',
    unloadLocation: 'Nijmegen Waal',
    unloadDate: 'Za 17 Jan',
    source: 'Automatische feed',
    sourceDate: 'Do 5 Feb 12:44',
    matches: 7,
    matchType: 'eigen',
    onderhandelingen: 3,
    owner: '',
    priority: 4,
  },
  {
    id: '3',
    title: '3.000 ton Houtpellets (0571)',
    relation: 'Van Dijk Shipping B.V.',
    relationLink: 'Wanda in \'t Veld',
    loadLocation: 'Dordrecht Zeehaven',
    loadDate: 'Af te stemmen',
    unloadLocation: 'Den Bosch Diezehaven',
    unloadDate: 'Week 7 of 8',
    source: 'Automatische feed',
    sourceDate: 'Do 5 Feb 13:24',
    matches: 7,
    matchType: 'interessant',
    onderhandelingen: 2,
    owner: 'avatar1',
    priority: 3,
  },
  {
    id: '11',
    title: '2.000 ton Mais (0355)',
    relation: 'Markel Freight B.V.',
    relationLink: 'H.Q. Duivenvoorde',
    loadLocation: 'Rotterdam Botlek',
    loadDate: 'Ma 19 Jan',
    unloadLocation: 'Strasbourg Port du Rhin',
    unloadDate: 'Do 22 Jan',
    source: 'Pager de Jong',
    sourceDate: 'Do 5 Feb 16:00',
    matches: 9,
    matchType: 'eigen',
    onderhandelingen: 4,
    owner: 'avatar1',
    priority: 5,
  },
  {
    id: '12',
    title: '1.500 ton Kunstmest (0499)',
    relation: 'Andermans B.V.',
    relationLink: 'Cees Andoormans',
    loadLocation: 'Moerdijk Industriehaven',
    loadDate: 'Di 20 Jan',
    unloadLocation: 'Keulen Niehl',
    unloadDate: 'Do 22 Jan',
    source: 'Automatische feed',
    sourceDate: 'Vr 6 Feb 07:30',
    matches: 4,
    matchType: 'interessant',
    onderhandelingen: 1,
    owner: 'avatar2',
    priority: 3,
  },
  // Archief (priority 1-2)
  {
    id: '4',
    title: '3.000 ton Houtpellets (0571)',
    relation: 'Jansen Bevrachting B.V.',
    relationLink: 'P. Janssen',
    loadLocation: 'Moerdijk Industriehaven',
    loadDate: 'Do 15 Jan',
    unloadLocation: 'Groningen Eemskanaal',
    unloadDate: 'Ma 19 Jan',
    source: 'Automatische feed',
    sourceDate: 'Do 5 Feb 12:44',
    matches: 7,
    matchType: 'eigen',
    onderhandelingen: 2,
    owner: '',
    priority: 2,
  },
  {
    id: '5',
    title: '3.000 ton Houtpellets (0571)',
    relation: 'Jansen Bevrachting B.V.',
    relationLink: 'L. de Vries',
    loadLocation: 'Terneuzen Kanaalzone',
    loadDate: 'Vr 16 Jan',
    unloadLocation: 'Zwolle IJssel',
    unloadDate: 'Za 17 Jan',
    source: 'Automatische feed',
    sourceDate: 'Do 5 Feb 12:44',
    matches: 8,
    matchType: 'interessant',
    onderhandelingen: 3,
    owner: 'avatar2',
    priority: 1,
  },
  {
    id: '13',
    title: '800 ton Zand (0122)',
    relation: 'Buiten Onszelf N.V.',
    relationLink: 'Lisa Aelbrechtse',
    loadLocation: 'Dordrecht Zeehaven',
    loadDate: 'Wo 14 Jan',
    unloadLocation: 'Utrecht Lage Weide',
    unloadDate: 'Do 15 Jan',
    source: 'Automatische feed',
    sourceDate: 'Di 3 Feb 15:00',
    matches: 1,
    matchType: 'none',
    onderhandelingen: 0,
    owner: '',
    priority: 1,
  },
  {
    id: '14',
    title: '2.200 ton Grind (0266)',
    relation: 'Eco Transport GmbH',
    relationLink: 'Anna Müller',
    loadLocation: 'Lobith Rijnhaven',
    loadDate: 'Do 15 Jan',
    unloadLocation: 'Nijmegen Waal',
    unloadDate: 'Vr 16 Jan',
    source: 'Pager de Jong',
    sourceDate: 'Wo 4 Feb 09:45',
    matches: 3,
    matchType: 'none',
    onderhandelingen: 1,
    owner: '',
    priority: 2,
  },
];

export default function Inbox() {
  const navigate = useNavigate();
  const { data: apiItems, loading, error, refetch } = useInboxLadingen();
  const [localItems, setLocalItems] = useState<InboxItem[] | null>(null);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [itemType, setItemType] = useState<'lading' | 'vaartuig'>('lading');
  const [subView, setSubView] = useState<InboxSubView>('te-beoordelen');
  const inboxItems = localItems ?? apiItems.map(a => ({
    id: a.id,
    title: a.title,
    relation: a.relation,
    relationLink: a.relationLink,
    loadLocation: a.loadLocation,
    loadDate: a.loadDate,
    unloadLocation: a.unloadLocation,
    unloadDate: a.unloadDate,
    source: a.source,
    sourceDate: a.sourceDate,
    matches: a.matches,
    matchType: a.matchType,
    onderhandelingen: a.onderhandelingen,
    owner: a.owner,
    priority: a.priority,
  }));
  const filteredItems = inboxItems.filter(item => {
    if (subView === 'te-beoordelen') return item.priority === 0;
    if (subView === 'interessant') return item.priority >= 3;
    return item.priority >= 1 && item.priority <= 2; // archief
  });
  const [searchParams] = useSearchParams();
  const viewMode = (searchParams.get('view') === 'map' ? 'map' : 'list') as 'list' | 'map';
  const setViewMode = (val: 'list' | 'map') => {
    navigate(val === 'map' ? '/markt/inbox/ladingen?view=map' : '/markt/inbox/ladingen', { replace: true });
  };
  const [mapMode, setMapMode] = useState<'laden' | 'lossen'>('laden');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const totalItems = filteredItems.length;

  const handleAddItem = async (data: any) => {
    try {
      // Create in the API
      const newItem = await apiClient.create("lading_markt", {
        opmerking: data.type === 'lading' ? `${data.tonnage} ton ${data.cargoType}` : '',
        tonnage: parseInt(data.tonnage) || 0,
        status: 'inbox',
        relatieId: '',
        eigenaarId: null,
        prioriteit: data.priority || 0,
        prijs: null,
        laadtijd: null,
        liggeldLaden: 0,
        lostijd: null,
        liggeldLossen: 0,
        laaddatum: '',
        losdatum: '',
      });
      
      // Refresh from API
      setLocalItems(null);
      refetch();
      
      toast.success(`${data.type === 'lading' ? 'Lading' : 'Vaartuig'} toegevoegd aan inbox`, {
        description: 'Het item is nu zichtbaar in de inbox lijst.',
        duration: 3000,
      });
    } catch (err: any) {
      toast.error('Fout bij toevoegen', { description: err.message });
    }
  };

  const handleRate = (rowId: string, value: number) => {
    setLocalItems(inboxItems.map(i => i.id === rowId ? { ...i, priority: value } : i));
    // Persist to server
    updateLadingMarktPriority(rowId, value).catch(console.error);
  };

  const columns: Column[] = [
    { key: 'title', header: 'Lading', type: 'leading-text' },
    { key: 'relation', header: 'Relatie', type: 'text', width: 'w-[180px]', textColor: 'text-rdj-text-brand', subtextKey: 'relationLink' },
    { key: 'loadLocation', header: 'Laden', type: 'text', width: 'w-[180px]', editable: true },
    { key: 'unloadLocation', header: 'Lossen', type: 'text', width: 'w-[180px]', editable: true },
    {
      key: 'matches', header: 'Matches', type: 'custom', width: 'w-[120px]',
      render: (row) => {
        const count = row.matches as number;
        const matchType = row.matchType as string;
        if (!count) return null;
        const bg = matchType === 'eigen'
          ? 'bg-[#eff8ff] text-[#175cd3] border-[#b2ddff]'
          : matchType === 'interessant'
          ? 'bg-[#fffaeb] text-[#b54708] border-[#fedf89]'
          : 'bg-white text-[#344054] border-[#d0d5dd]';
        return (
          <span className={`inline-flex items-center gap-[4px] rounded-full border px-[10px] py-[2px] font-sans font-bold text-[13px] leading-[20px] ${bg}`}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5.25 6.417h3.5M5.25 8.75h2.333M9.333 2.917H11.2c.653 0 .98 0 1.232.127.222.112.403.293.515.515.127.252.127.578.127 1.232v5.834c0 .653 0 .98-.127 1.232a1.167 1.167 0 0 1-.515.515c-.252.128-.579.128-1.232.128H2.8c-.653 0-.98 0-1.232-.128a1.167 1.167 0 0 1-.515-.515C.927 11.605.927 11.278.927 10.625V4.79c0-.654 0-.98.127-1.232.112-.222.293-.403.515-.515.252-.127.579-.127 1.232-.127h1.866m0-1.75h4.666c.327 0 .49 0 .616.064.11.056.201.146.258.258.063.126.063.29.063.616v.812c0 .327 0 .49-.063.616a.583.583 0 0 1-.258.258c-.126.063-.29.063-.616.063H4.667c-.327 0-.49 0-.616-.063a.583.583 0 0 1-.258-.258c-.063-.126-.063-.29-.063-.616v-.812c0-.327 0-.49.063-.616a.583.583 0 0 1 .258-.258c.126-.064.29-.064.616-.064Z" stroke="currentColor" strokeWidth="1.17" strokeLinecap="round" strokeLinejoin="round"/></svg>
            {count}
          </span>
        );
      },
    },
    { key: 'onderhandelingen', header: 'Onderhandelingen', type: 'text', width: 'w-[140px]', align: 'right' },
    { key: 'ownerLabel', header: 'Eigenaar', type: 'text', width: 'w-[80px]', avatarSrcKey: 'ownerAvatarSrc', avatarInitialsKey: 'ownerInitials', editable: true },
    { key: 'priority', header: 'Prioriteit', type: 'rating', width: 'w-[140px]', onRate: handleRate, editable: true },
  ];

  const tableData = filteredItems.map(item => ({
    id: item.id,
    title: item.title,
    relation: item.relation,
    relationLink: item.relationLink,
    loadLocation: item.loadLocation,
    unloadLocation: item.unloadLocation,
    matches: item.matches,
    matchType: item.matchType,
    onderhandelingen: item.onderhandelingen,
    ownerLabel: '',
    ownerInitials: item.owner ? 'PJ' : undefined,
    priority: item.priority,
  }));

  return (
    <>
      <Toaster position="top-right" richColors />
      <AddInboxItemModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onSubmit={handleAddItem}
        itemType={itemType}
      />
      <div className="flex min-h-screen bg-rdj-bg-primary">
        <Sidebar />
        
        <div className={`flex-1 ${viewMode === 'map' ? 'flex flex-col overflow-hidden' : 'overflow-auto'} pt-[24px]`}>
          <PageHeader
            title="Inbox"
            actions={
              <button 
                onClick={() => { setItemType('lading'); setShowAddModal(true); }}
                className="bg-[#1567a4] relative rounded-[6px] shrink-0 hover:opacity-90 cursor-pointer"
              >
                <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div className="absolute inset-[20.83%]">
                      <div className="absolute inset-[-7.14%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
                          <path d={svgPaths.p1b67fa00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0">
                    <p className="font-sans font-bold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Toevoegen</p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#1567a4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              </button>
            }
            tabs={[
              { label: 'Ladingen', path: viewMode === 'map' ? '/markt/inbox/ladingen?view=map' : '/markt/inbox/ladingen', isActive: true },
              { label: 'Vaartuigen', path: viewMode === 'map' ? '/markt/inbox/vaartuigen?view=map' : '/markt/inbox/vaartuigen', isActive: false },
            ]}
            filtersLeft={
              <>
                <SegmentedButtonGroup
                  items={[
                    { label: 'Te beoordelen', value: 'te-beoordelen', count: inboxItems.filter(i => i.priority === 0).length },
                    { label: 'Interessant', value: 'interessant', count: inboxItems.filter(i => i.priority >= 3).length },
                    { label: 'Archief', value: 'archief', count: inboxItems.filter(i => i.priority >= 1 && i.priority <= 2).length },
                  ]}
                  value={subView}
                  onChange={(val) => setSubView(val as InboxSubView)}
                />
                <FilterDropdown label="Relatie" />
                <FilterDropdown
                  label="Start laden: 13 Jan 2026 en eerder"
                  leadingIcon={
                    <div className="absolute inset-[8.33%_12.5%]">
                      <div className="absolute inset-[-5%_-5.56%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 18.3333">
                          <path d={svgPaths.p16594900} stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </svg>
                      </div>
                    </div>
                  }
                />
                <FilterDropdown label="Laadregio" />
                <FilterDropdown label="Losregio" />
                <button className="content-stretch flex gap-[4px] items-center relative shrink-0"><div className="overflow-clip relative shrink-0 size-[20px]"><div className="absolute inset-[20.83%]"><div className="absolute inset-[-7.14%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333"><path d={svgPaths.p1b67fa00} stroke="#1567A4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /></svg></div></div></div><div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0"><p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#145990] text-[14px] whitespace-nowrap">Filter</p></div></button>
              </>
            }
            filtersRight={
              <>
                {viewMode === 'list' && (
                  <>
                    <p className="font-sans font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Groeperen:</p>
                    <FilterDropdown label="Geen groupering" />
                  </>
                )}
                {viewMode === 'map' && (
                  <SegmentedButtonGroup items={[{ label: 'Laden', value: 'laden' }, { label: 'Lossen', value: 'lossen' }]} value={mapMode} onChange={(val) => setMapMode(val as 'laden' | 'lossen')} />
                )}
                <SegmentedButtonGroup
                  items={[
                    { value: 'list', icon: (<svg fill="none" viewBox="0 0 20 20"><path d="M2.5 5H17.5M2.5 10H17.5M2.5 15H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" /></svg>) },
                    { value: 'map', icon: (<svg fill="none" viewBox="0 0 20 20"><path d="M7.5 17.5L2.5 15V2.5L7.5 5M7.5 17.5L12.5 15M7.5 17.5V5M12.5 15L17.5 17.5V5L12.5 2.5M12.5 15V2.5M7.5 5L12.5 2.5" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
                  ]}
                  value={viewMode}
                  onChange={(val) => setViewMode(val as 'list' | 'map')}
                />
                <div className="bg-rdj-bg-primary h-[40px] relative rounded-[6px] shrink-0 max-w-[320px] w-full"><div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full"><div className="content-stretch flex items-center px-[14px] py-[8px] relative size-full"><div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative"><div className="overflow-clip relative shrink-0 size-[20px]"><div className="absolute inset-[12.5%]"><div className="absolute inset-[-5.56%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667"><path d={svgPaths.p3190da80} stroke="#667085" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /></svg></div></div></div><p className="flex-[1_0_0] font-sans font-normal h-[18px] leading-[20px] min-h-px min-w-px overflow-hidden relative text-rdj-text-tertiary text-[14px] text-ellipsis text-left whitespace-nowrap">Zoeken</p></div></div></div><div aria-hidden="true" className="absolute border border-rdj-border-primary border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" /></div>
              </>
            }
          />

          {/* Content: Table or Map */}
          {viewMode === 'map' ? (
            <div className="flex-1 px-[24px] pt-[16px] pb-[24px] min-h-0">
              <InboxMapView
                mode={mapMode}
              />
            </div>
          ) : (
          <div className="">
            <Pagination
              currentPage={currentPage}
              totalItems={totalItems}
              rowsPerPage={rowsPerPage}
              onPageChange={setCurrentPage}
              onRowsPerPageChange={setRowsPerPage}
            />
            <Table
              columns={columns}
              data={tableData}
              onRowClick={(row) => navigate(`/markt/inbox/lading/${row.id}`)}
              hoveredRowId={hoveredRow}
              onRowHover={setHoveredRow}
            />

            <Pagination
              currentPage={currentPage}
              totalItems={totalItems}
              rowsPerPage={rowsPerPage}
              onPageChange={setCurrentPage}
              onRowsPerPageChange={setRowsPerPage}
            />
          </div>
          )}
        </div>
      </div>

    </>
  );
}