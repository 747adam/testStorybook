import PureTaskList from './PureTaskList';
import * as TaskStories from './Task.stories';

// 輸出內容
export default {
  component: PureTaskList,
  title: 'PureTaskList',
  decorators: [() => '<div style="padding: 3rem;"><story /></div>'],
};

// 共用 template 避免重複code
const Template = (args, { argTypes }) => ({
  components: { PureTaskList },
  props: Object.keys(argTypes),
  methods: TaskStories.actionsData,
  template: '<PureTaskList v-bind="$props" @pin-task="onPinTask" @archive-task="onArchiveTask" />',
});

// 預設輸出內容
export const Default = Template.bind({});
Default.args = {
  tasks: [
    { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
  ],
};

// 輸出樣式：置頂
export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // 換掉第六組，改為 TASK_PINNED 置頂
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)第六組更換為置頂', state: 'TASK_PINNED' },
  ],
  loading: false,
};

// 輸出樣式：loading 中
export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

// 輸出樣式：無內容
export const Empty = Template.bind({});
Empty.args = {
  // 繼承自Loading樣式的資料
  ...Loading.args,
  loading: false,
};
