import emailjs from '@emailjs/browser'

class MailService {
    constructor() {
        let publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        emailjs.init(publicKey)
    }

    async send(formValues) {
        let serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        let templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        await emailjs.send(serviceId, templateId, formValues)
    }
}

export default MailService;