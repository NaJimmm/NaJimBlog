import { b as getEntries } from './BaseLayout_BgAMFR6a.mjs';
import { s as slugify } from './textConverter_BRScpw42.mjs';

const getTaxa = async (collection, name) => {
  const entries = await getEntries(collection);
  const taxonomyPages = entries.map((entry) => entry.data[name]);
  let taxonomies = [];
  for (let i = 0; i < taxonomyPages.length; i++) {
    const categoryArray = taxonomyPages[i];
    if (categoryArray && Array.isArray(categoryArray)) {
      for (let j = 0; j < categoryArray.length; j++) {
        taxonomies.push(slugify(categoryArray[j]));
      }
    }
  }
  const taxonomy = [...new Set(taxonomies)];
  taxonomy.sort((a, b) => a.localeCompare(b));
  return taxonomy;
};
const getTaxaWithCount = async (collection, name) => {
  const entries = await getEntries(collection);
  const taxonomyStats = /* @__PURE__ */ new Map();
  entries.forEach((entry) => {
    const taxonomyValue = entry.data[name];
    if (taxonomyValue) {
      if (Array.isArray(taxonomyValue)) {
        taxonomyValue.forEach((item) => {
          const key = item.toString();
          taxonomyStats.set(key, (taxonomyStats.get(key) || 0) + 1);
        });
      } else {
        const key = taxonomyValue.toString();
        taxonomyStats.set(key, (taxonomyStats.get(key) || 0) + 1);
      }
    }
  });
  return Array.from(taxonomyStats.entries()).map(([name2, count]) => ({
    name: name2,
    slug: slugify(name2),
    count
  })).sort((a, b) => a.name.localeCompare(b.name));
};

export { getTaxa as a, getTaxaWithCount as g };
