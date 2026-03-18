import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import Sidebar from "../components/Sidebar";
import PageHeader from "../components/PageHeader";
import SegmentedButtonGroup from "../components/SegmentedButtonGroup";
import FilterDropdown from "../components/FilterDropdown";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import type { Column } from "../components/Table";
import svgPaths from "../../imports/svg-q07ncv0e2v";
import imgAvatar from "../../assets/a2737d3b5b234fc04041650cb9f114889c6859da.png";
import { usePijplijnData, usePijplijnVaartuigen, type PijplijnItem, type PijplijnVaartuigItem } from "../data/useMarktData";

export default function Pijplijn() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.pathname.includes('/vaartuigen') ? 'vaartuigen' : 'ladingen';
  const [sourceFilter, setSourceFilter] = useState<'alles' | 'eigen' | 'markt'>('alles');
  const [statusFilter, setStatusFilter] = useState('Alle statussen');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(50);

  const { data: pijplijnItems, loading: pijplijnLoading } = usePijplijnData();
  const { data: pijplijnVaartuigen, loading: vaartuigenLoading } = usePijplijnVaartuigen();

  // ── Ladingen ──
  const filteredLadingen = pijplijnItems.filter(item => {
    if (sourceFilter === 'alles') return true;
    return item.type === sourceFilter;
  });

  // ── Vaartuigen ──
  const filteredVaartuigen = pijplijnVaartuigen.filter(item => {
    if (sourceFilter === 'alles') return true;
    return item.bron === sourceFilter;
  });

  const activeData = activeTab === 'ladingen' ? filteredLadingen : filteredVaartuigen;
  const totalItems = activeData.length;

  // Pagination
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentLadingen = filteredLadingen.slice(indexOfFirstItem, indexOfLastItem);
  const currentVaartuigen = filteredVaartuigen.slice(indexOfFirstItem, indexOfLastItem);

  // ── Ladingen columns (existing) ──
  const ladingenColumns: Column[] = [
    { key: 'title', header: 'Lading', type: 'leading-text', subtextKey: 'subtitle' },
    { key: 'status', header: 'Status', type: 'status', width: 'w-[160px]', variantKey: 'statusVariant', defaultVariant: 'grey' as const },
    { key: 'negotiations', header: 'Onderhandeling', type: 'badges', width: 'w-[140px]', defaultVariant: 'grey' as const },
    { key: 'matches', header: 'Matches', type: 'badges', width: 'w-[80px]', defaultVariant: 'grey' as const },
    { key: 'relation', header: 'Relatie', type: 'text', width: 'w-[180px]', subtextKey: 'relationContact', textColor: 'text-rdj-text-brand' },
    { key: 'loadLocation', header: 'Laden', type: 'text', width: 'w-[180px]', subtextKey: 'loadDate' },
    { key: 'unloadLocation', header: 'Lossen', type: 'text', width: 'w-[180px]', subtextKey: 'unloadDate' },
    { key: 'source', header: 'Bron', type: 'text', width: 'w-[140px]', subtextKey: 'sourceDate', featuredIconKey: 'sourceIcon', featuredIconVariantKey: 'sourceIconVariant', avatarSrcKey: 'sourceAvatarSrc' },
    { key: 'deadline', header: 'Deadline', type: 'text', width: 'w-[140px]' },
    { key: 'ownerLabel', header: 'Eigenaar', type: 'text', width: 'w-[80px]', avatarSrcKey: 'ownerAvatarSrc' },
  ];

  // ── Vaartuigen columns ──
  const vaartuigenColumns: Column[] = [
    { key: 'naam', header: 'Vaartuig', type: 'leading-text', subtextKey: 'type' },
    { key: 'status', header: 'Status', type: 'status', width: 'w-[160px]', variantKey: 'statusVariant', defaultVariant: 'grey' as const },
    { key: 'huidigeLocatie', header: 'Huidige locatie', type: 'text', width: 'w-[160px]' },
    { key: 'beschikbaarVanaf', header: 'Beschikbaar vanaf', type: 'text', width: 'w-[140px]' },
    { key: 'biedingen', header: 'Biedingen', type: 'badges', width: 'w-[100px]', defaultVariant: 'grey' as const },
    { key: 'matches', header: 'Matches', type: 'badges', width: 'w-[80px]', defaultVariant: 'grey' as const },
    { key: 'relatie', header: 'Relatie', type: 'text', width: 'w-[180px]', subtextKey: 'relatieContact', textColor: 'text-rdj-text-brand' },
    { key: 'bijzonderheden', header: 'Bijzonderheden', type: 'badges', width: 'w-[140px]', defaultVariant: 'grey' as const },
    { key: 'binding', header: 'Binding', type: 'text', width: 'w-[100px]' },
    { key: 'groottonnage', header: 'Groottonnage', type: 'text', width: 'w-[120px]', align: 'right' },
    { key: 'inhoud', header: 'Inhoud', type: 'text', width: 'w-[100px]', align: 'right' },
    { key: 'deadline', header: 'Deadline', type: 'deadline', width: 'w-[140px]', expiredKey: 'deadlineExpired' },
    { key: 'ownerLabel', header: 'Eigenaar', type: 'text', width: 'w-[80px]', avatarSrcKey: 'ownerAvatarSrc', avatarInitialsKey: 'ownerInitials' },
  ];

  // Map ladingen rows
  const ladingenRows = currentLadingen.map(item => {
    const statusVariant = item.statusColor === '#17B26A' ? 'success'
      : item.statusColor === '#F79009' ? 'warning'
      : item.statusColor === '#F04438' ? 'error'
      : 'grey';

    return {
      id: item.id,
      title: item.title,
      subtitle: item.subtitle,
      status: item.status,
      statusVariant,
      negotiations: [`${item.negotiations}`],
      matches: [`${item.matches}`],
      relation: item.relation,
      relationContact: item.relationContact,
      loadLocation: item.loadLocation,
      loadDate: item.loadDate,
      unloadLocation: item.unloadLocation,
      unloadDate: item.unloadDate,
      source: item.source,
      sourceDate: item.sourceDate,
      sourceIcon: item.source === 'Laadsplanning' ? (
        <svg fill="none" viewBox="0 0 18.0002 22">
          <path d={svgPaths.p20684dc0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ) : item.source === 'Lading' ? (
        <svg fill="none" viewBox="0 0 20.0007 21.7121">
          <path d={svgPaths.p7ea7b00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ) : !['Pelger de Jong'].includes(item.source) ? (
        <svg fill="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="8" cy="8" r="2" fill="currentColor"/>
        </svg>
      ) : undefined,
      sourceIconVariant: ['Laadsplanning', 'Lading'].includes(item.source) ? 'brand' : 'grey',
      sourceAvatarSrc: ['Pelger de Jong'].includes(item.source) ? imgAvatar : undefined,
      deadline: item.deadline,
      ownerLabel: '',
      ownerAvatarSrc: item.owner ? imgAvatar : undefined,
    };
  });

  // Map vaartuigen rows
  const vaartuigenRows = currentVaartuigen.map(item => ({
    id: item.id,
    naam: item.naam,
    type: item.type,
    status: item.status,
    statusVariant: item.statusVariant,
    huidigeLocatie: item.huidigeLocatie,
    beschikbaarVanaf: item.beschikbaarVanaf,
    biedingen: [`${item.biedingen}`],
    matches: [`${item.matches}`],
    relatie: item.relatie,
    relatieContact: item.relatieContact,
    bijzonderheden: item.bijzonderheden,
    binding: item.binding,
    groottonnage: item.groottonnage,
    inhoud: item.inhoud,
    deadline: item.deadline || "",
    deadlineExpired: item.deadlineExpired,
    ownerLabel: '',
    ownerAvatarSrc: item.eigenaar ? imgAvatar : undefined,
    ownerInitials: item.eigenaarInitials,
  }));

  return (
    <div className="flex min-h-screen bg-rdj-bg-primary">
      <Sidebar />
      
      <div className="flex-1 overflow-auto pt-[24px]">
        <PageHeader
          title="Pijplijn"
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
            { label: 'Ladingen', path: '/markt/pijplijn/ladingen', isActive: activeTab === 'ladingen' },
            { label: 'Vaartuigen', path: '/markt/pijplijn/vaartuigen', isActive: activeTab === 'vaartuigen' },
          ]}
          filtersLeft={
            <>
              <SegmentedButtonGroup items={[{ value: 'alles', label: 'Alles' }, { value: 'eigen', label: 'Eigen' }, { value: 'markt', label: 'Markt' }]} value={sourceFilter} onChange={(val) => setSourceFilter(val)} />
              <FilterDropdown label={statusFilter} options={['Alle statussen', 'Is in de markt', 'Geprijsd', 'Finaal']} value={statusFilter} onSelect={(val) => setStatusFilter(val)} />
              <FilterDropdown
                label="Jan 6, 2026 – Jan 13, 2026"
                leadingIcon={
                  <div className="absolute inset-[8.33%_12.5%]">
                    <div className="absolute inset-[-5%_-5.56%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 20">
                        <path d={svgPaths.p16594900} stroke="#344054" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                    </div>
                  </div>
                }
              />
              {activeTab === 'ladingen' && (
                <FilterDropdown label="Laadregio" />
              )}
              <button className="content-stretch flex gap-[4px] items-center relative shrink-0"><div className="overflow-clip relative shrink-0 size-[20px]"><div className="absolute inset-[20.83%]"><div className="absolute inset-[-7.14%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333"><path d={svgPaths.p1b67fa00} stroke="#1567A4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /></svg></div></div></div><p className="font-sans font-bold leading-[20px] relative shrink-0 text-[#145990] text-[14px] whitespace-nowrap">Filter</p></button>
            </>
          }
          filtersRight={
            <>
              <p className="font-sans font-normal leading-[20px] text-[#344054] text-[14px]">Groeperen op regio</p>
              <div className="bg-white h-[40px] relative rounded-[6px] shrink-0 max-w-[320px] w-full"><div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full"><div className="content-stretch flex items-center px-[14px] py-[8px] relative size-full"><div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative"><div className="overflow-clip relative shrink-0 size-[20px]"><div className="absolute inset-[12.5%]"><div className="absolute inset-[-5.56%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667"><path d={svgPaths.p3190da80} stroke="#667085" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" /></svg></div></div></div><input type="text" placeholder="Zoeken" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="flex-[1_0_0] font-sans font-normal h-[18px] leading-[20px] min-h-px min-w-px overflow-hidden text-[#667085] text-[14px] text-ellipsis text-left whitespace-nowrap outline-none border-0" /></div></div></div><div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" /></div>
            </>
          }
        />

        {/* Table area */}
        <div className="">
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            rowsPerPage={rowsPerPage}
            onPageChange={setCurrentPage}
            onRowsPerPageChange={setRowsPerPage}
          />

          {activeTab === 'ladingen' && (
            <Table
              columns={ladingenColumns}
              data={ladingenRows}
              onRowClick={(row) => {
                navigate(`/markt/pijplijn/lading/${row.id}`);
              }}
            />
          )}

          {activeTab === 'vaartuigen' && (
            <Table
              columns={vaartuigenColumns}
              data={vaartuigenRows}
              onRowClick={(row) => {
                navigate(`/markt/pijplijn/vaartuig/${row.id}`);
              }}
            />
          )}

          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            rowsPerPage={rowsPerPage}
            onPageChange={setCurrentPage}
            onRowsPerPageChange={setRowsPerPage}
          />
        </div>
      </div>
    </div>
  );
}