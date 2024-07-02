interface ILoading {
  loading: Ref<boolean>;
  showLoading: () => void;
  hideLoading: () => void;
}

export const useLoading = (): ILoading => {
  const loading = ref<boolean>(false);
  const showLoading = () => {
    loading.value = true;
  };
  const hideLoading = () => {
    loading.value = false;
  };
  return {
    loading,
    showLoading,
    hideLoading
  };
};
