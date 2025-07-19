import  { useState, useEffect, type JSX } from "react";
import { Phone, Mail, MapPin, Sparkles, Footprints, Eye, ChevronDown, Star, Heart, Paintbrush } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logo from "./assets/pink-logo.svg";





interface VisibilityState {
  [key: string]: boolean;
}

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface GalleryImage {
  src: string;
  alt: string;
  size: 'small' | 'medium' | 'large';
}

export default function Home(): JSX.Element {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const services: Service[] = [
    {
      title: "Elegant Manicures",
      description: "Meticulous nail shaping, cuticle care, and a flawless polish application for stunning hands.",
      icon: <Sparkles className="w-8 h-8 text-pink-500" />
    },
    {
      title: "Luxury Pedicures",
      description: "Rejuvenate your feet with an aromatic soak, gentle exfoliation, and a perfect, long-lasting polish.",
      icon: <Footprints className="w-8 h-8 text-pink-500" />
    },
    {
      title: "Creative Nail Art",
      description: "From simple elegance to intricate designs, our artists bring your nail visions to life with creativity and precision.",
      icon: <Paintbrush className="w-8 h-8 text-pink-500" />
    },
    {
      title: "Lash Extensions",
      description: "Achieve dramatic, beautiful eyes with our professional, high-quality lash extension services.",
      icon: <Eye className="w-8 h-8 text-pink-500" />
    }
  ];

  const galleryImages: GalleryImage[] = [
    {
      src: "https://media.istockphoto.com/id/656932560/photo/pink-stiletto-shaped-nails-in-warm-cardigan.webp?a=1&b=1&s=612x612&w=0&k=20&c=rMbMpPJ1_lgutmpT0dhuCf9cYXsyhILvqke0dS3HH7I=",
      alt: "Pink nail art design",
      size: "small"
    },
    {
      src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Professional nail art with intricate designs",
      size: "medium"
    },
    {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Professional facial treatment",
      size: "large"
    },
    {
      src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Colorful nail polish collection",
      size: "small"
    },
    {
      src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Manicure tools and setup",
      size: "medium"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661868958612-7d52c5fb9647?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVkaWN1cmV8ZW58MHx8MHx8fDA%3D",
      alt: "Manicure art work in progress",
      size: "large"
    },
    {
      src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "French manicure perfection",
      size: "small"
    },
    {
      src: "https://images.unsplash.com/photo-1644203541701-c67c866fd42a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmFpbHMlMjBkZXNpZ24lMjB3aXRoJTIwZ2Vtc3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Artistic nail designs with gems",
      size: "medium"
    },
    {
      src: "https://media.istockphoto.com/id/661319722/photo/nail-polish.jpg?s=612x612&w=0&k=20&c=LCDbgVjlqbH6ELLHdke1XmC5xM398zuntdK8TLqXW3Y=",
      alt: "Luxury spa treatment room",
      size: "medium"
    },
    {
      src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Gradient nail art technique",
      size: "large"
    },
    {
      src: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Professional pedicure session",
      size: "small"
    },
    {
      src: "https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      alt: "Nail care and cuticle treatment",
      size: "medium"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white ">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
         <div className="flex items-center gap-2 sm:gap-4">
  <img
    src={logo}
    alt="Lixbel Studio Logo"
    className="h-14 sm:h-20 w-auto object-contain"
  />
  <div className="text-xl sm:text-3xl font-serif font-bold text-pink-600">
    Lixbel Studio
  </div>
</div>


            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-pink-600  transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="animate-section pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[75vh]">
            <div className={`space-y-8 transition-all duration-1000 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-serif font-extrabold text-gray-900 leading-tight tracking-tight">
                  Where Elegance
                  <span className="text-pink-500 block">Meets Perfection</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Discover a world of professional cosmetology at Lixbel Studio, where we craft beauty experiences that leave you feeling confident and radiant.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection('services')}
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Explore Services
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg rounded-full transition-all duration-300"
                >
                  Book Now
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-8 border-t border-pink-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-600">Years of Expertise</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5-Star</div>
                  <div className="text-sm text-gray-600">Service Rating</div>
                </div>
              </div>
            </div>
            <div className={`relative transition-all duration-1000 delay-300 ${
              isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {/* Main Professional Image */}
              <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-pink-300 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white rounded-3xl p-4 shadow-2xl">
                  <img
                    src="https://media.istockphoto.com/id/1454729501/photo/african-american-nail-salon.webp?a=1&b=1&s=612x612&w=0&k=20&c=ein5cenXaCiRkzjnGlCmb2Grrhq4S9SaeTd3h9RAVSQ="
                    alt="Professional nail artist working on a manicure"
                    className="w-full h-96 object-cover rounded-2xl filter brightness-75 contrast-125"
                  />
                  <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <Heart className="w-6 h-6 text-pink-500" />
                  </div>
                  <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <Star className="w-6 h-6 text-pink-500 fill-current" />
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Sparkles className="w-8 h-8 text-pink-500" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Heart className="w-6 h-6 text-pink-600 fill-current" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection('services')}
            className="animate-bounce text-pink-500 hover:text-pink-600 transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="animate-section py-24 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Premier Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Indulge in our carefully curated beauty treatments, each designed to leave you feeling refreshed, confident, and absolutely radiant. Contact us for pricing in Ghana Cedis.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service: Service, index: number) => (
              <Card
                key={service.title}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-white ${
                  isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-pink-200 transition-all duration-300">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-pink-300 text-pink-600 hover:bg-pink-50"
                        onClick={() => scrollToSection('contact')}
                      >
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="animate-section py-24 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.gallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Beautiful Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a glimpse into our world of beauty and artistry. Each image showcases our dedication to nail art perfection, skincare excellence, and professional beauty treatments.
            </p>
          </div>
          {/* Masonry Gallery */}
        <div className={`columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 transition-all duration-1000 ${
  isVisible.gallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
}`}>
  {galleryImages.map((image: GalleryImage, index: number) => (
    <div
      key={index}
      className="break-inside-avoid mb-6 group cursor-pointer"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-75 contrast-125 saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm font-medium drop-shadow-lg">{image.alt}</p>
        </div>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="animate-section py-24 bg-gradient-to-b from-white to-pink-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
              Schedule Your Visit
            </h2>
            <p className="text-xl text-gray-600">
              Ready for your transformation? Contact us to book an appointment and get pricing in Ghana Cedis.
            </p>
          </div>
          <Card className={`bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-2xl transition-all duration-1000 delay-300 ${
            isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <CardContent className="p-10">
              <div className="grid md:grid-cols-1 gap-6">
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors duration-300">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Call Us Directly</div>
                    <a href="tel:0592185706" className="text-pink-600 font-medium text-lg">0592185706</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors duration-300">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Send an Email</div>
                    <a href="mailto:contact@lixbelstudio.com" className="text-pink-600 font-medium text-lg">contact@lixbelstudio.com</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors duration-300">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Visit Our Studio</div>
                    <div className="text-pink-600 font-medium text-lg">Amasaman-Afiaman, Kingdom</div>
                  </div>
                </div>
              </div>
              <Button
                onClick={() => {}}
                className="w-full mt-8 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Book Your Appointment Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-serif font-bold text-pink-400 mb-4">
              Lixbel Studio
            </div>
            <p className="text-gray-400 mb-6">
              Crafting beauty and confidence with professional care.
            </p>
            <div className="border-t border-gray-700 pt-6 mt-6">
              <p className="text-gray-500 text-sm">
                © 2024 Lixbel Studio. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}