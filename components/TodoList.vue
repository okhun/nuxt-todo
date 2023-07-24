<script setup lang="ts">
import BaseInput from "./BaseInput.vue";
import BaseModal from "./BaseModal.vue";
import Item from "./Item.vue";
import { useTodoList } from "./../composable";

const {
  termValue,
  modalOpen,
  editTerm,
  backlogs,
  todos,
  progresses,
  tests,
  dones,
  handleAddItem,
  handleEditItem,
  handleDeleteItem,
  handleSaveItem,
  handleStartDrag,
  handleDrop,
} = useTodoList();
</script>

<template>
  <BaseModal v-model="modalOpen" @save="handleSaveItem">
    <template #body>
      <BaseInput v-model="editTerm" />
    </template>
  </BaseModal>
  <div class="bg-gray-100 w-full p-4 rounded flex flex-col gap-4 mt-10">
    <div
      class="overflow-auto min-h-[500px] max-h-[500px] bg-white p-2 rounded grid grid-cols-5 gap-2"
    >
      <div
        class="col-span-1 bg-slate-200 p-2"
        @drop="handleDrop($event, 'backlog')"
        @dragover.prevent
        @dragenter.prevent
      >
        <p class="text-xl mb-2">Backlogs</p>
        <Item
          v-for="item in backlogs"
          :key="item.id"
          :draggable="true"
          @dragstart="handleStartDrag($event, item)"
          :item="item"
          @edit="handleEditItem(item)"
          @delete="handleDeleteItem(item)"
        />
      </div>
      <div
        class="col-span-1 bg-slate-200 p-2"
        @drop="handleDrop($event, 'todo')"
        @dragover.prevent
        @dragenter.prevent
      >
        <p class="text-xl mb-2">Todos</p>
        <Item
          v-for="item in todos"
          :key="item.id"
          :draggable="true"
          @dragstart="handleStartDrag($event, item)"
          :item="item"
          @edit="handleEditItem(item)"
          @delete="handleDeleteItem(item)"
        />
      </div>
      <div
        class="col-span-1 bg-slate-200 p-2"
        @drop="handleDrop($event, 'progress')"
        @dragover.prevent
        @dragenter.prevent
      >
        <p class="text-xl mb-2">Progresses</p>
        <Item
          v-for="item in progresses"
          :key="item.id"
          :draggable="true"
          @dragstart="handleStartDrag($event, item)"
          :item="item"
          @edit="handleEditItem(item)"
          @delete="handleDeleteItem(item)"
        />
      </div>
      <div
        class="col-span-1 bg-slate-200 p-2"
        @drop="handleDrop($event, 'test')"
        @dragover.prevent
        @dragenter.prevent
      >
        <p class="text-xl mb-2">Tests</p>
        <Item
          v-for="item in tests"
          :key="item.id"
          :draggable="true"
          @dragstart="handleStartDrag($event, item)"
          :item="item"
          @edit="handleEditItem(item)"
          @delete="handleDeleteItem(item)"
        />
      </div>
      <div
        class="col-span-1 bg-slate-200 p-2"
        @drop="handleDrop($event, 'done')"
        @dragover.prevent
        @dragenter.prevent
      >
        <p class="text-xl mb-2">Dones</p>
        <Item
          v-for="item in dones"
          :key="item.id"
          :draggable="true"
          @dragstart="handleStartDrag($event, item)"
          :item="item"
          @edit="handleEditItem(item)"
          @delete="handleDeleteItem(item)"
        />
      </div>
    </div>

    <form @submit.prevent="handleAddItem">
      <BaseInput v-model="termValue" add @add-click="handleAddItem" />
    </form>
  </div>
</template>
