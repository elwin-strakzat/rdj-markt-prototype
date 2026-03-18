import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useDetailPanel } from "../components/DetailPanelContext";
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
import FloatingActionBar from "../components/FloatingActionBar";
import { useInboxLadingen, updateLadingMarktPriority, updateLadingMarktStatus, deleteLadingMarkt } from "../data/useMarktData";
import * as apiClient from "../data/api";

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
  owner: string;
  priority: number;
  selected?: boolean;
}

const mockInboxData: InboxItem[] = [
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
    owner: '',
    priority: 0,
  },
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
    owner: '',
    priority: 0,
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
    owner: 'avatar1',
    priority: 0,
  },
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
    owner: '',
    priority: 0,
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
    owner: 'avatar2',
    priority: 1,
  },
];

export default function Inbox() {
  const navigate = useNavigate();
  const { openDetail, activeDetail } = useDetailPanel();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const { data: apiItems, loading, error, refetch } = useInboxLadingen();
  const [localItems, setLocalItems] = useState<InboxItem[] | null>(null);
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
    owner: a.owner,
    priority: a.priority,
  }));
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [itemType, setItemType] = useState<'lading' | 'vaartuig'>('lading');
  const [searchParams] = useSearchParams();
  const viewMode = (searchParams.get('view') === 'map' ? 'map' : 'list') as 'list' | 'map';
  const setViewMode = (val: 'list' | 'map') => {
    navigate(val === 'map' ? '/markt/inbox/ladingen?view=map' : '/markt/inbox/ladingen', { replace: true });
  };
  const [mapMode, setMapMode] = useState<'laden' | 'lossen'>('laden');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(50);
  const totalItems = inboxItems.length;

  const handleToggleSelect = (id: string) => {
    const newSelected = [...selectedItems];
    if (newSelected.includes(id)) {
      const index = newSelected.indexOf(id);
      newSelected.splice(index, 1);
    } else {
      newSelected.push(id);
    }
    setSelectedItems(newSelected);
  };

  const handleSelectAll = () => {
    if (selectedItems.length === inboxItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(inboxItems.map(item => item.id));
    }
  };

  const handleArchive = (ids: string[]) => {
    setLocalItems(inboxItems.filter(item => !ids.includes(item.id)));
    // Also delete from server
    ids.forEach(id => deleteLadingMarkt(id).catch(console.error));
    setSelectedItems([]);
    toast.success(ids.length === 1 ? 'Item gearchiveerd' : `${ids.length} items gearchiveerd`, {
      description: 'De items zijn verwijderd uit de inbox.',
      duration: 3000,
    });
  };

  const handleMoveToPipeline = (ids: string[]) => {
    setLocalItems(inboxItems.filter(item => !ids.includes(item.id)));
    // Update status on server
    ids.forEach(id => updateLadingMarktStatus(id, 'pijplijn').catch(console.error));
    setSelectedItems([]);
    toast.success(ids.length === 1 ? 'Item naar pijplijn verplaatst' : `${ids.length} items naar pijplijn verplaatst`, {
      description: 'De items zijn nu zichtbaar in het Pijplijn scherm.',
      duration: 3000,
    });
  };

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
    { key: 'matchesBadges', header: 'Matches', type: 'badges', width: 'w-[120px]' },
    { key: 'ownerLabel', header: 'Eigenaar', type: 'text', width: 'w-[80px]', avatarSrcKey: 'ownerAvatarSrc', avatarInitialsKey: 'ownerInitials', editable: true },
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

  const tableData = inboxItems.map(item => ({
    id: item.id,
    title: item.title,
    relation: item.relation,
    relationLink: item.relationLink,
    loadLocation: item.loadLocation,
    unloadLocation: item.unloadLocation,
    matchesBadges: [`${item.matches}`],
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
                <FilterDropdown label="Te beoordelen" />
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
                onArchive={handleArchive}
                onMoveToPipeline={handleMoveToPipeline}
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
              onRowClick={(row) => openDetail('lading', row.id)}
              activeRowId={activeDetail?.type === 'lading' ? activeDetail.id : null}
              selectable
              selectedIds={selectedItems}
              onSelectAll={handleSelectAll}
              onSelectItem={handleToggleSelect}
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

      {/* Multi-select Action Bar */}
      {selectedItems.length > 0 && (
        <FloatingActionBar
          selectedCount={selectedItems.length}
          totalCount={totalItems}
          itemLabel="ladingen"
          onSelectAll={handleSelectAll}
          onArchive={() => handleArchive(selectedItems)}
          onMoveToPipeline={() => handleMoveToPipeline(selectedItems)}
        />
      )}
    </>
  );
}