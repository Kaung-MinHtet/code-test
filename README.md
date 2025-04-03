# AYA Sompo Insurance - Project Setup Guide

## **1. System Requirements**
Before starting, ensure you have the following installed:
- PHP `>= 8.1`
- Composer `>= 2.0`
- MySQL `>= 5.7`
- Node.js `>= 18`
- NPM or Yarn
- Laravel `10.10`

## **2. Clone the Repository**
```bash
git clone https://github.com/Kaung-MinHtet/code-test.git
cd code-test
```

## **3. Install Dependencies**
### **Backend (Laravel)**
```bash
composer install
```

### **Frontend (Tailwind CSS & Assets)**
```bash
npm install && npm run build
```

## **4. Configure Environment**
Create a `.env` file by copying the example:
```bash
cp .env.example .env
```

## **5. Generate Application Key**
```bash
php artisan key:generate
```

## **6. Run the Application**
```bash
php artisan serve
```
Visit: `http://127.0.0.1:8000`

## **7. Deployment Notes**
- **Set up a web server (Apache/Nginx)** with Laravel configurations.
- **Run database migrations** on the production database.

For further details, refer to the project documentation. 🚀

