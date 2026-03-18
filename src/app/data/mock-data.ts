export interface Cargo {
  id: string;
  title: string;
  code: string;
  company?: string;
  status: 'intake' | 'werklijst' | 'markt' | 'gesloten';
  cargo: string;
  weight: string;
  from: string;
  to: string;
  fromDate: string;
  toDate: string;
  vesselType?: string;
  route?: string;
  urgent?: boolean;
  matches?: number;
  bids?: number;
  exType?: string;
  priceInfo?: string;
  conditions?: {
    eigen?: {
      price: string;
      priceType: string;
      loadingTime: string;
      unloadingTime: string;
    };
    markt?: {
      tonnage: string;
      price: string;
      priceType: string;
      loadingTime: string;
      loadingTimeUnit: string;
      unloadingTime: string;
      unloadingTimeUnit: string;
      loadingCondition: string;
      unloadingCondition: string;
      remarks: string;
    };
  };
}

export interface Vessel {
  id: string;
  title: string;
  code: string;
  status: 'intake' | 'werklijst' | 'markt' | 'gesloten';
  vesselType: string;
  weight: string;
  from: string;
  to: string;
  fromDate: string;
  toDate: string;
  route?: string;
  matches?: number;
  location?: string;
  locationDate?: string;
}

export interface Match {
  id: string;
  name: string;
  type: string;
  company: string;
  companyLocation: string;
  contactPersoon?: string;
  location: string;
  locationDate?: string;
  distance: string;
  inhoud?: string;
  cargo: string;
  cargoType: string;
  cargoDate: string;
  matchPercentage: number;
  isEigen?: boolean;
  source?: string;
  sourceDate?: string;
}

export interface Negotiation {
  id: string;
  company: string;
  tonnage: string;
  deadline: string;
  deadlineExpired?: boolean;
  status: string;
  contact: {
    name: string;
    date: string;
  };
  price?: string;
  freightPrice?: string;
  freightPriceDiff?: string;
}

export const mockCargos: Cargo[] = [
  {
    id: 'CRG001',
    title: 'm/v Abis Dover',
    exType: 'Zeeboot',
    company: 'Janlow B.V.',
    code: 'JA0092-01',
    status: 'intake',
    cargo: '3.000 ton Houtpellets (DSIT)',
    weight: '3.000 ton Houtpellets (DSIT)',
    from: 'Salzgitter Stichkanal',
    to: 'Hamburg Veddelkanal',
    fromDate: 'Af te stemmen',
    toDate: 'Vr 20 Jan',
    urgent: true,
    matches: 4,
    bids: 2,
  },
  {
    id: 'CRG002',
    title: 'm/v Maran Future',
    exType: 'Zeeboot',
    company: 'Provaart Logistics BV',
    code: 'PRO029-01 ra',
    status: 'intake',
    cargo: '2.000 ton Houtpellets (DSIT)',
    weight: '2.000 ton Houtpellets (DSIT)',
    from: 'Salzgitter Stichkanal',
    to: 'Hamburg Veddelkanal',
    fromDate: 'Ma 12 Jan 10:00',
    toDate: 'Vr 20 Jan',
  },
  {
    id: 'CRG003',
    title: 'Loods Rotterdam Europoort',
    exType: 'Warehouse',
    company: 'Limber Benelux N.V.',
    code: 'UN762-02',
    status: 'intake',
    cargo: '500 ton Koolraapzaad',
    weight: '500 ton Koolraapzaad',
    from: 'Salzgitter Stichkanal',
    to: 'Hamburg Veddelkanal',
    fromDate: 'Melden bij aankomst',
    toDate: 'Vr 20 Jan',
  },
  {
    id: 'CRG164-01',
    title: 'm/v Maran Future',
    exType: 'Zeeboot',
    company: 'Provaart Logistics BV',
    code: 'PRO029-01 ra',
    status: 'werklijst',
    cargo: '1.000 (van 2.000 ton) Houtpellets (DSIT)',
    weight: '1.000 ton Houtpellets (DSIT)',
    from: 'Salzgitter Stichkanal',
    to: 'Hamburg Veddelkanal',
    fromDate: 'Ma 12 Jan 10:00',
    toDate: 'Vr 20 Jan',
    priceInfo: '€3,00 per ton · 4 uur laden · 8 uur lossen',
    conditions: {
      markt: {
        tonnage: '1.000 ton',
        price: '€3,00 per ton',
        priceType: 'per ton',
        loadingTime: '4',
        loadingTimeUnit: 'uren',
        unloadingTime: '8',
        unloadingTimeUnit: 'uren',
        loadingCondition: 'Laden',
        unloadingCondition: 'Lossen',
        remarks: 'Geen opmerkingen',
      },
    },
  },
  {
    id: 'CRG005',
    title: 'Opslagloods Mannheim',
    exType: 'Warehouse',
    company: 'Cargill N.V.',
    code: 'CRG164-01',
    status: 'markt',
    cargo: '2.000 ton Houtpellets',
    weight: '2.000 ton Houtpellets',
    from: 'Rotterdam Europoort',
    to: 'Mannheim',
    fromDate: 'Do 15 Jan',
    toDate: 'Af te stemmen',
    matches: 1,
  },
  {
    id: 'CRG006',
    title: 'm/v Merganser',
    exType: 'Zeeboot',
    company: 'Agro Delta Groep',
    code: 'ADG-0045',
    status: 'markt',
    cargo: '2.000 ton Houtpellets',
    weight: '2.000 ton Houtpellets',
    from: 'Rotterdam',
    to: 'Mannheim',
    fromDate: 'Do 15 Jan',
    toDate: 'Af te stemmen',
    matches: 5,
    conditions: {
      markt: {
        tonnage: '2.000 ton',
        price: '€3.00 per ton',
        priceType: 'per ton',
        loadingTime: '2',
        loadingTimeUnit: 'uren',
        unloadingTime: '2',
        unloadingTimeUnit: 'uren',
        loadingCondition: 'Laden',
        unloadingCondition: 'Lossen',
        remarks: 'Geen opmerkingen',
      },
    },
  },
];

