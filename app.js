const { createApp } = Vue

createApp({
  data() {
    return {
      tagline:
        "Essen wie bei Oma in Italien – traditionell, hausgemacht und mit viel Liebe zubereitet.",
      activeCategory: "all",

      categories: [
        { id: "all", label: "Alles" },
        { id: "antipasti", label: "Vorspeisen" },
        { id: "Primi Piatte", label: "Main" },
        { id: "secondi", label: "Hauptgerichte" },
        { id: "pizza", label: "Pizza" },
        { id: "dolci", label: "Dessert" },
      ],

      sections: [
        {
          id: "1",
          category: "antipasti",
          title: "Vorspeisen",
          items: [
            {
              name: "Bruschetta Classica",
              desc: "Geröstetes Landbrot mit saftigen Tomaten, Knoblauch, frischem Basilikum und bestem Olivenöl.",
            },
            {
              name: "Antipasto della Nonna",
              desc: "Gemischte Platte nach Großmutters Art: Parmaschinken, Mailänder Salami, eingelegtes Gemüse, marinierte Oliven und cremiger Büffelmozzarella.",
            },
            {
              name: "Carpaccio di Manzo",
              desc: "Hauchdünnes Rinderfilet mit frischem Rucola, gehobeltem Parmesan und einem Spritzer Zitronen-Trüffelöl.",
            },
          ],
        },
        {
          id: "2",
          category: "Primi Piatte",
          title: "Nudelgerichte & Suppen",

          items: [
            {
              name: "Tagliatelle al Ragù Antico",
              desc: "Frische Bandnudeln mit einem langsam geschmorten Bolognese-Ragout nach einem über 100 Jahre alten Familienrezept.",
            },
            {
              name: "Gnocchi alla Sorrentina",
              desc: "Hausgemachte Kartoffel-Gnocchi in fruchtiger Tomatensauce, überbacken mit Fior di Latte Mozzarella und frischem Basilikum.",
            },
            {
              name: "Ravioli di Zucca e Burro Salvia",
              desc: "Mit Kürbis gefüllte Teigtaschen in geschäumter Salbeibutter, garniert mit Amaretti-Bröseln und Parmesan.",
            },
          ],
        },
        {
          id: "3",
          category: "secondi",
          title: "Hauptgerichte",
          items: [
            {
              name: "Guanciale di Bue Brasato",
              desc: "Zart geschmorte Rinderbäckchen in einer kräftigen Barolo-Weinsauce, serviert auf cremiger Safran-Polenta.",
            },
            {
              name: "Saltimbocca alla Romana",
              desc: "Zarte Kalbsschnitzel mit Parmaschinken und Salbei in feiner Weißweinsauce, dazu saisonales Marktgemüse.",
            },
            {
              name: "Branzino al Cartoccio",
              desc: "Im Ganzen in der Folie gegartes Wolfsbarschfilet mit Kirschtomaten, Kräutern der Toskana und Oliven, dazu Röstkartoffeln.",
            },
          ],
        },
        {
          id: "4",
          category: "pizza",
          title: "Pizza",

          items: [
            {
              name: "Pizza Margherita Classica",
              desc: "Fruchtige Tomatensauce, Fior di Latte Mozzarella und frisches Basilikum.",
            },
            {
              name: "Pizza Nonna Maria",
              desc: "Würzige Salsiccia, wilder Brokkoli (Friarielli) und geräucherter Provolone-Käse.",
            },
            {
              name: "Pizza San Daniele",
              desc: "Tomatensauce, Mozzarella, nach dem Backen belegt mit San Daniele Schinken, Rucola und Parmesan-Spänen.",
            },
          ],
        },
        {
          id: "I Dolci",
          category: "dolci",
          title: "Dessert",
          items: [
            {
              name: "Tiramisù Tradizionale",
              desc: "Löffelbiskuits getränkt in Espresso und Amaretto, geschichtet mit einer himmlischen Mascarponecreme.",
            },
            {
              name: "Panna Cotta ai Frutti di Bosco",
              desc: "Gekochte Sahne mit echter Bourbon-Vanille, serviert mit einem fruchtigen Waldbeerenspiegel.",
            },
            {
              name: "Affogato al Caffè",
              desc: 'Eine Kugel hausgemachtes Vanilleeis, „ertränkt" in einem heißen, starken Espresso.',
            },
          ],
        },
      ],
    };
  },

  computed: {
    visibleSections() {
      if (this.activeCategory === 'all') return this.sections
      return this.sections.filter(s => s.category === this.activeCategory)
    }
  }

}).mount('#app')
