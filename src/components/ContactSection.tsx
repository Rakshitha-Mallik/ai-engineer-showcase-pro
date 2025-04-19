import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { motion } from 'framer-motion';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = useCallback(async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Format email body with HTML formatting
      const emailBody = `
Name: ${values.name}
From: ${values.email}

${values.message}
      `.trim();
      
      // Create Gmail compose URL with pre-filled fields
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=rakshitham07@gmail.com&su=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open Gmail in a new window
      window.open(gmailUrl, '_blank');
      
      toast({
        title: "Email client opened",
        description: "Gmail compose window has been opened with your message.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to open Gmail. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }, [form, toast]);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "rakshitham07@gmail.com",
      link: "mailto:rakshitham07@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Bengaluru, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-gradient-to-b from-slate-100 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-purple-100/40 to-pink-100/40 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 animate-gradient-xy"></div>
      
      <div className="section-container relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Send me a message</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your name"
                            className="bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 text-slate-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 dark:text-red-400" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your email"
                            className="bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 text-slate-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 dark:text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Subject"
                          className="bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 text-slate-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 dark:text-red-400" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Your message"
                          className="min-h-[150px] bg-white dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 text-slate-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 dark:text-red-400" />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div 
            className="lg:pl-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Contact Information</h3>
            <p className="text-slate-600 dark:text-gray-300 mb-8">
              Feel free to reach out through any of the following channels. I typically respond within 24-48 hours.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start group"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="p-3 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-lg shadow-lg shadow-indigo-500/20 mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-white">{info.title}</h4>
                    <a 
                      href={info.link} 
                      className="text-slate-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-12 p-6 rounded-xl bg-white/70 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h4 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Connect with me</h4>
              <div className="flex space-x-4">
                {['github', 'linkedin'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    className="p-3 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-600/20 dark:via-indigo-600/20 dark:to-purple-600/20 rounded-full border border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 group"
                  >
                    <img 
                      src={`https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/${social}.svg`} 
                      alt={social} 
                      className="w-5 h-5 filter dark:invert opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
