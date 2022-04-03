import db from '../db.js';
import bcrypt from 'bcrypt';

class AutoShopController {
  async createCarItem(req, res, next) {
    const { active, price, characteristics, name_car, url_img } = req.body;
    const newPerson = await db.query(
      `INSERT INTO newListItem (active, price, characteristics, name_car, url_img) values($1,$2,$3,$4,$5) RETURNING *`,
      [active, price, characteristics, name_car, url_img],
    );
    res.json(newPerson.rows[0]);
  }
  async getCarItems(req, res, next) {
    try {
      const cars = await db.query(`SELECT * FROM newListItem`);
      const characteristics = await db.query(`SELECT * FROM characteristics`);
      cars.rows.map(
        (el, i) => (el.characteristics = characteristics.rows[el.characteristics_id - 1]),
      );

      res.json(cars.rows);
    } catch (e) {
      res.status(500).json('error');
    }
  }
  async getCarItem(req, res, next) {
    try {
      const id = req.params.id;
      const car = await db.query(`SELECT * FROM newListItem where id = $1`, [id]);
      const characteristics = await db.query(`SELECT * FROM characteristics`);
      car.rows.map(
        (el, i) => (el.characteristics = characteristics.rows[el.characteristics_id - 1]),
      );
      res.json(car.rows);
    } catch (e) {
      res.status(500).json('error');
    }
  }
  async deleteCarItem(req, res, next) {
    const id = req.params.id;
    const user = await db.query(`DELETE FROM newListItem where id = $1`, [id]);
    res.json(user.rows[0]);
  }
  async bindCarItem(req, res) {
    const { characteristics_id } = req.body;
    const id = req.params.id;

    const bind_car_item = await db.query(
      `UPDATE newListItem set characteristics_id = $1 where id = $2 RETURNING *`,
      [characteristics_id, id],
    );
    res.json(bind_car_item.rows[0]);
  }
  async updateCarItem(req, res) {
    const { price, name_car, url_img } = req.body;
    const id = req.params.id;
    const car_item = await db.query(
      `UPDATE newListItem set price = $1, name_car = $2, url_img = $3 where id = $4 RETURNING *`,
      [price, name_car, url_img, id],
    );
    res.json(car_item.rows[0]);
  }
}

export default new AutoShopController();
