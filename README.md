# Sistema de Gestión de Empleados – Node.js

Proyecto personal/educativo desarrollado en **Node.js** que implementa un sistema
de gestión de empleados aplicando **Programación Orientada a Objetos (POO)** y
una **arquitectura por capas**.

El objetivo del proyecto es practicar el diseño de software backend,
la organización del código y el manejo de distintos tipos de usuarios.

---

## 🚧 Estado del proyecto
**En desarrollo (incompleto)**  
El proyecto se encuentra en construcción y algunas funcionalidades
están en proceso de implementación.

---

## 🧠 Conceptos aplicados
- Programación Orientada a Objetos (POO)
- Encapsulamiento con atributos privados
- Herencia y polimorfismo
- Arquitectura por capas:
    - Models
    - Repositories
    - Services
- Separación de responsabilidades
- Hash de contraseñas con **SHA-256**
- Persistencia de datos en archivos **JSON**
- Manejo de colecciones en memoria

---

## 👥 Tipos de usuarios
- Ingenieros
- Supervisores
- Obreros
- Administradores del sistema

Cada tipo de usuario extiende de una clase base común (`Employ`).

---

## ⚙️ Funcionalidades implementadas
- Registro de empleados según su tipo
- Validación para evitar registros duplicados
- Encriptación de contraseñas antes de ser almacenadas
- Cambio de contraseña con validación
- Persistencia de datos en archivos JSON
- Listado de empleados por tipo

---

## 🔜 Funcionalidades pendientes
- Asignación de obreros a supervisores y equipos
- Persistencia usando una base de datos real
- Autenticación y manejo de roles
- Creación de una API REST
- Manejo de errores más robusto
- Pruebas unitarias

---

## 📂 Estructura del proyecto
controllers/
data/
models/
repositories/
services/


---

## 🛠️ Tecnologías utilizadas
- Node.js
- JavaScript (ES6+)
- Módulo `crypto`
- File System (`fs`)

---

## ▶️ Ejecución del proyecto
```bash
node index.js
