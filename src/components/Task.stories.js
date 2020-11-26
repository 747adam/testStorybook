import { action } from '@storybook/addon-actions';
import Task from './Task';
export default {
  component: Task,
  title: 'Task',
  // storybook 排除有 Data 結尾的輸出(actionsData 是動做群組)
  excludeStories: /.*Data$/,
  argTypes: {
    backgroundColor: { control: 'color' },
    fontSize: { control: { type: 'select', options: ['12', '14', '18'] } },
  },
};

// 動做群組
export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

// 共用 template 避免重複code
const Template = (args, { argTypes }) => ({
  components: { Task },
  props: Object.keys(argTypes),
  methods: actionsData,
  template: '<Task v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />',
});

// 預設輸出內容
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test 測試標題測試標題測試標題',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

// 輸出樣式：置頂
export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

// 輸出樣式：勾選
export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};