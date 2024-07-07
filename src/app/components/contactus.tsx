'use client'

import React, { useState } from "react";

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [successMessageOpacity, setSuccessMessageOpacity] = useState(0);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/sendMail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setFormData({ name: '', email: '', message: '' });
                
                // Show the success message with animation and then hide it
                setShowSuccessMessage(true);
                setSuccessMessageOpacity(1);
                setTimeout(() => {
                    setSuccessMessageOpacity(0);
                    setTimeout(() => setShowSuccessMessage(false), 500); // Wait for the transition to complete
                }, 2000);
            } else {
                alert('Error sending message.');
            }
        } catch (error) {
            console.error('There was an error sending the message.', error);
        }
    }

    return (
        <div className="bg-white flex flex-col justify-center">
              {showSuccessMessage &&
                <div 
                    style={{ opacity: successMessageOpacity, transition: 'opacity 0.5s' }}
                    className="fixed top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white text-center rounded-2xl px-4 py-4 w-96 z-50">
                    Message sent successfully!
                </div>
            }
            <div className="flex-1 flex flex-col justify-center items-center pt-16 lg:pt-12">
                <p className="mb-4 text-3xl text-black">Masz jakieś pytania?</p>
                <h2 className="text-2xl font-bold text-black">Napisz do mnie!</h2>

                <form className="flex flex-col gap-4 mt-2 px-10 lg:mt-6 min-w-full lg:min-w-[500px]" onSubmit={handleSubmit}>
                    <input
                        id="name"
                        name="name"
                        required
                        maxLength={128}
                        type='text'
                        placeholder="Imię"
                        className="transition-all ease-in-out delay-250 bg-white text-black outline-none border-2 border-black rounded-3xl px-8 py-2 focus:border-red-600"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        id='email'
                        name="email"
                        type='email'
                        required
                        maxLength={128}
                        placeholder="Twój adres email"
                        className="transition-all ease-in-out delay-250 bg-white text-black outline-none border-2 border-black rounded-3xl px-8 py-2 focus:border-red-600"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <textarea
                        id="message"
                        name="message"
                        required
                        maxLength={1048576}
                        placeholder="Dodatkowe informacje"
                        className="transition-all ease-in-out delay-250 bg-white text-black outline-none border-2 border-black rounded-3xl px-8 py-6 min-h-[16em] focus:border-red-600"
                        value={formData.message}
                        onChange={handleInputChange}
                    ></textarea>
                    <div className="text-center mt-8">
                        <button
                            type="submit"
                            className="animate-bounce transition-all ease-in-out delay-250 bg-black text-white border-2 border-black rounded-3xl px-8 py-2 w-1/2 hover:bg-white hover:text-black">
                            Wyślij
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;
