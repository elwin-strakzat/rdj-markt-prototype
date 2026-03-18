import L from "leaflet";
import { useNavigate } from "react-router";
import { useDetailPanel } from "./DetailPanelContext";
import svgPaths from "../../imports/svg-gjl6m1r792";

export interface MapVesselItem {
  id: string;
  name: string;
  type: string;
  tonnage: string;
  capacity: string;
  relation: string;
  relationContact: string;
  location: string;
  availableFrom: string;
  lat: number;
  lng: number;
  matches: number;
  owner: string;
  priority: number;
}

export const mapVesselData: MapVesselItem[] = [
  // Rotterdam area cluster
  {
    id: '1',
    name: 'Emily',
    type: 'motorschip',
    tonnage: '3.000 ton',
    capacity: '4.200 m\u00b3',
    relation: 'Markel Freight B.V.',
    relationContact: 'H.J. Duivenvoort',
    location: 'Waalhaven',
    availableFrom: 'Vanaf Ma 12 Jan',
    lat: 51.8950,
    lng: 4.4200,
    matches: 4,
    owner: 'avatar1',
    priority: 1,
  },
  {
    id: '2',
    name: 'Agast',
    type: 'motorschip',
    tonnage: '2.985 ton',
    capacity: '4.200 m\u00b3',
    relation: 'Markel Freight B.V.',
    relationContact: 'H.J. Duivenvoort',
    location: 'Waalhaven',
    availableFrom: 'Vanaf Ma 12 Jan',
    lat: 51.8980,
    lng: 4.4150,
    matches: 4,
    owner: 'avatar2',
    priority: 1,
  },
  {
    id: '3',
    name: 'Adonai',
    type: 'motorschip',
    tonnage: '3.655 ton',
    capacity: '4.200 m\u00b3',
    relation: 'Buiten Onszelf N.V.',
    relationContact: 'Lisa Aelbrechtse',
    location: 'Europoort',
    availableFrom: 'Vanaf Wo 14 Jan',
    lat: 51.9575,
    lng: 4.1210,
    matches: 7,
    owner: '',
    priority: 0,
  },
  {
    id: '4',
    name: 'Antoine V',
    type: 'motorschip',
    tonnage: '3.795 ton',
    capacity: '4.200 m\u00b3',
    relation: 'Trans Logistics Group',
    relationContact: '',
    location: 'Botlek',
    availableFrom: 'Vanaf Do 15 Jan',
    lat: 51.8850,
    lng: 4.3100,
    matches: 8,
    owner: 'avatar1',
    priority: 0,
  },
  {
    id: '5',
    name: 'Agnes',
    type: 'motorschip',
    tonnage: '2.835 ton',
    capacity: '4.200 m\u00b3',
    relation: 'Markel Freight B.V.',
    relationContact: 'Freya Hendriksmith',
    location: 'Maasvlakte',
    availableFrom: 'Vanaf Ma 19 Jan',
    lat: 51.9600,
    lng: 4.0300,
    matches: 9,
    owner: '',
    priority: 0,
  },
  // Amsterdam area
  {
    id: '6',
    name: 'Hendrik Jan',
    type: 'motorschip',
    tonnage: '3.200 ton',
    capacity: '4.500 m\u00b3',
    relation: 'Van Dijk Shipping B.V.',
    relationContact: 'H.J. Duivenvoort',
    location: 'Westhaven',
    availableFrom: 'Vanaf Di 13 Jan',
    lat: 51.8180,
    lng: 4.6650,
    matches: 5,
    owner: 'avatar2',
    priority: 2,
  },
  {
    id: '7',
    name: 'Wilma',
    type: 'motorschip',
    tonnage: '2.750 ton',
    capacity: '3.800 m\u00b3',
    relation: 'Rijnvaart Transport N.V.',
    relationContact: 'P. Janssen',
    location: 'Coenhaven',
    availableFrom: 'Vanaf Vr 16 Jan',
    lat: 52.3980,
    lng: 4.8500,
    matches: 3,
    owner: '',
    priority: 0,
  },
  {
    id: '8',
    name: 'De Toekomst',
    type: 'duwbak',
    tonnage: '4.100 ton',
    capacity: '5.200 m\u00b3',
    relation: 'Jansen Bevrachting B.V.',
    relationContact: 'L. de Vries',
    location: 'Petroleumhaven',
    availableFrom: 'Vanaf Za 17 Jan',
    lat: 52.3900,
    lng: 4.8900,
    matches: 6,
    owner: '',
    priority: 1,
  },
  {
    id: '9',
    name: 'Orion',
    type: 'motorschip',
    tonnage: '3.519 ton',
    capacity: '4.200 m\u00b3',
    relation: 'Cargo Solutions Ltd.',
    relationContact: 'Marie Thomas',
    location: 'Vlothaven',
    availableFrom: 'Vanaf Ma 19 Jan',
    lat: 52.3930,
    lng: 4.8650,
    matches: 4,
    owner: 'avatar1',
    priority: 0,
  },
  // Dordrecht / Moerdijk
  {
    id: '10',
    name: 'Fortuna',
    type: 'motorschip',
    tonnage: '3.100 ton',
    capacity: '4.000 m\u00b3',
    relation: 'Eco Transport GmbH',
    relationContact: 'Anna M\u00fcller',
    location: 'Zeehaven Dordrecht',
    availableFrom: 'Vanaf Di 20 Jan',
    lat: 51.8100,
    lng: 4.6700,
    matches: 3,
    owner: '',
    priority: 0,
  },
  {
    id: '11',
    name: 'Veerman',
    type: 'motorschip',
    tonnage: '2.950 ton',
    capacity: '3.900 m\u00b3',
    relation: 'Global Shipping Inc.',
    relationContact: 'Raj Patel',
    location: 'Industriehaven Moerdijk',
    availableFrom: 'Vanaf Do 15 Jan',
    lat: 51.6900,
    lng: 4.5900,
    matches: 5,
    owner: 'avatar2',
    priority: 1,
  },
  // Terneuzen / Vlissingen
  {
    id: '12',
    name: 'Zeebrugge',
    type: 'motorschip',
    tonnage: '3.450 ton',
    capacity: '4.400 m\u00b3',
    relation: 'Rijnvaart Transport N.V.',
    relationContact: "Wanda in 't Veld",
    location: 'Kanaalzone Terneuzen',
    availableFrom: 'Vanaf Wo 14 Jan',
    lat: 51.3360,
    lng: 3.8280,
    matches: 2,
    owner: '',
    priority: 0,
  },
  // Nijmegen
  {
    id: '13',
    name: 'Rivierland',
    type: 'motorschip',
    tonnage: '3.000 ton',
    capacity: '4.100 m\u00b3',
    relation: 'Van Dijk Shipping B.V.',
    relationContact: 'H.J. Duivenvoort',
    location: 'Waal Nijmegen',
    availableFrom: 'Vanaf Ma 12 Jan',
    lat: 51.8520,
    lng: 5.8580,
    matches: 4,
    owner: 'avatar1',
    priority: 1,
  },
  // Noord-Nederland
  {
    id: '14',
    name: 'Frysl\u00e2n',
    type: 'motorschip',
    tonnage: '2.800 ton',
    capacity: '3.600 m\u00b3',
    relation: 'Trans Logistics Group',
    relationContact: '',
    location: 'Industriehaven Harlingen',
    availableFrom: 'Vanaf Do 15 Jan',
    lat: 53.1740,
    lng: 5.4080,
    matches: 3,
    owner: '',
    priority: 0,
  },
  {
    id: '15',
    name: 'Groninger',
    type: 'duwbak',
    tonnage: '3.800 ton',
    capacity: '4.800 m\u00b3',
    relation: 'Jansen Bevrachting B.V.',
    relationContact: 'L. de Vries',
    location: 'Eemskanaal Groningen',
    availableFrom: 'Vanaf Ma 19 Jan',
    lat: 53.2190,
    lng: 6.5680,
    matches: 6,
    owner: '',
    priority: 2,
  },
  // Oost-Nederland
  {
    id: '16',
    name: 'IJsselwind',
    type: 'motorschip',
    tonnage: '2.929 ton',
    capacity: '3.700 m\u00b3',
    relation: 'Eco Transport GmbH',
    relationContact: 'Anna M\u00fcller',
    location: 'IJssel Kampen',
    availableFrom: 'Vanaf Di 13 Jan',
    lat: 52.5560,
    lng: 5.9100,
    matches: 5,
    owner: 'avatar2',
    priority: 1,
  },
  {
    id: '17',
    name: 'Twente',
    type: 'motorschip',
    tonnage: '3.150 ton',
    capacity: '4.000 m\u00b3',
    relation: 'Markel Freight B.V.',
    relationContact: 'H.Q. Duivenvoorde',
    location: 'Twentekanaal Hengelo',
    availableFrom: 'Vanaf Vr 16 Jan',
    lat: 52.2700,
    lng: 6.7930,
    matches: 2,
    owner: '',
    priority: 0,
  },
  // Midden-Nederland
  {
    id: '18',
    name: 'Utrecht Star',
    type: 'motorschip',
    tonnage: '3.050 ton',
    capacity: '4.100 m\u00b3',
    relation: 'Cargo Solutions Ltd.',
    relationContact: 'Marie Thomas',
    location: 'Lage Weide Utrecht',
    availableFrom: 'Vanaf Wo 14 Jan',
    lat: 52.1000,
    lng: 5.0870,
    matches: 4,
    owner: '',
    priority: 0,
  },
];

