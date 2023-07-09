#!/usr/bin/env node
'use strict'

const fs = require('fs')

// common/cultures/00_cultures.txt
// common/cultures/00_additional_cultures.txt
var cultures = [
"north_german",
"south_german",
"ashkenazi",
"dutch",
"flemish",
"wallonian",
"boer",
"alemannic",
"swedish",
"danish",
"norwegian",
"icelandic",
"finnish",
"sami",
"british",
"irish",
"australian",
"north_italian",
"south_italian",
"maltese",
"basque",
"spanish",
"catalan",
"portuguese",
"french",
"occitan",
"breton",
"croat",
"serb",
"bulgarian",
"albanian",
"slovene",
"bosniak",
"romanian",
"hungarian",
"polish",
"lithuanian",
"czech",
"slovak",
"russian",
"byelorussian",
"ukrainian",
"ugrian",
"latvian",
"estonian",
"greek",
"georgian",
"armenian",
"sephardic",
"turkish",
"azerbaijani",
"north_caucasian",
"maghrebi",
"misri",
"mashriqi",
"bedouin",
"berber",
"persian",
"uzbek",
"kazak",
"kirgiz",
"tajik",
"uighur",
"pashtun",
"baluchi",
"hazara",
"turkmen",
"kurdish",
"tatar",
"mongol",
"kalmyk",
"siberian",
"yakut",
"tibetan",
"assamese",
"bengali",
"bihari",
"manipuri",
"nepali",
"oriya",
"sinhala",
"avadhi",
"kanauji",
"panjabi",
"kashmiri",
"gujarati",
"marathi",
"sindi",
"rajput",
"kannada",
"malayalam",
"tamil",
"telegu",
"vietnamese",
"khmer",
"batak",
"dayak",
"malagasy",
"filipino",
"moro",
"javan",
"moluccan",
"thai",
"mon",
"khmu",
"lao",
"shan",
"burmese",
"kachin",
"karen",
"japanese",
"manchu",
"han",
"korean",
"ainu",
"hakka",
"miao",
"min",
"zhuang",
"yi",
"yue",
"polynesian",
"hawaiian",
"melanesian",
"micronesian",
"maori",
"yuanzhumin",
"aborigine",
"zapotec",
"mayan",
"nahua",
"tarascan",
"quechua",
"guarani",
"aimara",
"amazonian",
"patagonian",
"guajiro",
"tupinamba",
"metis",
"dakota",
"cherokee",
"muskogean",
"pueblo",
"inuit",
"cree",
"navajo",
"athabaskan",
"salish",
"nez_perce",
"siouan",
"comanche",
"algonquian",
"iroquoian",
"caddoan",
"paiute",
"hokan",
"apache",
"oodham",
"mixtec",
"muisca",
"miskito",
"cariban",
"yankee",
"dixie",
"mexican",
"central_american",
"caribeno",
"north_andean",
"south_andean",
"platinean",
"brazilian",
"afro_american",
"afro_caribbean",
"afro_caribeno",
"afro_brazilian",
"afro_antillean",
"akan",
"bambara",
"bassa",
"dyula",
"edo",
"ewe",
"fon",
"fulbe",
"haratin",
"hausa",
"ibibio",
"ibo",
"kissi",
"kru",
"mande",
"bidan",
"mossi",
"senufo",
"songhai",
"tiv",
"tuareg",
"wolof",
"yoruba",
"bakongo",
"baguirmi",
"fang",
"kanuri",
"luba",
"lunda",
"mongo",
"sara",
"teda",
"equatorial_bantu",
"fluvian_bantu",
"nilotic",
"amhara",
"afar",
"azande",
"baganda",
"beja",
"dinka",
"fur",
"kikuyu",
"luo",
"maasai",
"nuer",
"nuba",
"oromo",
"ruanda",
"rundi",
"sidama",
"somali",
"sudanese",
"sukuma",
"swahili",
"tigray",
"unyamwezi",
"lacustrine_bantu",
"chewa",
"herero",
"khoisan",
"lomwe",
"makua",
"nguni",
"ovimbundu",
"sena",
"shona",
"sotho",
"tonga",
"tswana",
"xhosa",
"yao",
"zulu",
"kavango_bantu",
"anglo_canadian",
"franco_canadian",
"sorb",
"tuvan",
"corsican",
"yemenite",
"welsh",
"scottish",
"galician",
"malay",
"bornean",
"sumatran",
"balinese",
"cajun",
"assyrian",
"circassian",
"francoprovencal"
]

