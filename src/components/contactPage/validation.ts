export interface ValidationErrors {
  name?: string;
  email?: string;
  message?: string;
  subject?: string;
}

export const validateForm = (
  field: string,
  value: string,
): string | undefined => {
  switch (field) {
    case 'name':
      if (!/^[A-Za-z\s]+$/.test(value))
        return 'Name can only contain letters and spaces.';
      if (value.length < 2) return 'Name must be at least 2 characters long.';
      break;

    case 'email':
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        return 'Invalid email format.';
      break;

    case 'subject':
      if (value.length < 2)
        return 'Subject must be at least 2 characters long.';
      break;

    case 'message':
      if (value.trim().length === 0) return 'Message cannot be empty.';
      break;

    default:
      return undefined;
  }
  return undefined;
};
