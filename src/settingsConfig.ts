import { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin.user';

export const settingsConfig: SettingSchemaDesc[] = [
  {
    key: 'heatmapJournalPageProperties',
    title: 'Journal Page Properties',
    description: 'Enter properties in journal pages to display as heatmaps (comma separated, e.g. workinghour,exercise,wateramount)',
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