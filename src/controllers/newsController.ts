import { Request, Response } from 'express';
import News from '../models/News';
import { INews } from '../types/news';

export const getAllNews = async (req: Request, res: Response): Promise<void> => {
  try {
    const news = await News.find({ isArchived: false }).sort({ createdAt: -1 });
    res.json({
      success: true,
      data: news
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching news'
    });
  }
};

export const getArchivedNews = async (req: Request, res: Response): Promise<void> => {
  try {
    const news = await News.find({ isArchived: true }).sort({ archivedAt: -1 });
    res.json({
      success: true,
      data: news
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching archived news'
    });
  }
};

export const createNews = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, content } = req.body;
    const news = new News({ title, content });
    await news.save();
    res.status(201).json({
      success: true,
      data: news
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating news'
    });
  }
};

export const archiveNews = async (req: Request, res: Response): Promise<void> => {
  try {
    const news = await News.findById(req.params.id);
    if (!news) {
      res.status(404).json({
        success: false,
        message: 'News not found'
      });
      return;
    }
    news.isArchived = true;
    news.archivedAt = new Date();
    await news.save();
    res.json({
      success: true,
      data: news
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error archiving news'
    });
  }
};

export const deleteNews = async (req: Request, res: Response): Promise<void> => {
  try {
    const news = await News.findByIdAndDelete(req.params.id);
    if (!news) {
      res.status(404).json({
        success: false,
        message: 'News not found'
      });
      return;
    }
    res.json({
      success: true,
      message: 'News deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting news'
    });
  }
}; 
