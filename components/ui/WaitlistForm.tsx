'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle2, User, Hash, Users, Mail } from 'lucide-react';
import { Button } from './Button';
import { submitToAirtable } from '@/lib/airtable';

interface FormData {
  name: string;
  age: string;
  gender: string;
  contact: string;
}

export function WaitlistForm() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    gender: '',
    contact: '',
  });

  const totalSteps = 4;

  // Auto-focus on step change
  useEffect(() => {
    const input = document.querySelector('input:not([type="hidden"])') as HTMLInputElement;
    if (input) {
      setTimeout(() => input.focus(), 100);
    }
  }, [step]);

  const handleNext = () => {
    if (!isStepValid()) return;

    setIsAnimating(true);
    setTimeout(() => {
      if (step < totalSteps) {
        setStep(step + 1);
      } else {
        handleSubmit();
      }
      setIsAnimating(false);
    }, 150);
  };

  const handleBack = () => {
    if (step > 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setStep(step - 1);
        setIsAnimating(false);
      }, 150);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const result = await submitToAirtable(formData);

      if (result.success) {
        console.log('Successfully submitted to Airtable:', result.record);
        setIsSubmitted(true);
      } else {
        console.error('Failed to submit:', result.error);
        alert('There was an error submitting your information. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.name.trim().length > 0;
      case 2:
        return formData.age.trim().length > 0 && !isNaN(Number(formData.age)) && Number(formData.age) > 0;
      case 3:
        return formData.gender.length > 0;
      case 4:
        return formData.contact.trim().length > 0 && (formData.contact.includes('@') || /^\d{10,}$/.test(formData.contact.replace(/\D/g, '')));
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-lg mx-auto px-3 sm:px-4 md:px-0 animate-fade-in">
        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-large border border-stone-200">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-burnt-orange/10 to-burnt-orange/20 rounded-full mb-4 sm:mb-5 animate-scale-in">
              <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-burnt-orange" strokeWidth={2.5} />
            </div>
            <h3 className="text-[1.375rem] sm:text-[1.5rem] md:text-[1.75rem] font-bold text-charcoal mb-2 tracking-tight">You're on the list!</h3>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed mb-5 sm:mb-6 px-2">
              Thank you for joining. We'll be in touch soon with exclusive early access.
            </p>
            <Button
              variant="secondary"
              onClick={() => {
                setIsSubmitted(false);
                setStep(1);
                setFormData({ name: '', age: '', gender: '', contact: '' });
              }}
              className="text-sm sm:text-base"
            >
              Submit Another
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Step metadata for better UX
  const stepInfo = [
    { icon: User, label: 'Personal Info', field: 'name' },
    { icon: Hash, label: 'Age', field: 'age' },
    { icon: Users, label: 'Identity', field: 'gender' },
    { icon: Mail, label: 'Contact', field: 'contact' },
  ];

  return (
    <div className="max-w-lg mx-auto px-3 sm:px-4 md:px-0 animate-fade-in-up animation-delay-300">
      <form
        className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-stone-300/50 transition-all duration-500 hover:shadow-[0_16px_48px_rgb(234,88,12,0.15)]"
        aria-label="Waitlist signup form"
        onSubmit={(e) => {
          e.preventDefault();
          handleNext();
        }}
      >
        {/* Enhanced Progress Bar with Icons */}
        <div className="mb-5 sm:mb-6" role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={totalSteps} aria-label={`Step ${step} of ${totalSteps}`}>
          <div className="relative flex items-center mb-3">
            {/* Background line */}
            <div className="absolute left-[5%] right-[5%] h-0.5 bg-stone-200">
              <div
                className="h-full bg-burnt-orange transition-all duration-500"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              />
            </div>

            {/* Step circles */}
            <div className="relative w-full flex justify-between px-[2%]">
              {[1, 2, 3, 4].map((stepNum) => {
                const StepIcon = stepInfo[stepNum - 1].icon;
                const isActive = stepNum === step;
                const isCompleted = stepNum < step;

                return (
                  <div key={stepNum} className="flex flex-col items-center relative">
                    <div
                      className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isCompleted
                          ? 'bg-burnt-orange text-white'
                          : isActive
                          ? 'bg-burnt-orange text-white shadow-lg shadow-burnt-orange/30'
                          : 'bg-stone-100 text-stone-400'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem] md:w-5 md:h-5" strokeWidth={2.5} />
                      ) : (
                        <StepIcon className="w-4 h-4 sm:w-[1.125rem] sm:h-[1.125rem] md:w-5 md:h-5" strokeWidth={2} />
                      )}
                    </div>
                    {isActive && (
                      <span className="absolute top-10 sm:top-11 md:top-12 text-[9px] sm:text-[10px] font-semibold text-burnt-orange whitespace-nowrap">
                        {stepInfo[stepNum - 1].label}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <p className="text-xs font-medium text-stone-400 text-center mt-7 sm:mt-8">
            Step {step} of {totalSteps}
          </p>
        </div>

        {/* Step Content */}
        <div className={`min-h-[150px] sm:min-h-[165px] flex items-center transition-opacity duration-200 ${isAnimating ? 'opacity-50' : 'opacity-100'}`}>
          {/* Step 1: Name */}
          {step === 1 && (
            <div className="animate-slide-in w-full" key="step1">
              <label className="block mb-2 sm:mb-3 text-sm sm:text-base font-bold text-charcoal">
                What's your name?
              </label>
              <p className="text-xs sm:text-sm text-stone-500 mb-2.5 sm:mb-3">
                We'll use this to personalize your experience
              </p>
              <div className="relative">
                <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-stone-400">
                  <User className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <input
                  type="text"
                  id="name-input"
                  name="name"
                  value={formData.name}
                  onChange={(e) => updateFormData('name', e.target.value)}
                  placeholder="e.g. Alex Johnson"
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border-2 border-stone-200 focus:border-burnt-orange focus:ring-4 focus:ring-burnt-orange/10 outline-none transition-all duration-200 text-sm sm:text-base bg-white placeholder:text-stone-400 shadow-sm hover:border-stone-300"
                  autoFocus
                  required
                  aria-required="true"
                  aria-label="Enter your full name"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && isStepValid()) {
                      handleNext();
                    }
                  }}
                />
              </div>
            </div>
          )}

          {/* Step 2: Age */}
          {step === 2 && (
            <div className="animate-slide-in w-full" key="step2">
              <label className="block mb-2 sm:mb-3 text-sm sm:text-base font-bold text-charcoal">
                How old are you?
              </label>
              <p className="text-xs sm:text-sm text-stone-500 mb-2.5 sm:mb-3">
                This helps us create age-appropriate connections
              </p>
              <div className="relative">
                <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-stone-400">
                  <Hash className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => updateFormData('age', e.target.value)}
                  placeholder="e.g. 25"
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border-2 border-stone-200 focus:border-burnt-orange focus:ring-4 focus:ring-burnt-orange/10 outline-none transition-all duration-200 text-sm sm:text-base bg-white placeholder:text-stone-400 shadow-sm hover:border-stone-300"
                  autoFocus
                  min="13"
                  max="120"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && isStepValid()) {
                      handleNext();
                    }
                  }}
                />
              </div>
            </div>
          )}

          {/* Step 3: Gender */}
          {step === 3 && (
            <div className="animate-slide-in w-full" key="step3">
              <label className="block mb-2 sm:mb-3 text-sm sm:text-base font-bold text-charcoal">
                What's your gender?
              </label>
              <p className="text-xs sm:text-sm text-stone-500 mb-2.5 sm:mb-3">
                Help us create an inclusive community
              </p>
              <div className="space-y-2 sm:space-y-2.5">
                {['Male', 'Female', 'Non-binary', 'Prefer not to say'].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      updateFormData('gender', option);
                      setTimeout(handleNext, 400);
                    }}
                    className={`group w-full px-3 sm:px-4 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border-2 text-left text-xs sm:text-sm font-semibold transition-all duration-200 relative overflow-hidden ${
                      formData.gender === option
                        ? 'border-burnt-orange bg-gradient-to-r from-burnt-orange/10 to-burnt-orange/5 text-burnt-orange-dark shadow-md scale-[1.02]'
                        : 'border-stone-200 hover:border-burnt-orange/40 text-stone-700 hover:bg-stone-50 hover:scale-[1.01]'
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-between">
                      {option}
                      {formData.gender === option && (
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-burnt-orange animate-scale-in" strokeWidth={2.5} />
                      )}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Contact */}
          {step === 4 && (
            <div className="animate-slide-in w-full" key="step4">
              <label className="block mb-2 sm:mb-3 text-sm sm:text-base font-bold text-charcoal">
                How can we reach you?
              </label>
              <p className="text-xs sm:text-sm text-stone-500 mb-2.5 sm:mb-3">
                We'll send you exclusive early access details
              </p>
              <div className="relative">
                <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-stone-400">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) => updateFormData('contact', e.target.value)}
                  placeholder="email@example.com"
                  className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-3.5 rounded-lg sm:rounded-xl border-2 border-stone-200 focus:border-burnt-orange focus:ring-4 focus:ring-burnt-orange/10 outline-none transition-all duration-200 text-sm sm:text-base bg-white placeholder:text-stone-400 shadow-sm hover:border-stone-300"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && isStepValid()) {
                      handleNext();
                    }
                  }}
                />
                {formData.contact && isStepValid() && (
                  <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-green-500">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 animate-scale-in" strokeWidth={2.5} />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-2 sm:gap-3 mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-stone-100">
          {step > 1 && (
            <Button
              variant="secondary"
              onClick={handleBack}
              disabled={isAnimating}
              className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 disabled:opacity-50 text-sm sm:text-base"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden xs:inline">Back</span>
            </Button>
          )}
          <Button
            variant="primary"
            onClick={handleNext}
            disabled={!isStepValid() || isAnimating || isSubmitting}
            className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 font-semibold transition-all duration-300 text-sm sm:text-base ${
              !isStepValid() || isAnimating || isSubmitting ? 'opacity-40 cursor-not-allowed' : 'hover:shadow-warm-lg hover:-translate-y-0.5'
            }`}
          >
            {isSubmitting ? (
              <>
                <span>Submitting...</span>
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              </>
            ) : step === totalSteps ? (
              <>
                <span>Join Waitlist</span>
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
              </>
            ) : (
              <>
                <span>Continue</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
