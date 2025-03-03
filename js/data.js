'use strict';
const data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};
function saveData() {
  localStorage.setItem('journalData', JSON.stringify(data));
}
function loadData() {
  const storedData = localStorage.getItem('journalData');
  if (storedData) {
    Object.assign(data, JSON.parse(storedData));
  }
}
loadData();
