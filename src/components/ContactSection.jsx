import {
  Facebook,
  Instagram,
  Link,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSumbit = async (e) => {
    e.preventDefault();

    setFormStatus({
      submitting: false,
      success: false,
      error: false,
      message: "",
    });
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );
      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Your message has been sent successfully!",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Something went wrong. Please try again later.",
      });
    }
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          If you have any questions or just want to say hi, feel free to reach
          out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <motion.div
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start space-x-4"
              >
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:kunthearoth007@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    kunthearoth007@gmail.com{" "}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start space-x-4"
              >
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+855714518078"
                    className="text-muted-foreground hover:text-primary transition-colors "
                  >
                    (+855) : 71-451-8078
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, translateX: "-100%" }}
                whileInView={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-start space-x-4"
              >
                <div className="p-3 rounded-full bg-primary/10 ">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a
                    href="https://www.google.com/maps/place/11%C2%B031'29.6%22N+104%C2%B052'39.4%22E/@11.5248499,104.8775133,55m/data=!3m1!1e3!4m4!3m3!8m2!3d11.524878!4d104.877621?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                    className="text-muted-foreground hover:text-primary transition-colors "
                  >
                    Phnom Penh, Cambodia
                  </a>
                </div>
              </motion.div>
            </div>

            <div className="pt-8 ">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/oum-kunthearoth-9b9601381"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://x.com/Kunthearoth_OUM" target="_blank">
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com/oum_kunthearoth/"
                  target="_blank"
                >
                  <Instagram />
                </a>
                <a
                  href="https://web.facebook.com/kunthearoth.oum/"
                  target="_blank"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, translateX: "100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSumbit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send Me A Message</h3>

            <form action="" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Oum Kunthearoth"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Oum.Kunthearoth@example.com"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I would like to..."
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                disabled={formStatus.submitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {formStatus.submitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
              {formStatus.message && (
                <div
                  className={`form-status ${
                    formStatus.success
                      ? "text-green-500 border bg-green-500/10 ring-1 ring-green-500/20 rounded-sm px-4 py-2"
                      : "text-red-500 border bg-red-500/10 ring-1 ring-red-500/20 rounded-sm px-4 py-2"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
