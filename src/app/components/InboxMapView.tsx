import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { MapContainer, TileLayer, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { useNavigate } from "react-router";
import svgPaths from "../../imports/svg-5yigdc067t";

export interface MapCargoItem {
  id: string;
  title: string;
  relation: string;
  relationLink: string;
  loadLocation: string;
  loadDate: string;
  loadLat: number;
  loadLng: number;
  unloadLocation: string;
  unloadDate: string;
  unloadLat: number;
  unloadLng: number;
  matches: number;
  owner: string;
  priority: number;
}

// More mock data with coordinates for the map
export const mapCargoData: MapCargoItem[] = [
  // Cluster in Rotterdam area
  {
    id: '1',
    title: '1.500 - 1.900 ton Houtpellets',
    relation: 'Van Dijk Shipping B.V.',
    relationLink: 'H.J. Duivenvoort',
    loadLocation: 'Rotterdam Europoort',
    loadDate: 'Ma 12 Jan',
    loadLat: 51.9575,
    loadLng: 4.1210,
    unloadLocation: 'Nijmegen Waal',
    unloadDate: 'Wo 14 Jan',
    unloadLat: 51.8520,
    unloadLng: 5.8580,
    matches: 4,
    owner: 'avatar1',
    priority: 1,
  },
  {
    id: '2',
    title: '2.200 ton Steenkool',
    relation: 'Van Dijk Shipping B.V.',
    relationLink: 'H.J. Duivenvoort',
    loadLocation: 'Rotterdam Botlek',
    loadDate: 'Ma 12 Jan',
    loadLat: 51.8850,
    loadLng: 4.3100,
    unloadLocation: 'Terneuzen Kanaalzone',
    unloadDate: 'Di 13 Jan',
    unloadLat: 51.3360,
    unloadLng: 3.8280,
    matches: 4,
    owner: '',
    priority: 0,
  },
  {
    id: '3',
    title: '1.800 ton Graan',
    relation: 'Van Dijk Shipping B.V.',
    relationLink: 'H.J. Duivenvoort',
    loadLocation: 'Rotterdam Waalhaven',
    loadDate: 'Di 13 Jan',
    loadLat: 51.8950,
    loadLng: 4.4200,
    unloadLocation: 'Deventer IJssel',
    unloadDate: 'Do 15 Jan',
    unloadLat: 52.2550,
    unloadLng: 6.1600,
    matches: 4,
    owner: '',
    priority: 2,
  },
  {
    id: '4',
    title: '2.000 - 2.500 ton Steenkool',
    relation: 'Rijnvaart Transport N.V.',
    relationLink: 'Wanda in \'t Veld',
    loadLocation: 'Rotterdam Maasvlakte',
    loadDate: 'Di 13 Jan',
    loadLat: 51.9600,
    loadLng: 4.0300,
    unloadLocation: 'Hengelo Twentekanaal',
    unloadDate: 'Vr 16 Jan',
    unloadLat: 52.2700,
    unloadLng: 6.7930,
    matches: 6,
    owner: 'avatar2',
    priority: 1,
  },
  {
    id: '5',
    title: '1.200 ton Graan',
    relation: 'Jansen Bevrachting B.V.',
    relationLink: 'P. Janssen',
    loadLocation: 'Rotterdam Vondelingenplaat',
    loadDate: 'Wo 14 Jan',
    loadLat: 51.8980,
    loadLng: 4.3600,
    unloadLocation: 'Groningen Eemskanaal',
    unloadDate: 'Ma 19 Jan',
    unloadLat: 53.2190,
    unloadLng: 6.5680,
    matches: 3,
    owner: '',
    priority: 0,
  },
  // Cluster in Amsterdam area
  {
    id: '6',
    title: '3.000 ton Houtpellets',
    relation: 'Van Dijk Shipping B.V.',
    relationLink: 'H.J. Duivenvoort',
    loadLocation: 'Amsterdam Westhaven',
    loadDate: 'Do 15 Jan',
    loadLat: 52.3950,
    loadLng: 4.8700,
    unloadLocation: 'Meppel Drentse Hoofdvaart',
    unloadDate: 'Di 20 Jan',
    unloadLat: 52.6960,
    unloadLng: 6.1940,
    matches: 5,
    owner: '',
    priority: 1,
  },
  {
    id: '7',
    title: '800 ton Mais',
    relation: 'Rijnvaart Transport N.V.',
    relationLink: 'P. Janssen',
    loadLocation: 'Amsterdam Coenhaven',
    loadDate: 'Vr 16 Jan',
    loadLat: 52.3980,
    loadLng: 4.8500,
    unloadLocation: 'Lemmer Prinses Margrietkanaal',
    unloadDate: 'Ma 19 Jan',
    unloadLat: 52.8440,
    unloadLng: 5.7110,
    matches: 2,
    owner: 'avatar1',
    priority: 0,
  },
  {
    id: '8',
    title: '1.800 ton Houtpellets',
    relation: 'Jansen Bevrachting B.V.',
    relationLink: 'L. de Vries',
    loadLocation: 'Amsterdam Petroleumhaven',
    loadDate: 'Za 17 Jan',
    loadLat: 52.3900,
    loadLng: 4.8900,
    unloadLocation: 'Zwolle IJssel',
    unloadDate: 'Di 20 Jan',
    unloadLat: 52.5100,
    unloadLng: 6.0930,
    matches: 7,
    owner: '',
    priority: 3,
  },
  {
    id: '9',
    title: '2.100 ton Zand',
    relation: 'Van Dijk Shipping B.V.',
    relationLink: 'H.J. Duivenvoort',
    loadLocation: 'Amsterdam Vlothaven',
    loadDate: 'Ma 19 Jan',
    loadLat: 52.3930,
    loadLng: 4.8650,
    unloadLocation: 'Utrecht Lage Weide',
    unloadDate: 'Di 20 Jan',
    unloadLat: 52.1000,
    unloadLng: 5.0870,
    matches: 4,
    owner: '',
    priority: 1,
  },
  // Cluster in Dordrecht / Zuid-Holland
  {
    id: '10',
    title: '1.600 ton Houtsnippers',
    relation: 'Rijnvaart Transport N.V.',
    relationLink: 'Wanda in \'t Veld',
    loadLocation: 'Dordrecht Zeehaven',
    loadDate: 'Di 20 Jan',
    loadLat: 51.8100,
    loadLng: 4.6700,
    unloadLocation: 'Tiel Amsterdam-Rijnkanaal',
    unloadDate: 'Wo 21 Jan',
    unloadLat: 51.8870,
    unloadLng: 5.4300,
    matches: 3,
    owner: 'avatar2',
    priority: 0,
  },
  {
    id: '11',
    title: '2.500 ton Erts',
    relation: 'Jansen Bevrachting B.V.',
    relationLink: 'L. de Vries',
    loadLocation: 'Moerdijk Industriehaven',
    loadDate: 'Ma 12 Jan',
    loadLat: 51.6900,
    loadLng: 4.5900,
    unloadLocation: 'Den Bosch Diezehaven',
    unloadDate: 'Wo 14 Jan',
    unloadLat: 51.6860,
    unloadLng: 5.3050,
    matches: 5,
    owner: '',
    priority: 2,
  },
  {
    id: '12',
    title: '1.300 ton Houtpellets',
    relation: 'Van Dijk Shipping B.V.',
    relationLink: 'H.J. Duivenvoort',
    loadLocation: 'Dordrecht Kiltunnel',
    loadDate: 'Di 13 Jan',
    loadLat: 51.8050,
    loadLng: 4.6500,
    unloadLocation: 'Arnhem Rijn',
    unloadDate: 'Do 15 Jan',
    unloadLat: 51.9850,
    unloadLng: 5.9100,
    matches: 3,
    owner: 'avatar1',
    priority: 1,
  },
  // Cluster Nijmegen / Waal
  {
    id: '13',
    title: '900 ton Kolen',
    relation: 'Rijnvaart Transport N.V.',
    relationLink: 'P. Janssen',
    loadLocation: 'Nijmegen Waal',
    loadDate: 'Wo 14 Jan',
    loadLat: 51.8520,
    loadLng: 5.8580,
    unloadLocation: 'Dordrecht Zeehaven',
    unloadDate: 'Vr 16 Jan',
    unloadLat: 51.8100,
    unloadLng: 4.6700,
    matches: 2,
    owner: '',
    priority: 0,
  },
  {
    id: '14',
    title: '2.800 ton Erts',
    relation: 'Jansen Bevrachting B.V.',
    relationLink: 'L. de Vries',
    loadLocation: 'Oss Maas',
    loadDate: 'Do 15 Jan',
    loadLat: 51.7700,
    loadLng: 5.5200,
    unloadLocation: 'Rotterdam Waalhaven',
    unloadDate: 'Za 17 Jan',
    unloadLat: 51.8950,
    unloadLng: 4.4200,
    matches: 4,
    owner: '',
    priority: 1,
  },
  // Cluster in Terneuzen / Zeeland
  {
    id: '15',
    title: '1.400 ton Steenkool',
    relation: 'Rijnvaart Transport N.V.',
    relationLink: 'Wanda in \'t Veld',
    loadLocation: 'Terneuzen Kanaalzone',
    loadDate: 'Di 13 Jan',
    loadLat: 51.3360,
    loadLng: 3.8280,
    unloadLocation: 'Amsterdam Westhaven',
    unloadDate: 'Vr 16 Jan',
    unloadLat: 52.3950,
    unloadLng: 4.8700,
    matches: 3,
    owner: '',
    priority: 0,
  },
  {
    id: '16',
    title: '1.900 ton Houtpellets',
    relation: 'Van Dijk Shipping B.V.',
    relationLink: 'H.J. Duivenvoort',
    loadLocation: 'Vlissingen Binnenhaven',
    loadDate: 'Wo 14 Jan',
    loadLat: 51.4430,
    loadLng: 3.5720,
    unloadLocation: 'Moerdijk Industriehaven',
    unloadDate: 'Vr 16 Jan',
    unloadLat: 51.6900,
    unloadLng: 4.5900,
    matches: 5,
    owner: 'avatar2',
    priority: 2,
  },
  // Noord-Nederland
  {
    id: '17',
    title: '3.200 ton Houtpellets',
    relation: 'Jansen Bevrachting B.V.',
    relationLink: 'L. de Vries',
    loadLocation: 'Harlingen Industriehaven',
    loadDate: 'Wo 14 Jan',
    loadLat: 53.1740,
    loadLng: 5.4080,
    unloadLocation: 'Rotterdam Europoort',
    unloadDate: 'Ma 19 Jan',
    unloadLat: 51.9575,
    unloadLng: 4.1210,
    matches: 8,
    owner: 'avatar1',
    priority: 3,
  },
  {
    id: '18',
    title: '700 ton Mais',
    relation: 'Van Dijk Shipping B.V.',
    relationLink: 'H.J. Duivenvoort',
    loadLocation: 'Leeuwarden Van Harinxmakanaal',
    loadDate: 'Do 15 Jan',
    loadLat: 53.2010,
    loadLng: 5.7990,
    unloadLocation: 'Dordrecht Zeehaven',
    unloadDate: 'Di 20 Jan',
    unloadLat: 51.8100,
    unloadLng: 4.6700,
    matches: 2,
    owner: '',
    priority: 1,
  },
  // Oost-Nederland
  {
    id: '19',
    title: '1.800 ton Grind',
    relation: 'Rijnvaart Transport N.V.',
    relationLink: 'P. Janssen',
    loadLocation: 'Kampen IJssel',
    loadDate: 'Ma 12 Jan',
    loadLat: 52.5560,
    loadLng: 5.9100,
    unloadLocation: 'Amsterdam Coenhaven',
    unloadDate: 'Wo 14 Jan',
    unloadLat: 52.3980,
    unloadLng: 4.8500,
    matches: 5,
    owner: 'avatar2',
    priority: 2,
  },
  {
    id: '20',
    title: '2.400 ton Steenkool',
    relation: 'Jansen Bevrachting B.V.',
    relationLink: 'L. de Vries',
    loadLocation: 'Zutphen IJssel',
    loadDate: 'Di 13 Jan',
    loadLat: 52.1390,
    loadLng: 6.1950,
    unloadLocation: 'Vlissingen Binnenhaven',
    unloadDate: 'Za 17 Jan',
    unloadLat: 51.4430,
    unloadLng: 3.5720,
    matches: 4,
    owner: '',
    priority: 1,
  },
  // Midden-Nederland
  {
    id: '21',
    title: '1.100 ton Houtpellets',
    relation: 'Van Dijk Shipping B.V.',
    relationLink: 'H.J. Duivenvoort',
    loadLocation: 'Utrecht Lage Weide',
    loadDate: 'Wo 14 Jan',
    loadLat: 52.1000,
    loadLng: 5.0870,
    unloadLocation: 'Terneuzen Kanaalzone',
    unloadDate: 'Ma 19 Jan',
    unloadLat: 51.3360,
    unloadLng: 3.8280,
    matches: 3,
    owner: '',
    priority: 0,
  },
  {
    id: '22',
    title: '950 ton Kolen',
    relation: 'Rijnvaart Transport N.V.',
    relationLink: 'Wanda in \'t Veld',
    loadLocation: 'Meppel Drentse Hoofdvaart',
    loadDate: 'Do 15 Jan',
    loadLat: 52.6960,
    loadLng: 6.1940,
    unloadLocation: 'Nijmegen Waal',
    unloadDate: 'Di 20 Jan',
    unloadLat: 51.8520,
    unloadLng: 5.8580,
    matches: 2,
    owner: 'avatar1',
    priority: 1,
  },
  {
    id: '23',
    title: '1.600 ton Graan',
    relation: 'Van Dijk Shipping B.V.',
    relationLink: 'H.J. Duivenvoort',
    loadLocation: 'Den Bosch Diezehaven',
    loadDate: 'Di 13 Jan',
    loadLat: 51.6860,
    loadLng: 5.3050,
    unloadLocation: 'Harlingen Industriehaven',
    unloadDate: 'Vr 16 Jan',
    unloadLat: 53.1740,
    unloadLng: 5.4080,
    matches: 4,
    owner: 'avatar2',
    priority: 1,
  },
  {
    id: '24',
    title: '2.000 ton Zand',
    relation: 'Jansen Bevrachting B.V.',
    relationLink: 'P. Janssen',
    loadLocation: 'Almelo Twentekanaal',
    loadDate: 'Wo 14 Jan',
    loadLat: 52.3570,
    loadLng: 6.6680,
    unloadLocation: 'Dordrecht Zeehaven',
    unloadDate: 'Ma 19 Jan',
    unloadLat: 51.8100,
    unloadLng: 4.6700,
    matches: 5,
    owner: '',
    priority: 0,
  },
  {
    id: '25',
    title: '1.700 ton Houtsnippers',
    relation: 'Rijnvaart Transport N.V.',
    relationLink: 'Wanda in \'t Veld',
    loadLocation: 'Groningen Eemskanaal',
    loadDate: 'Ma 19 Jan',
    loadLat: 53.2190,
    loadLng: 6.5680,
    unloadLocation: 'Rotterdam Botlek',
    unloadDate: 'Do 22 Jan',
    unloadLat: 51.8850,
    unloadLng: 4.3100,
    matches: 6,
    owner: '',
    priority: 2,
  },
];

// Cluster items by proximity based on current zoom level
function clusterItems(items: MapCargoItem[], mode: 'laden' | 'lossen', zoom: number): { lat: number; lng: number; items: MapCargoItem[] }[] {
  // Distance threshold inversely proportional to zoom
  const threshold = 150 / Math.pow(2, zoom);
  
  const clusters: { lat: number; lng: number; items: MapCargoItem[] }[] = [];
  const assigned = new Set<string>();

  for (const item of items) {
    if (assigned.has(item.id)) continue;
    
    const lat = mode === 'laden' ? item.loadLat : item.unloadLat;
    const lng = mode === 'laden' ? item.loadLng : item.unloadLng;
    
    const cluster: MapCargoItem[] = [item];
    assigned.add(item.id);
    
    for (const other of items) {
      if (assigned.has(other.id)) continue;
      const otherLat = mode === 'laden' ? other.loadLat : other.unloadLat;
      const otherLng = mode === 'laden' ? other.loadLng : other.unloadLng;
      
      const distance = Math.sqrt(Math.pow(lat - otherLat, 2) + Math.pow(lng - otherLng, 2));
      if (distance < threshold) {
        cluster.push(other);
        assigned.add(other.id);
      }
    }
    
    // Calculate centroid
    let avgLat = 0, avgLng = 0;
    for (const c of cluster) {
      avgLat += mode === 'laden' ? c.loadLat : c.unloadLat;
      avgLng += mode === 'laden' ? c.loadLng : c.unloadLng;
    }
    avgLat /= cluster.length;
    avgLng /= cluster.length;
    
    clusters.push({ lat: avgLat, lng: avgLng, items: cluster });
  }
  
  return clusters;
}

function createClusterIcon(count: number, isSelected: boolean) {
  const size = count === 1 ? 32 : (count < 10 ? 36 : 44);
  
  if (count === 1) {
    // Single pin marker
    return L.divIcon({
      className: 'custom-cluster-icon',
      html: `<div style="
        width: ${size}px;
        height: ${size}px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      ">
        <svg width="24" height="30" viewBox="0 0 24 30" fill="none">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 9 12 18 12 18s12-9 12-18c0-6.627-5.373-12-12-12z" fill="${isSelected ? '#1567a4' : '#667085'}"/>
          <circle cx="12" cy="12" r="4" fill="white"/>
        </svg>
      </div>`,
      iconSize: [size, size + 6],
      iconAnchor: [size / 2, size + 6],
    });
  }
  
  // Cluster marker
  return L.divIcon({
    className: 'custom-cluster-icon',
    html: `<div style="
      width: ${size}px;
      height: ${size}px;
      background: ${isSelected ? '#1567a4' : '#667085'};
      border: 3px solid ${isSelected ? '#d1e9f7' : '#e4e7ec'};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-family: 'Hanken Grotesk', sans-serif;
      font-weight: 700;
      font-size: ${count >= 10 ? '13px' : '12px'};
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    ">${count}</div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

// Component to handle map events and render markers
function MapMarkers({ 
  items, 
  mode, 
  onClusterClick, 
  selectedClusterKey 
}: { 
  items: MapCargoItem[]; 
  mode: 'laden' | 'lossen'; 
  onClusterClick: (cluster: { lat: number; lng: number; items: MapCargoItem[] }) => void;
  selectedClusterKey: string | null;
}) {
  const map = useMap();
  const [zoom, setZoom] = useState(map.getZoom());
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  useMapEvents({
    zoomend: () => {
      setZoom(map.getZoom());
    },
  });

  const clusters = useMemo(() => clusterItems(items, mode, zoom), [items, mode, zoom]);

  useEffect(() => {
    if (markersLayerRef.current) {
      markersLayerRef.current.clearLayers();
    } else {
      markersLayerRef.current = L.layerGroup().addTo(map);
    }

    for (const cluster of clusters) {
      const clusterKey = `${cluster.lat.toFixed(4)}-${cluster.lng.toFixed(4)}`;
      const isSelected = selectedClusterKey === clusterKey;
      const icon = createClusterIcon(cluster.items.length, isSelected);
      const marker = L.marker([cluster.lat, cluster.lng], { icon });
      
      marker.on('click', () => {
        onClusterClick(cluster);
      });

      markersLayerRef.current!.addLayer(marker);
    }

    return () => {
      if (markersLayerRef.current) {
        markersLayerRef.current.clearLayers();
      }
    };
  }, [clusters, map, onClusterClick, selectedClusterKey]);

  return null;
}

// Zoom control component using Leaflet's map instance
function ZoomControls() {
  const map = useMap();
  return (
    <div className="absolute top-[12px] right-[12px] z-[1000] flex flex-row gap-[4px]">
      <button
        onClick={() => map.zoomIn()}
        className="bg-white size-[36px] flex items-center justify-center rounded-[8px] border border-rdj-border-primary shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-rdj-bg-primary-hover transition-colors cursor-pointer"
        aria-label="Zoom in"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M3 8h10" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        onClick={() => map.zoomOut()}
        className="bg-white size-[36px] flex items-center justify-center rounded-[8px] border border-rdj-border-primary shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] hover:bg-rdj-bg-primary-hover transition-colors cursor-pointer"
        aria-label="Zoom out"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10" stroke="#344054" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
}

interface InboxMapViewProps {
  mode: 'laden' | 'lossen';
}

export default function InboxMapView({ mode }: InboxMapViewProps) {
  const navigate = useNavigate();
  const [selectedCluster, setSelectedCluster] = useState<{ lat: number; lng: number; items: MapCargoItem[] } | null>(null);
  const [selectedClusterKey, setSelectedClusterKey] = useState<string | null>(null);
  const [items] = useState<MapCargoItem[]>(mapCargoData);
  const [priorities, setPriorities] = useState<Record<string, number>>({});

  const handleClusterClick = useCallback((cluster: { lat: number; lng: number; items: MapCargoItem[] }) => {
    const key = `${cluster.lat.toFixed(4)}-${cluster.lng.toFixed(4)}`;
    if (selectedClusterKey === key) {
      setSelectedCluster(null);
      setSelectedClusterKey(null);
    } else {
      setSelectedCluster(cluster);
      setSelectedClusterKey(key);
    }
  }, [selectedClusterKey]);

  const handleCloseSidePanel = () => {
    setSelectedCluster(null);
    setSelectedClusterKey(null);
  };

  const getPriority = (id: string, defaultPriority: number) => {
    return priorities[id] ?? defaultPriority;
  };

  const setPriorityForItem = (id: string, priority: number) => {
    setPriorities(prev => ({ ...prev, [id]: priority }));
  };

  return (
    <div className="flex flex-1 relative overflow-hidden rounded-[8px] border border-[#eaecf0]" style={{ height: '100%', minHeight: '500px' }}>
      {/* Map */}
      <div className={`flex-1 relative transition-all duration-300 ${selectedCluster ? 'mr-[380px]' : ''}`}>
        <MapContainer
          center={[51.5, 5.0]}
          zoom={6}
          style={{ width: '100%', height: '100%' }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />
          <MapMarkers 
            items={items} 
            mode={mode} 
            onClusterClick={handleClusterClick}
            selectedClusterKey={selectedClusterKey}
          />
          <ZoomControls />
        </MapContainer>
      </div>

      {/* Side Panel */}
      {selectedCluster && (
        <div className="absolute right-0 top-0 bottom-0 w-[380px] bg-white border-l border-[#eaecf0] overflow-y-auto z-[1000]">
          {/* Panel Header */}
          <div className="flex items-center justify-between px-[20px] py-[16px] border-b border-[#eaecf0]">
            <p className="font-sans font-bold leading-[24px] text-[#101828] text-[16px]">
              {selectedCluster.items.length} {selectedCluster.items.length === 1 ? 'lading' : 'ladingen'} op deze locatie
            </p>
            <button 
              onClick={handleCloseSidePanel}
              className="p-[4px] rounded-[4px] hover:bg-rdj-bg-primary-hover transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="#667085" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Cargo Cards */}
          <div className="p-[12px] flex flex-col gap-[8px]">
            {selectedCluster.items.map((item) => (
              <div 
                key={item.id}
                className="bg-white border border-[#eaecf0] rounded-[8px] p-[16px] hover:shadow-sm transition-shadow cursor-pointer"
                onClick={() => navigate(`/markt/inbox/lading/${item.id}`)}
              >
                {/* Title + avatar */}
                <div className="flex items-start justify-between mb-[10px]">
                  <p className="font-sans font-bold leading-[20px] text-[#101828] text-[14px] flex-1">{item.title}</p>
                  <div className="ml-[8px] overflow-clip relative shrink-0 size-[28px] rounded-full bg-[#f2f4f7] flex items-center justify-center">
                    {item.owner ? (
                      <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
                        <path d={svgPaths.p16a03c00} stroke="#D0D5DD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
                        <path d={svgPaths.p16a03c00} stroke="#D0D5DD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Load location + date */}
                <div className="flex items-center gap-[6px] mb-[4px]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                    <circle cx="7" cy="7" r="5" stroke="#667085" strokeWidth="1.2" fill="none"/>
                  </svg>
                  <p className="font-sans font-normal leading-[18px] text-[#344054] text-[13px] flex-1">{item.loadLocation}</p>
                  <p className="font-sans font-normal leading-[18px] text-[#667085] text-[13px] shrink-0">{item.loadDate}</p>
                </div>

                {/* Unload location + date */}
                <div className="flex items-center gap-[6px] mb-[4px]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                    <path d="M7 1C4.24 1 2 3.24 2 6c0 3.75 5 7 5 7s5-3.25 5-7c0-2.76-2.24-5-5-5z" stroke="#667085" strokeWidth="1.2" fill="none"/>
                    <circle cx="7" cy="6" r="1.5" fill="#667085"/>
                  </svg>
                  <p className="font-sans font-normal leading-[18px] text-[#344054] text-[13px] flex-1">{item.unloadLocation}</p>
                  <p className="font-sans font-normal leading-[18px] text-[#667085] text-[13px] shrink-0">{item.unloadDate}</p>
                </div>

                {/* Relation */}
                <div className="flex items-center gap-[6px] mb-[10px]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                    <path d="M7 7C8.657 7 10 5.657 10 4C10 2.343 8.657 1 7 1C5.343 1 4 2.343 4 4C4 5.657 5.343 7 7 7Z" stroke="#667085" strokeWidth="1.2" fill="none"/>
                    <path d="M1 13C1 10.239 3.239 8 6 8H8C10.761 8 13 10.239 13 13" stroke="#667085" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
                  </svg>
                  <p className="font-sans font-normal leading-[18px] text-[#344054] text-[13px] flex-1">{item.relation}</p>
                  <p className="font-sans font-normal leading-[18px] text-[#667085] text-[13px] shrink-0">{item.relationLink}</p>
                </div>

                {/* Bottom row: matches, stars, actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[8px]">
                    <span className="font-sans font-normal leading-[18px] text-[#667085] text-[13px]">{item.matches} matches</span>
                    <div className="flex items-center gap-[2px]">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          onClick={(e) => {
                            e.stopPropagation();
                            setPriorityForItem(item.id, star);
                          }}
                          className="shrink-0 size-[16px]"
                        >
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                            <g clipPath="url(#clip_star)">
                              <path d={svgPaths.p2f878000} fill={star <= getPriority(item.id, item.priority) ? "#FDB022" : "#F2F4F7"} />
                            </g>
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}