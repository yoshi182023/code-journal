document.addEventListener('DOMContentLoaded', () => {
  const entryForm = document.querySelector('[data-view="entry-form"]');
  const entriesView = document.querySelector('[data-view="entries"]');
  const photoUrlInput = document.querySelector('#photo-url');
  const photoPreview = document.querySelector('#photo-preview');
  const form = document.querySelector('form');

  if (!entryForm || !entriesView || !photoUrlInput || !photoPreview || !form) {
    console.error('Required elements not found');
    return;
  }
  // 当用户输入或粘贴图片 URL 时，更新图片预览

  photoUrlInput.addEventListener('input', () => {
    photoPreview.src = photoUrlInput.value;
  });
  // 表单提交事件

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // 创建新的日记条目对象

    const newEntry = {
      entryId: data.nextEntryId++,
      title: form.title.value,
      photoUrl: form['photo-url'].value,
      notes: form.notes.value,
    };
    // 将新条目添加到数据模型的 entries 数组中
    console.log(newEntry);
    data.entries.unshift(newEntry);
    console.log('New entry added to data.entries:', data.entries);

    saveData();
    // 重置图片预览和表单
    console.log('Data saved to localStorage:', data);

    photoPreview.src = 'images/placeholder-image.jpg';
    form.reset();
  });
});