// Cluster items by proximity based on current zoom level
function clusterVessels(items: MapVesselItem[], zoom: number): { lat: number; lng: number; items: MapVesselItem[] }[] {
  const threshold = 150 / Math.pow(2, zoom);

  const clusters: { lat: number; lng: number; items: MapVesselItem[] }[] = [];
  const assigned = new Set<string>();

  for (const item of items) {
    if (assigned.has(item.id)) continue;

    const cluster: MapVesselItem[] = [item];
    assigned.add(item.id);

    for (const other of items) {
      if (assigned.has(other.id)) continue;
      const distance = Math.sqrt(Math.pow(item.lat - other.lat, 2) + Math.pow(item.lng - other.lng, 2));
      if (distance < threshold) {
        cluster.push(other);
        assigned.add(other.id);
      }
    }

    let avgLat = 0, avgLng = 0;
    for (const c of cluster) {
      avgLat += c.lat;
      avgLng += c.lng;
    }
    avgLat /= cluster.length;
    avgLng /= cluster.length;

    clusters.push({ lat: avgLat, lng: avgLng, items: cluster });
  }

  return clusters;
}

function createVesselClusterIcon(count: number, isSelected: boolean) {
  const size = count === 1 ? 32 : (count < 10 ? 36 : 44);

  if (count === 1) {
    // Single anchor-style marker
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

function VesselMapMarkers({
  items,
  onClusterClick,
  selectedClusterKey,
}: {
  items: MapVesselItem[];
  onClusterClick: (cluster: { lat: number; lng: number; items: MapVesselItem[] }) => void;
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

  const clusters = useMemo(() => clusterVessels(items, zoom), [items, zoom]);

  useEffect(() => {
    if (markersLayerRef.current) {
      markersLayerRef.current.clearLayers();
    } else {
      markersLayerRef.current = L.layerGroup().addTo(map);
    }

    for (const cluster of clusters) {
      const clusterKey = `${cluster.lat.toFixed(4)}-${cluster.lng.toFixed(4)}`;
      const isSelected = selectedClusterKey === clusterKey;
      const icon = createVesselClusterIcon(cluster.items.length, isSelected);
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

export default function VesselMapView() {
  const navigate = useNavigate();
  const { openDetail } = useDetailPanel();
  const [selectedCluster, setSelectedCluster] = useState<{ lat: number; lng: number; items: MapVesselItem[] } | null>(null);
  const [selectedClusterKey, setSelectedClusterKey] = useState<string | null>(null);
  const [items] = useState<MapVesselItem[]>(mapVesselData);
  const [priorities, setPriorities] = useState<Record<string, number>>({});

  const handleClusterClick = useCallback((cluster: { lat: number; lng: number; items: MapVesselItem[] }) => {
    const key = `${cluster.lat.toFixed(4)}-${cluster.lng.toFixed(4)}`;
    if (selectedClusterKey === key) {
      setSelectedCluster(null);
      setSelectedClusterKey(null);
    } else {
      setSelectedCluster(cluster);
      setSelectedClusterKey(key);
    }
  }, [selectedClusterKey]);

  const handleClosePanel = () => {
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
          <VesselMapMarkers
            items={items}
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
              {selectedCluster.items.length} {selectedCluster.items.length === 1 ? 'vaartuig' : 'vaartuigen'} op deze locatie
            </p>
            <button
              onClick={handleClosePanel}
              className="p-[4px] rounded-[4px] hover:bg-rdj-bg-primary-hover transition-colors cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="#667085" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Vessel Cards */}
          <div className="p-[12px] flex flex-col gap-[8px]">
            {selectedCluster.items.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#eaecf0] rounded-[8px] p-[16px] hover:shadow-sm transition-shadow cursor-pointer"
                onClick={() => openDetail('vaartuig', item.id)}
              >
                {/* Name + avatar */}
                <div className="flex items-start justify-between mb-[4px]">
                  <p className="font-sans font-bold leading-[20px] text-[#101828] text-[14px] flex-1">{item.name}</p>
                  <div className="ml-[8px] overflow-clip relative shrink-0 size-[28px] rounded-full bg-[#f2f4f7] flex items-center justify-center">
                    {item.owner ? (
                      <p className="font-sans font-bold text-[#344054] text-[11px]">
                        {item.owner === 'avatar1' ? 'PJ' : 'LV'}
                      </p>
                    ) : (
                      <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
                        <path d="M11 11C13.21 11 15 9.21 15 7C15 4.79 13.21 3 11 3C8.79 3 7 4.79 7 7C7 9.21 8.79 11 11 11ZM11 13C8.33 13 3 14.34 3 17V19H19V17C19 14.34 13.67 13 11 13Z" stroke="#D0D5DD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fill="none"/>
                      </svg>
                    )}
                  </div>
                </div>

                {/* Tonnage / capacity / type */}
                <p className="font-sans font-normal leading-[18px] text-[#475467] text-[13px] mb-[10px]">
                  {item.tonnage} / {item.capacity} ({item.type})
                </p>

                {/* Location + available from */}
                <div className="flex items-center gap-[6px] mb-[4px]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                    <circle cx="7" cy="7" r="3" fill="#1567a4"/>
                  </svg>
                  <p className="font-sans font-normal leading-[18px] text-[#344054] text-[13px] flex-1">{item.location}</p>
                  <p className="font-sans font-normal leading-[18px] text-[#667085] text-[13px] shrink-0">{item.availableFrom}</p>
                </div>

                {/* Relation */}
                <div className="flex items-center gap-[6px] mb-[10px]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                    <path d="M2 12V4H5V2H9V6H12V12H8V9H6V12H2Z" stroke="#667085" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="font-sans font-normal leading-[18px] text-[#344054] text-[13px] flex-1">{item.relation}</p>
                  {item.relationContact && (
                    <p className="font-sans font-normal leading-[18px] text-[#667085] text-[13px] shrink-0">{item.relationContact}</p>
                  )}
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
                            <g clipPath="url(#clip_star_v)">
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