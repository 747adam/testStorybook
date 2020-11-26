<template>
  <div class="list-item" :class="task.state" :style="style">
    <label class="checkbox">
      <input type="checkbox" :checked="isChecked" disabled name="checked" />
      <span class="checkbox-custom" @click="$emit('archive-task', task.id)" />
    </label>
    <div class="title">
      <input id="testUnit" type="text" :value="task.title" readonly placeholder="Input title" :style="fontSizeStyle" />
    </div>

    <div class="actions">
      <a v-if="!isChecked" @click="$emit('pin-task', task.id)">
        <span class="icon-star" />
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Task',
    props: {
      task: {
        type: Object,
        required: true,
        default: () => ({ id: '', state: '', title: '' }),
        validator: task => ['id', 'state', 'title'].every(key => key in task),
      },
      // 介面插件：調色盤改 背景色
      backgroundColor: {
        type: String,
      },
      // 介面插件：下拉選單 改大小
      fontSize: {
        type: String,
        default: '14',
        validator: function (value) {
          return ['12', '14', '18'].indexOf(value) !== -1;
        },
      },
    },
    computed: {
      isChecked() {
        return this.task.state === 'TASK_ARCHIVED';
      },
      style() {
        return {
          backgroundColor: this.backgroundColor
        };
      },
      fontSizeStyle() {
        return {
          fontSize: `${this.fontSize}px`
        };
      },
      classes() {
        return {
          'size-button': true,
          'storybook-button--primary': this.primary,
          'storybook-button--secondary': !this.primary,
        };
      },
    },
  };
</script>