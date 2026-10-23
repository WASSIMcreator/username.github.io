# NOVA CARE — boutique statique

Boutique responsive en français / arabe, conçue pour présenter des produits de beauté, de soin et des compléments alimentaires. Elle fonctionne sans base de données et peut être publiée sur GitHub Pages.

## Avant de publier

1. **Configurez WhatsApp** : ouvrez `app.js` et remplacez `WHATSAPP_NUMBER: "2126XXXXXXXX"` par votre numéro marocain au format international, sans `+`, espaces ni tirets (ex. `2126...`).
2. **Remplacez les produits de démonstration** : modifiez le tableau `PRODUCTS` dans `app.js` avec les références réellement disponibles chez Marque Online et vos autres fournisseurs.
3. **Vérifiez les prix** : tous les prix actuels sont des exemples et ne viennent pas du fournisseur. Fixez votre prix de vente et votre marge.
4. **Ajoutez les vraies photos** : les visuels des produits sont des illustrations CSS temporaires. Pour un résultat de vente, utilisez les photos de vos références réelles et les informations autorisées par le fournisseur.
5. **Renseignez les modalités** : confirmez avant publication les frais et délais de livraison, les zones desservies, les conditions de retour et votre politique de confidentialité. Ne promettez pas un service qui n'est pas réellement assuré.
6. Vérifiez les références, étiquettes et allégations de santé/cosmétique applicables avant de mettre en vente les produits.

## Ce qui fonctionne déjà

- Mise en page adaptative ordinateur / téléphone.
- Interface française et arabe (bouton `AR` / `FR`) avec direction RTL en arabe.
- Filtres par catégorie et recherche de produits.
- Panier avec ajout, suppression, quantités et sauvegarde locale dans le navigateur.
- Formulaire de commande qui prépare un message WhatsApp avec les lignes du panier et les coordonnées du client.
- FAQ et sections de présentation.

## Publication sur GitHub Pages

1. Décompressez le dossier et créez un dépôt GitHub (par exemple `nova-care-store`).
2. Téléversez les fichiers `index.html`, `style.css`, `app.js` et `favicon.svg` à la racine du dépôt.
3. Ouvrez **Settings → Pages** sur GitHub, sélectionnez **Deploy from a branch**, puis `main` et `/ (root)` et enregistrez.
4. Quand GitHub a terminé, ouvrez l'URL Pages affichée dans cette section.

## Limites à connaître

C'est une boutique front-end statique : elle n'a pas de base de données, de paiement en ligne, de gestion de stock, ni de panneau administrateur. Une commande est préparée pour WhatsApp et doit être confirmée manuellement. Les commandes n'arriveront pas tant que le numéro WhatsApp n'est pas configuré.
