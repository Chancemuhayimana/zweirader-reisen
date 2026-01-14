import React from 'react';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Bike, Car, Users, DollarSign, Clock, MapPin } from 'lucide-react';

function OurTours() {
  return (
    <section id="our-tours" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">Our Tours</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover Rwanda with our curated bike tours and exciting 4x4 expeditions.
          </p>
        </div>

        {/* Bike Tours */}
        <h3 className="text-3xl font-bold mb-8 text-primary text-center">Bike Tours</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Congo Nile Trail Adventure */}
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Bike className="h-8 w-8 text-primary mr-3" />
                <h4 className="text-xl font-bold">Congo Nile Trail Adventure</h4>
              </div>
              <p className="text-2xl font-semibold text-right mb-4">$2,500 <span className="text-base font-normal text-muted-foreground">per person</span></p>
              <div className="space-y-2 text-muted-foreground text-sm mb-4">
                <div className="flex items-center"><Clock className="h-4 w-4 mr-2" /> Duration: 13 Days</div>
                <div className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Route: Cycles along Lake Kivu from Rubavu → Rutsiro → Kibuye → Rusizi</div>
              </div>
              <p className="text-muted-foreground mb-4"><strong>Highlights:</strong> Immerse yourself in Rwanda’s stunning natural beauty as you cycle along the serene shores of Lake Kivu. Explore charming villages, interact with local communities, taste freshly brewed Rwandan coffee, admire handcrafted artisan works, and enjoy guided nature walks.</p>
              <p className="text-muted-foreground"><strong>Inclusions:</strong> Bike rental, accommodation, professional guide, meals, scenic boat ride</p>
            </CardContent>
          </Card>

          {/* Kigali and the Mountain Gorillas */}
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Bike className="h-8 w-8 text-primary mr-3" />
                <h4 className="text-xl font-bold">Kigali and the Mountain Gorillas</h4>
              </div>
              <p className="text-2xl font-semibold text-right mb-4">$3,500 <span className="text-base font-normal text-muted-foreground">per person</span></p>
              <div className="space-y-2 text-muted-foreground text-sm mb-4">
                <div className="flex items-center"><Clock className="h-4 w-4 mr-2" /> Duration: 5 Days</div>
                <div className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Route: Kigali → Musanze</div>
              </div>
              <p className="text-muted-foreground mb-4"><strong>Highlights:</strong> Experience Rwanda’s capital before venturing into the majestic volcanoes. Enjoy a city tour of Kigali, visit the inspiring Gorilla Guardians Village, marvel at breathtaking volcano views, explore the Twin Lakes region, and cycle through scenic landscapes.</p>
              <p className="text-muted-foreground mb-4"><strong>Inclusions:</strong> Bike rental, accommodation, guide, breakfast & dinner, entry fees</p>
              <p className="text-muted-foreground">Gorilla trekking permit fee: $1,500</p>
            </CardContent>
          </Card>

          {/* Nyanza Cultural Tours */}
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Bike className="h-8 w-8 text-primary mr-3" />
                <h4 className="text-xl font-bold">Nyanza Cultural Tours</h4>
              </div>
              <p className="text-2xl font-semibold text-right mb-4">$1,600 <span className="text-base font-normal text-muted-foreground">per person</span></p>
              <div className="space-y-2 text-muted-foreground text-sm mb-4">
                <div className="flex items-center"><Clock className="h-4 w-4 mr-2" /> Duration: 4 Days</div>
                <div className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Route: Kigali → Nyanza → Huye → Rusizi → Kigali</div>
              </div>
              <p className="text-muted-foreground mb-4"><strong>Highlights:</strong> Delve into Rwanda’s rich cultural heritage. Visit the regal King’s Palace Museum, explore the Ethnographic Museum, discover local markets, and experience the vibrant traditions of Rwandan villages while cycling through picturesque countryside.</p>
              <p className="text-muted-foreground"><strong>Inclusions:</strong> Bike rental, accommodation, guide, meals</p>
            </CardContent>
          </Card>
        </div>

        {/* 4x4 Expeditions */}
        <h3 className="text-3xl font-bold mb-8 text-primary text-center">4x4 Expeditions</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cultural Expeditions */}
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Car className="h-8 w-8 text-primary mr-3" />
                <h4 className="text-xl font-bold">Cultural Expeditions</h4>
              </div>
              <p className="text-2xl font-semibold text-right mb-4">$3,000 <span className="text-base font-normal text-muted-foreground">per person</span></p>
              <div className="space-y-2 text-muted-foreground text-sm mb-4">
                <div className="flex items-center"><Clock className="h-4 w-4 mr-2" /> Duration: 3 Days</div>
                <div className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Route: Kigali → Nyanza → Huye → Nyungwe → Kigali (or extension)</div>
              </div>
              <p className="text-muted-foreground mb-4"><strong>Highlights:</strong> Travel comfortably through Rwanda’s cultural and natural gems in a private 4x4. Discover Nyanza Palace & Museum, explore Huye’s cultural sites and lively markets, and experience the thrill of Nyungwe Forest Canopy Walk with an opportunity for chimpanzee tracking.</p>
              <p className="text-muted-foreground"><strong>Inclusions:</strong> 4x4 rental, accommodation, guide/driver, meals, entry fees</p>
            </CardContent>
          </Card>

          {/* Gorilla and the Big Five Safaris */}
          <Card className="card-hover">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Car className="h-8 w-8 text-primary mr-3" />
                <h4 className="text-xl font-bold">Gorilla and the Big Five Safaris</h4>
              </div>
              <p className="text-2xl font-semibold text-right mb-4">$5,500 <span className="text-base font-normal text-muted-foreground">per person</span></p>
              <div className="space-y-2 text-muted-foreground text-sm mb-4">
                <div className="flex items-center"><Clock className="h-4 w-4 mr-2" /> Duration: 6 Days</div>
                <div className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Route: Kigali → Akagera → Volcanoes NP → Kigali (or extension)</div>
              </div>
              <p className="text-muted-foreground mb-4"><strong>Highlights:</strong> Embark on an unforgettable safari adventure. Begin in Kigali, venture into Akagera National Park for a classic African safari experience, and continue to Volcanoes National Park to witness Rwanda’s iconic volcanoes and mountain gorillas.</p>
              <p className="text-muted-foreground"><strong>Inclusions:</strong> 4x4 rental, accommodation, guide/driver, meals, park entry fees</p>
            </CardContent>
          </Card>
        </div>

        {/* Special Group Offer */}
        <div className="mt-16 bg-muted/30 p-8 rounded-lg border">
          <div className="text-center">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary mb-2">Special Group Offer</h3>
            <p className="text-xl text-muted-foreground mb-6">
              Groups of 5 or more travelers enjoy an exclusive <strong>20% discount</strong> on the total itinerary price.
            </p>
          </div>
          <div className="mt-6 max-w-2xl mx-auto">
            <h4 className="font-semibold mb-3 text-center text-lg">❌ Exclusions & Conditions</h4>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-center sm:text-left">
              <li>Discount applies to tour package price only (excludes visas, international flights, insurance, and personal expenses).</li>
              <li>Cannot be combined with any other promotional offers.</li>
              <li>Valid only when booked under a single reservation.</li>
              <li>Subject to availability at the time of booking.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTours;
