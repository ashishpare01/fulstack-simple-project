# **📝 Createath - Full Stack Challenge Management System**

Createath is a full-stack challenge management system built using:
- **Frontend:** Vite + React
- **Backend:** Django + Django REST Framework

This project allows users to explore coding challenges categorized by difficulty, points, and other metrics. It is designed to be fast, responsive, and interactive.

---

## **📁 Project Structure**
```
backend/               # Django Backend
│   ├── api/           # Django REST API
│   ├── challenges/    # Challenge Management
│   ├── progress/      # User Progress Tracking
│   ├── users/         # Custom User Model
│   ├── db.sqlite3     # SQLite Database
│   └── manage.py      # Django Management Script
└── frontend/           # Vite + React Frontend
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   └── ChallengeList.jsx
    │   └── App.jsx
    │   └── main.jsx
    └── index.html
```

---

## **📋 Prerequisites**
Before you begin, make sure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** or **yarn**
- **Python** (version 3.8 or higher)
- **Django** and **Django REST Framework**

---

## **🚀 Getting Started**

### **1. Clone the Repository**
```sh
git clone https://github.com/your-username/createath.git
cd createath
```

---

## **🔧 Backend Setup (Django)**

### **2. Create a Virtual Environment**  
```sh
cd backend
python -m venv venv
source venv/bin/activate    # On Windows use: venv\Scripts\activate
```

### **3. Install Backend Dependencies**  
```sh
pip install -r requirements.txt
```

### **4. Apply Migrations**  
```sh
python manage.py makemigrations
python manage.py migrate
```

### **5. Create Superuser (Optional)**
```sh
python manage.py createsuperuser
```

### **6. Run the Django Server**  
```sh
python manage.py runserver
```
Backend will be running at: **http://127.0.0.1:8000**

---

## **🌐 Frontend Setup (Vite + React)**

### **7. Navigate to Frontend Directory**
```sh
cd ../frontend
```

### **8. Install Frontend Dependencies**  
```sh
npm install
```

### **9. Start the Frontend Development Server**  
```sh
npm run dev
```
Frontend will be running at: **http://127.0.0.1:5173**

---

## **⚙️ Configuration**

### **10. Proxy Setup for API Requests**  
Add the following to `vite.config.js`:

```js
server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
```

### **11. CORS Configuration in Django**  
Add the following in `backend/settings.py`:

```python
INSTALLED_APPS = [
    ...,
    'corsheaders',
    'rest_framework',
]

MIDDLEWARE = [
    ...,
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]

CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',
]
```

---

## **📦 Production Build**

### **12. Build Frontend for Production**  
```sh
npm run build
```

### **13. Collect Static Files in Django**  
```sh
python manage.py collectstatic
```

---

## **🛠️ Useful Commands**
- **Start Development Server:** `npm run dev`
- **Build for Production:** `npm run build`
- **Run Django Server:** `python manage.py runserver`

---

## **📚 Tech Stack**
- **Frontend:** Vite + React, React Router, Axios
- **Backend:** Django, Django REST Framework
- **Database:** SQLite (Development), PostgreSQL (Production-ready)

---

## **🎨 UI Features**
- Responsive **Navbar** with routing
- Interactive **Challenges List**
- Clean and modern design with Tailwind CSS / Custom CSS

---

## **👨‍💻 Contributors**
- **Your Name** - *Ashish Bhagwan Pare*  
- **Your Company** - *Persist Ventures*

---

## **📜 License**
This project is licensed under the **MIT License**.
