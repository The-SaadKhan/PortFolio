'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { PERSONAL_INFO } from '@/utils/constants'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>()
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const onSubmit = async (data: FormData) => {
    console.log('🚀 Form submitted with data:', data)
    
    try {
      setStatus('idle')
      
      // Log environment variables to check if they're loaded
      console.log('📧 EmailJS Configuration:', {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        allAvailable: !!(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && 
                        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && 
                        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      })
      
      // Check if environment variables exist
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        console.error('❌ Missing EmailJS environment variables!')
        setStatus('error')
        return
      }
      
      console.log('📤 Attempting to send email via EmailJS...')
      
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: PERSONAL_INFO.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      
      console.log('✅ Email sent successfully!', result)
      setStatus('success')
      reset()
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
      
    } catch (error: any) {
      console.error('❌ Email sending failed:', error)
      console.log('Error details:', {
        message: error?.message || 'Unknown error',
        status: error?.status || 'No status',
        text: error?.text || 'No error text'
      })
      setStatus('error')
      
      // Clear error message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg glass-effect border border-white/20 dark:border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Please enter a valid email'
                    }
                  })}
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg glass-effect border border-white/20 dark:border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg glass-effect border border-white/20 dark:border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg glass-effect border border-white/20 dark:border-white/10 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg"
                >
                  <AlertCircle className="h-5 w-5" />
                  <span>Failed to send message. Please try again or contact me directly.</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <motion.a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-4 p-4 glass-effect rounded-xl hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">{PERSONAL_INFO.email}</p>
                </div>
              </motion.a>

              <motion.a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center space-x-4 p-4 glass-effect rounded-xl hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                  <p className="text-gray-600 dark:text-gray-400">{PERSONAL_INFO.phone}</p>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href={`https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 glass-effect rounded-xl hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">WhatsApp</p>
                  <p className="text-gray-600 dark:text-gray-400">Connect with me on WhatsApp</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
