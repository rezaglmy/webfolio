import React from 'react';
import { useForm } from 'react-hook-form';

import { Section } from '@/common/components';
import type { ContactFormData } from '@/common/types';
import { Button } from '@/common/ui';

type Props = {
  ref: HTMLDivElement | null;
};

const Contact = React.forwardRef<HTMLDivElement, Props>((_props, ref) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const requiredFieldErrorMsg = 'This field is required';
  const [loading, setLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
  });

  async function onSubmit(data: ContactFormData) {
    setLoading(true);
    const result = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    setLoading(false);
    if (result?.ok) {
      reset();
    }
  }

  return (
    <Section ref={ref}>
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">CONTACT</h1>
        <p>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>

        <form className="mt-8 md:w-2/5" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-black"
            >
              Full Name
            </label>
            <input
              type="text"
              aria-invalid={errors.name}
              aria-describedby="name-error"
              autoComplete="name"
              className="w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              placeholder="Full Name"
              {...register('name', { required: requiredFieldErrorMsg })}
            />
            {errors.name && (
              <span id="name-error" className="formValidationError">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-black"
            >
              Email Address
            </label>
            <input
              type="email"
              aria-invalid={errors.email}
              aria-describedby="email-error"
              autoComplete="name"
              className="w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              placeholder="Email"
              {...register('email', {
                required: requiredFieldErrorMsg,
                pattern: {
                  value: emailRegex,
                  message:
                    'A valid email address id required. Example: name@domain.com.',
                },
              })}
            />
            {errors.email && (
              <span id="email-error" className="formValidationError">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-black"
            >
              Message
            </label>
            <textarea
              rows="3"
              aria-invalid={errors.message}
              aria-describedby="message-error"
              className="w-full resize-none rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              {...register('message', {
                required: requiredFieldErrorMsg,
              })}
            ></textarea>
            {errors.message && (
              <span id="message-error" className="formValidationError">
                {errors.message.message}
              </span>
            )}
          </div>
          <div>
            <Button type="primary" disabled={loading}>
              Submit
            </Button>
          </div>
        </form>
      </div>

      <style jsx>
        {`
          .formValidationError {
            @apply text-red-500;
          }
        `}
      </style>
    </Section>
  );
});

Contact.displayName = 'Contact';

export { Contact };
