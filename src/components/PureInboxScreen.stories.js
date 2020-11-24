import Vue from 'vue';
import Vuex from 'vuex';
import PureInboxScreen from './PureInboxScreen.vue';
import { action } from '@storybook/addon-actions';
import * as TaskListStories from './PureTaskList.stories';

Vue.use(Vuex);

// 取得 vuex 資料
export const store = new Vuex.Store({
    state: {
      tasks: TaskListStories.Default.args.tasks,
    },
    actions: {
      pinTask(context, id) {
        action('pin-task')(id);
      },
      archiveTask(context, id) {
        action('archive-task')(id);
      },
    },
});

export default {
  title: 'PureInboxScreen',
  component: PureInboxScreen,
  // storybook 排除有 store 結尾的輸出(vuex 資料)
  excludeStories: /.*store$/,
};

// 共用 template 避免重複code
const Template = (args, { argTypes }) => ({
  components: { PureInboxScreen },
  props: Object.keys(argTypes),
  template: '<PureInboxScreen v-bind="$props" />',
  store,
});

// 預設輸出內容
export const Default = Template.bind({});

// 輸出樣式：錯誤
export const Error = Template.bind({});
Error.args = { error: true };