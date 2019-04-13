// Set up filters
const filters = {
  searchText: "",
  hideCompleted: false
};

// Expose filters
const getFilters = () => filters;

// Set filters
const setFilters = ({ searchText, hideCompleted }) => {
  if (typeof searchText === "string") {
    filters.searchText = searchText;
  }
  if (typeof hideCompleted === "boolean") {
    filters.hideCompleted = hideCompleted;
  }
};

export { getFilters, setFilters };
