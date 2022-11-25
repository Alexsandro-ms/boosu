import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategories(req: Request, res: Response) {
  try {
    const { icon, name } = req.body;
    if (!icon || !name) {
      return res.status(400).json({
        error: 'Name and Icon is required',
      });
    }
    const category = await Category.create({
      icon,
      name,
    });
    res
      .status(201)
      .json({ error: false, message: 'Category has been created!', category });
  } catch (error) {
    res.sendStatus(500);
  }
}