// common/history/states/00_states.txt
var states = [
"STATE_MINSK",
"STATE_LOUISIANA",
"STATE_NEW_YORK",
"STATE_VIRGINIA",
"STATE_LOWER_EGYPT",
"STATE_HOME_COUNTIES",
"STATE_LANCASHIRE",
"STATE_PROVENCE",
"STATE_NORMANDY",
"STATE_ANDALUSIA",
"STATE_HOLLAND",
"STATE_BALUCHISTAN",
"STATE_SOUTH_BENGAL",
"STATE_DOBRUDJA",
"STATE_BASRA",
"STATE_EASTERN_THRACE",
"STATE_MEKONG",
"STATE_SHANDONG",
"STATE_SUZHOU",
"STATE_ROSTOV",
"STATE_VENETIA",
"STATE_POMERANIA",
"STATE_INGRIA",
"STATE_ALASKA",
"STATE_WASHINGTON",
"STATE_OREGON",
"STATE_IDAHO",
"STATE_COLORADO",
"STATE_WYOMING",
"STATE_MONTANA",
"STATE_NORTH_DAKOTA",
"STATE_SOUTH_DAKOTA",
"STATE_NEBRASKA",
"STATE_KANSAS",
"STATE_OKLAHOMA",
"STATE_ARKANSAS",
"STATE_MISSOURI",
"STATE_IOWA",
"STATE_MINNESOTA",
"STATE_WISCONSIN",
"STATE_INDIANA",
"STATE_MICHIGAN",
"STATE_OHIO",
"STATE_KENTUCKY",
"STATE_TENNESSEE",
"STATE_MISSISSIPPI",
"STATE_ALABAMA",
"STATE_FLORIDA",
"STATE_GEORGIA",
"STATE_DISTRICT_OF_COLUMBIA",
"STATE_WEST_VIRGINIA",
"STATE_MARYLAND",
"STATE_DELAWARE",
"STATE_PENNSYLVANIA",
"STATE_NEW_JERSEY",
"STATE_ILLINOIS",
"STATE_CONNECTICUT",
"STATE_RHODE_ISLAND",
"STATE_MASSACHUSETTS",
"STATE_VERMONT",
"STATE_NEW_HAMPSHIRE",
"STATE_MAINE",
"STATE_NORTH_CAROLINA",
"STATE_TEXAS",
"STATE_YUKON_TERRITORY",
"STATE_NORTHWEST_TERRITORIES",
"STATE_NUNAVUT",
"STATE_BRITISH_COLUMBIA",
"STATE_ALBERTA",
"STATE_SASKATCHEWAN",
"STATE_MANITOBA",
"STATE_ONTARIO",
"STATE_QUEBEC",
"STATE_NEWFOUNDLAND",
"STATE_GUATEMALA",
"STATE_HONDURAS",
"STATE_NICARAGUA",
"STATE_COSTA_RICA",
"STATE_PANAMA",
"STATE_CUBA",
"STATE_URUGUAY",
"STATE_ECUADOR",
"STATE_SANTO_DOMINGO",
"STATE_HAITI",
"STATE_GOTLAND",
"STATE_GOTALAND",
"STATE_SCANIA",
"STATE_NORRLAND",
"STATE_SVEALAND",
"STATE_SICILY",
"STATE_IONIAN_ISLANDS",
"STATE_PELOPONNESE",
"STATE_ALBANIA",
"STATE_BOSNIA",
"STATE_SOUTHERN_TRANSYLVANIA",
"STATE_HAWAIIAN_ISLANDS",
"STATE_NORTHERN_TRANSYLVANIA",
"STATE_MOLDAVIA",
"STATE_WALLACHIA",
"STATE_GALICIA",
"STATE_ASTURIAS",
"STATE_CASTILE",
"STATE_ARAGON",
"STATE_NAVARRA",
"STATE_CATALONIA",
"STATE_BALEARES",
"STATE_NEW_SOUTH_WALES",
"STATE_VICTORIA",
"STATE_TASMANIA",
"STATE_QUEENSLAND",
"STATE_SOUTH_AUSTRALIA",
"STATE_WESTERN_AUSTRALIA",
"STATE_NORTHERN_TERRITORY",
"STATE_NORTH_ISLAND",
"STATE_SOUTH_ISLAND",
"STATE_EAST_MICRONESIA",
"STATE_WEST_MICRONESIA",
"STATE_WEST_JAVA",
"STATE_EAST_JAVA",
"STATE_CENTRAL_JAVA",
"STATE_CEYLON",
"STATE_URGA",
"STATE_ULIASTAI",
"STATE_OMAN",
"STATE_ABU_DHABI",
"STATE_YEMEN",
"STATE_HEDJAZ",
"STATE_TUNISIA",
"STATE_GUINEA",
"STATE_GHANA",
"STATE_TOGO",
"STATE_DAHOMEY",
"STATE_GABON",
"STATE_BOTSWANA",
"STATE_ZAMBIA",
"STATE_CAMBODIA",
"STATE_SAVOY",
"STATE_LIBERIA",
"STATE_EMILIA",
"STATE_TUSCANY",
"STATE_ROMAGNA",
"STATE_LAZIO",
"STATE_NEVADA",
"STATE_ARIZONA",
"STATE_NEW_MEXICO",
"STATE_CALIFORNIA",
"STATE_SONORA",
"STATE_CHIHUAHUA",
"STATE_RIO_GRANDE",
"STATE_DURANGO",
"STATE_SINALOA",
"STATE_BAJIO",
"STATE_YUCATAN",
"STATE_MEXICO",
"STATE_VERACRUZ",
"STATE_GUERRERO",
"STATE_OAXACA",
"STATE_JALISCO",
"STATE_ZACATECAS",
"STATE_GUAYANA",
"STATE_ZULIA",
"STATE_MIRANDA",
"STATE_BOLIVAR",
"STATE_ANTIOQUIA",
"STATE_GUAVIARE",
"STATE_CUNDINAMARCA",
"STATE_CAUCA",
"STATE_PASTAZA",
"STATE_CAJAMARCA",
"STATE_LIMA",
"STATE_ICA",
"STATE_AREQUIPA",
"STATE_PARA",
"STATE_MARANHAO",
"STATE_AMAZONAS",
"STATE_ACRE",
"STATE_GOIAS",
"STATE_MATO_GROSSO",
"STATE_RIO_GRANDE_DO_SUL",
"STATE_PARANA",
"STATE_SANTA_CATARINA",
"STATE_SAO_PAULO",
"STATE_MINAS_GERAIS",
"STATE_RIO_DE_JANEIRO",
"STATE_BAHIA",
"STATE_RIO_GRANDE_DO_NORTE",
"STATE_CEARA",
"STATE_PIAUI",
"STATE_PERNAMBUCO",
"STATE_PARAIBA",
"STATE_ALTO_PARAGUAY",
"STATE_BAJO_PARAGUAY",
"STATE_BUENOS_AIRES",
"STATE_PATAGONIA",
"STATE_RIO_NEGRO",
"STATE_LA_PAMPA",
"STATE_SANTA_FE",
"STATE_CORRIENTES",
"STATE_TUCUMAN",
"STATE_CHACO",
"STATE_JUJUY",
"STATE_SANTA_CRUZ",
"STATE_LA_PAZ",
"STATE_POTOSI",
"STATE_SANTIAGO",
"STATE_LOS_RIOS",
"STATE_ARAUCANIA",
"STATE_SOUTH_ATLANTIC_ISLANDS",
"STATE_ICELAND",
"STATE_GREENLAND",
"STATE_WEST_SAHARA",
"STATE_MARRAKECH",
"STATE_FEZ",
"STATE_AL_RIF",
"STATE_INNER_MOROCCO",
"STATE_ORAN",
"STATE_SAHARA",
"STATE_EAST_SAHARA",
"STATE_ALGIERS",
"STATE_CONSTANTINE",
"STATE_TRIPOLI",
"STATE_LIBYAN_DESERT",
"STATE_LIBYA",
"STATE_UPPER_EGYPT",
"STATE_EGYPTIAN_DESERT",
"STATE_MIDDLE_EGYPT",
"STATE_MATRUH",
"STATE_SINAI",
"STATE_DONGOLA",
"STATE_KORDOFAN",
"STATE_DARFUR",
"STATE_BLUE_NILE",
"STATE_NEW_BRUNSWICK",
"STATE_NORTH_ANGOLA",
"STATE_SOUTH_ANGOLA",
"STATE_EAST_ANGOLA",
"STATE_INDIAN_OCEAN_TERRITORY",
"STATE_LOURENCO_MARQUES",
"STATE_MOCAMBIQUE",
"STATE_ZAMBEZIA",
"STATE_EASTERN_CAPE",
"STATE_CAPE_COLONY",
"STATE_NORTHERN_CAPE",
"STATE_WALES",
"STATE_YORKSHIRE",
"STATE_HIGHLANDS",
"STATE_MIDLANDS",
"STATE_EAST_ANGLIA",
"STATE_WEST_COUNTRY",
"STATE_LOWLANDS",
"STATE_ULSTER",
"STATE_MUNSTER",
"STATE_LEINSTER",
"STATE_LANGUEDOC",
"STATE_RHONE",
"STATE_FRENCH_LOW_COUNTRIES",
"STATE_PICARDY",
"STATE_ALSACE_LORRAINE",
"STATE_POITOU",
"STATE_GUYENNE",
"STATE_AUVERGNE_LIMOUSIN",
"STATE_BRITTANY",
"STATE_BURGUNDY",
"STATE_CHAMPAGNE",
"STATE_FRANCHE_COMTE",
"STATE_LORRAINE",
"STATE_AQUITAINE",
"STATE_MAINE_ANJOU",
"STATE_ORLEANS",
"STATE_ILE_DE_FRANCE",
"STATE_ELBE",
"STATE_BEIRA",
"STATE_ESTREMADURA",
"STATE_ALENTEJO",
"STATE_MADEIRA",
"STATE_CAPE_VERDE",
"STATE_AZORES",
"STATE_CANARY_ISLANDS",
"STATE_GRANADA",
"STATE_BADAJOZ",
"STATE_VALENCIA",
"STATE_TOLEDO",
"STATE_WALLONIA",
"STATE_FLANDERS",
"STATE_FRIESLAND",
"STATE_GELRE",
"STATE_JUTLAND",
"STATE_ZEALAND",
"STATE_WESTERN_NORWAY",
"STATE_NORTHERN_NORWAY",
"STATE_EASTERN_NORWAY",
"STATE_EAST_SWITZERLAND",
"STATE_WEST_SWITZERLAND",
"STATE_PUERTO_RICO",
"STATE_BAHAMAS",
"STATE_BERMUDA",
"STATE_WEST_INDIES",
"STATE_JAMAICA",
"STATE_ORISSA",
"STATE_SINDH",
"STATE_RAJPUTANA",
"STATE_CIRCARS",
"STATE_PUNJAB",
"STATE_NAGPUR",
"STATE_MYSORE",
"STATE_TRAVANCORE",
"STATE_MADRAS",
"STATE_KASHMIR",
"STATE_HYDERABAD",
"STATE_GUJARAT",
"STATE_CENTRAL_INDIA",
"STATE_BOMBAY",
"STATE_BIHAR",
"STATE_NORTH_BENGAL",
"STATE_ASSAM",
"STATE_AWADH",
"STATE_DELHI",
"STATE_TENASSERIM",
"STATE_KACHIN",
"STATE_SHAN_STATES",
"STATE_BURMA",
"STATE_PEGU",
"STATE_NORTH_SUMATRA",
"STATE_SOUTH_SUMATRA",
"STATE_ACEH",
"STATE_WESTERN_NEW_GUINEA",
"STATE_MOLUCCAS",
"STATE_CELEBES",
"STATE_WEST_BORNEO",
"STATE_EAST_BORNEO",
"STATE_SUNDA_ISLANDS",
"STATE_MALAYA",
"STATE_NORTH_BORNEO",
"STATE_MINDANAO",
"STATE_LUZON",
"STATE_VISAYAS",
"STATE_ATTICA",
"STATE_SKOPIA",
"STATE_MACEDONIA",
"STATE_THESSALIA",
"STATE_WESTERN_THRACE",
"STATE_NORTHERN_THRACE",
"STATE_BULGARIA",
"STATE_SOUTH_MADAGASCAR",
"STATE_NORTH_MADAGASCAR",
"STATE_OROMIA",
"STATE_AMHARA",
"STATE_GONDER",
"STATE_KAZEMBE",
"STATE_ERITREA",
"STATE_SOMALILAND",
"STATE_NAMAQUALAND",
"STATE_HEREROLAND",
"STATE_ZAMBEZI",
"STATE_KENYA",
"STATE_RIFT_VALLEY",
"STATE_CHAD",
"STATE_WADDAI",
"STATE_LINDI",
"STATE_ZANZIBAR",
"STATE_TANGANYIKA",
"STATE_MAURITANIA",
"STATE_INNER_MAURITANIA",
"STATE_EASTERN_MALI",
"STATE_WESTERN_MALI",
"STATE_TIMBUKTU",
"STATE_HAUSALAND",
"STATE_BENIN",
"STATE_YORUBA_STATES",
"STATE_NIGER_DELTA",
"STATE_OUTER_HAUSALAND",
"STATE_NIGER",
"STATE_BORNU",
"STATE_NIGERIA",
"STATE_EAST_HAUSALAND",
"STATE_KATANGA",
"STATE_CONGO_ORIENTALE",
"STATE_KASAI",
"STATE_BAS_CONGO",
"STATE_EQUATEUR",
"STATE_UGANDA",
"STATE_EQUATORIA",
"STATE_VOLTA",
"STATE_NORTH_CAMEROON",
"STATE_SOUTH_CAMEROON",
"STATE_UBANGI_SHARI",
"STATE_CONGO",
"STATE_IVORY_COAST",
"STATE_WINDWARD_COAST",
"STATE_SENEGAL",
"STATE_GAMBIA",
"STATE_SIERRA_LEONE",
"STATE_ZULULAND",
"STATE_VRYSTAAT",
"STATE_TRANSVAAL",
"STATE_EASTERN_NEW_GUINEA",
"STATE_SOLOMON_ISLANDS",
"STATE_BOUGAINVILLE",
"STATE_NAURU",
"STATE_FIJI",
"STATE_VANUATU",
"STATE_KANAK",
"STATE_TAHITI",
"STATE_TONGA",
"STATE_HAIL",
"STATE_NEJD",
"STATE_TRANSJORDAN",
"STATE_PALESTINE",
"STATE_LEBANON",
"STATE_SYRIA",
"STATE_ALEPPO",
"STATE_BAGHDAD",
"STATE_MOSUL",
"STATE_LARISTAN",
"STATE_SISTAN",
"STATE_KHORASAN",
"STATE_KHUZESTAN",
"STATE_FARS",
"STATE_ISFAHAN",
"STATE_MAZANDARAN",
"STATE_IRAKAJEMI",
"STATE_TABRIZ",
"STATE_LURISTAN",
"STATE_ARMENIA",
"STATE_AZERBAIJAN",
"STATE_GREATER_CAUCASUS",
"STATE_MONTENEGRO",
"STATE_NORTHERN_SERBIA",
"STATE_SOUTHERN_SERBIA",
"STATE_HUDAVENDIGAR",
"STATE_AYDIN",
"STATE_KONYA",
"STATE_KASTAMONU",
"STATE_CYPRUS",
"STATE_TRABZON",
"STATE_ERZURUM",
"STATE_KARS",
"STATE_CRETE",
"STATE_WEST_AEGEAN_ISLANDS",
"STATE_EAST_AEGEAN_ISLANDS",
"STATE_ANKARA",
"STATE_WESTERN_AFGHANISTAN",
"STATE_DIYARBAKIR",
"STATE_EASTERN_AFGHANISTAN",
"STATE_BANGKOK",
"STATE_TONKIN",
"STATE_ANNAM",
"STATE_LAOS",
"STATE_CHIANG_MAI",
"STATE_NAKHON_RATCHASIMA",
"STATE_SEOUL",
"STATE_BUSAN",
"STATE_YANGHO",
"STATE_SARIWON",
"STATE_PYONGYANG",
"STATE_SAKHALIN",
"STATE_HOKKAIDO",
"STATE_TOHOKU",
"STATE_KANTO",
"STATE_CHUBU",
"STATE_KANSAI",
"STATE_KYUSHU",
"STATE_RYUKYU_ISLANDS",
"STATE_CHUGOKU",
"STATE_SHIKOKU",
"STATE_LHASA",
"STATE_NGARI",
"STATE_HIMALAYAS",
"STATE_DZUNGARIA",
"STATE_TIANSHAN",
"STATE_SICHUAN",
"STATE_YUNNAN",
"STATE_GUIZHOU",
"STATE_SHAOZHOU",
"STATE_ALXA",
"STATE_HINGGAN",
"STATE_GUANGXI",
"STATE_BEIJING",
"STATE_SHENGJING",
"STATE_OUTER_MANCHURIA",
"STATE_SOUTHERN_MANCHURIA",
"STATE_NORTHERN_MANCHURIA",
"STATE_SHANXI",
"STATE_NINGXIA",
"STATE_GANSU",
"STATE_XIAN",
"STATE_QINGHAI",
"STATE_CHONGQING",
"STATE_GUANGDONG",
"STATE_FUJIAN",
"STATE_ZHEJIANG",
"STATE_NANJING",
"STATE_JIANGSU",
"STATE_HENAN",
"STATE_ZHILI",
"STATE_JIANGXI",
"STATE_SOUTHERN_ANHUI",
"STATE_NORTHERN_ANHUI",
"STATE_WESTERN_HUBEI",
"STATE_EASTERN_HUBEI",
"STATE_HUNAN",
"STATE_FORMOSA",
"STATE_SOUTHERN_FINLAND",
"STATE_ALAND",
"STATE_WEST_KARELIA",
"STATE_OSTROBOTHNIA",
"STATE_ESTONIA",
"STATE_LATVIA",
"STATE_LITHUANIA",
"STATE_CHUKOTKA",
"STATE_NENETSIA",
"STATE_EAST_KARELIA",
"STATE_ARKHANGELSK",
"STATE_TARTARIA",
"STATE_KHIVA",
"STATE_UZBEKIA",
"STATE_TAJIKISTAN",
"STATE_KIRGHIZIA",
"STATE_URALSK",
"STATE_TURKMENIA",
"STATE_SEMIRECHE",
"STATE_JETISY",
"STATE_AKMOLINSK",
"STATE_KAMCHATKA",
"STATE_OKHOTSK",
"STATE_YAKUTSK",
"STATE_TRANS_BAIKAL",
"STATE_IRKUTSK",
"STATE_TOMSK",
"STATE_TUVA",
"STATE_TOBOLSK",
"STATE_UPPER_YENISEYSK",
"STATE_OB",
"STATE_URAL",
"STATE_SAMARA",
"STATE_KAZAN",
"STATE_PERM",
"STATE_GALICH",
"STATE_TVER",
"STATE_MOSCOW",
"STATE_DAGESTAN",
"STATE_KUBAN",
"STATE_ASTRAKHAN",
"STATE_CRIMEA",
"STATE_LUHANSK",
"STATE_KURSK",
"STATE_NOVGOROD",
"STATE_CHERSON",
"STATE_BESSARABIA",
"STATE_BRYANSK",
"STATE_SMOLENSK",
"STATE_ORSHA",
"STATE_CAMPANIA",
"STATE_ABRUZZO",
"STATE_CALABRIA",
"STATE_APULIA",
"STATE_WEST_GALICIA",
"STATE_EAST_GALICIA",
"STATE_WEST_SLOVAKIA",
"STATE_EAST_SLOVAKIA",
"STATE_DALMATIA",
"STATE_CROATIA",
"STATE_SLAVONIA",
"STATE_BEKES",
"STATE_TRANSDANUBIA",
"STATE_ISTRIA",
"STATE_LOMBARDY",
"STATE_BOHEMIA",
"STATE_MORAVIA",
"STATE_CENTRAL_HUNGARY",
"STATE_STYRIA",
"STATE_TYROL",
"STATE_AUSTRIA",
"STATE_SOUTH_TYROL",
"STATE_SLOVENIA",
"STATE_DELVIDEK",
"STATE_POSEN",
"STATE_WESTPHALIA",
"STATE_ANHALT",
"STATE_WEST_PRUSSIA",
"STATE_EAST_PRUSSIA",
"STATE_RHINELAND",
"STATE_NORTH_RHINE",
"STATE_RUHR",
"STATE_SILESIA",
"STATE_BRANDENBURG",
"STATE_SCHLESWIG_HOLSTEIN",
"STATE_WURTTEMBERG",
"STATE_BADEN",
"STATE_HANNOVER",
"STATE_BAVARIA",
"STATE_FRANCONIA",
"STATE_SAXONY",
"STATE_BRUNSWICK",
"STATE_HESSE",
"STATE_PIEDMONT",
"STATE_SARDINIA",
"STATE_TARAPACA",
"STATE_ANTOFAGASTA",
"STATE_BREST",
"STATE_GREATER_POLAND",
"STATE_LESSER_POLAND",
"STATE_MAZOVIA",
"STATE_VOLHYNIA",
"STATE_KIEV",
"STATE_MECKLENBURG",
"STATE_MALTA",
"STATE_UMBRIA",
"STATE_BANAT",
"STATE_CORSICA",
"STATE_PASHTUNISTAN",
"STATE_UTAH",
"STATE_SOUTH_CAROLINA",
"STATE_CHIAPAS",
"STATE_SAN_SALVADOR",
"STATE_ADANA",
"STATE_DEIR_EZ_ZOR",
"STATE_BAJA_CALIFORNIA",
"STATE_CONNAUGHT"
]

