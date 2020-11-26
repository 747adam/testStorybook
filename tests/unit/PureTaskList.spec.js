import Vue from 'vue';
import PureTaskList from '../../src/components/PureTaskList.vue';
import { WithPinnedTasks } from '../../src/components/PureTaskList.stories';

it('renders pinned tasks at the start of the list', () => {
  // 渲染任務列表
  const Constructor = Vue.extend(PureTaskList);
  const vm = new Constructor({
    // 使用 PureTaskList.stories.js 裡的 WithPinnedTasks.args(輸出樣式：置頂)
    propsData: WithPinnedTasks.args,
  }).$mount();
  const firstTaskPinned = vm.$el.querySelector('#testUnit');
  const isTrue = firstTaskPinned.value === '我是adam';
  console.log('單元測試value結果===', isTrue)
  // 測試 data 是否正確
  expect(isTrue).not.toBe(false);
});