<h1 align="center">🛵 Domisys</h1>

<p align="center">
  Sistema moderno, rápido y eficiente para gestionar domicilios, pedidos, productos y repartidores desde un dashboard limpio, escalable y potente.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Estado-En%20desarrollo-yellow?style=flat-square" />
  <img src="https://img.shields.io/badge/Frontend-React%20%2B%20Vite-informational?style=flat-square&logo=react" />
  <img src="https://img.shields.io/badge/Backend-Laravel-red?style=flat-square&logo=laravel" />
</p>

---

## ⚠️ Nota

> 🏗️ Este proyecto **aún se encuentra en desarrollo activo**. Algunas funcionalidades están sujetas a cambios y mejoras.

---

## 🧠 ¿Qué es Domisys?

**Domisys** es un sistema de gestión de pedidos a domicilio diseñado para negocios que desean optimizar su operación diaria.  
Con un enfoque moderno, minimalista y funcional, Domisys permite controlar pedidos, usuarios, inventario y repartidores desde una sola plataforma.

<p align="center">
  <img src="https://user-images.githubusercontent.com/51321378/223872093-405eb89e-fbb1-4c43-b0b3-1845b1e2a4b5.gif" width="600" alt="Vista previa del dashboard animada" />
</p>

---

## 🚀 Stack Tecnológico

| Tecnología        | Rol                            |
|------------------|---------------------------------|
| **React + Vite** | Frontend rápido y modular       |
| **HeroUI**       | Componentes visuales accesibles |
| **Zustand**      | Manejo global del estado        |
| **Laravel**      | Backend API RESTful             |
| **MySQL**        | Base de datos relacional        |
| **Turborepo**    | Monorepo para apps y backend    |

---

## 🧩 Arquitectura del Proyecto

Estructura organizada en un **monorepo**:

```bash
domisys/
│
├── apps/
│   ├── landing/        → Landing page pública
│   └── dashboard/      → Panel para cliente, repartidor y admin
│
├── backend/            → API Laravel (PHP)
├── turbo.json          → Configuración del monorepo
└── README.md
```

<p align="center">
  <img src="https://user-images.githubusercontent.com/20955511/109414573-58994d00-79b3-11eb-8b49-85a6ed06539d.png" width="500" alt="Ilustración de arquitectura del proyecto" />
</p>

---

## 🌟 Características principales

- 🧠 Arquitectura basada en features
- 🛡️ Autenticación por roles
- 🛍️ Gestión de productos e inventario
- 📦 Visualización y control de pedidos activos
- 🧾 Historial global o por usuario
- 🧑‍✈️ Asignación de repartidores
- 🎨 UI moderna, responsiva y accesible
- ⚡️ Desempeño rápido y código limpio

---

## 👥 Roles y funcionalidades

| Rol           | Descripción                                                                 |
|---------------|------------------------------------------------------------------------------|
| **Admin**     | Control total del sistema: productos, pedidos, historial global, usuarios.  |
| **Cliente**   | Visualiza productos, hace pedidos, usa el carrito y ve su historial.         |
| **Repartidor**| Accede a los pedidos activos que le fueron asignados y marca entregas.      |

Cada rol accede a una **vista personalizada** dentro del dashboard, optimizada para su flujo de trabajo.

---

## 🛠️ Instalación y ejecución local

### Requisitos

- Node.js >= 18  
- PHP >= 8.1  
- Composer  
- MySQL  
- PNPM

### Pasos

```bash
# 1. Clona el repo
git clone https://github.com/tuusuario/domisys.git
cd domisys

# 2. Instala frontend
pnpm install

# 3. Ejecuta el dashboard (cliente, repartidor, admin)
pnpm dev --filter dashboard

# (Opcional) Ejecuta la landing
pnpm dev --filter landing

# 4. Configura el backend Laravel
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

---

## 🖼️ Screenshots

<p align="center">
  <img src="https://domisys.vercel.app/images/hero.webp" width="400" alt="Vista del cliente" />
  <img src="https://domisys.vercel.app/images/hero.webp" width="400" alt="Vista del admin" />
  <img src="https://domisys.vercel.app/images/hero.webp" width="400" alt="Vista del repartidor" />
</p>

---

## ⚒️ Arquitectura por features

```bash
apps/dashboard/src/
├── features/
│   ├── auth/
│   ├── orders/
│   ├── products/
│   ├── delivery/
│   ├── inventory/
│   └── users/
├── shared/
│   ├── components/
│   ├── hooks/
│   └── utils/
└── App.tsx
```
