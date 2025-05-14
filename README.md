# Product Store

โปรเจกต์นี้คือแอปพลิเคชันเว็บแบบเต็มรูปแบบ (Full-stack web application) ที่พัฒนาด้วย MERN stack (MongoDB, Express, React, Node.js) เพื่อจัดการข้อมูลสินค้าอย่างง่าย มีฟังก์ชัน CRUD (Create, Read, Update, Delete) สำหรับสินค้า

## คุณสมบัติหลัก

* แสดงรายการสินค้าทั้งหมด
* เพิ่มสินค้าใหม่
* แก้ไขข้อมูลสินค้าที่มีอยู่
* ลบสินค้า
* สลับธีม (Light/Dark Mode) บนส่วนหน้าบ้าน (Frontend)

## เทคโนโลยีที่ใช้

**Backend:**

* Node.js
* Express.js
* MongoDB (via Mongoose)

**Frontend:**

* React
* Chakra UI (สำหรับ components และ styling)
* React Router DOM (สำหรับ routing)
* Zustand (สำหรับ State Management)

## การติดตั้งและเรียกใช้งาน

ทำตามขั้นตอนเหล่านี้เพื่อตั้งค่าและเรียกใช้งานโปรเจกต์บนเครื่องของคุณ:

1.  **Clone repository:**
    ```bash
    git clone <URL ของ Repository ของคุณ>
    cd <ชื่อโฟลเดอร์โปรเจกต์>
    ```

2.  **ติดตั้ง Dependencies:**
    * เข้าสู่โฟลเดอร์ backend และติดตั้ง packages:
        ```bash
        cd backend
        npm install
        # หรือ yarn install
        ```
    * เข้าสู่โฟลเดอร์ frontend และติดตั้ง packages:
        ```bash
        cd ../frontend
        npm install
        # หรือ yarn install
        ```

3.  **ตั้งค่า Environment Variables:**
    * สร้างไฟล์ `.env` ในโฟลเดอร์ `backend`
    * เพิ่ม Connection String ของ MongoDB ของคุณลงในไฟล์ `.env` เช่น:
        ```env
        MONGODB_URI=<your_mongodb_connection_string>
        ```

4.  **เรียกใช้งาน Backend Server:**
    * อยู่ในโฟลเดอร์ `backend`
    * เรียกใช้ server:
        ```bash
        npm start
        # หรือ yarn start
        ```
    * เซิร์ฟเวอร์จะทำงานที่ `http://localhost:5000` (หรือพอร์ตที่คุณตั้งค่าไว้)

5.  **เรียกใช้งาน Frontend Application:**
    * อยู่ในโฟลเดอร์ `frontend`
    * เรียกใช้แอปพลิเคชัน React:
        ```bash
        npm start
        # หรือ yarn start
        ```
    * แอปพลิเคชันจะเปิดขึ้นในเบราว์เซอร์ที่ `http://localhost:3000`

## API Endpoints (Backend)

Backend จัดการ API สำหรับทรัพยากรสินค้า (`/api/products`)

* `GET /api/products`: ดึงรายการสินค้าทั้งหมด
* `POST /api/products`: สร้างสินค้าใหม่ (ต้องส่งข้อมูลสินค้าใน body ของ request)
* `PUT /api/products/:id`: อัปเดตสินค้าที่มี ID ที่ระบุ (ต้องส่งข้อมูลสินค้าที่อัปเดตใน body ของ request)
* `DELETE /api/products/:id`: ลบสินค้าที่มี ID ที่ระบุ

## Frontend Routes

ส่วนหน้าบ้านมี route หลักดังนี้:

* `/`: หน้าแรก แสดงรายการสินค้าทั้งหมด (`HomePage`)
* `/create`: หน้าสำหรับเพิ่มสินค้าใหม่ (`CreatePage`)
