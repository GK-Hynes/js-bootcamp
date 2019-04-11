// Set up filters
const filters = {
  searchText: "",
  hideCompleted: false
};

// Expose filters
const getFilters = () => filters;

// Set filters
const setFilters = updates => {
  if (typeof updates.searchText === "string") {
    filters.searchText = updates.searchText;
  }
  if (typeof updates.hideCompleted === "boolean") {
    filters.hideCompleted = updates.hideCompleted;
  }
};

export { getFilters, setFilters };