export const mockVessels: Vessel[] = [
  {
    id: 'VSL001',
    title: 'Emily',
    code: '3.000 ton',
    status: 'intake',
    vesselType: 'Motorschip',
    weight: '3.000 ton',
    from: 'Waalhaven',
    to: '',
    fromDate: 'Sinds Ma 12 Jan',
    toDate: '',
    location: 'Waalhaven',
    locationDate: 'Sinds Ma 12 Jan',
  },
  {
    id: 'VSL002',
    title: 'S.S. Anna',
    code: '2.500 ton',
    status: 'werklijst',
    vesselType: 'Motorschip',
    weight: '2.500 ton',
    from: 'Bremerhaven',
    to: '',
    fromDate: 'Sinds Di 23 Feb',
    toDate: '',
    location: 'Bremerhaven',
    locationDate: 'Sinds Di 23 Feb',
  },
  {
    id: 'VSL003',
    title: 'Bregje',
    code: '3.000 ton',
    status: 'intake',
    vesselType: 'Motorschip',
    weight: '3.000 ton',
    from: 'Bremerhaven',
    to: '',
    fromDate: 'Sinds Di 23 Feb',
    toDate: '',
    location: 'Bremerhaven',
    locationDate: 'Sinds Di 23 Feb',
  },
  {
    id: 'VSL004',
    title: 'Hercules',
    code: '3.000 ton',
    status: 'intake',
    vesselType: 'Motorschip',
    weight: '3.000 ton',
    from: 'Bremerhaven',
    to: 'Groningen, 18:00',
    fromDate: 'Sinds Di 23 Feb',
    toDate: '',
    location: 'Bremerhaven',
    locationDate: 'Sinds Di 23 Feb',
    matches: 9,
  },
];

export const mockMatches: Match[] = [
  {
    id: 'M001',
    name: 'Aar',
    type: 'Motorschip',
    company: 'Andermans B.V.',
    companyLocation: 'Class Alexiaan',
    contactPersoon: 'Claas Alexiaan',
    location: 'Europahaven (Maasvlakte)',
    locationDate: 'Vanaf Ma 21 Dec, 2025',
    distance: '3.519 mt',
    inhoud: '4.200 m³',
    cargo: 'Automatische feed\nDo 5 Feb 12:44',
    cargoType: 'Automatische feed',
    cargoDate: 'Do 5 Feb 12:44',
    matchPercentage: 90,
    source: 'Automatische feed',
    sourceDate: 'Do 5 Feb 12:44',
  },
  {
    id: 'M002',
    name: 'Agaat',
    type: 'Motorschip',
    company: 'Markel Freight B.V.',
    companyLocation: 'RCL Riverwoon',
    contactPersoon: 'Richard Riverwoon',
    location: 'Europahaven (Maasvlakte)',
    locationDate: 'Vanaf Ma 13 Jan, 2025',
    distance: '2.085 mt',
    inhoud: '2.500 m³',
    cargo: 'Automatische feed\nDo 5 Feb 12:44',
    cargoType: 'Automatische feed',
    cargoDate: 'Do 5 Feb 12:44',
    matchPercentage: 75,
    source: 'Automatische feed',
    sourceDate: 'Do 5 Feb 12:44',
  },
  {
    id: 'M003',
    name: 'Adonai',
    type: 'Motorschip',
    company: 'Buiten Omzelf N.V.',
    companyLocation: 'Lisa Abraham',
    contactPersoon: 'Lisa Abraham',
    location: 'Europahaven (Maasvlakte)',
    locationDate: 'Vanaf Ma 13 Jan, 2025',
    distance: '3.865 mt',
    inhoud: '4.600 m³',
    cargo: 'Automatische feed\nDo 5 Feb 12:44',
    cargoType: 'Automatische feed',
    cargoDate: 'Do 5 Feb 12:44',
    matchPercentage: 60,
    source: 'Automatische feed',
    sourceDate: 'Do 5 Feb 12:44',
  },
  {
    id: 'M004',
    name: 'Antonia V',
    type: 'Motorschip',
    company: 'Rederij de Jong',
    companyLocation: 'Lisa Abraham',
    contactPersoon: 'Pieter de Jong',
    location: 'Europahaven (Maasvlakte)',
    locationDate: 'Vanaf Ma 13 Jan, 2025',
    distance: '3.795 mt',
    inhoud: '4.500 m³',
    cargo: 'Reder de Jong\nDo 5 Feb 13:24',
    cargoType: 'Reder de Jong',
    cargoDate: 'Do 5 Feb 13:24',
    matchPercentage: 60,
    isEigen: true,
    source: 'Rederij de Jong',
    sourceDate: 'Do 5 Feb 13:24',
  },
  {
    id: 'M005',
    name: 'Amber',
    type: 'Motorschip',
    company: 'Cargo Solutions Ltd.',
    companyLocation: 'Mira Thompson',
    contactPersoon: 'Mira Thompson',
    location: 'Europahaven (Maasvlakte)',
    locationDate: 'Vanaf Ma 13 Jan, 2025',
    distance: '3.795 mt',
    inhoud: '4.500 m³',
    cargo: 'Automatische feed\nDo 5 Feb 12:44',
    cargoType: 'Automatische feed',
    cargoDate: 'Do 5 Feb 12:44',
    matchPercentage: 40,
    source: 'Automatische feed',
    sourceDate: 'Do 5 Feb 12:44',
  },
];

