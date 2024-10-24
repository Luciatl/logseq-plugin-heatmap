import { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin.user';

export const settingsConfig: SettingSchemaDesc[] = [
  {
    key: 'heatmapProperties',
    title: 'Heatmap Properties',
    description: 'Enter properties to display as heatmaps (comma separated, e.g. workinghour,exercise,wateramount)',
    type: 'string',
    default: 'blockcount'
  },
  {
    key: "heatmapDisplayNames",
    type: "string",
    default: "Daily Blocks",
    description: "Comma-separated list of display names for properties (in same order)",
    title: "Displayed Properties",
  },
];