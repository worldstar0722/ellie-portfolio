// Intrinsic pixel dimensions of every evidence asset in public/images/,
// read from the files themselves. Figures use these for width/height and
// for an explicit aspect-ratio box, so nothing reflows as images load.
//
// Filenames are descriptive on purpose — they match the bundle manifest
// (sources/asset-manifest.json) one-to-one, so an asset can always be
// traced back to the original it was extracted from.
export const imageMeta = {
  "finance-chatbot-evaluation-workflow.svg": { w: 1440, h: 840 },
  "finance-chatbot-evaluation-workflow.png": { w: 1440, h: 840 },
  "green-loop-civic-center-health-pathway.png": { w: 1400, h: 788 },
  "salesforce-recruiting-dashboard.png": { w: 1312, h: 688 },
  "salesforce-recruiting-kanban.png": { w: 1005, h: 640 },
  "slc-gis-amenity-buffers.png": { w: 3300, h: 2550 },
  "slc-gis-amenity-distribution.png": { w: 2200, h: 1700 },
  "stock-confusion-matrices.png": { w: 2084, h: 618 },
  "stock-model-evaluation.png": { w: 1334, h: 580 },
  "stock-sentiment-research-method.png": { w: 520, h: 481 },
  "super-bowl-ad-meter-comparison.png": { w: 870, h: 500 },
  "super-bowl-gdac-sentiment-breakdown.png": { w: 1920, h: 1080 },
  "super-bowl-research-poster.jpg": { w: 4608, h: 3456 },
  "super-bowl-visibility-sentiment.png": { w: 980, h: 825 },
  "uber-database-erds.png": { w: 1545, h: 2000 },
  "uber-database-physical-model.png": { w: 1545, h: 2000 },

  // Original posters and archived chart exports kept from the earlier
  // build. project01_cover.jpg is a quarter-resolution copy of
  // super-bowl-research-poster.jpg, project03_cover.png is another render
  // of the health-pathway diagram, and PROJECT01_sentiment_breakdown.png
  // is byte-identical to super-bowl-gdac-sentiment-breakdown.png — all
  // three stay on disk but the higher-resolution version is the one shown.
  "project01_cover.jpg": { w: 1152, h: 864 },
  "project02_cover.jpg": { w: 1152, h: 864 },
  "project03_cover.png": { w: 1672, h: 692 },
  "project04_cover.png": { w: 1732, h: 1152 },
  "PROJECT01_engagement_per_1M.png": { w: 1920, h: 1080 },
  "PROJECT01_engagement_per_impression.png": { w: 1920, h: 1080 },
  "PROJECT01_engagement_vs_virality_matrix.png": { w: 1920, h: 1080 },
  "PROJECT01_sentiment_breakdown.png": { w: 1920, h: 1080 },
  "PROJECT01_tweet_volume_per_brand.png": { w: 1920, h: 1080 },
  "PROJECT02_confusion_matrix.png": { w: 1624, h: 1040 },
  "PROJECT02_model_comparison.png": { w: 1598, h: 670 },
  "PROJECT02_predicted_probability_distribution.png": { w: 1744, h: 1038 },
  "PROJECT02_stock_price_trends.png": { w: 1686, h: 890 },
  "PROJECT04_amenity_map.png": { w: 1386, h: 1062 },
  "PROJECT04_buffer_map.png": { w: 1388, h: 1064 },
  "PROJECT04_score_map.png": { w: 1402, h: 1074 },
};

export function metaFor(file) {
  return imageMeta[file] ?? null;
}
