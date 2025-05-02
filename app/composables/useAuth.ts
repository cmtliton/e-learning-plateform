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

  return {
    user,
    login,
    logout,
  };
};
