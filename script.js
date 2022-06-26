const RootComponent = {
  data() {
    return {
      title: "Carte de Visite",
      Nom: "oran",
      Prenom: "manu",
      Entreprise: "lebocal",
      Email: "manu.lebocal@lebocal.com",
      Phone: "0123456789",
      Background: "backgroundColorBlue",
      Color: "textColor",
    };
  },
  methods: {
    changeNom: function (e) {
      this.Nom = e.target.value;
    },
    changePrenom: function (e) {
      this.Prenom = e.target.value;
    },
    changeEntreprise: function (e) {
      this.Entreprise = e.target.value;
    },
    changeEmail: function (e) {
      this.Email = e.target.value;
    },
    changePhone: function (e) {
      this.Phone = e.target.value;
    },
    changeColorBlue: function () {
      this.Background = "backgroundColorBlue";
    },
    changeColorRed: function () {
      this.Background = "backgroundColorRed";
    },
    changeColorGreen: function () {
      this.Background = "backgroundColorGreen";
    },
    changeTextColor: function () {
      this.Color = "textColor";
    },
  },
};
const Cdv = Vue.createApp(RootComponent);
const vm = Cdv.mount(`#Cdv`);
