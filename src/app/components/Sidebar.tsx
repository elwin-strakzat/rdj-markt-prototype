import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router";
import svgPaths from "../../imports/svg-5lxjaeghl9";
import imgAvatar from "../../assets/a2737d3b5b234fc04041650cb9f114889c6859da.png";
import svgPathsMenu from "../../imports/svg-80ushx2b4a";

export default function Sidebar() {
  const [showMarktMenu, setShowMarktMenu] = useState(false);
  const [showCrmMenu, setShowCrmMenu] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const [crmMenuTop, setCrmMenuTop] = useState(0);
  const marktButtonRef = useRef<HTMLDivElement>(null);
  const crmButtonRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const crmMenuRef = useRef<HTMLDivElement>(null);
  const hoverZoneRef = useRef<HTMLDivElement>(null);
  const crmHoverZoneRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const crmCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mousePositionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const location = useLocation();

  // Check if current page is a markt-related page
  const isMarktPage = location.pathname === '/inbox' ||
                      location.pathname === '/bevrachting' ||
                      location.pathname.startsWith('/inbox/') ||
                      location.pathname.startsWith('/lading/') ||
                      location.pathname.startsWith('/vaartuig/') ||
                      location.pathname.startsWith('/markt/');

  // Check if current page is a Lading page
  const isLadingPage = location.pathname === '/lading' || location.pathname.startsWith('/lading/');

  // Check if current page is a CRM page
  const isCrmPage = location.pathname.startsWith('/crm/');

  const cancelClose = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback((delay = 100) => {
    cancelClose();
    closeTimeoutRef.current = setTimeout(() => {
      setShowMarktMenu(false);
    }, delay);
  }, [cancelClose]);

  // Check if point is inside the safety triangle
  const isPointInSafetyTriangle = useCallback((mouseX: number, mouseY: number) => {
    if (!marktButtonRef.current || !menuRef.current) return false;

    const buttonRect = marktButtonRef.current.getBoundingClientRect();
    const menuRect = menuRef.current.getBoundingClientRect();

    // Triangle vertices:
    // A = cursor position (approximated as right edge of button)
    const ax = buttonRect.right;
    const ay = buttonRect.top + buttonRect.height / 2;
    // B = top-left of submenu (with padding)
    const bx = menuRect.left;
    const by = menuRect.top - 10;
    // C = bottom-left of submenu (with padding)
    const cx = menuRect.left;
    const cy = menuRect.bottom + 10;

    // Check if point (mouseX, mouseY) is inside triangle ABC using barycentric coordinates
    const denominator = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
    if (Math.abs(denominator) < 0.001) return false;

    const a = ((by - cy) * (mouseX - cx) + (cx - bx) * (mouseY - cy)) / denominator;
    const b = ((cy - ay) * (mouseX - cx) + (ax - cx) * (mouseY - cy)) / denominator;
    const c = 1 - a - b;

    return a >= -0.1 && b >= -0.1 && c >= -0.1;
  }, []);

  // Track mouse position globally when menu is open
  useEffect(() => {
    if (!showMarktMenu) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [showMarktMenu]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
      if (crmCloseTimeoutRef.current) clearTimeout(crmCloseTimeoutRef.current);
    };
  }, []);

  // CRM menu handlers
  const cancelCrmClose = useCallback(() => {
    if (crmCloseTimeoutRef.current) {
      clearTimeout(crmCloseTimeoutRef.current);
      crmCloseTimeoutRef.current = null;
    }
  }, []);

  const scheduleCrmClose = useCallback((delay = 100) => {
    cancelCrmClose();
    crmCloseTimeoutRef.current = setTimeout(() => {
      setShowCrmMenu(false);
    }, delay);
  }, [cancelCrmClose]);

  const handleCrmMouseEnter = useCallback(() => {
    cancelCrmClose();
    if (crmButtonRef.current) {
      const buttonRect = crmButtonRef.current.getBoundingClientRect();
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;
      const estimatedMenuHeight = 90;
      setCrmMenuTop(buttonCenterY - estimatedMenuHeight / 2);
    }
    setShowCrmMenu(true);
  }, [cancelCrmClose]);

  const handleCrmMouseLeave = useCallback(() => {
    scheduleCrmClose(150);
  }, [scheduleCrmClose]);

  const handleMarktMouseEnter = useCallback(() => {
    cancelClose();
    // Calculate vertical center alignment
    if (marktButtonRef.current) {
      const buttonRect = marktButtonRef.current.getBoundingClientRect();
      const buttonCenterY = buttonRect.top + buttonRect.height / 2;
      // Menu height is approximately 4 items * 38px + 8px padding = ~160px
      const estimatedMenuHeight = 160;
      setMenuTop(buttonCenterY - estimatedMenuHeight / 2);
    }
    setShowMarktMenu(true);
  }, [cancelClose]);

  const handleMarktMouseLeave = useCallback(() => {
    // Small delay to allow mouse to reach the menu or safety triangle
    scheduleClose(150);
  }, [scheduleClose]);

  const handleMenuMouseEnter = useCallback(() => {
    cancelClose();
  }, [cancelClose]);

  const handleMenuMouseLeave = useCallback(() => {
    scheduleClose(100);
  }, [scheduleClose]);

  // Safety triangle zone mouse handler
  const handleSafetyZoneMouseMove = useCallback((e: React.MouseEvent) => {
    if (!showMarktMenu) return;

    const isInTriangle = isPointInSafetyTriangle(e.clientX, e.clientY);
    const isOverButton = marktButtonRef.current?.contains(e.target as Node);
    const isOverMenu = menuRef.current?.contains(e.target as Node);

    if (isInTriangle || isOverButton || isOverMenu) {
      cancelClose();
    }
  }, [showMarktMenu, isPointInSafetyTriangle, cancelClose]);

  const handleSafetyZoneMouseLeave = useCallback(() => {
    if (showMarktMenu) {
      scheduleClose(80);
    }
  }, [showMarktMenu, scheduleClose]);

  const marktMenuItems = [
    { label: "Inbox", path: "/markt/inbox/ladingen" },
    { label: "Bevrachting", path: "/markt/bevrachting/ladingen" },
    { label: "Pijplijn", path: "/markt/pijplijn/ladingen" },
    { label: "Onderhandelingen", path: "/markt/onderhandelingen/ladingen" },
  ];

  const crmMenuItems = [
    { label: "Relaties", path: "/crm/relaties" },
    { label: "Deals", path: "/crm/deals" },
  ];

  return (
    <div className="bg-rdj-bg-secondary relative shrink-0 w-[72px] h-screen sticky top-0 z-50" data-name="Sidebar navigation">
      <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative" data-name="Content">
          {/* Navigation */}
          <div className="content-stretch flex flex-col gap-[24px] items-start pt-[32px] relative shrink-0 w-full" data-name="Navigation">
            {/* Header */}
            <div className="relative shrink-0 w-full" data-name="Header">
              <div className="content-stretch flex flex-col items-start px-[20px] relative w-full">
                <div className="content-stretch flex items-start relative shrink-0" data-name="Logomark">
                  <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Content">
                    <div className="absolute left-0 overflow-clip size-[32px] top-0" data-name="Logo">
                      <div className="absolute h-[32px] left-[9.24px] top-0 w-[14.083px]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0829 32">
                          <g id="Group 1">
                            <path d={svgPaths.p1fd1d0f0} fill="var(--fill-0, #1567A4)" id="Vector" />
                            <path d={svgPaths.p2140380} fill="var(--fill-0, #1567A4)" id="Vector_2" />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Items */}
            <div className="relative shrink-0 w-full" data-name="Navigation">
              <div className="flex flex-col items-center size-full">
                <div className="content-stretch flex flex-col gap-[16px] items-center px-[16px] relative w-full">
                  {/* Lading */}
                  <Link to="/lading" className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Item">
                    <div className={`content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-[40px] ${isLadingPage ? 'bg-[#e3effb]' : ''}`} data-name="_Nav item button">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="container">
                        <div className="absolute inset-[8.93%_12.5%]" data-name="Icon">
                          <div className="absolute inset-[-5.07%_-5.56%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0007 21.7121">
                              <path d={svgPaths.p7ea7b00} id="Icon" stroke={isLadingPage ? "#1567A4" : "#667085"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="font-sans font-normal leading-[18px] relative shrink-0 text-[#344054] text-[12px] whitespace-nowrap">Lading</p>
                  </Link>
                  
                  {/* Vloot */}
                  <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Item">
                    <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-[40px]" data-name="_Nav item button">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="anchor">
                        <div className="absolute inset-[8.33%]" data-name="Icon">
                          <div className="absolute inset-[-5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                              <path d={svgPaths.p22d4a480} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="font-sans font-normal leading-[18px] relative shrink-0 text-[#344054] text-[12px] whitespace-nowrap">Vloot</p>
                  </div>
                  
                  {/* Planning */}
                  <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-full" data-name="Item">
                    <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0" data-name="_Nav item button">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="clipboard">
                        <div className="absolute inset-[8.33%_16.67%]" data-name="Icon">
                          <div className="absolute inset-[-5%_-6.25%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0002 22">
                              <path d={svgPaths.p20684dc0} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="font-sans font-normal leading-[18px] relative shrink-0 text-[#344054] text-[12px] whitespace-nowrap">Planning</p>
                  </div>
                  
                  {/* Markt (Active) */}
                  <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Item">
                    <div
                      className={`content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-[40px] cursor-pointer ${isMarktPage ? 'bg-[#e3effb]' : ''}`}
                      data-name="_Nav item button"
                      ref={marktButtonRef}
                      onMouseEnter={handleMarktMouseEnter}
                      onMouseLeave={handleMarktMouseLeave}
                    >
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="scales-01">
                        <div className="absolute inset-[12.5%_8.33%]" data-name="Icon">
                          <div className="absolute inset-[-5.56%_-5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0001 20">
                              <path d={svgPaths.pca96c80} id="Icon" stroke={isMarktPage ? "#1567A4" : "#667085"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="font-sans font-normal leading-[18px] relative shrink-0 text-[#344054] text-[12px] whitespace-nowrap">Markt</p>
                  </div>
                  
                  {/* Backoffice */}
                  <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Item">
                    <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-[40px]" data-name="_Nav item button">
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="box">
                        <div className="absolute inset-[12.5%_8.33%]" data-name="Icon">
                          <div className="absolute inset-[-5.56%_-5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
                              <path d={svgPaths.p3e829c00} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="font-sans font-normal leading-[18px] relative shrink-0 text-[#344054] text-[12px] whitespace-nowrap">Backoffice</p>
                  </div>
                  
                  {/* CRM */}
                  <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Item">
                    <div
                      className={`content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-[40px] cursor-pointer ${isCrmPage ? 'bg-[#e3effb]' : ''}`}
                      data-name="_Nav item button"
                      ref={crmButtonRef}
                      onMouseEnter={handleCrmMouseEnter}
                      onMouseLeave={handleCrmMouseLeave}
                    >
                      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="users-01">
                        <div className="absolute inset-[12.5%_8.33%]" data-name="Icon">
                          <div className="absolute inset-[-5.56%_-5%]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
                              <path d={svgPaths.p364ae300} id="Icon" stroke={isCrmPage ? "#1567A4" : "#667085"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="font-sans font-normal leading-[18px] relative shrink-0 text-[#344054] text-[12px] whitespace-nowrap">CRM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="relative shrink-0 w-full" data-name="Footer">
            <div className="flex flex-col items-center size-full">
              <div className="content-stretch flex flex-col gap-[24px] items-center pb-[24px] px-[16px] relative w-full">
                <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Item">
                  <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[4px] shrink-0 size-[40px]" data-name="_Nav item button">
                    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="settings-01">
                      <div className="absolute inset-[8.33%]" data-name="Icon">
                        <div className="absolute inset-[-5%]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                            <g id="Icon">
                              <path d={svgPaths.p2acf2900} stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                              <path d={svgPaths.p218c3700} stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-rdj-border-secondary border-r border-solid inset-0 pointer-events-none" />
      
      {/* Safety triangle hover zone - invisible overlay between button and menu */}
      {showMarktMenu && (
        <div
          ref={hoverZoneRef}
          className="fixed inset-0 z-[60]"
          style={{ pointerEvents: 'none' }}
        >
          <div
            className="absolute"
            style={{
              left: '72px',
              top: `${menuTop - 20}px`,
              width: '20px',
              height: menuRef.current ? `${menuRef.current.getBoundingClientRect().height + 40}px` : '200px',
              pointerEvents: 'auto',
            }}
            onMouseMove={handleSafetyZoneMouseMove}
            onMouseLeave={handleSafetyZoneMouseLeave}
          />
        </div>
      )}

      {/* CRM Safety triangle hover zone */}
      {showCrmMenu && (
        <div
          ref={crmHoverZoneRef}
          className="fixed inset-0 z-[60]"
          style={{ pointerEvents: 'none' }}
        >
          <div
            className="absolute"
            style={{
              left: '72px',
              top: `${crmMenuTop - 20}px`,
              width: '20px',
              height: crmMenuRef.current ? `${crmMenuRef.current.getBoundingClientRect().height + 40}px` : '120px',
              pointerEvents: 'auto',
            }}
            onMouseMove={(e) => {
              if (!showCrmMenu) return;
              cancelCrmClose();
            }}
            onMouseLeave={() => {
              if (showCrmMenu) scheduleCrmClose(80);
            }}
          />
        </div>
      )}

      {/* CRM Menu */}
      {showCrmMenu && (
        <div
          ref={crmMenuRef}
          className="fixed left-[80px] w-[160px] bg-white rounded-[6px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] z-[70]"
          style={{ top: `${crmMenuTop}px` }}
          onMouseEnter={cancelCrmClose}
          onMouseLeave={() => scheduleCrmClose(100)}
        >
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start overflow-clip py-[4px] relative shrink-0 w-full">
              {crmMenuItems.map((item) => {
                const isActive = location.pathname.startsWith(item.path);
                return (
                  <div key={item.path} className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[4px] py-px relative w-full">
                        <Link
                          to={item.path}
                          onClick={() => setShowCrmMenu(false)}
                          className={`flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] ${
                            isActive ? 'bg-rdj-bg-secondary' : 'hover:bg-rdj-bg-secondary'
                          } transition-colors duration-150`}
                        >
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex items-center px-[8px] py-[9px] relative w-full">
                              <p className={`flex-[1_0_0] font-sans font-bold leading-[20px] min-h-px min-w-px relative text-[14px] ${
                                isActive ? 'text-[#182230]' : 'text-[#344054]'
                              }`}>
                                {item.label}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-rdj-border-secondary border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" />
        </div>
      )}

      {/* Markt Menu */}
      {showMarktMenu && (
        <div
          ref={menuRef}
          className="fixed left-[80px] w-[160px] bg-white rounded-[6px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)] z-[70]"
          style={{ top: `${menuTop}px` }}
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start overflow-clip py-[4px] relative shrink-0 w-full">
              {marktMenuItems.map((item) => {
                // Extract base path (e.g., /markt/inbox from /markt/inbox/ladingen)
                const basePath = item.path.replace(/\/(ladingen|vaartuigen)$/, '');
                const isActive = location.pathname.startsWith(basePath);
                return (
                  <div key={item.path} className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[4px] py-px relative w-full">
                        <Link
                          to={item.path}
                          onClick={() => setShowMarktMenu(false)}
                          className={`flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] ${
                            isActive ? 'bg-rdj-bg-secondary' : 'hover:bg-rdj-bg-secondary'
                          } transition-colors duration-150`}
                        >
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex items-center px-[8px] py-[9px] relative w-full">
                              <p className={`flex-[1_0_0] font-sans font-bold leading-[20px] min-h-px min-w-px relative text-[14px] ${
                                isActive ? 'text-[#182230]' : 'text-[#344054]'
                              }`}>
                                {item.label}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-rdj-border-secondary border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]" />
        </div>
      )}
    </div>
  );
}