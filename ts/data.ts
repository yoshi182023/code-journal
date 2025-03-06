const data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

// 将数据保存到 localStorage
function saveData(): void {
  try {
    localStorage.setItem('journalData', JSON.stringify(data));
    console.log('Data saved to localStorage:', data);
  } catch (error) {
    console.error('Failed to save data to localStorage:', error);
  }
}

// 从 localStorage 加载数据
function loadData(): void {
  try {
    const storedData = localStorage.getItem('journalData');
    if (storedData) {
      Object.assign(data, JSON.parse(storedData));
      console.log('Data loaded from localStorage:', data);
    } else {
      console.log('No data found in localStorage, using default data.');
    }
  } catch (error) {
    console.error('Failed to load data from localStorage:', error);
  }
}

loadData();
// 导出 saveData 函数，确保它被使用
export { saveData };
