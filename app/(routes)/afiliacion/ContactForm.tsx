
import { buttonVariants } from '@/components/ui/button';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("mblrdvov");
    if (state.succeeded) {
      return <p>Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.</p>;
    }
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div >
          <label htmlFor="name" className="block text-gray-700">
            Nombre Completo
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700">
            Número de Teléfono
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
            required
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700">
            Mensaje Adicional
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-700"
            rows={3}
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>
        <button
          type="submit"
          className={buttonVariants()}
          disabled={state.submitting}
        >
          Enviar Solicitud
        </button>
      </form>
    );
  }

  export default ContactForm;