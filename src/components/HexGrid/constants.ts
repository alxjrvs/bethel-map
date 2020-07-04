export const height = 28;
export const width = 22;

const yCoords: number[] = [];
for (let i = 0; i <= height; i += 1) {
  yCoords.push(i);
}

const xCoords: number[] = [];
for (let i = 0; i <= width; i += 1) {
  xCoords.push(i);
}

type HexConfig = {
  fill: number;
  lineFill: number;
  lineWidth?: number;
};
const baseHexConfig: HexConfig = {
  fill: 0x2c3e50,
  lineFill: 0x000000,
};

type HexConfigLookup = { [key: string]: HexConfig };
const generateBaseHexConfigs = () => {
  const baseHexConfigs: HexConfigLookup = {};
  xCoords.forEach((x) =>
    yCoords.forEach((y) => (baseHexConfigs[`${x}-${y}`] = baseHexConfig))
  );
  return baseHexConfigs;
};

const baseOceanHexConfig: HexConfig = {
  fill: 0x0000ff,
  lineFill: 0x000000,
};

const generateBorderOceanTiles = () => {
  const borderOceanHexConfigs: HexConfigLookup = {};
  xCoords.forEach((x) => {
    borderOceanHexConfigs[`${x}-0`] = baseOceanHexConfig;
    borderOceanHexConfigs[`${x}-${height - 1}`] = baseOceanHexConfig;
  });
  yCoords.forEach((y) => {
    borderOceanHexConfigs[`0-${y}`] = baseOceanHexConfig;
    borderOceanHexConfigs[`${width - 1}-${y}`] = baseOceanHexConfig;
  });

  return borderOceanHexConfigs;
};

const BorderOceanTiles = generateBorderOceanTiles();

type PartialHexConfigLookup = [string, Partial<HexConfig>];
const assignHexList = (
  keys: Array<string | PartialHexConfigLookup>,
  config: HexConfig
): HexConfigLookup =>
  keys.reduce<HexConfigLookup>((lookup, currentValue) => {
    if (typeof currentValue === "string") {
      return { ...lookup, [currentValue]: config };
    }
    return { ...lookup, [currentValue[0]]: { ...config, ...currentValue[1] } };
  }, {});

const WaterList = [
  "1-13",
  "20-21",
  "16-23",
  "15-24",
  "19-20",
  "20-22",
  "20-20",
  "7-26",
  "8-26",
  "9-26",
  "10-26",
  "11-26",
  "9-25",
  "10-25",
  "3-26",
  "14-24",
  "15-25",
  "15-26",
  "11-22",
  "11-18",
  "11-18",
  "12-18",
  "13-18",
  "13-17",
  "14-17",
  "14-16",
  "15-15",
  "15-14",
  "15-13",
  "15-12",
  "15-11",
  "15-10",
  "16-9",
  "13-25",
  "12-24",
  "1-26",
  "4-26",
  "11-19",
  "12-19",
  "13-19",
  "14-19",
  "11-21",
  "12-21",
  "13-21",
  "14-21",
  "14-20",
  "13-22",
  "15-21",
  "10-20",
  "14-23",
  "15-23",
  "15-22",
  "16-21",
  "15-20",
  "15-19",
  "12-22",
];
const Water = assignHexList(WaterList, baseOceanHexConfig);

const ShrinesList: PartialHexConfigLookup[] = [
  ["1-1", {}],
  ["2-11", {}],
  ["16-5", {}],
  ["10-11", {}],
  ["12-20", {}],
  ["3-25", {}],
];
const Shrines = assignHexList(ShrinesList, {
  ...baseHexConfig,
  fill: 0xf5ee9d,
  lineWidth: 3,
});

const RestStopList: PartialHexConfigLookup[] = [
  ["10-10", {}],
  ["13-20", {}],
  ["15-6", {}],
  ["18-12", {}],
  ["19-25", {}],
  ["2-1", {}],
  ["2-26", {}],
  ["3-11", {}],
];
const RestStops = assignHexList(RestStopList, {
  ...baseHexConfig,
  fill: 0xff0000,
});

const PointOfInterestList: PartialHexConfigLookup[] = [
  ["6-21", {}],
  ["3-23", {}],
  ["2-25", {}],
  ["11-20", {}],
  ["14-22", {}],
];
const PointsOfInterest = assignHexList(PointOfInterestList, {
  ...baseHexConfig,
  fill: 0xff4500,
});

const SwampList = ["1-24", "3-23", "2-25", "3-22", "2-24", "5-21", "4-22"];
const Swamps = assignHexList(SwampList, {
  ...baseHexConfig,
  fill: 0x326e42,
});

const RockyTerrainList = [
  "6-20",
  "7-20",
  "8-20",
  "9-20",
  "9-10",
  "9-11",
  "9-12",
  "10-12",
  "11-11",
];
const RockyTerrain = assignHexList(RockyTerrainList, {
  ...baseHexConfig,
  fill: 0xad8050,
});

const ChasmList = [
  "9-20",
  "10-21",
  "10-22",
  "12-23",
  "13-23",
  "13-24",
  "14-25",
  "5-11",
  "6-11",
  "7-11",
  "8-11",
  "4-11",
  "3-12",
  "3-13",
  "2-13",
  "1-14",
  "3-10",
  "2-10",
  "1-9",
  "2-9",
  "11-9",
  "11-8",
  "12-7",
  "12-6",
  "14-26",
  "11-23",
  "11-24",
  "12-25",
  "12-26",
  "10-19",
  "9-18",
  "10-17",
  "9-16",
  "10-15",
  "9-14",
  "10-13",
  "9-21",
  "8-22",
  "8-23",
  "7-24",
  "7-25",
  "6-26",
];
const Chasm = assignHexList(ChasmList, {
  ...baseHexConfig,
  fill: 0x383328,
});

export const playerVisitedTiles = [
  ...Object.keys(BorderOceanTiles),
  "3-25",
  "2-26",
  "2-25",
  "3-23",
  "9-20",
  "8-20",
  "7-20",
  "6-21",
  "4-22",
  "6-20",
  "5-21",
  "2-24",
  "3-22",
  "1-24",
];

export const playerVisibleTiles = [
  ...playerVisitedTiles,
  ...Object.keys(Shrines),
  "11-21",
  "11-19",
  "10-20",
];

export const calculateAlpha = (key: string) => {
  if (playerVisitedTiles.includes(key)) return 1;
  return 0.8;
};

export const playerHexConfigs = {
  ...generateBaseHexConfigs(),
  ...Water,
  ...Shrines,
  ...Swamps,
  ...RockyTerrain,
  ...Chasm,
  ...BorderOceanTiles,
  ...PointsOfInterest,
  ...RestStops,
};
