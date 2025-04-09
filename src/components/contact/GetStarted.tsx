'use client';

import React, { useState } from 'react';
import styles from '../../styles/GetStarted.module.css';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const GetStarted: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would submit to an API here
    console.log('Form submitted:', formData);
  };
  
  return (
    <section id="get-started" className={styles.section}>
      {/* Background Elements */}
      <div className={styles.bgGradient1}></div>
      <div className={styles.bgGradient2}></div>
      <div className={styles.borderTop}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleHighlight}>GET</span> STARTED
          </h2>
          <div className={styles.divider}></div>
          <p className={styles.description}>
            Get in touch to start your journey towards stress-free content creation. Fill out the 
            form, and let&apos;s discuss how we can help you share your insights with the world.
          </p>
        </div>
        
        <div className={styles.contentGrid}>
          <div className={styles.leftContent}>
            <h3 className={styles.sectionTitle}>
              What to expect:
              <span className={styles.titleUnderline}></span>
            </h3>
            
            <div className={styles.stepsContainer}>
              <div className={styles.stepItem}>
                <div className={styles.stepNumberWrapper}>
                  <div className={styles.stepNumberGlow}></div>
                  <div className={styles.stepNumberContainer}>
                    <span className={styles.stepNumber}>1</span>
                  </div>
                </div>
                <div>
                  <p className={styles.stepText}>We&apos;ll schedule a free 30-minute consultation</p>
                </div>
              </div>
              
              <div className={styles.stepItem}>
                <div className={styles.stepNumberWrapper}>
                  <div className={styles.stepNumberGlow}></div>
                  <div className={styles.stepNumberContainer}>
                    <span className={styles.stepNumber}>2</span>
                  </div>
                </div>
                <div>
                  <p className={styles.stepText}>Get to know our team and discuss your specific needs</p>
                </div>
              </div>
              
              <div className={styles.stepItem}>
                <div className={styles.stepNumberWrapper}>
                  <div className={styles.stepNumberGlow}></div>
                  <div className={styles.stepNumberContainer}>
                    <span className={styles.stepNumber}>3</span>
                  </div>
                </div>
                <div>
                  <p className={styles.stepText}>Create a personalized content plan</p>
                </div>
              </div>
              
              <div className={styles.stepItem}>
                <div className={styles.stepNumberWrapper}>
                  <div className={styles.stepNumberGlow}></div>
                  <div className={styles.stepNumberContainer}>
                    <span className={styles.stepNumber}>4</span>
                  </div>
                </div>
                <div>
                  <p className={styles.stepText}>Begin your journey to effortless content creation</p>
                </div>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <a 
                href="https://linkedin.com" 
                className={styles.socialLink} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                className={styles.socialLink} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.037 10.037 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                className={styles.socialLink} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className={styles.rightContent}>
            <div className={styles.formWrapper}>
              <div className={styles.formGlow}></div>
              <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                  <h3 className={styles.formTitle}>
                    Get in Touch
                    <span className={styles.formTitleUnderline}></span>
                  </h3>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Full Name</label>
                    <div className={styles.inputWrapper}>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={styles.input}
                      />
                      <div className={styles.inputUnderline}></div>
                    </div>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email Address</label>
                    <div className={styles.inputWrapper}>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.input}
                      />
                      <div className={styles.inputUnderline}></div>
                    </div>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="company" className={styles.label}>Company (Optional)</label>
                    <div className={styles.inputWrapper}>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={handleChange}
                        className={styles.input}
                      />
                      <div className={styles.inputUnderline}></div>
                    </div>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Message</label>
                    <div className={styles.inputWrapper}>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className={`${styles.input} ${styles.textarea}`}
                      ></textarea>
                      <div className={styles.inputUnderline}></div>
                    </div>
                  </div>
                  
                  <div className={styles.submitBtnWrapper}>
                    <div className={styles.submitBtnGlow}></div>
                    <button
                      type="submit"
                      className={styles.submitBtn}
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted; 