// common/country_definitions/00_countries.txt
// common/country_definitions/01_africa.txt
// common/country_definitions/01_pacific_and_australasia.txt
var countries = [
"GER",
"GBR",
"SCA",
"RUS",
"FRA",
"PRU",
"WES",
"POM",
"AUS",
"USA",
"CSA",
"FSA",
"ASA",
"LOU",
"AGJ",
"AMZ",
"GRI",
"JAP",
"ITA",
"KUK",
"DEN",
"FIN",
"NOR",
"SWE",
"SCN",
"BEL",
"CAT",
"FLA",
"IRE",
"NET",
"POR",
"SCO",
"ENG",
"ULS",
"WLS",
"NAV",
"SPA",
"WLL",
"ANH",
"BAD",
"BAV",
"BRA",
"BRE",
"DZG",
"FRM",
"HAM",
"HAN",
"HES",
"HOL",
"LUB",
"LUX",
"MEC",
"NAS",
"OLD",
"SAX",
"WUR",
"LOM",
"LUC",
"MOD",
"PAP",
"PAR",
"PRA",
"SAR",
"SIC",
"TRE",
"TUS",
"VEN",
"BOH",
"KRA",
"CRI",
"EST",
"HUN",
"LIT",
"LAT",
"POL",
"GAL",
"SLV",
"SWI",
"TRS",
"UKR",
"CZH",
"ALB",
"BOS",
"BUL",
"CRE",
"CRO",
"CYP",
"GRE",
"ION",
"MOL",
"MON",
"ROM",
"SER",
"SLO",
"TUR",
"WAL",
"YUG",
"ABU",
"AFG",
"ARM",
"DAG",
"AZB",
"BUK",
"GEO",
"HDJ",
"IRQ",
"KHI",
"KOK",
"KAZ",
"MUG",
"NEJ",
"OMA",
"PER",
"JAB",
"YEM",
"MAH",
"KAT",
"ZAI",
"LAH",
"BHN",
"HND",
"AWA",
"BAS",
"BER",
"BHO",
"BIK",
"BUN",
"GWA",
"HYD",
"BGL",
"IND",
"JAI",
"JAS",
"JOD",
"KAL",
"KAS",
"KUT",
"LAD",
"MAK",
"MEW",
"MYS",
"NAG",
"NEP",
"ORI",
"PAN",
"SIK",
"SIN",
"TRA",
"ACE",
"BAL",
"BHU",
"LAN",
"BRU",
"BUR",
"CAM",
"CHI",
"DAI",
"JAV",
"KOR",
"LAO",
"LUA",
"CHP",
"VIE",
"JOH",
"SIA",
"CMI",
"TIB",
"MGL",
"XIN",
"PHI",
"MCH",
"CAL",
"CAN",
"CHE",
"COL",
"COS",
"CUB",
"DES",
"DOM",
"ELS",
"GUA",
"ALT",
"HAI",
"MEX",
"MTC",
"HON",
"NEN",
"NEW",
"NIC",
"PNM",
"QUE",
"HBC",
"ONT",
"NBS",
"NVS",
"TEX",
"UCA",
"ARG",
"BOL",
"BRZ",
"CHL",
"CLM",
"ECU",
"PEU",
"PRG",
"URU",
"VNZ",
"ISR",
"BYZ",
"ICL",
"ARA",
"UBD",
"BYE",
"PLC",
"GCO",
"JAN",
"BIC",
"BRI",
"PAT",
"THL",
"SLK",
"TNG",
"WIN",
"MAY",
"IBE",
"ORG",
"COM",
"SEQ",
"DKT",
"LKT",
"NVJ",
"ARP",
"NZP",
"ABS",
"IRC",
"JAM",
"BAH",
"PCO",
"MKT",
"NAH",
"GRN",
"ANL",
"CAS",
"SMI",
"MLT",
"PRM",
"HZJ",
"TRC",
"SIB",
"YAK",
"ASM",
"MNP",
"TOB",
"KLT",
"HTH",
"KRN",
"KHM",
"KHN",
"AIN",
"EZO",
"QIA",
"FRS",
"YUN",
"YUE",
"OAX",
"MCO",
"TWT",
"AYM",
"WYU",
"TPI",
"PUE",
"NNV",
"NVL",
"ATB",
"CSC",
"IRO",
"CTF",
"MSC",
"UTE",
"PWN",
"APC",
"BLF",
"CCM",
"ORN",
"MUI",
"SRB",
"YUC",
"RIO",
"PNI",
"CEY",
"BLH",
"NGF",
"SGF",
"OCC",
"TUV",
"COR",
"TNS",
"FER",
"IUS",
"NCA",
"DON",
"SYR",
"EOT",
"LEB",
"HNA",
"AHU",
"ZHI",
"SHN",
"GUI",
"GNG",
"SIH",
"SHA",
"XIB",
"TPG",
"GNI",
"KUR",
"GLI",
"PAL",
"TRH",
"COB",
"MEI",
"WEI",
"SCW",
"HEK",
"LIP",
"SCM",
"MST",
"HOH",
"WLD",
"BHT",
"UOM",
"CIR",
"CHC",
"ASS",
"KLM",
"SCH",
"KZH",
"UZH",
"OZH",
"CAU",
"SAV",
"RHE",
"PRC",
"ALD",
"CON",
"EGY",
"ETH",
"MAD",
"MAS",
"LIB",
"MOR",
"NAL",
"ORA",
"SAF",
"SOK",
"TRI",
"TRN",
"TUN",
"ZAN",
"ZUL",
"SIL",
"MTB",
"MSH",
"MNC",
"MSK",
"NAM",
"HRO",
"LZO",
"TSW",
"WBL",
"KZM",
"BMB",
"KSN",
"OVM",
"CHK",
"LND",
"KBA",
"MNB",
"NYM",
"HHE",
"FTJ",
"BUG",
"ASH",
"YKA",
"KON",
"LNG",
"FNG",
"BNG",
"BST",
"TKE",
"BOB",
"LGA",
"HMB",
"LBA",
"BNY",
"ANK",
"ACH",
"KRG",
"RWD",
"BRD",
"MSI",
"TRK",
"LUO",
"GGO",
"SNG",
"KKY",
"WSG",
"GLD",
"MJT",
"DFR",
"ISQ",
"HOB",
"DAK",
"ZND",
"DFT",
"DNK",
"NUE",
"TPS",
"AWS",
"SHW",
"HAR",
"BRN",
"KFA",
"SDM",
"WLG",
"TGR",
"GJM",
"WLO",
"BGM",
"BOR",
"BGI",
"WAD",
"AIR",
"MSN",
"OYO",
"BEN",
"CAY",
"JLF",
"FTR",
"KNG",
"DAH",
"MOS",
"KRT",
"SGU",
"TRZ",
"KBU",
"BND",
"SRR",
"SSU",
"MDK",
"HAU",
"BLE",
"KRU",
"KBD",
"AYI",
"EWE",
"IBO",
"DLA",
"TBI",
"AHG",
"TUA",
"OUA",
"ADG",
"BSS",
"TIR",
"IBL",
"KSS",
"GAO",
"TIV",
"SRA",
"EQU",
"BJA",
"NBA",
"SUD",
"SKM",
"CHW",
"LMW",
"MKU",
"SNA",
"BTG",
"XHO",
"UYA",
"ZIM",
"MAL",
"AFS",
"SAH",
"TUG",
"AIT",
"GZA",
"MRV",
"BRG",
"BMM",
"HAW",
"NTU",
"NTO",
"KNK",
"PPU",
"HLA",
"BLA",
"BLG",
"KTI",
"FJI",
"SKH",
"MCR",
"VNT",
"NRU",
"PLY",
"AOT",
"ULR",
"NSW",
"WAS",
"SAS",
"UNT",
"NNG",
"KAU",
"GML",
"AST",
"NZL",
"TAS",
"DEI",
"SAK",
"PON",
"SMB",
"JMB",
"YOG",
"SRK",
"BTN",
"SEL",
"PRK",
"SUL",
"SLW",
"TID",
"STG",
"BNJ",
"IDN",
"MGD",
"YUZ",
"PNS"
]

