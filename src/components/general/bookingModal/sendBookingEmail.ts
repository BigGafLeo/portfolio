import emailjs from '@emailjs/browser';

const generateGoogleCalendarLink = (formData: {
  name: string;
  email?: string;
  phone?: string;
  subject: string;
  dateStart: string;
  dateEnd: string;
}) => {
  const baseUrl = 'https://calendar.google.com/calendar/render';
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: formData.subject,
    details: `Meeting with ${formData.name}\nEmail: ${formData.email || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}`,
    dates: `${formData.dateStart}/${formData.dateEnd}`, // ✅ Teraz przekazujemy start i koniec spotkania
    location: 'Online',
  });

  return `${baseUrl}?${params.toString()}`;
};

export const sendBookingEmail = async (formData: {
  name: string;
  email?: string;
  phone?: string;
  subject: string;
  dateStart: string;
  dateEnd: string;
}) => {
  const googleCalendarLink = generateGoogleCalendarLink(formData);

  const templateParams = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    phone: formData.phone,
    dateStart: formData.dateStart,
    dateEnd: formData.dateEnd,
    calendar_url: googleCalendarLink, // ✅ Dodajemy link do Google Calendar
  };

  try {
    const response = await emailjs.send(
      'service_dmtzk5z',
      'template_o9y46qq',
      templateParams,
      'zzyOLYJ1_HbG2JVIT',
    );
    return { success: true, response };
  } catch (error) {
    console.log('Error sending email: ', error);
    return { success: false, error };
  }
};
