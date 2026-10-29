import React, { useState } from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import { MapPin, Navigation, Phone, ExternalLink, ShieldCheck, Compass } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface LocationMapProps {
  apiKey?: string;
}

const MMOTONG_COORDS = { lat: -23.834, lng: 29.352 };
const POLOKWANE_COORDS = { lat: -23.9045, lng: 29.4688 };
const SESHEGO_COORDS = { lat: -23.8569, lng: 29.3879 };

export const LocationMap: React.FC<LocationMapProps> = ({
  apiKey = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string) ||
    'AIzaSyB3yQ0loR_eosX9RCRaL77wkoebbc-_GuA',
}) => {
  const [selectedMarker, setSelectedMarker] = useState<'mmotong' | 'polokwane' | 'seshego' | null>('mmotong');
  const [mapCenter, setMapCenter] = useState(MMOTONG_COORDS);
  const [mapZoom, setMapZoom] = useState(12);

  const handleCenterMmotong = () => {
    setMapCenter(MMOTONG_COORDS);
    setMapZoom(13);
    setSelectedMarker('mmotong');
  };

  const handleCenterOverview = () => {
    setMapCenter({ lat: -23.865, lng: 29.41 });
    setMapZoom(11);
    setSelectedMarker(null);
  };

  return (
    <div className="w-full bg-[#F5F0E5] rounded-xs border border-[#06251D]/15 shadow-sm overflow-hidden flex flex-col">
      {/* Map Control Toolbar */}
      <div className="bg-[#06251D] text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-[#C9A23F]/30">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#C9A23F]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-white">
            NKOANA Operational Base & Service Corridor
          </span>
        </div>

        {/* View toggles */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCenterMmotong}
            className="px-3 py-1 text-xs font-medium bg-[#C9A23F] text-[#06251D] hover:bg-[#d9b24f] rounded-xs transition-colors flex items-center gap-1.5 font-semibold"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Mmotong Base</span>
          </button>
          <button
            type="button"
            onClick={handleCenterOverview}
            className="px-3 py-1 text-xs font-medium bg-white/10 text-white/90 hover:text-white hover:bg-white/20 rounded-xs transition-colors border border-white/15"
          >
            Regional View
          </button>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              'Mmotong, Limpopo, South Africa'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 text-xs font-medium text-[#C9A23F] hover:text-white transition-colors flex items-center gap-1 ml-1"
          >
            <span>Directions</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Map Container with explicit CSS height (CF2 compliance) */}
      <div className="relative w-full h-[440px] sm:h-[480px] bg-[#0A362B]">
        <APIProvider apiKey={apiKey}>
          <Map
            mapId="DEMO_MAP_ID"
            center={mapCenter}
            zoom={mapZoom}
            gestureHandling="greedy"
            disableDefaultUI={false}
            internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
            style={{ width: '100%', height: '100%' }}
          >
            {/* Primary Advanced Marker: Mmotong Hub */}
            <AdvancedMarker
              position={MMOTONG_COORDS}
              title="NKOANA Automation Gates CC — Operational Hub"
              onClick={() => setSelectedMarker('mmotong')}
            >
              <Pin
                background="#06251D"
                borderColor="#C9A23F"
                glyphColor="#C9A23F"
                scale={1.2}
              />
            </AdvancedMarker>

            {/* Service Point: Polokwane */}
            <AdvancedMarker
              position={POLOKWANE_COORDS}
              title="Polokwane Service Area"
              onClick={() => setSelectedMarker('polokwane')}
            >
              <Pin
                background="#171B19"
                borderColor="#FFFFFF"
                glyphColor="#FFFFFF"
                scale={0.9}
              />
            </AdvancedMarker>

            {/* Service Point: Seshego */}
            <AdvancedMarker
              position={SESHEGO_COORDS}
              title="Seshego Service Area"
              onClick={() => setSelectedMarker('seshego')}
            >
              <Pin
                background="#171B19"
                borderColor="#FFFFFF"
                glyphColor="#FFFFFF"
                scale={0.9}
              />
            </AdvancedMarker>

            {/* InfoWindow for Mmotong Operations Base */}
            {selectedMarker === 'mmotong' && (
              <InfoWindow
                position={MMOTONG_COORDS}
                onCloseClick={() => setSelectedMarker(null)}
              >
                <div className="p-2 max-w-xs text-[#171B19]">
                  <div className="flex items-center gap-1.5 text-[#06251D] font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#C9A23F]" />
                    <span>NKOANA Automation Gates CC</span>
                  </div>
                  <div className="text-[11px] text-[#C9A23F] font-semibold mt-0.5">
                    Operations & Workshop Hub
                  </div>
                  <p className="text-xs text-[#171B19]/80 mt-1.5 leading-relaxed">
                    Mmotong, Limpopo 0742. We dispatch technicians for on-site property measurements, steel gate fitting, electric fencing, and motor automation.
                  </p>
                  <div className="mt-2.5 pt-2 border-t border-gray-200 flex items-center justify-between text-xs">
                    <a
                      href={`tel:${COMPANY_DETAILS.primaryPhone.replace(/\s+/g, '')}`}
                      className="text-[#06251D] font-bold flex items-center gap-1 hover:text-[#C9A23F]"
                    >
                      <Phone className="w-3 h-3 text-[#C9A23F]" />
                      <span>{COMPANY_DETAILS.primaryPhone}</span>
                    </a>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Mmotong+0742+Limpopo+South+Africa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#06251D] font-semibold underline flex items-center gap-0.5 text-[11px]"
                    >
                      <span>Get Route</span>
                      <Navigation className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </InfoWindow>
            )}

            {/* InfoWindow for Polokwane Area */}
            {selectedMarker === 'polokwane' && (
              <InfoWindow
                position={POLOKWANE_COORDS}
                onCloseClick={() => setSelectedMarker(null)}
              >
                <div className="p-2 max-w-xs text-[#171B19]">
                  <div className="font-bold text-sm text-[#06251D]">
                    Polokwane Service Area
                  </div>
                  <p className="text-xs text-[#171B19]/80 mt-1">
                    Scheduled on-site installations, palisade perimeter fitting, and electric fencing projects throughout Polokwane.
                  </p>
                </div>
              </InfoWindow>
            )}

            {/* InfoWindow for Seshego Area */}
            {selectedMarker === 'seshego' && (
              <InfoWindow
                position={SESHEGO_COORDS}
                onCloseClick={() => setSelectedMarker(null)}
              >
                <div className="p-2 max-w-xs text-[#171B19]">
                  <div className="font-bold text-sm text-[#06251D]">
                    Seshego Service Area
                  </div>
                  <p className="text-xs text-[#171B19]/80 mt-1">
                    Sliding gate automation, track repairs, motor upgrades, and security burglar proofing.
                  </p>
                </div>
              </InfoWindow>
            )}
          </Map>
        </APIProvider>
      </div>

      {/* Map Footer Information */}
      <div className="p-4 bg-white border-t border-[#06251D]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#171B19]/80">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
          <span>
            <strong>Service Coverage:</strong> Mmotong, Polokwane, Seshego, and surrounding Limpopo communities.
          </span>
        </div>
        <div className="text-[11px] text-[#171B19]/60">
          On-site consultations & quotes scheduled by appointment.
        </div>
      </div>
    </div>
  );
};
