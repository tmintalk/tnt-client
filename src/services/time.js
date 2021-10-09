module.exports = {
  getFormatDate: (date) => {
    date = new Date(date);
    date.setHours(date.getHours() + 9);
    return date.toISOString().replace("T", " ").substring(0, 19);
  },
};
