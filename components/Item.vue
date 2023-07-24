<script setup lang="ts">
defineProps<{
  item: { title: string; id: string; status: string; createdAt: string };
}>();
const emit = defineEmits(["edit", "delete"]);
</script>

<template>
  <div class="relative bg-white border mb-2 p-4 rounded flex gap-2 group">
    <div class="truncate">
      <p class="truncate">
        {{ item.title }}
      </p>

      <p class="text-xs mt-2">
        Created:{{ new Date(item.createdAt).toLocaleDateString() }}
      </p>
    </div>
    <div
      class="absolute right-2 bg-white p-2 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-200"
    >
      <button @click="emit('edit')">Edit</button>
      <button @click="emit('delete')">Delete</button>
    </div>
  </div>
</template>
