export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  additional?: string;
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

    case 'phone':
      if (!/^\+\d{1,3}\d{7,12}$/.test(value)) {
        return 'Phone number must start with a country code (+XX) and contain only digits.';
      }
      if (value.length < 10 || value.length > 15) {
        return 'Phone number must be between 10 and 15 characters long.';
      }
      break;

    case 'subject':
      if (value.length < 2)
        return 'Subject must be at least 2 characters long.';
      break;

    case 'additional':
      if (value.trim().length === 0) return 'Message cannot be empty.';
      break;

    default:
      return undefined;
  }
  return undefined;
};
