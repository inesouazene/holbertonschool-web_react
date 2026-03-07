// function getCurrentYear() that returns the current year
export function getCurrentYear() {
  return new Date().getFullYear();
}

// function getFooterCopy(isIndix) that returns Holberton School when it's ttrue, otherwise it'll return Holberton School main dashboard
export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
} 
