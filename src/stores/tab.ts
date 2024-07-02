import { RouteLocationNormalized } from 'vue-router';
import { defineStore } from 'pinia';

export type RouteTag = Partial<RouteLocationNormalized>;

export const useTagsStore = defineStore('tags-store', () => {
  const cachedTags = ref<RouteTag[]>([]);

  const addTag = (tag: RouteTag) => {
    if (cachedTags.value.some(item => item.path === tag.path)) return;
    cachedTags.value.push(tag);
  };

  const removeTag = (tag: RouteTag) => {
    const index = cachedTags.value.findIndex(item => item.path === tag.path);
    cachedTags.value.splice(index, 1);
  };

  return {
    cachedTags,
    addTag,
    removeTag
  };
});

export type TagsStore = ReturnType<typeof useTagsStore>;
