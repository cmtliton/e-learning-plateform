export default () => {
  // --- Basic Validation Rules ---
  const rules = {
    required: (value: any) => !!value || "Required.",
    minLength: (length: Number) => (value: any) =>
      (value && value.length >= length) || `Min ${length} characters`,
    email: (value: any) => {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(value) || "Invalid e-mail.";
    },
  };
  return rules;
};
