const { createApp } = Vue;

createApp({
  data() {
    return {
      tagline:
        "Essen wie bei Oma in Italien – traditionell, hausgemacht und mit viel Liebe zubereitet.",
      activeCategory: "all",
      searchQuery: "",

      categories: [
        { id: "all", label: "Alles" },
        { id: "antipasti", label: "Vorspeisen" },
        { id: "Primi Piatte", label: "Pasta & Suppen" },
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
              ingredients: [
                "Landbrot",
                "Tomaten",
                "Knoblauch",
                "Basilikum",
                "Olivenöl",
              ],
            },
            {
              name: "Antipasto della Nonna",
              desc: "Gemischte Platte nach Großmutters Art: Parmaschinken, Mailänder Salami, eingelegtes Gemüse, marinierte Oliven und cremiger Büffelmozzarella.",
              ingredients: [
                "Parmaschinken",
                "Salami",
                "eingelegtes Gemüse",
                "Oliven",
                "Büffelmozzarella",
              ],
            },
            {
              name: "Carpaccio di Manzo",
              desc: "Hauchdünnes Rinderfilet mit frischem Rucola, gehobeltem Parmesan und einem Spritzer Zitronen-Trüffelöl.",
              ingredients: [
                "Rinderfilet",
                "Rucola",
                "Parmesan",
                "Zitrone",
                "Trüffelöl",
              ],
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
              ingredients: [
                "Bandnudeln",
                "Rinderhack",
                "Tomaten",
                "Karotten",
                "Sellerie",
                "Rotwein",
              ],
            },
            {
              name: "Gnocchi alla Sorrentina",
              desc: "Hausgemachte Kartoffel-Gnocchi in fruchtiger Tomatensauce, überbacken mit Fior di Latte Mozzarella und frischem Basilikum.",
              ingredients: [
                "Kartoffel-Gnocchi",
                "Tomatensauce",
                "Mozzarella",
                "Basilikum",
              ],
            },
            {
              name: "Ravioli di Zucca e Burro Salvia",
              desc: "Mit Kürbis gefüllte Teigtaschen in geschäumter Salbeibutter, garniert mit Amaretti-Bröseln und Parmesan.",
              ingredients: [
                "Kürbis",
                "Teigtaschen",
                "Salbei",
                "Butter",
                "Amaretti",
                "Parmesan",
              ],
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
              ingredients: [
                "Rinderbäckchen",
                "Barolo-Wein",
                "Polenta",
                "Safran",
              ],
            },
            {
              name: "Saltimbocca alla Romana",
              desc: "Zarte Kalbsschnitzel mit Parmaschinken und Salbei in feiner Weißweinsauce, dazu saisonales Marktgemüse.",
              ingredients: [
                "Kalbsschnitzel",
                "Parmaschinken",
                "Salbei",
                "Weißwein",
                "Marktgemüse",
              ],
            },
            {
              name: "Branzino al Cartoccio",
              desc: "Im Ganzen in der Folie gegartes Wolfsbarschfilet mit Kirschtomaten, Kräutern der Toskana und Oliven, dazu Röstkartoffeln.",
              ingredients: [
                "Wolfsbarsch",
                "Kirschtomaten",
                "Kräuter",
                "Oliven",
                "Röstkartoffeln",
              ],
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
              ingredients: ["Tomatensauce", "Mozzarella", "Basilikum"],
            },
            {
              name: "Pizza Nonna Maria",
              desc: "Würzige Salsiccia, wilder Brokkoli (Friarielli) und geräucherter Provolone-Käse.",
              ingredients: ["Salsiccia", "Friarielli", "Provolone"],
            },
            {
              name: "Pizza San Daniele",
              desc: "Tomatensauce, Mozzarella, nach dem Backen belegt mit San Daniele Schinken, Rucola und Parmesan-Spänen.",
              ingredients: [
                "Tomatensauce",
                "Mozzarella",
                "San Daniele Schinken",
                "Rucola",
                "Parmesan",
              ],
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
              ingredients: [
                "Löffelbiskuits",
                "Espresso",
                "Amaretto",
                "Mascarpone",
              ],
            },
            {
              name: "Panna Cotta ai Frutti di Bosco",
              desc: "Gekochte Sahne mit echter Bourbon-Vanille, serviert mit einem fruchtigen Waldbeerenspiegel.",
              ingredients: ["Sahne", "Bourbon-Vanille", "Waldbeeren"],
            },
            {
              name: "Affogato al Caffè",
              desc: 'Eine Kugel hausgemachtes Vanilleeis, „ertränkt" in einem heißen, starken Espresso.',
              ingredients: ["Vanilleeis", "Espresso"],
            },
          ],
        },
      ],
    };
  },

  computed: {
    visibleSections() {
      const q = this.searchQuery.trim().toLowerCase();

      let sections =
        this.activeCategory === "all"
          ? this.sections
          : this.sections.filter((s) => s.category === this.activeCategory);

      if (!q) return sections;

      return sections
        .map((section) => ({
          ...section,
          items: section.items.filter(
            (item) =>
              item.name.toLowerCase().includes(q) ||
              item.ingredients.some((ing) => ing.toLowerCase().includes(q)),
          ),
        }))
        .filter((section) => section.items.length > 0);
    },
  },
}).mount("#app");
