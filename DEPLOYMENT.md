# Nithiy Decor — Deployment Guide

## AWS Lightsail Setup

### 1. Create Instance

1. Log into AWS Lightsail console
2. Create instance: **Ubuntu 24.04 LTS**, **Micro plan ($7/mo)**
3. Attach a **Static IP** (free with instance)
4. Open ports: **80 (HTTP)**, **443 (HTTPS)**

### 2. Server Setup

SSH into your instance and run:

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Nginx
sudo apt install -y nginx

# Create site directory
sudo mkdir -p /var/www/nithiy-decor
sudo chown -R $USER:$USER /var/www/nithiy-decor

# Copy nginx config
sudo cp nginx.conf /etc/nginx/sites-available/nithiy-decor
sudo ln -s /etc/nginx/sites-available/nithiy-decor /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

### 3. SSL with Let's Encrypt

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d nithiydecor.com -d www.nithiydecor.com
sudo certbot renew --dry-run
```

### 4. DNS Setup

Point your domain's DNS to the Lightsail static IP:
- **A record**: `@` → `<static-ip>`
- **A record**: `www` → `<static-ip>`

Or use Cloudflare for free CDN + SSL:
1. Add site to Cloudflare
2. Update nameservers at registrar
3. Add A records pointing to Lightsail IP
4. Enable proxying (orange cloud)

## GitHub Actions Setup

Add these secrets to your GitHub repository (Settings → Secrets):

| Secret | Value |
|--------|-------|
| `LIGHTSAIL_HOST` | Your Lightsail static IP |
| `LIGHTSAIL_USER` | `ubuntu` |
| `LIGHTSAIL_SSH_KEY` | Ed25519 private key for CI |

Generate a deploy key on the server:

```bash
ssh-keygen -t ed25519 -C "github-deploy" -f ~/.ssh/deploy_key -N ""
cat ~/.ssh/deploy_key.pub >> ~/.ssh/authorized_keys
cat ~/.ssh/deploy_key  # Copy this to GitHub secret
```

## Local Development

```bash
npm install
npm run dev      # Start dev server at http://localhost:4321
npm run build    # Build static site to dist/
npm run preview  # Preview built site locally
```

## Estimated Costs

| Service | Monthly Cost |
|---------|-------------|
| Lightsail Micro | $7 |
| Static IP | Free |
| Let's Encrypt SSL | Free |
| Cloudflare CDN | Free |
| GitHub Actions | Free |
| **Total** | **$7/month** |

First 3 months free on new AWS accounts.
