import request from "supertest"
import app from "./server"

describe('Start Test', () => {
    describe('GET /add', () => {
      test('responds with json', async () => {
        await request(app)
          .get('/add')
          .expect(200)
      });
    });
});