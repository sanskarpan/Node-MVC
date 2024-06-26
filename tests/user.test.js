const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

describe('User API', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    let token;

    beforeAll(async () => {
        token = jwt.sign({ id: 'testUserId' }, process.env.JWT_SECRET);
    });

    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/worko/user')
            .set('Authorization', `Bearer ${token}`)
            .send({
                email: 'test@example.com',
                name: 'Test User',
                age: 25,
                city: 'Test City',
                zipCode: '12345'
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('email', 'test@example.com');
    });
});
