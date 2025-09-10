
import { Facebook, Instagram, Mail, MapPin, Phone, Send} from "lucide-react";
import { useState } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const eMail = 'minhnghia2010200500@gmail.com@gmail.com';
            
            const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
            const body = encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
            );
            const mailtoLink = `mailto:${eMail}?subject=${subject}&body=${body}`;
            
            window.location.href = mailtoLink;
            
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            
            alert("Email client opened! Please send the email from your email app.");
        } catch (error) {
            console.error('Error:', error);
            alert("There was an error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <RevealOnScroll>
        <section id="contact" className="py-20 px-4 relative min-h-dvh">
            <div className="container max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl mb-4 text-center font-bold">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    If you have any questions or just want to say hi, feel free to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-xl font-semibold mb-6"> Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left space-y-1">
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:minhnghia2010200500@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">minhnghia2010200500@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left space-y-1">
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-890</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div className="text-left space-y-1">
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-muted-foreground">Hanoi, VietNam</p>
                                </div>
                            </div>

                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.instagram.com/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors"><Instagram /></a>
                                <a href="https://www.facebook.com/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors"><Facebook /></a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="name" 
                                    required 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="peer w-full border-b-2 caret-primary border-secondary bg-transparent px-2 pt-6 pb-2 text-base text-foreground placeholder-transparent focus:border-primary focus:outline-none transition-colors duration-200" 
                                    placeholder="Your Name"
                                    autoComplete="off"
                                />
                                <label 
                                    htmlFor="name" 
                                    className="absolute left-2 top-4 text-muted-foreground text-base transition-all duration-200 pointer-events-none
                                        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground
                                        peer-focus:-top-1 peer-focus:text-sm peer-focus:text-primary
                                        peer-not-placeholder-shown:-top-1 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-primary"
                                >
                                    Your Name
                                </label>
                            </div>

                            <div className="relative">
                                <input 
                                    type="email" 
                                    id="email" 
                                    required 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="peer w-full border-b-2 caret-primary border-secondary bg-transparent px-2 pt-6 pb-2 text-base text-foreground placeholder-transparent focus:border-primary focus:outline-none transition-colors duration-200" 
                                    placeholder="Your Email"
                                    autoComplete="off"
                                />
                                <label 
                                    htmlFor="email" 
                                    className="absolute left-2 top-4 text-muted-foreground text-base transition-all duration-200 pointer-events-none
                                        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground
                                        peer-focus:-top-1 peer-focus:text-sm peer-focus:text-primary
                                        peer-not-placeholder-shown:-top-1 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-primary"
                                >
                                    Your Email
                                </label>
                            </div>

                            <div className="relative">
                                <input 
                                    type="text" 
                                    id="subject" 
                                    required 
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    autoComplete="off"
                                    className="peer w-full border-b-2 caret-primary border-secondary bg-transparent px-2 pt-6 pb-2 text-base text-foreground placeholder-transparent focus:border-primary focus:outline-none transition-colors duration-200" 
                                    placeholder="Subject"
                                />
                                <label 
                                    htmlFor="subject" 
                                    className="absolute left-2 top-4 text-muted-foreground text-base transition-all duration-200 pointer-events-none
                                        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground
                                        peer-focus:-top-1 peer-focus:text-sm peer-focus:text-primary
                                        peer-not-placeholder-shown:-top-1 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-primary"
                                >
                                    Subject
                                </label>
                            </div>

                            <div className="relative">
                                <textarea 
                                    id="message" 
                                    required 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    autoComplete="off"
                                    className="peer w-full border-b-2 caret-primary border-secondary bg-transparent px-2 pt-6 pb-2 text-base text-foreground placeholder-transparent focus:border-primary focus:outline-none resize-none transition-colors duration-200" 
                                    placeholder="Your Message"
                                ></textarea>
                                <label 
                                    htmlFor="message" 
                                    className="absolute left-2 top-4 text-muted-foreground text-base transition-all duration-200 pointer-events-none
                                        peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-muted-foreground
                                        peer-focus:-top-1 peer-focus:text-sm peer-focus:text-primary
                                        peer-not-placeholder-shown:-top-1 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-primary"
                                >
                                    Your Message
                                </label>
                            </div>

                            <button type="submit" className="w-full cosmic-button mt-8 flex items-center justify-center gap-2" disabled={isSubmitting}>
                                {isSubmitting ? "Sending...": (<>Send Message <Send size={16} /></>)}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </RevealOnScroll>
    );
}

export default ContactSection;