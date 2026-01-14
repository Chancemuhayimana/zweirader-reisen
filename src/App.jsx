import React, { useState, useRef } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Bike, 
  Car, 
  Mountain, 
  Users, 
  Globe, 
  Heart, 
  CheckCircle, 
  Mail, 
  MapPin,
  Phone,
  Menu,
  X,
} from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faBluesky } from '@fortawesome/free-brands-svg-icons'
import emailjs from '@emailjs/browser'
import './App.css'


// Import images
import logo from './assets/logo.png'
import heroImage from './assets/home.jpg'
import culturalImage from './assets/streets.jpg';
import akageraImage from './assets/giraffe.jpg';
import lakeKivuImage from './assets/kivu2.jpg';
import volcanoesImage from './assets/volcano.jpg';
import kigaliImage from './assets/WOApRp3T7D5n.jpg';
import teaImage from './assets/nyungwe.jpg';
import christopheProfile from './assets/christophe_profile.jpg'
import congoNileImage from './assets/congo-nile.jpg'
import OurTours from './components/OurTours.jsx'
import Gallery from './components/Gallery.jsx';

// New imports for assets previously referenced via absolute paths
import whatsappLogo from './assets/whatsapp_logo.jpg'
import nyanza1 from './assets/nyanza1.jpg'
import nyanza2 from './assets/nyanza2.jpg'
import nyanza3 from './assets/nyanza3.jpg'


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const form = useRef()
  const [formStatus, setFormStatus] = useState({
    status: 'idle', // idle, sending, success, error
    message: ''
  })

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setFormStatus({ status: 'sending', message: 'Sending...' })

    // Replace with your EmailJS Service ID, Template ID, and Public Key
    emailjs.sendForm('service_01rdbet', 'template_dq4olc5', form.current, 'NWabWdCJZ1pDtSQmn')
      .then(() => {
          setFormStatus({ status: 'success', message: 'Message sent successfully! We will get back to you soon.' })
          form.current.reset()
      }, () => {
          setFormStatus({ status: 'error', message: 'Failed to send message. Please try again later.' })
      });
  };

  return (
    <div className="min-h-screen smooth-scroll">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 navbar-blur border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Zweiräder Reisen Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-primary">Zweiräder Reisen</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
                About Us
              </button>
              <button onClick={() => scrollToSection('tours')} className="text-foreground hover:text-primary transition-colors">
                Tours
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors">
                Gallery
    
              </button>
              <button onClick={() => scrollToSection('our-tours')} className="text-foreground hover:text-primary transition-colors">
                Our Tours
              </button>
              <button onClick={() => scrollToSection('attractions')} className="text-foreground hover:text-primary transition-colors">
                Attractions
              </button>
               <button onClick={() => scrollToSection('imprint')} className="text-foreground hover:text-primary transition-colors">
                Imprint
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
                Contact
              </button>
             
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-secondary/90">
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-left text-foreground hover:text-primary transition-colors">
                  About Us
                </button>
                <button onClick={() => scrollToSection('tours')} className="text-left text-foreground hover:text-primary transition-colors">
                  Tours
                </button>
                <button onClick={() => scrollToSection('gallery')} className="text-left text-foreground hover:text-primary transition-colors">
                  Gallery
                </button>
                <button onClick={() => scrollToSection('our-tours')} className="text-left text-foreground hover:text-primary transition-colors">
                  Our Tours
                </button>
                <button onClick={() => scrollToSection('attractions')} className="text-left text-foreground hover:text-primary transition-colors">
                  Attractions
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-foreground hover:text-primary transition-colors">
                  Contact
                </button>
                <button onClick={() => scrollToSection('imprint')} className="text-left text-foreground hover:text-primary transition-colors">
                  Imprint
                </button>
                <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-secondary/90 w-fit">
                  Get Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section relative" style={{backgroundImage: `url(${heroImage})`}}>
        <div className="hero-overlay absolute inset-0"></div>
        <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
          <div className="max-w-3xl text-white text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              Where Cycling Adventures Meet 4x4 Expeditions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
              Experience the "Land of a Thousand Hills" on two wheels or with the comfort of a 4x4 safari vehicle
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Button size="lg" onClick={() => scrollToSection('our-tours')} className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                Explore Our Tours
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="text-lg px-8 py-4 border-white text-secondary hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

     

      {/* About Section */}
      <section id="about" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">About Zweiräder Reisen</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Zweiräder Reisen is a passionate and small-scale travel company specializing in bike tours and unique travel experiences across Rwanda. We believe that the best way to discover the "Land of a Thousand Hills" is on two wheels or with the comfort of a 4x4 safari vehicle.
              </p>
              <p className="text-lg mb-6 text-muted-foreground">
                Our name "Zweiräder" means "two wheels" in German, and that's exactly where our heart lies – curating guided cycling adventures through Rwanda's scenic landscapes, local communities, and rich biodiversity.
              </p>
              <p className="text-lg text-muted-foreground">
                Based in Rwanda and connected globally, our team is local, experienced, and deeply committed to responsible and immersive travel.
              </p>
            </div>
            <div className="relative">
              <img src={culturalImage} alt="Cycling in Rwanda" className="rounded-lg shadow-lg w-full h-80 md:h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Specialties</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your adventure: explore Rwanda's breathtaking landscapes by bicycle or enjoy the comfort of our 4x4 safari experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bike Tours */}
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Bike className="h-12 w-12 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">Bike Tours</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Explore Rwanda's breathtaking hills, lakes, and trails by bicycle. Our guided bike tours are suitable for all fitness levels and can be customized from half-day rides to multi-day expeditions.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Lake Kivu cycling trail</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Kigali city and countryside rides</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Volcanoes and tea plantation tours</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Cultural village experiences by bike</span>
                  </div>
                </div>
                <Badge variant="secondary" className="mb-4">High-quality bikes & safety gear included</Badge>
              </CardContent>
            </Card>

            {/* 4x4 Safari */}
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Car className="h-12 w-12 text-primary mr-4" />
                  <h3 className="text-2xl font-bold">4x4 Safari Experiences</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Prefer to explore with comfort and flexibility? We offer private 4x4 vehicle tours with experienced driver-guides. Enjoy Rwanda's top destinations with personalized itineraries.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Gorilla trekking in Volcanoes National Park</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Wildlife safaris in Akagera National Park</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Canopy walks and primates in Nyungwe Forest</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>Cultural and historical tours around Kigali</span>
                  </div>
                </div>
                <Badge variant="secondary" className="mb-4">Perfect for families & groups</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Why Travel with Zweiräder Reisen?</h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Card className="card-hover text-center">
              <CardContent className="p-6">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Locally Rooted</h3>
                <p className="text-sm text-muted-foreground">We know Rwanda inside out and support local communities</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Eco-Conscious</h3>
                <p className="text-sm text-muted-foreground">Cycling promotes sustainable and low-impact travel</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Tailored Trips</h3>
                <p className="text-sm text-muted-foreground">Every itinerary is built around your interests and comfort</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Multilingual Guides</h3>
                <p className="text-sm text-muted-foreground">English, German, French, and Kinyarwanda spoken</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Affordable & Flexible</h3>
                <p className="text-sm text-muted-foreground">Small-group and private tours at honest prices</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Gallery />

      <OurTours />

      {/* Attractions Section */}
      <section id="attractions" className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Rwanda Attractions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the diverse beauty of Rwanda, from bustling cities to pristine national parks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="destination-card" style={{backgroundImage: `url(${kigaliImage})`}}>
              <div className="destination-overlay">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Kigali</h3>
                  <p className="text-sm">Culture, history, local markets, and nightlife</p>
                </div>
              </div>
            </div>

            <div className="destination-card" style={{backgroundImage: `url(${lakeKivuImage})`}}>
              <div className="destination-overlay">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Lake Kivu</h3>
                  <p className="text-sm">Serene lake shores and island biking</p>
                </div>
              </div>
            </div>

            <div className="destination-card" style={{backgroundImage: `url(${volcanoesImage})`}}>
              <div className="destination-overlay">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Volcanoes National Park</h3>
                  <p className="text-sm">Trek to see mountain gorillas on these volcanic slopes</p>
                </div>
              </div>
            </div>

            <div className="destination-card" style={{backgroundImage: `url(${teaImage})`}}>
              <div className="destination-overlay">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Nyungwe National Park</h3>
                  <p className="text-sm">Rainforest, chimpanzees, canopy walks</p>
                </div>
              </div>
            </div>

            <div className="destination-card" style={{backgroundImage: `url(${akageraImage})`}}>
              <div className="destination-overlay">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Akagera National Park</h3>
                  <p className="text-sm">Big Five game drives and boat safaris</p>
                </div>
              </div>
            </div>

            <div className="destination-card" style={{backgroundImage: `url(${culturalImage})`}}>
              <div className="destination-overlay">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Cultural Villages</h3>
                  <p className="text-sm">Meet Rwandan communities and learn their traditions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Congo Nile Trail Map Section */}
      <section id="congo-nile-map" className="py-16 bg-background flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center px-4">Congo Nile Trail Route Map</h2>
        <div className="w-full flex justify-center px-4">
          <img
            src={congoNileImage}
            alt="Congo Nile Trail Route Map"
            className="max-w-sm w-full h-auto rounded-3xl shadow-xl bg-white p-4 mx-auto block"
          />
        </div>
        <p className="mt-6 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
          The Congo Nile Trail is a legendary route stretching along the shores of Lake Kivu, connecting Rubavu, Karongi, and Rusizi. This scenic trail is perfect for cycling and hiking, offering breathtaking views and a true taste of Rwanda's natural beauty.
        </p>
      </section>

      {/* Nyanza Cultural Trails Section */}
      <section id="nyanza-cultural-trails" className="py-16 bg-muted/30 flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center px-4">Nyanza Cultural Trails</h2>
        <div className="w-full flex justify-center mb-8">
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Discover the rich cultural heritage of Nyanza through immersive village visits, historical sites, and vibrant local traditions. Experience Rwanda’s royal history and the warmth of its people.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
          <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <img
              src={nyanza1}
              alt="Nyanza Cultural Trail 1"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <img
              src={nyanza2}
              alt="Nyanza Cultural Trail 2"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <img
              src={nyanza3}
              alt="Nyanza Cultural Trail 3"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Imprint Section */}
      <section id="imprint" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src={christopheProfile} alt="Christophe NIYOMUGABO - Founder & Lead Guide" className="rounded-lg shadow-lg w-full h-80 md:h-96 object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Christophe NIYOMUGABO</h2>
              <h3 className="text-2xl font-semibold mb-6 text-muted-foreground">Founder & Lead Guide</h3>
              <p className="text-lg mb-6 text-muted-foreground">
                Born near Lake Kivu in Rwanda, Christophe speaks Kinyarwanda, English, French & German. From an early age, he developed a passion for the great outdoors and meeting new people whilst riding mountain bikes with tourists along the famous Congo Nile Trail, which inspired him to study Tourism at Unique Academy and Hospitality Management at IPRC Karongi. He enjoys travelling, meeting new people, swimming, reading books, cooking and listening to the music.
              </p>
              <p className="text-lg text-muted-foreground">
                <strong>Contact:</strong> zweiraderreisen@gmail.com<br/>
                <strong>Phone:</strong> +250 788 416 765
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Get in Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Planning your Rwanda adventure? We'd love to help you create an unforgettable experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">zweiraderreisen@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+250 788 416 765</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Based in Kigali, Rwanda</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mountain className="h-6 w-6 text-primary mr-4" />
                  <div>
                    <p className="font-semibold">Tours Available</p>
                    <p className="text-muted-foreground">Year-round</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Send us a message</h3>
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input name="name" type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input name="email" type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your email" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number (Optional)</label>
                    <input name="phone" type="tel" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Your phone number" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Tour Interest</label>
                    <select name="tour_interest" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Select tour type</option>
                      <option>Bike Tours</option>
                      <option>4x4 Safari</option>
                      <option>Custom Package</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea name="message" rows="4" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Tell us about your dream Rwanda adventure..." required></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={formStatus.status === 'sending'}>
                    {formStatus.status === 'sending' ? 'Sending...' : 'Send Message'}
                  </Button>
                  {formStatus.status !== 'idle' && (
                    <p className={`mt-4 text-sm text-center ${
                      formStatus.status === 'success' ? 'text-green-600' :
                      formStatus.status === 'error' ? 'text-destructive' :
                      'text-muted-foreground'
                    }`}>
                      {formStatus.message}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/250784606510?text=Hello%20Zweiräder%20Reisen%20Tell%20me%20more%20about%20you"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Chat with us on WhatsApp"
      >
        <img
           src={whatsappLogo}
          alt="WhatsApp"
          className="whatsapp-icon"
        />
        <span className="whatsapp-text">WhatsApp</span>
      </a>
    

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={logo} alt="Zweiräder Reisen Logo" className="h-8 w-8" />
                <span className="text-xl font-bold">Zweiräder Reisen</span>
              </div>
              <p className="text-primary-foreground/80">
                Discover Rwanda differently with our passionate team of local guides and cycling experts.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </button>
                 <button onClick={() => scrollToSection('tours')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Tours
                </button>
                <button onClick={() => scrollToSection('gallery')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Gallery
                </button>
                <button onClick={() => scrollToSection('our-tours')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Tours  
                </button>
               
                <button onClick={() => scrollToSection('attractions')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Attractions
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </button> 
                
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>zweiraderreisen@gmail.com</p>
                <p>Kigali, Rwanda</p>
                <p>Tours available year-round</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/Zweiraderreisen" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.instagram.com/zweiraderreisen" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://bsky.app/profile/zweiraderreisen.bsky.social" target="_blank" rel="noopener noreferrer" aria-label="Bluesky" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <FontAwesomeIcon icon={faBluesky} size="2x" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
            <p>&copy; {new Date().getFullYear()} Zweiräder Reisen. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
    </div>
  )
}

export default App


