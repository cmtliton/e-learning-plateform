export const useAuth = () => {
  const user = useSupabaseUser();
  const supabase = useSupabaseClient();
  const { query } = useRoute();
  const { auth } = supabase;

  const login = async (provider: any) => {
    const queryParams =
      query.redirectTo !== undefined ? `?redirectTo=${query.redirectTo}` : "";
    const redirectTo = `${window.location.origin}/confirm${queryParams}`;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: { redirectTo },
    });
    if (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    const { error } = await auth.signOut();
    if (error) {
      console.error(error);
      return true;
    }
    await navigateTo("/");
  };

  const name = computed(() => user.value?.user_metadata.full_name);
  const profile = computed(() =>
    user.value?.user_metadata.avatar_url !== undefined
      ? user.value?.user_metadata.avatar_url
      : "https://lh3.googleusercontent.com/a/ACg8ocIGyEMzmZQoA-rB038ib2nZi2McQxbilYvkLQ5upkUmwQ-o4k_H=s96-c"
  );
  const email = computed(() => user.value?.user_metadata.email);

  return {
    user,
    login,
    logout,
    name,
    profile,
    email,
  };
};
