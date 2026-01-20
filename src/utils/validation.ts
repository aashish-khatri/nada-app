// Form validation utilities

export const validatePhoneNumber = (phone: string): boolean => {
  // Indian mobile numbers: starts 6-9 and 10 digits total
  const cleaned = phone.replace(/\s+/g, '');
  return /^[6-9]\d{9}$/.test(cleaned);
};

export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};

export const validateOTP = (otp: string): boolean => {
  return /^\d{6}$/.test(otp);
};

export const calculateAge = (dateOfBirth: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - dateOfBirth.getFullYear();
  const monthDiff = today.getMonth() - dateOfBirth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
    age--;
  }

  return age;
};

export const formatHeight = (feet: number, inches: number): string => {
  return `${feet}'${inches}"`;
};

export const formatPhoneNumber = (phone: string): string => {
  // Format: +91 98765 43210
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return phone;
};
