# 🎯 NegoLab - Plateforme Premium d'Évaluation des Compétences en Négociation# NegoLab - Votre Arène de Négociation 🎯



<div align="center">Une application web immersive et ludique pour découvrir votre profil de négociateur et développer vos compétences en négociation.



![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)## 🌟 Fonctionnalités

![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)- **Profilage Interactif** : Quiz de 7 questions pour identifier votre style de négociation

![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.5-ff0055?style=for-the-badge&logo=framer)- **5 Profils de Négociateurs** :



**Découvrez votre style unique de négociation à travers une expérience interactive premium**  - 🤝 Le Diplomate Collaboratif

  - 🎯 Le Stratège Compétitif

[Demo Live](https://negolab.vercel.app) · [Signaler un Bug](https://github.com/el-houfi-achraf/NegoLab/issues) · [Demander une Fonctionnalité](https://github.com/el-houfi-achraf/NegoLab/issues)  - 🕊️ Le Conciliateur Bienveillant

  - 🛡️ L'Observateur Prudent

</div>  - ⚖️ Le Pragmatique Équilibré



---- **Résultats Détaillés** :



## ✨ Aperçu  - Graphique de répartition des scores

  - Forces spécifiques à votre profil

NegoLab est une application web de nouvelle génération qui révolutionne l'évaluation des compétences en négociation. À travers un quiz scientifique de 10 questions, découvrez votre profil de négociateur parmi 5 styles distincts et obtenez des insights personnalisés pour développer vos compétences.  - Axes d'amélioration personnalisés



## 🚀 Fonctionnalités Principales- **Expérience Immersive** :

  - Animations fluides à 60 fps

### 💎 **Expérience Utilisateur Premium**  - Design mobile-first responsive

- 🎨 **Design Glassmorphism** avec effets de verre dépoli  - Transitions élégantes entre les écrans

- ✨ **Animations 60fps** fluides et optimisées GPU

- 🌊 **Particules flottantes** et blobs animés## 🚀 Démarrage Rapide

- 💫 **Transitions élégantes** entre les écrans

- 📱 **Mobile-First** avec design responsive parfait### Prérequis



### 🧠 **Évaluation Scientifique**- Node.js 18+

- 📊 **10 Questions** ciblées et validées- npm ou yarn

- 🎯 **5 Profils** de négociateurs distincts :

  - 💪 **Assertif** - Leadership et équilibre### Installation

  - 🤝 **Coopératif** - Collaboration et relations

  - 🧠 **Analytique** - Logique et données1. Installer les dépendances :

  - 🏆 **Compétitif** - Performance et résultats

  - 🕊️ **Accommodant** - Harmonie et flexibilité```bash

npm install

### 📈 **Résultats Détaillés**```

- 🎖️ **Badge personnalisé** avec icône unique

- 📊 **Distribution des styles** avec graphiques animés2. Lancer le serveur de développement :

- ✅ **Points forts** identifiés

- 💡 **Axes d'amélioration** ciblés```bash

- 🔄 **Partage des résultats** via Web Share APInpm run dev

```

### ⚡ **Performance & Technique**

- 🚀 **Next.js 14** avec App Router3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

- 📦 **TypeScript** strict pour la fiabilité

- 🎭 **Framer Motion** pour les animations## 🛠️ Stack Technique

- 🎨 **Tailwind CSS** pour le styling

- 🌐 **SEO optimisé** avec métadonnées complètes- **Framework** : Next.js 14 (App Router)

- **Langage** : TypeScript

## 🛠️ Stack Technique- **Styling** : Tailwind CSS

- **Animations** : Framer Motion

| Technologie | Version | Usage |- **Optimisations** :

|------------|---------|-------|  - Server Components pour les performances

| Next.js | 14.2.15 | Framework React SSR |  - Lazy loading des composants

| TypeScript | 5.x | Langage principal |  - Optimisation des animations avec `will-change`

| Tailwind CSS | 3.4 | Styling utility-first |

| Framer Motion | 11.5.4 | Animations & Transitions |## 📁 Structure du Projet

| React | 18.x | Library UI |

```

## 📦 Installationsrc/

├── app/                    # Next.js App Router

### Prérequis│   ├── layout.tsx         # Layout principal

- Node.js 18+ │   ├── page.tsx           # Page d'accueil

- npm ou yarn│   └── globals.css        # Styles globaux

├── components/            # Composants React

### Étapes│   ├── WelcomeScreen.tsx  # Écran d'accueil

│   ├── QuizScreen.tsx     # Interface du quiz

```bash│   └── ResultScreen.tsx   # Écran des résultats

# 1. Cloner le repository├── data/                  # Données statiques

git clone https://github.com/el-houfi-achraf/NegoLab.git│   ├── profiles.ts        # Profils de négociateurs

│   └── questions.ts       # Questions du quiz

# 2. Naviguer dans le dossier├── lib/                   # Logique métier

cd NegoLab│   └── quizLogic.ts       # Calcul des résultats

└── types/                 # Types TypeScript

# 3. Installer les dépendances    └── quiz.ts            # Interfaces et enums

npm install```



# 4. Lancer en développement## 🎨 Personnalisation

npm run dev

### Modifier les Questions

# 5. Ouvrir http://localhost:3000

```Éditez `src/data/questions.ts` pour ajouter ou modifier les questions du quiz.



### Scripts Disponibles### Ajouter de Nouveaux Profils



```bash1. Ajoutez le profil dans `src/types/quiz.ts` (enum `NegotiatorStyle`)

npm run dev      # Démarrer en mode développement2. Définissez les détails dans `src/data/profiles.ts`

npm run build    # Construire pour production3. Mettez à jour la logique de calcul dans `src/lib/quizLogic.ts`

npm start        # Lancer en production

npm run lint     # Vérifier le code### Personnaliser les Couleurs

```

Les couleurs sont définies dans `tailwind.config.ts`. Vous pouvez modifier :

## 📁 Structure du Projet

- Les couleurs primaires et accent

```- Les gradients

NegoLab/- Les animations

├── app/                    # Next.js App Router

│   ├── layout.tsx         # Layout racine avec métadonnées## 📱 Responsive Design

│   ├── page.tsx           # Page principale avec états

│   ├── globals.css        # Styles globaux & animationsL'application est optimisée pour tous les écrans :

│   └── *.{svg,png,ico}    # Icônes & favicons

│- **Mobile** : 320px - 767px

├── components/            # Composants React- **Tablet** : 768px - 1023px

│   ├── WelcomeScreen.tsx # Écran d'accueil premium- **Desktop** : 1024px+

│   ├── QuizScreen.tsx    # Interface du quiz

│   └── ResultScreen.tsx  # Affichage des résultats## ⚡ Performance

│

├── data/                  # Données de l'application- Temps de chargement initial : < 1s

│   ├── profiles.ts       # 5 profils de négociateurs- Animations fluides à 60 fps

│   └── questions.ts      # 10 questions du quiz- Score Lighthouse : 95+

│

├── lib/                   # Logique métier## 🔧 Scripts Disponibles

│   └── quizLogic.ts      # Calcul des résultats

│```bash

├── types/                 # Types TypeScriptnpm run dev      # Serveur de développement

│   └── quiz.ts           # Interfaces & Enumsnpm run build    # Build de production

│npm run start    # Serveur de production

├── public/               # Assets statiquesnpm run lint     # Linter

├── tailwind.config.ts    # Config Tailwind```

├── tsconfig.json         # Config TypeScript

└── vercel.json          # Config déploiement## 📝 License

```

Ce projet est sous licence MIT.

## 🎨 Design System

## 👥 Contribution

### Palette de Couleurs

- **Primary** : Purple 600 → Pink 600Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

- **Accent** : Cyan 500

- **Neutral** : Gray 50-900---

- **Success** : Green 500

- **Warning** : Orange 500Créé avec ❤️ pour améliorer vos compétences en négociation


### Animations
- **Durée** : 300-800ms pour la fluidité
- **Easing** : `easeInOut`, `spring`
- **Performance** : GPU-accelerated, 60fps garantis

## 🚀 Déploiement

### Vercel (Recommandé)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/el-houfi-achraf/NegoLab)

Ou manuellement :

```bash
# 1. Installer Vercel CLI
npm i -g vercel

# 2. Déployer
vercel --prod
```

### Autres Plateformes
- Netlify
- AWS Amplify
- Railway
- Render

Voir `DEPLOIEMENT.md` pour les instructions détaillées.

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créez une branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add AmazingFeature'`)
4. Pushez (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📝 Roadmap

- [ ] 🌍 Internationalisation (FR/EN/AR)
- [ ] 📊 Graphiques radar pour la visualisation
- [ ] 💾 Sauvegarde des résultats (localStorage)
- [ ] 📧 Export PDF des résultats
- [ ] 🎓 Mode coaching avec recommandations
- [ ] 📱 Application mobile (React Native)
- [ ] 🔐 Authentification utilisateur
- [ ] 📈 Dashboard d'administration

## 📄 Licence

Distribué sous licence MIT. Voir `LICENSE` pour plus d'informations.

## 👨‍💻 Auteur

**ACHRAF EL HOUFI**

- GitHub: [@el-houfi-achraf](https://github.com/el-houfi-achraf)
- LinkedIn: [Achraf El Houfi](https://linkedin.com/in/achraf-el-houfi)

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) pour le framework incroyable
- [Tailwind CSS](https://tailwindcss.com/) pour le système de design
- [Framer Motion](https://www.framer.com/motion/) pour les animations
- [Vercel](https://vercel.com/) pour l'hébergement gratuit

---

<div align="center">

**⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !**

Fait avec ❤️ pour améliorer les compétences en négociation

</div>