export const mockNegotiations: Negotiation[] = [
  {
    id: 'N001',
    company: 'Janson & Janson B.V.',
    tonnage: '2.000 ton',
    deadline: 'Za 14 Feb, 16:00',
    deadlineExpired: true,
    status: 'Via werklijst',
    contact: {
      name: 'Erick Nieuwkoop',
      date: 'Ma 9 Feb 07:28',
    },
    freightPrice: '€3,50 per ton',
    freightPriceDiff: '+12,5%',
  },
  {
    id: 'N002',
    company: 'De Volharding C.V.',
    tonnage: '2.000 ton',
    deadline: 'Geregistreerd, 9:00',
    deadlineExpired: true,
    status: 'Via werklijst',
    contact: {
      name: 'Michiel den Hond',
      date: 'Di 10 Feb 19:53',
    },
    freightPrice: '€3,00 per ton',
    freightPriceDiff: '-3,2%',
  },
  {
    id: 'N003',
    company: 'Rederij Alfa',
    tonnage: '2.000 ton',
    deadline: 'Morgen, 10:00',
    status: 'Bod verstuurd',
    contact: {
      name: 'Khoa Nguyen',
      date: 'Zo 8 Feb 01:31',
    },
    freightPrice: '€2,80 per ton',
    freightPriceDiff: '-9,7%',
  },
  {
    id: 'N004',
    company: 'Rederij Abel',
    tonnage: '2.000 ton',
    deadline: 'Morgen, 11:00',
    status: 'Bod ontvangen',
    contact: {
      name: 'Feiger de Jong',
      date: 'Za 7 Feb 18:39',
    },
    price: '€3.00 per ton',
    freightPrice: '€3,00 per ton',
    freightPriceDiff: '0,0%',
  },
  {
    id: 'N005',
    company: 'Vaart Wat B.V.',
    tonnage: '2.000 ton',
    deadline: 'Do 19 Feb, 11:15',
    status: 'Via werklijst',
    contact: {
      name: 'Michiel den Hond',
      date: 'Vr 6 Feb 11:47',
    },
    freightPrice: '€3,25 per ton',
    freightPriceDiff: '+4,8%',
  },
  {
    id: 'N006',
    company: 'Plavo Shipping',
    tonnage: '2.000 ton',
    deadline: 'Vr 20 Feb',
    status: 'Via werklijst',
    contact: {
      name: 'Khoa Nguyen',
      date: 'Vr 6 Feb 09:01',
    },
    freightPrice: '€2,95 per ton',
    freightPriceDiff: '-4,8%',
  },
  {
    id: 'N007',
    company: 'De Blauwe Golf B.V.',
    tonnage: '2.000 ton',
    deadline: 'Vr 20 Feb',
    status: 'Goedgekeurd',
    contact: {
      name: 'Khoa Nguyen',
      date: 'Do 5 Feb 16:22',
    },
    freightPrice: '€3,10 per ton',
    freightPriceDiff: '+0,0%',
  },
  {
    id: 'N008',
    company: 'IJsseldelta Transport',
    tonnage: '2.000 ton',
    deadline: 'Za 21 Feb',
    status: 'Via werklijst',
    contact: {
      name: 'Jan Willem van der Kraan',
      date: 'Do 5 Feb 14:50',
    },
    freightPrice: '€3,40 per ton',
    freightPriceDiff: '+9,7%',
  },
  {
    id: 'N009',
    company: 'De Nieuwe Hanse N.V.',
    tonnage: '2.000 ton',
    deadline: '',
    status: 'Afgekeurd',
    contact: {
      name: 'Erick Nieuwkoop',
      date: 'Wo 11 Feb 12:04',
    },
  },
];