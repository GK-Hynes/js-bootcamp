// Set up filters default object

// getFilters
// Arguments: none
// Return value: filters object

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none

// Make sure to set up the exports

const filters = {
  searchText: "",
  hideCompleted: false
};

// Expose filters
const getFilters = () => filters;

const setFilters = updates => {
  if (typeof updates.searchText === "string") {
    filters.searchText = updates.searchText;
  }
  if (updates.hideCompleted !== filters.hideCompleted) {
    filters.hideCompleted = updates.hideCompleted;
  }
};

export { getFilters, setFilters };