var string = "\ufeff"
string += "enforce_ethnostate_decision = {\n"
string += "	is_shown = {\n"
string += "		NOT = { is_country_type = decentralized }\n"
string += "		is_in_civil_war = no\n"
string += "		has_law = law_type:law_ethnostate\n"
string += "	}\n"
string += "\n"
string += "	possible = {\n"
string += "		is_subject = no\n"
string += "		has_law = law_type:law_ethnostate\n"
string += "		OR = {\n"
string += "			has_law = law_type:law_national_guard\n"
string += "			has_law = law_type:law_secret_police\n"
string += "		}\n"
string += "		OR = {\n"
string += "			has_law = law_type:law_dedicated_police\n"
string += "			has_law = law_type:law_militarized_police\n"
string += "		}\n"
string += "		OR = {\n"
string += "			has_law = law_type:law_censorship\n"
string += "			has_law = law_type:law_outlawed_dissent\n"
string += "		}\n"
string += "		NOT = { has_law = law_type:law_worker_protections }\n"
string += "		has_law = law_type:law_no_social_security\n"
string += "		custom_tooltip = {\n"
string += "			text = enforce_ethnostate_cooldown_tt\n"
string += "			NOT = { has_variable = enforce_ethnostate_cooldown }\n"
string += "		}\n"
string += "	}\n"
string += "\n"
string += "	when_taken = {\n"
string += "		custom_tooltip = {\n"
string += "			text = enforce_ethnostate_decision_tt\n"
string += "			set_variable = {\n"
string += "				name = enforce_ethnostate_cooldown\n"
string += "				months = very_long_modifier_time\n"
string += "			}\n"
string += "			every_scope_state = {\n"
string += "				limit = {\n"
string += "					owner = ROOT\n"
string += "					is_incorporated = yes\n"
string += "				}\n"
string += "				add_modifier = {\n"
string += "					name = modifier_ethnostate\n"
string += "					months = very_long_modifier_time\n"
string += "				}\n"
string += "			}\n"
for (var i = 0; i < cultures.length; i++) {
	string += "			every_scope_state = {\n"
	string += "				limit = {\n"
	string += "					owner = ROOT\n"
	string += "					is_incorporated = yes\n"
	string += "					owner = { country_has_primary_culture = cu:"+cultures[i]+" }\n"
	string += "				}\n"
	string += "				add_culture_standard_of_living_modifier = {\n"
	string += "					culture = cu:"+cultures[i]+"\n"
	string += "					months = very_long_modifier_time\n"
	string += "					multiplier = 200\n"
	string += "				}\n"
	string += "			}\n"
}
string += "			every_scope_state = {\n"
string += "				limit = {\n"
string += "					owner = ROOT\n"
string += "					is_capital = yes\n"
string += "				}\n"
string += "				every_scope_pop = {\n"
string += "					limit = {\n"
string += "						culture = { culture_is_discriminated_in = ROOT }\n"
string += "					}\n"
string += "					change_poptype = pop_type:discriminated_laborers\n"
string += "				}\n"
string += "				kill_population_percent_in_state = {\n"
string += "					percent = 1\n"
string += "					pop_type = discriminated_laborers\n"
string += "				}\n"
string += "			}\n"
string += "			every_scope_state = {\n"
string += "				limit = {\n"
string += "					owner = ROOT\n"
string += "					is_incorporated = yes\n"
string += "				}\n"
string += "				every_scope_pop = {\n"
string += "					limit = {\n"
string += "						culture = { culture_is_discriminated_in = ROOT }\n"
string += "						OR = {\n"
string += "							is_pop_type = laborers\n"
string += "							is_pop_type = slaves\n"
string += "						}\n"
string += "						is_employed = no\n"
string += "					}\n"
string += "					change_poptype = pop_type:discriminated_laborers\n"
string += "				}\n"
string += "				kill_population_percent_in_state = {\n"
string += "					percent = 1\n"
string += "					pop_type = discriminated_laborers\n"
string += "				}\n"
string += "			}\n"
for (var j = 0; j < states.length; j++) {
	string += "			enforce_ethnostate_"+states[j].toLowerCase()+" = yes\n"
	var string2 = "\ufeff"
	string2 += "enforce_ethnostate_"+states[j].toLowerCase()+" = {\n"
	string2 += "	s:"+states[j]+" = {\n"
	string2 += "		every_scope_state = {\n"
	string2 += "			limit = {\n"
	string2 += "				owner = ROOT\n"
	string2 += "				is_incorporated = yes\n"
	string2 += "			}\n"
	string2 += "			every_scope_pop = {\n"
	string2 += "				limit = {\n"
	string2 += "					culture = { culture_is_discriminated_in = ROOT }\n"
	string2 += "				}\n"
	string2 += "				move_pop = root.capital\n"
	string2 += "			}\n"
	string2 += "		}\n"
	string2 += "	}\n"
	string2 += "	every_scope_state = {\n"
	string2 += "		limit = {\n"
	string2 += "			owner = ROOT\n"
	string2 += "			is_capital = yes\n"
	string2 += "		}\n"
	string2 += "		every_scope_pop = {\n"
	string2 += "			limit = {\n"
	string2 += "				culture = { culture_is_discriminated_in = ROOT }\n"
	string2 += "			}\n"
	for (var k = 0; k < countries.length; k++) {
		string2 += "			if = {\n"
		string2 += "				limit = {\n"
		string2 += "					exists = c:"+countries[k]+"\n"
		string2 += "					ROOT = c:"+countries[k]+"\n"
		string2 += "				}\n"
		string2 += "				move_pop = s:"+states[j]+".region_state:"+countries[k]+"\n"
		string2 += "			}\n"
	}
	string2 += "		}\n"
	string2 += "	}\n"
	string2 += "}\n"
	fs.writeFileSync('./enforce_ethnostate/common/scripted_effects/enforce_ethnostate_'+states[j].toLowerCase()+'.txt', string2, 'utf-8')
}
string += "		}\n"
string += "	}\n"
string += "\n"
string += "	ai_chance = {\n"
string += "		base = 0\n"
string += "		modifier = {\n"
string += "			trigger = {\n"
string += "				is_at_war = no\n"
string += "				OR = {\n"
string += "					has_strategy = ai_strategy_reactionary_agenda\n"
string += "					has_strategy = ai_strategy_nationalist_agenda\n"
string += "					has_strategy = ai_strategy_maintain_mandate_of_heaven\n"
string += "				}\n"
string += "				OR = {\n"
string += "					has_strategy = ai_strategy_territorial_expansion\n"
string += "					has_strategy = ai_strategy_colonial_expansion\n"
string += "					has_strategy = ai_strategy_armed_isolationism\n"
string += "					has_strategy = ai_strategy_economic_imperialism\n"
string += "					has_strategy = ai_strategy_unify_china\n"
string += "				}\n"
string += "				NOT = { has_strategy = ai_strategy_placate_population }\n"
string += "			}\n"
string += "			add = 1\n"
string += "		}	\n"
string += "	}\n"
string += "}\n"
fs.writeFileSync('./enforce_ethnostate/common/decisions/enforce_ethnostate.txt', string, 'utf-8')
