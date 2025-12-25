const sortByDate = (entries) => {
  const sortedEntries = entries.sort(
    (a, b) => new Date(b.data.createdAt && b.data.createdAt).valueOf() - new Date(a.data.createdAt && a.data.createdAt).valueOf()
  );
  return sortedEntries;
};

export { sortByDate as s };
