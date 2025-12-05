// 获取DOM元素
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// 新增任务
addTaskBtn.addEventListener('click', () => {
    const taskContent = taskInput.value.trim();
    if (!taskContent) {
        alert('请输入任务内容！');
        return;
    }
    // 创建任务卡片
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    taskCard.innerHTML = `
        <span>${taskContent}</span>
        <span class="delete-btn">删除</span>
    `;
    // 添加删除事件
    taskCard.querySelector('.delete-btn').addEventListener('click', () => {
        taskList.removeChild(taskCard);
    });
    // 追加到任务列表
    taskList.appendChild(taskCard);
    // 清空输入框
    taskInput.value = '';
});