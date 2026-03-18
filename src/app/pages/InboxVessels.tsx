import svgPaths from "../../imports/svg-gjl6m1r792";
import FloatingActionBar from "../components/FloatingActionBar";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useDetailPanel } from "../components/DetailPanelContext";
import { toast, Toaster } from "sonner";
import Sidebar from "../components/Sidebar";
import VesselMapView from "../components/VesselMapView";
import SegmentedButtonGroup from "../components/SegmentedButtonGroup";
import PageHeader from "../components/PageHeader";
import FilterDropdown from "../components/FilterDropdown";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import type { Column } from "../components/Table";
import { useInboxVaartuigen, updateVaartuigMarktPriority, deleteVaartuigMarkt } from "../data/useMarktData";
import * as apiClient from "../data/api";

interface VesselItem {
  id: string;
  name: string;
  type: string;
  relation: string;
  relationContact: string;
  location: string;
  locationDetail: string;
  availableFrom: string;
  cargoTypes: string[];
  tonnage: string;
  capacity: string;
  source: string;
  sourceDate: string;
  matches: number;
  owner: string;
  priority: number;
  selected?: boolean;
}

const mockVesselData: VesselItem[] = [
  {
    id: '1',
    name: 'Te bepalen naam',
    type: 'Motorschip',
    relation: 'Andermans B.V.',
    relationContact: 'Cees Andoormans',
    location: 'Europahafen (Maassluis)',
    locationDetail: 'Ondervang',
    availableFrom: '31 Dec, 2025',
    cargoTypes: ['KS', 'LR', 'GMP', 'LP'],
    tonnage: '3.519 mt',
    capacity: '4.200 m³',
    source: 'Automatische feed',
    sourceDate: 'Do 5 Feb 12:44',
    matches: 4,
    owner: '',
    priority: 0,
  },
  {
    id: '2',
    name: 'Agast',
    type: 'Motorschip',
    relation: 'Markel Freight B.V.',
    relationContact: 'H.Q. Duivenvoorde',
    location: 'Europahafen (Maassluis)',
    locationDetail: '',
    availableFrom: '13 Jan, 2025 14:45',
    cargoTypes: ['KS', 'LR', 'GMP'],
    tonnage: '2.985 mt',
    capacity: '4.200 m³',
    source: 'Automatische feed',
    sourceDate: 'Do 5 Feb 12:44',
    matches: 7,
    owner: 'avatar1',
    priority: 1,
  },
  {
    id: '3',
    name: 'Adonai',
    type: 'Motorschip',
    relation: 'Buiten Onszelf N.V.',
    relationContact: 'Lisa Aelbrechtse',
    location: 'Europahafen (Maassluis)',
    locationDetail: 'Ondervang',
    availableFrom: '18 Jan, 2025 00:30',
    cargoTypes: ['KS', 'LR', 'GMP'],
    tonnage: '3.655 mt',
    capacity: '4.200 m³',
    source: 'Automatische feed',
    sourceDate: 'Do 5 Feb 12:44',
    matches: 7,
    owner: '',
    priority: 0,
  },
  {
    id: '4',
    name: 'Antoine V',
    type: 'Motorschip',
    relation: 'Trans Logistics Group',
    relationContact: '',
    location: 'Europahafen (Maassluis)',
    locationDetail: '',
    availableFrom: '18 Jan, 2025 00:30',
    cargoTypes: ['KS', 'LR', 'GMP'],
    tonnage: '3.795 mt',
    capacity: '4.200 m³',
    source: 'Pager de Jong',
    sourceDate: 'Do 3 Feb 12:44',
    matches: 8,
    owner: 'avatar2',
    priority: 0,
  },
  {
    id: '5',
    name: 'Agnes',
    type: 'Motorschip',
    relation: 'Markel Freight B.V.',
    relationContact: 'Freya Hendriksmith',
    location: 'Europahafen (Maassluis)',
    locationDetail: '',
    availableFrom: '-',
    cargoTypes: ['KS', 'LR', 'GMP'],
    tonnage: '2.835 mt',
    capacity: '4.200 m³',
    source: 'Automatische feed',
    sourceDate: 'Do 5 Feb 12:44',
    matches: 9,
    owner: '',
    priority: 0,
  },
  {
    id: '6',
    name: 'Te bepalen naam',
    type: 'Motorschip',
    relation: 'Cargo Solutions Ltd.',
    relationContact: 'Marie Thomas',
    location: 'Europahafen (Maassluis)',
    locationDetail: '',
    availableFrom: '20 Jan, 2025 11:00',
    cargoTypes: ['KS', 'LR', 'GMP'],
    tonnage: '3.795 mt',
    capacity: '4.200 m³',
    source: 'Automatische feed',
    sourceDate: 'Do 5 Feb 12:44',
    matches: 4,
    owner: '',
    priority: 0,
  },
  {
    id: '7',
    name: 'Ambulant',
    type: 'Motorschip',
    relation: 'Eco Transport GmbH',
    relationContact: 'Anna Müller',
    location: 'Europahafen (Maassluis)',
    locationDetail: '',
    availableFrom: '18 Jan, 2025',
    cargoTypes: ['KS', 'LR', 'GMP'],
    tonnage: '2.929 mt',
    capacity: '4.200 m³',
    source: 'Automatische feed',
    sourceDate: 'Do 5 Feb 12:44',
    matches: 2,
    owner: '',
    priority: 0,
  },
  {
    id: '8',
    name: 'Te bepalen naam',
    type: 'Duwbak',
    relation: 'Global Shipping Inc.',
    relationContact: 'Raj Patel',
    location: 'Europahafen (Maassluis)',
    locationDetail: 'Ondervang',
    availableFrom: '',
    cargoTypes: ['KS', 'LR', 'GMP'],
    tonnage: '3.519 mt',
    capacity: '4.200 m³',
    source: 'Automatische feed',
    sourceDate: 'Do 5 Feb 12:44',
    matches: 10,
    owner: '',
    priority: 0,
  },
  {
    id: '9',
    name: 'Annemarie',
    type: 'Motorschip',
    relation: 'Trans Logistics Group',
    relationContact: '',
    location: 'Europahafen (Maassluis)',
    locationDetail: '',
    availableFrom: '23 Jan, 2025 17:05',
    cargoTypes: ['KS', 'LR', 'GMP'],
    tonnage: '2.958 mt',
    capacity: '4.200 m³',
    source: 'Automatische feed',
    sourceDate: 'Do 5 Feb 12:44',
    matches: 1,
    owner: '',
    priority: 0,
  },
];

