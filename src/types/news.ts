export interface INews {
  _id?: string;
  title: string;
  content: string;
  isArchived: boolean;
  createdAt: Date;
  archivedAt?: Date;
}

export interface INewsResponse {
  success: boolean;
  data?: INews;
  message?: string;
} 
