import emailjs from '@emailjs/browser';

export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const templateParams = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  try {
    const response = await emailjs.send(
      'service_dmtzk5z',
      'template_qq5df0o',
      templateParams,
      'zzyOLYJ1_HbG2JVIT',
    );
    return { success: true, response };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};
