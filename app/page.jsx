'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function OptiSecLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { title: 'Evaluación de Seguridad', desc: 'Análisis completo de tu postura de seguridad', icon: '🔍' },
    { title: 'Análisis de Vulnerabilidades', desc: 'Identificación de debilidades en tu infraestructura', icon: '⚠️' },
    { title: 'Hardening de Sistemas', desc: 'Fortalecimiento de tus servidores y aplicaciones', icon: '🛡️' },
    { title: 'Protección de Endpoints', desc: 'Seguridad en dispositivos corporativos', icon: '💻' },
    { title: 'Seguridad de Red', desc: 'Monitoreo y protección de tu infraestructura', icon: '🌐' },
    { title: 'Monitoreo de Logs', desc: 'Vigilancia continua de eventos de seguridad', icon: '📊' },
    { title: 'Respuesta ante Incidentes', desc: 'Acción rápida ante amenazas', icon: '🚨' },
    { title: 'Respaldo y Recuperación', desc: 'Protección y continuidad del negocio', icon: '💾' },
    { title: 'Seguridad Microsoft 365', desc: 'Protección en nube empresarial', icon: '☁️' },
    { title: 'Capacitación de Equipos', desc: 'Concientización en ciberseguridad', icon: '👥' },
  ];

  const benefits = [
    { num: '98%', label: 'Tasa de detección de amenazas' },
    { num: '24h', label: 'Respuesta a incidentes' },
    { num: '10+', label: 'Empresas protegidas' },
    { num: '99.9%', label: 'Disponibilidad de servicios' },
  ];

  const coverage = [
    'Concepción',
    'San Pedro de la Paz',
    'Talcahuano',
    'Coronel',
    'Hualpén',
    'Chiguayante',
  ];

  const testimonials = [
    {
      name: 'Gerente de IT, Empresa Retail',
      text: 'OptiSec realizó una evaluación completa que identificó vulnerabilidades críticas. Su atención personalizada fue excepcional.',
      rating: 5,
    },
    {
      name: 'Dueño, Consultoría Profesional',
      text: 'Finalmente tenemos seguridad real. Nicolás entiende nuestras necesidades específicas como PYME.',
      rating: 5,
    },
    {
      name: 'Directora Administrativa, Clínica Privada',
      text: 'El servicio de monitoreo nos ha dado tranquilidad. Recomendamos OptiSec sin dudarlo.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Fondo decorativo animado */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-black"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" style={{animationDuration: '12s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-black">
              ◆
            </div>
            <div>
              <div className="font-bold text-lg">OptiSec</div>
              <div className="text-xs text-cyan-400">Blue Team Defense</div>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#servicios" className="hover:text-cyan-400 transition">Servicios</a>
            <a href="#por-que" className="hover:text-cyan-400 transition">Por qué OptiSec</a>
            <a href="#contacto" className="hover:text-cyan-400 transition">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        {/* Grid de fondo animado */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(6, 182, 212, .05) 25%, rgba(6, 182, 212, .05) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .05) 75%, rgba(6, 182, 212, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, .05) 25%, rgba(6, 182, 212, .05) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, .05) 75%, rgba(6, 182, 212, .05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium backdrop-blur-sm">
              🛡️ Ciberseguridad Defensiva para PYMEs
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Protegemos tu empresa
            </span>
            <br/>
            <span className="text-white">antes de que ocurra el incidente</span>
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            OptiSec ayuda a empresas y PYMEs a prevenir ataques, fortalecer su infraestructura y mejorar su seguridad digital mediante servicios especializados de ciberseguridad defensiva (Blue Team).
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#contacto" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105">
              Solicitar evaluación
            </a>
            <a href="https://wa.me/56912345678" className="px-8 py-4 border-2 border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition backdrop-blur">
              Hablar por WhatsApp
            </a>
          </div>

          {/* Indicadores */}
          <div className="grid grid-cols-4 gap-4 pt-12 max-w-2xl mx-auto text-sm">
            {benefits.map((b, i) => (
              <div key={i} className="p-4 rounded-lg bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-cyan-500/20 backdrop-blur">
                <div className="text-2xl font-bold text-cyan-400">{b.num}</div>
                <div className="text-xs text-slate-400 mt-1">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-2xl bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-cyan-500/20 backdrop-blur-xl p-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl -z-10"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Nicolás Ormeño
                <br/>
                <span className="text-cyan-400 text-2xl">Fundador de OptiSec</span>
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Estudiante avanzado de Ciberseguridad en Universidad Mayor con enfoque especializado en defensas (Blue Team), infraestructura segura y respuesta ante incidentes.
              </p>
              <div className="space-y-3 text-slate-300">
                <p className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span>Atención personalizada y cercana</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span>Visión preventiva y defensiva</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span>Soluciones adaptadas a PYMEs</span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-cyan-400">✓</span>
                  <span>Lenguaje claro sin exceso técnico</span>
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center backdrop-blur overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent"></div>
                <svg className="w-48 h-48 text-cyan-400/40" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS SECTION */}
      <section id="servicios" className="relative max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-4">Servicios Especializados</h2>
        <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">Blue Team defensivo adaptado a tus necesidades</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group rounded-xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-cyan-500/20 p-6 hover:border-cyan-400/50 transition backdrop-blur cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20"
              onMouseEnter={() => setActiveService(idx)}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition">{service.title}</h3>
              <p className="text-slate-400 text-sm">{service.desc}</p>
              <div className="mt-4 h-1 bg-gradient-to-r from-cyan-500 to-transparent w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* POR QUE OPTISEC */}
      <section id="por-que" className="relative max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">¿Por qué OptiSec?</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-900/40 to-transparent border border-cyan-500/20 backdrop-blur hover:border-cyan-400/50 transition">
              <div className="text-3xl font-bold text-cyan-400 mb-2">✓</div>
              <h3 className="font-bold mb-2">Atención Personalizada</h3>
              <p className="text-slate-400 text-sm">Entiendemos tu contexto específico como PYME local</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-900/40 to-transparent border border-cyan-500/20 backdrop-blur hover:border-cyan-400/50 transition">
              <div className="text-3xl font-bold text-cyan-400 mb-2">✓</div>
              <h3 className="font-bold mb-2">Soporte Local</h3>
              <p className="text-slate-400 text-sm">Disponible en Concepción y alrededores</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-900/40 to-transparent border border-cyan-500/20 backdrop-blur hover:border-cyan-400/50 transition">
              <div className="text-3xl font-bold text-cyan-400 mb-2">✓</div>
              <h3 className="font-bold mb-2">Enfoque Preventivo</h3>
              <p className="text-slate-400 text-sm">Protección antes del incidente, no después</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/40 to-transparent border border-cyan-500/20 backdrop-blur hover:border-cyan-400/50 transition">
              <div className="text-3xl font-bold text-blue-400 mb-2">✓</div>
              <h3 className="font-bold mb-2">Soluciones Realistas</h3>
              <p className="text-slate-400 text-sm">Implementación práctica adaptada a tu presupuesto</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/40 to-transparent border border-cyan-500/20 backdrop-blur hover:border-cyan-400/50 transition">
              <div className="text-3xl font-bold text-blue-400 mb-2">✓</div>
              <h3 className="font-bold mb-2">Lenguaje Claro</h3>
              <p className="text-slate-400 text-sm">Sin exceso de tecnicismos, entendible para directivos</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/40 to-transparent border border-cyan-500/20 backdrop-blur hover:border-cyan-400/50 transition">
              <div className="text-3xl font-bold text-blue-400 mb-2">✓</div>
              <h3 className="font-bold mb-2">Acompañamiento Continuo</h3>
              <p className="text-slate-400 text-sm">Seguimiento y mejora constante de tu seguridad</p>
            </div>
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <section className="relative max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Cobertura Regional</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {coverage.map((city, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/20 text-center hover:border-cyan-400/50 transition backdrop-blur">
              <span className="text-cyan-400 font-semibold">{city}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div key={idx} className="p-8 rounded-xl bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-cyan-500/20 backdrop-blur">
              <div className="flex gap-1 mb-4">
                {[...Array(test.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-slate-300 mb-4 italic">"{test.text}"</p>
              <p className="text-sm text-cyan-400 font-semibold">{test.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA CONTACT */}
      <section id="contacto" className="relative max-w-4xl mx-auto px-6 py-20">
        <div className="rounded-2xl bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 backdrop-blur-xl p-12 text-center space-y-6">
          <h2 className="text-4xl font-bold">¿Listo para fortalecer tu seguridad?</h2>
          <p className="text-xl text-slate-300">Contacta hoy para una evaluación sin compromiso</p>
          
          <div className="space-y-4 pt-4">
            <a href="mailto:contacto@optisec.cl" className="block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition">
              📧 contacto@optisec.cl
            </a>
            <a href="https://wa.me/56912345678" className="block px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition">
              💬 Mensaje por WhatsApp
            </a>
            <a href="https://instagram.com/optisec.cl" className="block px-8 py-4 border-2 border-cyan-500/50 rounded-lg font-semibold hover:border-cyan-400 transition">
              📱 @optisec.cl
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative max-w-7xl mx-auto px-6 py-12 border-t border-cyan-500/20">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-bold text-lg mb-2">OptiSec</div>
            <p className="text-slate-400 text-sm">Ciberseguridad defensiva para PYMEs</p>
          </div>
          <div>
            <p className="text-sm font-semibold mb-2 text-cyan-400">Servicios</p>
            <ul className="space-y-1 text-sm text-slate-400">
              <li>Blue Team Defense</li>
              <li>Evaluaciones</li>
              <li>Monitoreo 24/7</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold mb-2 text-cyan-400">Contacto</p>
            <p className="text-sm text-slate-400">Nicolás Ormeño - Fundador</p>
            <p className="text-sm text-cyan-400">contacto@optisec.cl</p>
          </div>
        </div>
        <div className="border-t border-cyan-500/20 pt-8 text-center text-sm text-slate-500">
          <p>© 2024 OptiSec. Todos los derechos reservados.</p>
          <p>Ciberseguridad defensiva profesional • Concepción, Chile</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/56912345678"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:shadow-green-500/50 hover:scale-110 transition z-40"
      >
        💬
      </a>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
          50% { box-shadow: 0 0 30px rgba(6, 182, 212, 0.6); }
        }
      `}</style>
    </div>
  );
}
