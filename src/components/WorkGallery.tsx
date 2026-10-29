import React, { useState } from 'react';
import { Maximize2, X, Filter, Camera, Upload, CheckCircle, Info, ArrowRight } from 'lucide-react';
import { GALLERY_PROJECTS, ProjectItem } from '../data/companyData';
import { IllustrativeVisual } from './IllustrativeVisual';
import { RevealOnScroll } from './RevealOnScroll';

interface WorkGalleryProps {
  onSelectProjectForQuote: (projectTitle: string) => void;
}

export const WorkGallery: React.FC<WorkGalleryProps> = ({ onSelectProjectForQuote }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'automation' | 'access' | 'fencing' | 'fabrication'>('all');
  const [activeLightboxProject, setActiveLightboxProject] = useState<ProjectItem | null>(null);
  const [uploadedPhotos, setUploadedPhotos] = useState<Record<string, string>>({});
  const [showUploadModal, setShowUploadModal] = useState(false);

  const filterTabs = [
    { id: 'all', label: 'All Lifecycle Stages' },
    { id: 'automation', label: 'Automation & Commissioning' },
    { id: 'access', label: 'Intercoms & Access Control' },
    { id: 'fencing', label: 'Security Fencing' },
    { id: 'fabrication', label: 'Fabrication & Welding' },
  ];

  const filteredProjects = GALLERY_PROJECTS.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.category === activeFilter;
  });

  const handlePhotoUpload = (projectId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setUploadedPhotos((prev) => ({
            ...prev,
            [projectId]: reader.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="our-work" className="py-20 bg-white border-b border-[#06251D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Owner Status Note */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-[#C9A23F] font-bold mb-2">
              Project Lifecycle & Execution
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#06251D] tracking-tight">
              Our Work — From Concept to Completion
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#171B19]/75 leading-relaxed">
              Explore how NKOANA Automation Gates CC executes security projects across site design, steel fabrication, physical groundworks, motor automation, and ongoing maintenance.
            </p>
          </div>

          {/* Owner site photo prompt button */}
          <button
            onClick={() => setShowUploadModal(true)}
            className="self-start md:self-end flex items-center gap-2 text-xs font-semibold text-[#06251D] bg-[#F5F0E5] hover:bg-[#ebd9b5] px-4 py-2.5 rounded-xs border border-[#C9A23F]/40 transition-colors shrink-0 shadow-xs"
          >
            <Camera className="w-4 h-4 text-[#C9A23F]" />
            <span>Owner: Add Genuine Site Photos</span>
          </button>
        </div>

        {/* Ethical Transparency Banner */}
        <div className="mb-8 p-3.5 bg-[#F5F0E5]/70 border border-[#C9A23F]/30 rounded-xs flex items-start sm:items-center gap-3 text-xs text-[#171B19]/80">
          <Info className="w-4 h-4 text-[#C9A23F] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-[#06251D] font-semibold">Transparency Note:</strong> In accordance with our business integrity standard, gallery entries feature detailed technical schematics and project specifications representing NKOANA fabrication standards until verified site photography is uploaded by the owner.
          </p>
        </div>

        {/* Filter Bar (Interactive Buttons) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#06251D]/10">
          <div className="flex items-center gap-1.5 text-xs text-[#171B19]/60 mr-2">
            <Filter className="w-3.5 h-3.5 text-[#C9A23F]" />
            <span>Filter Phase:</span>
          </div>
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xs transition-colors whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-[#06251D] text-[#C9A23F] font-semibold shadow-xs'
                  : 'bg-[#F5F0E5] text-[#171B19]/70 hover:text-[#06251D] hover:bg-[#ebd9b5]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const hasCustomPhoto = !!uploadedPhotos[project.id];
            const customImage = uploadedPhotos[project.id];

            return (
              <RevealOnScroll
                key={project.id}
                delayMs={index * 75}
                className="h-full"
              >
                <div className="bg-[#F5F0E5]/40 rounded-xs border border-[#06251D]/10 hover:border-[#C9A23F]/60 transition-all duration-200 overflow-hidden flex flex-col justify-between group shadow-xs hover:shadow-md h-full">
                  <div>
                    {/* Image/Visual Container */}
                    <div className="relative h-60 w-full overflow-hidden bg-[#06251D] border-b border-[#06251D]/10">
                      <IllustrativeVisual
                        type={project.visualType}
                        title={project.title}
                        imageUrl={project.imageUrl}
                        imageAlt={project.imageAlt}
                        isOwnerPhoto={project.isOwnerPhoto}
                        customImageUrl={customImage}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        showBadge={true}
                      />

                      {/* Stage Label */}
                      <div className="absolute top-3 left-3 bg-[#06251D]/90 backdrop-blur-xs text-[#C9A23F] text-[10px] font-mono uppercase px-2.5 py-1 rounded-xs border border-[#C9A23F]/30 z-10">
                        {project.phase}
                      </div>

                      {/* Lightbox Trigger Button */}
                      <button
                        onClick={() => setActiveLightboxProject(project)}
                        aria-label={`View full details for ${project.title}`}
                        className="absolute bottom-3 right-3 p-2 bg-[#06251D]/90 text-white hover:text-[#C9A23F] rounded-xs border border-white/10 hover:border-[#C9A23F]/50 transition-colors shadow-sm z-10"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Information Box */}
                    <div className="p-6">
                      <div className="text-[11px] text-[#C9A23F] font-semibold uppercase tracking-wider mb-1">
                        {project.location}
                      </div>

                      <h3 className="font-display text-lg font-bold text-[#06251D] group-hover:text-[#06251D] leading-snug mb-2">
                        {project.title}
                      </h3>

                      <p className="text-xs text-[#171B19]/75 line-clamp-2 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Technical Highlights */}
                      <div className="space-y-1.5 pt-3 border-t border-[#06251D]/10">
                        {project.technicalHighlights.slice(0, 2).map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-[#171B19]/80 font-mono">
                            <span className="w-1.5 h-1.5 bg-[#C9A23F] rounded-full shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="p-6 pt-0 border-t border-[#06251D]/5 flex items-center justify-between mt-3">
                    <button
                      onClick={() => setActiveLightboxProject(project)}
                      className="text-xs font-semibold text-[#06251D] hover:text-[#C9A23F] transition-colors py-2"
                    >
                      Examine Specifications
                    </button>

                    <button
                      onClick={() => onSelectProjectForQuote(project.title)}
                      className="text-xs text-[#06251D] hover:text-[#C9A23F] font-semibold flex items-center gap-1"
                    >
                      <span>Request Similar</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightboxProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
          <div className="relative bg-[#F5F0E5] text-[#171B19] rounded-sm max-w-4xl w-full border border-[#C9A23F]/50 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
            
            {/* Lightbox Topbar */}
            <div className="bg-[#06251D] text-white p-5 border-b border-[#C9A23F]/30 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-mono text-[#C9A23F] uppercase tracking-wider">
                  Phase: {activeLightboxProject.phase}
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                  {activeLightboxProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveLightboxProject(null)}
                aria-label="Close project view"
                className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Content Area */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* High-Res Visual Slot */}
              <div className="h-72 sm:h-[420px] w-full rounded-xs overflow-hidden border border-[#06251D]/20 bg-[#06251D]">
                <IllustrativeVisual
                  type={activeLightboxProject.visualType}
                  title={activeLightboxProject.title}
                  imageUrl={activeLightboxProject.imageUrl}
                  imageAlt={activeLightboxProject.imageAlt}
                  isOwnerPhoto={activeLightboxProject.isOwnerPhoto}
                  customImageUrl={uploadedPhotos[activeLightboxProject.id]}
                  className="w-full h-full"
                  showBadge={true}
                />
              </div>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-display font-bold text-base text-[#06251D] mb-2">
                    Project Overview & Execution
                  </h4>
                  <p className="text-sm text-[#171B19]/85 leading-relaxed">
                    {activeLightboxProject.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-[#06251D]/10">
                    <span className="text-xs font-semibold text-[#06251D] block mb-1">
                      Project Location:
                    </span>
                    <span className="text-sm text-[#171B19]/80 font-medium">
                      {activeLightboxProject.location}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#06251D] uppercase tracking-wider mb-2">
                      Engineering Highlights
                    </h4>
                    <ul className="space-y-1.5">
                      {activeLightboxProject.technicalHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#171B19]/80">
                          <CheckCircle className="w-3.5 h-3.5 text-[#06251D] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-sm text-[#06251D] uppercase tracking-wider mb-2">
                      Materials & Hardware Specified
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeLightboxProject.materialsUsed.map((mat, i) => (
                        <span
                          key={i}
                          className="bg-white border border-[#06251D]/15 text-[#06251D] text-xs px-2.5 py-1 rounded-xs font-mono"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Lightbox Footer Actions */}
            <div className="bg-white p-4 sm:p-5 border-t border-[#06251D]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-[#171B19]/60">
                Interested in this exact fabrication or automation standard?
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setActiveLightboxProject(null)}
                  className="w-1/2 sm:w-auto px-4 py-2 text-xs font-semibold text-[#171B19]/80 hover:text-[#171B19] border border-[#171B19]/20 rounded-xs"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = activeLightboxProject.title;
                    setActiveLightboxProject(null);
                    onSelectProjectForQuote(title);
                  }}
                  className="w-1/2 sm:w-auto px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#06251D] bg-[#C9A23F] hover:bg-[#d9b24f] rounded-xs shadow-xs"
                >
                  Request Similar Installation
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Owner Photo Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-[#F5F0E5] text-[#171B19] rounded-sm max-w-xl w-full border border-[#C9A23F]/50 shadow-2xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-display text-xl font-bold text-[#06251D]">
                  Owner Site Photography Uploader
                </h3>
                <p className="text-xs text-[#171B19]/75 mt-1">
                  Upload genuine workshop fabrication and site installation photos to display in this gallery.
                </p>
              </div>
              <button
                onClick={() => setShowUploadModal(false)}
                className="p-1 text-[#171B19]/60 hover:text-[#171B19]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              {GALLERY_PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3 bg-white rounded-xs border border-[#06251D]/15 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-[#06251D] truncate">{proj.title}</div>
                    <div className="text-[11px] text-[#171B19]/60">{proj.phase}</div>
                  </div>

                  <label className="cursor-pointer shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#06251D] text-[#C9A23F] text-xs font-medium rounded-xs hover:bg-[#0a362b] transition-colors">
                    <Upload className="w-3.5 h-3.5" />
                    <span>{uploadedPhotos[proj.id] ? 'Replace' : 'Upload'}</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handlePhotoUpload(proj.id, e)}
                    />
                  </label>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#06251D]/10 flex justify-end">
              <button
                onClick={() => setShowUploadModal(false)}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#06251D] bg-[#C9A23F] hover:bg-[#d9b24f] rounded-xs"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
