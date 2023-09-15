# example-nestjs-microservices
ตัวอย่างการใช้งาน Microservices ของ NestJS

## วิธีการใช้งาน
`cd` เข้าทุก folder จากนั้น `run` ทุก folder พร้อมกัน โดยแต่ละ folder จะมี `PORT` ตามด้านล่าง
- gateway:  เป็น `Client` ใช้ `PORT 3000`
- payment:  เป็น `Auth Service` ใช้ `PORT 3001`
- order:  เป็น `Order Service` ใช้ `PORT 3002`
- cart:  เป็น `User Service` ใช้ `PORT 3003`