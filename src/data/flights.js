// kg co2 / l
const EMISSION_FACTOR = 2.5
// l / km and passenger
const FUEL_CONSUMPTION = 3.6 / 100
export const FLIGHT_CO2_CONSUMPTION = EMISSION_FACTOR * FUEL_CONSUMPTION

export const flights = new Map([
   // Durchschnitt; D; 8986
   ['TIA', { name: 'Tirana', abbr: 'TIA', km: 1111.7 }],
   ['VIE', { name: 'Wien', abbr: 'VIE', km: 591.8 }],
   ['GRZ', { name: 'Graz', abbr: 'GRZ', km: 522.5 }],
   ['BRU', { name: 'Brüssel', abbr: 'BRU', km: 362.8 }],
   ['SJJ', { name: 'Sarajevo', abbr: 'SJJ', km: 860.9 }],
   ['VAR', { name: 'Varna', abbr: 'VAR', km: 1573.9 }],
   ['DBV', { name: 'Dubrovnik', abbr: 'DBV', km: 937.8 }],
   ['PUY', { name: 'Pula', abbr: 'PUY', km: 496.6 }],
   ['SPU', { name: 'Split', abbr: 'SPU', km: 744.8 }],
   ['ZAG', { name: 'Zagreb', abbr: 'ZAG', km: 614.3 }],
   ['LCA', { name: 'Larnaka', abbr: 'LCA', km: 2506.0 }],
   ['PFO', { name: 'Paphos', abbr: 'PFO', km: 2440.6 }],
   ['PRG', { name: 'Prag', abbr: 'PRG', km: 518.1 }],
   ['CPH', { name: 'Kopenhagen', abbr: 'CPH', km: 949.9 }],
   ['AJA', { name: 'Ajaccio', abbr: 'AJA', km: 606.0 }],
   ['BOD', { name: 'Bordeaux', abbr: 'BOD', km: 771.2 }],
   ['MRS', { name: 'Marseille', abbr: 'MRS', km: 508.7 }],
   ['NCE', { name: 'Nizza', abbr: 'NCE', km: 425.3 }],
   ['CDG', { name: 'Paris', abbr: 'CDG', km: 479.3 }],
   ['CLY', { name: 'Calvi', abbr: 'CLY', km: 538.3 }],
   ['BIQ', { name: 'Biarritz', abbr: 'BIQ', km: 902.3 }],
   ['FSC', { name: 'Figari', abbr: 'FSC', km: 653.6 }],
   ['TLN', { name: 'Toulon', abbr: 'TLN', km: 510.9 }],
   ['TXL', { name: 'Berlin', abbr: 'TXL', km: 668.9 }],
   ['BRE', { name: 'Bremen', abbr: 'BRE', km: 631.9 }],
   ['CGN', { name: 'Köln/Bonn', abbr: 'CGN', km: 402.7 }],
   ['DUS', { name: 'Düsseldorf', abbr: 'DUS', km: 454.9 }],
   ['FRA', { name: 'Frankfurt', abbr: 'FRA', km: 295.5 }],
   ['HAM', { name: 'Hamburg', abbr: 'HAM', km: 693.27 }],
   ['HAJ', { name: 'Hannover', abbr: 'HAJ', km: 561.0 }],
   ['HDF', { name: 'Usedom/Heringsdorf', abbr: 'HDF', km: 814.9 }],
   ['MUC', { name: 'München', abbr: 'MUC', km: 242.0 }],
   ['NUE', { name: 'Nürnberg', abbr: 'NUE', km: 301.7 }],
   ['STR', { name: 'Stuttgart', abbr: 'STR', km: 165.1 }],
   ['DRS', { name: 'Dresden', abbr: 'DRS', km: 564.7 }],
   ['LEJ', { name: 'Leipzig/Hall', abbr: 'LEJ', km: 524.1 }],
   ['GWT', { name: 'Sylt', abbr: 'GWT', km: 828.6 }],
   ['ATH', { name: 'Athen', abbr: 'ATH', km: 1640.0 }],
   ['CHQ', { name: 'Chania', abbr: 'CHQ', km: 1850.9 }],
   ['HER', { name: 'Heraklion', abbr: 'HER', km: 1927.3 }],
   ['ZTH', { name: 'Zakynthos', abbr: 'ZTH', km: 1475.4 }],
   ['CFU', { name: 'Korfu', abbr: 'CFU', km: 1264.2 }],
   ['KGS ', { name: 'Kos', abbr: 'KGS ', km: 1927.7 }],
   ['JMK', { name: 'Mykonos', abbr: 'JMK', km: 1767.0 }],
   ['RHO', { name: 'Rhodos', abbr: 'RHO', km: 2021.7 }],
   ['SMI', { name: 'Samos', abbr: 'SMI', km: 1848.2 }],
   ['JTR', { name: 'Santorin', abbr: 'JTR', km: 1857.5 }],
   ['SKG', { name: 'Thessaloniki', abbr: 'SKG', km: 1385.3 }],
   ['KLX', { name: 'Kalamata', abbr: 'KLX', km: 1597.9 }],
   ['BUD', { name: 'Budapest', abbr: 'BUD', km: 804.7 }],
   ['ORK', { name: 'Cork', abbr: 'ORK', km: 1316.3 }],
   ['DUB', { name: 'Dublin', abbr: 'DUB', km: 1237.7 }],
   ['CAG', { name: 'Cagliari', abbr: 'CAG', km: 914.5 }],
   ['CTA', { name: 'Catania', abbr: 'CTA', km: 1232.9 }],
   ['FLR', { name: 'Florenz', abbr: 'FLR', km: 446.1 }],
   ['SUF', { name: 'Lamezia Terme', abbr: 'SUF', km: 1137.0 }],
   ['MXP', { name: 'Mailand', abbr: 'MXP', km: 193.7 }],
   ['OLB', { name: 'Olbia', abbr: 'OLB', km: 734.4 }],
   ['PMO', { name: 'Palermo', abbr: 'PMO', km: 1097.1 }],
   ['FCO', { name: 'Rom', abbr: 'FCO', km: 682.6 }],
   ['VCE', { name: 'Venedig', abbr: 'VCE', km: 357.0 }],
   ['BDS', { name: 'Brindisi', abbr: 'BDS', km: 1065.1 }],
   ['BRI', { name: 'Bari', abbr: 'BRI', km: 959.3 }],
   ['NAP', { name: 'Neapel', abbr: 'NAP', km: 862.7 }],
   ['PRN', { name: 'Pri_tina', abbr: 'PRN', km: 1120.6 }],
   ['LUX', { name: 'Luxemburg', abbr: 'LUX', km: 304.8 }],
   ['SKP', { name: 'Skopje', abbr: 'SKP', km: 1198.7 }],
   ['MLA', { name: 'Malta', abbr: 'MLA', km: 1380.8 }],
   ['AMS', { name: 'Amsterdam', abbr: 'AMS', km: 615.5 }],
   ['BGO', { name: 'Bergen', abbr: 'BGO', km: 1443.1 }],
   ['OSL', { name: 'Oslo', abbr: 'OSL', km: 1389.2 }],
   ['TOS', { name: 'Tromsø', abbr: 'TOS', km: 2535.2 }],
   ['KRK', { name: 'Krakau', abbr: 'KRK', km: 872.4 }],
   ['GDN', { name: 'Danzig', abbr: 'GDN', km: 1034.8 }],
   ['WAW', { name: 'Warschau', abbr: 'WAW', km: 1031.3 }],
   ['WRO', { name: 'Breslau', abbr: 'WRO', km: 727.1 }],
   ['FAO', { name: 'Faro', abbr: 'FAO', km: 1782.43 }],
   ['FNC', { name: 'Funchal', abbr: 'FNC', km: 2688.9 }],
   ['LIS', { name: 'Lissabon', abbr: 'LIS', km: 1724.0 }],
   ['OPO', { name: 'Porto', abbr: 'OPO', km: 1530.3 }],
   ['OTP', { name: 'Bukarest', abbr: 'OTP', km: 1392.8 }],
   ['DME', { name: 'Moskau', abbr: 'DME', km: 2197.9 }],
   ['LED', { name: 'Sankt Petersburg', abbr: 'LED', km: 1966.2 }],
   ['BEG', { name: 'Belgrad', abbr: 'BEG', km: 951.8 }],
   ['INI', { name: 'Ni_', abbr: 'INI', km: 951.81 }],
   ['LJU', { name: 'Ljubljana', abbr: 'LJU', km: 479.0 }],
   ['ALC', { name: 'Alicante', abbr: 'ALC', km: 1260.8 }],
   ['BCN', { name: 'Barcelona', abbr: 'BCN', km: 856.8 }],
   ['FUE', { name: 'Fuerteventura', abbr: 'FUE', km: 2866.3 }],
   ['LPA', { name: 'Gran Canaria', abbr: 'LPA', km: 3002.1 }],
   ['IBZ', { name: 'Ibiza', abbr: 'IBZ', km: 1117.9 }],
   ['XRY', { name: 'Jerez de la Frontera', abbr: 'XRY', km: 1690.3 }],
   ['ACE', { name: 'Lanzarote', abbr: 'ACE', km: 2807.3 }],
   ['MAD', { name: 'Madrid', abbr: 'MAD', km: 1240.6 }],
   ['AGP', { name: 'Malaga', abbr: 'AGP', km: 1608.4 }],
   ['PMI', { name: 'Palma de Mallorca', abbr: 'PMI', km: 996.5 }],
   ['SVQ', { name: 'Sevilla', abbr: 'SVQ', km: 1624.22 }],
   ['TFS', { name: 'Teneriffa', abbr: 'TFS', km: 3063.6 }],
   ['VLC', { name: 'Valencia', abbr: 'VLC', km: 1146.6 }],
   ['BIO', { name: 'Bilbao', abbr: 'BIO', km: 1006.6 }],
   ['SCQ', { name: 'Santiago de Compostela', abbr: 'SCQ', km: 1420.2 }],
   ['ARN', { name: 'Stockholm', abbr: 'ARN', km: 1168.1 }],
   ['GOT', { name: 'Göteborg', abbr: 'GOT', km: 1161.6 }],
   ['BSL ', { name: 'Basel', abbr: 'BSL ', km: 81.5 }],
   ['GVA', { name: 'Geneva', abbr: 'GVA', km: 224.2 }],
   ['LUG', { name: 'Lugano', abbr: 'LUG', km: 154.3 }],
   ['AYT', { name: 'Antalya', abbr: 'AYT', km: 2166.3 }],
   ['BJV', { name: 'Bodrum', abbr: 'BJV', km: 1930.3 }],
   ['DLM', { name: 'Dalaman', abbr: 'DLM', km: 2044.7 }],
   ['KBP', { name: 'Kiew', abbr: 'KBP', km: 1658.2 }],
   ['BHX', { name: 'Birmingham', abbr: 'BHX', km: 1145.12 }],
   ['EDI', { name: 'Edinburgh', abbr: 'EDI', km: 1247.9 }],
   ['INV', { name: 'Inverness', abbr: 'INV', km: 1403.8 }],
   ['LCY', { name: 'London', abbr: 'LCY', km: 759.9 }],
   ['LHR', { name: 'London', abbr: 'LHR', km: 788.3 }],
   ['MAN', { name: 'Manchester', abbr: 'MAN', km: 1006.96 }],
   ['RAK', { name: 'Marrakesch', abbr: 'RAK', km: 2256.1 }],
   ['CAI', { name: 'Kairo', abbr: 'CAI', km: 2745.6 }],
   ['HRG', { name: 'Hurghada', abbr: 'HRG', km: 3147.4 }],
   ['RMF', { name: 'Marsa Alam', abbr: 'RMF', km: 3338.5 }],
   ['TLV', { name: 'Tel Aviv', abbr: 'TLV', km: 2795.1 }],
   ['ETH', { name: 'Eilat', abbr: 'ETH', km: 3014.5 }],
   ['NBO', { name: 'Nairobi', abbr: 'NBO', km: 6085.7 }],
   ['MRU', { name: 'Mauritius', abbr: 'MRU', km: 9004.1 }],
   ['MCT', { name: 'Maskat', abbr: 'MCT', km: 5110.5 }],
   ['Seychellen ', { name: 'Mahé', abbr: 'Seychellen ', km: 7390.1 }],
   ['CPT', { name: 'Kapstadt', abbr: 'CPT', km: 9112.8 }],
   ['JNB', { name: 'Johannesburg', abbr: 'JNB', km: 8228.9 }],
   ['DAR', { name: 'Dar es Salaam', abbr: 'DAR', km: 6753.4 }],
   ['DJE', { name: 'Djerba', abbr: 'DJE', km: 1523.0 }],
   ['DXB', { name: 'Dubai', abbr: 'DXB', km: 4769.4 }],
   ['MLE', { name: 'Malé', abbr: 'MLE', km: 3747.1 }],
   ['PEK', { name: 'Peking', abbr: 'PEK', km: 7973.3 }],
   ['HKG', { name: 'Hong Kong', abbr: 'HKG', km: 9282.7 }],
   ['PVG', { name: 'Shanghai', abbr: 'PVG', km: 9034.1 }],
   ['DEL', { name: 'Delhi', abbr: 'DEL', km: 6149.8 }],
   ['BOM', { name: 'Mumbai', abbr: 'BOM', km: 6541.7 }],
   ['Saigon', { name: 'Ho-Chi-Minh-Stadt', abbr: 'Saigon', km: 9725.6 }],
   ['NRT', { name: 'Tokyo', abbr: 'NRT', km: 9590.21 }],
   ['SIN', { name: 'Singapur', abbr: 'SIN', km: 10308.8 }],
   ['CMB ', { name: 'Colombo', abbr: 'CMB ', km: 8053.3 }],
   ['BKK', { name: 'Bangkok', abbr: 'BKK', km: 9057.0 }],
   ['HKT', { name: 'Phuket', abbr: 'HKT', km: 9329.4 }],
   ['GIG', { name: 'Rio de Janeiro', abbr: 'GIG', km: 9374.2 }],
   ['GRU', { name: 'São Paulo', abbr: 'GRU', km: 9612.0 }],
   ['YYC', { name: 'Calgary', abbr: 'YYC', km: 7765.2 }],
   ['YUL', { name: 'Montreal', abbr: 'YUL', km: 5997.6 }],
   ['YYZ', { name: 'Toronto', abbr: 'YYZ', km: 6492.7 }],
   ['YVR', { name: 'Vancouver', abbr: 'YVR', km: 8310.3 }],
   ['HAV', { name: 'Havanna', abbr: 'HAV', km: 8219.5 }],
   ['VRA', { name: 'Varadero', abbr: 'VRA', km: 8145.6 }],
   ['PUJ', { name: 'Punta Cana', abbr: 'PUJ', km: 7528.3 }],
   ['CUN', { name: 'Cancún', abbr: 'CUN', km: 8696.0 }],
   ['SJO', { name: 'San José', abbr: 'SJO', km: 10497.0 }],
   ['EZE', { name: 'Buenos Aires', abbr: 'EZE', km: 11294.8 }],
   ['BOS', { name: 'Boston', abbr: 'BOS', km: 11294.8 }],
   ['ORD', { name: 'Chicago', abbr: 'ORD', km: 8695.5 }],
   ['DEN', { name: 'Denver', abbr: 'DEN', km: 8304.1 }],
   ['LAS', { name: 'Las Vegas', abbr: 'LAS', km: 9154.5 }],
   ['LAX', { name: 'Los Angeles', abbr: 'LAX', km: 9537.1 }],
   ['MIA', { name: 'Miami', abbr: 'MIA', km: 7847.5 }],
   ['JFK', { name: 'New York', abbr: 'JFK', km: 6311.5 }],
   ['EWR', { name: 'New York', abbr: 'EWR', km: 8401.5 }],
   ['MCO', { name: 'Orlando', abbr: 'MCO', km: 7716.4 }],
   ['SAN', { name: 'San Diego', abbr: 'SAN', km: 10582.0 }],
   ['SFO', { name: 'San Francisco', abbr: 'SFO', km: 9378.7 }],
   ['TPA', { name: 'Tampa', abbr: 'TPA', km: 7709.2 }],
   ['665', { name: 'Washington ;IA', abbr: '665', km: 0.5 }]
])
