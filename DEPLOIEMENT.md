# 🚀 Guide de Déploiement sur Vercel

## Méthode 1 : Via l'Interface Web (Recommandé pour la première fois)

### Étape 1 : Préparer votre projet

Votre projet est déjà prêt ! Les fichiers de configuration ont été créés automatiquement.

### Étape 2 : Créer un repository Git (si pas déjà fait)

```bash
git init
git add .
git commit -m "Initial commit - NegoLab"
```

### Étape 3 : Pousser sur GitHub

1. Créez un nouveau repository sur GitHub : https://github.com/new
2. Nommez-le "negolab" ou "NegoLab"
3. Suivez les instructions pour pousser votre code :

```bash
git remote add origin https://github.com/VOTRE_USERNAME/negolab.git
git branch -M main
git push -u origin main
```

### Étape 4 : Déployer sur Vercel

1. Allez sur **https://vercel.com**
2. Cliquez sur **"Sign Up"** ou **"Login"** avec GitHub
3. Cliquez sur **"Add New..."** → **"Project"**
4. Sélectionnez votre repository **"negolab"**
5. Vérifiez la configuration :
   - **Framework Preset**: Next.js (détecté automatiquement)
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
6. Cliquez sur **"Deploy"** 🚀

### Étape 5 : Attendez le déploiement

- La construction prend environ 1-2 minutes
- Vous recevrez une URL comme : `https://negolab.vercel.app`

---

## Méthode 2 : Via Vercel CLI (Plus rapide)

### Installation de Vercel CLI

```bash
npm install -g vercel
```

### Déploiement

```bash
# Dans le dossier du projet
vercel

# Pour déployer en production directement
vercel --prod
```

### Commandes lors du déploiement

Répondez aux questions :

- **Set up and deploy?** → Y (yes)
- **Which scope?** → Votre compte personnel
- **Link to existing project?** → N (no, nouveau projet)
- **Project name** → negolab
- **Directory** → ./ (racine)
- **Override settings?** → N (non, utiliser les defaults)

---

## ✅ Après le Déploiement

Votre application sera accessible sur :

- **URL de production** : `https://negolab.vercel.app` (ou votre domaine personnalisé)
- **URL de preview** : Pour chaque commit/branch

### Fonctionnalités Automatiques

- ✅ Déploiement automatique à chaque push sur `main`
- ✅ Preview deployments pour les pull requests
- ✅ HTTPS automatique
- ✅ CDN global
- ✅ Optimisation des performances Next.js

---

## 🔧 Configuration Optionnelle

### Ajouter un domaine personnalisé

1. Dans Vercel Dashboard → Settings → Domains
2. Ajoutez votre domaine (ex: negolab.com)
3. Suivez les instructions DNS

### Variables d'environnement

Si vous ajoutez des API keys plus tard :

1. Vercel Dashboard → Settings → Environment Variables
2. Ajoutez vos variables
3. Redéployez

---

## 📊 Monitoring

Vercel fournit automatiquement :

- Analytics
- Logs en temps réel
- Métriques de performance
- Core Web Vitals

Accédez-y via le Dashboard Vercel après le déploiement.

---

## 🎯 Résultat Final

Votre application NegoLab sera :

- ⚡ Ultra-rapide (optimisée par Vercel)
- 🌍 Distribuée mondialement
- 🔒 Sécurisée avec HTTPS
- 📈 Scalable automatiquement

**Bon déploiement !** 🚀
