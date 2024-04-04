const sortUsers = (data) => {
//   return [...data].sort((a, b) => (a.name > b.name ? 1 : -1));
  return data.slice().sort((a, b) => (a.name > b.name ? 1 : -1));
};

export default sortUsers;