export default function InboxVessels() {
  const navigate = useNavigate();
  const { openDetail, activeDetail } = useDetailPanel();
  const { data: apiVessels, loading, error, refetch } = useInboxVaartuigen();
  const [localItems, setLocalItems] = useState<VesselItem[] | null>(null);
  const vesselItems: VesselItem[] = localItems ?? apiVessels.map(a => ({
    id: a.id,
    name: a.name,
    type: a.type,
    relation: a.relation,
    relationContact: a.relationContact,
    location: a.location,
    locationDetail: a.locationDetail,
    availableFrom: a.availableFrom,
    cargoTypes: a.cargoTypes,
    tonnage: a.tonnage,
    capacity: a.capacity,
    source: a.source,
    sourceDate: a.sourceDate,
    matches: a.matches,
    owner: a.owner,
    priority: a.priority,
  }));
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const viewMode = (searchParams.get('view') === 'map' ? 'map' : 'list') as 'list' | 'map';
  const setViewMode = (val: 'list' | 'map') => {
    navigate(val === 'map' ? '/markt/inbox/vaartuigen?view=map' : '/markt/inbox/vaartuigen', { replace: true });
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const totalItems = vesselItems.length;

  const handleSelectAll = () => {
    if (selectedItems.length === vesselItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(vesselItems.map(item => item.id));
    }
  };

  const handleSelectItem = (id: string) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleArchive = (ids: string[]) => {
    setLocalItems(vesselItems.filter(item => !ids.includes(item.id)));
    ids.forEach(id => deleteVaartuigMarkt(id).catch(console.error));
    setSelectedItems([]);
    toast.success(`${ids.length} vaartuig${ids.length > 1 ? 'en' : ''} gearchiveerd`, {
      description: `${ids.length > 1 ? 'De vaartuigen zijn' : 'Het vaartuig is'} verwijderd uit de inbox.`,
      duration: 3000,
    });
  };

  const handleMoveToPipeline = (ids: string[]) => {
    setLocalItems(vesselItems.filter(item => !ids.includes(item.id)));
    setSelectedItems([]);
    toast.success(`${ids.length} vaartuig${ids.length > 1 ? 'en' : ''} naar pijplijn verplaatst`, {
      description: `${ids.length > 1 ? 'De vaartuigen zijn' : 'Het vaartuig is'} nu zichtbaar in het Pijplijn scherm.`,
      duration: 3000,
    });
  };

  const handleRate = (rowId: string, value: number) => {
    setLocalItems(vesselItems.map(i => i.id === rowId ? { ...i, priority: value } : i));
    updateVaartuigMarktPriority(rowId, value).catch(console.error);
  };

  const columns: Column[] = [
    { key: 'name', header: 'Naam', type: 'leading-text', subtextKey: 'type', dotKey: 'isNew', sortActive: true, sortDirection: 'desc' },
    { key: 'relation', header: 'Relatie', type: 'text', width: 'w-[180px]', textColor: 'text-rdj-text-brand', subtextKey: 'relationContact' },
    { key: 'location', header: 'Locatie', type: 'text', width: 'w-[140px]', editable: true },
    { key: 'availableFromDate', header: 'Beschikbaar vanaf', type: 'text', width: 'w-[140px]', subtextKey: 'availableFromTime', editable: true },
    { key: 'cargoTypesBadges', header: 'Bijzonderheden', type: 'badges', width: 'w-[160px]' },
    { key: 'tonnage', header: 'Groottonnage', type: 'text', width: 'w-[100px]', align: 'right', editable: true },
    { key: 'capacity', header: 'Inhoud', type: 'text', width: 'w-[90px]', align: 'right', editable: true },
    { key: 'source', header: 'Bron', type: 'text', width: 'w-[140px]', subtextKey: 'sourceDate', featuredIconKey: 'sourceIcon', featuredIconVariantKey: 'sourceIconVariant', featuredIconDefaultVariant: 'grey' as const, avatarSrcKey: 'sourceAvatarSrc' },
    { key: 'matchesBadges', header: 'Matches', type: 'badges', width: 'w-[100px]' },
    { key: 'ownerLabel', header: 'Eigenaar', type: 'text', width: 'w-[80px]', avatarInitialsKey: 'ownerInitials', editable: true },
    { key: 'priority', header: 'Prioriteit', type: 'rating', width: 'w-[140px]', onRate: handleRate, editable: true },
    {
      key: 'actions', header: '', type: 'custom', width: 'w-[80px]',
      render: (row) => hoveredRow === row.id ? (
        <div className="flex items-center justify-center gap-[4px]">
          <button
            onClick={(e) => { e.stopPropagation(); handleArchive([row.id]); }}
            className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[6px] shrink-0 hover:bg-gray-100"
          >
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute inset-1/4">
                <div className="absolute inset-[-10.42%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.66667 9.66667">
                    <path d={svgPaths.p448fa80} stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </div>
              </div>
            </div>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handleMoveToPipeline([row.id]); }}
            className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[6px] shrink-0 hover:bg-gray-100"
          >
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4">
                <div className="absolute inset-[-11.34%_-7.79%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3292 8.99583">
                    <path d={svgPaths.p1c26b00} stroke="#145990" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6625" />
                  </svg>
                </div>
              </div>
            </div>
          </button>
        </div>
      ) : null,
    },
  ];

  const tableData = vesselItems.map(item => {
    // Split availableFrom into date and time parts
    const parts = item.availableFrom.match(/^(.+?)(\s+\d{1,2}:\d{2})?$/);
    const availableFromDate = parts ? parts[1] : item.availableFrom;
    const availableFromTime = parts && parts[2] ? parts[2].trim() : undefined;

    return {
      id: item.id,
      name: item.name,
      type: item.type,
      isNew: item.id === '1',
      relation: item.relation,
      relationContact: item.relationContact,
      location: item.location,
      availableFromDate,
      availableFromTime,
      cargoTypesBadges: item.cargoTypes,
      tonnage: item.tonnage,
      capacity: item.capacity,
      source: item.source,
      sourceDate: item.sourceDate,
      sourceIcon: (
        <svg fill="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="8" cy="8" r="2" fill="currentColor"/>
        </svg>
      ),
      sourceIconVariant: 'grey',
      matchesBadges: [`${item.matches}`],
      ownerLabel: '',
      ownerInitials: item.owner ? 'PJ' : undefined,
      priority: item.priority,
    };
  });

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="flex min-h-screen bg-rdj-bg-primary">
        <Sidebar />
        
        <div className={`flex-1 ${viewMode === 'map' ? 'flex flex-col overflow-hidden' : 'overflow-auto'} pt-[24px]`}>
          <PageHeader
            title="Inbox"
            actions={
              <button className="bg-[#1567a4] relative rounded-[6px] shrink-0 hover:opacity-90">
                <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
                  <div className="overflow-clip relative shrink-0 size-[20px]"><div className="absolute inset-[16.67%]"><div className="absolute inset-[-6.25%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18"><path d="M9 3.75V14.25M3.75 9H14.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /></svg></div></div></div>
                  <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0"><p className="font-sans font-bold leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Toevoegen</p></div>
                </div>
                <div aria-hidden="true" className="absolute border border-[#1567a4] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              </button>
            }
            tabs={[
              { label: 'Ladingen', path: viewMode === 'map' ? '/markt/inbox/ladingen?view=map' : '/markt/inbox/ladingen', isActive: false },
              { label: 'Vaartuigen', path: viewMode === 'map' ? '/markt/inbox/vaartuigen?view=map' : '/markt/inbox/vaartuigen', isActive: true },
            ]}
            filtersLeft={
              <>
                <FilterDropdown label="Te beoordelen" />
                <FilterDropdown label="Relatie" />
                <button className="bg-white relative rounded-[6px] shrink-0"><div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[8px] relative rounded-[inherit]"><div className="overflow-clip relative shrink-0 size-[20px]"><div className="absolute inset-[8.33%]"><div className="absolute inset-[-5%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22"><path d={svgPaths.p2bfa7100} stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg></div></div></div><p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Filter</p></div><div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" /></button>
              </>
            }
            filtersRight={
              <>
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

          {/* Content: Map or Table */}
          {viewMode === 'map' ? (
            <div className="flex-1 px-[24px] pt-[16px] pb-[24px] min-h-0">
              <VesselMapView
                onArchive={handleArchive}
                onMoveToPipeline={handleMoveToPipeline}
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
              onRowClick={(row) => openDetail('vaartuig', row.id)}
              activeRowId={activeDetail?.type === 'vaartuig' ? activeDetail.id : null}
              selectable
              selectedIds={selectedItems}
              onSelectAll={handleSelectAll}
              onSelectItem={handleSelectItem}
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
      <FloatingActionBar
        selectedCount={selectedItems.length}
        totalCount={totalItems}
        itemLabel="vaartuigen"
        onSelectAll={handleSelectAll}
        onArchive={() => handleArchive(selectedItems)}
        onMoveToPipeline={() => handleMoveToPipeline(selectedItems)}
      />
    </>
  );
}