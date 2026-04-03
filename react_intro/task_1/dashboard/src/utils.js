// function getCurrentYear() that returns the current year
const getCurrentYear = () => {
  return new Date().getFullYear();
}

// function getFooterCopy(isIndex) that returns Holberton School when it's true, otherwise it'll return Holberton School main dashboard
const getFooterCopy= (isIndex) => {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
} 

export {
    getCurrentYear,
    getFooterCopy,
};
