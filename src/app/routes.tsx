import { createBrowserRouter, Navigate, Outlet } from "react-router";
import Bevrachting from "./pages/Bevrachting";
import Inbox from "./pages/Inbox";
import InboxVessels from "./pages/InboxVessels";
import InboxCargoDetail from "./pages/InboxCargoDetail";
import InboxVesselDetail from "./pages/InboxVesselDetail";
import LadingDetail from "./pages/LadingDetail";
import VaartuigDetail from "./pages/VaartuigDetail";
import Pijplijn from "./pages/Pijplijn";
import PijplijnDetail from "./pages/PijplijnDetail";
import NieuwBod from "./pages/NieuwBod";
import NieuweOnderhandeling from "./pages/NieuweOnderhandeling";
import Onderhandelingen from "./pages/Onderhandelingen";
import DatabaseAdmin from "./pages/DatabaseAdmin";
import Relaties from "./pages/Relaties";
import RelatieDetail from "./pages/RelatieDetail";
import Contracten from "./pages/Contracten";
import ContractDetail from "./pages/ContractDetail";
import Taken from "./pages/Taken";
import CrmLadingDetail from "./pages/CrmLadingDetail";
import CrmVaartuigDetail from "./pages/CrmVaartuigDetail";
import Ladingen from "./pages/Ladingen";
import LadingModuleDetail from "./pages/LadingModuleDetail";

function RootLayout() {
  return <Outlet />;
}

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="font-sans font-bold text-[30px] text-[#101828]">404</h1>
        <p className="font-sans text-[#667085] text-[16px] mt-2">Pagina niet gevonden</p>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    ErrorBoundary: NotFound,
    children: [
      {
        index: true,
        element: <Navigate to="/markt/bevrachting/ladingen" replace />,
      },
      {
        path: "markt/bevrachting",
        element: <Navigate to="/markt/bevrachting/ladingen" replace />,
      },
      {
        path: "markt/bevrachting/ladingen",
        Component: Bevrachting,
      },
      {
        path: "markt/bevrachting/vaartuigen",
        Component: Bevrachting,
      },
      // Bevrachting detail pages (eigen items)
      {
        path: "markt/bevrachting/lading/:id",
        Component: LadingDetail,
      },
      {
        path: "markt/bevrachting/vaartuig/:id",
        Component: VaartuigDetail,
      },
      // Inbox
      {
        path: "markt/inbox",
        element: <Navigate to="/markt/inbox/ladingen" replace />,
      },
      {
        path: "markt/inbox/ladingen",
        Component: Inbox,
      },
      {
        path: "markt/inbox/vaartuigen",
        Component: InboxVessels,
      },
      // Inbox detail pages (markt items)
      {
        path: "markt/inbox/lading/:id",
        Component: InboxCargoDetail,
      },
      {
        path: "markt/inbox/vaartuig/:id",
        Component: InboxVesselDetail,
      },
      {
        path: "markt/inbox/lading/:id/nieuweonderhandeling",
        Component: NieuweOnderhandeling,
      },
      // Pijplijn
      {
        path: "markt/pijplijn",
        element: <Navigate to="/markt/pijplijn/ladingen" replace />,
      },
      {
        path: "markt/pijplijn/ladingen",
        Component: Pijplijn,
      },
      {
        path: "markt/pijplijn/vaartuigen",
        Component: Pijplijn,
      },
      // Pijplijn detail pages (both eigen and markt items)
      {
        path: "markt/pijplijn/lading/:id",
        Component: PijplijnDetail,
      },
      {
        path: "markt/pijplijn/vaartuig/:id",
        Component: PijplijnDetail,
      },
      // Legacy route — redirects or handles old /markt/pijplijn/:id
      {
        path: "markt/pijplijn/:id",
        Component: PijplijnDetail,
      },
      // Nieuw bod / nieuwe onderhandeling within pijplijn
      {
        path: "markt/pijplijn/lading/:id/nieuwbod",
        Component: NieuwBod,
      },
      {
        path: "markt/pijplijn/vaartuig/:id/nieuwbod",
        Component: NieuwBod,
      },
      {
        path: "markt/pijplijn/:id/nieuwbod",
        Component: NieuwBod,
      },
      {
        path: "markt/pijplijn/lading/:id/nieuweonderhandeling",
        Component: NieuweOnderhandeling,
      },
      {
        path: "markt/pijplijn/vaartuig/:id/nieuweonderhandeling",
        Component: NieuweOnderhandeling,
      },
      {
        path: "markt/pijplijn/:id/nieuweonderhandeling",
        Component: NieuweOnderhandeling,
      },
      // Bevrachting subpages
      {
        path: "markt/bevrachting/lading/:id/nieuweonderhandeling",
        Component: NieuweOnderhandeling,
      },
      {
        path: "markt/bevrachting/vaartuig/:id/nieuweonderhandeling",
        Component: NieuweOnderhandeling,
      },
      // Onderhandelingen
      {
        path: "markt/onderhandelingen",
        element: <Navigate to="/markt/onderhandelingen/ladingen" replace />,
      },
      {
        path: "markt/onderhandelingen/ladingen",
        Component: Onderhandelingen,
      },
      {
        path: "markt/onderhandelingen/vaartuigen",
        Component: Onderhandelingen,
      },
      // Legacy deals route redirect
      {
        path: "markt/deals",
        element: <Navigate to="/markt/onderhandelingen/ladingen" replace />,
      },
      {
        path: "markt/database",
        Component: DatabaseAdmin,
      },
      // CRM
      {
        path: "crm",
        element: <Navigate to="/crm/relaties" replace />,
      },
      {
        path: "crm/relaties",
        Component: Relaties,
      },
      {
        path: "crm/relatie/:id",
        Component: RelatieDetail,
      },
      {
        path: "lading",
        Component: Ladingen,
      },
      {
        path: "lading/:id",
        Component: LadingModuleDetail,
      },
      {
        path: "crm/taken",
        Component: Taken,
      },
      {
        path: "crm/deals",
        Component: Contracten,
      },
      {
        path: "crm/deal/:id",
        Component: ContractDetail,
      },
      {
        path: "crm/relatie/:relatieId/lading/:id",
        Component: CrmLadingDetail,
      },
      {
        path: "crm/relatie/:relatieId/vaartuig/:id",
        Component: CrmVaartuigDetail,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);