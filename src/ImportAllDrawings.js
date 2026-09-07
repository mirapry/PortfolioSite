function importAllDrawings(r) {
    return r.keys().map(key => {
      const filenameWithExtension = key.replace('./', '').replace(/\.[^/.]+$/, ''); // Remove './' and file extension
      const parts = filenameWithExtension.split('_'); // Split the filename by underscores
      const filename_name = parts[0] || ''; // Extract the name part
      const filename_location = parts[1] || ''; // Extract the location part
      const filename_date = parts[2] ? parts[2].replace(/:/g, '/').replace(/-/g, '/') : ''; // Extract the date part and replace colons and hyphens with slashes
      const dateForSorting = parts[2] ? new Date(parts[2].replace(/:/g, '/').replace(/-/g, '/')) : new Date(); // Convert date to Date object for sorting
      return {
        src: r(key),
        name: filename_name,
        location: filename_location,
        date: filename_date,
        dateForSorting: dateForSorting
      };
    }).sort((a, b) => a.dateForSorting - b.dateForSorting); // Sort by date
  }
  
  const drawings = importAllDrawings(require.context('../public/face-drawings', false, /\.(png|jpe?g|svg)$/));
  
  export default drawings; 