import Link from "next/link"
import { ArrowRight, Bell, CheckCircle, Lock, MessageCircle, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Shield className="h-6 w-6 text-emerald-600" />
            <span>Comunidad Segura</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Características
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Cómo Funciona
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Testimonios
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Iniciar Sesión
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Registrarse</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-28">
          <div className="container flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl">
              Construyendo comunidades más seguras juntos
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Conecta con tus vecinos, comparte alertas de seguridad y construye una comunidad más segura y unida.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Únete Ahora
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Cómo Funciona
              </Button>
            </div>
            <div className="mt-16 relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden border shadow-xl">
              <img
                src="/placeholder.svg?height=720&width=1280"
                alt="Plataforma Comunidad Segura"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Características Principales</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Herramientas diseñadas para mantener tu comunidad segura e informada.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background">
                <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900 mb-4">
                  <Bell className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Alertas en Tiempo Real</h3>
                <p className="text-muted-foreground">
                  Recibe notificaciones instantáneas sobre incidentes de seguridad en tu vecindario.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background">
                <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900 mb-4">
                  <MessageCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Comunicación Vecinal</h3>
                <p className="text-muted-foreground">
                  Chats grupales y foros para mantener conversaciones importantes con tus vecinos.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background">
                <div className="p-3 rounded-full bg-emerald-100 dark:bg-emerald-900 mb-4">
                  <Lock className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Verificación de Identidad</h3>
                <p className="text-muted-foreground">
                  Sistema seguro que verifica a los miembros para garantizar la confianza en la comunidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Cómo Funciona</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Tres simples pasos para comenzar a construir una comunidad más segura.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Regístrate</h3>
                <p className="text-muted-foreground">
                  Crea tu cuenta y verifica tu dirección para unirte a tu comunidad local.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Conéctate</h3>
                <p className="text-muted-foreground">
                  Invita a tus vecinos y forma parte de la red de seguridad comunitaria.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Colabora</h3>
                <p className="text-muted-foreground">
                  Comparte información, alertas y recursos para mantener segura tu comunidad.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Lo Que Dicen Nuestros Usuarios</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Historias reales de comunidades que han mejorado su seguridad.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border bg-background">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 mr-4"></div>
                  <div>
                    <h4 className="font-bold">María González</h4>
                    <p className="text-sm text-muted-foreground">Barrio San Miguel</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Desde que nuestra comunidad comenzó a usar esta plataforma, hemos visto una reducción significativa
                  en los incidentes. La comunicación entre vecinos ha mejorado enormemente."
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-background">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 mr-4"></div>
                  <div>
                    <h4 className="font-bold">Carlos Rodríguez</h4>
                    <p className="text-sm text-muted-foreground">Urbanización El Pinar</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Las alertas en tiempo real nos han permitido actuar rápidamente ante situaciones sospechosas. Ahora
                  todos nos sentimos más seguros y conectados."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Únete a Comunidad Segura Hoy</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Más de 500 comunidades ya están construyendo vecindarios más seguros.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Comenzar Gratis
                </Button>
                <Button size="lg" variant="outline">
                  Solicitar Demostración
                </Button>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span>Sin costo por 30 días</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span>Soporte 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span>Cancelación en cualquier momento</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12 bg-slate-50 dark:bg-slate-900">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <Shield className="h-6 w-6 text-emerald-600" />
                <span>Comunidad Segura</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Construyendo comunidades más seguras y unidas a través de la tecnología y la colaboración.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Producto</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-emerald-600">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-emerald-600">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-emerald-600">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-emerald-600">
                    Guías
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Compañía</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-emerald-600">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-emerald-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-emerald-600">
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-emerald-600">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-emerald-600">
                    Términos de Servicio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-emerald-600">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-emerald-600">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Comunidad Segura. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
